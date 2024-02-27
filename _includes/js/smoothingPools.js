window.onload = getSmoothingPoolData().then(updateTable);

// Fetch the latest data
async function getSmoothingPoolData() {
  const url = "https://raw.githubusercontent.com/hanniabu/ethstaker-actions/main/_data/smoothing-pools-processed.json";
  return await fetch(url).then(response => response.json());
}

function updateTable(data) {
  // data = {
  //   "smooth": {validators_active: 906, validators_pending: 6, validators_total: 912},
  //   "smoothly": {validators_active: 10, validators_pending: 43, validators_total: 53}
  // }
  document.getElementById("smooth").innerHTML = `${data.smooth.validators_active} active, ${data.smooth.validators_pending} pending, ${data.smooth.validators_total} total`;
  document.getElementById("smoothly").innerHTML = `${data.smoothly.validators_active} active, ${data.smoothly.validators_pending} pending, ${data.smoothly.validators_total} total`;
}

