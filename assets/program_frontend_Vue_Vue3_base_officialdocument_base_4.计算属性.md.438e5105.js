import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.19358895.js";const f=JSON.parse('{"title":"计算属性","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/base/officialdocument/base/4.计算属性.md","filePath":"program/frontend/Vue/Vue3/base/officialdocument/base/4.计算属性.md","lastUpdated":1695182270000}'),l={name:"program/frontend/Vue/Vue3/base/officialdocument/base/4.计算属性.md"},p=e(`<h1 id="计算属性" tabindex="-1">计算属性 <a class="header-anchor" href="#计算属性" aria-label="Permalink to &quot;计算属性&quot;">​</a></h1><p>问题：模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。</p><p>解决：计算属性用来描述依赖响应式状态的复杂逻辑。</p><p>用法：computed() 方法接收一个 getter 函数，返回值为一个 计算属性 ref 对象。</p><p>注意：</p><ul><li>计算属性 ref 对象 也会在模板中自动解包，因此在模板表达式中引用时无需添加 .value。</li><li>Vue 的计算属性会自动追踪响应式依赖。即，当计算属性 ref 对象的响应式依赖改变时，任何依赖于 计算属性 ref 对象 的绑定都会同时更新。而非响应式依赖，比如 Date.now()，虽然每次执行时几乎都会发生改变，但不会被自动追踪。</li></ul><blockquote><p>常见的声明响应式状态的方法：ref()、reactive()，常见的响应式状态数据：Ref 对象、proxy 代理对象 普通数据不是响应式的</p></blockquote><h2 id="计算属性缓存-vs-方法" tabindex="-1">计算属性缓存 vs 方法 <a class="header-anchor" href="#计算属性缓存-vs-方法" aria-label="Permalink to &quot;计算属性缓存 vs 方法&quot;">​</a></h2><p>在模板中使用文本插值语法调用一个方法可以获得和计算属性相同的结果，但不同之处在于计算属性值会基于其响应式依赖被缓存。</p><p>一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着，只要计算属性的响应式依赖没有发生改变，无论访问多少次计算属性都会立即返回之前的计算结果，而不用重复执行 getter 函数。</p><p>相比之下，方法调用总是会在重渲染发生时再次执行函数。</p><h2 id="可写计算属性" tabindex="-1">可写计算属性 <a class="header-anchor" href="#可写计算属性" aria-label="Permalink to &quot;可写计算属性&quot;">​</a></h2><p>计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { ref, computed } from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const firstName = ref(&#39;John&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">const lastName = ref(&#39;Doe&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const fullName = computed({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// getter</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return firstName.value + </span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;"> + lastName.value</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// setter</span></span>
<span class="line"><span style="color:#E1E4E8;">  set(newValue) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 注意：我们这里使用的是解构赋值语法</span></span>
<span class="line"><span style="color:#E1E4E8;">    [firstName.value, lastName.value] = newValue.split(</span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { ref, computed } from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const firstName = ref(&#39;John&#39;)</span></span>
<span class="line"><span style="color:#24292E;">const lastName = ref(&#39;Doe&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const fullName = computed({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// getter</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    return firstName.value + </span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;"> + lastName.value</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// setter</span></span>
<span class="line"><span style="color:#24292E;">  set(newValue) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 注意：我们这里使用的是解构赋值语法</span></span>
<span class="line"><span style="color:#24292E;">    [firstName.value, lastName.value] = newValue.split(</span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span></code></pre></div><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><ul><li><p>Getter 不应有副作用 ​ 计算属性的 getter 应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，不要在 getter 中做异步请求或者更改 DOM！一个计算属性的声明中描述的是如何根据其他值派生一个值。因此 getter 的职责应该仅为计算和返回该值。在之后的指引中我们会讨论如何使用侦听器根据其他响应式状态的变更来创建副作用。</p></li><li><p>避免直接修改计算属性值 ​ 从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。</p></li></ul>`,16),o=[p];function t(c,r,i,E,y,u){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{f as __pageData,m as default};
