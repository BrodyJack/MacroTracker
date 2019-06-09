const foodItemService = require('../services/foodItem.service.js');

module.exports = {
  insertFoodItems(req, res) {
    const foodItems = req.body.foodItems;
    foodItemService
      .insertFoodItems(foodItems)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
  },
  getFoodItems(req, res) {
    const pageNumber = req.query.pageNumber;
    const recordsPerPage = req.query.recordsPerPage;
    foodItemService
      .getFoodItems(pageNumber, recordsPerPage)
      .then(fetchedItems => {
        res.status(200).json(fetchedItems);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
  }
};
