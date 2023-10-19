import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.419948d5.js";const F=JSON.parse('{"title":"模块暴露数据","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/65.模块暴露数据.md","filePath":"program/frontend/Node/chapter1/65.模块暴露数据.md","lastUpdated":1697287289000}'),l={name:"program/frontend/Node/chapter1/65.模块暴露数据.md"},o=p(`<h1 id="模块暴露数据" tabindex="-1">模块暴露数据 <a class="header-anchor" href="#模块暴露数据" aria-label="Permalink to &quot;模块暴露数据&quot;">​</a></h1><p>模块暴露数据的方式有两种：</p><ul><li>module.exports = value</li><li>exports.name = value</li></ul><p>使用时有几点注意：</p><ul><li><p>module.exports 可以暴露任意类型数据</p></li><li><p>不能使用 exports = value 的形式暴露数据</p><p>因为模块内部 module 与 exports 的隐式关系 exports = module.exports = {} ，<strong>require 返回的是目标模块中 module.exports 的值</strong>（并不是exports的值）</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 声明一个函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">time</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;时间&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">space</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;空间&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 使用module的exports属性可以向模块外暴露内部属性</span></span>
<span class="line"><span style="color:#6A737D;">// module.exports = time; // 这种方式一次只能暴露一个属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用对象可以一次暴露多个数据</span></span>
<span class="line"><span style="color:#6A737D;">// module.exports = {</span></span>
<span class="line"><span style="color:#6A737D;">//   time,</span></span>
<span class="line"><span style="color:#6A737D;">//   space</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// export是一个独立的变量，module.exports 是一个属性</span></span>
<span class="line"><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">.time </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> time;</span></span>
<span class="line"><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">.space </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> space;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 声明一个函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">time</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;时间&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">space</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;空间&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 使用module的exports属性可以向模块外暴露内部属性</span></span>
<span class="line"><span style="color:#6A737D;">// module.exports = time; // 这种方式一次只能暴露一个属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用对象可以一次暴露多个数据</span></span>
<span class="line"><span style="color:#6A737D;">// module.exports = {</span></span>
<span class="line"><span style="color:#6A737D;">//   time,</span></span>
<span class="line"><span style="color:#6A737D;">//   space</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// export是一个独立的变量，module.exports 是一个属性</span></span>
<span class="line"><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.time </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> time;</span></span>
<span class="line"><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.space </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> space;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 导入模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">log</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;console&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./test&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// module.exports 暴露一个对象</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(obj); // { time: [Function: time], space: [Function: space] }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用exports变量暴露</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(obj); // { time: [Function: time], space: [Function: space] }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 调用函数</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.</span><span style="color:#B392F0;">time</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.</span><span style="color:#B392F0;">space</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 导入模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">log</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;console&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./test&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// module.exports 暴露一个对象</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(obj); // { time: [Function: time], space: [Function: space] }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用exports变量暴露</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(obj); // { time: [Function: time], space: [Function: space] }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 调用函数</span></span>
<span class="line"><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">time</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">space</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">exports</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// true</span></span></code></pre></div>`,7),e=[o];function c(t,r,y,E,i,u){return n(),a("div",null,e)}const m=s(l,[["render",c]]);export{F as __pageData,m as default};
