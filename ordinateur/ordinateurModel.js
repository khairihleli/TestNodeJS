var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ordinateur = new Schema({
    modele : String,
    categorie : String,
    dateFabrication : Date,
    prix : Number
})
module.exports = mongoose.model('ordinateur', ordinateur)