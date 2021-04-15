alert('welcome in my home page');
confirm("Do You Have Baby ?");
var old = prompt ('how old are your baby ?');
if(old>18){
  alert('This page is dedicated to children');
}else if(old<18){
  alert('you are welcome');
}

var gender = prompt ('what is your baby gander ? boy or girl');

while (gender !== 'boy' && gender !== 'girl') {
  gender = prompt('Just Enter boy or girl');
}

confirm ('do you like toys?');
var toys  = prompt ('what is your baby toys ?');
var clothes  = prompt ('what is your baby type clothes boy or girl ?');
while (clothes !== 'boy' && clothes !== 'girl') {
  clothes = prompt('Just Enter boy or girl');
}
if (clothes === 'boy') {
  clothes = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0UgTIpQR_B7NhULIWJCC0t85IS33q6FVZlw&usqp=CAU">';
}
else if (clothes === 'girl') {
  clothes = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gmMsETGhlWrzKT8cyPXYEkEaddysjX3iBw&usqp=CAU">';
}
alert('can you evaluate my home page ?');
var evaluate = prompt('what is your evaluate ?')
// console.log(old);
// console.log(gender);
// console.log(toys);
// console.log(clothes);
document.write(evaluate);

// document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunl-jHUZlhAEitsz15FrLoDqejUS2QBvjBA&usqp=CAU">');

var imageNumber = prompt('How Many Image Do You Want Me To Show ?');

for (var i = 0; i < imageNumber; i++) {
  document.write(clothes);
}
