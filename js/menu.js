const restourant = 'food-band';

const renderItems = (data) => {
  console.log(data);
};

fetch(
  `https://fooddeliveryservicesite-default-rtdb.firebaseio.com/db/${restourant}.json`
)
  .then((res) => res.json())
  .then((data) => renderItems(data))

  .catch((error) => {
    console.log(error);
  });
