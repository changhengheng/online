import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const u=JSON.parse('{"title":"Mongoose 删除文档","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter5/10.Mongoose删除文档.md","filePath":"program/frontend/Node/chapter5/10.Mongoose删除文档.md","lastUpdated":1697452647000}'),p={name:"program/frontend/Node/chapter5/10.Mongoose删除文档.md"},o=l(`<h1 id="mongoose-删除文档" tabindex="-1">Mongoose 删除文档 <a class="header-anchor" href="#mongoose-删除文档" aria-label="Permalink to &quot;Mongoose 删除文档&quot;">​</a></h1><p>准备工作：创建 novels 集合，添加数据，直接运行以下代码即可</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// data.js 生成数据</span></span>
<span class="line"><span style="color:#6A737D;">//1. 安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2. 导入 mongoose</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mongoose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongoose&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置 strictQuery 为 true</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;strictQuery&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3. 连接 mongodb 服务                        数据库的名称</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mongodb://127.0.0.1:27017/bilibili&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4. 设置回调</span></span>
<span class="line"><span style="color:#6A737D;">// 设置连接成功的回调  once 一次   事件回调函数只执行一次</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;open&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//5. 创建文档的结构对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//设置集合中文档的属性以及属性值的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookSchema </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">Schema</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: Boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//6. 创建模型对象  对文档操作的封装对象 mongoose 会使用集合名称的复数作为集合名创建集合</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookModel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">model</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;novel&#39;</span><span style="color:#E1E4E8;">, BookSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//7. 新增</span></span>
<span class="line"><span style="color:#E1E4E8;">  BookModel.</span><span style="color:#B392F0;">insertMany</span><span style="color:#E1E4E8;">([{</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;西游记&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;吴承恩&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">19.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;红楼梦&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;曹雪芹&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">29.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;三国演义&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;罗贯中&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">25.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;水浒传&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;施耐庵&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">20.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;活着&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;余华&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">19.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;狂飙&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;徐纪周&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">68</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;大魏能臣&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;黑男爵&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">9.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;知北游&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;洛水&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">59</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },{</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;道君&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;跃千愁&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">59</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },{</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;七煞碑&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;游泳的猫&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">29</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },{</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;独游&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;酒精过敏&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },{</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;大泼猴&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;甲鱼不是龟&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">26</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;黑暗王者&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;古羲&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">39</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;不二大道&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;文刀手予&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">89</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;大泼猴&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;甲鱼不是龟&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">59</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;长安的荔枝&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;马伯庸&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;命运&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;蔡崇达&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">59.8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;如雪如山&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;张天翼&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">58</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;三体&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;刘慈欣&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;秋园&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;杨本芬&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">38</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;百年孤独&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;范晔&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">39.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;在细雨中呼喊&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&#39;余华&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    is_hot: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },], (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//判断是否有错误</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//如果没有出错, 则输出插入后的文档对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)</span></span>
<span class="line"><span style="color:#E1E4E8;">    mongoose.</span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置连接错误的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接失败&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;close&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接关闭&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// data.js 生成数据</span></span>
<span class="line"><span style="color:#6A737D;">//1. 安装 mongoose</span></span>
<span class="line"><span style="color:#6A737D;">//2. 导入 mongoose</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mongoose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mongoose&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置 strictQuery 为 true</span></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;strictQuery&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3. 连接 mongodb 服务                        数据库的名称</span></span>
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mongodb://127.0.0.1:27017/bilibili&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//4. 设置回调</span></span>
<span class="line"><span style="color:#6A737D;">// 设置连接成功的回调  once 一次   事件回调函数只执行一次</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">once</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;open&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//5. 创建文档的结构对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//设置集合中文档的属性以及属性值的类型</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookSchema </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">Schema</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    name: String,</span></span>
<span class="line"><span style="color:#24292E;">    author: String,</span></span>
<span class="line"><span style="color:#24292E;">    price: Number,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: Boolean</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//6. 创建模型对象  对文档操作的封装对象 mongoose 会使用集合名称的复数作为集合名创建集合</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookModel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">model</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;novel&#39;</span><span style="color:#24292E;">, BookSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//7. 新增</span></span>
<span class="line"><span style="color:#24292E;">  BookModel.</span><span style="color:#6F42C1;">insertMany</span><span style="color:#24292E;">([{</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;西游记&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;吴承恩&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">19.9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;红楼梦&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;曹雪芹&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">29.9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;三国演义&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;罗贯中&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">25.9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;水浒传&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;施耐庵&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">20.9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;活着&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;余华&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">19.9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;狂飙&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;徐纪周&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">68</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;大魏能臣&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;黑男爵&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">9.9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;知北游&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;洛水&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">59</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },{</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;道君&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;跃千愁&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">59</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },{</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;七煞碑&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;游泳的猫&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">29</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },{</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;独游&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;酒精过敏&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },{</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;大泼猴&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;甲鱼不是龟&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">26</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;黑暗王者&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;古羲&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">39</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;不二大道&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;文刀手予&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">89</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;大泼猴&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;甲鱼不是龟&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">59</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;长安的荔枝&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;马伯庸&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;命运&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;蔡崇达&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">59.8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;如雪如山&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;张天翼&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">58</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;三体&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;刘慈欣&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;秋园&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;杨本芬&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">38</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;百年孤独&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;范晔&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">39.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;在细雨中呼喊&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&#39;余华&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    price: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    is_hot: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },], (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//判断是否有错误</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//如果没有出错, 则输出插入后的文档对象</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)</span></span>
<span class="line"><span style="color:#24292E;">    mongoose.</span><span style="color:#6F42C1;">disconnect</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置连接错误的回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接失败&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//设置连接关闭的回调</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;close&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接关闭&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>删除操作：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1. 安装 mongoose</span></span>
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
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   // 7. 删除一条</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   // 参数一是删除条件，参数二是回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   BookModel.deleteOne({ _id: &quot;652cb37831ea94cc7b785444&quot; }, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       console.log(&quot;删除失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     console.log(data); // { acknowledged: true, deletedCount: 1 } deletedCount是删除统计，如果值为1说明删除成功了</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 8. 批量删除</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//  参数一是删除条件，参数二是回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  BookModel.</span><span style="color:#B392F0;">deleteMany</span><span style="color:#E1E4E8;">({ is_hot: </span><span style="color:#9ECBFF;">&quot;652cb37831ea94cc7b785444&quot;</span><span style="color:#E1E4E8;"> }, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;删除失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data); </span><span style="color:#6A737D;">// { acknowledged: true, deletedCount: 9 } deletedCount是删除统计，如果值为9说明删除了9个</span></span>
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
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   // 7. 删除一条</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   // 参数一是删除条件，参数二是回调函数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   BookModel.deleteOne({ _id: &quot;652cb37831ea94cc7b785444&quot; }, (err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       console.log(&quot;删除失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     console.log(data); // { acknowledged: true, deletedCount: 1 } deletedCount是删除统计，如果值为1说明删除成功了</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 8. 批量删除</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//  参数一是删除条件，参数二是回调函数</span></span>
<span class="line"><span style="color:#24292E;">  BookModel.</span><span style="color:#6F42C1;">deleteMany</span><span style="color:#24292E;">({ is_hot: </span><span style="color:#032F62;">&quot;652cb37831ea94cc7b785444&quot;</span><span style="color:#24292E;"> }, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;删除失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data); </span><span style="color:#6A737D;">// { acknowledged: true, deletedCount: 9 } deletedCount是删除统计，如果值为9说明删除了9个</span></span>
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
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,5),e=[o];function c(t,E,r,y,i,F){return n(),a("div",null,e)}const B=s(p,[["render",c]]);export{u as __pageData,B as default};
