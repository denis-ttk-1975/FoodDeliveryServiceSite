// const restourant = 'food-band';

const renderItems = (data) => {
  console.log(data);
};

fetch(
  `https://fooddeliveryservicesite-default-rtdb.firebaseio.com/db/partners.json`
)
  .then((res) => res.json())
  .then((data) => renderItems(data))

  .catch((error) => {
    console.log(error);
  });
