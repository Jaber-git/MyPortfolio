let myLibrary=[];

function book(){
  //the constructor..
  let
}

function addBookToLibrary(){

//do stuff here
var newBook={
  Title:document.getElementById("title").value,
  Author:document.getElementById("author").value,
  Pages:document.getElementById("pages").value,
  Year:document.getElementById("year").value
}
myLibrary.push(newBook);
render();
}
function render(){
document.getElementById("form-list-library-body").innerHTML="";
for(var i=0,i<myLibrary.length,i++){
var MyTr=document.createElement("tr");
  for(var obj in myLibrary[i]){
    var myTd=documen.createElement("td");
   myTd.innerHTML=myLibrary[i][obj];
   myTr.appendChild(myTd);
  }
  var actionTd=document.createElement("td");
  var editBtn=document.createElement("button");
  editBtn.innerHTML="Edit";
  editBtn.setAttribute("class","btn btn-sm btn-primary");
  editBtn.setAttribute("onclick", "editBookInfo("+i+")");
  actionTd.appendChild(editBtn);

}
}
