# Project references 项目引用

参考：

- 讯飞星火
- [https://www.tslang.cn/docs/handbook/project-references.html](https://www.tslang.cn/docs/handbook/project-references.html)
- [https://www.typescriptlang.org/tsconfig#referencesl](https://www.typescriptlang.org/tsconfig#references)

讯飞星火：
问：Project references 是什么
答：在 TypeScript 中，Project references 是 TypeScript 3.0 中的一项新功能，允许您将 TypeScript 程序构建为更小的部分。 通过这样做，您可以大大缩短构建时间，实现组件之间的逻辑分离，并以新的更好的方式组织代码。

## 介绍

项目引用是 TypeScript 3.0 的新特性，用于将 TypeScript 程序的结构分割为更小的组成部分。进而改善构建时间，并强制在逻辑上对组件进行分离，便于组织代码。

tsconfig.json 增加了顶层属性 references，指明要引用的工程：

```js
{
    "compilerOptions": {
        // The usual
    },
    "references": [
        { "path": "../src" }
    ]
}
```

每个引用的 path 属性都可以指向到包含 tsconfig.json 文件的目录，或者直接指向到配置文件本身（名字是任意的）。

> 包含 tsconfig.json 的目录就是一个 ts 项目，tsconfig.json 文件所在的位置是该 ts 项目的根目录。

当你引用一个工程时，会发生下面的事：

- 导入引用工程中的模块实际加载的是它输出的声明文件（.d.ts）。
- 如果引用的工程生成一个 outFile，那么这个输出文件的 .d.ts 文件里的声明对于当前工程是可见的。
- 构建模式（后文）会根据需要自动地构建引用的工程。
- 当你拆分成多个工程后，会显著地加速类型检查和编译，减少编辑器的内存占用，还会改善程序在逻辑上进行分组。
