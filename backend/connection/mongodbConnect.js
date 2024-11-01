const mongoose = require("mongoose");

const Connection = mongoose.connect('mongodb+srv://huzaifaktk0905:G0khuZAifAEr@mongocluster.ld6y3.mongodb.net/Data');

module.exports = Connection;