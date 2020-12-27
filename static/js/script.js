//challenge 1:
function ageInDays(){

    var birthyear = prompt('What year were you bron...Good friend');
    var ageInDayss = (2018 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ageInDayss +'Days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}
function reset(){

    document.getElementById('ageInDays').remove();

}
function generateCat(){
        var image=document.createElement('img');
        var div = document.getElementById('flex-cat-gen');
        image.src="https://cdn2.thecatapi.com/images/4lr.gif";
        div.appendChild(image); 

}
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,botChoice; 
    humanChoice = yourChoice.id;
    botChoice=numberToChoice(randToRspInt());
    console.log('computer choice',botChoice);
    result = decideWinner(humanChoice ,botChoice);
    console.log(result);
    message = finalMessage(result);
    console.log(message);
    rspFrontEnd(yourChoice.id,botChoice,message);

}
function randToRspInt(){

    return Math.floor(Math.random()* 3);
}
function numberToChoice(number){

    return ['rock' ,'paper' ,'scissor'] [number];
}

function decideWinner(yourChoice,computerChoice){
   var rspDatabase ={
        'rock':{'scissor':1 ,'rock':0.5,'paper':0},
        'paper':{'rock':1 ,'paper':0.5,'scissor':0},
        'scissor':{'paper':1 ,'scissor':0.5,'rock':0},

   };

   var yourScore = rspDatabase[yourChoice][computerChoice];
   var computerScore = rspDatabase[computerChoice][yourChoice];

   return[yourScore,computerScore];
}
function finalMessage([yourScore,computerScore]){

    if(yourScore === 0){
        return{'message':'you lost!','color':'red'};
    }
    else if(yourScore === 0.5){
        return{'message':'you tied!' ,'color':'yellow'};
    }
    else{
        return{'message':'you won!','color':'green'};
    }
}

function rspFrontEnd(humanImageChoice ,botImageChoice ,finalMessage){
    var imageDatabase ={

        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML="<img src='" + imageDatabase[humanImageChoice]+"'height=150 width =150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML="<h1 style='color:"+ finalMessage['color']+";font-size:60px;padding:30px; '>" + finalMessage['message']+"</h1>"
    botDiv.innerHTML="<img src='" + imageDatabase[botImageChoice]+"'height=150 width =150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);    


}    
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);


var copyAllButtons = [];
for(let i=0; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy){

  if(buttonThingy.value === 'red')
  {
    buttonsRed();
  }
  else if(buttonThingy.value === 'green')
  {
   buttonsGreen();   
  }
  else if(buttonThingy.value === 'reset')
  {
      buttonColorReset();
  }
  else if(buttonThingy.value === 'Random')
  {
      randomColor();
  }
}

function buttonsRed()
{
    for(let i=0; i< all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }

}

function buttonsGreen()
{
    for(let i=0; i< all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }

}

function buttonColorReset()
{
    for(let i=0; i< all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }

}

function randomColor()
{
    let choice = ['btn-primary' ,'btn-danger' ,'btn-success' ,'btn-warning']
    for(let i=0; i< all_buttons.length; i++)
    {
        let randomNumber =  Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choice[randomNumber]);
    }

}



