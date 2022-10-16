'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s1-1.webp',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s1-2.webp',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s1-3.webp',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s2-1.webp',
        preview: true
      },
      {
        spotId: 2,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s2-2.webp',
        preview: true
      },

      {
        spotId: 2,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s2-3.webp',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s3-1.webp',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s3-2.webp',
        preview: true
      },
      {
        spotId: 3,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s3-3.webp',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s4-1.webp',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s4-2.webp',
        preview: true
      },
      {
        spotId: 4,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s4-3.webp',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s5-1.webp',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s5-2.webp',
        preview: true
      },
      {
        spotId: 5,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s5-3.webp',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s6-1.webp',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s6-2.webp',
        preview: true
      },
      {
        spotId: 6,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s6-3.webp',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s7-1.webp',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s7-2.webp',
        preview: true
      },
      {
        spotId: 7,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s7-3.webp',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s8-1.webp',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s8-2.webp',
        preview: true
      },
      {
        spotId: 8,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s8-3.webp',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s9-1.webp',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s9-2.webp',
        preview: true
      },
      {
        spotId: 9,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s9-3.webp',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s10-1.webp',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s10-2.webp',
        preview: true
      },
      {
        spotId: 10,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s10-3.webp',
        preview: true
      },
      {
        spotId: 11,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s11-1.webp',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s11-2.webp',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s11-3.webp',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s12-1.webp',
        preview: true
      },
      {
        spotId: 12,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s12-2.webp',
        preview: true
      },

      {
        spotId: 12,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s12-3.webp',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s13-1.webp',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s13-2.webp',
        preview: true
      },
      {
        spotId: 13,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s13-3.webp',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s14-1.webp',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s14-2.webp',
        preview: true
      },
      {
        spotId: 14,
        url:'https://airbnb-pictures.s3.us-west-1.amazonaws.com/airbnb-pictures/s14-3.webp',
        preview: true
      },


    ])



  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SpotImages', null, {})
  }
};
