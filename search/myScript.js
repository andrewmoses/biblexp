//for the userman(login) and login(creatng)


var flag4scroll;

function signmodal()
{
  $("#myModalsignin").modal('show');
  $("#myDiv").html("");


}



function searchmodal()
{
  $("#myModalsearch").modal('show');
  $("#myDiv").html("");


}




function newflogin()
{
  $("#myModalcreating").modal('hide');
  $("#myModalsignin").modal('show');
  $("#myDiv").html("");
  

}

function joinmodalf()
{
  $("#myModalsignin").modal('hide');
  $("#myModalcreating").modal('show');
  $("#myDiv").html("");


}

function creating()
{
  var xmlhttp;
  var mani;
  var newuser = document.getElementById("inputEmaili").value;
  var pswd = document.getElementById("inputPasswordi").value;

  var pswdconfirm = document.getElementById("inputPasswordiconfirm").value;

  var mailid = document.getElementById("realinputEmaili").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  

  if (newuser == null || newuser == "" || pswd == null || pswd == "" || pswdconfirm == null || pswdconfirm == "") {
        
          document.getElementById("willchangec").innerHTML = "pls fill it..";
        
        
    }
  else if (!(/^\S{3,}$/.test(newuser))) {

          document.getElementById("willchangec").innerHTML = "No-space in Username";
          document.getElementById("inputEmaili").value='';

        }
  else if(!filter.test(mailid))
        {
          document.getElementById("willchangec").innerHTML = "invalid email id";
          document.getElementById("realinputEmaili").value='';
        }
  else if(pswd!=pswdconfirm)
        {
          document.getElementById("willchangec").innerHTML = "Passwords not matching";
          document.getElementById("inputPasswordiconfirm").value='';
        }

  else
  {
      if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        
        var resto = xmlhttp.responseText;
        if (resto==0)
        {
          document.getElementById("willchangec").innerHTML = "Taken, find another one quick!"
          document.getElementById("inputEmaili").value='';

        }
        else
        {
          document.getElementById("myarea").innerHTML = '<h2 class="form-signin-heading">You are on board</h2><button onclick="newflogin()" class="btn btn-lg btn-primary btn-block" type="button">Login here</button>';

        }
        
        //alert(rstx);
        //mani="super man is the super man and he is not a ordinary man";
        //document.getElementById("myDiv").innerHTML=mani;
        //$('#myDiv').append(mani);
        

        
   
        }
      }
    //var search = document.getElementById('book').value;   - $("#headstat").height()
    //var queryString = "?book=Genesis";
    xmlhttp.open("GET","usersman/creating.py?unam="+newuser+"&pwd="+pswd+"&mailid="+mailid,true);
    xmlhttp.send();

  }
  
  
}

var usernamedisplay;
function login()
{
  
  var xmlhttp;
  var mani;
  var newuser = document.getElementById("inputEmail").value;
  var pswd = document.getElementById("inputPassword").value;

  if (newuser == null || newuser == "" || pswd == null || pswd == "") {
        
          document.getElementById("willchange").innerHTML = "pls fill it..";
        
        
    }
  else
  {
      if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        
        var resto = xmlhttp.responseText;
        if (resto==0)
        {
          document.getElementById("willchange").innerHTML = "Wrong User or password";
          document.getElementById("inputEmail").value='';
          document.getElementById("inputPassword").value='';

        }
        else
        {
          document.getElementById("myDivtep").style.visibility = "hidden";
          $("#myModalsignin").modal('hide');
          usernamedisplay=newuser;
          document.getElementById("urnam").innerHTML = "<ul class='nav navbar-nav navbar-right'><li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>"+usernamedisplay+" <span class='glyphicon glyphicon-user'></span></a><li><a href='index.html'>Sign Out <span class='glyphicon glyphicon-log-out'></span></a></li></ul></li></ul>";

          document.getElementById("searchmaster").style.visibility = "visible";

        }
        
        //alert(rstx);
        //mani="super man is the super man and he is not a ordinary man";
        //document.getElementById("myDiv").innerHTML=mani;
        //$('#myDiv').append(mani);
        

        
   
        }
      }
    //var search = document.getElementById('book').value;   - $("#headstat").height()
    //var queryString = "?book=Genesis";
    xmlhttp.open("GET","usersman/login.py?unam="+newuser+"&pwd="+pswd,true);
    xmlhttp.send();

  }
  
  
}  




