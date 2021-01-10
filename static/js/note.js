console.log('Go take some notes bro!');

const form = document.getElementById('form')

const text = document.getElementById('text')

// let copy = document.getElementById('copy')

/*
console.log(copy.parentNode.children[0].innerText)
*/
function copyToClipboard(el) {
  let toCopyText = el.parentNode.children[0].innerText
   //console.log(toCopyText)
   
      //toCopyText.select()
      document.execCommand("copy")
      
      alert(`Copied text ${toCopyText}`)
}

function pass() {
  return undefined
}

function toB64Code(event) {
  event.preventDefault()
  
  //get text 
  const text = document.getElementById('text').value
  
  let result = btoa(text)
  

    let notesList = JSON.parse(localStorage.getItem("notes"))
  
  let newNotesList = [...notesList, result]
  
  localStorage.setItem("notes", JSON.stringify(newNotesList))
  
  
  alert("Note added")
  
  return
}


form.addEventListener("submit", toB64Code)


//localStorage.setItem("notes", JSON.stringify(["jejhdh", "oekxh"]))

