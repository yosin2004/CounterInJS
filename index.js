const jam = document.getElementById("jam")
const tarh = document.getElementById("tarh")
const p = document.getElementById("p")
const reset = document.getElementById("reset")
let id = 0
jam.onclick = () =>{
  id++
  p.innerHTML = id
}
tarh.onclick = () =>{
    id--
    p.innerHTML = id
  }
  reset.onclick = () => {
      p.innerHTML = 0
      id = 0
  }