//now its for the bible display verse and chapter notes


$(".dropdown-menu1 li a").click(function(){
  

  $(".btnum:first-child").html($(this).text()+' <span class="caret"></span>');
  
});
    $(".dropdown-menu2").on('click','li',function(){
  
  $(".btnum1:first-child").html($(this).text()+' <span class="caret"></span>');
  
});

$(".dropdown-menu3").on('click','li',function(){
  
  $(".btnum2:first-child").html($(this).text()+' <span class="caret"></span>');
  
});




//for the end dropdown menus

  $(".dropdown-menu1end li a").click(function(){
  

  $(".btnumend:first-child").html($(this).text()+' <span class="caret"></span>');
  
});
    $(".dropdown-menu2end").on('click','li',function(){
  
  $(".btnum1end:first-child").html($(this).text()+' <span class="caret"></span>');
  
});

$(".dropdown-menu3end").on('click','li',function(){
  
  $(".btnum2end:first-child").html($(this).text()+' <span class="caret"></span>');
  
});
//selver is the reference for notes
var selver = [];

var topbook;
var topchapter;
function getPagingfull(str) {

  $("#myModaload").modal('show');
  $("#myDiv").html("");
  selver = [];
  document.getElementById("navmaster").style.visibility = "hidden";
  topchapter=str;
  var fver=5;

  
  $('#list1').append('<li><a tabindex="-1" href="#">Loading</a></li>');

  var xmlhttp;
    var mani;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        mani = xmlhttp.responseText;
        
        
        //mani="super man is the super man and he is not a ordinary man";
        //document.getElementById("liverse").innerHTML=mani;
        var vind = parseInt(mani);
        $('#list1').empty();
        
        $(".btnum2:first-child").html('Verse'+' <span class="caret"></span>');
        for( i = 1; i<vind+1;i++)
        {
            $('#list1').append('<li onclick="getPagingfullv(this.id)" id="'+i+'"><a tabindex="-1" href="#">'+i+'</a></li>');
        }


        }
      }
    //var search = document.getElementById('book').value;
    //var queryString = "?book="+topbook+"&cnum="+topchapter;
    xmlhttp.open("GET","getversenum.py?book="+topbook+"&cnum="+topchapter,true);
    xmlhttp.send();

  //for loadin the first verse  
  getPagingfullv(1);




  /*
  if(topbook=="Genesis" && topchapter=)
  */
  
  /*
  $('#list1').empty();
  for( i = 1; i<mani+1;i++)
  {
      $('#list1').append('<li onclick="getPagingfullv(this.id)" id="'+mani+'"><a tabindex="-1" href="#">'+i+'</a></li>');
  }

*/
/*
alert(mani.trim());
*/

/*
  var sumvar=+mani;
  $('#list1').empty();
  $('#list1').append('<li onclick="getPagingfullv(this.id)" id="31"><a tabindex="-1" href="#">'+sumvar+'</a></li>');
*/


  
        
}



