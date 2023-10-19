import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const g=JSON.parse('{"title":"reactive 的基本使用","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/3.reactive的基本使用.md","filePath":"program/frontend/Vue/Vue3/1.组合API/3.reactive的基本使用.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/3.reactive的基本使用.md"},e=l(`<h1 id="reactive-的基本使用" tabindex="-1">reactive 的基本使用 <a class="header-anchor" href="#reactive-的基本使用" aria-label="Permalink to &quot;reactive 的基本使用&quot;">​</a></h1><p>作用：定义多个数据的响应式 使用：<code>const proxy = reactive(obj)</code>，接收一个普通对象然后返回该普通对象的响应式代理器对象 响应式转换是“深层的”：会影响对象内部所有嵌套的属性（不管嵌套了多少层） 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的</p><p>示例代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;reactive的基本使用&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  // 4. 使用ref数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;名字：{{ user.name }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;年龄：{{ user.age }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;头发：{{ user.hair }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;updateUser&quot;&gt;更新数据&lt;/button&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">// 1. 引入reactive函数</span></span>
<span class="line"><span style="color:#E1E4E8;">import { reactive } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;App&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 需求：显示用户的相关信息，点击按钮，可以更新用户端相关信息系数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 目标对象obj</span></span>
<span class="line"><span style="color:#E1E4E8;">    const obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;法外狂徒张三&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      hair: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        length: </span><span style="color:#79B8FF;">180</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&quot;五彩缤纷的蓝&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2. 使用reactive把复杂数据变成响应式的数据，返回一个Proxy的代理对象user，被代理者（目标对象）是reactive函数里传入的对象obj</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 代理对象user，类型是Proxy</span></span>
<span class="line"><span style="color:#E1E4E8;">    const user </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 打印一下这个响应式代理器对象，其中handler是处理器，target就是传入的目标对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log (user);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">      Proxy {name: &#39;法外狂徒张三&#39;, age: 18, hair: {…}}</span></span>
<span class="line"><span style="color:#6A737D;">        [[Handler]]: Object</span></span>
<span class="line"><span style="color:#6A737D;">          deleteProperty: ƒ deleteProperty(target, key)</span></span>
<span class="line"><span style="color:#6A737D;">          get: ƒ (target, key, receiver)</span></span>
<span class="line"><span style="color:#6A737D;">          has: ƒ has(target, key)</span></span>
<span class="line"><span style="color:#6A737D;">          ownKeys: ƒ ownKeys(target)</span></span>
<span class="line"><span style="color:#6A737D;">          set: ƒ (target, key, value, receiver)</span></span>
<span class="line"><span style="color:#6A737D;">          [[Prototype]]: Object</span></span>
<span class="line"><span style="color:#6A737D;">        [[Target]]: Object</span></span>
<span class="line"><span style="color:#6A737D;">          age: 18</span></span>
<span class="line"><span style="color:#6A737D;">          hair: {length: 180, color: &#39;五彩缤纷的蓝&#39;}</span></span>
<span class="line"><span style="color:#6A737D;">          name: &quot;法外狂徒张三&quot;</span></span>
<span class="line"><span style="color:#6A737D;">          [[Prototype]]: Object</span></span>
<span class="line"><span style="color:#6A737D;">        [[IsRevoked]]: false</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    const </span><span style="color:#B392F0;">updateUser</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 直接以目标对象更新对象中成员的值的方式所更新的数据不是响应式的，只有使用代理对象的方式来更新数据才是响应式的</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// obj.name += &#39;1&#39; // 不触发视图更新</span></span>
<span class="line"><span style="color:#E1E4E8;">      user.name </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      user.age </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      user.hair.color </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;五彩斑斓的黑&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    return {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 3. 把数据暴露出去</span></span>
<span class="line"><span style="color:#E1E4E8;">      user,</span></span>
<span class="line"><span style="color:#E1E4E8;">      updateUser</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;reactive的基本使用&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  // 4. 使用ref数据</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;名字：{{ user.name }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;年龄：{{ user.age }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;头发：{{ user.hair }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;updateUser&quot;&gt;更新数据&lt;/button&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">// 1. 引入reactive函数</span></span>
<span class="line"><span style="color:#24292E;">import { reactive } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;App&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 需求：显示用户的相关信息，点击按钮，可以更新用户端相关信息系数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 目标对象obj</span></span>
<span class="line"><span style="color:#24292E;">    const obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;法外狂徒张三&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      age: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      hair: {</span></span>
<span class="line"><span style="color:#24292E;">        length: </span><span style="color:#005CC5;">180</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&quot;五彩缤纷的蓝&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2. 使用reactive把复杂数据变成响应式的数据，返回一个Proxy的代理对象user，被代理者（目标对象）是reactive函数里传入的对象obj</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 代理对象user，类型是Proxy</span></span>
<span class="line"><span style="color:#24292E;">    const user </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">(obj);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 打印一下这个响应式代理器对象，其中handler是处理器，target就是传入的目标对象</span></span>
<span class="line"><span style="color:#24292E;">    console.log (user);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">      Proxy {name: &#39;法外狂徒张三&#39;, age: 18, hair: {…}}</span></span>
<span class="line"><span style="color:#6A737D;">        [[Handler]]: Object</span></span>
<span class="line"><span style="color:#6A737D;">          deleteProperty: ƒ deleteProperty(target, key)</span></span>
<span class="line"><span style="color:#6A737D;">          get: ƒ (target, key, receiver)</span></span>
<span class="line"><span style="color:#6A737D;">          has: ƒ has(target, key)</span></span>
<span class="line"><span style="color:#6A737D;">          ownKeys: ƒ ownKeys(target)</span></span>
<span class="line"><span style="color:#6A737D;">          set: ƒ (target, key, value, receiver)</span></span>
<span class="line"><span style="color:#6A737D;">          [[Prototype]]: Object</span></span>
<span class="line"><span style="color:#6A737D;">        [[Target]]: Object</span></span>
<span class="line"><span style="color:#6A737D;">          age: 18</span></span>
<span class="line"><span style="color:#6A737D;">          hair: {length: 180, color: &#39;五彩缤纷的蓝&#39;}</span></span>
<span class="line"><span style="color:#6A737D;">          name: &quot;法外狂徒张三&quot;</span></span>
<span class="line"><span style="color:#6A737D;">          [[Prototype]]: Object</span></span>
<span class="line"><span style="color:#6A737D;">        [[IsRevoked]]: false</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 方法</span></span>
<span class="line"><span style="color:#24292E;">    const </span><span style="color:#6F42C1;">updateUser</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 直接以目标对象更新对象中成员的值的方式所更新的数据不是响应式的，只有使用代理对象的方式来更新数据才是响应式的</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// obj.name += &#39;1&#39; // 不触发视图更新</span></span>
<span class="line"><span style="color:#24292E;">      user.name </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;1&#39;</span></span>
<span class="line"><span style="color:#24292E;">      user.age </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">      user.hair.color </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;五彩斑斓的黑&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    return {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 3. 把数据暴露出去</span></span>
<span class="line"><span style="color:#24292E;">      user,</span></span>
<span class="line"><span style="color:#24292E;">      updateUser</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>reactive 用来定义一个响应式数据（使用时需要引入），一般用来定义对象类型的响应式数据。reactive 的响应式转换是深层的，即无论数据嵌套了多少层都能保证它最终返回时是响应式的。内部是基于 ES6 的 Proxy 实现的。reactive 返回一个 Proxy 对象（代理对象），是代理者；其中传入的原始数据是目标对象，是被代理者。对目标对象的所有操作都是通过代理对象来操作被代理对象的内部属性来实现的。代理对象即 Proxy 对象中有一个 handler 对象和一个 target 对象（都不能操作），target 对象即传入 reactive 的目标对象，handler 是处理器对象，内部有很多方法（比如 get 和 set）用以对 target 对象进行处理。直接更新目标对象的数据不是响应式的，只有使用代理对象的方式更新数据才是响应式的。而且，操作代理对象时，目标对象中的数据也会随之变化，同时，以为代理对象的操作是响应式的，所以视图也会跟着更新。与 ref 相比，操作值时不需要.value。</p><h3 id="怎么理解-reactive-的响应式是深层的" tabindex="-1">怎么理解 reactive 的响应式是深层的 <a class="header-anchor" href="#怎么理解-reactive-的响应式是深层的" aria-label="Permalink to &quot;怎么理解 reactive 的响应式是深层的&quot;">​</a></h3><p>reactive 的响应式数据的转换只针对目标对象本身，而不针对目标对象的具体属性。即，reactive只保证对对象本身的操作（即使是操作属性）是响应式，而不会将每一个属性都变成响应式的（单独把属性拿出来就不是响应式的了）。深层转换是指使用 reactive 转换后，无论嵌套多少层都保证对象中的属性是响应式的。</p><p>比如一个对象嵌套了一个对象，对外层对象使用 reactive 进行转换形成 Proxy 对象之后，对其整体进行操作（即使是操作内部嵌套的对象的属性）都能保证是响应式的，但是如果使用 v-for 遍历拿到了其中的属性（即使是内部嵌套的对象）来进行展示，这个属性就不是响应式的了。此时一般会使用 toRefs 来保证一个 Proxy 对象内部的属性都是响应式的，从而解决这个问题。</p>`,9),o=[e];function t(c,r,E,y,i,u){return n(),a("div",null,o)}const D=s(p,[["render",t]]);export{g as __pageData,D as default};
