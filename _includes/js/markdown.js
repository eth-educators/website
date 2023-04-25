{%- comment -%}
// Sets up markdown content
{%- endcomment -%}

// Add classes to markdown content
document.querySelectorAll("table")
  .forEach( x=> {
    x.classList.add("table");
    x.classList.add("table-bordered");
  });

// Wrap tables in .table-responsive element
document.querySelectorAll("table")
  .forEach( x=> {
    // Create wrapping element
    let wrapper = document.createElement('div');
    wrapper.className = "table-responsive mx-auto";
    // Insert wrapper before el in the DOM tree
    x.parentNode.insertBefore(wrapper, x);
    // Move el into wrapper
    wrapper.appendChild(x);
  });

// Add copy links to headers
function copyHeaderLink(anchor, id) {
  let pageUrl = window.location.href.split("#")[0].split("?")[0];
  let headingUrl = pageUrl + anchor;
  navigator.clipboard.writeText(headingUrl).then(function() {
    let tooltipElement = document.getElementById(id);
    let tooltip = bootstrap.Tooltip.getInstance(tooltipElement);
    setTimeout(() => { tooltip.hide(); }, 1000);
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

let headingSelector = ".markdown-aos > h2, .markdown-aos > h3, .markdown-aos > h4";
document.querySelectorAll(headingSelector)
  .forEach( x=> {
    x.innerHTML += ` <a id="${x.id}-link" 
      class="copy-link-icon" 
      onclick="copyHeaderLink('#${x.id}', this.id)" 
      data-bs-toggle="tooltip" 
      data-bs-placement="top" 
      data-bs-trigger="click" 
      aria-label="Copied!" 
      data-bs-original-title="Copied!" 
      target="_self">{{site.data.icons.link}}</a>`
  });
