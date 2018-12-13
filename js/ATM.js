var nonChar = '';
var Users = {
    User1 :{
        userBalance: 100,
        cardNumber: 4567,
        pinNum: 7654,
        userName: "Justin"
    },
    User2 : {
        userBalance: 100000000000,
        cardNumber: 1234,
        pinNum: 4321,
        userName: "Harthcock"
    }

}
var display = document.getElementById("display");
// Makes the output screen blank
function start(){
    // Prompts the user to enter there card number
    display.innerHTML = 'Please enter vaild card number.';
    // puts the password input on the screen for the user 
    var Uinput = document.getElementById('user-input');
    // input is now on the screen
    Uinput.innerHTML = '<input type="password" class="keyInput" id="cardNum">';
    // Changes the onclick once the user pushes the 'button' to run 'start()'
    var change = document.getElementsByTagName('button');
        change[0].setAttribute("onclick", "")
        change[1].setAttribute("onclick", "")
        change[2].setAttribute("onclick", "")
        change[3].setAttribute("onclick", "")
        change[4].setAttribute("onclick", "")
        change[5].setAttribute("onclick", "")
}

function CardNum(){
    // targets the input created in the 'start()' function
    var cardNum = document.getElementById("cardNum");
    // use the if statement to turn the targeted input into a number so that strict comparison is able to read its value
    if(Number(cardNum.value) === Users.User1.cardNumber){
        nonChar = "";
        // once the compare is true it displays this
        display.innerHTML = " <br> Please Enter your pin";
        // created the password input again to clear the input so that no numbers are still in the input
        var Uinput = document.getElementById("user-input");
        Uinput.innerHTML = '<input type="password" class="keyInput" id="cardNum">';
        nonChar = "";
        // targetting the 20th input button witch is "enter" and changes the 'onclick' to run the 'pin()' function
        var change = document.getElementsByTagName("button");
        change[20].setAttribute("onclick", "pin()");
    }
    else{
        display.innerHTML = "Not valid try again."
    }
}
function pin(){
    // Targets the input created in "CardNum()'s" if statement.
    var cardNum = document.getElementById("cardNum");
    //Cognates the the input from the user into numbers so that the value can be read.
    if(Number(cardNum.value) === Users.User1.pinNum|| User2.pinNum){
        nonChar = "";

        //Displays this after the if statment is true.
        //This function makes all of the words line up with all the buttons. Example top left button is b1, now everything under class b1 will be in the same space no matter what page we are on.
        display.innerHTML ="<h4>Would you like to : </h4><br>"+ '<h4 class="b1">Withdrawl</h4> <h4 class="b4">Account Info</h4><h4 class="b2">Deposit</h4><h4 class= "b5">Go to Savings</h4><h4  class="tab b3"  >Fast Cash</h4><h4 class="b6">Exit</h4 ></div>'
        //These are the buttons on the "Main Page."
        var change = document.getElementsByTagName('button');
        change[0].setAttribute("onclick", "withdraw()")
        change[1].setAttribute("onclick", "deposit()")
        change[2].setAttribute("onclick", "fastCash()")
        change[3].setAttribute("onclick", "accountInfo()")
        change[4].setAttribute("onclick", "goToSavings()")
        change[5].setAttribute("onclick", "exit()")
    }
}
function Continue(){
    display.innerHTML = '<h4>Would you like to : </h4><br>'+ '<h4 class="b1">Withdrawl</h4> <h4 class="b4">Account Info</h4><h4 class="b2">Deposit</h4><h4 class= "b5">Go to Savings</h4><h4  class="tab b3"  >Fast Cash</h4><h4 class="b6">Exit</h4 ></div>'
        //These are the buttons on the "Main Page."
        var change = document.getElementsByTagName('button');
        change[0].setAttribute("onclick", "withdraw()")
        change[1].setAttribute("onclick", "deposit()")
        change[2].setAttribute("onclick", "fastCash()")
        change[3].setAttribute("onclick", "accountInfo()")
        change[4].setAttribute("onclick", "goToSavings()")
        change[5].setAttribute("onclick", "exit()")
}
function fastCash(){
    display.innerHTML = '<h4>What amount would you like to Withdraw out of Fast Cash?: </h4><br>'+ '<h4 class="b1">20</h4> <h4 class="b4">80</h4><h4 class="b2">40</h4><h4 class= "b5">100</h4><h4  class="tab b3"  >60</h4><h4 class="b6">120</h4 ></div>'
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", "F20();");
    change[1].setAttribute("onClick", "F40();");
    change[2].setAttribute("onClick", "F60();");
    change[3].setAttribute("onClick", "F80();");
    change[4].setAttribute("onClick", "F100();");
    change[5].setAttribute("onClick", "F120();");
}
function F20(){
    var newbalance = Users.User1.userBalance - 20;
    Users.User1.userBalance = newbalance;
    display.innerHTML = "<h4>Your current balance is: </h4>" + newbalance + "<h4>Would you like to make another transaction?</h4><h4 class='b2'>Yes</h4><h4 class= 'b5'>No</h4>"
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", ";");
    change[1].setAttribute("onClick", "fastCash();;");
    change[2].setAttribute("onClick", "");
    change[3].setAttribute("onClick", ";");
    change[4].setAttribute("onClick", "Continue();");
    change[5].setAttribute("onClick", ";");
}
function F40(){
    var newbalance = Users.User1.userBalance - 40;
    Users.User1.userBalance = newbalance;
    display.innerHTML = "<h4>Your current balance is: </h4>" + newbalance + "<h4>Would you like to make another transaction?</h4><h4 class='b2'>Yes</h4><h4 class= 'b5'>No</h4>"
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", ";");
    change[1].setAttribute("onClick", "fastCash();;");
    change[2].setAttribute("onClick", "");
    change[3].setAttribute("onClick", ";");
    change[4].setAttribute("onClick", "Continue();");
    change[5].setAttribute("onClick", ";");
}
function F60(){
    var newbalance = Users.User1.userBalance - 60;
    Users.User1.userBalance = newbalance;
    display.innerHTML = "<h4>Your current balance is: </h4>" + newbalance + "<h4>Would you like to make another transaction?</h4><h4 class='b2'>Yes</h4><h4 class= 'b5'>No</h4>"
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", ";");
    change[1].setAttribute("onClick", "fastCash();;");
    change[2].setAttribute("onClick", "");
    change[3].setAttribute("onClick", ";");
    change[4].setAttribute("onClick", "Continue();");
    change[5].setAttribute("onClick", ";");
}
function F80(){
    var newbalance = Users.User1.userBalance - 80;
    Users.User1.userBalance = newbalance;
    display.innerHTML = "<h4>Your current balance is: </h4>" + newbalance + "<h4>Would you like to make another transaction?</h4><h4 class='b2'>Yes</h4><h4 class= 'b5'>No</h4>"
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", ";");
    change[1].setAttribute("onClick", "fastCash();;");
    change[2].setAttribute("onClick", "");
    change[3].setAttribute("onClick", ";");
    change[4].setAttribute("onClick", "Continue();");
    change[5].setAttribute("onClick", ";");
}
function F100(){
    var newbalance = Users.User1.userBalance - 100;
    Users.User1.userBalance = newbalance;
    display.innerHTML = "<h4>Your current balance is: </h4>" + newbalance + "<h4>Would you like to make another transaction?</h4><h4 class='b2'>Yes</h4><h4 class= 'b5'>No</h4>"
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", ";");
    change[1].setAttribute("onClick", "fastCash();;");
    change[2].setAttribute("onClick", "");
    change[3].setAttribute("onClick", ";");
    change[4].setAttribute("onClick", "Continue();");
    change[5].setAttribute("onClick", ";");
}
function F120(){
    var newbalance = Users.User1.userBalance - 120;
    Users.User1.userBalance = newbalance;
    display.innerHTML = "<h4>Your current balance is: </h4>" + newbalance + "<h4>Would you like to make another transaction?</h4><h4 class='b2'>Yes</h4><h4 class= 'b5'>No</h4>"
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", ";");
    change[1].setAttribute("onClick", "fastCash();;");
    change[2].setAttribute("onClick", "");
    change[3].setAttribute("onClick", ";");
    change[4].setAttribute("onClick", "Continue();");
    change[5].setAttribute("onClick", ";");
}
function withdraw(){
    display.innerHTML = '<h4>What amount would you like to Withdraw out: </h4><br>'+ '<input type="number" class="keyInput" id="cardNum">';
    nonChar = "";
    var change = document.getElementsByTagName("button");
    change[20].setAttribute("onclick", "withdrawAmount();")
    change[0].setAttribute("onClick", "withdrawAmount();");
    change[1].setAttribute("onClick", "withdrawAmount();");
    change[2].setAttribute("onClick", "withdrawAmount();");
    change[3].setAttribute("onClick", "withdrawAmount();");
    change[4].setAttribute("onClick", "withdrawAmount();");
    change[5].setAttribute("onClick", "withdrawAmount();");
}

