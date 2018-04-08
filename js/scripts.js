
// business logic
var playerOne;var playerTwo;
function Player(playerName,turn) {
  this.playerName = playerName;
  this.score = 0;
  this.totalRoll =0;
  this.turn = turn;
 
};

Player.prototype.roll = function(){
    var rand = Math.floor(Math.random()*6)+1;
    this.score = rand;
};

Player.prototype.switch = function(){

  if (this.turn ==true){
    this.turn =false;
  }else{
    this.turn = true;
  }
};
Player.prototype.reset = function(){
  this.score =0;
  this.totalRoll =0;

};


// user interface logic
$(document).ready(function() {
  




  $("form").submit(function(event) {
    event.preventDefault();

    var player1 = $("#player1").val();
    var player2 = $("#player2").val();
    $(this).hide();
    
     playerOne = new Player(player1,true);
     playerTwo = new Player(player2,false);

     $("#pl1name").html(playerOne.playerName);
     $("#pl2name").html(playerTwo.playerName);

     
    // playerOne = new Player(player1,true);
    // playerTwo = new Player(player2,false);

  });
 
  $(".opening").show();




 $(".roll").click(function(){
    if(playerOne.turn == true){

        if(playerOne.totalRoll >= 100){
          alert(playerOne.playerName+" is the winner");
          playerOne.reset();
          }else{
             playerOne.roll();
            $("#pl1score").html(" "+playerOne.score);

          

           if(playerOne.score == 1){
              
               playerOne.totalRoll = 0;
               $("#pl1total").html(playerOne.totalRoll);

               playerOne.switch();
               playerTwo.switch();

           }else{
               playerOne.totalRoll += playerOne.score;
             
               $("#pl1total").html(playerOne.totalRoll);
           }
       }
   }
     else{
          if( playerTwo.totalRoll >= 100){
            alert(playerTwo.playerName+" is the winner!");
            playerTwo.reset();
              }else{
                playerTwo.roll();
                $("#pl2score").html(" "+playerTwo.score);
              

                  if(playerTwo.score == 1){
                       
                       playerTwo.totalRoll = 0;
                       $("#pl2total").html(playerTwo.totalRoll);

                       playerOne.switch();
                       playerTwo.switch();

                   }else{
                       playerTwo.totalRoll += playerTwo.score;
                      
                       $("#pl2total").html(playerTwo.totalRoll);
                   }

        }
      }
 });

  $('.hold').click(function(){
     // 
     if(playerOne.turn == true){
        playerOne.switch();
        playerTwo.switch();
        playerOne.score = 0;
        playerOne.totalRoll += playerOne.score; 

     }else{
        playerOne.switch();
        playerTwo.switch();
        playerTwo.score = 0;
        playerTwo.totalRoll += playerTwo.score; 

     }
  });

});
