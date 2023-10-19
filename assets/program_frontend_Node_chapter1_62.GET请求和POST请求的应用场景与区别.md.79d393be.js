import{_ as e,o as a,c as t,Q as l}from"./chunks/framework.419948d5.js";const P=JSON.parse('{"title":"GET请求和POST请求的应用场景与区别","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/62.GET请求和POST请求的应用场景与区别.md","filePath":"program/frontend/Node/chapter1/62.GET请求和POST请求的应用场景与区别.md","lastUpdated":1697287289000}'),i={name:"program/frontend/Node/chapter1/62.GET请求和POST请求的应用场景与区别.md"},o=l('<h1 id="get请求和post请求的应用场景与区别" tabindex="-1">GET请求和POST请求的应用场景与区别 <a class="header-anchor" href="#get请求和post请求的应用场景与区别" aria-label="Permalink to &quot;GET请求和POST请求的应用场景与区别&quot;">​</a></h1><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><p>GET 请求的情况：</p><ul><li>在地址栏直接输入 url 访问</li><li>点击 a 链接</li><li>link 标签引入 css</li><li>script 标签引入 js</li><li>img 标签引入图片</li><li>form 标签中的 method 为 get （不区分大小写）</li><li>ajax 中的 get 请求</li></ul><p>POST 请求的情况：</p><ul><li>form 标签中的 method 为 post（不区分大小写）</li><li>AJAX 的 post 请求</li></ul><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><p>GET 和 POST 是 HTTP 协议请求的两种方式。</p><ul><li><p>GET 主要用来获取数据，POST 主要用来提交数据（不是绝对的，GET也可以提交数据，POST也可以获取数据）</p></li><li><p>GET 带参数请求是将参数放到 URL 之后，体现为查询字符串； POST 带参数请求是将参数放到请求体中（也不是绝对的，GET参数也可以设置在请求体，POST也可以设置查询字符串）</p></li><li><p>POST 请求相对（不是绝对的，因为可以抓包，而抓包时POST也不安全） GET 安全一些，因为在浏览器中参数会暴露在地址栏</p></li><li><p>GET 请求大小有限制，一般为 2K，而 POST 请求则没有大小限制</p></li></ul>',9),r=[o];function _(T,p,s,n,d,c){return a(),t("div",null,r)}const S=e(i,[["render",_]]);export{P as __pageData,S as default};