function getPaging(str) {
  //var new_task = this.id;
  if(typeof usernamedisplay === 'undefined'){
   // your code here.
    
    $(".btnum:first-child").html('Books'+' <span class="caret"></span>');
    $(".btnum1:first-child").html('Chapter'+' <span class="caret"></span>');
    $('#list1').empty();
    $(".btnum2:first-child").html('Verse'+' <span class="caret"></span>');
  }
  else
{
  $("#myModaload").modal('show');
  document.getElementById("myDivtep").style.visibility = "hidden";
  
  topbook=str;
  var end=5;
  if(str=="Revelation")
  {
    
    end=22;
  }
  if(str=="Jude")
  {
    end=1;
  }
  if(str=="3John")
  {
    end=1;
  }
  if(str=="2John")
  {
    end=1;
  }
  if(str=="1John")
  {
    end=5;
  }
  if(str=="2Peter")
  {
    end=3;
  }
  if(str=="1Peter")
  {
    end=5;
  }
  if(str=="James")
  {
    end=5;
  }
  if(str=="Hebrews")
  {
    end=13;
  }
  if(str=="Philemon")
  {
    end=1;
  }
  if(str=="Titus")
  {
    end=3;
  }
  if(str=="2Timothy")
  {
    end=4;
  }
  if(str=="1Timothy")
  {
    end=6;
  }
  if(str=="2Thessalonians")
  {
    end=3;
  }
  if(str=="1Thessalonians")
  {
    end=5;
  }
  if(str=="Colossians")
  {
    end=4;
  }
  if(str=="Philippians")
  {
    end=4;
  }
  if(str=="Ephesians")
  {
    end=6;
  }
  if(str=="Galatians")
  {
    end=6;
  }
  if(str=="2Corinthians")
  {
    end=13;
  }
  if(str=="1Corinthians")
  {
    end=16;
  }
  if(str=="Romans")
  {
    end=16;
  }
  if(str=="Acts")
  {
    end=28;
  }
  if(str=="John")
  {
    end=21;
  }
  if(str=="Luke")
  {
    end=24;
  }
  if(str=="Mark")
  {
    end=16;
  }
  if(str=="Matthew")
  {
    end=28;
  }
  if(str=="Malachi")
  {
    end=4;
  }
  if(str=="Zechariah")
  {
    end=14;
  }
  if(str=="Haggai")
  {
    end=2;
  }
  if(str=="Zephaniah")
  {
    end=3;
  }
  if(str=="Habakkuk")
  {
    end=3;
  }
  if(str=="Nahum")
  {
    end=3;
  }
  if(str=="Micah")
  {
    end=7;
  }
  if(str=="Jonah")
  {
    end=4;
  }
  if(str=="Obadiah")
  {
    end=1;
  }
  if(str=="Amos")
  {
    end=9;
  }
  if(str=="Joel")
  {
    end=3;
  }
  if(str=="Hosea")
  {
    end=14;
  }
  if(str=="Daniel")
  {
    end=12;
  }
  if(str=="Ezekiel")
  {
    end=48;
  }
  if(str=="Lamentations")
  {
    end=5;
  }
  if(str=="Jeremiah")
  {
    end=52;
  }
  if(str=="Isaiah")
  {
    end=66;
  }  
  if(str=="SongofSongs")
  {
    end=8;
  }
  if(str=="Ecclesiastes")
  {
    end=12;
  }
  if(str=="Proverbs")
  {
    end=31;
  }
  if(str=="Psalm")
  {
    end=150;
  }
  if(str=="Job")
  {
    end=42;
  }
  if(str=="Esther")
  {
    end=10;
  }
  if(str=="Nehemiah")
  {
    end=13;
  }
  if(str=="Ezra")
  {
    end=10;
  }
  if(str=="2Chronicles")
  {
    end=36;
  }
  if(str=="1Chronicles")
  {
    end=29;
  }
  if(str=="2Kings")
  {
    end=25;
  }
  if(str=="1Kings")
  {
    end=22;
  }
  if(str=="2Samuel")
  {
    end=24;
  }
  if(str=="1Samuel")
  {
    end=31;
  }
  if(str=="Ruth")
  {
    end=4;
  }
  if(str=="Judges")
  {
    end=21;
  }
  if(str=="Joshua")
  {
    end=24;
  }
  if(str=="Deuteronomy")
  {
    end=34;
  }
  if(str=="Numbers")
  {
    end=36;
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  if(str=="Leviticus")
  {
    end=27;
  }
  if(str=="Exodus")
  {
    end=40;
  }
  if(str=="Genesis")
  {
    end=50;
  }

  //event.preventDefault();
  $('#list').empty();
  $('#list1').empty();
  $("#myDiv").html("");
  
  selver = [];
  document.getElementById("navmaster").style.visibility = "hidden";
  
  $(".btnum1:first-child").html('Chapter'+' <span class="caret"></span>');
  $(".btnum2:first-child").html('Verse'+' <span class="caret"></span>');
  for( i = 1; i<end+1;i++)
  {
      $('#list').append('<li onclick="getPagingfull(this.id)" id="'+i+'"><a tabindex="-1" href="#">'+i+'</a></li>');
      
  }
  
  getPagingfull(1);

  //loadin the book and next book 
    
    }    
}
var topverse;
var topvnosno;
var botvnosno;
function getPagingfullv(str) {
  //var new_task = this.id;

  //checking if login or not
  if(typeof usernamedisplay === 'undefined'){
   // your code here.
    
    $(".btnum:first-child").html('Books'+' <span class="caret"></span>');
    $(".btnum1:first-child").html('Chapter'+' <span class="caret"></span>');
    $('#list1').empty();
    $(".btnum2:first-child").html('Verse'+' <span class="caret"></span>');
  }
  else
  {

  $("#myModaload").modal('show');

  flag4scroll=1;


  $("#myDiv").html("");
  selver = [];
  document.getElementById("navmaster").style.visibility = "hidden";
  topverse=str;

  //for loading the content
  var xmlhttp;
    var mani;
    
    
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        mani = xmlhttp.responseText;
        
        vnosnonumber();
        //mani="super man is the super man and he is not a ordinary man";
        document.getElementById("myDiv").innerHTML=mani;
        $("#myModaload").modal('hide');
        $('html, body').animate({
        scrollTop: ( $("#a"+topbook+"-"+topchapter+"-"+topverse).offset().top - $(window).height() / 2 )
        }, 2000);
   
        }
      }
    //var search = document.getElementById('book').value;   - $("#headstat").height()
    //var queryString = "?book=Genesis";
    xmlhttp.open("GET","newpycodes/getverse.py?book="+topbook+"&cnum="+topchapter+"&vnum="+topverse+"&unam="+usernamedisplay,true);
    xmlhttp.send();



    //for find the topvnosno
    


    }//closing else
        
}


