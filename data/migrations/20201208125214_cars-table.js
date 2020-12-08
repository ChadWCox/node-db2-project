
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.integer('Year', 4).notNullable();
      tbl.text('Make', 128).notNullable();
      tbl.text('Model', 128).notNullable();
      tbl.string('VIN', 17).unique().notNullable();
      tbl.integer('Mileage', ).notNullable()
      tbl.text('Transmission', 128).nullable()
      tbl.text('Title', 128).nullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
