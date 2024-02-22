// singleton 
//Object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Sidharth",
    [mySym]: "mykey1",
    age: 20,
    location: "Himachal Pradesh",
    email: "sidharth@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]
}
/*
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
console.log(typeof [mySym] )


JsUser.email = "sidharth@microsoft.com"
Object.freeze(JsUser)
JsUser.email = "sidharth@chatgpt.com"
console.log(JsUser);*/


JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
