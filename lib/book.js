/**
 * Created by a11 on 14-3-25.
 */
var Books = require('../modules/proxy/books');
function init(req,res){
    Books.init(function(){
        res.send({code:0})
    })
}
function getbook(req,res){
    Books.getOneBook({name:'1'},function(err,result){
        if(err){
            res.send({msg:"获取失败",err:err})
        }else{
            res.send({result:result})
        }
    })
}
function shanchu(req,res){
    Books.deleteBook({name:99},function(err,result){
        if(!err){
            Books.getAllBooks({},function(err,result){
                res.send({length:result.length})
            })
        }else{
            res.send({msg:"删除失败",err:err})
          }
    })
}
function update(req,res){
    Books.updateBook({name:10},{$set:{name:101}},function(err,result){
        if(err){
            res.send({msg:'更新失败',err:err})
        }else{
             res.send({err:err,result:result})
        }
       
    })
}
function addBook(req,res){
    Books.insertOneBook({name:102},function(err,result){
        if(err){
            res.send({msg:"更新失败",err:err})
        }else{
            res.send({msg:"更新成功",result:result})
        }
    })
}
function fenye(req,res){
    var begin=req.query.begin;
    var limit=req.query.limit;
    Books.getBooksBySelector({},{},{skip:begin,limit:limit},function(err,result){
          res.send(result);
    })
}
exports.init=init;
exports.getbook=getbook;
exports.shanchu=shanchu;
exports.fenye=fenye;
exports.addBook=addBook;
exports.update=update;
