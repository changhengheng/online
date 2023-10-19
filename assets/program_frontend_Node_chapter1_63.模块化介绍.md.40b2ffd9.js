import{_ as a,o as e,c as t,Q as o}from"./chunks/framework.419948d5.js";const m=JSON.parse('{"title":"模块化介绍","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/63.模块化介绍.md","filePath":"program/frontend/Node/chapter1/63.模块化介绍.md","lastUpdated":1697287289000}'),r={name:"program/frontend/Node/chapter1/63.模块化介绍.md"},n=o('<h1 id="模块化介绍" tabindex="-1">模块化介绍 <a class="header-anchor" href="#模块化介绍" aria-label="Permalink to &quot;模块化介绍&quot;">​</a></h1><h2 id="什么是模块化与模块" tabindex="-1">什么是模块化与模块 ? <a class="header-anchor" href="#什么是模块化与模块" aria-label="Permalink to &quot;什么是模块化与模块 ?&quot;">​</a></h2><p>将一个复杂的程序文件依据一定规则（规范）拆分成多个文件的过程称之为<strong>模块化</strong>。</p><blockquote><p>拆分出来的模块最终会通过一定规则组合在一起</p></blockquote><p>其中拆分出的 <strong>每个文件就是一个模块</strong> ，模块的内部数据是私有的，不过模块可以暴露内部数据以便其他模块使用</p><h2 id="什么是模块化项目" tabindex="-1">什么是模块化项目? <a class="header-anchor" href="#什么是模块化项目" aria-label="Permalink to &quot;什么是模块化项目?&quot;">​</a></h2><p>编码时是按照模块一个一个编码的， 整个项目就是一个模块化的项目</p><h2 id="模块化好处" tabindex="-1">模块化好处 <a class="header-anchor" href="#模块化好处" aria-label="Permalink to &quot;模块化好处&quot;">​</a></h2><ul><li>防止命名冲突（不同模块可以声明同名变量，因为模块内的数据是私有的）</li><li>高复用性（模块可以整体复用，也可以暴露内部数据出去给其他模块复用）</li><li>高维护性（减少多人同时编辑单文件时的冲突，因为模块化后每个人只需要编辑各自的模块即可，多人协作开发时可以进行任务的划分）</li></ul>',9),l=[n];function i(s,_,d,c,h,p){return e(),t("div",null,l)}const f=a(r,[["render",i]]);export{m as __pageData,f as default};
