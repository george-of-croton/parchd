
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('water_sources').del(), 

    // Inserts seed entrie
	knex('water_sources').insert({id: 1,  name: 'zip machine', location: 'eda', quality: 'very poor'})
	);
};
