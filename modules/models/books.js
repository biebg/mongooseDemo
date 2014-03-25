var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name: { type: String, unique: true, index: true },
	publishTime: {type: Date, default: Date.now},
	description:{type: String}
});

mongoose.model('Book', BookSchema);