var bookend;
var chapterend;

function getPagingend(str) {
  //var new_task = this.id;
  bookend=str;

  var end=5;
  if(str=="Revelation")
  {
    end=22;
  }
  if(str=="Jude")
  {
    end=1;
  }
  if(str=="3John")
  {
    end=1;
  }
  if(str=="2John")
  {
    end=1;
  }
  if(str=="1John")
  {
    end=5;
  }
  if(str=="2Peter")
  {
    end=3;
  }
  if(str=="1Peter")
  {
    end=5;
  }
  if(str=="James")
  {
    end=5;
  }
  if(str=="Hebrews")
  {
    end=13;
  }
  if(str=="Philemon")
  {
    end=1;
  }
  if(str=="Titus")
  {
    end=3;
  }
  if(str=="2Timothy")
  {
    end=4;
  }
  if(str=="1Timothy")
  {
    end=6;
  }
  if(str=="2Thessalonians")
  {
    end=3;
  }
  if(str=="1Thessalonians")
  {
    end=5;
  }
  if(str=="Colossians")
  {
    end=4;
  }
  if(str=="Philippians")
  {
    end=4;
  }
  if(str=="Ephesians")
  {
    end=6;
  }
  if(str=="Galatians")
  {
    end=6;
  }
  if(str=="2Corinthians")
  {
    end=13;
  }
  if(str=="1Corinthians")
  {
    end=16;
  }
  if(str=="Romans")
  {
    end=16;
  }
  if(str=="Acts")
  {
    end=28;
  }
  if(str=="John")
  {
    end=21;
  }
  if(str=="Luke")
  {
    end=24;
  }
  if(str=="Mark")
  {
    end=16;
  }
  if(str=="Matthew")
  {
    end=28;
  }
  if(str=="Malachi")
  {
    end=4;
  }
  if(str=="Zechariah")
  {
    end=14;
  }
  if(str=="Haggai")
  {
    end=2;
  }
  if(str=="Zephaniah")
  {
    end=3;
  }
  if(str=="Habakkuk")
  {
    end=3;
  }
  if(str=="Nahum")
  {
    end=3;
  }
  if(str=="Micah")
  {
    end=7;
  }
  if(str=="Jonah")
  {
    end=4;
  }
  if(str=="Obadiah")
  {
    end=1;
  }
  if(str=="Amos")
  {
    end=9;
  }
  if(str=="Joel")
  {
    end=3;
  }
  if(str=="Hosea")
  {
    end=14;
  }
  if(str=="Daniel")
  {
    end=12;
  }
  if(str=="Ezekiel")
  {
    end=48;
  }
  if(str=="Lamentations")
  {
    end=5;
  }
  if(str=="Jeremiah")
  {
    end=52;
  }
  if(str=="Isaiah")
  {
    end=66;
  }  
  if(str=="SongofSongs")
  {
    end=8;
  }
  if(str=="Ecclesiastes")
  {
    end=12;
  }
  if(str=="Proverbs")
  {
    end=31;
  }
  if(str=="Psalm")
  {
    end=150;
  }
  if(str=="Job")
  {
    end=42;
  }
  if(str=="Esther")
  {
    end=10;
  }
  if(str=="Nehemiah")
  {
    end=13;
  }
  if(str=="Ezra")
  {
    end=10;
  }
  if(str=="2Chronicles")
  {
    end=36;
  }
  if(str=="1Chronicles")
  {
    end=29;
  }
  if(str=="2Kings")
  {
    end=25;
  }
  if(str=="1Kings")
  {
    end=22;
  }
  if(str=="2Samuel")
  {
    end=24;
  }
  if(str=="1Samuel")
  {
    end=31;
  }
  if(str=="Ruth")
  {
    end=4;
  }
  if(str=="Judges")
  {
    end=21;
  }
  if(str=="Joshua")
  {
    end=24;
  }
  if(str=="Deuteronomy")
  {
    end=34;
  }
  if(str=="Numbers")
  {
    end=36;
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  if(str=="Leviticus")
  {
    end=27;
  }
  if(str=="Exodus")
  {
    end=40;
  }
  if(str=="Genesis")
  {
    end=50;
  }

  $('#listend').empty();
  $(".btnum1end:first-child").html('Chapter'+' <span class="caret"></span>');
  $(".btnum2end:first-child").html('Verse'+' <span class="caret"></span>');
  for( i = 1; i<end+1;i++)
  {
      $('#listend').append('<li onclick="getPagingfullend(this.id)" id="'+i+'"><a tabindex="-1" href="#">'+i+'</a></li>');
  }

 $('html, body').animate({
        scrollTop: ($("#a"+topbook+"-"+topchapter+"-"+topverse).offset().top - $("#headstat").height() )
        
    }, 2000);



}

function getPagingfullend(str) {
  chapterend=str;
  var fver=5;

  var xmlhttp;
    var mani;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        mani = xmlhttp.responseText;
        
        
        //mani="super man is the super man and he is not a ordinary man";
        document.getElementById("endliverse").innerHTML=mani;
        }
      }
    //var search = document.getElementById('book').value;
    //var queryString = "?book="+topbook+"&cnum="+topchapter;
    xmlhttp.open("GET","getversenumend.py?book="+bookend+"&cnum="+chapterend,true);
    xmlhttp.send();

