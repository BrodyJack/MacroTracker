export const postFood = async foodItems => {
  // TODO Validation
  const url = '/api/foodItem';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(foodItems)
  };

  try {
    const res = await fetch(url, options);
    return await res.json();
  } catch (err) {
    console.log('Error in postFood: ', err);
  }
};
