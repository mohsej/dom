var maxb = document.getElementById("maxb");
var minb = document.getElementById("minb");
var qty = +document.getElementById("qty").innerHTML;
var soumpc = +document.getElementById("pc2000").innerHTML;
var soumi = +document.getElementById("iphone500").innerHTML;
var soumip = +document.getElementById("iphone1000").innerHTML;
var minbu = document.getElementById("minbu");

var maxbu = document.getElementById("maxbu");
var minbut = document.getElementById("minbut");
var maxbut = document.getElementById("maxbut");
var qty1 = +document.getElementById("qty1").innerHTML;
var qty2 = +document.getElementById("qty2").innerHTML;
var favorite = +document.getElementsByTagName("favorite").innerHTML;
var box1 = document.getElementsByTagName("box1");

maxb.addEventListener("click", function () {
    document.getElementById("qty").innerHTML = ++qty;
    document.getElementById("pc2000").innerHTML = soumpc * qty;
  
  });
  
  minb.addEventListener("click", function () {
    if (qty > 0) {
        document.getElementById("pc2000").innerHTML = soumpc * qty;
        document.getElementById("qty").innerHTML = --qty;
  
    } else {
      alert("pay attention");
    }
  });
  
  maxbu.addEventListener("click", function () {
    document.getElementById("qty1").innerHTML = ++qty1;
    document.getElementById("iphone500").innerHTML = soumi * qty1;
  
  });
  
  minbu.addEventListener("click", function () {
    if (qty1 > 0) {
        document.getElementById("iphone500").innerHTML = soumi * qty1;
        document.getElementById("qty1").innerHTML = --qty1;
  
    } else {
      alert("pay attention");
    }
  });
  maxbut.addEventListener("click", function () {
    document.getElementById("qty2").innerHTML = ++qty2;
    document.getElementById("iphone1000").innerHTML = soumip * qty2;
  
  });
  
  minbut.addEventListener("click", function () {
    if (qty2 > 0) {
        document.getElementById("iphone1000").innerHTML = soumip * qty2;
        document.getElementById("qty2").innerHTML = --qty2;
  
    } else {
      alert("pay attention");
    }
  });
  box1.addEventListener("click", function () {
    document.getElementById("f").innerHTML = ++f;
   
  
  });
  function myFunction1(){
    var myobj = document.getElementById("pc");
    myobj.remove();
  }
  function myFunction2(){
    var myobj = document.getElementById("iphone");
    myobj.remove();
  }
  function myFunction3(){
    var myobj = document.getElementById("iphone1");
    myobj.remove();
  }


  $(document).ready(function(){
    $("#heart").click(function(){
      if($("#heart").hasClass("liked")){
        $("#heart").html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
        $("#heart").removeClass("liked");
      }else{
        $("#heart").html('<i class="fa fa-heart" aria-hidden="true"></i>');
        $("#heart").addClass("liked");
      }
    });
  });