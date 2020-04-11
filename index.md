<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="./webtexParser.js"></script>
<script src="./mathjaxConfig.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

# ThunderSmotch's WebTex to HTML Parser

This library/website provides a way to convert WebTex files to MathJax HTML ready pages.

**What is WebTex?** 
It's simply a Latex file with some extra custom commands that the parser converts into several custom HTML tags.

[Click here](./convert) to upload and convert local files from WebTex to HTML and vice versa.

## Examples of custom tags:

### The spoiler environment
The following Latex code:
```
\begin{spoiler}[Title]
\[E = mc^2\]
\end{spoiler}
```
when converted to HTML will result in the following clickable element:
<details>
<summary>Title</summary>
<div>
\[E = mc^2\]
</div>
</details>
Which renders equations using the MathJax library.

<script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>	