var knex = require('knex')( require('./../knexfile')[process.env.NODE_ENV || 'development'] )

function all(cb) {
	knex.select().table('water_sources')
	.then(function(data){
		console.log(data)
	})
}

function insertToDatabase(data){
	console.log("insert function running")
	console.log(data.name, "this is input name")
	knex('water_sources').insert({
		name: data.name,
		location: "testing",
		quality: data.quality,
		review: data.description,
		latitude: data.lat,
		longitude: data.lng 
	})
}

module.exports = {
  all: all,
  insert: insertToDatabase
}