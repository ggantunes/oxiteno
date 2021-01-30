window.onload = ()=>{

  class Formulario {
    constructor(ul, label) {
      this.ul = document.querySelector(ul)
      this.labels = document.querySelectorAll(label)
      this.dataForm = document.querySelector('.data_form')
      this.btnListener()
    }

    btnListener() {
      const btnEnviar = document.querySelector('#enviar')    
      btnEnviar.addEventListener('click', ()=>{        
        this.clearUl()
        this.appendLi()
        let nome = document.querySelector('#nome')
        // nome.setAttribute('class', 'cor_verde')
        nome.toggleAttribute('readonly')
      })

      const bibliografia = document.querySelector('#biblio')
      bibliografia.addEventListener('keyup', ()=>{
        document.querySelector('#contador').innerText = bibliografia.value.trim().length
      })      
    }

    clearUl(){
      this.ul.innerHTML = ''
    }

    getNames() {
      return [...this.labels].map((element) => element.innerText)  
    }

    prepareValue(inputElement) {
      const input = document.querySelector(`.${inputElement}`)
      let val = input.value
      let list = document.createElement('li')
      
      if(input.type == 'checkbox' || input.type == 'radio') {
        val = this.getValues(inputElement)
      }

      return {
        list,        
        val
      }
    }

    getValues(input) {
      let elements = document.querySelectorAll(`.${input}:checked`)
      
      let values = [...elements].map((item) => `${item.value}`)
  
      return values
    }  
    
    appendLi(){
      this.getNames().forEach((name, index) =>{

        const inputElement = this.labels[index].getAttribute('for')
        let {list, val} = this.prepareValue(inputElement)

        list.innerHTML = `${name}: <span>${val}</span>`

        this.ul.appendChild(list)
      })    
    }

  }
  new Formulario('#u_list', 'label')
}
