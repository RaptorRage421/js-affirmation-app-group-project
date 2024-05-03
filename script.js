onReady();

function onReady() {
  console.log('Javascript is working!');
}


function makeFire() {
console.log('make fire works')
let emojis = document.getElementById('emojis')
emojis.innerHTML += "🔥"
}

function makeIce() {
  console.log('make ice works')
  let emojis = document.getElementById('emojis')
emojis.innerHTML += "❄️"
}

//! make adjustments this is just for reference
function handleSubmit(event) {
  console.log('handle submit works...')
  event.preventDefault()
  let affirmationInput = document.getElementById('affirmation').value
  let authorInput = document.getElementById('author').value
  console.log(`incoming affirmation ${affirmationInput} by ${authorInput}`)

  let tableInfusion = document.getElementById("affirmationLocation")
  tableInfusion.innerHTML += `<tr>
  <td>${affirmationInput}</td>
  <td>${authorInput}</td>
</tr>
`

document.getElementById("affirmation").value = ""
  document.getElementById("author").value = ""
}
  //! since these are inputs we need .value
  // let task = document.getElementById("taskInput").value
  // let author = document.getElementById("author").value
  
  // console.log(`Author is: ${author}, task is: ${task})`)
  
  // let taskList = document.getElementById('taskList')
  // console.log('current task list: ', taskList)
  
  // // append text to dom where it goes
  // taskList.innerHTML += `
  
  // <li>
  // <button onClick="deleteTask(event)">❌</button>
  // ${task}  (${author})
  // </li>
  
  // `
  // //selector for the thing that was clicked
  // //use selector to remove the list item (target the parent)
  // //reduce taskCounter by 1
  // //call updateTaskCount to re-render the number on the DOM
  
  
  
  
  // //increment task count by 1
  // taskCount ++
  // updateTaskCount()
  
  // // ! clear the form
  // document.getElementById("taskInput").value = ""
  // document.getElementById("author").value = ""
  
  // }


  // <tr>
  //           <td>You probably got this!</td>
  //           <td>Oscar</td>
  //         </tr>
  //         <tr>
  //           <td>You definitely got this!</td>
  //           <td>Elmo</td>
  //         </tr>
  //         <tr>
  //           <td>Don't forget to delete these three hardcoded table rows!</td>
  //           <td>Abby Cadabby</td>
  //         </tr>