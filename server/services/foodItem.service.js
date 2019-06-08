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
        resolve('Success!');
      } catch (e) {
        reject(e);
      }
    });
  }
};
