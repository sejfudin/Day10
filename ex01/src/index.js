var myPet = {
    species: "cat",
    name: "Tom",
    legs: 4,
    friends: ["Jerry", "Dog"]
};

function myFunction(obj) {
    return obj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };