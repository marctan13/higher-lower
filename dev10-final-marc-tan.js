let max_roll = do_maxnum()

let num = Math.floor(Math.random()* max_roll) + 1;
let guess_list = [];

console.log("This is the correct answer:" + num);
console.log("This is the max number:" + max_roll);

function do_guess(){
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if(guess==num){
        guess_list.push(guess);
        message.innerHTML = "You got it! It took you " + guess_list.length + " tries and you guesses were ";
        guess_list.forEach(
            function(entry){
                message.innerHTML = message.innerHTML + entry + ", "
            }
        )
    } else if(guess_list.includes(guess)){
        message.innerHTML = "Number has been guessed. Try again."
    } else if(isNaN(Number(guess))){
        message.innerHTML = "This is not a number!"
    } else if(guess <= 0){
        message.innerHTML = "Positive numbers only."
    } else if(guess > max_roll){
        message.innerHTML = "That number is not in range, try again."
    } else if(guess > num){
        guess_list.push(guess)
        message.innerHTML = "No, try a lower number."
    } else{
        guess_list.push(guess);
        message.innerHTML = "No, try a higher number.";
    }
}

function do_maxnum(prompt){
    let valid_input = false;
    let num_rolls, input;

    while(!valid_input){
        input = window.prompt("Please enter maximum number to play:");
        num_rolls=Number(Math.round(input));
        if(!isNaN(num_rolls) && num_rolls > 0){
            valid_input = true;
        } else{
            window.alert("Your entry is invalid. Try again.");
            continue;
        }
return num_rolls
    }
}