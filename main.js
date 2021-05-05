var menulistarray=["Veg-vegetable Pizza",
"Veg-Supreme Pizza", "Paneer-Tikka Pizza", "Margherita Pizza", "Veg extravaganza pizza", 
"Pasta Pizza" ];

function getmenu() {
    var htmldata;
htmldata="<ol class='menulist'>";
menulistarray.sort();
for (var i=0;i<menulistarray.length; i++)
{
    htmldata=htmldata+'<li>'+menulistarray[i]+'</li>';
}
htmldata=htmldata+"</ol>";
document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item() {
    var htmldata;
    var item=document.getElementById("add_item").value;
    menulistarray.push(item);
    menulistarray.sort();
    htmldata="<section class='cards'>";
    for (var i=0;i<menulistarray.length;i++){
        htmldata=htmldata+'<div class="card">'+'<img src="pizzaImg.png"/>'+menulistarray[i]+'</div>';
        }
        htmldata=htmldata+"</section>";
        document.getElementById("display_addedmenu").innerHTML=htmldata;
        
}
