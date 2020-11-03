// const square = function (x){
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(3));

//arrow functions do not access this.
//arrow dont bind there own this.

const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    // same->printGuestList: function (){
    console.log("Guest list for " + this.name);
    this.guestList.forEach((quest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};
event.printGuestList();
