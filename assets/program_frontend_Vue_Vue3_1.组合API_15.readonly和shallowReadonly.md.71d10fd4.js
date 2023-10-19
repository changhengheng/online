import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const A=JSON.parse('{"title":"readonly和shallowReadonly","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/15.readonly和shallowReadonly.md","filePath":"program/frontend/Vue/Vue3/1.组合API/15.readonly和shallowReadonly.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/15.readonly和shallowReadonly.md"},o=l(`<h1 id="readonly和shallowreadonly" tabindex="-1">readonly和shallowReadonly <a class="header-anchor" href="#readonly和shallowreadonly" aria-label="Permalink to &quot;readonly和shallowReadonly&quot;">​</a></h1><p>readonly 用于创建深度只读数据。获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。只读代理是深层的：访问的任何嵌套 property 也是只读的。</p><p>shallowReadonly 用于创建浅只读数据。创建一个代理，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换，也就是只有最外层对象的属性是只读的，内层嵌套的对象的属性都不是只读的。</p><p>应用场景：在某些特定情况下, 我们可能不希望对数据进行更新的操作, 那就可以包装生成一个只读代理对象来读取数据, 而不能修改或删除</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h2</span><span style="color:#E1E4E8;">&gt;readonly和shallowReadonly</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h2</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h3</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">:{{ state2 }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">hr </span><span style="color:#F97583;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">button @click</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;update&quot;</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">更新数据</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">button</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">template</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent, reactive, readonly, shallowReadonly } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;App&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      car: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;奔驰&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;yellow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 只读的数据---深度的只读</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// const state2 = readonly(state)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 只读的数据---浅只读的</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shallowReadonly</span><span style="color:#E1E4E8;">(state)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// state2.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// state2.car.name += &#39;==&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// state2.name+=&#39;===&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      state2.car.name </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;===&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state2,</span></span>
<span class="line"><span style="color:#E1E4E8;">      update,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h2</span><span style="color:#24292E;">&gt;readonly和shallowReadonly</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h2</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h3</span><span style="color:#24292E;">&gt;</span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">:{{ state2 }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">hr </span><span style="color:#D73A49;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">button @click</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;update&quot;</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">更新数据</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">button</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">template</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent, reactive, readonly, shallowReadonly } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;App&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;张三&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      age: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      car: {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;奔驰&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;yellow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 只读的数据---深度的只读</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// const state2 = readonly(state)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 只读的数据---浅只读的</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shallowReadonly</span><span style="color:#24292E;">(state)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">update</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// state2.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// state2.car.name += &#39;==&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// state2.name+=&#39;===&#39;</span></span>
<span class="line"><span style="color:#24292E;">      state2.car.name </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;===&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      state2,</span></span>
<span class="line"><span style="color:#24292E;">      update,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div>`,5),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const D=s(p,[["render",t]]);export{A as __pageData,D as default};
