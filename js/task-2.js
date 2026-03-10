function getAllPropValues(propName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  let arName = [];
  for (const name of products) {
    arName.push(name.products);
    console.log(name);
  }
  console.log(arName);
}
getAllPropValues('name');

function getProductPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    console.log(products[i].name);
    if (products[i].name === productName) {
      return products[i].price;
    }
  }
  return null;
}
