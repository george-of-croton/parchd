
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('water_sources', function(table) {
   table.increments() 
   table.string('name')
   table.string('location')
   table.string('quality')
   table.integer('review')
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('water_sources') 
};

