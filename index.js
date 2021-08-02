var randomNum = (Math.random() * 6) + 1;
var num = Math.floor(randomNum);
var image = "dice" + num + ".png";
var source = "images/" + image;
var x = document.getElementsByTagName("img")[0];
x.setAttribute("src",image);


var randomNum2 = (Math.random() * 6) + 1;
var num2 = Math.floor(randomNum2);
var image2 = "dice" + num2 + ".png";
var y = document.getElementsByTagName("img")[1];
y.setAttribute("src",image2);


if(num>num2)
{
    document.getElementsByTagName('h2')[0].innerHTML = " 🚩 Player 1 Wins";

}
else if(num2>num)
{
  document.getElementsByTagName("h2")[0].innerHTML = "🚩 Player 2 Wins";
}
else {
  document.getElementsByTagName("h2")[0].innerHTML = " It's a DRAW !!";
}
