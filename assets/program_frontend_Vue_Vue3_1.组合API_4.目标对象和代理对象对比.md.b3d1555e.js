import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const d=JSON.parse('{"title":"目标对象和代理对象对比","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/4.目标对象和代理对象对比.md","filePath":"program/frontend/Vue/Vue3/1.组合API/4.目标对象和代理对象对比.md","lastUpdated":1694412824000}'),p={name:"program/frontend/Vue/Vue3/1.组合API/4.目标对象和代理对象对比.md"},o=l(`<h1 id="目标对象和代理对象对比" tabindex="-1">目标对象和代理对象对比 <a class="header-anchor" href="#目标对象和代理对象对比" aria-label="Permalink to &quot;目标对象和代理对象对比&quot;">​</a></h1><p>如果操作代理对象，目标对象中的数据也会随之变化，同时也会触发视图更新。 如果操作目标对象，目标对象的数据会发生变化，但是不会触发视图更新。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;操作代理数据影响界面更新渲染&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;名字：{{ user.name }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;年龄：{{ user.age }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;头发：{{ user.hair }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;性别：{{ user.gender }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;updateUser&quot;&gt;更新数据&lt;/button&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { reactive } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;App&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    const obj: any </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;法外狂徒张三&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      age: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      hair: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        length: </span><span style="color:#79B8FF;">180</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&quot;五彩缤纷的蓝&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    const user </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">(obj);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// user是代理对象，obj是目标对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当向哪一个对象中添加一个新属性时，会触发视图更新？</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当向哪一个对象中移除一个已经存在的属性时，会触发视图更新？</span></span>
<span class="line"><span style="color:#E1E4E8;">    const </span><span style="color:#B392F0;">updateUser</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 添加属性值</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// obj.gender = &quot;男&quot;;// 不触发视图更新，添加到了目标对象身上</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// user.gender = &quot;nan&quot;// 触发视图更新，而且这个数据也添加到了目标对象身上</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 也就是说，如果以后要操作数据，并且希望影响界面的更新，应该使用代理对象，而不是目标对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 删除属性值</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// delete obj.name; // 删除了目标对象的name属性，不触发视图更新</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// delete user.name; // 删除了目标对象的name属性，触发视图更新</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 总结：如果操作代理对象，目标对象中的数据也会随之变化，同时也会触发视图更新。</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(user);</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    return {</span></span>
<span class="line"><span style="color:#E1E4E8;">      user,</span></span>
<span class="line"><span style="color:#E1E4E8;">      updateUser,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;操作代理数据影响界面更新渲染&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;名字：{{ user.name }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;年龄：{{ user.age }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;头发：{{ user.hair }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;性别：{{ user.gender }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;updateUser&quot;&gt;更新数据&lt;/button&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { reactive } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;App&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    const obj: any </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;法外狂徒张三&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      age: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      hair: {</span></span>
<span class="line"><span style="color:#24292E;">        length: </span><span style="color:#005CC5;">180</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&quot;五彩缤纷的蓝&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    const user </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">(obj);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// user是代理对象，obj是目标对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当向哪一个对象中添加一个新属性时，会触发视图更新？</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当向哪一个对象中移除一个已经存在的属性时，会触发视图更新？</span></span>
<span class="line"><span style="color:#24292E;">    const </span><span style="color:#6F42C1;">updateUser</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 添加属性值</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// obj.gender = &quot;男&quot;;// 不触发视图更新，添加到了目标对象身上</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// user.gender = &quot;nan&quot;// 触发视图更新，而且这个数据也添加到了目标对象身上</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 也就是说，如果以后要操作数据，并且希望影响界面的更新，应该使用代理对象，而不是目标对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 删除属性值</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// delete obj.name; // 删除了目标对象的name属性，不触发视图更新</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// delete user.name; // 删除了目标对象的name属性，触发视图更新</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 总结：如果操作代理对象，目标对象中的数据也会随之变化，同时也会触发视图更新。</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(user);</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    return {</span></span>
<span class="line"><span style="color:#24292E;">      user,</span></span>
<span class="line"><span style="color:#24292E;">      updateUser,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,3),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
