import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.419948d5.js";const l="/assets/uTools_1697340454768.8eda5489.png",d=JSON.parse('{"title":"MongoDB核心概念","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter5/2.MongoDB核心概念.md","filePath":"program/frontend/Node/chapter5/2.MongoDB核心概念.md","lastUpdated":1697452647000}'),p={name:"program/frontend/Node/chapter5/2.MongoDB核心概念.md"},t=o('<h1 id="mongodb核心概念" tabindex="-1">MongoDB核心概念 <a class="header-anchor" href="#mongodb核心概念" aria-label="Permalink to &quot;MongoDB核心概念&quot;">​</a></h1><p>Mongodb 中有三个重要概念需要掌握：</p><ol><li>数据库（database） 数据库是一个数据仓库，数据库服务下可以创建很多数据库，数据库中可以存放很多集合</li><li>集合（collection） 集合类似于 JS 中的数组，在集合中可以存放很多文档</li><li>文档（document） 文档是数据库中的最小单位，类似于 JS 中的对象</li></ol><p><img src="'+l+`" alt="xx"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;accounts&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3-YLju5f3&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;买电脑&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;time&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2023-02-08&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;-1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;account&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;5500&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;remarks&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;为了上网课&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3-YLju5f4&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;请女朋友吃饭&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;time&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2023-02-08&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;-1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;account&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;214&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;remarks&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;情人节聚餐&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;mRQiD4s3K&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;发工资&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;time&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2023-02-19&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;account&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;4396&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;remarks&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;终于发工资啦!~~&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;users&quot;</span><span style="color:#E1E4E8;">:[</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;zhangsan&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;age&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">18</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;lisi&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;age&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;wangwu&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;age&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">22</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">&quot;accounts&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3-YLju5f3&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;买电脑&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;time&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2023-02-08&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;-1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;account&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;5500&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;remarks&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;为了上网课&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3-YLju5f4&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;请女朋友吃饭&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;time&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2023-02-08&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;-1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;account&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;214&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;remarks&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;情人节聚餐&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;mRQiD4s3K&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;发工资&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;time&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2023-02-19&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;account&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;4396&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;remarks&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;终于发工资啦!~~&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;users&quot;</span><span style="color:#24292E;">:[</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;zhangsan&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;age&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;lisi&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;age&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;wangwu&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;age&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">22</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>大家可以通过 JSON 文件来理解 Mongodb 中的概念：</p><ul><li>一个 <code>JSON 文件</code> 好比是一个 <code>数据库</code> ，一个 Mongodb 服务下可以有 <code>N</code> 个数据库</li><li>JSON 文件中的 <code>一级属性的数组值</code> 好比是 <code>集合</code></li><li>数组中的对象好比是 <code>文档</code></li><li>对象中的属性有时也称之为 <code>字段</code></li></ul><p>一般情况下</p><ul><li>一个项目使用一个数据库</li><li>一个集合会存储同一种类型的数据（比如一个集合存账单，一个集合存用户）</li></ul>`,9),e=[t];function c(E,r,y,u,q,i){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{d as __pageData,C as default};
