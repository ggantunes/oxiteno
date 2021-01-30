window.onload = ()=>{
  let labels = document.querySelectorAll('label')    
  let names = [...labels].map((element) => element.innerText)
  
  let ul = document.querySelector('#u_list')
  names.forEach((name) =>{
    let list = document.createElement('li')
    list.innerText = name
    ul.appendChild(list)
  })  
}
