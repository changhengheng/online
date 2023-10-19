import{_ as e,o as a,c as r,Q as t}from"./chunks/framework.419948d5.js";const _=JSON.parse('{"title":"响应式基础","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/base/officialdocument/base/3.响应式基础.md","filePath":"program/frontend/Vue/Vue3/base/officialdocument/base/3.响应式基础.md","lastUpdated":1695205095000}'),i={name:"program/frontend/Vue/Vue3/base/officialdocument/base/3.响应式基础.md"},o=t('<h1 id="响应式基础" tabindex="-1">响应式基础 <a class="header-anchor" href="#响应式基础" aria-label="Permalink to &quot;响应式基础&quot;">​</a></h1><h2 id="ref" tabindex="-1">ref() <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref()&quot;">​</a></h2><p>推荐使用 ref() 函数来声明响应式状态，ref() 返回一个带 value 属性的 ref 对象。</p><p>要在模板中使用 ref 对象，需要在 setup()中声明并返回。在 setup() 中需要暴露大量状态和方法时会非常繁琐，Vue 提供了一个 <code>&lt;script setup&gt;</code> 语法糖简化导出操作，<code>&lt;script setup&gt;</code> 中的顶层的导入、声明的变量和函数可在同一组件的模板中直接使用，语法更加简洁。</p><p>模版中使用 ref 对象会自动解包。</p><p>相比于普通对象，ref 对象是响应式的：当一个组件首次渲染时，Vue 会追踪在渲染过程中使用的每一个 ref。然后，当一个 ref 被修改时，它会触发追踪它的组件的一次重新渲染，即数据变化引起视图更新。普通对象不具备这种功能，因为无法检测到普通对象的访问或修改操作。而检测 ref 对象的访问和修改操作是通过其.value 属性实现的（value 属性添加了 getter 和 setter）。</p><blockquote><p>普通变量使用 let 才可以修改值， ref 对象是个引用类型，即使传参是基本类型数据，也可以在 const 定义的时候，直接通过 .value 来修改其值</p></blockquote><h3 id="深层响应性" tabindex="-1">深层响应性 <a class="header-anchor" href="#深层响应性" aria-label="Permalink to &quot;深层响应性&quot;">​</a></h3><p>ref 对象可以持有任何类型的值，包括深层嵌套的对象、数组或者 JavaScript 内置的数据结构，比如 Map。</p><p>Ref 会使它的值具有深层响应性。这意味着即使改变嵌套对象或数组时，变化也会被检测到。</p><h3 id="dom-更新时机" tabindex="-1">DOM 更新时机 <a class="header-anchor" href="#dom-更新时机" aria-label="Permalink to &quot;DOM 更新时机&quot;">​</a></h3><p>DOM 更新是异步的，要等待 DOM 更新完成后再执行额外的代码，可以使用 nextTick() 全局 API</p><h2 id="reactive" tabindex="-1">reactive() <a class="header-anchor" href="#reactive" aria-label="Permalink to &quot;reactive()&quot;">​</a></h2><p>与将内部值包装在特殊对象中的 ref 不同， reactive() 将使对象本身具有响应性。</p><p>和 ref() 一样，reactive() 将深层地转换对象——访问嵌套对象的属性也是响应式的。</p><p>当 ref() 的值是一个对象类型数据时，内部会调用 reactive() 进行处理。</p><p>reactive() 返回的是一个原始对象的 Proxy，一般称为代理对象。代理对象和原对象是不相等的。</p><p>只有代理对象是响应式的，更改原始对象不会触发 DOM 更新。使用 Vue 的响应式系统的最佳实践是 仅使用你声明对象的代理版本。</p><p>为保证访问代理的一致性，对同一个原始对象调用 reactive() 会总是返回同样的代理对象，而对一个已存在的代理对象调用 reactive() 会返回其本身。</p><h3 id="reactive-的局限性" tabindex="-1">reactive() 的局限性 <a class="header-anchor" href="#reactive-的局限性" aria-label="Permalink to &quot;reactive() 的局限性&quot;">​</a></h3><ul><li>只能用于对象类型 (对象、数组和如 Map、Set 这样的集合类型)。它不能持有如 string、number 或 boolean 这样的原始类型。</li><li>不能替换整个对象：由于 Vue 的响应式跟踪是通过属性访问实现的，因此我们必须始终保持对响应式对象的相同引用。这意味着我们不能轻易地“替换”响应式对象，因为这样的话与第一个引用的响应性连接将丢失。</li><li>不能进行解构赋值：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接</li></ul><p>也就是说，reactive() 不能用于原始类型；然后，reactive() 是使对象本身是响应式的，如果替换整个对象，或者结构拿到响应式对象当中的属性，都会丢失响应性连接。</p><p>由于这些限制，我们建议使用 ref() 作为声明响应式状态的主要 API。</p><h2 id="解包细节" tabindex="-1">解包细节 <a class="header-anchor" href="#解包细节" aria-label="Permalink to &quot;解包细节&quot;">​</a></h2><p>一个 ref 对象 会在作为 代理对象 的属性被访问或修改时自动解包，即 reactive 可以不用 .value 而直接操作作为其属性的 ref 对象的值。</p><p>另，如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref，就和对普通对象的赋值一样。</p><p>注意：只有当嵌套在一个深层代理对象内时，才会发生 ref 解包。当其作为浅层代理对象的属性被访问时不会解包。</p><h3 id="数组和集合的注意事项" tabindex="-1">数组和集合的注意事项 <a class="header-anchor" href="#数组和集合的注意事项" aria-label="Permalink to &quot;数组和集合的注意事项&quot;">​</a></h3><p>当 ref 作为 响应式数组或原生集合类型(如 Map) （由 reactive 创建）中的元素被访问时，它不会被解包。</p><h3 id="在模板中解包的注意事项" tabindex="-1">在模板中解包的注意事项 <a class="header-anchor" href="#在模板中解包的注意事项" aria-label="Permalink to &quot;在模板中解包的注意事项&quot;">​</a></h3><p>在模板渲染上下文中，只有顶级的 ref 属性才会被解包。</p><p>非顶级 ref 的情况可以是：</p><ul><li>作为对象的属性或者数组的元素</li></ul><p>想要使非顶级 ref 在模板中解包，可以将其解构为顶级属性。</p><p>如果 ref 是差值语法的最终计算值，即使是非顶级 ref 也会自动解包。</p>',35),p=[o];function c(l,n,f,s,d,u){return a(),r("div",null,p)}const b=e(i,[["render",c]]);export{_ as __pageData,b as default};
