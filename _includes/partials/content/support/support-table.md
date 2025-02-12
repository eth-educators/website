{%- comment -%}
<!-- 
The EthStaker data is hardcoded, 
everything else is pulled from _data/clients.yml
-->
{%- endcomment -%}

<style type="text/css">
  table .logo {
    width: 1rem;
  }
</style>


{:class="nonresponsive"}
Community  | Docs | Support
-----------|------|----------
<img class='d-inline logo m-0 me-2' src='/assets/img/projects/ethstaker.svg'> EthStaker | [{{site.data.icons.docs}}](https://kb.ethstaker.org) | [Discord](https://dsc.gg/ethstaker) , [Reddit](https://reddit.com/r/ethstaker)
{%- for client in site.data.clients -%}
  {%- comment -%}
  <!-- LOGO LOGIC -->
  {%- endcomment -%}
    {%- assign logo = "/assets/img/projects/ethereum.png" -%}
    {%- if client.img -%}
      {%- assign logo = client.img -%}
    {%- endif -%}
    {%- assign image = "<img class='d-inline logo m-0 me-2' src='" | append: logo | append: "'>" -%}
  {%- comment -%}
  <!-- DOCUMENTATION LINK LOGIC -->
  {%- endcomment -%}
    {%- assign docs = "-" -%}
    {%- if client.docs -%}
      {%- assign docs = client.docs -%}
    {%- endif -%}
    {%- assign docs_link = docs | exlink: site.data.icons.docs -%}
  {%- comment -%}
  <!-- SUPPORT LINK LOGIC -->
  {%- endcomment -%}
    {%- assign chat_name = "" -%}
    {%- if client.chat -%}
      {%- assign chat_name = "Discord" -%}
    {%- endif -%}
    {%- if client.chat contains "reddit" -%}
      {%- assign chat_name = "Reddit" -%}
    {%- endif -%}
    {%- if client.chat contains "t.me" -%}
      {%- assign chat_name = "Telegram" -%}
    {%- endif -%}
  {%- comment -%}
  <!-- FINAL OUTPUT -->
  {%- endcomment %}
  {{image}} {{client.name}} | {{docs_link}} | [{{chat_name}}]({{client.chat}})
{%- endfor -%}