//This function is for Withdrawal
function withdrawAmount(){
    var amount = document.getElementById("cardNum");
    var newbalance = Users.User1.userBalance - Number(amount.value);
    Users.User1.userBalance = newbalance;
    display.innerHTML = '<h4>Your current Amount is: </h4><br>' + newbalance + "<h4>Would you like to make another transaction?</h4><h4 class='b2'>Yes</h4><h4 class= 'b5'>No</h4>";
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", ";");
    change[1].setAttribute("onClick", ";");
    change[2].setAttribute("onClick", "withdraw();");
    change[3].setAttribute("onClick", ";");
    change[4].setAttribute("onClick", ";");
    change[5].setAttribute("onClick", "Continue();");
    change[20].setAttribute("onclick", ";")

}

function deposit(){
    // var newbalance = Users.User1.userBalance + Number(amount.value);
    // Users.User1.userBalance = newbalance;
    display.innerHTML = '<h4>What Amount would you like to Deposit: </h4><br>' + '<input type="number" class="keyInput" id="cardNum">';
    var amount = document.getElementById("cardNum");
    var newbalance = Users.User1.userBalance + Number(amount.value);
    nonChar = "";
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", ";");
    change[1].setAttribute("onClick", ";");
    change[2].setAttribute("onClick", "depositAmount();");
    change[3].setAttribute("onClick", ";");
    change[4].setAttribute("onClick", ";");
    change[5].setAttribute("onClick", ";");
    change[20].setAttribute("onclick", "depositAmount();")
}
function depositAmount(){
    var amount = document.getElementById("cardNum");
    var newbalance = Users.User1.userBalance + Number(amount.value);
    Users.User1.userBalance = newbalance;
    display.innerHTML = '<h4>Your current Amount is: </h4><br>' + newbalance + "<h4>Would you like to make another transaction?</h4><h4 class='b2'>Yes</h4><h4 class= 'b5'>No</h4>";
    var change = document.getElementsByTagName("button");
    change[0].setAttribute("onClick", ";");
    change[1].setAttribute("onClick", ";");
    change[2].setAttribute("onClick", "deposit();");
    change[3].setAttribute("onClick", ";");
    change[4].setAttribute("onClick", ";");
    change[5].setAttribute("onClick", "Continue();");
    change[20].setAttribute("onclick", ";")
}

function goToSavings(){
    display.innerHTML = "<h4>Your name is: " + userName + "</h4><br> <h4> Your current balance is: " + newbalance + "</h4><br>"
}
//Key-pad
function clearPassword() {
    clickedButton(nonChar="") 
   };
   function deleteChar(){
    clickedButton(nonChar = nonChar.substring(0,nonChar.length-1))
   }; 
   function clickedButton(btn){
    var key = document.querySelector('.keyInput');
    key.value = btn;
    console.log(btn);
   }; 
   function showNumPad(btn){
    clickedButton(nonChar+=btn)
    console.log(btn);
   }; 
function exit(){
    location.reload()
}