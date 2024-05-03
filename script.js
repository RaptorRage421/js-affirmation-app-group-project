onReady();

function onReady() {
  console.log('Javascript is working!');
}
let fireNumber = 0
let iceNumber = 0

let messageOutput = document.getElementById('messages')

function makeFire() {
console.log('make fire works')
let emojis = document.getElementById('fire')
emojis.innerHTML += `<span id='fireEmoji'>🔥</span>`
fireNumber ++ 
console.log("number of fire Emojis: ", fireNumber)
messageOutput.innerText = ""
}

function makeIce() {
  console.log('make ice works')
  let emojis = document.getElementById('ice')
emojis.innerHTML += `<span id='iceEmoji'>❄️</span>`
iceNumber ++
console.log("number of ice Emojis: ", iceNumber)
messageOutput.innerText = ""
}



function handleSubmit(event) {
  console.log('handle submit works...')
  event.preventDefault()
  let affirmationInput = document.getElementById('affirmation').value
  let authorInput = document.getElementById('author').value
  console.log(`incoming affirmation ${affirmationInput} by ${authorInput}`)
  if (affirmationInput.length > 0 && authorInput.length > 0){
  if (fireNumber > iceNumber){
  
    let tableInfusion = document.getElementById("affirmationLocation")
  tableInfusion.innerHTML += `<tr>
  <td>${affirmationInput}</td>
  <td>${authorInput}</td>
  <td><button onClick="deleteAffirmation(event)">❌</button></td>
</tr>
`
document.getElementById("affirmation").value = ""
  document.getElementById("author").value = ""
  }
else {
  messageOutput.innerHTML = "NOT ENOUGH 🔥 TO MAKE AFFIRMATIONS!"
}

}
else {messageOutput.innerHTML = "Need to Enter values for input"}
}


function deleteAffirmation(event){
  console.log('deleteTask works')
  console.log(event)
  if (iceNumber > fireNumber){
  let deleteTableRow = event.target.parentElement.parentElement
  deleteTableRow.remove()
  }
  else {
    messageOutput.innerHTML = "NOT ENOUGH ❄️ TO DELETE!"
}
}
  