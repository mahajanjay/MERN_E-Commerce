// A mock function to mimic making an async request for data
export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/cart", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {'content-type': 'application/json'}
    });
    const data = response.json();
    resolve({ data });
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/cart?user="+userId);
    const data = response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/cart/"+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: {'content-type': 'application/json'}
    });
    const data = response.json();
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/cart/"+itemId, {
      method: 'DELETE',
      headers: {'content-type': 'application/json'}
    });
    const data = response.json();
    resolve({ data: {id: itemId} });
  });
}
