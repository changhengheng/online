import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const d=JSON.parse('{"title":"自定义 hook 函数","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/10.自定义hook函数.md","filePath":"program/frontend/Vue/Vue3/1.组合API/10.自定义hook函数.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/10.自定义hook函数.md"},o=l(`<h1 id="自定义-hook-函数" tabindex="-1">自定义 hook 函数 <a class="header-anchor" href="#自定义-hook-函数" aria-label="Permalink to &quot;自定义 hook 函数&quot;">​</a></h1><p>在不使用 class 的情况下管理其中的状态数据，并且把一些逻辑性思维的东西抽取出来，放到一个可复用的功能函数当中</p><ul><li><p>使用 Vue3 的组合 API 封装的可复用的功能函数</p></li><li><p>自定义 hook 的作用类似于 vue2 中的 mixin 技术</p></li><li><p>自定义 Hook 的优势: 很清楚复用功能代码的来源, 更清楚易懂</p></li></ul><p>操作:</p><ul><li>src 下新建 hooks 文件夹</li><li>新建 hooks 文件：以 use 开头的 ts 文件</li></ul><p>功能代码示例</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;自定义hook函数&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;x:{{ x }};y:{{ y }}&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { ref, onMounted, onBeforeUnmount } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;App&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 需求：收集展示鼠标点击的横纵坐标</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    const x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    const y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 页面加载完毕了，再进行点击的操作</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 页面加载完毕的生命周期</span></span>
<span class="line"><span style="color:#E1E4E8;">    const </span><span style="color:#B392F0;">clinkHandler</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      x.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.pageX;</span></span>
<span class="line"><span style="color:#E1E4E8;">      y.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.pageY;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">window</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;click&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">clinkHandler</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onBeforeUnmount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">window</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#B392F0;">clinkHandler</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    return {</span></span>
<span class="line"><span style="color:#E1E4E8;">      x,</span></span>
<span class="line"><span style="color:#E1E4E8;">      y,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;自定义hook函数&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;x:{{ x }};y:{{ y }}&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { ref, onMounted, onBeforeUnmount } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;App&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 需求：收集展示鼠标点击的横纵坐标</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    const x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    const y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 页面加载完毕了，再进行点击的操作</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 页面加载完毕的生命周期</span></span>
<span class="line"><span style="color:#24292E;">    const </span><span style="color:#6F42C1;">clinkHandler</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      x.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> event.pageX;</span></span>
<span class="line"><span style="color:#24292E;">      y.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> event.pageY;</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">window</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;click&quot;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">clinkHandler</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onBeforeUnmount</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">window</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">removeEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">,</span><span style="color:#6F42C1;">clinkHandler</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    return {</span></span>
<span class="line"><span style="color:#24292E;">      x,</span></span>
<span class="line"><span style="color:#24292E;">      y,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>封装 hook 函数代码示例</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 暴露出去一个函数</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, onMounted, onBeforeUnmount } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">y</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 页面加载完毕了，再进行点击的操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 页面加载完毕的生命周期</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clinkHandler</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MouseEvent</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    x.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.pageX;</span></span>
<span class="line"><span style="color:#E1E4E8;">    y.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.pageY;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;click&quot;</span><span style="color:#E1E4E8;">, clinkHandler);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onBeforeUnmount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;click&quot;</span><span style="color:#E1E4E8;">, clinkHandler);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    x,</span></span>
<span class="line"><span style="color:#E1E4E8;">    y,</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 暴露出去一个函数</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, onMounted, onBeforeUnmount } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">y</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 页面加载完毕了，再进行点击的操作</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 页面加载完毕的生命周期</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clinkHandler</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">event</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MouseEvent</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    x.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> event.pageX;</span></span>
<span class="line"><span style="color:#24292E;">    y.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> event.pageY;</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;click&quot;</span><span style="color:#24292E;">, clinkHandler);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onBeforeUnmount</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    window.</span><span style="color:#6F42C1;">removeEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;click&quot;</span><span style="color:#24292E;">, clinkHandler);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    x,</span></span>
<span class="line"><span style="color:#24292E;">    y,</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>hook 函数的使用</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;自定义hook函数&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;x:{{ x }};y:{{ y }}&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入hook函数</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> useMousePositions </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./hooks/useMousePositions&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;App&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">y</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useMousePositions</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      x,</span></span>
<span class="line"><span style="color:#E1E4E8;">      y,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;自定义hook函数&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;x:{{ x }};y:{{ y }}&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入hook函数</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> useMousePositions </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./hooks/useMousePositions&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;App&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">x</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">y</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useMousePositions</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      x,</span></span>
<span class="line"><span style="color:#24292E;">      y,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,11),e=[o];function t(c,E,r,y,i,u){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{d as __pageData,g as default};
