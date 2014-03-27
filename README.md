mongoose技术分享
============
##1.为什么使用mongoose（个人见解）
 * 单易用，许多方法都已封装完成（如find，findOne，findById等等）；
 * 对于索引，唯一值，默认值这些可直接通过一个字段即可设置完成，不需要多余代码；
 * 代码分享上，别人可直接从Schema中看出数据库结构；
 * 中间件，插件，setter，getter。。。。（没实际操作过，不是很理解）；

##2.mongoose的用法
### 链接数据库
  ```
  mongoose.connect("mongodb://username:pswd@ip:port/dbname", function (err) {
    if (err) {
      console.error('connect to %s error: ', config.db, err.message);
      process.exit(1);
    }
  });
  ```
  

### 新建Schema
  ``` 
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var BookSchema = new Schema({
    name: { type: String, unique: true, index: true },
   	publishTime: {type: Date, default: Date.now},
   	description:{type: String}，
   	havasale:{type:Number,min:0}
  });
  ```
  基本数据类型：
  * String
  * Number
  * Date
  * Buffer
  * Boolean
  * __Mixed__（Schema.Types.Mixed）
  * __ObjectId__（Schema.Types.ObjectId）
  * Array
  
### 新建model
```
  var Books=mongoose.model('Book', BookSchema);
  var book=new Books({name:"javascript"});
  book.save(function(err){
   if(err)
       console.log(err);
   else
       console.log("success")
  })
```
### 增删改查
  增删改查，之前的方法都还可以用（除了insert），下面只介绍*不一样*的地方：
  
  * 增：
  ```
    var book=new Books({name:"javascript"});
  book.save(function(err){
   if(err)
       console.log(err);
   else
       console.log("success")
  })
  ```
  
  ```
  Books.create({ size: 'javascript' }, function (err, book) {
  if (err) console.log(err);
  book.save(function(err){
   if(err)
       console.log(err);
   else
       console.log("success")
  })
  })
  ```
 * 改
 *



