import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const m=JSON.parse('{"title":"setup 深入","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/6.setup深入.md","filePath":"program/frontend/Vue/Vue3/1.组合API/6.setup深入.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/6.setup深入.md"},o=l(`<h1 id="setup-深入" tabindex="-1">setup 深入 <a class="header-anchor" href="#setup-深入" aria-label="Permalink to &quot;setup 深入&quot;">​</a></h1><ul><li><p>setup 执行的时机</p><ul><li>在 beforeCreate 之前执行（一次）， 此时组件对象还没有创建，也就意味着组件实例对象的 this 根本不能用</li><li>this 是 undefined， 不能通过 this 来访问 data/computed/methods/props</li><li>其实所有的 composition API 相关回调函数中也都不可以使用 this（包括新的生命周期钩子，一些常用的功能放到了 setup 的参数中），打印 this 都是 undefined</li></ul></li><li><p>setup 的返回值</p><ul><li>一般都返回一个对象： 为模板提供数据， 也就是模板中可以直接使用此对象中的所有属性/方法</li><li>返回对象中的属性会与 data 函数返回对象的属性合并，一起成为组件对象的属性，都可以在 HTML 模板中使用</li><li>返回对象中的方法会与 methods 中的方法合并成为组件对象的方法，如果有重名， setup 优先</li><li>注意： <ul><li>一般不要混合使用 data 和 setup 和 methods 和 setup，因为 methods 中可以访问 setup 提供的属性和方法， 但在 setup 方法中不能访问 data 和 methods，因为没有 this 获取不到组件实例对象，就拿不到上面的 data 和 methods 的数据</li><li>setup 不能是一个 async 函数： 因为返回值不再是 return 的对象， 而是 promise， 模板看不到 return 对象中的属性数据（setup 不能添加 async）</li></ul></li></ul></li><li><p>setup 的参数</p><ul><li>setup(props， context) / setup(props， {attrs， slots， emit})</li><li>props： 包含 props 组件间通信声明且传入了的所有属性的对象</li><li>attrs： 包含没有在 props 组件间通信中声明接收的属性的对象， 相当于 this.$attrs（获取当前组件标签上的所有属性，但是该属性是在 props 中没有被声明接收的，是一个对象）</li><li>slots： 包含所有传入的插槽内容的对象， 相当于 this.$slots</li><li>emit： 用来分发（触发）自定义事件的函数， 相当于 this.$emit</li></ul></li></ul><p>App.vue</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;App父级组件&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;msg:{{ msg }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;msg += &#39;===&#39;&quot;</span><span style="color:#E1E4E8;">&gt;更新数据&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">hr</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Child</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:msg</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;msg&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">msg2</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;真香&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@xxx</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;xxx&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent, ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入子级组件Child</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Child </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./components/Child.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;App&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 注册组件</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Child,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 定义一个Ref类型的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">msg</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;what are you no sha lei&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xxx</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">txt</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg.value </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> txt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg,</span></span>
<span class="line"><span style="color:#E1E4E8;">      xxx,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;App父级组件&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;msg:{{ msg }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;msg += &#39;===&#39;&quot;</span><span style="color:#24292E;">&gt;更新数据&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">hr</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Child</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:msg</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;msg&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">msg2</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;真香&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@xxx</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;xxx&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent, ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入子级组件Child</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Child </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./components/Child.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;App&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 注册组件</span></span>
<span class="line"><span style="color:#24292E;">  components: {</span></span>
<span class="line"><span style="color:#24292E;">    Child,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 定义一个Ref类型的数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">msg</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;what are you no sha lei&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xxx</span><span style="color:#24292E;">(</span><span style="color:#E36209;">txt</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      msg.value </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> txt;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      msg,</span></span>
<span class="line"><span style="color:#24292E;">      xxx,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>Child.vue</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;Child子级组件&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;msg:{{ msg }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- &lt;h3&gt;count:{{ count }}&lt;/h3&gt; --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;emitXxx&quot;</span><span style="color:#E1E4E8;">&gt;分发事件&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent, ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;Child&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: [</span><span style="color:#9ECBFF;">&quot;msg&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// setup细节问题:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// setup是在beforeCreate生命周期回调之前就执行了,而且就执行一次</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 由此可以推断出:setup在执行的时候,当前的组件还没有创建出来,也就意味着:组件实例对象this根本就不能用</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// this是undefined,说明,就不能通过this再去调用data/computed/methods/props中的相关内容了</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 其实所有的composition API相关回调函数中也都不可以</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// setup中的返回值是一个对象,内部的属性和方法是给html模版使用的</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// setup中的对象内部的属性和data函数中的return对象的属性都可以在html模版中使用</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// setup中的对象中的属性和data函数中的对象中的属性会合并为组件对象的属性</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// setup中的对象中的方法和methods对象中的方法会合并为组件对象的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 在Vue3中尽量不要混合的使用data和setup及methods和setup</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// beforeCreate() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   console.log(&#39;beforeCreate执行了&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 界面渲染完毕</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// mounted() {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// setup(props,context) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">attrs</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">slots</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">emit</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// props参数,是一个对象,里面有父级组件向子级组件传递的数据,并且是在子级组件中使用props接收到的所有的属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 包含props配置声明且传入了的所有属性的对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(props.msg)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(context.attrs)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(context.emit)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// context参数,是一个对象,里面有attrs对象(获取当前组件标签上的所有的属性的对象,但是该属性是在props中没有声明接收的所有的尚需经的对象),emit方法(分发事件的),slots对象(插槽)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(context.attrs.msg2)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;=============&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;setup执行了&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">showMsg1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;setup中的showMsg1方法&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 按钮的点击事件的回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">emitXxx</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// context.emit(&#39;xxx&#39;,&#39;++&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;xxx&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;++&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      showMsg1,</span></span>
<span class="line"><span style="color:#E1E4E8;">      emitXxx,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// setup中一般都是返回一个对象,对象中的属性和方法都可以在html模版中直接使用</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// data() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   return {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     count: 10,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// // 界面渲染后的生命周期回调</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// mounted() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   console.log(this)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// // 方法的</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   showMsg2() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     console.log(&#39;methods中的showMsg方法&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;Child子级组件&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;msg:{{ msg }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- &lt;h3&gt;count:{{ count }}&lt;/h3&gt; --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;emitXxx&quot;</span><span style="color:#24292E;">&gt;分发事件&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent, ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;Child&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  props: [</span><span style="color:#032F62;">&quot;msg&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// setup细节问题:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// setup是在beforeCreate生命周期回调之前就执行了,而且就执行一次</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 由此可以推断出:setup在执行的时候,当前的组件还没有创建出来,也就意味着:组件实例对象this根本就不能用</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// this是undefined,说明,就不能通过this再去调用data/computed/methods/props中的相关内容了</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 其实所有的composition API相关回调函数中也都不可以</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// setup中的返回值是一个对象,内部的属性和方法是给html模版使用的</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// setup中的对象内部的属性和data函数中的return对象的属性都可以在html模版中使用</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// setup中的对象中的属性和data函数中的对象中的属性会合并为组件对象的属性</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// setup中的对象中的方法和methods对象中的方法会合并为组件对象的方法</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 在Vue3中尽量不要混合的使用data和setup及methods和setup</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// beforeCreate() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   console.log(&#39;beforeCreate执行了&#39;)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 界面渲染完毕</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// mounted() {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// setup(props,context) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">attrs</span><span style="color:#24292E;">, </span><span style="color:#E36209;">slots</span><span style="color:#24292E;">, </span><span style="color:#E36209;">emit</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// props参数,是一个对象,里面有父级组件向子级组件传递的数据,并且是在子级组件中使用props接收到的所有的属性</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 包含props配置声明且传入了的所有属性的对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(props.msg)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(context.attrs)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(context.emit)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// context参数,是一个对象,里面有attrs对象(获取当前组件标签上的所有的属性的对象,但是该属性是在props中没有声明接收的所有的尚需经的对象),emit方法(分发事件的),slots对象(插槽)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(context.attrs.msg2)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;=============&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;setup执行了&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">showMsg1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;setup中的showMsg1方法&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 按钮的点击事件的回调函数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">emitXxx</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// context.emit(&#39;xxx&#39;,&#39;++&#39;)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;xxx&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;++&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      showMsg1,</span></span>
<span class="line"><span style="color:#24292E;">      emitXxx,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// setup中一般都是返回一个对象,对象中的属性和方法都可以在html模版中直接使用</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// data() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   return {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     count: 10,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// // 界面渲染后的生命周期回调</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// mounted() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   console.log(this)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// // 方法的</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// methods: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   showMsg2() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     console.log(&#39;methods中的showMsg方法&#39;)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>执行时机：</p><ul><li>在 beforeCreate 之前执行，且只执行一次</li><li>没有 this，打印是 undefined，相关功能放在了参数 props 和 context 里</li></ul><p>返回值：</p><ul><li>一般返回一个对象，对象中的数据会直接暴露给模板，模板可以直接使用</li><li>返回对象中的属性会与 data 函数返回对象的属性合并，一起成为组件对象的属性；返回对象中的方法会与 methods 中的方法合并成为组件对象的方法，如果有重名， setup 优先</li><li>一般不要混合使用 data 和 setup 及 methods 和 setup，因为 methods 中可以访问 setup 提供的属性和方法， 但在 setup 方法中不能访问 data 和 methods，因为没有 this 获取不到组件实例对象，就拿不到上面的 data 和 methods 的数据</li><li>setup 不能是一个 async 函数： 因为返回值不再是 return 的对象， 而是 promise， 模板看不到 return 对象中的属性数据（setup 不能添加 async）</li></ul><p>参数</p><ul><li>setup(props， context) / setup(props， {attrs， slots， emit}) 可以按需求解构自己需要使用的参数</li><li>props： 包含 props 组件间通信声明且传入了的所有属性的对象</li><li>attrs： 包含没有在 props 组件间通信中声明接收的属性的对象， 相当于 this.$attrs（获取当前组件标签上的所有属性，但是该属性是在 props 中没有被声明接收的，是一个对象）</li><li>slots： 包含所有传入的插槽内容的对象， 相当于 this.$slots</li><li>emit： 用来分发（触发）自定义事件的函数， 相当于 this.$emit</li></ul><p>注意：可以通过 getCurrentInstance 方法获得当前组件实例</p>`,14),t=[o];function e(c,r,E,y,i,u){return n(),a("div",null,t)}const D=s(p,[["render",e]]);export{m as __pageData,D as default};
