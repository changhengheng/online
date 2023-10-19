import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const u=JSON.parse('{"title":"读取文档","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter5/12.Mongoose读取文档.md","filePath":"program/frontend/Node/chapter5/12.Mongoose读取文档.md","lastUpdated":1697452647000}'),p={name:"program/frontend/Node/chapter5/12.Mongoose读取文档.md"},o=l(`<h1 id="读取文档" tabindex="-1">读取文档 <a class="header-anchor" href="#读取文档" aria-label="Permalink to &quot;读取文档&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1. 安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2. 导入 mongoose</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mongoose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongoose&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置 strictQuery 为 true</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;strictQuery&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3. 连接 mongodb 服务                        数据库的名称</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb://127.0.0.1:27017/bilibili&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4. 设置回调</span></span>
<span class="line"><span style="color:#6A737D;">// 设置连接成功的回调  once 一次   事件回调函数只执行一次</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//5. 创建文档的结构对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//设置集合中文档的属性以及属性值的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookSchema </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">Schema</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//6. 创建模型对象  对文档操作的封装对象 mongoose 会使用集合名称的复数作为集合名创建集合</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookModel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">model</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;novel&quot;</span><span style="color:#E1E4E8;">, BookSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 7. 读取文档</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 参数一是条件 参数二是回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// BookModel.findOne({ name: &quot;狂飙&quot; }, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   console.log(data); // data是获取到的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">      {</span></span>
<span class="line"><span style="color:#6A737D;">        _id: new ObjectId(&quot;652cb37831ea94cc7b785449&quot;),</span></span>
<span class="line"><span style="color:#6A737D;">        name: &#39;狂飙&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        author: &#39;徐纪周&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        price: 68,</span></span>
<span class="line"><span style="color:#6A737D;">        is_hot: true,</span></span>
<span class="line"><span style="color:#6A737D;">        __v: 0</span></span>
<span class="line"><span style="color:#6A737D;">      }</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 8. 根据ID获取</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 参数一是ID，参数二是回调</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// BookModel.findById(&quot;652cb37831ea94cc7b785453&quot;, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   console.log(data); // data是获取到的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   /*</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       _id: new ObjectId(&quot;652cb37831ea94cc7b785453&quot;),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       name: &#39;长安的荔枝&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       author: &#39;马伯庸&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       price: 45,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       is_hot: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       __v: 0</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 9. 批量获取之有条件获取</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//  参数一是条件，参数二是回调</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// BookModel.find({ author: &quot;余华&quot; }, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   console.log(data); // data是获取到的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   /*</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         _id: new ObjectId(&quot;652cb37831ea94cc7b785448&quot;),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         name: &quot;活着&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         author: &quot;余华&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         price: 19.9,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         is_hot: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         __v: 0,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         _id: new ObjectId(&quot;652cb37831ea94cc7b785459&quot;),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         name: &quot;在细雨中呼喊&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         author: &quot;余华&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         price: 25,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         is_hot: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         __v: 0,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     ];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 10. 批量获取之无条件获取所有文档</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 参数直接写回调即可</span></span>
<span class="line"><span style="color:#E1E4E8;">  BookModel.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;读取失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data); </span><span style="color:#6A737D;">// data是获取到的所有数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置连接错误的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;连接失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;close&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;连接关闭&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1. 安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2. 导入 mongoose</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mongoose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongoose&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置 strictQuery 为 true</span></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;strictQuery&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3. 连接 mongodb 服务                        数据库的名称</span></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb://127.0.0.1:27017/bilibili&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4. 设置回调</span></span>
<span class="line"><span style="color:#6A737D;">// 设置连接成功的回调  once 一次   事件回调函数只执行一次</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">once</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;open&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//5. 创建文档的结构对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//设置集合中文档的属性以及属性值的类型</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookSchema </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">Schema</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    name: String,</span></span>
<span class="line"><span style="color:#24292E;">    author: String,</span></span>
<span class="line"><span style="color:#24292E;">    price: Number,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//6. 创建模型对象  对文档操作的封装对象 mongoose 会使用集合名称的复数作为集合名创建集合</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookModel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">model</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;novel&quot;</span><span style="color:#24292E;">, BookSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 7. 读取文档</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 参数一是条件 参数二是回调函数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// BookModel.findOne({ name: &quot;狂飙&quot; }, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   console.log(data); // data是获取到的数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">      {</span></span>
<span class="line"><span style="color:#6A737D;">        _id: new ObjectId(&quot;652cb37831ea94cc7b785449&quot;),</span></span>
<span class="line"><span style="color:#6A737D;">        name: &#39;狂飙&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        author: &#39;徐纪周&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        price: 68,</span></span>
<span class="line"><span style="color:#6A737D;">        is_hot: true,</span></span>
<span class="line"><span style="color:#6A737D;">        __v: 0</span></span>
<span class="line"><span style="color:#6A737D;">      }</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 8. 根据ID获取</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 参数一是ID，参数二是回调</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// BookModel.findById(&quot;652cb37831ea94cc7b785453&quot;, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   console.log(data); // data是获取到的数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   /*</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       _id: new ObjectId(&quot;652cb37831ea94cc7b785453&quot;),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       name: &#39;长安的荔枝&#39;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       author: &#39;马伯庸&#39;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       price: 45,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       is_hot: true,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       __v: 0</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 9. 批量获取之有条件获取</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//  参数一是条件，参数二是回调</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// BookModel.find({ author: &quot;余华&quot; }, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   console.log(data); // data是获取到的数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   /*</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         _id: new ObjectId(&quot;652cb37831ea94cc7b785448&quot;),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         name: &quot;活着&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         author: &quot;余华&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         price: 19.9,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         is_hot: false,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         __v: 0,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         _id: new ObjectId(&quot;652cb37831ea94cc7b785459&quot;),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         name: &quot;在细雨中呼喊&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         author: &quot;余华&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         price: 25,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         is_hot: false,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         __v: 0,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     ];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 10. 批量获取之无条件获取所有文档</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 参数直接写回调即可</span></span>
<span class="line"><span style="color:#24292E;">  BookModel.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">((</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;读取失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data); </span><span style="color:#6A737D;">// data是获取到的所有数据</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置连接错误的回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;连接失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;close&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;连接关闭&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,2),e=[o];function c(t,r,E,y,i,D){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{u as __pageData,d as default};
