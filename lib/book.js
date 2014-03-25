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
        res.send(result)
    })
}
function shanchu(req,res){
    Books.deleteBook({name:99},function(err,result){
        if(!err){
            Books.getAllBooks({},function(err,result){
                res.send({length:result.length})
            })
        }
    })
}
function update(req,res){
    Books.updateBook({name:10},{$set:{name:101}},function(err,result){
        res.send({err:err,result:result})
    })
}
function addBook(req,res){
    Books.insertOneBook({name:102},function(err,result){
        res.send({err:err,result:result})
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