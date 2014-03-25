var models = require('../models');
var Books = models.Books;
var async=require('async');

function getAllBooks(fields, options, callback){
	Books.find({}, fields, options, function(err, data){
	        callback && callback(err, data);
	    });
}

function getOneBook(query, fields, options, callback){
	Books.findOne(query, fields, options, function(err, data){
		callback && callback(err, data);
	});
}

function updateBook(query, data, options, callback){
	Books.update(query, data, options, function(err, num){
		callback && callback(err, num);
	});
}

function deleteBook(query, callback){
	Books.remove(query, function(err){
		callback && callback(err);
	});
}

function addBook(data, callback){
	var book = new Books(data);
	book.save(function(err){
		callback && callback(err);
	});
}

function getBooksBySelector(query, fields, options, callback){
	Books.find(query, fields, options, function(err, data){
		callback && callback(err, data);
	});
}
function init(callback){
    var array=[];
    for(var i=0;i<100;i++){
       array.push(i);
    }
    var iterator=function(item,finish){
        var json={
            name:item
        }
        addBook(json,function(err,result){
               if(!err){
                   finish();
               }else{
                   console.log(err);
                   finish();
               }
        })
    }
    async.eachSeries(array,iterator,function(err,result){
        console.log('init finish');
        callback()

    })
}
exports.getAllBooks = getAllBooks;
exports.getOneBook = getOneBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
exports.insertOneBook = addBook;
exports.getBooksBySelector = getBooksBySelector;
exports.init=init;