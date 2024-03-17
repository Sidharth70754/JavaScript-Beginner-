function foo(bar) {
    bar();
}

foo(function() {
    console.log('bar');
})

function named() {
    console.log('bar')
}
foo(named);

// second program 
function fooo(bar) {
    if(itsNight) {
        bar();
    }

if(isDinksOverChackOnLine) {
    bar();
}
}
