console.log("Конспект починається");
const hotel = {
  name: "Hotel",
  stars: 5,
  capacity: 100,
};
// неможливо додати
const { luck = "high" } = hotel;
const { name: HotelName = "hotel", stars = 3, status = "empty" } = hotel;
// виводить у вигляді об'єкта з 2-ма параметрами
// console.log(rest);
// cannot redeclare block-scoped variable "name"
// const { name = "hotel", stars = 3, status = "empty" } = hotel;
// const { name, ...rest } = hotel;
console.log(HotelName);
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// деструктуризація розбита на декілька рядків для розуміння
const {
  size: {
    // покладемо size сюди
    width,
    height,
  },
  items: [item1, item2], // додамо елементи до items
  title = "Menu", // відсутня в об'єкті (використовується значення за замовчуванням)
} = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut
console.log("Конспект закінчується");