$('html, body').animate({
        scrollTop: ($("#a"+topbook+"-"+topchapter+"-"+topverse).offset().top - $("#headstat").height() )
        
    }, 2000);
  
        
}


var verseend;
function getPagingfullvend(str) {
  //var new_task = this.id;
  verseend=str;
  var xmlhttp;
    var mani;
    
    
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        mani = xmlhttp.responseText;
        //mani="super man is the super man and he is not a ordinary man";
        document.getElementById("myDiv").innerHTML=mani;
       
        }
      }
    //var search = document.getElementById('book').value;
    //var queryString = "?book=Genesis";
    xmlhttp.open("GET","getpass.py?fbook="+topbook+"&fcnum="+topchapter+"&fvn="+topverse+"&tbook="+bookend+"&tcnum="+chapterend+"&tvn="+verseend,true);
    xmlhttp.send();

  $('html, body').animate({
        scrollTop: ($("#a"+topbook+"-"+topchapter+"-"+topverse).offset().top - $("#headstat").height() )
        
    }, 2000);
    
        
}

$("#formoid").submit(function(event) {

      /* stop form from submitting normally */
      event.preventDefault();
  var xmlhttp;
    var mani;
    
    var notes=document.getElementById("notes").value;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        alert('done');
       
        }
      }
    //var search = document.getElementById('book').value;
    //var queryString = "?book=Genesis";
    xmlhttp.open("GET","notes.py?notes="+notes+"&fbook="+topbook+"&fcnum="+topchapter+"&fvn="+topverse+"&tbook="+bookend+"&tcnum="+chapterend+"&tvn="+verseend,true);
    xmlhttp.send();

      /* Alerts the results */
      
    });

