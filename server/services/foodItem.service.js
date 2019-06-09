// in-memory array for saving food items
const savedFoodItems = [];

module.exports = {
  insertFoodItems: foodItems => {
    // return a Promise here just so that the controller
    // is set up to call an async function for when this inevitably
    // does an actual db insert
    return new Promise((resolve, reject) => {
      try {
        savedFoodItems.concat(foodItems);
        resolve('Food(s) successfully saved');
      } catch (e) {
        reject(e);
      }
    });
  },
  getFoodItems: (pageNumber, recordsPerPage) => {
    // return a Promise here just so that the controller
    // is set up to call an async function for when this inevitably
    // does an actual db get request
    return new Promise((resolve, reject) => {
      try {
        const startingIndex = (pageNumber - 1) * recordsPerPage;
        const foodItems = savedFoodItems.slice(
          startingIndex,
          startingIndex + recordsPerPage
        );
        resolve(foodItems);
      } catch (e) {
        reject(e);
      }
    });
  }
};
