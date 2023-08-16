// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  //filter={"category": ["smartphone", "laptops"]}
  let queryString = '';
  for(let key in filter) {
    const categoryValues = filter[key];
    if(categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length-1];
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products?"+queryString);
    const data = response.json();
    resolve({ data });
  });
}