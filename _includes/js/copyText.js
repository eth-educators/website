{%- comment -%}
// Requires tooltips.js
// 
// Usage:
// <a id="copy-5" class="copy-link-icon" 
// onclick="copyText('cd $HOME', this.id)"
// data-bs-toggle="tooltip" data-bs-placement="top" title="Copied!" data-bs-trigger="click">
//   {{site.data.icons.link}}
// </a>
{%- endcomment -%}

function copyText(copiedText, id) {
  navigator.clipboard.writeText(copiedText).then(function() {
    let tooltipElement = document.getElementById(id);
    let tooltip = bootstrap.Tooltip.getInstance(tooltipElement);
    setTimeout(() => { tooltip.hide(); }, 1000);
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
