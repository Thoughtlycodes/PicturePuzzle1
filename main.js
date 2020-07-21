var imageArray = ["1","2","3","4","5","6"];
var one=1;
var two=1;
var three=1;
var fo=1;
var fi=1;
var sx=1;
var sv=1;
var eg=1;
var ni=0;
var s=1;
var randomNumber = Math.floor(Math.random()*6);
document.querySelectorAll("img")[9].setAttribute("src",imageArray[randomNumber]+".jpg");

document.querySelectorAll("img")[0].setAttribute("src",imageArray[randomNumber]+".8.jpg");
document.querySelectorAll("img")[1].setAttribute("src",imageArray[randomNumber]+".5.jpg");
document.querySelectorAll("img")[2].setAttribute("src",imageArray[randomNumber]+".1.jpg");
document.querySelectorAll("img")[3].setAttribute("src",imageArray[randomNumber]+".7.jpg");
document.querySelectorAll("img")[4].setAttribute("src",imageArray[randomNumber]+".6.jpg");
document.querySelectorAll("img")[5].setAttribute("src",imageArray[randomNumber]+".4.jpg");
document.querySelectorAll("img")[6].setAttribute("src",imageArray[randomNumber]+".2.jpg");
document.querySelectorAll("img")[7].setAttribute("src",imageArray[randomNumber]+".3.jpg");

function oneMove(elem){
  
  if (s==1){
  if( $(elem).parent().attr("id") == "one" ){
    one=one-1
    if(two!=1){
    $(elem).detach().appendTo('#two');
    two=two+1;
    }
    else if(fo!=1){
    $(elem).detach().appendTo('#four');
    fo=fo+1;
    }
    else{
    alert('invaild move!');
                                                               
    one=1;
   }
                                                              
                                                              
   } 
  else if( $(elem).parent().attr("id") == "two" ){
        two=two-1;
       if(three!=1){
       $(elem).detach().appendTo('#three');
       three=three+1;
      
    }
    else if(one!=1){
        $(elem).detach().appendTo('#one');
        one=1;
      
    }
    else if(fi!=1){
        $(elem).detach().appendTo('#five');
        fi=1;
    }
    else{
        alert('invaild move!');
        two=1;
    }
    
  }
  else if( $(elem).parent().attr("id") == "three" ){
    three=three-1;
    if(two!=1){
      $(elem).detach().appendTo('#two');
      two=1;
  
    }
    else if(sx!=1){
      $(elem).detach().appendTo('#six');
      sx=1;
    }
    else{
        alert('invaild move!');
        three=1;
      }
  }
  else if( $(elem).parent().attr("id") == "four" ){
    fo=fo-1;
    if(fi!=1){
      $(elem).detach().appendTo('#five');
      fi=1;
    }
    else if(one!=1){
    $(elem).detach().appendTo('#one');
    one=1;

    }
    else if(sv!=1){
    $(elem).detach().appendTo('#seven');
    sv=1;

    }
    else{
      alert('invaild move!');
      fo=1;
    }

  }
  else if( $(elem).parent().attr("id") == "five" ){
    fi=fi-1;
    if(fo!=1){
      $(elem).detach().appendTo('#four');
      fo=fo+1;
    }
    else if(two!=1){
      $(elem).detach().appendTo('#two');
      two=1;
  
    }
    else if(sx!=1){
      $(elem).detach().appendTo('#six');
      sx=1;
      if(three!=1){
        $(elem).detach().appendTo('#three');
        three=three+1;
        
      }
      
    }
    else if(eg!=1)
    {
      $(elem).detach().appendTo('#eight');
      eg=1;
    }
    else{
      alert('invalid move!')
      fi=1;
    }
    }
  else if( $(elem).parent().attr("id") == "six" ){
    sx=sx-1;
    if(three!=1){
      $(elem).detach().appendTo('#three');
      three=three+1;
      
    }
    else if(fi!=1){
      $(elem).detach().appendTo('#five');
      fi=fi+1;
    }
    else if(ni!=1){
      $(elem).detach().appendTo('#nine');
      ni=1;
    }
    else{
    alert('invaild move!');
    sx=1;
    }


  }
  else if( $(elem).parent().attr("id") == "seven" ){
    sv=sv-1;
    if(eg!=1)
    {
      $(elem).detach().appendTo('#eight');
      eg=1;
    }
    else if(fo!=1){
      $(elem).detach().appendTo('#four');
      fo=fo+1;
    }
    else{
      alert('invaild move!');
      sv=1;
      }


  }
  else if( $(elem).parent().attr("id") == "eight" ){
    eg=eg-1;
    if(sv!=1){
      $(elem).detach().appendTo('#seven');
      sv=1;
  
      }
      else if(fi!=1){
        $(elem).detach().appendTo('#five');
        fi=fi+1;
      }
      else if(ni!=1){
        $(elem).detach().appendTo('#nine');
        ni=1;
      }
      else{
      alert('invaild move!');
      eg=1;
      }



  }
  else if( $(elem).parent().attr("id") == "nine" ){
      ni=ni-1;
     if(sx!=1){
        $(elem).detach().appendTo('#six');
        sx=1;
        if(three!=1){
          $(elem).detach().appendTo('#three');
          three=three+1;
          
        }
        
      }
      else if(eg!=1)
      {
        $(elem).detach().appendTo('#eight');
        eg=1;
      }
      else{
        alert('invalid move!')
        fi=1;
      }
      } 
    
      if ($('.one-box-image','.one-box-image').length == 1 && $('.two-box-image','.two-box-image').length == 1 && $('.three-box-image','.three-box-image').length == 1  && $('.four-box-image','.four-box-image').length == 1 && $('.five-box-image','.five-box-image').length == 1 && $('.six-box-image','.six-box-image').length == 1 && $('.seven-box-image','.seven-box-image').length == 1 && $('.eight-box-image','.eight-box-image').length == 1) { 
        alert("Success"); 
        document.querySelectorAll("img")[8].setAttribute("src",imageArray[randomNumber]+".9.jpg");
         document.getElementById("lastImage").style.display = "block";
         ni=1;
         s=0;
    } 
  }
  
    
  }

