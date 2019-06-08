// in-memory array for saving food items
const savedFoodItems = [];

module.exports = {
  insertFoodItems: foodItems => {
    savedFoodItems.concat(foodItems);
    // return a Promise here just so that the controller
    // is set up to call an async function for when this inevitably
    // does an actual db insert
    return Promise.resolve('Success!');
  }
};
