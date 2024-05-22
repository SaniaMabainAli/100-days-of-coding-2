// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var user = {
    name1: "Edward",
    age: "30",
    info: function () {
        console.log(" name: ".concat(user.name1, " , age: ").concat(user.age));
    }
};
user.info();
