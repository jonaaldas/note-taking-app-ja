let noteValue = document.querySelector('.add-new-note').addEventListener('blur', getNoteValue);
let addBtn = document.querySelector('.btn').addEventListener('click', createHtmlElements)

//valriables 

 let curentNoteValue ;


// functions
function getNoteValue(){
  curentNoteValue = this.value;
}


//create HTML elements
function createHtmlElements(){
  let div = document.createElement('DIV');
  let p = document.createElement('p');
  let showBtn = document.createElement('button');
  let deleteBtn = document.createElement('button');
  // appendclasses
  div.className = 'note-cont';
  p.className = 'notes';
  p.innerHTML = curentNoteValue;
  showBtn.className = 'show-btn';
  showBtn.innerHTML = 'Show More';
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = 'Delete Note';

  //select note viewer cont
  let noteViewCont = document.querySelector('.note-viewer');
  noteViewCont.appendChild(div)
  let elementsArr  = [p,showBtn,deleteBtn];
  elementsArr.forEach(function(e){
    div.appendChild(e)
  });
}

