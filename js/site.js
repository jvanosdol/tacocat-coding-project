// get the user input string values from the page

function getValue(){

    document.getElementById('alert').classList.add('invisible')

    let userString = document.getElementById('userString').value

    let revString = reverseString(userString)
    displayString(revString)

}

// reverse the string

function reverseString(userString){

    let revString = []

    // reverse a string using a for loop
    for( i = userString.length - 1; i >= 0; i-- ){
        revString += userString[i]
    }

    return revString
}

// display the string to the user

function displayString(revString){

    // write to the page
    document.getElementById('msg').innerHTML = `Your string reversed is: ${revString}`

    //show the alert box
    document.getElementById('alert').classList.remove('invisible')

}
