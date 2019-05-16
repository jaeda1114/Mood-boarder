var happyImages =[
    "https://sdl-stickershop.line.naver.jp/products/0/0/7/832/LINEStorePC/main.png?__=20161019",
    "https://www.clipartmax.com/png/middle/62-627782_which-hello-kitty-character-is-your-best-friend-whether-hello-kitty-red.png"];
    
$('button').click(function(){
    var mood = $('input').val();
    $(".images").html("");
   if (mood==="happy"){
      happyMood();}
    else if (mood==="sad") 
     {sadMood();} 
    else if (mood==="angrey"){
    angreyMood();}
    
});

function happyMood(){
$("body").css("background-color","lavender");
 
  happyImages.forEach(function(picture){
    $(".images").append('<img src="' +picture+ '">');
  });
}
function sadMood(){
$("body").css("background-color","blue");    
}


function shyMood(){
 changeBackgroundColor("grey");
}
function angreyMood(){
$("body").css("background-color","red");
}


function changeBackgroundColor(color){
$("body").css("background-color",color);
}

function changeTextColor(color){
}

function displayImages(images){
  
}


