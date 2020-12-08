// TO DO
document.addEventListener('DOMContentLoaded', function(){
  const list = document.querySelector('ul')
  list.addEventListener('click', function(e){
    e.target.classList.toggle('checked')
  })
  list.addEventListener('click', function(event){
    const li = event.target.parentElement
    console.log(event.target)
    if (event.target.classList.contains('close')){
      li.remove()
    }
  })
})