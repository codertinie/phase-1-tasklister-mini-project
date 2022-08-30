document.addEventListener("DOMContentLoaded", () => {
  // your code here
   let form = document.querySelector("form")
   form.addEventListener("submit", (e) => {
    e.preventDefault()
    handleInput(e.target.new_task_description.value)
    form.reset()
   })
   

  })
function handleInput(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  p.textContent = `${todo}`
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}