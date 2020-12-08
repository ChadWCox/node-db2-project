
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1,
          Year: 2013,
          Make: 'Hyndai',
          Model: 'SantaFe',
          VIN: 'KM8SNDHF4DU003763',
          Mileage: 92342,
          Transmission: 'V6 AWD',
          Title: 'Clear Reconstructed'
          },
        { id: 2,
          Year: 2006, 
          Make: 'Toyota',
          Model: 'Highlander',
          VIN: 'JTEEP21A060185935',
          Mileage: 94024,
          Transmission: 'V6 AWD',
          Title: null
          } 
      ]);
    });
};
