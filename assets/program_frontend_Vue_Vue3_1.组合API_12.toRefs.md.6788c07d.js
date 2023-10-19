import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const A=JSON.parse('{"title":"toRefs","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/12.toRefs.md","filePath":"program/frontend/Vue/Vue3/1.组合API/12.toRefs.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/12.toRefs.md"},o=l(`<h1 id="torefs" tabindex="-1">toRefs <a class="header-anchor" href="#torefs" aria-label="Permalink to &quot;toRefs&quot;">​</a></h1><p>toRefs 用于把一个响应式对象（一般是reactive创建的Proxy对象）转换成普通对象，该普通对象的每个 property 都是一个 ref（这样对每一个property整体进行操作的时候就能保证它是响应式的）</p><p>应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用</p><p>例子：比如 axios 请求的数据是一个响应式对象。响应式对象本身是响应式的，而其中的属性不一定是响应式的。为了使一个响应式对象中的每一个属性都是响应式的，就可以使用 toRefs，因为通常展示的数据都是其中的属性，而不是对象本身。</p><p>问题: reactive 对象取出的所有属性值都是非响应式的</p><p>解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h2</span><span style="color:#E1E4E8;">&gt;toRefs的使用</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h2</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;!--</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">:{{ state.name }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h3</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#B392F0;">age</span><span style="color:#E1E4E8;">:{{ state.age }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h3</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">:{{ name }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h3</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#B392F0;">age</span><span style="color:#E1E4E8;">:{{ age }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h3</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#B392F0;">name2</span><span style="color:#E1E4E8;">:{{ name2 }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h3</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#B392F0;">age2</span><span style="color:#E1E4E8;">:{{ age2 }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h3</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">template</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent, reactive, toRefs } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useFeatureX</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name2: </span><span style="color:#9ECBFF;">&#39;法外狂徒张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    age2: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">toRefs</span><span style="color:#E1E4E8;">(state),</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;App&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;法外狂徒张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// toRefs可以把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// const state2 = toRefs(state)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">age</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toRefs</span><span style="color:#E1E4E8;">(state)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(state2)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 定时器,更新数据,(如果数据变化了,界面也会随之变化,肯定是响应式的数据)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// state.name += &#39;==&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// state2.name.value+=&#39;===&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      name.value </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;===&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;======&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">name2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">age2</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useFeatureX</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// state,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 下面的方式不行啊</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// ...state // 不是响应式的数据了----&gt;{name:&#39;自来也&#39;,age:47}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// ...state2  toRefs返回来的对象</span></span>
<span class="line"><span style="color:#E1E4E8;">      name,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name2,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age2,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h2</span><span style="color:#24292E;">&gt;toRefs的使用</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h2</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;!--</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">:{{ state.name }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h3</span><span style="color:#24292E;">&gt;</span><span style="color:#6F42C1;">age</span><span style="color:#24292E;">:{{ state.age }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h3</span><span style="color:#24292E;">&gt;</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">:{{ name }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h3</span><span style="color:#24292E;">&gt;</span><span style="color:#6F42C1;">age</span><span style="color:#24292E;">:{{ age }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h3</span><span style="color:#24292E;">&gt;</span><span style="color:#6F42C1;">name2</span><span style="color:#24292E;">:{{ name2 }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h3</span><span style="color:#24292E;">&gt;</span><span style="color:#6F42C1;">age2</span><span style="color:#24292E;">:{{ age2 }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h3</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">template</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent, reactive, toRefs } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useFeatureX</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    name2: </span><span style="color:#032F62;">&#39;法外狂徒张三&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    age2: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">toRefs</span><span style="color:#24292E;">(state),</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;App&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;法外狂徒张三&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      age: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// toRefs可以把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// const state2 = toRefs(state)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">name</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">age</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toRefs</span><span style="color:#24292E;">(state)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(state2)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 定时器,更新数据,(如果数据变化了,界面也会随之变化,肯定是响应式的数据)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setInterval</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// state.name += &#39;==&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// state2.name.value+=&#39;===&#39;</span></span>
<span class="line"><span style="color:#24292E;">      name.value </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;===&#39;</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;======&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">name2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">age2</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useFeatureX</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// state,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 下面的方式不行啊</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// ...state // 不是响应式的数据了----&gt;{name:&#39;自来也&#39;,age:47}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// ...state2  toRefs返回来的对象</span></span>
<span class="line"><span style="color:#24292E;">      name,</span></span>
<span class="line"><span style="color:#24292E;">      age,</span></span>
<span class="line"><span style="color:#24292E;">      name2,</span></span>
<span class="line"><span style="color:#24292E;">      age2,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div>`,7),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const D=s(p,[["render",t]]);export{A as __pageData,D as default};
