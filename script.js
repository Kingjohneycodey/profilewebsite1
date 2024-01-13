function displayName(){
    var firstName = 'john'
    var secondName  = 'james'


    var myDetails = { 
        name: 'john',
        age: 89,
        color: 'red',

    }

    document.getElementById('myname').innerHTML = 'My details are: ' + myDetails.age + myDetails.color + myDetails.name
}

displayName()