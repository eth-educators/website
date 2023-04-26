let params = getQueryParameters();
let redirectRoot = "https%3A%2F%2Frhinoreview.substack.com";

// If url param and starts with redirect root, then redirect, otherwise clear params 
if ("url" in params && params.url.startsWith(redirectRoot)) {
  let url = decodeURIComponent(params.url);
  window.location.replace(url);
} else {
  let url = window.location.href.split("?")[0];
  window.history.replaceState(null, "", url);
}

// Gets the url parameters
function getQueryParameters() {
  try {
    let queryString = location.search.slice(1), params = {};
    queryString.replace(/([^=]*)=([^&]*)&*/g, (_, key, value) => {
      params[key] = value;
    });
    return params;
  } catch {
    return null;
  }
}
