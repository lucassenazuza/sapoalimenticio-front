import React, { useEffect, useState } from 'react';
import Table from './Table';
import api from '../services/api';



function FoodBody(props) {
  const styleContainer = { backgroundColor: "#E5E9F2", width: "100%", height: window.innerHeight };
  const [food, setFood] = useState(null);
  const food_url = props.url_item;

  useEffect(() => {
    api.get(food_url)
    .then((response) => {
      setFood(response.data.products);
    })
    .catch((err) => {
      console.log(`Solicitação feita com erro ${err}`)
    });
  }, []);


  return (
    <div style={styleContainer}>
      <Table products={JSON.stringify(food)} />
    </div>
  );
}

export default FoodBody;