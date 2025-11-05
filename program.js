/*
Scenario
You’ve been hired to help a logistics company build a system to manage its fleet of
vehicles. The system should be able to:
1. Create individual vehicles with properties like type, make, model, year, and
mileage.
2. Add a method to update the mileage of a vehicle when it is used.
3. Add a method to display the details of the vehicle in a user-friendly format.
4. Instantiate multiple vehicles from the class and test your methods.
*/

/*
Tasks
1. Define the Vehicle Class:
○ The constructor should include properties: type, make, model, year,
and mileage.
○ Use default values for mileage (e.g., 0).
*/
//creating the class Vehicle
class Vehicle{
// Defining constructor with parameters and default values
  constructor(type, make, model, year, mileage = 0){
     this.type = type;
     this.make = make;
     this.model = model;
     this.year = year;
     this.mileage = mileage;
 }
/*
2. Add Methods:
○ drive(distance): Increases the vehicle’s mileage by the given
distance (in kilometers or miles).
○ getDetails(): Returns a formatted string describing the vehicle’s
details.
*/
  //defining drive() method to update the mileage every time it is called
drive(distance){
    this.mileage= this.mileage + distance;
}
  // defining getDetails to print the vehicle details to user
getDetails(){
  return `{ type: ${this.type}, make: ${this.make}, model:${this.model}, year:${this.year}, mileage:${this.mileage}}`;
}
}
/*
3. Create and Use Vehicle Objects:
○ Instantiate at least three vehicle objects with different properties (e.g.,
a car, a truck, and a motorcycle).
○ Use the drive method to simulate trips and update mileage.
○ Use the getDetails method to print each vehicle’s updated
information.
*/
//Instantiating first object vehicle
let vehicle1 = new Vehicle('SUV', 'Toyota', 'Sequoia', 2018, 1100);
//Instantiating second object vehicle
let vehicle2 = new Vehicle('Sedan', 'Honda', 'Accord', 2020, 1200);
//Instantiating third object vehicle
let vehicle3 = new Vehicle('Truck', 'Ford', 'F-150', 2022, 1300);
//calling drive() method on vehicle1
vehicle1.drive(1150);
//accessing the mileage property using "." dot notation
console.log("Vehicle-1 Current Mileage " + vehicle1.mileage); //output:2250
//calling drive() method on vehicle2
vehicle2.drive(4000);
//accessing the mileage property using "." dot notation
console.log("Vehicle-2 Current Mileage " + vehicle2.mileage); //output:5200
//Accessing getDetails() method to print vehicle 2 details
console.log("Vehicle-2 details:" + vehicle2.getDetails());
vehicle3.drive(6900);
//Accessing getDetails() method to print vehicle 3 details
console.log("Vehicle-3 details:" + vehicle3.getDetails());
vehicle1.drive(3780);
//Accessing getDetails() method to print vehicle 1 details
console.log("Vehicle-1 details:" + vehicle1.getDetails());
