# LodashChain的显式链和隐式链

问题来源：Nodejs/chapter4/练习4_lowdb

`_(value)`建立了一个隐式链对象，可以把那些能操作并返回 arrays（数组）、collections（集合）、functions（函数）的”.Methods”（lodash的函数）串起来。 那些能返回“唯一值(single value)”或者可能返回原生数据类型（primitive value）会自动结束链式反应，否则需要调用 `_#value` 方法解除链(即获得计算结果)。
而显式链则用`_.chain()` 的方式实现延迟计算，即：求值操作等到`_#value`被调用时再执行。

`value()` 方法的作用：结束链式调用并获得计算结果。