function factoryFood(prime,name, type, price, deliverTime) {
    if (prime === true)  return {
        name,
        type,
        price:price*0.8,
        deliverTime,
        isReady: false,
        comments: [],
    }
    return {
        name,
        type,
        price,
        deliverTime,
        isReady: false,
        comments: [],
    }

}


function commit(author, rate, text) {
    return {
        author,
        date: Date(),
        rate,
        text,
    }
}

const Order1 = factoryFood(true, "pizza", "fastFood", 55,"20min")
const Commit1 = commit("soheil", "5", "nice :)")
Order1.comments.push(Commit1)
const Order2 = factoryFood(false, "pizza", "fastFood", 55,"20min")
const Commit2 = commit("ali", "4", "nice :)")
Order2.comments.push(Commit2)
console.log(Order1)
console.log(Order2)

function FactoryFood(prime, name, type, price, deliverTime) {
    if (prime === true) {
        this.name = name;
        this.type = type;
        this.price = function (price){
            return price*0.8;
        };
        this.name = name;
        this.deliverTime = deliverTime;
        this.comments = [];
    }
    this.name = name;
    this.type = type;
    this.price = price;
    this.name = name;
    this.deliverTime = deliverTime;
    this.comments = [];
}


function Commit(author, rate, text) {
    this.author = author;
    this.date = Date();
    this.rate = rate;
    this.text = text;
}

const Order3 = new FactoryFood(true, "pizza", "fastFood", 55, "20min")
const Commit3 = new Commit("soheil", "5", "nice :)")
Order3.comments.push(Commit1)
const Order4 = new FactoryFood(false, "pizza", "fastFood", 55, "20min")
const Commit4 = new Commit("ali", "5", "nice :)")
Order4.comments.push(Commit2)
console.log(Order3)
console.log(Order4)
