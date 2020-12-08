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
  const todos = []
  for (const todo of todos){
    addItem(todo)
  }
  function addItem(text){
    const newItem = document.createElement('li')
    newItem.innerHTML = `${text} <span class="close">x</span>`
    list.appendChild(newItem)
  }
  document.querySelector('#addBtn').addEventListener('click', function(){
    const inputValue = document.querySelector('#input').value
    addItem(inputValue)
    document.querySelector('#input').value = ''
  })
})