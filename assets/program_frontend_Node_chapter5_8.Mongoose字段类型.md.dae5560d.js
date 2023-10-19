import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const u=JSON.parse('{"title":"Mongoose 字段类型","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter5/8.Mongoose字段类型.md","filePath":"program/frontend/Node/chapter5/8.Mongoose字段类型.md","lastUpdated":1697452647000}'),o={name:"program/frontend/Node/chapter5/8.Mongoose字段类型.md"},p=l(`<h1 id="mongoose-字段类型" tabindex="-1">Mongoose 字段类型 <a class="header-anchor" href="#mongoose-字段类型" aria-label="Permalink to &quot;Mongoose 字段类型&quot;">​</a></h1><p>字段类型就是文档属性值的类型。</p><p>文档结构可选的常用字段类型列表：</p><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>String</td><td>字符串</td></tr><tr><td>Number</td><td>数字</td></tr><tr><td>Boolean</td><td>布尔值</td></tr><tr><td>Array</td><td>数组，也可以使用 [] 来标识</td></tr><tr><td>Date</td><td>日期</td></tr><tr><td>Buffer</td><td>Buffer 对象</td></tr><tr><td>Mixed</td><td>任意类型，需要使用 mongoose.Schema.Types.Mixed 指定</td></tr><tr><td>ObjectId</td><td>对象 ID，需要使用 mongoose.Schema.Types.ObjectId 指定</td></tr><tr><td>Decimal128</td><td>高精度数字，需要使用 mongoose.Schema.Types.Decimal128 指定</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mongoose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongoose&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb://127.0.0.1:27017/bilibili&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;连接成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookSchema </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">Schema</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isHot: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tags: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">    pubTime: Date,</span></span>
<span class="line"><span style="color:#E1E4E8;">    test: mongoose.Schema.Types.Mixed,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookModel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">model</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;books&quot;</span><span style="color:#E1E4E8;">, BookSchema);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    Buffer类型：</span></span>
<span class="line"><span style="color:#6A737D;">        即二进制类型，也就是说可以将视频、图片等文件变成二进制格式存在数据库中，但一般不这么做</span></span>
<span class="line"><span style="color:#6A737D;">        一般会将静态资源存放在静态资源文件夹下，然后将资源路径以字符串的形式存放在数据库中</span></span>
<span class="line"><span style="color:#6A737D;">        使用时直接根据资源路径去静态资源文件夹找对应的资源即可</span></span>
<span class="line"><span style="color:#6A737D;">    Mixed类型：</span></span>
<span class="line"><span style="color:#6A737D;">        任意类型，类型不受约束，可以赋任何值，通过mongoose.Schema.Types.Mixed指定</span></span>
<span class="line"><span style="color:#6A737D;">    ObjectId类型：</span></span>
<span class="line"><span style="color:#6A737D;">        将字段值约束为 ID 类型，而且值必须是文档ID形式才行，不能自己造。需要使用 mongoose.Schema.Types.ObjectId 指定</span></span>
<span class="line"><span style="color:#6A737D;">        一般用来做外键——将另一个文档的ID存到当前文档当中去，让它们之间产生关联。当使用另一个文档当中的字段时，通过ID就可以找到，可以将其字段值取出来</span></span>
<span class="line"><span style="color:#6A737D;">    Decimal128类型：</span></span>
<span class="line"><span style="color:#6A737D;">        高精度数字，需要使用 mongoose.Schema.Types.Decimal128 指定</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果属性名正确，类型错误，会报错</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果属性名错误，该属性会被忽略</span></span>
<span class="line"><span style="color:#E1E4E8;">  BookModel.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;西游记&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      author: </span><span style="color:#9ECBFF;">&quot;吴承恩&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      price: </span><span style="color:#79B8FF;">19.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isHot: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      tags: [</span><span style="color:#9ECBFF;">&quot;鬼怪&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;励志&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      pubTime: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      test: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">      mongoose.</span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 连接失败</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;连接失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 连接关闭</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;close&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;连接关闭&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mongoose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongoose&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb://127.0.0.1:27017/bilibili&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">once</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;open&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;连接成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookSchema </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">Schema</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    name: String,</span></span>
<span class="line"><span style="color:#24292E;">    author: String,</span></span>
<span class="line"><span style="color:#24292E;">    price: Number,</span></span>
<span class="line"><span style="color:#24292E;">    isHot: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">    tags: Array,</span></span>
<span class="line"><span style="color:#24292E;">    pubTime: Date,</span></span>
<span class="line"><span style="color:#24292E;">    test: mongoose.Schema.Types.Mixed,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookModel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">model</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;books&quot;</span><span style="color:#24292E;">, BookSchema);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    Buffer类型：</span></span>
<span class="line"><span style="color:#6A737D;">        即二进制类型，也就是说可以将视频、图片等文件变成二进制格式存在数据库中，但一般不这么做</span></span>
<span class="line"><span style="color:#6A737D;">        一般会将静态资源存放在静态资源文件夹下，然后将资源路径以字符串的形式存放在数据库中</span></span>
<span class="line"><span style="color:#6A737D;">        使用时直接根据资源路径去静态资源文件夹找对应的资源即可</span></span>
<span class="line"><span style="color:#6A737D;">    Mixed类型：</span></span>
<span class="line"><span style="color:#6A737D;">        任意类型，类型不受约束，可以赋任何值，通过mongoose.Schema.Types.Mixed指定</span></span>
<span class="line"><span style="color:#6A737D;">    ObjectId类型：</span></span>
<span class="line"><span style="color:#6A737D;">        将字段值约束为 ID 类型，而且值必须是文档ID形式才行，不能自己造。需要使用 mongoose.Schema.Types.ObjectId 指定</span></span>
<span class="line"><span style="color:#6A737D;">        一般用来做外键——将另一个文档的ID存到当前文档当中去，让它们之间产生关联。当使用另一个文档当中的字段时，通过ID就可以找到，可以将其字段值取出来</span></span>
<span class="line"><span style="color:#6A737D;">    Decimal128类型：</span></span>
<span class="line"><span style="color:#6A737D;">        高精度数字，需要使用 mongoose.Schema.Types.Decimal128 指定</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果属性名正确，类型错误，会报错</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果属性名错误，该属性会被忽略</span></span>
<span class="line"><span style="color:#24292E;">  BookModel.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;西游记&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      author: </span><span style="color:#032F62;">&quot;吴承恩&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      price: </span><span style="color:#005CC5;">19.9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isHot: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      tags: [</span><span style="color:#032F62;">&quot;鬼怪&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;励志&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      pubTime: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">      test: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">      mongoose.</span><span style="color:#6F42C1;">disconnect</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 连接失败</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;连接失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 连接关闭</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;close&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;连接关闭&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,5),e=[p];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const m=s(o,[["render",t]]);export{u as __pageData,m as default};
