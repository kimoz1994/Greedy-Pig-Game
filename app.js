/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//              greedy pig game logic


//define game variables .....
    //gamemode= false
    //player1mode=true/false
    //player2mode=true/false
    //currentscore = []
    //mainscore = []
    //dicevalue=random 1-6

var gamemode= false;
var player1mode = false;
var player2mode = false;
var currentscore = [0,0];
var mainscore = [0,0];
var dicevalue = Math.floor((Math.random() * 6) + 1);






//click on new game button 
    //if gamemode == false
        //start the game ,gamemode=true
        //player1mode =true


document.getElementById("newgame").onclick=function(){
    gamemode=false;
    if(gamemode == false ){
        document.getElementById("gameover").style.display='none';
        gamemode = true;
        player1mode=true;
        player2mode=false;
        document.getElementById("player0").classList.add("active");
        document.getElementById("player1").classList.remove("active");
        
        mainscore = [0,0];
        currentscore = [0,0];
        document.getElementById("score-0").innerHTML =mainscore[0];
        document.getElementById("score-1").innerHTML =mainscore[1];
        document.getElementById("current-0").innerHTML=currentscore[0];
        document.getElementById("current-1").innerHTML=currentscore[1];
        
        
    }
    
   window.alert("click OK to display the rules...");
    window.alert("GAME RULES:- The game has 2 players, playing in rounds\n- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score\n- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn\n- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn\n- The first player to reach 100 points on GLOBAL score wins the game");
    window.alert("ENJOY ^_^");
   
};




//click on the rolldice button 
    //change the dice picture   
    //get the picture number ==dicevalue
    //if(player1mode == true)
        //if dicevalue ==1
            //currentscore[0] == 0
            //mainscore[0] += currentscore[0]
            //player1mode=false,player2mode=true
        //else
            //currentscore[0] += dicevalue

    //if(player2mode==true)
        //if dicevalue==1
            //currentscore[1] == 0
            //mainscore[1] += currentscore[0]
            //player2mode =false,player1mode = true
        //else
            //currentscore[1] += dicevalue
            

document.getElementById("rolldice").onclick = function(){
    if(gamemode == true){
    //generating a new random dice
     dicevalue = Math.floor((Math.random() * 6) + 1);
    
    //getting a new random dice pic and posting it 
    document.getElementById("dicepic").src = "dice-"+dicevalue+".png";
    if(player1mode ==true){
        
        if(dicevalue == 1){
            
            currentscore[0] = 0;
             document.getElementById("current-0").innerHTML=currentscore[0];
            
            mainscore[0]+= currentscore[0];
            player1mode =false;
            player2mode = true;
            document.getElementById("player0").classList.remove("active");
            document.getElementById("player1").classList.add("active");
        }
        else{
            
            currentscore[0] += dicevalue;
            document.getElementById("current-0").innerHTML=currentscore[0];
            
        }
        
        
    }
    
   else if(player2mode ==true){
        
        if(dicevalue == 1){
            
            currentscore[1] = 0;
             document.getElementById("current-1").innerHTML=currentscore[1];
            mainscore[1]+= currentscore[1];
            player1mode =true;
            player2mode = false;
            document.getElementById("player1").classList.remove("active");
            document.getElementById("player0").classList.add("active");
        }
        else{
            
            currentscore[1] += dicevalue;  
            document.getElementById("current-1").innerHTML=currentscore[1];
        }   
    }
    }
};




//click on the hold button
    //if player1mode == true
        //mainscore[0] +=currentscore[0]
        //if mainscore[0] => 100
            //player1 wins
            //exit the game 
            //gamemode=false
            //player1mode=false
    //if player2mode==true
        //mainscore[1] += currentscore[1]
        //if mainscore[1] => 100
            //player2wind
            //exit game
            //gamemode=false
            //player2mode=false
        
    document.getElementById("hold").onclick = function(){
        if(gamemode == true){
        if(player1mode ==true){
            
            mainscore[0] += currentscore[0];
            document.getElementById("score-0").innerHTML =mainscore[0];
            
            player1mode = false;
            player2mode =true;
            document.getElementById("player0").classList.remove("active");
            document.getElementById("player1").classList.add("active");
            
            currentscore[0] = 0;
             document.getElementById("current-0").innerHTML=currentscore[0];
            
            if(mainscore[0] >= 100){
                gamemode = false;
                
               //gameover message....
                document.getElementById("gameover").style.display='block';
               document.getElementById("gameover").innerHTML="Player one wins";
                
                
            }
            
        }
        
         else if(player2mode ==true){
            
            mainscore[1] += currentscore[1];
            document.getElementById("score-1").innerHTML =mainscore[1]; 
             player2mode = false;
            player1mode =true;
             document.getElementById("player1").classList.remove("active");
            document.getElementById("player0").classList.add("active");
             
             currentscore[1] = 0;
             document.getElementById("current-1").innerHTML=currentscore[1];
             
            if(mainscore[1] >= 100){
                gamemode = false;
                
                 document.getElementById("gameover").style.display='block';
               document.getElementById("gameover").innerHTML="Player two wins";
                
                
            }
            
        }
        
        
        }
        
    };
    





