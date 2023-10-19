import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.419948d5.js";const m=JSON.parse('{"title":"Mongoose 插入文档","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter5/7.Mongoose插入文档.md","filePath":"program/frontend/Node/chapter5/7.Mongoose插入文档.md","lastUpdated":1697452647000}'),l={name:"program/frontend/Node/chapter5/7.Mongoose插入文档.md"},p=o(`<h1 id="mongoose-插入文档" tabindex="-1">Mongoose 插入文档 <a class="header-anchor" href="#mongoose-插入文档" aria-label="Permalink to &quot;Mongoose 插入文档&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 1. 导入 mongoose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mongoose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongoose&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 连接 mongodb 服务 connect() 的参数是数据库服务地址，mongodb服务的协议名是mongodb，不是http。127.0.0.1 是服务IP，27017 是默认端口号，也可以不写，bilibili 是路径，设置数据库名称，如果该数据库不存在，会自动创建</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb://127.0.0.1:27017/bilibili&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 设置回调</span></span>
<span class="line"><span style="color:#6A737D;">// 连接成功</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;连接成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 对数据库的操作都要写在成功回调当中</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 5. 创建文档结构对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Schema 意思是模式，是数据库的组织和结构</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 通过 Schema 可以创建文档的结构对象，通过它可以约束这个集合中文档的属性（是什么）以及属性值的类型（是什么）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookSchema </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">Schema</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 6. 创建模型对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 模型对象是对文档操作的封装对象，可以完成对文档的CRUD操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// model() 参数一是要操作的集合名词，参数二是结构对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookModel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">model</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;books&quot;</span><span style="color:#E1E4E8;">, BookSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 7.新增</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// create() 方法用来向集合新增文档 参数一是要插入的文档，可以是对象或数组 参数二是回调，默认参数一是错误对象，默认参数二是插入成功的文档对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 注意：mongoose@7 不支持回调写法，换成 mongoose@6 即可</span></span>
<span class="line"><span style="color:#E1E4E8;">  BookModel.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;西游记&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      author: </span><span style="color:#9ECBFF;">&quot;吴承恩&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      price: </span><span style="color:#79B8FF;">19.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">        {</span></span>
<span class="line"><span style="color:#6A737D;">          name: &#39;西游记&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          author: &#39;吴承恩&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          price: 19.9,</span></span>
<span class="line"><span style="color:#6A737D;">          _id: new ObjectId(&quot;652ca095a4e2e49ac4131d92&quot;), // id是mongodb为文档生成的一个唯一标识</span></span>
<span class="line"><span style="color:#6A737D;">          __v: 0 // v 是mongoose内部生成的版本编号，一般用不到</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">       */</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 8. 关闭 mongodb 连接（项目运行过程中，不会添加该代码，会保持长连接，提高通信效率）</span></span>
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
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 1. 导入 mongoose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mongoose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongoose&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 连接 mongodb 服务 connect() 的参数是数据库服务地址，mongodb服务的协议名是mongodb，不是http。127.0.0.1 是服务IP，27017 是默认端口号，也可以不写，bilibili 是路径，设置数据库名称，如果该数据库不存在，会自动创建</span></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb://127.0.0.1:27017/bilibili&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 设置回调</span></span>
<span class="line"><span style="color:#6A737D;">// 连接成功</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">once</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;open&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;连接成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 对数据库的操作都要写在成功回调当中</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 5. 创建文档结构对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Schema 意思是模式，是数据库的组织和结构</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 通过 Schema 可以创建文档的结构对象，通过它可以约束这个集合中文档的属性（是什么）以及属性值的类型（是什么）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookSchema </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">Schema</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    name: String,</span></span>
<span class="line"><span style="color:#24292E;">    author: String,</span></span>
<span class="line"><span style="color:#24292E;">    price: Number,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 6. 创建模型对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 模型对象是对文档操作的封装对象，可以完成对文档的CRUD操作</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// model() 参数一是要操作的集合名词，参数二是结构对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookModel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">model</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;books&quot;</span><span style="color:#24292E;">, BookSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 7.新增</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// create() 方法用来向集合新增文档 参数一是要插入的文档，可以是对象或数组 参数二是回调，默认参数一是错误对象，默认参数二是插入成功的文档对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 注意：mongoose@7 不支持回调写法，换成 mongoose@6 即可</span></span>
<span class="line"><span style="color:#24292E;">  BookModel.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;西游记&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      author: </span><span style="color:#032F62;">&quot;吴承恩&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      price: </span><span style="color:#005CC5;">19.9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">        {</span></span>
<span class="line"><span style="color:#6A737D;">          name: &#39;西游记&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          author: &#39;吴承恩&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          price: 19.9,</span></span>
<span class="line"><span style="color:#6A737D;">          _id: new ObjectId(&quot;652ca095a4e2e49ac4131d92&quot;), // id是mongodb为文档生成的一个唯一标识</span></span>
<span class="line"><span style="color:#6A737D;">          __v: 0 // v 是mongoose内部生成的版本编号，一般用不到</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">       */</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 8. 关闭 mongodb 连接（项目运行过程中，不会添加该代码，会保持长连接，提高通信效率）</span></span>
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
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,2),e=[p];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const u=s(l,[["render",c]]);export{m as __pageData,u as default};
