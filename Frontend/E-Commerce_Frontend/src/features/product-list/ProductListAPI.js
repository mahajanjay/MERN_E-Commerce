// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  //filter={"category": ["smartphone", "laptops"]}
  //pagination={_page: 1, _limit=10}
  let queryString = '';
  for(let key in filter) {
    const categoryValues = filter[key];
    if(categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length-1];
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  for(let key in sort) {
    queryString += `${key}=${sort[key]}&`
  }

  for(let key in pagination) {
    queryString += `${key}=${pagination[key]}&`
  }

  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products?"+queryString);
    const data = await response.json();
    const totalItems = await response.headers.get('X-Total-Count');
    resolve({ data: {products: data, totalItems:+totalItems} });
  });
}