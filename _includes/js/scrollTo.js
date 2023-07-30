{%- comment -%}
// Scrolls to element with optional offset
{%- endcomment -%}

function scrollToElement(id, offset=0) {
  const div = document.getElementById(id);
  const yOffset = div.getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({top: yOffset, behavior: 'smooth'});
}
