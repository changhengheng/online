import{_ as e,o as n,c as a,Q as i}from"./chunks/framework.419948d5.js";const h=JSON.parse('{"title":"Image Minimizer压缩图片","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter2/39.ImageMinimizer压缩图片.md","filePath":"program/frontend/webpack/chapter2/39.ImageMinimizer压缩图片.md","lastUpdated":1694563493000}'),t={name:"program/frontend/webpack/chapter2/39.ImageMinimizer压缩图片.md"},o=i(`<h1 id="image-minimizer压缩图片" tabindex="-1">Image Minimizer压缩图片 <a class="header-anchor" href="#image-minimizer压缩图片" aria-label="Permalink to &quot;Image Minimizer压缩图片&quot;">​</a></h1><h2 id="为什么" tabindex="-1">为什么 <a class="header-anchor" href="#为什么" aria-label="Permalink to &quot;为什么&quot;">​</a></h2><p>开发如果项目中引用了较多图片，那么图片体积会比较大，将来请求速度比较慢。</p><p>我们可以对图片进行压缩，减少图片体积。</p><p><strong>注意：如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。</strong></p><h2 id="是什么" tabindex="-1">是什么 <a class="header-anchor" href="#是什么" aria-label="Permalink to &quot;是什么&quot;">​</a></h2><p><code>image-minimizer-webpack-plugin</code>: 用来压缩图片的插件</p><h2 id="怎么用" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用" aria-label="Permalink to &quot;怎么用&quot;">​</a></h2><ol><li><p>下载包</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm i image-minimizer-webpack-plugin imagemin -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm i image-minimizer-webpack-plugin imagemin -D</span></span></code></pre></div><p>还有剩下包需要下载，有两种模式：</p><ul><li><p>无损压缩</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D</span></span></code></pre></div></li><li><p>有损压缩</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo -D</span></span></code></pre></div></li></ul><blockquote><p><a href="https://baike.baidu.com/item/%E6%97%A0%E6%8D%9F%E3%80%81%E6%9C%89%E6%8D%9F%E5%8E%8B%E7%BC%A9" target="_blank" rel="noreferrer">有损/无损压缩的区别</a> 无损：压缩不影响图片质量，压缩程度相对较低 有损：压缩影响图片质量，压缩程度相对较高 注意：这几个包可能下载不成功，VPN成功率高一点</p></blockquote></li><li><p>配置</p></li></ol><p>我们以无损压缩配置为例：</p><pre><code>\`\`\`javascript
const path = require(&quot;path&quot;);
// ……
const ImageMinimizerPlugin = require(&quot;image-minimizer-webpack-plugin&quot;);

module.exports = {
// ……
module: {
    rules: [
    {
        oneOf: [
        // ……
        {
            test: /\\.(png|jpe?g|gif|svg)$/,
            type: &quot;asset&quot;,
            parser: {
            dataUrlCondition: {
                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
            },
            },
            generator: {
            // 将图片文件输出到 static/imgs 目录中
            // 将图片文件命名 [hash:8][ext][query]
            // [hash:8]: hash值取8位
            // [ext]: 使用之前的文件扩展名
            // [query]: 添加之前的query参数
            filename: &quot;static/imgs/[hash:8][ext][query]&quot;,
            },
        },
        // ……
        ],
    },
    ],
},
optimization: {
    minimizer: [
    // css压缩也可以写到optimization.minimizer里面，效果一样的
    new CssMinimizerPlugin(),
    // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了
    new TerserPlugin({
        parallel: threads, // 开启多进程
    }),
    // 压缩图片
    new ImageMinimizerPlugin({
        minimizer: {
        implementation: ImageMinimizerPlugin.imageminGenerate,
        options: {
            plugins: [
            [&quot;gifsicle&quot;, { interlaced: true }],
            [&quot;jpegtran&quot;, { progressive: true }],
            [&quot;optipng&quot;, { optimizationLevel: 5 }],
            [
                &quot;svgo&quot;,
                {
                plugins: [
                    &quot;preset-default&quot;,
                    &quot;prefixIds&quot;,
                    {
                    name: &quot;sortAttrs&quot;,
                    params: {
                        xmlnsOrder: &quot;alphabetical&quot;,
                    },
                    },
                ],
                },
            ],
            ],
        },
        },
    }),
    ],
},
// ……
mode: &quot;production&quot;,
devtool: &quot;source-map&quot;,
};
\`\`\`
</code></pre><ol start="3"><li><p>打包时会出现报错：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Error: Error with &#39;src\\images\\1.jpeg&#39;: &#39;&quot;C:\\Users\\86176\\Desktop\\webpack\\webpack_code\\node_modules\\jpegtran-bin\\vendor\\jpegtran.exe&quot;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">Error with &#39;src\\images\\3.gif&#39;: spawn C:\\Users\\86176\\Desktop\\webpack\\webpack_code\\node_modules\\optipng-bin\\vendor\\optipng.exe ENOENT</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Error: Error with &#39;src\\images\\1.jpeg&#39;: &#39;&quot;C:\\Users\\86176\\Desktop\\webpack\\webpack_code\\node_modules\\jpegtran-bin\\vendor\\jpegtran.exe&quot;&#39;</span></span>
<span class="line"><span style="color:#24292e;">Error with &#39;src\\images\\3.gif&#39;: spawn C:\\Users\\86176\\Desktop\\webpack\\webpack_code\\node_modules\\optipng-bin\\vendor\\optipng.exe ENOENT</span></span></code></pre></div><p>我们需要安装两个文件到 node_modules 中才能解决, 文件可以从课件中找到：</p><ul><li><p>jpegtran.exe</p><p>需要复制到 <code>node_modules\\jpegtran-bin\\vendor</code> 下面</p><blockquote><p><a href="http://jpegclub.org/jpegtran/" target="_blank" rel="noreferrer">jpegtran 官网地址</a></p></blockquote></li><li><p>optipng.exe</p><p>需要复制到 <code>node_modules\\optipng-bin\\vendor</code> 下面</p><blockquote><p><a href="http://optipng.sourceforge.net/" target="_blank" rel="noreferrer">OptiPNG 官网地址</a></p></blockquote></li></ul></li></ol>`,12),p=[o];function s(r,l,c,m,g,d){return n(),a("div",null,p)}const b=e(t,[["render",s]]);export{h as __pageData,b as default};
