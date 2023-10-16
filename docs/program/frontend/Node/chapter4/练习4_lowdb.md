# lowdb

lowdb是一个本地的json文件数据库，就是用一个json文件来充当数据库，实现增删改查这些数据库的基本的功能。

lowdb用来管理数据，实现数据的持久化存储。

了解即可，项目中用的不多。

安装：`npm install lowdb@1.0.0`

使用：

```js
// 以1.0.0版本为例
// lowdb
const low = require('lowdb')
// 读写适配器，用来读写json文件 
const FileSync = require('lowdb/adapters/FileSync')

// 参数一是json文件地址，参数二是一个可选的配置对象 https://www.npmjs.com/package/lowdb/v/1.0.0
const adapter = new FileSync('db.json')
// 创建一个lodash chain，拥有一些属性和方法，用来操作数据库
const db = low(adapter)
// 初始化数据 defaults()设置默认值 write()将这些初始值写入lowdb
db.defaults({ posts: [], user: {} }).write()

// 写入数据
db.get('posts') // 获取posts数据
  .push({ id: 1, title: 'lowdb is awesome'}) // 添加数据进去
  .write() // 写入lowdb

// 获取数据 
console.log(db.get('posts').value())

// 删除数据
let res1 = db.get('posts').remove({id:1}).write() // remove() 传输删除的条件
console.log(res1) // 返回被删除的元素

// 获取单条数据
let res2 = db.get('posts').find({id:1}).value()
console.log(res2)

// 更新数据
// 先获取，才能更新
db.get('posts').find({id:1}).assign({title:'hello world!'}).write()
```
