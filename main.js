var x =document.querySelector("#icon");
var y =document.querySelector("#upper");

x.addEventListener('click',function () {
if (y.style.display==='none'||y.style.display==='') {
    
y.style.display='block';
    
  } else {
y.style.display='none';
  }
});


