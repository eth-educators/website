---
layout: markdown
title: Example Post
# permalink: /posts/custom-example-post-permalink/

header: Example Post
subheader: Bibendum ut tristique et egestas.
---


This is an example to show markdown markup and frontmatter structure used for posts.



**Markdown Examples:**

---

# H1

## H2

### H3

#### H4

##### H5

###### H6

[link](/)

**bold text**

*italic text*

__*bold and italic text*__

`inline code`

```
code block
```

- this is an
- unordered
    - list

1. this is an
1. ordered
    1. list

header 1      | header 2
--------------|--------------
row 1, cell 1 | row 1, cell 2
row 2, cell 1 | row 2, cell 2
row 3, cell 1 | row 3, cell 2

<details markdown="1">
<summary>Expandable content</summary>
Peek a boo!

- I
  - see
    - you

```
code block
```
</details>


![](/assets/img/logo-black.svg)

{:class="caption"}
this is an image caption


{% include partials/components/callout.html 
  type="info"
  title="Info Callout"
  content="This is a callout element."
%}

{% include partials/components/callout.html 
  type="warning"
  title="Warning Callout"
  content="This is a callout element."
%}

{% include partials/components/callout.html 
  type="danger"
  title="Danger Callout"
  content="This is a callout element."
%}


###### Small button:
{% include partials/components/button.html
  link="https://example.com"
  text="View test link"
  size="sm"
%}

###### Normal button:
{% include partials/components/button.html
  link="https://example.com"
  text="View test link"
%}

###### Large button:
{% include partials/components/button.html
  link="https://example.com"
  text="View test link"
  size="lg"
%}



