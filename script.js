function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="admin" && p==="1234"){
location.href="home.html";
}else{
alert("Wrong");
}
}

function toggleMenu(){
let s=document.getElementById("sidebar");
let o=document.getElementById("overlay");

if(s.style.left==="0px"){
s.style.left="-240px";
o.style.display="none";
}else{
s.style.left="0px";
o.style.display="block";
}
}

function closeMenu(){
document.getElementById("sidebar").style.left="-240px";
document.getElementById("overlay").style.display="none";
}
