import utilities
import json


script_id = "smoothing_pools"



def get_smooth_data():
  if utilities.use_test_data:
    response = {'status': 200, 'attempts': 1, 'data': {"total_subscribed_validators":550,"total_active_validators":545,"total_yellowcard_validators":5,"total_redcard_validators":0,"total_banned_validators":6,"total_notsubscribed_validators":42,"latest_checkpoint_slot":8378993,"next_checkpoint_slot":8407793,"total_accumulated_rewards_wei":"5492187571739729067","total_pending_rewards_wei":"26632826481114096934","total_rewards_sent_wei":"28378168778057702925","total_rewards_sent_30days_wei":"21248332054296665781","rewards_per_validator_per_30days_wei":"38633331007812119","total_donations_wei":"5335484726961771065","avg_block_reward_wei":"128408003520623090","total_proposed_blocks":222,"total_missed_blocks":6,"total_wrongfee_blocks":6}}
    utilities.log(response, context=f"{script_id}__get_smooth_data")
    return response
  else:
    url = "https://smooth.dappnode.io/api/memory/statistics"
    response = utilities.fetch(url, "GET", context=f"{script_id}__get_smooth_data")
    return response

def process_smooth_data(raw_data):
  active = raw_data["total_active_validators"]
  total = raw_data["total_subscribed_validators"]
  pending = total - active;
  results = {"source":"smooth", "active":active, "pending":pending, "total":total}
  print(results)
  return results



def get_smoothly_data():
  if utilities.use_test_data:
    response = {'status': 200, 'attempts': 1, 'data': {"ok":True,"data":{"awaiting_activation":45,"activated":5,"total_rewards":{"type":"BigNumber","hex":"0x0b0663b6a6aed8f2"},"total_stake":{"type":"BigNumber","hex":"0x015af1d78b58c40000"},"total_value_period":{"type":"BigNumber","hex":"0x04a1237d4867696e"},"total_miss":0,"total_fee":0}}}
    utilities.log(response, context=f"{script_id}__get_smoothly_data")
    return response
  else:
    url = "https://app.smoothly.money/poolstats"
    response = utilities.fetch(url, "GET", context=f"{script_id}__get_smoothly_data")
    return response

def process_smoothly_data(raw_data):
  active = raw_data["data"]["activated"]
  pending = raw_data["data"]["awaiting_activation"]
  total = active + pending
  results = {"source":"smoothly", "active":active, "pending":pending, "total":total}
  print(results)
  return results


def save_smoothing_pool_data(smooth_subs, smoothly_subs):
  smoothing_pool_data = utilities.read_file(f"_data/smoothing-pools.yml", file_type="yaml")
  smoothing_pool_data["smooth"]["validators_active"] = smooth_subs["active"]
  smoothing_pool_data["smooth"]["validators_pending"] = smooth_subs["pending"]
  smoothing_pool_data["smooth"]["validators_total"] = smooth_subs["total"]
  smoothing_pool_data["smoothly"]["validators_active"] = smoothly_subs["active"]
  smoothing_pool_data["smoothly"]["validators_pending"] = smoothly_subs["pending"]
  smoothing_pool_data["smoothly"]["validators_total"] = smoothly_subs["total"]
  utilities.save_to_file(f"/_data/smoothing-pools-processed.json", smoothing_pool_data, context=f"{script_id}__save_smoothing_pool_data")



def update_smoothing_pool_data():
  raw_smooth_data = get_smooth_data()
  raw_smoothly_data = get_smoothly_data()
  if (raw_smooth_data["status"] == 200 and raw_smoothly_data["status"] == 200):
    smooth_subs = process_smooth_data(raw_smooth_data["data"])
    smoothly_subs = process_smoothly_data(raw_smoothly_data["data"])
    save_smoothing_pool_data(smooth_subs, smoothly_subs)
  else: 
    error = f"Bad response"
    utilities.log(f"{error}: {metric_id}_{data_source}")
    utilities.report_error(error, context=f"{script_id}__update_smoothing_pool_data")
    return

