import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.419948d5.js";const u=JSON.parse('{"title":"Project references 项目引用","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/TypeScript/inbox/ProjectReference.md","filePath":"program/frontend/TypeScript/inbox/ProjectReference.md","lastUpdated":1694599481000}'),o={name:"program/frontend/TypeScript/inbox/ProjectReference.md"},p=a(`<h1 id="project-references-项目引用" tabindex="-1">Project references 项目引用 <a class="header-anchor" href="#project-references-项目引用" aria-label="Permalink to &quot;Project references 项目引用&quot;">​</a></h1><p>参考：</p><ul><li>讯飞星火</li><li><a href="https://www.tslang.cn/docs/handbook/project-references.html" target="_blank" rel="noreferrer">https://www.tslang.cn/docs/handbook/project-references.html</a></li><li><a href="https://www.typescriptlang.org/tsconfig#references" target="_blank" rel="noreferrer">https://www.typescriptlang.org/tsconfig#referencesl</a></li></ul><p>讯飞星火： 问：Project references 是什么 答：在 TypeScript 中，Project references 是 TypeScript 3.0 中的一项新功能，允许您将 TypeScript 程序构建为更小的部分。 通过这样做，您可以大大缩短构建时间，实现组件之间的逻辑分离，并以新的更好的方式组织代码。</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>项目引用是 TypeScript 3.0 的新特性，用于将 TypeScript 程序的结构分割为更小的组成部分。进而改善构建时间，并强制在逻辑上对组件进行分离，便于组织代码。</p><p>tsconfig.json 增加了顶层属性 references，指明要引用的工程：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// The usual</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;references&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { </span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;../src&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// The usual</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;references&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        { </span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;../src&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>每个引用的 path 属性都可以指向到包含 tsconfig.json 文件的目录，或者直接指向到配置文件本身（名字是任意的）。</p><blockquote><p>包含 tsconfig.json 的目录就是一个 ts 项目，tsconfig.json 文件所在的位置是该 ts 项目的根目录。</p></blockquote><p>当你引用一个工程时，会发生下面的事：</p><ul><li>导入引用工程中的模块实际加载的是它输出的声明文件（.d.ts）。</li><li>如果引用的工程生成一个 outFile，那么这个输出文件的 .d.ts 文件里的声明对于当前工程是可见的。</li><li>构建模式（后文）会根据需要自动地构建引用的工程。</li><li>当你拆分成多个工程后，会显著地加速类型检查和编译，减少编辑器的内存占用，还会改善程序在逻辑上进行分组。</li></ul>`,12),t=[p];function l(r,c,i,E,y,d){return e(),n("div",null,t)}const h=s(o,[["render",l]]);export{u as __pageData,h as default};