let mark = document.querySelector('#mark')
let dot = document.querySelectorAll('.dot')
let unread = document.querySelectorAll('.unread')
let button = document.querySelector("button")
let notification = document.querySelectorAll('.notification')
let newNotif = document.querySelectorAll('.newNotif')
function read(){
  if(unread){
for(i=0; i < unread.length; i++)
  dot[i].classList.remove('unread');

}
if(newNotif){
for(i=0; i < unread.length; i++)
notification[i].classList.remove('newNotif');
}
button.innerHTML = "0";
}
