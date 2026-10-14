const root=document.getElementById('root');
const button=document.getElementById('btn');

console.log(root);
console.log(button);

function getData(){
  alert("hii");
}

button.addEventListener('click',getData);