
var jiandan = document.getElementById('jiandan');

var map =document.getElementById('map');

var gamestart =document.getElementById('gamestart');
var gameover =document.getElementById('gameover');
var score =document.getElementById('score');

window.onload=function(){
    gamestart.style.opacity=1;
    gameover.style.opacity=0;
    map.style.opacity=1;
    
}


jiandan.onclick = function(){
    gamestart.style.opacity=0;

}


function minePlane(pos){
var mineImg = new Image();

mineImg.width = 70;
mineImg.height = 70;
mineImg.style.position = "absolute"

mineImg.src = "images/plane_0.png";
mineImg.className = "minePlane";

var left = pos.x - mineImg.width/2;
var top = pos.y - mineImg.height/2;


mineImg.style.left = left +"px";
mineImg.style.top = top +"px";

// 添加到地图
map.appendChild(mineImg);

// 飞机跟随鼠标动
document.



}

minePlane({x:500,y:768});