const form = document.querySelector("#form")
const btn = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwgK6HsOrfxLJIf-QOlNDtihaLSZSWxKz30CO1p2emIm0S4KUJUR6riwfsUEf0MRW6_/exec'

form.addEventListener('submit', e => {
  e.preventDefault()
  btn.disabled = true
  btn.innerHTML = "Loading..."

  console.log(form)
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => { 
      btn.disabled = false
      btn.innerHTML = "Good"

    alert('ОТПРАВИТЬ?', response) })
    .catch(error =>{
      btn.disabled = false
      btn.innerHTML = "Good Luck"
      
      alert('Error!', error.message)})
})