(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{670:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"docs-build-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docs-build-workflow"}},[e._v("#")]),e._v(" Docs Build Workflow")]),e._v(" "),a("p",[e._v("The documentation for the go-vite is hosted at https://docs.vite.org/go-vite")]),e._v(" "),a("p",[e._v("Built from the files in this ("),a("code",[e._v("/docs")]),e._v(") directory for\n"),a("a",{attrs:{href:"https://github.com/vitelabs/go-vite/tree/master/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("master"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How It Works")]),e._v(" "),a("p",[e._v("We use github action for docs deploy. Every time you push code to github, if some changes is happen on "),a("code",[e._v("docs/**")]),e._v(". It will auto deploy to https://docs.vite.org/go-vite/")]),e._v(" "),a("h2",{attrs:{id:"readme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readme"}},[e._v("#")]),e._v(" README")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/"}},[e._v("README.md")]),e._v(" is also the landing page for the documentation\non the website.")],1),e._v(" "),a("h2",{attrs:{id:"config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-js"}},[e._v("#")]),e._v(" Config.js")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"./.vuepress/config.js"}},[e._v("config.js")]),e._v(" generates the sidebar and Table of Contents\non the website docs.")]),e._v(" "),a("p",[e._v("We have enable auto generate sidebar. So you don't need to setup sidebar manual.")]),e._v(" "),a("h2",{attrs:{id:"markdown-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-configuration"}},[e._v("#")]),e._v(" Markdown configuration")]),e._v(" "),a("p",[e._v("Markdown files can contain YAML frontmatter. Several properties (all of which are optional) are used:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LS0tCiMgdGl0bGUgaXMgZGlzcGxheWVkIGluIHRoZSBzaWRlYmFyCnRpdGxlOiBUaXRsZSBvZiB0aGUgZmlsZQojIG9yZGVyIHNwZWNpZmllcyBmaWxlJ3MgcHJpb3JpdHkgaW4gdGhlIHNpZGViYXIKb3JkZXI6IDIKIyBwYXJlbnQgaXMgcmVhZG1lLm1kIG9yIGluZGV4Lm1kIHBhcmVudCBkaXJlY3RvcnkKcGFyZW50OgogIHRpdGxlOiBEaXJlY3RvcnkgdGl0bGUKICBvcmRlcjogMQotLS0K"}}),e._v(" "),a("p",[e._v("Setting "),a("code",[e._v("order: false")]),e._v(" removes the item (file or directory) from the sidebar. It is, however, remains accessible by means other than the sidebar. It is valid use a "),a("code",[e._v("readme.md")]),e._v(" to set an order of a parent-directory and hide the file with "),a("code",[e._v("order: false")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),a("p",[e._v("We prefer "),a("code",[e._v("relative path")]),e._v(" when use link in file.")]),e._v(" "),a("p",[e._v("Such as:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"W3Rlc3RdKC4vUkVBRE1FLm1kKQo="}}),e._v(" "),a("p",[e._v("It works as follow:")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/"}},[e._v("test")])],1),e._v(" "),a("h2",{attrs:{id:"directory-structure-with-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure-with-images"}},[e._v("#")]),e._v(" Directory Structure with Images")]),e._v(" "),a("p",[e._v("If you have images or other assets to link, please put the assets nearly by the file. And link it with "),a("code",[e._v("relative path")]),e._v(".")]),e._v(" "),a("p",[e._v("Such as:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LSB0ZXN0Lm1kCi0gdGVzdC5wbmcK"}}),e._v(" "),a("p",[e._v("If one file have links many assets, Please put assets into a "),a("code",[e._v("dir")]),e._v(" named with the origin file name.")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LSB0ZXN0Lm1kCi0gdGVzdAogICAtIHRlc3QtMDEucG5nCiAgIC0gdGVzdC0wMi5wbmcKICAgLSB0ZXN0LTAzLnBuZwo="}}),e._v(" "),a("p",[e._v("If one "),a("code",[e._v("dir")]),e._v(" have many files and assets. Please put all assets into a "),a("code",[e._v("dir")]),e._v(" named "),a("code",[e._v("assets")]),e._v(".")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LSB0ZXN0MS5tZAotIHRlc3QyLm1kCi0gdGVzdDMubWQKLSB0ZXN0NC5tZAotIHRlc3Q1Lm1kCi0gYXNzZXRzCiAgIC0gdGVzdDEKICAgICAgLSB0ZXN0MS0wMS5wbmcKICAgICAgLSB0ZXN0MS0wMi5wbmcKICAgICAgLSB0ZXN0MS0wMy5wbmcKICAgLSB0ZXN0MgogICAgICAtIHRlc3QyLTAxLnBuZwogICAgICAtIHRlc3QyLTAyLnBuZwogICAgICAtIHRlc3QyLTAzLnBuZwogICAtIHRlc3QzCiAgICAgIC0gdGVzdDMtMDEucG5nCiAgICAgIC0gdGVzdDMtMDIucG5nCiAgICAgIC0gdGVzdDMtMDMucG5nCg=="}}),e._v(" "),a("p",[e._v("Here is the real example: https://github.com/vitelabs/go-vite/tree/master/docs/articles")]),e._v(" "),a("p",[e._v("All images in "),a("code",[e._v("articles")]),e._v(" directory are joined in "),a("code",[e._v("articles/assets")]),e._v(" directory.")]),e._v(" "),a("h2",{attrs:{id:"running-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-locally"}},[e._v("#")]),e._v(" Running Locally")]),e._v(" "),a("p",[e._v("Make sure you are in the "),a("code",[e._v("docs")]),e._v(" directory and run the following commands:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cm0gLXJmIG5vZGVfbW9kdWxlcwo="}}),e._v(" "),a("p",[e._v("This command will remove old version of the visual theme and required packages. This step is optional.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"eWFybiBpbnN0YWxsCg=="}}),e._v(" "),a("p",[e._v("Install the theme and all dependencies.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"eWFybiBydW4gZGV2Cg=="}}),e._v(" "),a("p",[e._v("To build documentation as a static website run "),a("code",[e._v("yarn run build")]),e._v(". You will find the website in "),a("code",[e._v(".vuepress/dist")]),e._v(" directory.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);