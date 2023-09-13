问题来源参考：阮一峰 - tsconfig.json 的 extends 配置项

讯飞星火：

您可以在 TypeScript 项目中使用多个 tsconfig.json 文件。要这样做，您需要在 tsconfig.json 文件中使用 extends 关键字来指定要扩展的配置文件。例如，如果您有两个 tsconfig.json 文件，一个名为 base.json，另一个名为 custom.json，则可以使用以下语法将它们组合在一起：

```json
{
  "extends": "./custom.json"
}
```

还没有解决