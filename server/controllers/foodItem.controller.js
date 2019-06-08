const foodItemService = require('../services/foodItem.service.js');

module.exports = {
  insertFoodItems(req, res) {
    const foodItems = req.body.foodItems;
    foodItemService
      .insertFoodItems(foodItems)
      .then(response => {
        res.status(200).send('Food(s) successfully saved');
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
