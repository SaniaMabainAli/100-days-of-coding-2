//Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// enums are both a type and value at a sametime however objects need separate key and value
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["trucks"] = 1] = "trucks";
    vehicles[vehicles["motorcycles"] = 2] = "motorcycles";
})(vehicles || (vehicles = {}));
console.log(vehicles.trucks);
