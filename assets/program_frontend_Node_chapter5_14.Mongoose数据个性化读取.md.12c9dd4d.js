import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const A=JSON.parse('{"title":"数据个性化读取","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter5/14.Mongoose数据个性化读取.md","filePath":"program/frontend/Node/chapter5/14.Mongoose数据个性化读取.md","lastUpdated":1697452647000}'),p={name:"program/frontend/Node/chapter5/14.Mongoose数据个性化读取.md"},o=l(`<h1 id="数据个性化读取" tabindex="-1">数据个性化读取 <a class="header-anchor" href="#数据个性化读取" aria-label="Permalink to &quot;数据个性化读取&quot;">​</a></h1><ol><li><p>字段筛选</p><p>筛选可以获取文档中需要的某一些属性，而不是全部的属性</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//0:不要的字段</span></span>
<span class="line"><span style="color:#6A737D;">//1:要的字段</span></span>
<span class="line"><span style="color:#E1E4E8;">SongModel.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">select</span><span style="color:#E1E4E8;">({_id:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,title:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    mongoose.connection.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//0:不要的字段</span></span>
<span class="line"><span style="color:#6A737D;">//1:要的字段</span></span>
<span class="line"><span style="color:#24292E;">SongModel.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">select</span><span style="color:#24292E;">({_id:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,title:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">exec</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#24292E;">,</span><span style="color:#E36209;">data</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(err) </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> err;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">    mongoose.connection.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div></li><li><p>数据排序</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//sort 排序</span></span>
<span class="line"><span style="color:#6A737D;">// 1:升序</span></span>
<span class="line"><span style="color:#6A737D;">//-1:降序</span></span>
<span class="line"><span style="color:#E1E4E8;">SongModel.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">({hot:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    mongoose.connection.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//sort 排序</span></span>
<span class="line"><span style="color:#6A737D;">// 1:升序</span></span>
<span class="line"><span style="color:#6A737D;">//-1:降序</span></span>
<span class="line"><span style="color:#24292E;">SongModel.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">({hot:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">exec</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#24292E;">,</span><span style="color:#E36209;">data</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(err) </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> err;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">    mongoose.connection.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div></li><li><p>数据截取</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//skip 跳过 limit 限定</span></span>
<span class="line"><span style="color:#E1E4E8;">SongModel.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">skip</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">limit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(err) </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> err;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    mongoose.connection.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//skip 跳过 limit 限定</span></span>
<span class="line"><span style="color:#24292E;">SongModel.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">skip</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">limit</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">exec</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#24292E;">,</span><span style="color:#E36209;">data</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(err) </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> err;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">    mongoose.connection.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mongoose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongoose&quot;</span><span style="color:#E1E4E8;">);</span></span>
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
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 1.字段筛选</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// select() 接收一个对象，用于将要读取的属性的值设置为1，即可在查询结果中返回该字段</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 0:不要的字段，1:要的字段</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// exec() 用来指定回调</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   BookModel.find()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     .select({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       name: 1,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       author: 1,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     .exec((err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 2. 数据排序</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// sort() 接收一个对象，用于设置将要排序的属性——1:升序，-1:降序</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// sort和select可以同时使用</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   BookModel.find()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     .sort({ price: -1 })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     .select({ name: 1, _id: 0, price: 1 })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     .exec((err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 3. 数据阶段</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// skip 跳过 limit 限定</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 降序排列，并选出排前三的部分</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   BookModel.find()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     .sort({ price: -1 })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     .select({ name: 1, _id: 0, price: 1 })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     .limit(3)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     .exec((err, data) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       if (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//         return;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//       console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 降序排列，并选出排前4-6的部分</span></span>
<span class="line"><span style="color:#E1E4E8;">  BookModel.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">({ price: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">select</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, _id: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, price: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">skip</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 跨过前三个不取</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">limit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 跨过后的列表的前三个</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;读取失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data); </span><span style="color:#6A737D;">// data是获取到的所有数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
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
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 1.字段筛选</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// select() 接收一个对象，用于将要读取的属性的值设置为1，即可在查询结果中返回该字段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 0:不要的字段，1:要的字段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// exec() 用来指定回调</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   BookModel.find()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     .select({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       name: 1,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       author: 1,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     .exec((err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 2. 数据排序</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// sort() 接收一个对象，用于设置将要排序的属性——1:升序，-1:降序</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// sort和select可以同时使用</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   BookModel.find()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     .sort({ price: -1 })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     .select({ name: 1, _id: 0, price: 1 })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     .exec((err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 3. 数据阶段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// skip 跳过 limit 限定</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 降序排列，并选出排前三的部分</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   BookModel.find()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     .sort({ price: -1 })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     .select({ name: 1, _id: 0, price: 1 })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     .limit(3)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     .exec((err, data) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       if (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         console.log(&quot;读取失败&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//         return;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//       console.log(data); // data是获取到的所有数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 降序排列，并选出排前4-6的部分</span></span>
<span class="line"><span style="color:#24292E;">  BookModel.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">({ price: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">select</span><span style="color:#24292E;">({ name: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, _id: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, price: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">skip</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 跨过前三个不取</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">limit</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 跨过后的列表的前三个</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">exec</span><span style="color:#24292E;">((</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;读取失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data); </span><span style="color:#6A737D;">// data是获取到的所有数据</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;连接失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">mongoose.connection.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;close&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;连接关闭&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,3),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const D=s(p,[["render",c]]);export{A as __pageData,D as default};
