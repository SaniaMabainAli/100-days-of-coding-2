// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let user = {  
        name1  : "Edward",
        age: "30",
            info : function(){
                console.log(` name: ${user.name1} , age: ${user.age}`)
            } 
        }
    
user.info()
