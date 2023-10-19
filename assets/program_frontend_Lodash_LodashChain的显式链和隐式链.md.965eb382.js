import{_ as a,o as e,c as o,Q as d}from"./chunks/framework.419948d5.js";const u=JSON.parse('{"title":"LodashChain的显式链和隐式链","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Lodash/LodashChain的显式链和隐式链.md","filePath":"program/frontend/Lodash/LodashChain的显式链和隐式链.md","lastUpdated":1697452647000}'),t={name:"program/frontend/Lodash/LodashChain的显式链和隐式链.md"},s=d('<h1 id="lodashchain的显式链和隐式链" tabindex="-1">LodashChain的显式链和隐式链 <a class="header-anchor" href="#lodashchain的显式链和隐式链" aria-label="Permalink to &quot;LodashChain的显式链和隐式链&quot;">​</a></h1><p>问题来源：Nodejs/chapter4/练习4_lowdb</p><p><code>_(value)</code>建立了一个隐式链对象，可以把那些能操作并返回 arrays（数组）、collections（集合）、functions（函数）的”.Methods”（lodash的函数）串起来。 那些能返回“唯一值(single value)”或者可能返回原生数据类型（primitive value）会自动结束链式反应，否则需要调用 <code>_#value</code> 方法解除链(即获得计算结果)。 而显式链则用<code>_.chain()</code> 的方式实现延迟计算，即：求值操作等到<code>_#value</code>被调用时再执行。</p><p><code>value()</code> 方法的作用：结束链式调用并获得计算结果。</p>',4),n=[s];function _(c,r,h,i,l,p){return e(),o("div",null,n)}const f=a(t,[["render",_]]);export{u as __pageData,f as default};
