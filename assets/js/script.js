let count = 60
function countDownTimer(){
  count = count - 1
  document.querySelector("#webpage").innerHTML = `<h1>${count}</h1>`
  if(count <= 0){
   window.location.href="https://gamevui.vn"
   return 0
  }
}

setInterval(function(){
 countDownTimer()
},1000);