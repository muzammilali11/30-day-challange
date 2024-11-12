var inputnote = document.querySelector('#inputNote');
var parent = document.querySelector('#parent');
console.log(parent);

var notesArry = [];


function addNote() {
  //   console.log("addNote()", inputNote.value);
  // basic input validation
  if (inputNote.value.length < 3) {
    alert("Enter correct notes...");
    return;
  }

  //add notes value in NotesArr collection
  //   notesArr.unshift(inputNote.value);
  //   console.log("notesArr", notesArr);

  //   for (var i = 0; i < notesArr.length; i++) {
  //     console.log("hello world" , notesArr[i]);
  //   }

  //create card UI using custom DOM method
  //   parent div
  var alertDiv = document.createElement("div");
  alertDiv.className = "alert alert-primary d-flex justify-content-between";

  var iconDiv = document.createElement("div");
  //   edit icon
  var editIcon = document.createElement("i");
  editIcon.className = "fa-solid btn fa-pen-to-square";
  editIcon.setAttribute("onclick", "editHandler(this)");
  //   delete icon
  var deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid btn fa-trash";
  //   assign delete fucntion
  deleteIcon.setAttribute("onclick", "deleteHandler(this)");

  // append delete icon or edit icon
  iconDiv.append(editIcon);
  iconDiv.append(deleteIcon);

  //   set inputnote value
  alertDiv.innerHTML = inputNote.value;
  //   alertDiv = inputNote.value;
  alertDiv.append(iconDiv);

  //   console.log("alertDiv", alertDiv);
  parent.append(alertDiv);

  inputNote.value = "   ";
}

function deleteHandler(ele) {
    //   console.log("deleteHandler", ele.parentNode.parentNode);
    ele.parentNode.parentNode.remove();
  }
  
  function editHandler(ele) {
      console.log(
        "ele",
        (ele.parentNode.parentNode.firstChild.textContent = "hello world")
      );
  
      console.log(
        (ele.parentNode.parentNode.firstChild.textContent = "HELLO WORLD")
      );
  
    const editPrompt = prompt("Enter edit value");
    ele.parentNode.parentNode.firstChild.textContent = editPrompt;
  }
