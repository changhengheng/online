import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const d=JSON.parse('{"title":"customRef","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/18.customRef.md","filePath":"program/frontend/Vue/Vue3/1.组合API/18.customRef.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/18.customRef.md"},o=l(`<h1 id="customref" tabindex="-1">customRef <a class="header-anchor" href="#customref" aria-label="Permalink to &quot;customRef&quot;">​</a></h1><p>customRef 用于创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制</p><p>需求: 使用 customRef 实现 debounce 的示例</p><p>对比请求拦截器去思考</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">h2</span><span style="color:#E1E4E8;">&gt;CustomRef的使用</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">h2</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">input type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> v</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;keyword&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#B392F0;">p</span><span style="color:#E1E4E8;">&gt;{{ keyword }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">p</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">template</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { customRef, defineComponent, ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 自定义hook防抖的函数</span></span>
<span class="line"><span style="color:#6A737D;">// value传入的数据,将来数据的类型不确定,所以,用泛型,delay防抖的间隔时间.默认是200毫秒</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useDebouncedRef</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">delay</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 准备一个存储定时器的id的变量</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> timeOutId</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">customRef</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">track</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">trigger</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 返回数据的</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 告诉Vue追踪数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">track</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 设置数据的</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newValue</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 清理定时器</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">clearTimeout</span><span style="color:#E1E4E8;">(timeOutId)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 开启定时器</span></span>
<span class="line"><span style="color:#E1E4E8;">        timeOutId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newValue</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 告诉Vue更新界面</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">trigger</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, delay)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;App&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// const keyword = ref(&#39;abc&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keyword</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useDebouncedRef</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;abc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      keyword,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">h2</span><span style="color:#24292E;">&gt;CustomRef的使用</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">h2</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">input type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> v</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">model</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;keyword&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#6F42C1;">p</span><span style="color:#24292E;">&gt;{{ keyword }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">p</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">template</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { customRef, defineComponent, ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 自定义hook防抖的函数</span></span>
<span class="line"><span style="color:#6A737D;">// value传入的数据,将来数据的类型不确定,所以,用泛型,delay防抖的间隔时间.默认是200毫秒</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useDebouncedRef</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;(</span><span style="color:#E36209;">value</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">, </span><span style="color:#E36209;">delay</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 准备一个存储定时器的id的变量</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> timeOutId</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">customRef</span><span style="color:#24292E;">((</span><span style="color:#E36209;">track</span><span style="color:#24292E;">, </span><span style="color:#E36209;">trigger</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 返回数据的</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 告诉Vue追踪数据</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">track</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 设置数据的</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newValue</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 清理定时器</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">clearTimeout</span><span style="color:#24292E;">(timeOutId)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 开启定时器</span></span>
<span class="line"><span style="color:#24292E;">        timeOutId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newValue</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 告诉Vue更新界面</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">trigger</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        }, delay)</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;App&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// const keyword = ref(&#39;abc&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keyword</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useDebouncedRef</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;abc&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      keyword,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div>`,5),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
