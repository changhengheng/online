import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const D=JSON.parse('{"title":"条件控制","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter5/13.Mongoose条件控制.md","filePath":"program/frontend/Node/chapter5/13.Mongoose条件控制.md","lastUpdated":1697452647000}'),p={name:"program/frontend/Node/chapter5/13.Mongoose条件控制.md"},o=l(`<h1 id="条件控制" tabindex="-1">条件控制 <a class="header-anchor" href="#条件控制" aria-label="Permalink to &quot;条件控制&quot;">​</a></h1><p>条件控制指如何设置查询文档的条件</p><p>之前的练习都是直接指定对应的字段，这其实是用等于的方式去设置查询条件，除此之外Mongoose提供了一些其他方式来设置查询条件：</p><ol><li><p>运算符</p><p>在 mongodb 不能 <code>&gt; &lt; &gt;= &lt;= !==</code> 等运算符，需要使用替代符号</p><ul><li><code>&gt;</code> 使用 <code>$gt</code></li><li><code>&lt;</code> 使用 <code>$lt</code></li><li><code>&gt;=</code> 使用 <code>$gte</code></li><li><code>&lt;=</code> 使用 <code>$lte</code></li><li><code>!==</code> 使用 <code>$ne</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">db.students.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({id:{$gt:</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">}}); id号比3大的所有的记录</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">db.students.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({id:{$gt:</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">}}); id号比3大的所有的记录</span></span></code></pre></div></li><li><p>逻辑运算</p><p>$or 逻辑或的情况</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">db.students.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({$or:[{age:</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">},{age:</span><span style="color:#79B8FF;">24</span><span style="color:#E1E4E8;">}]})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">db.students.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({$or:[{age:</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">},{age:</span><span style="color:#005CC5;">24</span><span style="color:#24292E;">}]})</span></span></code></pre></div><p>$and 逻辑与的情况</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">db.students.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({$and: [{age: {$lt:</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">}}, {age: {$gt: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">}}]});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">db.students.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({$and: [{age: {$lt:</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">}}, {age: {$gt: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">}}]});</span></span></code></pre></div></li><li><p>正则匹配</p><p>条件中可以直接使用 JS 的正则语法，通过正则可以进行模糊查询</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">db.students.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({name:</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">imissyou</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">db.students.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({name:</span><span style="color:#032F62;">/imissyou/</span><span style="color:#24292E;">});</span></span></code></pre></div></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mongoose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongoose&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;strictQuery&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb://127.0.0.1:27017/bilibili&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookSchema </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">Schema</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookModel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">model</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;novel&quot;</span><span style="color:#E1E4E8;">, BookSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 1. 运算符</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 价格小于20的图书</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// BookModel.find(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     // price:20 // 这样写的意思是查询price值为20的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     // 要写条件控制，必须写成一个对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     price: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       $lt: 20, // $lt 表示小于（less than），写在price里表示price小于某个值，20表示小于20</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 2. 逻辑运算</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 曹雪芹或余华的书</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// BookModel.find(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     // $or: 表明后面的条件是逻辑或的关系</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     // [] 用来设置每一个条件</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     $or: [{ author: &quot;曹雪芹&quot; }, { author: &quot;余华&quot; }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 价格大于30且小于70</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   BookModel.find(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       // $and: 表明后面的条件是逻辑与的关系</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       // [] 用来设置每一个条件</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       $and: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//           price: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//             $gt: 30,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//           },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//           price: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//             $lt: 70,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//           },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 3. 正则匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 可以做模糊查询</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 搜索书籍名称带&quot;三&quot;的书</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// BookModel.find({ name: /三/ }, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 下面这种方法方便使用变量</span></span>
<span class="line"><span style="color:#E1E4E8;">  BookModel.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RegExp</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;三&quot;</span><span style="color:#E1E4E8;">) }, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;读取失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data); </span><span style="color:#6A737D;">// data是获取到的所有数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;连接失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;close&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;连接关闭&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mongoose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongoose&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;strictQuery&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb://127.0.0.1:27017/bilibili&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">once</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;open&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookSchema </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">Schema</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    name: String,</span></span>
<span class="line"><span style="color:#24292E;">    author: String,</span></span>
<span class="line"><span style="color:#24292E;">    price: Number,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookModel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">model</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;novel&quot;</span><span style="color:#24292E;">, BookSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 1. 运算符</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 价格小于20的图书</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// BookModel.find(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     // price:20 // 这样写的意思是查询price值为20的数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     // 要写条件控制，必须写成一个对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     price: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       $lt: 20, // $lt 表示小于（less than），写在price里表示price小于某个值，20表示小于20</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 2. 逻辑运算</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 曹雪芹或余华的书</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// BookModel.find(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     // $or: 表明后面的条件是逻辑或的关系</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     // [] 用来设置每一个条件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     $or: [{ author: &quot;曹雪芹&quot; }, { author: &quot;余华&quot; }],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 价格大于30且小于70</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   BookModel.find(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       // $and: 表明后面的条件是逻辑与的关系</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       // [] 用来设置每一个条件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       $and: [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           price: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//             $gt: 30,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           price: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//             $lt: 70,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//           },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   );</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 3. 正则匹配</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 可以做模糊查询</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 搜索书籍名称带&quot;三&quot;的书</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// BookModel.find({ name: /三/ }, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 下面这种方法方便使用变量</span></span>
<span class="line"><span style="color:#24292E;">  BookModel.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ name: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RegExp</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;三&quot;</span><span style="color:#24292E;">) }, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;读取失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data); </span><span style="color:#6A737D;">// data是获取到的所有数据</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;连接失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;close&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;连接关闭&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,5),e=[o];function c(t,r,E,y,i,d){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{D as __pageData,u as default};
