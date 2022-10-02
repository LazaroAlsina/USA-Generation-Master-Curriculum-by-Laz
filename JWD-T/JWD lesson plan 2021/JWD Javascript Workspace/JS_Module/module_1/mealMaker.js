const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []

    },
    get appetizers() {
        return this._appetizers;
    },
    set appetizers(appetizers) {
        this._appetizers = appetizers;
    },
    get mains() {
        return this._mains;
    },
    set mains(mains) {
        this._mains = mainsIn;
    },
    get desserts() {
        return this._desserts;
    },
    set desserts(desserts) {
        this._desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name} and your total price is $${totalPrice}`

    },
};

menu.addDishToCourse('appetizers', 'Chocolate Icecream', 3.25);
menu.addDishToCourse('appetizers', 'Stuffed Mushrooms', 5);

menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);

menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);

let cakel = menu.generateRandomMeal();

module.exports.cake6 = cakel;
console.log(cakel);
// console.log(meal);

//Hiding the solution
// console.log(meal);

// module.exports.meal = meal;