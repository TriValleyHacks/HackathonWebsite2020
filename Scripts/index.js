var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  i = 0;
  while(i < x.length){
    x[i].style.display = "none";
    i ++;
  }
  /*
  for (i = 0; i < x.length; i+=2) {
    x[i].style.display = "none";  
  }*/
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }    
  x[myIndex-1].style.display = "block";
  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
