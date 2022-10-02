// Object menu
const menu = {
    _courses: { 
        appetizers: [],
        mains: [],
        desserts: [],
    },
//Setting up Getters and Setters
    get appetizers(){
        return this._courses.appetizers
    },

    get mains(){
        return this._courses.mains
    },

    get desserts(){
        return this._courses.desserts
    },
    set appetizers(appetizers){
        this._courses.appetizers = appetizers
    },
    set mains(mains){
        this._courses.mains = mains
    },
    set desserts(desserts){
        this._courses.desserts = desserts
    },
    get courses() {
        return {
            //_courses: this._courses //Easy way is this or
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    //Adding a method so we can easiy add names, and prices to dishes
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}, the total price is ${totalPrice}`
    },
};

menu.addDishToCourse('appetizers', 'salid', 4.00)
menu.addDishToCourse('appetizers', 'wing', 2.00)
menu.addDishToCourse('appetizers', 'potato', 6.00)

menu.addDishToCourse('mains', 'burger', 3.00)
menu.addDishToCourse('mains', 'diet water', 1.00)
menu.addDishToCourse('mains', 'football', 11.00)

menu.addDishToCourse('desserts', 'fish', 7.00)
menu.addDishToCourse('desserts', 'king', 8.00)
menu.addDishToCourse('desserts', 'fries', 5.00)

const meal = menu.generateRandomMeal();
console.log(meal)

