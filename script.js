const buttons = document.querySelectorAll(".ripple")

buttons.forEach(button =>{
    button.addEventListener("click", (e) =>{
      const x = e.clientX  
      const y = e.clientY
      const btnTop = e.target.offsetTop
      const btnLeft = e.target.offsetLeft
      const xInside = x - btnLeft
      const yInside = y - btnTop
      const circle = document.createElement("span")
      circle.classList.add("circle")
      circle.style.top = yInside + 'px'
      circle.style.left = xInside + 'px'
      button.appendChild(circle)
      setTimeout(() => circle.remove(), 500)
    })
})