$(document).ready(function() {

          document.getElementById("navmaster").style.visibility = "hidden";
          document.getElementById("searchmaster").style.visibility = "hidden";
          flag4scroll=0;

          
          
    

    });



$(window).scroll(function(){

 
  
        if  ($(window).scrollTop() == $(document).height() - $(window).height() && flag4scroll==1){
              topvnosno=parseInt(topvnosno)+81;
          
              lastPostFunc();

            
           
        }
        else if($(window).scrollTop() == 0 && flag4scroll==1)
        {
            botvnosno = parseInt(botvnosno)-81;
            
            firstPostFunc();

        }
});

function lastPostFunc() 
{ 
    var xmlhttp;
    var mani;
    
    
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        mani = xmlhttp.responseText;
      
        //mani="super man is the super man and he is not a ordinary man";
        //document.getElementById("myDiv").innerHTML=mani;
        $('#myDiv').append(mani);

        
   
        }
      }
    //var search = document.getElementById('book').value;   - $("#headstat").height()
    //var queryString = "?book=Genesis";
    xmlhttp.open("GET","newpycodes/getscroll.py?vnosno="+topvnosno+"&unam="+usernamedisplay,true);
    xmlhttp.send();
    




}; 

function firstPostFunc() 
{ 
    
    var xmlhttp;
    var mani;
    
    
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        mani = xmlhttp.responseText;
      
        //mani="super man is the super man and he is not a ordinary man";
        //document.getElementById("myDiv").innerHTML=mani;
        var frstmsg = $("#myDiv :first-child").attr('id');
        //$('#myDiv').prepend(frstmsg);
        $('#myDiv').prepend(mani);
        //$(document).scrollTop(frstmsg.offset().top + $(window).height() + $(window).height()/2 + $("#headstat").height());

        $(document).scrollTop($("#"+frstmsg).offset().top - $("#headstat").height());

        
   
        }
      }
    //var search = document.getElementById('book').value;   - $("#headstat").height()
    //var queryString = "?book=Genesis";
    xmlhttp.open("GET","newpycodes/getscroll.py?vnosno="+botvnosno+"&unam="+usernamedisplay,true);
    xmlhttp.send();
    




}; 

