---
---
{%- assign site_env = "Environment: " | append: site.environment -%}
{%- assign is_dev = false -%}
{%- if site.environment == "development" -%}
  {%- assign is_dev = true -%} 
{%- endif -%}

let dev = {{is_dev | jsonify}};
function log(msg) {
  if (dev) {
    console.log(msg);
  }
}
log(`{{site_env | print}}`);
