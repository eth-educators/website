{:class="table mb-4"}
Item | Component  | Product | Notes | Setup
-----|------------|---------|-------|------
{% for component in site.data.hardware %}
  {%- capture product_link -%}
    {%- if component.index == 1 -%}
      {{component.products[0].name}}
    {%- else -%}
      {%- for product in component.products -%}
<a class="d-block product_{{product.id}}" href="{{product.link}}">{{product.name}} (${{product.price}})</a>
      {%- endfor -%}
<span class="d-none text-danger component_{{component.name | md5}}">Not available — out of stock</span>
    {%- endif -%}
  {%- endcapture -%}
  {%- capture notes -%}
    {%- if component.minimum -%}
      {{component.usage}}, {{component.minimum}}
    {%- else -%}
      {{component.usage}}
    {%- endif -%}
  {%- endcapture -%}
  {%- assign guide = "-" -%}
  {%- if component.guide -%}
    {%- assign guide = component.guide -%}
    {%- capture guide -%}
      [Guide]({{component.guide}})
    {%- endcapture -%}
  {%- endif -%}
  {{component.index}} | {{component.name}} | {{product_link}} | {{notes | titlecase}} | {{guide}}
{% endfor %}
