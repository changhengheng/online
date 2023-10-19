import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const d=JSON.parse('{"title":"vue2 和 vue3 响应式的对比（面试必问）","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/5.vue2和vue3响应式的对比.md","filePath":"program/frontend/Vue/Vue3/1.组合API/5.vue2和vue3响应式的对比.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/5.vue2和vue3响应式的对比.md"},o=l(`<h1 id="vue2-和-vue3-响应式的对比-面试必问" tabindex="-1">vue2 和 vue3 响应式的对比（面试必问） <a class="header-anchor" href="#vue2-和-vue3-响应式的对比-面试必问" aria-label="Permalink to &quot;vue2 和 vue3 响应式的对比（面试必问）&quot;">​</a></h1><h3 id="vue2-的响应式" tabindex="-1">Vue2 的响应式 <a class="header-anchor" href="#vue2-的响应式" aria-label="Permalink to &quot;Vue2 的响应式&quot;">​</a></h3><ul><li>核心: <ul><li>对象: 通过 defineProperty 对对象的已有属性值的读取和修改进行劫持(监视/拦截)</li><li>数组: 通过重写数组更新数组一系列更新元素的方法（7 个）来实现元素修改的劫持</li></ul></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(data, </span><span style="color:#9ECBFF;">&quot;count&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(data, </span><span style="color:#032F62;">&quot;count&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><ul><li><p>问题</p><ul><li>对象直接新添加的属性或删除已有属性, 界面不会自动更新</li><li>直接通过下标替换元素或更新 length, 界面不会自动更新 arr[1] = {}</li></ul></li><li><p>解决</p><ul><li>vue2 为了解决数据响应式的这个问题，添加了一个$set 方法来确保数据的更新是响应式的</li></ul></li></ul><h3 id="vue3-的响应式" tabindex="-1">Vue3 的响应式 <a class="header-anchor" href="#vue3-的响应式" aria-label="Permalink to &quot;Vue3 的响应式&quot;">​</a></h3><ul><li><p>核心:</p><ul><li>通过 Proxy(代理): 拦截对 data 任意属性的任意(13 种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...</li><li>通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作</li><li>文档: <ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect</a></li></ul></li></ul></li><li><p>特点：</p><ul><li>深度监视：不论嵌套了多少层，都能保证是响应式的</li><li>效率更高：不用为每个数据添加 get 和 set，因此当数据量很大时的效率相比 vue2 更高（因为少了很多 get 和 set）</li></ul></li></ul><p>Proxy 代理对象</p><ul><li>实现（把普通对象变成响应式对象的）数据代理的操作，官网是这么说的：“Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。”</li><li>语法 <ul><li>const p = new Proxy(target, handler)</li><li>参数 <ul><li>target（目标对象） 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。</li><li>handler（处理器对象，用来监视数据的变化，有 13 个方法，比如get和set，通过这13个方法来拦截各种操作（通常是Reflect反射对象的方法的操作）） 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。</li></ul></li></ul></li></ul><p>Reflect 反射对象</p><ul><li>拦截 JavaScript 的操作，然后反射回来。Reflect 是一个内置的对象，但不是一个函数对象，因此它是不可构造（new）的，只能通过 Reflect 对象直接调用其静态方法来执行某些操作（就像Math对象一样）。</li><li>为什么要了解这个，因为 Proxy 代理对象内部 handler 处理器对象当中的监视数据的方法都是 Reflect 的方法（都是通过 Reflect 实现的）。</li></ul><p>vue3 响应式实现的代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;!</span><span style="color:#79B8FF;">DOCTYPE</span><span style="color:#E1E4E8;"> html</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">http-equiv</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;X-UA-Compatible&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;IE=edge&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;Document&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text/javascript&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        // 目标对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        const user = {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name:</span><span style="color:#9ECBFF;">&quot;法外狂徒张三&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            age:</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            hair:{</span></span>
<span class="line"><span style="color:#E1E4E8;">                color:</span><span style="color:#9ECBFF;">&quot;红&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                length:</span><span style="color:#79B8FF;">180</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        // 把目标对象变成代理对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        // 参数1：user，代表target目标对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        // 参数2：handler，处理器对象，用来监视数据，及数据的操作</span></span>
<span class="line"><span style="color:#E1E4E8;">        const proxyUser = new Proxy(user,{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// get方法可以获取目标对象的某个属性值</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(target,prop){</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.log (</span><span style="color:#9ECBFF;">&quot;get方法执行了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 跟请求/响应拦截器差不多，要把拦截到的东西通过Reflect反射对象继续返回出去</span></span>
<span class="line"><span style="color:#E1E4E8;">                return Reflect.get(target,prop)</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// set方法可以修改目标对象的属性值，也可以为目标对象添加新的属性</span></span>
<span class="line"><span style="color:#E1E4E8;">            set(target,prop,val){</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.log (</span><span style="color:#9ECBFF;">&quot;set方法调用了&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                return Reflect.set(target,prop,val)</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 删除目标对象上的某个属性</span></span>
<span class="line"><span style="color:#E1E4E8;">            deleteProperty(target,prop){</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.log(</span><span style="color:#9ECBFF;">&quot;deleteProperty方法调用了&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                return Reflect.deleteProperty(target,prop)</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 通过代理对象获取目标对象中的某个属性值</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.log (proxyUser.name);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 通过代理对象更新目标对象中的某个属性值</span></span>
<span class="line"><span style="color:#E1E4E8;">        proxyUser.name = </span><span style="color:#9ECBFF;">&quot;李四&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 查看目标对象是否更新</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.log (user);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 通过代理对象向目标对象中添加一个新的属性</span></span>
<span class="line"><span style="color:#E1E4E8;">        proxyUser.gender=</span><span style="color:#9ECBFF;">&quot;男&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.log(user)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 删除代理对象中的一个属性</span></span>
<span class="line"><span style="color:#E1E4E8;">        delete proxyUser.name</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.log(user)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 更新深层嵌套的目标对象的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        proxyUser.hair.length=280</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.log(user)</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;!</span><span style="color:#005CC5;">DOCTYPE</span><span style="color:#24292E;"> html</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">http-equiv</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;X-UA-Compatible&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;IE=edge&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;Document&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text/javascript&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        // 目标对象</span></span>
<span class="line"><span style="color:#24292E;">        const user = {</span></span>
<span class="line"><span style="color:#24292E;">            name:</span><span style="color:#032F62;">&quot;法外狂徒张三&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            age:</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            hair:{</span></span>
<span class="line"><span style="color:#24292E;">                color:</span><span style="color:#032F62;">&quot;红&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                length:</span><span style="color:#005CC5;">180</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        // 把目标对象变成代理对象</span></span>
<span class="line"><span style="color:#24292E;">        // 参数1：user，代表target目标对象</span></span>
<span class="line"><span style="color:#24292E;">        // 参数2：handler，处理器对象，用来监视数据，及数据的操作</span></span>
<span class="line"><span style="color:#24292E;">        const proxyUser = new Proxy(user,{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// get方法可以获取目标对象的某个属性值</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(target,prop){</span></span>
<span class="line"><span style="color:#24292E;">                console.log (</span><span style="color:#032F62;">&quot;get方法执行了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 跟请求/响应拦截器差不多，要把拦截到的东西通过Reflect反射对象继续返回出去</span></span>
<span class="line"><span style="color:#24292E;">                return Reflect.get(target,prop)</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// set方法可以修改目标对象的属性值，也可以为目标对象添加新的属性</span></span>
<span class="line"><span style="color:#24292E;">            set(target,prop,val){</span></span>
<span class="line"><span style="color:#24292E;">                console.log (</span><span style="color:#032F62;">&quot;set方法调用了&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                return Reflect.set(target,prop,val)</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 删除目标对象上的某个属性</span></span>
<span class="line"><span style="color:#24292E;">            deleteProperty(target,prop){</span></span>
<span class="line"><span style="color:#24292E;">                console.log(</span><span style="color:#032F62;">&quot;deleteProperty方法调用了&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                return Reflect.deleteProperty(target,prop)</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 通过代理对象获取目标对象中的某个属性值</span></span>
<span class="line"><span style="color:#24292E;">        console.log (proxyUser.name);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 通过代理对象更新目标对象中的某个属性值</span></span>
<span class="line"><span style="color:#24292E;">        proxyUser.name = </span><span style="color:#032F62;">&quot;李四&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 查看目标对象是否更新</span></span>
<span class="line"><span style="color:#24292E;">        console.log (user);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 通过代理对象向目标对象中添加一个新的属性</span></span>
<span class="line"><span style="color:#24292E;">        proxyUser.gender=</span><span style="color:#032F62;">&quot;男&quot;</span></span>
<span class="line"><span style="color:#24292E;">        console.log(user)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 删除代理对象中的一个属性</span></span>
<span class="line"><span style="color:#24292E;">        delete proxyUser.name</span></span>
<span class="line"><span style="color:#24292E;">        console.log(user)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 更新深层嵌套的目标对象的数据</span></span>
<span class="line"><span style="color:#24292E;">        proxyUser.hair.length=280</span></span>
<span class="line"><span style="color:#24292E;">        console.log(user)</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/html&gt;</span></span></code></pre></div>`,13),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};
