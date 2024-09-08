var root = document.querySelector(':root')
var rootStyles = getComputedStyle(root)

var $tag = (a) => document.getElementsByTagName(a)
var $id = (a) => document.getElementById(a)
var $class = (a) => document.getElementsByClassName(a)
var $query = (a) => document.querySelector(a)
var $name = (a) => document.getElementsByName(a)


// 1#>banco/gadget-3
;(function (){
  let valor = $class('quantia')[0]
  let fundo = $id('botoes').children[0]


  let dado = $name('dice-outline')[0]
  dado.addEventListener('click', function() {

      dado.style.backgroundColor = 'var(--cor)'
      dado.style.color = 'var(--padrao)'
      setTimeout(function() {
          dado.style.backgroundColor = 'rgba(0, 0, 0, 0)'
          dado.style.color = 'var(--padrao-reverso)' 
      }, 150)
      
      let aleatorio = (Math.floor(Math.random() * 900) + 100).toFixed(2)
      valor.children[0].textContent = aleatorio
  })


  let eye_icon = $name('eye-outline')[0]
  let eye_cont = 0
  eye_icon.addEventListener('click',function () {
      let blur = fundo.children

      if (eye_cont == 0) {
          eye_icon.style.backgroundColor = 'var(--cor)'
          eye_icon.style.color = 'var(--padrao)'
          for (let c=0; c<blur.length; c++) {
              blur[c].style.filter = 'blur(.15em)'
          }
          eye_cont++
          
      } else {
          eye_icon.style.backgroundColor = 'rgba(0, 0, 0, 0)'
          eye_icon.style.color = 'var(--padrao-reverso)'
          for (let c=0; c<blur.length; c++) {
              blur[c].style.filter = 'blur(0)'
          }
          eye_cont--
      }
      
  })
  
  const quantia = a => valor.children[0].textContent = `${a}` 
  const somar = a => valor.children[0].textContent = (Number(valor.children[0].textContent)+a).toFixed(2)
  const subtrair = a => valor.children[0].textContent = (Number(valor.children[0].textContent)-a).toFixed(2)
  
  let mais = $class('mais')
  let menos = $class('menos')
  
  $class('reset')[0].addEventListener('click', function () {
      quantia('1100.50')
  })
  
  
  function clarear() {
      fundo.style.filter = 'brightness(130%)'
      setTimeout(function() {
          fundo.style.filter = 'brightness(100%)'
      }, 200)
  }

  
  function adiciona(a) {
      clarear()
      mais[a].style.filter = 'brightness(60%)'
      setTimeout(function() {
          mais[a].style.filter = 'brightness(100%)'
      }, 200)

      if (a == 0) {
          somar(0.25)
      } else if (a == 1) {
          somar(1)
      } else if (a == 2) {
          somar(5)
      } else if (a == 3) {
          somar(10)
      } else {
          somar(50)
      }
  }

  function remove(a) {
      clarear()
      menos[a].style.filter = 'brightness(60%)'
      setTimeout(function() {
          menos[a].style.filter = 'brightness(100%)'
      }, 200)

      if (a == 0) {
          subtrair(0.25)
      } else if (a == 1) {
          subtrair(1)
      } else if (a == 2) {
          subtrair(5)
      } else if (a == 3) {
          subtrair(10)
      } else {
          subtrair(50)
      }
  }

  for (let c=0; c<mais.length; c++) {
      mais[c].addEventListener('click', function() { adiciona(c) })
      menos[c].addEventListener('click', function() { remove(c) })
  }

})()