function vnosnonumber() 
{ 
    var xmlhttp;
          var mani;
          
          
          if (window.XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
            }
          else
            {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
          xmlhttp.onreadystatechange=function()
            {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
              {
              //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
              
              topvnosno = xmlhttp.responseText;
              botvnosno = topvnosno;
              //mani="super man is the super man and he is not a ordinary man";
              //document.getElementById("myDiv").innerHTML=mani;
              //$('#myDiv').append(mani);
              

              
         
              }
            }
          //var search = document.getElementById('book').value;   - $("#headstat").height()
          //var queryString = "?book=Genesis";
          xmlhttp.open("GET","newpycodes/getvnosno.py?book="+topbook+"&cnum="+topchapter+"&vnum="+topverse,true);
          xmlhttp.send();
    




}; 


/*
$(function() {

  var xmlhttp;
    var mani;
    document.getElementById("loadbro").visible=true;
    
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        mani = xmlhttp.responseText;
        //mani="super man is the super man and he is not a ordinary man";
        document.getElementById("myDiv").innerHTML=mani;
        document.getElementById("loadbro").visible=false;
        }
      }
    //var search = document.getElementById('book').value;
    //var queryString = "?book=Genesis";
    xmlhttp.open("GET","getchap.py",true);
    xmlhttp.send();
});

*/


//for the color change of selected verses


function selectedverse(str)
{
  

  document.getElementById("navmaster").style.visibility = "visible";

  var flag=0;
  for(i = 0; i < selver.length; i++)
  {
    if(selver[i]==str)
    {
      //check if its green or the black
      var test = document.getElementById(str);
      var testClass = test.className;
      var t2 = 'colman verse';
      if(testClass == t2)
      {
        //its a green man
 
        document.getElementById(str).style.color = "#009900";
      
      }
      else
      {
        //its a black man
    
        document.getElementById(str).style.color = "#000000";
      }
      //bring the remaining elements forward and pop
      for(j = i; j < selver.length-1; j++)
      {
        selver[j]=selver[j+1];

      }
      selver.pop();
      flag=1;
      break;
    }
  }

  if(flag == 0)
  {
    //its not in the selver array so push it and change color
    selver.push(str);
    document.getElementById(str).style.color = "#ff0000";
  }
  
  if(selver.length == 0)
  {
    document.getElementById("navmaster").style.visibility = "hidden";
  }



}



var sendvnosno;

function notes()
{
  var json_string = JSON.stringify(selver);
  var xmlhttp;
  var mani;
  
  
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
      //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
      
      var rstx = xmlhttp.responseText;
      var nman = rstx.search("!!!!#");
      var n = rstx.search("!!!#");                                                                                   
      
      var fprt = rstx.substring(0,n);                                                                                                                                        
      sendvnosno = rstx.substring(nman+5,rstx.length);
      
      
      
      var fplch = rstx.substring(n+4,nman);
      
      $("#myModal").modal('show');
      document.getElementById("noteit").innerHTML=fprt;
      document.getElementById("comment").value = fplch ;

      
      //mani="super man is the super man and he is not a ordinary man";
      //document.getElementById("myDiv").innerHTML=mani;
      //$('#myDiv').append(mani);
      

      
 
      }
    }
  //var search = document.getElementById('book').value;   - $("#headstat").height()
  //var queryString = "?book=Genesis";
  xmlhttp.open("GET","newpycodes/getnotes.py?ref="+json_string+"&unam="+usernamedisplay,true);
  xmlhttp.send();
}

