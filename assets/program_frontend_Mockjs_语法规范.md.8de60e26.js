import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.19358895.js";const m=JSON.parse('{"title":"语法","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Mockjs/语法规范.md","filePath":"program/frontend/Mockjs/语法规范.md","lastUpdated":1694067883000}'),l={name:"program/frontend/Mockjs/语法规范.md"},p=e(`<h1 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>人家怎么说的怎么用就行了，别自己造，这样会产生不可预期的结果</p></div><p>Mock.js 的语法规范包括两部分：</p><ol><li>数据模板定义（Data Temaplte Definition，DTD）</li><li>数据占位符定义（Data Placeholder Definition，DPD）</li></ol><h2 id="数据模板定义-dtd" tabindex="-1">数据模板定义 DTD <a class="header-anchor" href="#数据模板定义-dtd" aria-label="Permalink to &quot;数据模板定义 DTD&quot;">​</a></h2><p><strong>数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 属性名   name</span></span>
<span class="line"><span style="color:#e1e4e8;">// 生成规则 rule</span></span>
<span class="line"><span style="color:#e1e4e8;">// 属性值   value</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;name|rule&#39;: value</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 属性名   name</span></span>
<span class="line"><span style="color:#24292e;">// 生成规则 rule</span></span>
<span class="line"><span style="color:#24292e;">// 属性值   value</span></span>
<span class="line"><span style="color:#24292e;">&#39;name|rule&#39;: value</span></span></code></pre></div><p><strong>注意：</strong></p><ul><li>属性名 和 生成规则 之间用 <code>|</code> 分隔。</li><li>生成规则 是可选的。</li><li>生成规则 有 7 种格式： <ol><li><code>&#39;name|min-max&#39;: value</code></li><li><code>&#39;name|count&#39;: value</code></li><li><code>&#39;name|min-max.dmin-dmax&#39;: value</code></li><li><code>&#39;name|min-max.dcount&#39;: value</code></li><li><code>&#39;name|count.dmin-dmax&#39;: value</code></li><li><code>&#39;name|count.dcount&#39;: value</code></li><li><code>&#39;name|+step&#39;: value</code></li></ol></li><li><strong>生成规则的含义需要依赖属性值才能确定。</strong></li><li>属性值中可以含有 <code>@占位符</code>。</li><li>属性值还指定了最终值的初始值和类型。</li></ul><p><strong>生成规则和示例：</strong></p><ol><li><p>属性值是字符串 <strong>String</strong></p><ol><li><p><code>&#39;name|min-max&#39;: &#39;value&#39;</code> 通过重复 <code>&#39;value&#39;</code> 生成一个字符串，重复次数大于等于 <code>min</code>，小于等于 <code>max</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;string|1-10&quot;: &quot;★&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">    &quot;string|1-10&quot;: &quot;★&quot;</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li><li><p><code>&#39;name|count&#39;: &#39;value&#39;</code> 通过重复 <code>&#39;value&#39;</code> 生成一个字符串，重复次数等于 <code>count</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;string|3&quot;: &quot;★★★&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">    &quot;string|3&quot;: &quot;★★★&quot;</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li></ol></li><li><p>属性值是数字 <strong>Number</strong></p><ol><li><p><code>&#39;name|+1&#39;: 100</code> 属性值自动加 1，初始值为 100</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;number|+1&quot;: 202</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">    &quot;number|+1&quot;: 202</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这段代码单独运行没效果，因为自增的第一项会输出自身，所以看起来没变化，但放到数组里生成多个数据时会看到效果，如下</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;list|5&quot;:[</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;number|+3&quot;: 202</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">    &quot;list|5&quot;:[</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;number|+3&quot;: 202</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li><li><p><code>&#39;name|1-100&#39;: 100</code> 生成一个大于等于 1、小于等于 100 的整数，属性值 100 只用来确定类型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;number|1-100&quot;: 100</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">    &quot;number|1-100&quot;: 100</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li><li><p><code>&#39;name|1-100.1-10&#39;: 100</code> 生成一个浮点数，整数部分大于等于 1、小于等于 100，小数部分保留 1 到 10 位，属性值 100 只用来确定类型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;number1|1-100.1-10&#39;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;number2|123.1-10&#39;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;number3|123.3&#39;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;number4|123.10&#39;: 1.123</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;number1&quot;: 12.92,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;number2&quot;: 123.51,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;number3&quot;: 123.777,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;number4&quot;: 123.1231091814</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &#39;number1|1-100.1-10&#39;: 1,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;number2|123.1-10&#39;: 1,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;number3|123.3&#39;: 1,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;number4|123.10&#39;: 1.123</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// =&gt;</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;number1&quot;: 12.92,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;number2&quot;: 123.51,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;number3&quot;: 123.777,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;number4&quot;: 123.1231091814</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></li></ol></li><li><p>属性值是布尔型 <strong>Boolean</strong></p><ol><li><p><code>&#39;name|1&#39;: value</code> 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率是 1/2。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;boolean|1&quot;: true</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">  &quot;boolean|1&quot;: true</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li><li><p><code>&#39;name|min-max&#39;: value</code> 随机生成一个布尔值，值为 <code>value</code> 的概率是 <code>min / (min + max)</code>，值为 <code>!value</code> 的概率是 <code>max / (min + max)</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;boolean|1-2&quot;: true</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">  &quot;boolean|1-2&quot;: true</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li></ol></li><li><p>属性值是对象 <strong>Object</strong></p><ol><li><code>&#39;name|min-max&#39;: {}</code> 从属性值 <code>{}</code> 中随机选取 <code>min</code> 到 <code>max</code> 个属性。<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;object|2-4&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;110000&quot;: &quot;北京市&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;120000&quot;: &quot;天津市&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;130000&quot;: &quot;河北省&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;140000&quot;: &quot;山西省&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">    &quot;object|2-4&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;110000&quot;: &quot;北京市&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;120000&quot;: &quot;天津市&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;130000&quot;: &quot;河北省&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;140000&quot;: &quot;山西省&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li><li><code>&#39;name|count&#39;: {}</code> 从属性值 <code>{}</code> 中随机选取 <code>count</code> 个属性。<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;object|2&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;310000&quot;: &quot;上海市&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;320000&quot;: &quot;江苏省&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;330000&quot;: &quot;浙江省&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;340000&quot;: &quot;安徽省&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">    &quot;object|2&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;310000&quot;: &quot;上海市&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;320000&quot;: &quot;江苏省&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;330000&quot;: &quot;浙江省&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;340000&quot;: &quot;安徽省&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li></ol></li><li><p>属性值是数组 <strong>Array</strong></p><ol><li><code>&#39;name|1&#39;: [{}, {} ...]</code> 从属性值 <code>[{}, {} ...]</code> 中随机选取 1 个元素，作为最终值。<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;array|1&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;AMD&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;CMD&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;UMD&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">    &quot;array|1&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        &quot;AMD&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;CMD&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;UMD&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li><li><code>&#39;name|min-max&#39;: [{}, {} ...]</code> 通过重复属性值 <code>[{}, {} ...]</code> 生成一个新数组，重复次数大于等于 <code>min</code>，小于等于 <code>max</code>。<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;array|1-10&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;name|+1&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;Hello&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;Mock.js&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;!&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">            ]</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">    &quot;array|1-10&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;name|+1&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">                &quot;Hello&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                &quot;Mock.js&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                &quot;!&quot;</span></span>
<span class="line"><span style="color:#24292e;">            ]</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li><li><code>&#39;name|count&#39;: [{}, {} ...]</code> 通过重复属性值 <code>[{}, {} ...]</code> 生成一个新数组，重复次数为 <code>count</code>。<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>count 为 1 时，随机选取一个元素作为最终值；count 大于 1 时，重复属性值生成一个新数组；</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;array|3&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;Hello&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;Mock.js&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;!&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">    &quot;array|3&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        &quot;Hello&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;Mock.js&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;!&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li></ol></li><li><p>属性值是数组 <strong>Function</strong></p><p><code>&#39;name&#39;: function(){}</code> 执行函数 <code>function(){}</code>，取其返回值作为最终的属性值，上下文为 <code>&#39;name&#39;</code> 所在的对象。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Mock.mock({</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;foo&#39;: &#39;Syntax Demo&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;name&#39;: function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return this.foo</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Mock.mock({</span></span>
<span class="line"><span style="color:#24292e;">&#39;foo&#39;: &#39;Syntax Demo&#39;,</span></span>
<span class="line"><span style="color:#24292e;">&#39;name&#39;: function() {</span></span>
<span class="line"><span style="color:#24292e;">    return this.foo</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div></li></ol><h2 id="数据占位符定义-dpd" tabindex="-1">数据占位符定义 DPD <a class="header-anchor" href="#数据占位符定义-dpd" aria-label="Permalink to &quot;数据占位符定义 DPD&quot;">​</a></h2><p>占位符只是在属性值字符串中占个位置，并不出现在最终的属性值中。占位符的格式为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@占位符</span></span>
<span class="line"><span style="color:#e1e4e8;">@占位符(参数 [, 参数])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@占位符</span></span>
<span class="line"><span style="color:#24292e;">@占位符(参数 [, 参数])</span></span></code></pre></div><p><strong>注意：</strong></p><ol><li><p>用 <code>@</code> 来标识其后的字符串是占位符。</p></li><li><p>占位符引用的是 <code>Mock.Random</code> 中的方法。</p></li><li><p>通过 <code>Mock.Random.extend()</code> 来扩展自定义占位符。</p></li><li><p>占位符也可以引用数据模板中的属性。</p></li><li><p>占位符会优先引用数据模板中的属性。</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        first: &#39;@FIRST&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        middle: &#39;@FIRST&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        last: &#39;@LAST&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        full: &#39;@first @middle @last&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;name&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;first&quot;: &quot;Charles&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;middle&quot;: &quot;Brenda&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;last&quot;: &quot;Lopez&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;full&quot;: &quot;Charles Brenda Lopez&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    name: {</span></span>
<span class="line"><span style="color:#24292e;">        first: &#39;@FIRST&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        middle: &#39;@FIRST&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        last: &#39;@LAST&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        full: &#39;@first @middle @last&#39;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// =&gt;</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;name&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;first&quot;: &quot;Charles&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;middle&quot;: &quot;Brenda&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;last&quot;: &quot;Lopez&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;full&quot;: &quot;Charles Brenda Lopez&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="mock" tabindex="-1">Mock <a class="header-anchor" href="#mock" aria-label="Permalink to &quot;Mock&quot;">​</a></h2><h3 id="mock-mock-rurl-rtype-template-function-options" tabindex="-1">Mock.mock( rurl?, rtype?, template|function(options) ) <a class="header-anchor" href="#mock-mock-rurl-rtype-template-function-options" aria-label="Permalink to &quot;Mock.mock( rurl?, rtype?, template|function(options) )&quot;">​</a></h3><p>根据数据模板生成模拟数据。</p><ul><li><p><strong>Mock.mock( template )</strong></p><p>根据数据模板生成模拟数据。</p></li><li><p><strong>Mock.mock( rurl, template )</strong></p><p>记录数据模板。当拦截到匹配 <code>rurl</code> 的 Ajax 请求时，将根据数据模板 <code>template</code> 生成模拟数据，并作为响应数据返回。</p></li><li><p><strong>Mock.mock( rurl, function(options) )</strong></p><p>记录用于生成响应数据的函数。当拦截到匹配 <code>rurl</code> 的 Ajax 请求时，函数 <code>function(options)</code> 将被执行，并把执行结果作为响应数据返回。</p></li><li><p><strong>Mock.mock( rurl, rtype, template )</strong></p><p>记录数据模板。当拦截到匹配 <code>rurl</code> 和 <code>rtype</code> 的 Ajax 请求时，将根据数据模板 <code>template</code> 生成模拟数据，并作为响应数据返回。</p></li><li><p><strong>Mock.mock( rurl, rtype, function(options) )</strong></p><p>记录用于生成响应数据的函数。当拦截到匹配 <code>rurl</code> 和 <code>rtype</code> 的 Ajax 请求时，函数 <code>function(options)</code> 将被执行，并把执行结果作为响应数据返回。</p></li></ul><p><strong>参数的含义和默认值</strong>如下所示：</p><ul><li><strong>参数 rurl</strong>：可选。表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 <code>/\\/domain\\/list\\.json/</code>、<code>&#39;/domian/list.json&#39;</code>。</li><li><strong>参数 rtype</strong>：可选。表示需要拦截的 Ajax 请求类型。例如 <code>GET</code>、<code>POST</code>、<code>PUT</code>、<code>DELETE</code> 等。</li><li><strong>参数 template</strong>：可选。表示数据模板，可以是对象或字符串。例如 <code>{ &#39;data|1-10&#39;:[{}] }</code>、<code>&#39;@EMAIL&#39;</code>。</li><li><strong>参数 function(options)</strong>：可选。表示用于生成响应数据的函数。</li><li><strong>参数 options</strong>：指向本次请求的 Ajax 选项集。</li></ul><p>下面是 Mock.mock() 的 5 种参数格式以及语法规范的使用示例：</p><p><strong>示例 1：</strong> Mock.mock( template )</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!-- （必选）加载 Mock --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script src=&quot;http://mockjs.com/dist/mock.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">var template = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;title&#39;: &#39;Syntax Demo&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;string1|1-10&#39;: &#39;★&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;string2|3&#39;: &#39;value&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;number1|+1&#39;: 100,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;number2|1-100&#39;: 100,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;number3|1-100.1-10&#39;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;number4|123.1-10&#39;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;number5|123.3&#39;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;number6|123.10&#39;: 1.123,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;boolean1|1&#39;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;boolean2|1-2&#39;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;object1|2-4&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;110000&#39;: &#39;北京市&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;120000&#39;: &#39;天津市&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;130000&#39;: &#39;河北省&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;140000&#39;: &#39;山西省&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;object2|2&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;310000&#39;: &#39;上海市&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;320000&#39;: &#39;江苏省&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;330000&#39;: &#39;浙江省&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;340000&#39;: &#39;安徽省&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;array1|1&#39;: [&#39;AMD&#39;, &#39;CMD&#39;, &#39;KMD&#39;, &#39;UMD&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;array2|1-10&#39;: [&#39;Mock.js&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;array3|3&#39;: [&#39;Mock.js&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;function&#39;: function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return this.title</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var data = Mock.mock(template)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#e1e4e8;">    .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!-- （必选）加载 Mock --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;http://mockjs.com/dist/mock.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">var template = {</span></span>
<span class="line"><span style="color:#24292e;">    &#39;title&#39;: &#39;Syntax Demo&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &#39;string1|1-10&#39;: &#39;★&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;string2|3&#39;: &#39;value&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &#39;number1|+1&#39;: 100,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;number2|1-100&#39;: 100,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;number3|1-100.1-10&#39;: 1,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;number4|123.1-10&#39;: 1,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;number5|123.3&#39;: 1,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;number6|123.10&#39;: 1.123,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &#39;boolean1|1&#39;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;boolean2|1-2&#39;: true,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &#39;object1|2-4&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">        &#39;110000&#39;: &#39;北京市&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;120000&#39;: &#39;天津市&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;130000&#39;: &#39;河北省&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;140000&#39;: &#39;山西省&#39;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &#39;object2|2&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">        &#39;310000&#39;: &#39;上海市&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;320000&#39;: &#39;江苏省&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;330000&#39;: &#39;浙江省&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;340000&#39;: &#39;安徽省&#39;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &#39;array1|1&#39;: [&#39;AMD&#39;, &#39;CMD&#39;, &#39;KMD&#39;, &#39;UMD&#39;],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;array2|1-10&#39;: [&#39;Mock.js&#39;],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;array3|3&#39;: [&#39;Mock.js&#39;],</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &#39;function&#39;: function() {</span></span>
<span class="line"><span style="color:#24292e;">        return this.title</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var data = Mock.mock(template)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#24292e;">    .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><p><strong>示例 2：</strong> Mock.mock( rurl, template )</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!-- （必选）加载 Mock --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script src=&quot;http://mockjs.com/dist/mock.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// Mock.mock(rurl, template)</span></span>
<span class="line"><span style="color:#e1e4e8;">Mock.mock(/\\.json/, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;list|1-10&#39;: [{</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;id|+1&#39;: 1,//属性 id 是一个自增数，起始值为 1，每次增 1</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;email&#39;: &#39;@EMAIL&#39;//随机邮箱地址</span></span>
<span class="line"><span style="color:#e1e4e8;">    }]</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">$.ajax({</span></span>
<span class="line"><span style="color:#e1e4e8;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}).done(function(data, status, jqXHR){</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#e1e4e8;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!-- （必选）加载 Mock --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;http://mockjs.com/dist/mock.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">// Mock.mock(rurl, template)</span></span>
<span class="line"><span style="color:#24292e;">Mock.mock(/\\.json/, {</span></span>
<span class="line"><span style="color:#24292e;">    &#39;list|1-10&#39;: [{</span></span>
<span class="line"><span style="color:#24292e;">        &#39;id|+1&#39;: 1,//属性 id 是一个自增数，起始值为 1，每次增 1</span></span>
<span class="line"><span style="color:#24292e;">        &#39;email&#39;: &#39;@EMAIL&#39;//随机邮箱地址</span></span>
<span class="line"><span style="color:#24292e;">    }]</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">$.ajax({</span></span>
<span class="line"><span style="color:#24292e;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#24292e;">}).done(function(data, status, jqXHR){</span></span>
<span class="line"><span style="color:#24292e;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#24292e;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p><strong>示例 3：</strong> Mock.mock( rurl, function(options) )</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// Mock.mock(rurl, function(options))</span></span>
<span class="line"><span style="color:#e1e4e8;">Mock.mock(/\\.json/, function(options) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return options</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">$.ajax({</span></span>
<span class="line"><span style="color:#e1e4e8;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}).done(function(data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#e1e4e8;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">$.ajax({</span></span>
<span class="line"><span style="color:#e1e4e8;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    dataType: &#39;json&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    data: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        foo: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">        bar: 2,</span></span>
<span class="line"><span style="color:#e1e4e8;">        faz: 3</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}).done(function(data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#e1e4e8;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">$.ajax({</span></span>
<span class="line"><span style="color:#e1e4e8;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    type: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    dataType: &#39;json&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    data: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        foo: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">        bar: 2,</span></span>
<span class="line"><span style="color:#e1e4e8;">        faz: 3</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}).done(function(data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#e1e4e8;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// Mock.mock(rurl, function(options))</span></span>
<span class="line"><span style="color:#24292e;">Mock.mock(/\\.json/, function(options) {</span></span>
<span class="line"><span style="color:#24292e;">    return options</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">$.ajax({</span></span>
<span class="line"><span style="color:#24292e;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#24292e;">}).done(function(data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#24292e;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#24292e;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">$.ajax({</span></span>
<span class="line"><span style="color:#24292e;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    dataType: &#39;json&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    data: {</span></span>
<span class="line"><span style="color:#24292e;">        foo: 1,</span></span>
<span class="line"><span style="color:#24292e;">        bar: 2,</span></span>
<span class="line"><span style="color:#24292e;">        faz: 3</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}).done(function(data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#24292e;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#24292e;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">$.ajax({</span></span>
<span class="line"><span style="color:#24292e;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    type: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    dataType: &#39;json&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    data: {</span></span>
<span class="line"><span style="color:#24292e;">        foo: 1,</span></span>
<span class="line"><span style="color:#24292e;">        bar: 2,</span></span>
<span class="line"><span style="color:#24292e;">        faz: 3</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}).done(function(data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#24292e;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#24292e;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p><strong>示例 4：</strong> Mock.mock( rurl, rtype, template )</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// Mock.mock( rurl, rtype, template )</span></span>
<span class="line"><span style="color:#e1e4e8;">Mock.mock(/\\.json/, &#39;get&#39;, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    type: &#39;get&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">Mock.mock(/\\.json/, &#39;post&#39;, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    type: &#39;post&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$.ajax({</span></span>
<span class="line"><span style="color:#e1e4e8;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    type: &#39;get&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}).done(function (data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#e1e4e8;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$.ajax({</span></span>
<span class="line"><span style="color:#e1e4e8;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    type: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}).done(function (data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#e1e4e8;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// Mock.mock( rurl, rtype, template )</span></span>
<span class="line"><span style="color:#24292e;">Mock.mock(/\\.json/, &#39;get&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">    type: &#39;get&#39;</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">Mock.mock(/\\.json/, &#39;post&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">    type: &#39;post&#39;</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$.ajax({</span></span>
<span class="line"><span style="color:#24292e;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    type: &#39;get&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#24292e;">}).done(function (data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#24292e;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#24292e;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$.ajax({</span></span>
<span class="line"><span style="color:#24292e;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    type: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#24292e;">}).done(function (data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#24292e;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#24292e;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p><strong>示例 5：</strong> Mock.mock( rurl, rtype, function(options) )</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// Mock.mock( rurl, rtype, function(options) )</span></span>
<span class="line"><span style="color:#e1e4e8;">Mock.mock(/\\.json/, &#39;get&#39;, function(options) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return options.type</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">Mock.mock(/\\.json/, &#39;post&#39;, function(options) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return options.type</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$.ajax({</span></span>
<span class="line"><span style="color:#e1e4e8;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    type: &#39;get&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}).done(function (data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#e1e4e8;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$.ajax({</span></span>
<span class="line"><span style="color:#e1e4e8;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    type: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}).done(function (data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#e1e4e8;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// Mock.mock( rurl, rtype, function(options) )</span></span>
<span class="line"><span style="color:#24292e;">Mock.mock(/\\.json/, &#39;get&#39;, function(options) {</span></span>
<span class="line"><span style="color:#24292e;">    return options.type</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">Mock.mock(/\\.json/, &#39;post&#39;, function(options) {</span></span>
<span class="line"><span style="color:#24292e;">    return options.type</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$.ajax({</span></span>
<span class="line"><span style="color:#24292e;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    type: &#39;get&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#24292e;">}).done(function (data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#24292e;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#24292e;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$.ajax({</span></span>
<span class="line"><span style="color:#24292e;">    url: &#39;hello.json&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    type: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    dataType: &#39;json&#39;</span></span>
<span class="line"><span style="color:#24292e;">}).done(function (data, status, jqXHR) {</span></span>
<span class="line"><span style="color:#24292e;">    $(&#39;&lt;pre&gt;&#39;).text(JSON.stringify(data, null, 4))</span></span>
<span class="line"><span style="color:#24292e;">        .appendTo(&#39;body&#39;)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div>`,34),o=[p];function c(t,i,r,y,d,u){return n(),a("div",null,o)}const k=s(l,[["render",c]]);export{m as __pageData,k as default};
