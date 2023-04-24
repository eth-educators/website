{%- comment -%}
// Enables tooltips

// Usage:
// <span data-bs-toggle="tooltip" data-bs-placement="top" title="Copied!" data-bs-trigger="click">
//   {{site.data.icons.info}}
// </span>
{%- endcomment -%}

// Enable tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
