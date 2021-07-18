//game_js
var ww=window.innerWidth;
var hh=window.innerHeight;
var name;
var game_img=[
"hack_home/start.jpg",
"hack_home/info.jpg",
"https://i.imgur.com/8rGuggF.jpg",
"hack_home/speech.jpg",
"hack_home/office.jpg",
"hack_home/office.jpg",
"hack_home/document_buta.jpg",
"hack_home/document_neko.jpg",
"hack_home/document_space.jpg",
"hack_home/office.jpg",
"hack_home/market.jpg",
"hack_home/office.jpg",
"hack_home/office.jpg",
"hack_home/office.jpg",
"hack_home/final.png"
];
var ttable=[
"hack_home/AB_1.png",
"hack_home/food.png",
"hack_home/comment.png"
]
$(".info").css("visibility","visible");
$(".ok").css("visibility","visible");
$(".set_name").css("visibility","visible");
$(".set_name").hide();
$(".info").hide();
$(".ok").hide();
$("#bg_start").attr("src",game_img[0]);
function start(){
    game_back=document.getElementsByClassName("bg_start");
    $(".start").css("visibility","hidden");
    $("#bg_start").hide();
    $("#bg_start").fadeToggle(500);
    $("#bg_start").attr("src",game_img[1]);
    $(".info").fadeToggle(1000);
    $(".ok").fadeToggle(1000);
    
}
function ok(){
    $("#bg_start").hide();
    $("#bg_start").fadeToggle(500);
    $("#bg_start").attr("src",game_img[2]);
    $(".info").hide();
    $(".ok").hide();
    $(".set_name").fadeToggle(1000);
    
}
$(".next").css("visibility","visible");
$(".say").css("visibility","visible");
$(".say").hide();
$(".next").hide();
function send(){
    if($('input[name=user_first]').val()==''||$('input[name=user_last]').val()==''){
        alert("請填入姓、名");
    }else{
        $(".next").fadeToggle(500);
        $("#bg_start").hide();
        $("#bg_start").attr("src",game_img[3]);
        $("#bg_start").fadeToggle(500);
        $(".set_name").hide();
        $(".say").fadeToggle(1000);
        $(".say").css({"backgroundColor":"rgba(225,225,225,0.7)"});
        name=$('input[name=user_first]').val()+$('input[name=user_last]').val();
        $(".user_name").html("現在你在綠色中學演講，主持人念到你的名字 "+name+","+$('input[name=user_first]').val()+"董事長。<br>在這場講座裡，你分享了創立綠色企業的點點滴滴...");
    }
}
var imm=3;
function next(){
    var bg_w=$(".game_bg").width();
    var bg_font=((bg_w)/100)*2;
    $(".game_bg").css("font-size",bg_font+"pt");
    $(".txt").css("font-size",bg_font+"pt");
    $(".txt2").css("font-size",bg_font+"pt");
    $("#bg_start").attr("src",game_img[++imm]);
    if(imm!=9&&imm!=7&&imm!=8){
        $("#bg_start").hide();
        $("#bg_start").fadeToggle(500);
    }
    $(".user_name").hide();
    $(".txt").empty();
    $(".txt2").empty();
    $(".say").hide();
    $(".say").css("backgroundColor","rgba(225,225,225,0)");
    $(".table_img").hide();
    $(".bg_next").css("visibility","visible");
    $(".bg_back").css("visibility","visible");
    $(".bg_next").hide();
    $(".bg_back").hide();
    $(".next").css("right","0");
    $(".next").css("visibility","visible");
    $(".next2").css("visibility","visible");
    $(".next3").css("visibility","visible");
    $(".next").hide();
    $(".next2").hide();
    $(".next3").hide();
    //alert(imm);
    if(imm==4){
        $(".say").fadeToggle(1000);
        $(".next").fadeToggle(1000);
        $(".next2").fadeToggle(1000);
        $(".table_img").fadeToggle(1000);
        $(".txt").html("目前公司決策研發新產品<br>現在你回到辦公室，今天談的第一項合作是糧食原料。");
        $(".table_img").attr("src",ttable[0]);
        $(".txt2").html("看完合作對象的資料，你選擇與__公司合作。");
        $(".say").css({"width":"80%","left": "10%","height":"80%","top":"10%","bottom": "auto"});
        $(".next").css("right","5%");
        $(".next").text("B公司");
        $(".next2").text("A公司");
    }
    if(imm==5){
        $(".say").fadeToggle(1000);
        $(".next").fadeToggle(1000);
        $(".txt").html("製作產品上，我們有了原料，下一項合作邀約-食品加工廠。<br>加工廠裡處理產品、包裝產品最後運送出廠。");
        $(".next").text("next");
        $(".txt").css("font-size","25px");
    }
    if(imm==6){
        $(".bg_next").show();
    }
    if(imm==7||imm==8){
        $(".bg_next").show();
        $(".bg_back").show();
    }
    if(imm==9){
        $(".bg_back").show();
        $(".say").show();
        $(".txt").html("此時的你選擇與___加工廠合作。");
        $(".next").show();
        $(".next2").show();
        $(".next3").show();
        $(".next").css("right","5%");
        $(".next2").css("right","35%");
        $(".next3").css("right","20%");
        $(".next").text("透明");
        $(".next2").text("豬頭");
        $(".next3").text("喵喵");
        $(".txt").css("font-size","25px");
    }
    if(imm==10){
        $(".say").fadeToggle(1000);
        $(".next").fadeToggle(1000);
        $(".next2").fadeToggle(1000);
        $(".say").css("backgroundColor","rgba(225,225,225,0.7)");
        $(".txt").html("加工過後的產品運送到了超市、商場、便利商店…等。<br>不久後，將有即期的產品。");
        $(".txt2").html("(A)丟棄、當廚餘!<br>(B)捐贈食物銀行!");
        $(".next").text("next");
        $(".txt2").css({"right":"5%","top":"50%"});
        $(".table_img").fadeToggle(1000);
        $(".table_img").css({"width":"60%","top": "15%","left": "0"});
        $(".table_img").attr("src",ttable[1]);
        $(".next").css("right","5%");
        $(".next2").css("right","20%");
        $(".next").text("B");
        $(".next2").text("A");
    }
    if(imm==11){
        $(".say").fadeToggle(1000);
        $(".next").fadeToggle(1000);
        $(".next2").fadeToggle(1000);
        $(".say").css("backgroundColor","rgba(225,225,225,0.7)");
        $(".txt").html("在你想要在商品上推廣對環境友善時，你選擇___。");
        $(".txt2").html("(A)買產品送環保餐具或環保袋乙組!<br>(B)產品限時買一送一");
        $(".next").text("next");
        $(".txt2").css({"right":"10%","top":"40%","textAlign":"left"});
        $(".next").css("right","20%");
        $(".next2").css("right","5%");
        $(".next").text("A");
        $(".next2").text("B");
    }
    if(imm==12){
        $(".say").fadeToggle(1000);
        $(".txt").html("身為董事長，對於自身公司的綠色經營可以怎麼做?");
        $(".txt2").html("(A)每個員工送一盆仙人掌<br>(B)中午發放一次性紙盒便當<br>(C)建設採用綠建築，頂樓鋪設綠色植披，在搭建太陽能板，午休時間關閉電燈，冷氣(空調)維持27度。");
        $(".txt2").css({"left":"10%","textAlign":"left","top":"25%","lineHeight":"2em"});
        $(".next").fadeToggle(1000);
        $(".next2").fadeToggle(1000);
        $(".next3").fadeToggle(1000);
        $(".next").css("right","5%");
        $(".next2").css("right","35%");
        $(".next3").css("right","20%");
        $(".next").text("C");
        $(".next2").text("A");
        $(".next3").text("B");
    }
    if(imm==13){
        $(".say").fadeToggle(1000);
        $(".next").fadeToggle(1000);
        $(".next2").fadeToggle(1000);
        $(".txt").html("銷售同時，收到許多消費者的回饋，的確在做某些抉擇可能讓產品製造成本提高，秘書進來詢問下一批產品的原料及加工方法你會選擇?");
        $(".txt").css({"position":"absolute","left":"45%","top":"0"});
        $(".txt2").html("(A)繼續當綠色企業且繼續推廣綠色經濟。<br>(B)改變計畫，選擇成本較低的作法。");
        $(".txt2").css({"left":"40%","textAlign":"left","top":"45%","width":"45%"});
        $(".table_img").fadeToggle(1000);
        $(".table_img").css({"height":"110%","width":"auto","top": "0%","left": "0"});
        $(".table_img").attr("src",ttable[2]);
        $(".next").css("right","20%");
        $(".next2").css("right","5%");
        $(".next").text("A");
        $(".next2").text("B");
    }
    if(imm==14){
        $(".bg_start").css("top","-10%");
        $(".black").css("backgroundColor","#FFBB66");
        $(".say").fadeToggle(1000);
        $(".txt").html("在永續發展上,有許多地方難以突破，像是經濟、物質上存在許多問題...但依舊有人為下一個世代著想,推廣永續發展是環環相扣的,不僅僅是生活圈,而是整個生態都會被影響。");
        $(".say").css({"height":"50%","top":"25%","backgroundColor":"rgba(225,225,225,0.7)"});
        $(".txt").css({"left":"10%","width":"80%","marginTop":"10px"});
    }
}
function back(){
    //$("#bg_start").fadeToggle(500);
    $("#bg_start").attr("src",game_img[--imm]);
    //$("#bg_start").fadeToggle(500);
    $(".user_name").hide();
    $(".txt").empty();
    $(".say").hide();
    $(".table_img").hide();
    $(".bg_next").hide();
    $(".bg_back").hide();
    //alert(imm);
    if(imm==6){
        $(".bg_next").show();
    }
    if(imm==7||imm==8){
        $(".bg_next").show();
        $(".bg_back").show();
    }
    if(imm==9){
        $(".bg_back").show();
        $(".say").show();
        $(".txt").html("此時的你選擇與___加工廠合作。");
    }
}
function again(x){
    if(imm==4){
        alert("嗯...不再考慮一下嗎?");
    }
    if(imm==9){
        alert("這樣符合綠色經濟嗎.....?");
    }
    if(imm==10){
        alert("浪費食物...好嗎?還有生活更辛苦的人...");
    }
    if(imm==11){
        alert("雖然多賣了一些商品出去...但是消費者了解環境友善的想法嗎?");
    }
    if(imm==12){
        if(x==2)alert("雖然多了一些植物但是好像對公司影響不大?");
        if(x==3)alert("每天不用洗碗很方便...但是樹有那麼多嗎?");
    }
    if(imm==13){
        alert("可以賺到很多錢，但是生態圈好像越來越糟糕了...北極熊都去哪裡了?");
    }
}