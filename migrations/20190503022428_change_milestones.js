
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', table => {
      table.integer('famous_person_id').unsigned()
      .references('famous_people.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', table => {
      table.dropColumn('famous_person_id');
    })
  ])
};


// exports.up = function(knex, Promise) {  
//   return Promise.all([
//     knex.schema.table('users', function(table){
//       table.string('twitter');
//     })
//   ])
// };

// exports.down = function(knex, Promise) {  
//   return Promise.all([
//     knex.schema.table('users', function(table){
//       table.dropColumn('twitter');
//     })
//   ])
// };

// add the following field to the now existing milestones table:
// A foreign_key pointing to the famous person: famous_person_id (integer)