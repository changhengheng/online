import{_ as e,o as t,c as o,Q as a}from"./chunks/framework.419948d5.js";const h=JSON.parse('{"title":"fs模块路径问题","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/27.fs模块路径问题.md","filePath":"program/frontend/Node/chapter1/27.fs模块路径问题.md","lastUpdated":1697287289000}'),r={name:"program/frontend/Node/chapter1/27.fs模块路径问题.md"},s=a('<h1 id="fs模块路径问题" tabindex="-1">fs模块路径问题 <a class="header-anchor" href="#fs模块路径问题" aria-label="Permalink to &quot;fs模块路径问题&quot;">​</a></h1><p>fs 模块对资源进行操作时，路径的写法有两种：</p><ul><li>相对路径 <ul><li><code>./座右铭.txt</code> 当前目录下的座右铭.txt</li><li><code>座右铭.txt</code> 等效于上面的写法</li><li><code>../座右铭.txt</code> 当前目录的上一级目录中的座右铭.txt</li></ul></li><li>绝对路径 <ul><li><code>D:/Program Files windows</code> 系统下的绝对路径</li><li><code>/usr/bin</code> Linux 系统下的绝对路径，<code>/</code> 是盘符根目录</li></ul></li></ul><p>fs 相对路径中所谓的当前目录 ，指的是<strong>命令行的工作目录</strong> ，而并非是文件的所在目录。所以当命令行的工作目录与文件所在目录不一致时，会出现一些 BUG，使用绝对路径可以使fs路径不受命令行工作目录的影响。</p>',4),d=[s];function c(i,l,_,n,f,p){return t(),o("div",null,d)}const m=e(r,[["render",c]]);export{h as __pageData,m as default};
