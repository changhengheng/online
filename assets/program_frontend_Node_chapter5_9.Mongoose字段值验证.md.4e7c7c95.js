import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const d=JSON.parse('{"title":"字段值验证","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter5/9.Mongoose字段值验证.md","filePath":"program/frontend/Node/chapter5/9.Mongoose字段值验证.md","lastUpdated":1697452647000}'),p={name:"program/frontend/Node/chapter5/9.Mongoose字段值验证.md"},o=l(`<h1 id="字段值验证" tabindex="-1">字段值验证 <a class="header-anchor" href="#字段值验证" aria-label="Permalink to &quot;字段值验证&quot;">​</a></h1><p>字段验证即对文档属性的值进行校验，如果合法，则允许插入数据库；如果不合法，则报错，并禁止插入数据库；</p><p>Mongoose 内置了一些验证器，方便校验字段值：</p><ol><li><p>必填项</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 设置必填项</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">title</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: String,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 设置必填项</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li><p>默认值</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">author</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;匿名&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">author</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: String,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;匿名&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//默认值</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div></li><li><p>枚举值</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">gender</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">enum</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;男&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;女&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">//设置的值必须是数组中的</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">gender</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: String,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">enum</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;男&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;女&#39;</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">//设置的值必须是数组中的</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div></li><li><p>唯一值</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">username</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">unique</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">username</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: String,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">unique</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div></li></ol><blockquote><p>unique 需要 <code>重建集合（重新将集合插入数据库）</code> 才能有效果 永远不要相信用户的输入（始终要对用户输入做校验）</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mongoose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongoose&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb://127.0.0.1:27017/bilibili&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;strictQuery&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoose.connection.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;连接成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookSchema </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">Schema</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 字段值验证</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 必填：字段值必须不为空</span></span>
<span class="line"><span style="color:#E1E4E8;">      unique: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 唯一值：字段值在文档当中必须是独一无二的</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#9ECBFF;">&quot;匿名&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值：传了就是传的值，没传就是默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    style: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enum: [</span><span style="color:#9ECBFF;">&quot;志怪&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;神话&quot;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 枚举：值必须为数据当中的某一项</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    price: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> BookModel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mongoose.</span><span style="color:#B392F0;">model</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;books&quot;</span><span style="color:#E1E4E8;">, BookSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  BookModel.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;西游记&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      author: </span><span style="color:#9ECBFF;">&quot;吴承恩&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      price: </span><span style="color:#79B8FF;">19.9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      style: </span><span style="color:#9ECBFF;">&quot;神话&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot; 插入失败~~&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"></span>
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
<span class="line"><span style="color:#24292E;">mongoose.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;strictQuery&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">once</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;open&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;连接成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookSchema </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">Schema</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 字段值验证</span></span>
<span class="line"><span style="color:#24292E;">    name: {</span></span>
<span class="line"><span style="color:#24292E;">      type: String,</span></span>
<span class="line"><span style="color:#24292E;">      required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 必填：字段值必须不为空</span></span>
<span class="line"><span style="color:#24292E;">      unique: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 唯一值：字段值在文档当中必须是独一无二的</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    author: {</span></span>
<span class="line"><span style="color:#24292E;">      type: String,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#032F62;">&quot;匿名&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值：传了就是传的值，没传就是默认值</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    style: {</span></span>
<span class="line"><span style="color:#24292E;">      type: String,</span></span>
<span class="line"><span style="color:#24292E;">      enum: [</span><span style="color:#032F62;">&quot;志怪&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;神话&quot;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 枚举：值必须为数据当中的某一项</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    price: Number,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> BookModel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mongoose.</span><span style="color:#6F42C1;">model</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;books&quot;</span><span style="color:#24292E;">, BookSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  BookModel.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;西游记&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      author: </span><span style="color:#032F62;">&quot;吴承恩&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      price: </span><span style="color:#005CC5;">19.9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      style: </span><span style="color:#032F62;">&quot;神话&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err);</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot; 插入失败~~&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"></span>
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
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,6),e=[o];function c(t,r,E,y,i,u){return n(),a("div",null,e)}const g=s(p,[["render",c]]);export{d as __pageData,g as default};
