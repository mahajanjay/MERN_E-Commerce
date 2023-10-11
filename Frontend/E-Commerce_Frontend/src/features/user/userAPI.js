// A mock function to mimic making an async request for data
export function fetchLoggedUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/orders/?user.id="+userId);
    const data = response.json();
    resolve({ data });
  });
}
