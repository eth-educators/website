import utilities
from smoothing_pools import update_smoothing_pool_data



def run_app():
  update_smoothing_pool_data()


run_app()
print(f"Error count: {utilities.error_count}")

