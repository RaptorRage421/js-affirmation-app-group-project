onReady();

function onReady() {
  console.log('Javascript is working!');
}
let fireNumber = 0
let iceNumber = 0

let messageOutput = document.getElementById('messages')

function makeFire() {
console.log('make fire works')
let emojis = document.getElementById('emojis')
emojis.innerHTML += `<span id='fireEmoji'>🔥</span>`
fireNumber ++ 
console.log("number of fire Emojis: ", fireNumber)
messageOutput = ""
}

function makeIce() {
  console.log('make ice works')
  let emojis = document.getElementById('emojis')
emojis.innerHTML += `<span id='iceEmoji'>❄️</span>`
iceNumber ++
console.log("number of ice Emojis: ", iceNumber)
messageOutput = ""
}



//! make adjustments this is just for reference
function handleSubmit(event) {
  console.log('handle submit works...')
  event.preventDefault()
  let affirmationInput = document.getElementById('affirmation').value
  let authorInput = document.getElementById('author').value
  console.log(`incoming affirmation ${affirmationInput} by ${authorInput}`)
  if (fireNumber > iceNumber){
  let tableInfusion = document.getElementById("affirmationLocation")
  tableInfusion.innerHTML += `<tr>
  <td>${affirmationInput}</td>
  <td>${authorInput}</td>
  <td><button onClick="deleteAffirmation(event)">❌</button></td>
</tr>
`
  }
// else {
//   messageOutput = document.getElementById('messages')
//   messageOutput.innerHTML = "NOT ENOUGH 🔥 TO MAKE AFFIRMATIONS"
// }
document.getElementById("affirmation").value = ""
  document.getElementById("author").value = ""
}


function deleteAffirmation(event){
  console.log('deleteTask works')
  console.log(event)
  if (iceNumber > fireNumber){
  let deleteTableRow = event.target.parentElement.parentElement
  deleteTableRow.remove()
  }
}
  