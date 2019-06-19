
  var result1 = Math.floor(Math.random()*6)+1;

  var diceImage= "dice" +result1+".png";

  var image1= document.querySelector('.img1').setAttribute("src", "images/"+diceImage);


  var result2=Math.floor(Math.random()*6)+1;

  var diceImage2= "dice" +result2+".png";

  var image1= document.querySelector('.img2').setAttribute("src", "images/"+diceImage2);

  if(result1>result2){
    document.querySelector('.heading').innerHTML="🙌 Player 1 Wins!";
  }else if(result1<result2){
    document.querySelector('.heading').innerHTML="Player 2 Wins!🙌";
  }else {
    document.querySelector('.heading').innerHTML="It is even!!";
  }
