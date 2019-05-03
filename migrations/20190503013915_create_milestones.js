
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function(table){
      table.string('description');
      table.date('date_achieved');
      table.increments('id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('milestones')
  	])
};


// exports.up = function(knex, Promise) {  
//   return Promise.all([
//     knex.schema.createTable('users', function(table){
//       table.string('username');
//       table.string('password');
//       table.timestamps();
//     })
//   ])
// };

// exports.down = function(knex, Promise) {  
//   return Promise.all([
//     knex.schema.dropTable('users')
//   ])
// };

// The milestones table should have the following fields:
// description (string)
// date_achieved (date)