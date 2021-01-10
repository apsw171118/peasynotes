console.log('Hello World!');

function getNotes() {
  let notes = JSON.parse(localStorage.getItem("notes"))
  
  //let notes = Array(localNotes)
  
  notes.forEach(note => {
    
    // get parent node
    let notesContainer = document.getElementById('converted')
    
    // create elements
    let card = document.createElement('div')
    let link = document.createElement('a')
  
    // let bin = document.createElement('img')
    
    link.href = `${note}`
    link.innerText = note
    
   // bin.src = "trash.png"
    
    // add children
    card.classList.add("card")
    card.appendChild(link)
    // card.appendChild(bin)
    
    notesContainer.appendChild(card)
  })
  
  return
  
}

getNotes()

/*
function deleteNote(el) {
  let notes = JSON.parse(localStorage.getItem('notes'))
  
  let newNotes = notes.filter(newNotes =>notes != el.parentNode.children[0].innerText
  )
  localStorage.setItem('notes', newNotes)
 
}
*/
