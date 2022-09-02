

const log = event => {
    
  const tr = document.createElement('tr')    
let td = document.createElement('td')
    td.innerHTML = event.key
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = event.code
    tr.appendChild(td)
    
    document.addEventListener('keydown', event => {
      td.innerHTML = 'keydown'
    })

    document.addEventListener('keyup', event => {
      td.innerHTML = 'keyup'
    })

    td = document.createElement('td')
    
    
  
    tr.appendChild(td)
    
    document.querySelector('tbody').append(tr)
  }
  
  document.addEventListener('DOMContentLoaded', () => {  
    document.addEventListener('keydown', event => {
      log(event)
    })
  })


