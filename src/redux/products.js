const meatImg =
  "https://www.checkers.co.za/medias/10144718KG-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3wzNTAxNjB8aW1hZ2UvcG5nfGltYWdlcy9oNGIvaDg3Lzg4NzU4MTkxMzkxMDIucG5nfGJiZjk5ZjJlYWYzM2NmYzNlMjQxMmNhYjdiYTdmOTRiZDgwOWE1YzhmMjVlNThkMTM4MmUwYTQ2NmZmZmJjNjQ";
const diaryImg =
  "https://cdn.iconscout.com/icon/free/png-512/milk-pack-1405976-1190204.png";
const beveragesImg =
  "https://shortysliquor.com.au/media/catalog/product/cache/2fcc3329aef4183c8e06230d7e06f8f3/3/4/345.1_4.png";

const initialState = [
  {
    id: 1,
    name: "Fresh Natural Milk",
    price: 2.49,
    imageUrl: diaryImg,
    category: "diary",
  },
  {
    id: 2,
    name: "Fresh Meat",
    price: 5.99,
    imageUrl: meatImg,
    category: "meat",
  },
  {
    id: 3,
    name: "Fanta",
    price: 1.99,
    imageUrl: beveragesImg,
    category: "beverages",
  },
  {
    id: 4,
    name: "Fresh Meat",
    price: 5.99,
    imageUrl: meatImg,
    category: "meat",
  },
  {
    id: 5,
    name: "Fanta",
    price: 1.99,
    imageUrl: beveragesImg,
    category: "beverages",
  },
  {
    id: 6,
    name: "Fresh Natural Milk",
    price: 2.49,
    imageUrl: diaryImg,
    category: "diary",
  },
  {
    id: 7,
    name: "Fanta",
    price: 1.99,
    imageUrl: beveragesImg,
    category: "beverages",
  },
  {
    id: 8,
    name: "Fresh Meat",
    price: 5.99,
    imageUrl: meatImg,
    category: "meat",
  },
  {
    id: 9,
    name: "Fresh Natural Milk",
    price: 2.49,
    imageUrl: diaryImg,
    category: "diary",
  },
  {
    id: 10,
    name: "Fresh Meat",
    price: 5.99,
    imageUrl: meatImg,
    category: "meat",
  },
  {
    id: 11,
    name: "Fanta",
    price: 1.99,
    imageUrl: beveragesImg,
    category: "beverages",
  },
  {
    id: 12,
    name: "Fresh Meat",
    price: 5.99,
    imageUrl: meatImg,
    category: "meat",
  },
  {
    id: 13,
    name: "Fanta",
    price: 1.99,
    imageUrl: beveragesImg,
    category: "beverages",
  },
  {
    id: 14,
    name: "Fresh Natural Milk",
    price: 2.49,
    imageUrl: diaryImg,
    category: "diary",
  },
  {
    id: 15,
    name: "Fanta",
    price: 1.99,
    imageUrl: beveragesImg,
    category: "beverages",
  },
  {
    id: 16,
    name: "Fresh Meat",
    price: 5.99,
    imageUrl: meatImg,
    category: "meat",
  },
];

export function productsReducer(products = initialState, action) {
  return products;
}
