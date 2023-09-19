# ref解包是什么意思

Vue3 新增了 CompositionAPI，其中 ref() 用于声明响应式状态。

ref() 接收一个参数，并将其包裹在一个带有 .value 属性的 ref 对象中返回。

正常情况下，ref 对象的内部属性需要 .value 获取。解包就是指不使用 .value 而直接获取其内部属性。解包出现在两种情况下：

- 模板中使用 ref 对象时，会自动解包。
- 将一个 ref 对象传递给 reactive() 时，ref对象在 reactive() 内部会自动解包。