function sendnotes()
{
  
  var xmlhttp;
  var mani;
  var sendingnotes = document.getElementById("comment").value;
  var hasman = sendingnotes.search("#");
  if (hasman!=-1)
  {
    alert('ERROR NOT SAVED!! please do not use "#" symbol in your notes');

  }
  else
  {
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        
        var resto = xmlhttp.responseText;
        alert(resto);
        //alert(rstx);
        //mani="super man is the super man and he is not a ordinary man";
        //document.getElementById("myDiv").innerHTML=mani;
        //$('#myDiv').append(mani);
        

        
   
        }
      }
    //var search = document.getElementById('book').value;   - $("#headstat").height()
    //var queryString = "?book=Genesis";
    xmlhttp.open("GET","newpycodes/sendnotes.py?ref="+sendvnosno+"&notes="+sendingnotes+"&unam="+usernamedisplay,true);
    xmlhttp.send();

  }
  
  
}










//for the search query

function searchqry()
{
  
  $("#myModaload").modal('show');

  var xmlhttp;
  var mani;
  var sendingnotes = document.getElementById("searchqry").value;

  if (sendingnotes == null || sendingnotes == "") {
        
          //document.getElementById("willchangec").innerHTML = "pls fill it..";
        
        
    }
  else
  {

      if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        
        var resto = xmlhttp.responseText;


        var nman = resto.search("!!!#");
                                                                                          
        
        var fprt = resto.substring(0,nman);                                                                                                                                        
        var lprt = resto.substring(nman+4,resto.length);
        
        
        
        


        //document.getElementById("rslt").innerHTML=lprt+fprt;


        var markup = fprt;
        var output = updateHaystack(markup, sendingnotes);
        document.getElementById('rslt').innerHTML = lprt+output;

        $("#myModaload").modal('hide');
      
        //alert(rstx);
        //mani="super man is the super man and he is not a ordinary man";
        //document.getElementById("myDiv").innerHTML=mani;
        //$('#myDiv').append(mani);
        

        
   
        }
      }
    //var search = document.getElementById('book').value;   - $("#headstat").height()
    //var queryString = "?book=Genesis";
    xmlhttp.open("GET","newpycodes/search.py?qry="+sendingnotes+"&unam="+usernamedisplay,true);
    xmlhttp.send();

  }
  
  
}



function updateHaystack(input, needle) 
{
 return input.replace(new RegExp('(^|)(' + needle + ')(|$)','ig'), '$1<b>$2</b>$3');
}



function getvrforsearch(strvnosno) {
  //var new_task = this.id;
  //$("#myModalsearch").modal('hide');

  $("#myModalsearch").modal('hide');

  var gof = strvnosno.toString();
  //alert(typeof gof);


  var xmlhttp;
  var mani;
  


      if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        
        var resto = xmlhttp.responseText;

        var nman = resto.search("!");
                                                                                          
        
        var frbook = resto.substring(0,nman);
        var nman1 = resto.search("@");

        var frchap = resto.substring(nman+1,nman1);
        var frverse = resto.substring(nman1+1,resto.length);
        topbook = frbook;
        topchapter = frchap;

        getPagingfullv(frverse);

      
  

		  $(".btnum:first-child").html('Books'+' <span class="caret"></span>');
	    $(".btnum1:first-child").html('Chapter'+' <span class="caret"></span>');
	
	    $(".btnum2:first-child").html('Verse'+' <span class="caret"></span>');
  
		  
		



        
        
        
        
        


        //document.getElementById("rslt").innerHTML=lprt+fprt;


        
      
        //alert(rstx);
        //mani="super man is the super man and he is not a ordinary man";
        //document.getElementById("myDiv").innerHTML=mani;
        //$('#myDiv').append(mani);
        

        
   
        }
      }
    //var search = document.getElementById('book').value;   - $("#headstat").height()
    //var queryString = "?book=Genesis";
    xmlhttp.open("GET","newpycodes/getversefs.py?uniid="+gof,true);
    xmlhttp.send();

  
  
 

  
        
}
