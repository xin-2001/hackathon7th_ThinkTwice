var k=0;

$("html").mousemove(function(e){
  var a=e.pageX;
  var ww=window.innerWidth;
  if(k!==2){
      if(a<(ww/12)){
          $(".side").css("width","33%");
          $(".side").show();
          k=2;
      }else{
          $(".side").hide();
      }
  }else if(a>(ww/3)){
      $(".side").hide();
      k=0;
  }
})
//------------------------
$(".side_about").click(function(){
    $("#about>h2").css("animation","ab 0.5s ease 0s normal");
    $("#infor>h2").css("animation","none");
});
$(".side_infor").click(function(){
    $("#infor>h2").css("animation","ab 0.5s ease 0s normal");
    $("#about>h2").css("animation","none");
});

//------------------------
var img=[
"hack_home/logo_phone.png","hack_home/logo_web.png"
];
var ww=window.innerWidth;
var hh=window.innerHeight;
var box_w=$(".ab_content").width();
var set_top;
var mmg=document.getElementById('logo_img');
var w_img=$("#logo_img").width();
var pad_top=(hh/4);
$(".side").css("paddingTop",pad_top);

if(ww<1400){
    $(".game_bg").css("width","70%");
    var bg=($(".game_bg").width()*9)/16;
    $(".game_bg").css("height",bg);
    bg_font=((bg_w)/100)*2;
    $(".info").css("font-size",bg_font+"pt");
}else{
    $(".game_bg").css("width",1500*0.7);
    bg=($(".game_bg").width()*9)/16;
    $(".game_bg").css("height",bg);
    bg_font=((bg_w)/100)*2;
    $(".info").css("font-size",bg_font+"pt");
}

var bg_w=$(".game_bg").width();
var bg_h=$(".game_bg").height();

var bg_font=((bg_w)/100)*2;
$(".game_bg").css("font-size",bg_font+"pt");


$(".slide>img").css({"width":"60%","height":"auto"});

//alert($("#game").height()+" "+$("#infor").height()+" "+$(".info_game").height());
if(ww<=700){
    mmg.src=img[0];
    $(".mmin>div").css("width",ww-18);
    $(".mmin>div").css("height","50vh");
    $("#worker").css("height","45vh");
    $("#logo_img").css("height","40vh");
    $("#logo_img").css("width","auto");
    $("#logo_img").css("top","30px");
    bg_font=((bg_w)/100)*1.2;
    
    $("#about").css("height",$(".ab_content>p").height()+280);
    $(".ab_content").css("marginBottom","30px");
}else{
    mmg.src=img[1];
    $(".mmin>div").css("width",ww-18);
    $(".mmin>div").css("height","100vh");
    $("#worker").css("height",$("#worker>div>img").height()+250);
    $("#logo_img").css("width",ww-50);
    $("#logo_img").css("height","auto");
    w_img=$("#logo_img").width();
    set_top=(hh/2)-(w_img/5);
    $("#logo_img").css("top",set_top);
    bg_font=((bg_w)/100)*3;
    
    $(".ab_content").css("marginBottom","auto");
}
var bg_w=$(".game_bg").width();
var bg_font=((bg_w)/100)*2;
$(".game_bg").css("font-size",bg_font+"pt");
$(".txt").css("font-size",bg_font+"pt");
$(".txt2").css("font-size",bg_font+"pt");
bg_font=((bg_w)/100)*1.8;
$(".ab_content").css("font-size",bg_font+"pt");

$("#game").height($(".game_bg").height()+80);
$("#infor").height($("#infor>img").height()+280);
$(".info_game").css("height",$("#game").height()+$("#infor").height());
var ab_c=$(".ab_content>p").height()+30;
$(".ab_content").css("height",ab_c);

//------------------------------------------------------------
$("ul.slides").css("width","60%");
$("ul.slides").height($("ul.slides").width());
$("#game_content").height($("ul.slides").height()+100);
$(".slide>a>img").css("width","80%");
$(".navigator").css("justify-content","space-between");
$('.slide:eq(0)').css("left",($(".navigator").width()-50)/2-$(".slide>a>img").width()/2);
$('.slide:eq(1)').css("left",$("ul.slides").width());

//$(".slide>a").css({"width":$(".slide>a>img").width(),"height":"auto"});//圖片超連結大小
//------------------------------------------------------------
window.onresize= function(){
    ww=window.innerWidth;
    hh=window.innerHeight;
    w_img=$("#logo_img").width();
    bg_w=$(".game_bg").width();
    bg_font=((bg_w)/100)*2;
    $(".game_bg").css("font-size",bg_font+"pt");
    $(".txt").css("font-size",bg_font+"pt");
    $(".txt2").css("font-size",bg_font+"pt");
    
    box_w=$(".ab_content").width();
    $(".ab_content").css("height",$(".ab_content>p").height()+20);
    ab_c=$(".ab_content>p").height()+30;
    $(".ab_content").css("height",ab_c);
    
    if(ww<=700){
        mmg.src=img[0];
        $(".mmin>div").css("width",ww-18);
        $(".mmin>div").css("height","50vh");
        $("#worker").css("height","45vh");
        $("#logo_img").css("height","40vh");
        $("#logo_img").css("width","auto");
        $("#logo_img").css("top","30px");
        $("#about").css("height",$(".ab_content>p").height()+280);
        $(".ab_content").css("marginBottom","30px");
        bg_font=((bg_w)/100)*1.2;
        
    }else{
        mmg.src=img[1];
        $(".mmin>div").css("width",ww-18);
        $(".mmin>div").css("height","100vh");
        $("#worker").css("height",$("#worker>div>img").height()+250);
        $("#logo_img").css("width",ww-50);
        $("#logo_img").css("height","auto");
        set_top=(hh/2)-(w_img/5);
        $("#logo_img").css("top",set_top);
        bg_font=((bg_w)/100)*3;
        
        $(".ab_content").css("marginBottom","auto");
    }
    pad_top=(hh/4);
    $(".side").css("paddingTop",pad_top);
    if(ww<1400){
        $(".game_bg").css("width","70%");
        bg=($(".game_bg").width()*9)/16;
        $(".game_bg").css("height",bg);
        bg_w=$(".game_bg").width();
        bg_font=((bg_w)/100)*2;
        $(".game_bg").css("font-size",bg_font+"pt");
        bg_font=((bg_w)/100)*2;
        $(".info").css("font-size",bg_font+"pt");
    }else{
        $(".game_bg").css("width",1500*0.7);
        bg=($(".game_bg").width()*9)/16;
        $(".game_bg").css("height",bg);
        bg_font=((bg_w)/100)*2;
        $(".info").css("font-size",bg_font+"pt");
    }
    $("#game").height($(".game_bg").height()+80);
    $("#infor").height($("#infor>img").height()+280);
    $(".info_game").css("height",$("#game").height()+$("#infor").height());
    bg_font=((bg_w)/100)*1.8;
    $(".ab_content").css("font-size",bg_font+"pt");
    //-----------------------------------------------------
    $("ul.slides").css("width","60%");
    $("ul.slides").height($("ul.slides").width());
    $("#game_content").height($("ul.slides").height()+100);
    $(".slide>a>img").css("width","80%");
    $(".navigator").css("justify-content","space-between");
    $('.slide:eq(0)').css("left",($(".navigator").width()-50)/2-$(".slide>a>img").width()/2);
    $('.slide:eq(1)').css("left",$("ul.slides").width());
    
}




