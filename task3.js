let personinput=document.querySelector("#personinput")
let error=document.querySelector(".error")
let addedperson=document.querySelector("#addedperson")
let button=document.querySelector("#button")
let all=document.querySelector("#all")
error.style.display="none"
button.addEventListener("click",addperson)
personinput.addEventListener("keypress",enter)

function enter(e){
    if(e.key == 'Enter'){
        addperson()
    }
}
//fct pour ajouter une personne
function addperson(){
    let t=personinput.value
    if (t =="" ){
    error.style.display="inline"
    error.style.color="red"
    personinput.style.bordercolor="red"
       return
    }
    error.style.display="none"
    personinput.style.bordercolor="black"
    // ajout
    let div=creat(t)
    let all=document.querySelector("#all")
    all.appendChild(div)
    personinput.value=""
}
//fct de creation
function creat(text){
  let p=document.createElement("person")
  let div=document.createElement("div")
  p.innerText=text
  div.appendChild(p)
  div.classList.add("addedperson")
  return div
}
function modification(oldtext,newtext){
    let liste=document.querySelectorAll("addedperson")
    for (let i=0;i<=liste.length;i++){
         if liste[i]=oldtext{
            list[i].innerText=newtext
            }
        
        }
            return

    }
     