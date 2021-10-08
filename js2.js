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