# extracts addresses from solo staker list and save as _data/solo-staker-addresses.json
# _data/solo-staker-addresses.json is actually a string but named json so it's readable by jekyll

# place solo staker list in the _data/ folder and rename solo_staker_list_path as needed
# run script with `python3 _includes/tools/solo-staker-addresses.py`

import os
import csv

repo_root = os.path.abspath(__file__ + '/../../../')
solo_staker_list_path = repo_root + '/_data/solo-staker-list-v2.csv'
solo_staker_addresses_path = repo_root + '/_data/solo-staker-addresses.json'
solo_staker_list_file = csv.DictReader(open(solo_staker_list_path))
solo_staker_addresses_set = set()
solo_staker_addresses_string = None

# headers
# ['deposit_address', 'confidence_solo', 'assoc_deposit_address_validators', 'assoc_withdrawal_address_validators', 'total_incoming_txs', 'total_outgoing_txs', 'eth_in', 'eth_out', 'incoming_addresses', 'outgoing_addresses', 'network', 'ips', 'tags', 'avg_raver', 'std_raver', 'earliest_tx_date', 'address_age', 'cluster_id', 'cluster_size', 'withdrawal_addresses']
for i, row in enumerate(solo_staker_list_file):
   if i > 0: # skip headers
      solo_staker_addresses_set.add(row['deposit_address'].lower())
      withdrawal_addresses = row['withdrawal_addresses'].replace('[','').replace(']','').replace(' ','').split(',')
      for address in withdrawal_addresses:
         solo_staker_addresses_set.add(address.lower())

# save address string to file
solo_staker_addresses_string = f"'{''.join(solo_staker_addresses_set)}'"
with open(solo_staker_addresses_path, "w") as solo_staker_addresses_file:
   solo_staker_addresses_file.write(solo_staker_addresses_string)


# print(solo_staker_addresses_string)
print(f"{len(solo_staker_addresses_set)} addresses")

