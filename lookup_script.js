const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

let inputName = process.argv[2];

const query = {
  text: 'SELECT * FROM famous_people WHERE first_name= $1::text OR last_name= $1::text;',
  values: [inputName]   
}

function lookupPerson (input) {
  client.query(query, (error,result) => {
      if (error) {
          return console.error("error running query", error);
      }

      console.log(`Found ${result.rows.length} person(s) by name ${inputName}:`);
      
      result.rows.forEach( (value, i) => { 
          console.log(`${i+1}. ${value.first_name} ${value.last_name}, born '${value.birthdate.toISOString().slice(0, 10)}'`) 
      });
      client.end();
  });
}
//toISOString() method converts a Date object into a string, using the ISO standard

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  console.log("Searching in database...");
  lookupPerson(inputName);
});


