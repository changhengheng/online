import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const D=JSON.parse('{"title":"setup 和 ref 的基本使用","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/2.setup和ref的基本使用.md","filePath":"program/frontend/Vue/Vue3/1.组合API/2.setup和ref的基本使用.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/2.setup和ref的基本使用.md"},o=l(`<h1 id="setup-和-ref-的基本使用" tabindex="-1">setup 和 ref 的基本使用 <a class="header-anchor" href="#setup-和-ref-的基本使用" aria-label="Permalink to &quot;setup 和 ref 的基本使用&quot;">​</a></h1><p>ref</p><ul><li>作用: 定义一个数据的响应式</li><li>语法: <code>const xxx = ref(initValue)</code><ul><li>创建一个包含响应式数据的引用(reference)对象</li><li>js 中操作数据: <code>xxx.value</code></li><li>模板中操作数据: 不需要<code>.value</code></li></ul></li><li>一般用来定义一个基本类型的响应式数据</li></ul><h2 id="练习代码" tabindex="-1">练习代码 <a class="header-anchor" href="#练习代码" aria-label="Permalink to &quot;练习代码&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;setup和ref的基本使用&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  // 4. 使用ref数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;{{ count }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;updateCount&quot;&gt;更新数据&lt;/button&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">// 1. 引入ref函数</span></span>
<span class="line"><span style="color:#E1E4E8;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;App&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 需求：页面打开后可以看到一个数据，点击按钮后，该数据可以发生变化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// vue2实现</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 变量</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// data(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   return {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     count:0</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// methods:{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   updateCount(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     this.count ++</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// vue3实现</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// setup是组合API的入口函数，程序一执行会先进入到setup</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 变量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// let count = 0; // 直接声明的数据暴露出去不是响应式的。响应式数据的意思是：数据变化，页面跟着变化。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2. 使用ref函数声明数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ref是一个函数，作用：定义一个响应式的数据。ref函数返回一个ref对象，对象中有一个value属性，如果需要对数据进行操作，需要通过使用该ref对象调用value属性的方式实现。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 模板中展示ref数据的时候不需要使用调用value属性的方式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 一般用来定义一个基本类型的响应式数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这个count是ref类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    const count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(count, </span><span style="color:#9ECBFF;">&quot;count&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">      count是一个ref对象</span></span>
<span class="line"><span style="color:#6A737D;">      RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: 0, _value: 0}</span></span>
<span class="line"><span style="color:#6A737D;">        dep: undefined</span></span>
<span class="line"><span style="color:#6A737D;">        __v_isRef: true</span></span>
<span class="line"><span style="color:#6A737D;">        __v_isShallow: false</span></span>
<span class="line"><span style="color:#6A737D;">        _rawValue: 0</span></span>
<span class="line"><span style="color:#6A737D;">        _value: 0</span></span>
<span class="line"><span style="color:#6A737D;">        value: 0</span></span>
<span class="line"><span style="color:#6A737D;">        [[Prototype]]: Object</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    function updateCount() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.log(</span><span style="color:#9ECBFF;">&quot;updateCount执行了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 报错的原因：count是一个ref对象，对象不能++</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// count++;</span></span>
<span class="line"><span style="color:#E1E4E8;">      count.value++;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 返回的是一个对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    return {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 属性</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 3. 将ref数据暴露给模板使用</span></span>
<span class="line"><span style="color:#E1E4E8;">      count,</span></span>
<span class="line"><span style="color:#E1E4E8;">      updateCount,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;setup和ref的基本使用&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  // 4. 使用ref数据</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;{{ count }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;updateCount&quot;&gt;更新数据&lt;/button&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">// 1. 引入ref函数</span></span>
<span class="line"><span style="color:#24292E;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;App&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 需求：页面打开后可以看到一个数据，点击按钮后，该数据可以发生变化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// vue2实现</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 变量</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// data(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   return {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     count:0</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 方法</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// methods:{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   updateCount(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     this.count ++</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// vue3实现</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// setup是组合API的入口函数，程序一执行会先进入到setup</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 变量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// let count = 0; // 直接声明的数据暴露出去不是响应式的。响应式数据的意思是：数据变化，页面跟着变化。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2. 使用ref函数声明数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ref是一个函数，作用：定义一个响应式的数据。ref函数返回一个ref对象，对象中有一个value属性，如果需要对数据进行操作，需要通过使用该ref对象调用value属性的方式实现。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 模板中展示ref数据的时候不需要使用调用value属性的方式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 一般用来定义一个基本类型的响应式数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这个count是ref类型</span></span>
<span class="line"><span style="color:#24292E;">    const count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    console.log(count, </span><span style="color:#032F62;">&quot;count&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">      count是一个ref对象</span></span>
<span class="line"><span style="color:#6A737D;">      RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: 0, _value: 0}</span></span>
<span class="line"><span style="color:#6A737D;">        dep: undefined</span></span>
<span class="line"><span style="color:#6A737D;">        __v_isRef: true</span></span>
<span class="line"><span style="color:#6A737D;">        __v_isShallow: false</span></span>
<span class="line"><span style="color:#6A737D;">        _rawValue: 0</span></span>
<span class="line"><span style="color:#6A737D;">        _value: 0</span></span>
<span class="line"><span style="color:#6A737D;">        value: 0</span></span>
<span class="line"><span style="color:#6A737D;">        [[Prototype]]: Object</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 方法</span></span>
<span class="line"><span style="color:#24292E;">    function updateCount() {</span></span>
<span class="line"><span style="color:#24292E;">      console.log(</span><span style="color:#032F62;">&quot;updateCount执行了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 报错的原因：count是一个ref对象，对象不能++</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// count++;</span></span>
<span class="line"><span style="color:#24292E;">      count.value++;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 返回的是一个对象</span></span>
<span class="line"><span style="color:#24292E;">    return {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 属性</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 3. 将ref数据暴露给模板使用</span></span>
<span class="line"><span style="color:#24292E;">      count,</span></span>
<span class="line"><span style="color:#24292E;">      updateCount,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>ref 用来定义一个响应式数据（使用时需要引入），一般用来定义基本类型的响应式数据，返回一个包含响应式数据的引用对象（reference，ref 对象），该对象内部的 value 属性保存着初始值，更新值时需要.value 来更新这个初始值，模板中操作不需要.value，因为 vue 内部自己做了处理。</p><p>响应式数据是指当数据发生变化时会触发视图更新。</p>`,8),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const f=s(p,[["render",t]]);export{D as __pageData,f as default};
