mongooseDemo
============

mongooseDemo

##初始化
 * 运行前打开mongod
 * node app.js
 * 浏览器输入localhost:3000/init初始化数据

##运行

```
app.get('/init',book.init); //初始化
app.get('/getbook',book.getbook); //查
app.get('/shanchu',book.shanchu); //删
app.get('/fenye',book.fenye); //分页
app.get('/addBook',book.addBook); //增
app.get('/update',book.update); //改
```