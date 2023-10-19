import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const m=JSON.parse('{"title":"computed 和 watch","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/8.computed和watch.md","filePath":"program/frontend/Vue/Vue3/1.组合API/8.computed和watch.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/8.computed和watch.md"},o=l(`<h1 id="computed-和-watch" tabindex="-1">computed 和 watch <a class="header-anchor" href="#computed-和-watch" aria-label="Permalink to &quot;computed 和 watch&quot;">​</a></h1><ul><li>computed 函数: <ul><li>与 computed 配置功能一致</li><li>只有 getter</li><li>有 getter 和 setter</li></ul></li><li>watch 函数 <ul><li>与 watch 配置功能一致</li><li>监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调</li><li>默认初始时不执行回调, 但可以通过配置 immediate 为 true, 来指定初始时立即执行第一次</li><li>通过配置 deep 为 true, 来指定深度监视</li><li>如果是 ref 对象, 直接指定</li><li>如果是 reactive 对象中的属性, 必须通过函数来指定</li><li>watch 多个数据: 使用数组来指定</li></ul></li><li>watchEffect 函数 <ul><li>不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据</li><li>默认初始时就会执行第一次, 从而可以收集需要监视的数据</li><li>监视数据发生变化时回调</li></ul></li></ul><p>练习代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;计算和监视&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fieldset</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">legend</span><span style="color:#E1E4E8;">&gt;姓名操作&lt;/</span><span style="color:#85E89D;">legend</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    姓氏：&lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;请输入姓氏&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;user.firstName&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    名字：&lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;请输入名字&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;user.lastName&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">fieldset</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">fieldset</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">legend</span><span style="color:#E1E4E8;">&gt;计算属性和监视的演示&lt;/</span><span style="color:#85E89D;">legend</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    // 4. 使用computed的值 姓名：&lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;显示姓名&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;fullName1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    姓名：&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;显示姓名&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;fullName2&quot;</span><span style="color:#E1E4E8;"> /&gt;&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    姓名：&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;显示姓名&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;fullName3&quot;</span><span style="color:#E1E4E8;"> /&gt;&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">fieldset</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">// 1. 引入computed函数</span></span>
<span class="line"><span style="color:#E1E4E8;">import {</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed,</span></span>
<span class="line"><span style="color:#E1E4E8;">  defineComponent,</span></span>
<span class="line"><span style="color:#E1E4E8;">  reactive,</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ref,</span></span>
<span class="line"><span style="color:#E1E4E8;">  watchEffect,</span></span>
<span class="line"><span style="color:#E1E4E8;">} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;App&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    const user </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      firstName: </span><span style="color:#9ECBFF;">&quot;法外狂徒张&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lastName: </span><span style="color:#9ECBFF;">&quot;三&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      haha:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        aaa:</span><span style="color:#9ECBFF;">&quot;aa&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log (</span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">,user);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 使用计算属性get实现第一个姓名的显示</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// vue3的计算属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 计算属性是一个函数，参数是一个回调函数，表示的是get</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2. 调用computed函数，并声明一个变量保存返回值</span></span>
<span class="line"><span style="color:#E1E4E8;">    const fullName1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> user.firstName </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;_&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> user.lastName;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log(fullName1); </span><span style="color:#6A737D;">// computed属性计算的值是一个ref类型的对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">      ComputedRefImpl</span></span>
<span class="line"><span style="color:#6A737D;">        dep: Set(1) {ReactiveEffect}</span></span>
<span class="line"><span style="color:#6A737D;">        effect: ReactiveEffect {active: true, deps: Array(2), parent: undefined, fn: ƒ, scheduler: ƒ, …}</span></span>
<span class="line"><span style="color:#6A737D;">        __v_isReadonly: true</span></span>
<span class="line"><span style="color:#6A737D;">        __v_isRef: true</span></span>
<span class="line"><span style="color:#6A737D;">        _cacheable: true</span></span>
<span class="line"><span style="color:#6A737D;">        _dirty: false</span></span>
<span class="line"><span style="color:#6A737D;">        _setter: () =&gt; {…}</span></span>
<span class="line"><span style="color:#6A737D;">        _value: &quot;法外狂徒张_三&quot;</span></span>
<span class="line"><span style="color:#6A737D;">        value: &quot;法外狂徒张_三&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 使用计算属性get和set实现第二个姓名的显示</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果要在计算属性中同时使用get和set，参数需要传入一个对象，对象中写get函数和set函数，set函数的参数是修改后的新值</span></span>
<span class="line"><span style="color:#E1E4E8;">    const fullName2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> user.firstName </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;_&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> user.lastName;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(val, &quot;更新的值&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">names</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;_&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        user.firstName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> names[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">        user.lastName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> names[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 监视属性实现第三个姓名的现实</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 监视属性也是一个函数，函数的参数分别是要监视的数据以及一个回调，回调的默认参数是监视的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 和vue2一样的，这个回调默认一上来是不执行的，如果想一开始默认就执行一次，可以设置第三个参数。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 深度监视（监视多层嵌套的数据）也是在第三个参数里配置的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// watch(user, (val) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   console.log(val === user, &quot;监视的数据&quot;);// true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// });</span></span>
<span class="line"><span style="color:#E1E4E8;">    const fullName3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ({ </span><span style="color:#FFAB70;">firstName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">lastName</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">fullName3</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> firstName </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;_&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> lastName;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { </span><span style="color:#B392F0;">immediate</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">deep</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// vue3的watchEffect和watch功能一样，只不过会默认执行一次，参数是一个回调</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// watchEffect(()=&gt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   fullName3.value = user.firstName + &#39;_&#39; + user.lastName;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 使用watchEffect监视fullName3的数据，改变firstName和lastName</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">watchEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">names</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fullName3.value.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;_&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">firstName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> names[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">lastName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> names[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 使用watch监视多个数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 参数一是一个数组，存放所有需要监视的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// watch([user.firstName,user.lastName,fullName3],()=&gt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   // 前两个数据变化时这里的代码没有执行，fullName3改变时才执行了，因为fullName3是响应式数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   console.log (111);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当我们使用watch监视非响应式数据的时候，需要写成回调的形式（疑问：为什么user的firstName和lastName不是响应式的？）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// watch([user.firstName, user.lastName, fullName3], () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   // 前两个数据变化时这里的代码没有执行，fullName3改变时才执行了，因为fullName3是响应式数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   console.log(111);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">([()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">user.firstName, ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">user.lastName], () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 前两个数据变化时这里的代码没有执行，fullName3改变时才执行了，因为fullName3是响应式数据</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">console</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">111</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    return {</span></span>
<span class="line"><span style="color:#E1E4E8;">      user,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 3. 把computed函数的返回值暴露出去，在模板中使用</span></span>
<span class="line"><span style="color:#E1E4E8;">      fullName1,</span></span>
<span class="line"><span style="color:#E1E4E8;">      fullName2,</span></span>
<span class="line"><span style="color:#E1E4E8;">      fullName3,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;计算和监视&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fieldset</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">legend</span><span style="color:#24292E;">&gt;姓名操作&lt;/</span><span style="color:#22863A;">legend</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    姓氏：&lt;</span><span style="color:#22863A;">input</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">placeholder</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;请输入姓氏&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;user.firstName&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    名字：&lt;</span><span style="color:#22863A;">input</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">placeholder</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;请输入名字&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;user.lastName&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">fieldset</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">fieldset</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">legend</span><span style="color:#24292E;">&gt;计算属性和监视的演示&lt;/</span><span style="color:#22863A;">legend</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    // 4. 使用computed的值 姓名：&lt;</span><span style="color:#22863A;">input</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">placeholder</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;显示姓名&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;fullName1&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    姓名：&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">placeholder</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;显示姓名&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;fullName2&quot;</span><span style="color:#24292E;"> /&gt;&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    姓名：&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">placeholder</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;显示姓名&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;fullName3&quot;</span><span style="color:#24292E;"> /&gt;&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">fieldset</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">// 1. 引入computed函数</span></span>
<span class="line"><span style="color:#24292E;">import {</span></span>
<span class="line"><span style="color:#24292E;">  computed,</span></span>
<span class="line"><span style="color:#24292E;">  defineComponent,</span></span>
<span class="line"><span style="color:#24292E;">  reactive,</span></span>
<span class="line"><span style="color:#24292E;">  watch,</span></span>
<span class="line"><span style="color:#24292E;">  ref,</span></span>
<span class="line"><span style="color:#24292E;">  watchEffect,</span></span>
<span class="line"><span style="color:#24292E;">} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;App&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    const user </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      firstName: </span><span style="color:#032F62;">&quot;法外狂徒张&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      lastName: </span><span style="color:#032F62;">&quot;三&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      haha:{</span></span>
<span class="line"><span style="color:#24292E;">        aaa:</span><span style="color:#032F62;">&quot;aa&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    console.log (</span><span style="color:#032F62;">&quot;user&quot;</span><span style="color:#24292E;">,user);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用计算属性get实现第一个姓名的显示</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// vue3的计算属性</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 计算属性是一个函数，参数是一个回调函数，表示的是get</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2. 调用computed函数，并声明一个变量保存返回值</span></span>
<span class="line"><span style="color:#24292E;">    const fullName1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> user.firstName </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;_&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> user.lastName;</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    console.log(fullName1); </span><span style="color:#6A737D;">// computed属性计算的值是一个ref类型的对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">      ComputedRefImpl</span></span>
<span class="line"><span style="color:#6A737D;">        dep: Set(1) {ReactiveEffect}</span></span>
<span class="line"><span style="color:#6A737D;">        effect: ReactiveEffect {active: true, deps: Array(2), parent: undefined, fn: ƒ, scheduler: ƒ, …}</span></span>
<span class="line"><span style="color:#6A737D;">        __v_isReadonly: true</span></span>
<span class="line"><span style="color:#6A737D;">        __v_isRef: true</span></span>
<span class="line"><span style="color:#6A737D;">        _cacheable: true</span></span>
<span class="line"><span style="color:#6A737D;">        _dirty: false</span></span>
<span class="line"><span style="color:#6A737D;">        _setter: () =&gt; {…}</span></span>
<span class="line"><span style="color:#6A737D;">        _value: &quot;法外狂徒张_三&quot;</span></span>
<span class="line"><span style="color:#6A737D;">        value: &quot;法外狂徒张_三&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用计算属性get和set实现第二个姓名的显示</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果要在计算属性中同时使用get和set，参数需要传入一个对象，对象中写get函数和set函数，set函数的参数是修改后的新值</span></span>
<span class="line"><span style="color:#24292E;">    const fullName2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> user.firstName </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;_&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> user.lastName;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(val, &quot;更新的值&quot;);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">names</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;_&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        user.firstName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> names[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">        user.lastName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> names[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 监视属性实现第三个姓名的现实</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 监视属性也是一个函数，函数的参数分别是要监视的数据以及一个回调，回调的默认参数是监视的数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 和vue2一样的，这个回调默认一上来是不执行的，如果想一开始默认就执行一次，可以设置第三个参数。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 深度监视（监视多层嵌套的数据）也是在第三个参数里配置的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// watch(user, (val) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   console.log(val === user, &quot;监视的数据&quot;);// true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// });</span></span>
<span class="line"><span style="color:#24292E;">    const fullName3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">user</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      ({ </span><span style="color:#E36209;">firstName</span><span style="color:#24292E;">, </span><span style="color:#E36209;">lastName</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">fullName3</span><span style="color:#24292E;">.</span><span style="color:#E36209;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> firstName </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;_&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> lastName;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      { </span><span style="color:#6F42C1;">immediate</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">deep</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// vue3的watchEffect和watch功能一样，只不过会默认执行一次，参数是一个回调</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// watchEffect(()=&gt;{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   fullName3.value = user.firstName + &#39;_&#39; + user.lastName;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用watchEffect监视fullName3的数据，改变firstName和lastName</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">watchEffect</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">names</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fullName3.value.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;_&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">.</span><span style="color:#E36209;">firstName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> names[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">.</span><span style="color:#E36209;">lastName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> names[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用watch监视多个数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 参数一是一个数组，存放所有需要监视的数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// watch([user.firstName,user.lastName,fullName3],()=&gt;{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   // 前两个数据变化时这里的代码没有执行，fullName3改变时才执行了，因为fullName3是响应式数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   console.log (111);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当我们使用watch监视非响应式数据的时候，需要写成回调的形式（疑问：为什么user的firstName和lastName不是响应式的？）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// watch([user.firstName, user.lastName, fullName3], () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   // 前两个数据变化时这里的代码没有执行，fullName3改变时才执行了，因为fullName3是响应式数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   console.log(111);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// });</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">([()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">user.firstName, ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">user.lastName], () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 前两个数据变化时这里的代码没有执行，fullName3改变时才执行了，因为fullName3是响应式数据</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">console</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">111</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    return {</span></span>
<span class="line"><span style="color:#24292E;">      user,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 3. 把computed函数的返回值暴露出去，在模板中使用</span></span>
<span class="line"><span style="color:#24292E;">      fullName1,</span></span>
<span class="line"><span style="color:#24292E;">      fullName2,</span></span>
<span class="line"><span style="color:#24292E;">      fullName3,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>computed 的用法：</p><ul><li>只有 get 时，只涉及读值操作，参数是一个回调，这个回调就代表 get 函数，每次依赖的数据发生变化时都会重新计算，每次读取计算数据时都会触发这个回调，该回调需要一个返回值作为计算（读值操作）的结果。</li><li>computed 返回一个 ComputedRefImpl 对象，该对象是响应式的，也就是说每次计算出来的值都会触发视图更新。该对象有一个.value 属性保存着计算出来的值，该属性是只读的。</li><li>同时使用 get 和 set 时，涉及读和写的操作，参数需要传入一个对象，对象中写 get 函数和 set 函数，set 函数的参数是修改后的新值，每次依赖的数据发生变化是都会重新计算，每次写入计算数据时都会触发 set 的回调</li></ul><p>watch 的用法：</p><ul><li>监视指定的一个或多个响应式数据，一旦数据变化，就自动执行监视回调</li><li>监视一个数据： <ul><li>参数 1 是要监视的数据，必须是响应式的，且必须是对象类型（不是对象会报错:A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types. ）。参数 2 是对应的回调，回调的默认参数是监视的数据，当响应式数据发生变化时会自动执行对应的回调。</li><li>和 vue2 一样，这个回调默认一上来是不执行的，如果想一开始默认就执行一次，可以设置第三个参数。参数 3 是一个配置对象，其中可以配置 watch 函数的两个特性：deep（深度监视）、immediate（初始化时是否执行一次回调）</li></ul></li><li>监视多个数据 <ul><li>使用数组来指定参数 1 即可</li></ul></li></ul><p>watchEffect 的用法：</p><ul><li>功能和 watch 一样，只不过默认会执行一次，从而可以收集需要监视的数据</li><li>参数是一个回调，不用直接指定要监视的数据， 回调函数中使用了哪些响应式数据就监视哪些响应式数据</li><li>监视数据发生变化时调用回调</li></ul><p>注意：</p><ul><li>如果是 ref 对象, 直接指定</li><li>如果是 reactive 对象中的属性, 必须通过函数来指定</li><li>watch 的返回值一般不用，一般会配合需要检测的数据来实现某些操作</li></ul>`,13),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{m as __pageData,A as default};
