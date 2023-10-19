import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const A=JSON.parse('{"title":"shallowReactive和shallowRef","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/14.shallowReactive和shallowRef.md","filePath":"program/frontend/Vue/Vue3/1.组合API/14.shallowReactive和shallowRef.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/14.shallowReactive和shallowRef.md"},o=l(`<h1 id="shallowreactive和shallowref" tabindex="-1">shallowReactive和shallowRef <a class="header-anchor" href="#shallowreactive和shallowref" aria-label="Permalink to &quot;shallowReactive和shallowRef&quot;">​</a></h1><p>shallowReactive : 只处理了对象内最外层 property 的响应式(也就是浅响应式)，内部嵌套的对象的 property 不是响应式的。相对于reactive而言，reactive创建的对象内部嵌套的所有层次的对象的 property 都是响应式的。</p><p>shallowRef: 只处理了value（基本类型数据）的响应式, 不进行对象的reactive处理（只要传入对象，即使是最外层对象的 property 也不是响应式的）。相对于ref而言，ref如果传入了一个对象，内部会进行 reactive 的处理，而且会进行深度监视，监视传入的对象内部所嵌套的所有层次的对象，每一次都用 reactive 进行处理。</p><p>区别对象和对象的属性，说一个对象是响应式的并不意味着其属性也是响应式的。比如，reactive 创建的是对象的响应式，而不是对象的属性的响应式，toRefs 用于将一个 reactive 响应式对象的每个 property 变成 ref 响应式的，ref 用于将一个基本类型数据变成响应式的。操作对象和操作对象的属性是不一样的。</p><p>什么时候用浅响应式呢?</p><ul><li>一般情况下使用ref和reactive即可</li><li>如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===&gt; shallowReactive</li><li>如果有一个对象数据, 后面会产生新的对象来替换 ===&gt; shallowRef</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h2</span><span style="color:#E1E4E8;">&gt;shallowReactive和shallowRef</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h2</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h3</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#B392F0;">m1</span><span style="color:#E1E4E8;">:{{ m1 }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h3</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#B392F0;">m2</span><span style="color:#E1E4E8;">:{{ m2 }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h3</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#B392F0;">m3</span><span style="color:#E1E4E8;">:{{ m3 }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h3</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#B392F0;">m4</span><span style="color:#E1E4E8;">:{{ m4 }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">hr </span><span style="color:#F97583;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">button @click</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;update&quot;</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">更新数据</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">button</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">template</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  defineComponent,</span></span>
<span class="line"><span style="color:#E1E4E8;">  reactive,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ref,</span></span>
<span class="line"><span style="color:#E1E4E8;">  shallowReactive,</span></span>
<span class="line"><span style="color:#E1E4E8;">  shallowRef,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;App&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 深度劫持(深监视)----深度响应式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">m1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      car: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;奔驰&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 浅劫持(浅监视)----浅响应式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">m2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shallowReactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      car: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;奔驰&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 深度劫持(深监视)----深度响应式----做了reactive的处理</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">m3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      car: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;奔驰&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// 浅劫持(浅监视)----浅响应式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">m4</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shallowRef</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      car: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;奔驰&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 更改m1的数据---reactive方式</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// m1.name += &#39;==&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// m1.car.name += &#39;==&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 更改m2的数据---shallowReactive</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// m2.name += &#39;==&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// m2.car.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 更改m3的数据---ref方式</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// m3.value.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// m3.value.car.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 更改m4的数据---shallowRef方式</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// m4.value.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// m4.value.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(m3, m4)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      m1,</span></span>
<span class="line"><span style="color:#E1E4E8;">      m2,</span></span>
<span class="line"><span style="color:#E1E4E8;">      m3,</span></span>
<span class="line"><span style="color:#E1E4E8;">      m4,</span></span>
<span class="line"><span style="color:#E1E4E8;">      update,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h2</span><span style="color:#24292E;">&gt;shallowReactive和shallowRef</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h2</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h3</span><span style="color:#24292E;">&gt;</span><span style="color:#6F42C1;">m1</span><span style="color:#24292E;">:{{ m1 }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h3</span><span style="color:#24292E;">&gt;</span><span style="color:#6F42C1;">m2</span><span style="color:#24292E;">:{{ m2 }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h3</span><span style="color:#24292E;">&gt;</span><span style="color:#6F42C1;">m3</span><span style="color:#24292E;">:{{ m3 }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h3</span><span style="color:#24292E;">&gt;</span><span style="color:#6F42C1;">m4</span><span style="color:#24292E;">:{{ m4 }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">hr </span><span style="color:#D73A49;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">button @click</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;update&quot;</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">更新数据</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">button</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">template</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  defineComponent,</span></span>
<span class="line"><span style="color:#24292E;">  reactive,</span></span>
<span class="line"><span style="color:#24292E;">  ref,</span></span>
<span class="line"><span style="color:#24292E;">  shallowReactive,</span></span>
<span class="line"><span style="color:#24292E;">  shallowRef,</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;App&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 深度劫持(深监视)----深度响应式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">m1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;张三&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      age: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      car: {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;奔驰&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 浅劫持(浅监视)----浅响应式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">m2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shallowReactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;张三&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      age: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      car: {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;奔驰&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 深度劫持(深监视)----深度响应式----做了reactive的处理</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">m3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;张三&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      age: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      car: {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;奔驰&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 浅劫持(浅监视)----浅响应式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">m4</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shallowRef</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;张三&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      age: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      car: {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;奔驰&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">update</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 更改m1的数据---reactive方式</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// m1.name += &#39;==&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// m1.car.name += &#39;==&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 更改m2的数据---shallowReactive</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// m2.name += &#39;==&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// m2.car.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 更改m3的数据---ref方式</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// m3.value.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// m3.value.car.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 更改m4的数据---shallowRef方式</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// m4.value.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// m4.value.name += &#39;===&#39;</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(m3, m4)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      m1,</span></span>
<span class="line"><span style="color:#24292E;">      m2,</span></span>
<span class="line"><span style="color:#24292E;">      m3,</span></span>
<span class="line"><span style="color:#24292E;">      m4,</span></span>
<span class="line"><span style="color:#24292E;">      update,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div>`,7),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{A as __pageData,h as default};
