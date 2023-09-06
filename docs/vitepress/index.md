# VitePress 常用的配置

[官网](https://vitepress.dev/reference/default-theme-layout#no-layout)

## MarkDown 扩展

### 内部链接

```md
[Home](/) <!-- 跳转到根目录的index.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html-->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three) <!-- 你可以忽略扩展名 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐）-->
[bar - four](../bar/four.html) <!-- 也可以用 .html-->
```

`/`根目录，指的是`docs`文件夹。

### emojis

:jigsaw:

[完整列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

### 自定义容器

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

## 默认主题配置

