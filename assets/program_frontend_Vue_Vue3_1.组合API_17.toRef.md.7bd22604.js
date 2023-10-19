import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const u=JSON.parse('{"title":"toRef","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/17.toRef.md","filePath":"program/frontend/Vue/Vue3/1.组合API/17.toRef.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/17.toRef.md"},o=l(`<h1 id="toref" tabindex="-1">toRef <a class="header-anchor" href="#toref" aria-label="Permalink to &quot;toRef&quot;">​</a></h1><p>toRef 为源响应式对象上的某个属性创建一个 ref 对象，二者内部操作的是同一个数据值，更新时二者是同步的</p><p>区别ref：ref拷贝了一份新的数据值单独操作，更新时相互不影响</p><p>应用：当要将某个 prop 的 ref 传递给复合函数时，toRef 很有用</p><p>语法：<code>const property = toRef(源响应式对象,&#39;该对象的属性&#39;)</code></p><p>Child:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;Child子级组件&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;age:{{ age }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;length:{{ length }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent, computed, Ref, toRef } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useGetLength</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">age</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Ref</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> age.value.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;Child&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    age: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 必须的</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useGetLength</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">toRef</span><span style="color:#E1E4E8;">(props, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      length,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;Child子级组件&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;age:{{ age }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;length:{{ length }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent, computed, Ref, toRef } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useGetLength</span><span style="color:#24292E;">(</span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Ref</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> age.value.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">().</span><span style="color:#005CC5;">length</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;Child&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    age: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Number,</span></span>
<span class="line"><span style="color:#24292E;">      required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 必须的</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useGetLength</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">toRef</span><span style="color:#24292E;">(props, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      length,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>App</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;toRef的使用及特点:&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;state:{{ state }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;age:{{ age }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;money:{{ money }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">hr</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;update&quot;</span><span style="color:#E1E4E8;">&gt;更新数据&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">hr</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Child</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:age</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;age&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent, reactive, toRef, ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Child </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./components/Child.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;App&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Child,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      money: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 把响应式数据state对象中的某个属性age变成了ref对象了</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">age</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toRef</span><span style="color:#E1E4E8;">(state, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 把响应式对象中的某个属性使用ref进行包装,变成了一个ref对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">money</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(state.money)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(age)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(money)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 更新数据的</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(&#39;测试&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">      state.age </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// age.value += 3</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// money.value += 10</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      state,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age,</span></span>
<span class="line"><span style="color:#E1E4E8;">      money,</span></span>
<span class="line"><span style="color:#E1E4E8;">      update,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;toRef的使用及特点:&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;state:{{ state }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;age:{{ age }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;money:{{ money }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">hr</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;update&quot;</span><span style="color:#24292E;">&gt;更新数据&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">hr</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Child</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:age</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;age&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent, reactive, toRef, ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Child </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./components/Child.vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;App&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  components: {</span></span>
<span class="line"><span style="color:#24292E;">    Child,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      age: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      money: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 把响应式数据state对象中的某个属性age变成了ref对象了</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">age</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toRef</span><span style="color:#24292E;">(state, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 把响应式对象中的某个属性使用ref进行包装,变成了一个ref对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">money</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(state.money)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(age)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(money)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">update</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 更新数据的</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(&#39;测试&#39;)</span></span>
<span class="line"><span style="color:#24292E;">      state.age </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// age.value += 3</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// money.value += 10</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      state,</span></span>
<span class="line"><span style="color:#24292E;">      age,</span></span>
<span class="line"><span style="color:#24292E;">      money,</span></span>
<span class="line"><span style="color:#24292E;">      update,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,9),e=[o];function t(c,E,r,y,i,g){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
