document.getElementById('add-item').addEventListener('click', addTodo)
document.querySelector('.start').addEventListener('click', function () {
  console.log('done')
  console.log(this.parentElement)
  this.parentElement.parentElement.style.display = 'none'
})

function addTodo() {
  var todoItem = document.getElementById('add-field').value
  console.log(todoItem)
  var todoBlock = `<div class="display-item"><p class="todo-content"><span class="start"><i class="fas fa-check"></i></span>${todoItem}<span class="end"><i class="fas fa-times"></i></span></p>`
  var displayContainer = document.getElementById('display-container')
  console.log(displayContainer.innerHTML)
  displayContainer.innerHTML += todoBlock
}
