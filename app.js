



  var age = prompt('please enter your age')
  if (age >= 18) {
    alert('enjoy watching')
  }


  else {
    alert('sorry this  movie is not good for you')
  }
  document.write('<img src="http://lucyvhayauthor.com/wp-content/uploads/2017/02/689300.jpg">')
  var yourName=function(){
  var yourFav= prompt('please enter your fav main character in the movie')
  while (yourFav !== "tyler" && yourFav !== 'hero') {
    yourFav = prompt("pleas enter  the name hero or tyler ")
  
  
 }
 var userChoose;
 if (yourFav === 'tyler') {
  userChoose = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyDas1grkpro41yrsnhVlHnCoBl1Ku4IzCA&usqp=CAU">';
 }
 else if (yourFav === 'hero') {
  userChoose = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJWcG5bRITO64o4zFQpdJDQ_suWuUMe68AA&usqp=CAU">';
}
var imgNum = prompt('How many images do you want?')
for (var i = 0; i < imgNum; i++) {
  document.write(userChoose);
}
  }
  yourName();
