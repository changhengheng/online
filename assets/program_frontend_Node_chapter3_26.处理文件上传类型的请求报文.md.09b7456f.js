import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const A=JSON.parse('{"title":"处理文件上传类型的请求报文","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter3/26.处理文件上传类型的请求报文.md","filePath":"program/frontend/Node/chapter3/26.处理文件上传类型的请求报文.md","lastUpdated":1697287289000}'),p={name:"program/frontend/Node/chapter3/26.处理文件上传类型的请求报文.md"},o=l(`<h1 id="处理文件上传类型的请求报文" tabindex="-1">处理文件上传类型的请求报文 <a class="header-anchor" href="#处理文件上传类型的请求报文" aria-label="Permalink to &quot;处理文件上传类型的请求报文&quot;">​</a></h1><p>使用 formidable 处理上传文件类型请求：<a href="https://www.npmjs.com/package/formidable" target="_blank" rel="noreferrer">https://www.npmjs.com/package/formidable</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> express </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;express&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 注意formidable需要使用解构赋值的引入方式</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">formidable</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;formidable&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> router </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> express.</span><span style="color:#B392F0;">Router</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* GET home page. */</span></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;index&quot;</span><span style="color:#E1E4E8;">, { title: </span><span style="color:#9ECBFF;">&quot;Express&quot;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 显示网页的表单 portrait是肖像的意思</span></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/portrait&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;portrait&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 处理文件上传</span></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/portrait&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    服务器处理上传文件的一般逻辑是——保存上传的文件，而且一般会保存在用户能够轻易访问到的位置，即网站根目录public。这些功能通过配置formidable的配置对象实现。</span></span>
<span class="line"><span style="color:#6A737D;">    其次，上传文件完成后，应该保存文件在服务器上的存放路径，方便之后用户再次通过请求访问时获取对应资源返回给前端，这个请求一般是这样的（即访问服务器对应资源）： http://127.0.0.1:3000/images/bf5d924a0d68b014849eeaa00.png</span></span>
<span class="line"><span style="color:#6A737D;">    服务器需要保存的就是这个访问URL，但是保存时只需要保存资源在**服务器上的相对路径**，hash路由由#区分客户端路径和服务端路径，history则一般（指入口文件存放于服务器根目录）是除了协议、域名和端口的剩余路径。</span></span>
<span class="line"><span style="color:#6A737D;">    这样做的好处是避免写成硬编码，如果服务器的协议、域名或端口换了，还可以找到对应的资源</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    这个url数据将来会保存在数据库中</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建表单对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">form</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">formidable</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    multiples: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置上传文件的保存目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    uploadDir: __dirname </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/../public/images&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 保持文件后缀</span></span>
<span class="line"><span style="color:#E1E4E8;">    keepExtensions: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 解析请求报文，并将解析结果放在fields和files两个变量里</span></span>
<span class="line"><span style="color:#E1E4E8;">  form.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(req, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">fields</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">files</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// fields 是一个对象，存放所有非 input type 为 file 类型的字段，比如text、radio、checkbox等等，字段名是对应类型input的name值，字段值是输入值</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// files 也是一个对象，单独存放 input type 为 file 类型的字段，可以做一些用body-parse（获取请求体数据）可以做的事情</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;fields&quot;</span><span style="color:#E1E4E8;">, fields); </span><span style="color:#6A737D;">// fields { username: [ &#39;13207106109&#39; ] }</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;files&quot;</span><span style="color:#E1E4E8;">, files);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">      files {</span></span>
<span class="line"><span style="color:#6A737D;">        portrait: [</span></span>
<span class="line"><span style="color:#6A737D;">          PersistentFile {</span></span>
<span class="line"><span style="color:#6A737D;">            _events: [Object: null prototype],</span></span>
<span class="line"><span style="color:#6A737D;">            _eventsCount: 1,</span></span>
<span class="line"><span style="color:#6A737D;">            _maxListeners: undefined,</span></span>
<span class="line"><span style="color:#6A737D;">            lastModifiedDate: 2023-10-14T10:31:03.346Z,</span></span>
<span class="line"><span style="color:#6A737D;">            filepath: &#39;E:\\\\practice\\\\practice\\\\node\\\\generator\\\\public\\\\images\\\\bf5d924a0d68b014849eeaa00.png&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            newFilename: &#39;bf5d924a0d68b014849eeaa00.png&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            originalFilename: &#39;scopes.png&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            mimetype: &#39;image/png&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            hashAlgorithm: false,</span></span>
<span class="line"><span style="color:#6A737D;">            size: 98191,</span></span>
<span class="line"><span style="color:#6A737D;">            _writeStream: [WriteStream],</span></span>
<span class="line"><span style="color:#6A737D;">            hash: null,</span></span>
<span class="line"><span style="color:#6A737D;">            [Symbol(kCapture)]: false</span></span>
<span class="line"><span style="color:#6A737D;">          }</span></span>
<span class="line"><span style="color:#6A737D;">        ]</span></span>
<span class="line"><span style="color:#6A737D;">      }</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/images/&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> files.portrait.PersistentFile.newFilename; </span><span style="color:#6A737D;">// 这个数据会保存在数据库中</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> router;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> express </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;express&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 注意formidable需要使用解构赋值的引入方式</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">formidable</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;formidable&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> router </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> express.</span><span style="color:#6F42C1;">Router</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* GET home page. */</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;index&quot;</span><span style="color:#24292E;">, { title: </span><span style="color:#032F62;">&quot;Express&quot;</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 显示网页的表单 portrait是肖像的意思</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/portrait&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;portrait&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 处理文件上传</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/portrait&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    服务器处理上传文件的一般逻辑是——保存上传的文件，而且一般会保存在用户能够轻易访问到的位置，即网站根目录public。这些功能通过配置formidable的配置对象实现。</span></span>
<span class="line"><span style="color:#6A737D;">    其次，上传文件完成后，应该保存文件在服务器上的存放路径，方便之后用户再次通过请求访问时获取对应资源返回给前端，这个请求一般是这样的（即访问服务器对应资源）： http://127.0.0.1:3000/images/bf5d924a0d68b014849eeaa00.png</span></span>
<span class="line"><span style="color:#6A737D;">    服务器需要保存的就是这个访问URL，但是保存时只需要保存资源在**服务器上的相对路径**，hash路由由#区分客户端路径和服务端路径，history则一般（指入口文件存放于服务器根目录）是除了协议、域名和端口的剩余路径。</span></span>
<span class="line"><span style="color:#6A737D;">    这样做的好处是避免写成硬编码，如果服务器的协议、域名或端口换了，还可以找到对应的资源</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    这个url数据将来会保存在数据库中</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建表单对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">form</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">formidable</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    multiples: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置上传文件的保存目录</span></span>
<span class="line"><span style="color:#24292E;">    uploadDir: __dirname </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/../public/images&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 保持文件后缀</span></span>
<span class="line"><span style="color:#24292E;">    keepExtensions: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 解析请求报文，并将解析结果放在fields和files两个变量里</span></span>
<span class="line"><span style="color:#24292E;">  form.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(req, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fields</span><span style="color:#24292E;">, </span><span style="color:#E36209;">files</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(err);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// fields 是一个对象，存放所有非 input type 为 file 类型的字段，比如text、radio、checkbox等等，字段名是对应类型input的name值，字段值是输入值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// files 也是一个对象，单独存放 input type 为 file 类型的字段，可以做一些用body-parse（获取请求体数据）可以做的事情</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;fields&quot;</span><span style="color:#24292E;">, fields); </span><span style="color:#6A737D;">// fields { username: [ &#39;13207106109&#39; ] }</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;files&quot;</span><span style="color:#24292E;">, files);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">      files {</span></span>
<span class="line"><span style="color:#6A737D;">        portrait: [</span></span>
<span class="line"><span style="color:#6A737D;">          PersistentFile {</span></span>
<span class="line"><span style="color:#6A737D;">            _events: [Object: null prototype],</span></span>
<span class="line"><span style="color:#6A737D;">            _eventsCount: 1,</span></span>
<span class="line"><span style="color:#6A737D;">            _maxListeners: undefined,</span></span>
<span class="line"><span style="color:#6A737D;">            lastModifiedDate: 2023-10-14T10:31:03.346Z,</span></span>
<span class="line"><span style="color:#6A737D;">            filepath: &#39;E:\\\\practice\\\\practice\\\\node\\\\generator\\\\public\\\\images\\\\bf5d924a0d68b014849eeaa00.png&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            newFilename: &#39;bf5d924a0d68b014849eeaa00.png&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            originalFilename: &#39;scopes.png&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            mimetype: &#39;image/png&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            hashAlgorithm: false,</span></span>
<span class="line"><span style="color:#6A737D;">            size: 98191,</span></span>
<span class="line"><span style="color:#6A737D;">            _writeStream: [WriteStream],</span></span>
<span class="line"><span style="color:#6A737D;">            hash: null,</span></span>
<span class="line"><span style="color:#6A737D;">            [Symbol(kCapture)]: false</span></span>
<span class="line"><span style="color:#6A737D;">          }</span></span>
<span class="line"><span style="color:#6A737D;">        ]</span></span>
<span class="line"><span style="color:#6A737D;">      }</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/images/&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> files.portrait.PersistentFile.newFilename; </span><span style="color:#6A737D;">// 这个数据会保存在数据库中</span></span>
<span class="line"><span style="color:#24292E;">    res.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(url);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> router;</span></span></code></pre></div>`,3),e=[o];function t(r,c,y,E,i,F){return n(),a("div",null,e)}const D=s(p,[["render",t]]);export{A as __pageData,D as default};
