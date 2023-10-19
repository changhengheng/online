import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const D=JSON.parse('{"title":"更新文档","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter5/11.Mongoose更新文档.md","filePath":"program/frontend/Node/chapter5/11.Mongoose更新文档.md","lastUpdated":1697452647000}'),p={name:"program/frontend/Node/chapter5/11.Mongoose更新文档.md"},o=l(`<h1 id="更新文档" tabindex="-1">更新文档 <a class="header-anchor" href="#更新文档" aria-label="Permalink to &quot;更新文档&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1. 安装 mongoose</span></span>
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
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// // 7. 更新单条</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// // 参数一更新条件，参数二是更新的内容，参数三是回调</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// BookModel.updateOne({ name: &quot;红楼梦&quot; }, { price: 9.9 }, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     console.log(&quot;更新失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   console.log(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   /*</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       acknowledged: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       modifiedCount: 1, // 修改统计数量为1，说明修改成功了</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       upsertedId: null,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       upsertedCount: 0,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       matchedCount: 1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 8. 批量更新</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 参数一更新条件，参数二是更新的内容，参数三是回调</span></span>
<span class="line"><span style="color:#E1E4E8;">  BookModel.</span><span style="color:#B392F0;">updateMany</span><span style="color:#E1E4E8;">({ author: </span><span style="color:#9ECBFF;">&quot;余华&quot;</span><span style="color:#E1E4E8;"> }, { is_hot: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;更新失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">      {</span></span>
<span class="line"><span style="color:#6A737D;">        acknowledged: true,</span></span>
<span class="line"><span style="color:#6A737D;">        modifiedCount: 2, // 修改统计数量为2，说明修改成功了，且修改了2个</span></span>
<span class="line"><span style="color:#6A737D;">        upsertedId: null,</span></span>
<span class="line"><span style="color:#6A737D;">        upsertedCount: 0,</span></span>
<span class="line"><span style="color:#6A737D;">        matchedCount: 2</span></span>
<span class="line"><span style="color:#6A737D;">      }</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
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
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// // 7. 更新单条</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// // 参数一更新条件，参数二是更新的内容，参数三是回调</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// BookModel.updateOne({ name: &quot;红楼梦&quot; }, { price: 9.9 }, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     console.log(&quot;更新失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   console.log(data);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   /*</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       acknowledged: true,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       modifiedCount: 1, // 修改统计数量为1，说明修改成功了</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       upsertedId: null,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       upsertedCount: 0,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       matchedCount: 1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 8. 批量更新</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 参数一更新条件，参数二是更新的内容，参数三是回调</span></span>
<span class="line"><span style="color:#24292E;">  BookModel.</span><span style="color:#6F42C1;">updateMany</span><span style="color:#24292E;">({ author: </span><span style="color:#032F62;">&quot;余华&quot;</span><span style="color:#24292E;"> }, { is_hot: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> }, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;更新失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">      {</span></span>
<span class="line"><span style="color:#6A737D;">        acknowledged: true,</span></span>
<span class="line"><span style="color:#6A737D;">        modifiedCount: 2, // 修改统计数量为2，说明修改成功了，且修改了2个</span></span>
<span class="line"><span style="color:#6A737D;">        upsertedId: null,</span></span>
<span class="line"><span style="color:#6A737D;">        upsertedCount: 0,</span></span>
<span class="line"><span style="color:#6A737D;">        matchedCount: 2</span></span>
<span class="line"><span style="color:#6A737D;">      }</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
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
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,2),e=[o];function c(t,r,E,y,i,u){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{D as __pageData,d as default};
