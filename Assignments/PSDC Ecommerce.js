const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 28.95,
    stock: 34,
    sales: 150,
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 95.5,
    stock: 12,
    sales: 200,
  },
  {
    id: 3,
    name: "Laptop",
    category: "Electronics",
    price: 910.75,
    stock: 7,
    sales: 50,
  },
  {
    id: 4,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 45.3,
    stock: 0,
    sales: 85,
  },
  {
    id: 5,
    name: "Smartphone",
    category: "Electronics",
    price: 680.4,
    stock: 25,
    sales: 300,
  },
  {
    id: 6,
    name: "Blender",
    category: "Home Appliances",
    price: 37.6,
    stock: 10,
    sales: 45,
  },
  {
    id: 7,
    name: "Desk Lamp",
    category: "Home Decor",
    price: 18.8,
    stock: 50,
    sales: 70,
  },
  {
    id: 8,
    name: "Office Chair",
    category: "Furniture",
    price: 85.2,
    stock: 5,
    sales: 60,
  },
  {
    id: 9,
    name: "Electric Kettle",
    category: "Home Appliances",
    price: 23.7,
    stock: 0,
    sales: 90,
  },
  {
    id: 10,
    name: "Running Shoes",
    category: "Footwear",
    price: 57.45,
    stock: 20,
    sales: 120,
  },
  {
    id: 11,
    name: "Air Conditioner",
    category: "Home Appliances",
    price: 389.95,
    stock: 8,
    sales: 30,
  },
  {
    id: 12,
    name: "Bookshelf",
    category: "Furniture",
    price: 142.3,
    stock: 15,
    sales: 40,
  },
  {
    id: 13,
    name: "Smartwatch",
    category: "Electronics",
    price: 192.99,
    stock: 18,
    sales: 75,
  },
  {
    id: 14,
    name: "Electric Toothbrush",
    category: "Personal Care",
    price: 27.55,
    stock: 22,
    sales: 55,
  },
  {
    id: 15,
    name: "Yoga Mat",
    category: "Sports",
    price: 17.2,
    stock: 30,
    sales: 100,
  },
  {
    id: 16,
    name: "Gaming Console",
    category: "Electronics",
    price: 489.0,
    stock: 10,
    sales: 95,
  },
  {
    id: 17,
    name: "Water Bottle",
    category: "Sports",
    price: 9.5,
    stock: 40,
    sales: 85,
  },
  {
    id: 18,
    name: "Microwave Oven",
    category: "Home Appliances",
    price: 94.75,
    stock: 8,
    sales: 60,
  },
  {
    id: 19,
    name: "T-Shirt",
    category: "Apparel",
    price: 13.99,
    stock: 60,
    sales: 110,
  },
  {
    id: 20,
    name: "Jeans",
    category: "Apparel",
    price: 47.3,
    stock: 20,
    sales: 75,
  },
];

function findBestSellingProduct(products) {
  // Your code here
  best_one = {};
  max_sale = Number.NEGATIVE_INFINITY;
  for (let product of products) {
    if (product.sales > max_sale) {
      max_sale = product.sales;
      best_one = product;
    }
  }
  return best_one;
}
// console.log(findBestSellingProduct(products))

function findOutOfStockProducts(products) {
  outOfStock = [];
  for (let product of products) {
    if (product.stock < 1) {
      outOfStock.push(product);
    }
  }
  return outOfStock;
}

// console.log(findOutOfStockProducts(products))

function calculateTotalRevenue(products) {
  // Your code here
  let reveue = 0;
  for (let product of products) {
    reveue += product.sales * product.price;
  }
  return reveue;
}

function applySaleToLessSellingProducts(products, percentage) {
  for (let product of products) {
    if (product.sales < 50) {
      product.price *= percentage;
    }
  }
  return products;
}

function findProductsInCategory(products, category) {
  let selected = [];
  for (let product of products) {
    if (product.category == category) {
      selected.push(product);
    }
  }
  return selected;
}
function findProductsWithLowStock(products, quantity) {
  selected = [];
  for (let product of products) {
    if (product.stock < quantity) {
      selected.push(product);
    }
  }
  return selected;
}
function calculateTotalStockValue(products) {
  let total = 0;
  for (let product of products) {
    total += product.price * product.stock;
  }
  return total;
}
