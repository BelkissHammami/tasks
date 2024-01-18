//fonction ajoutpersonne
//vaccine
// supprimer on cliquant sur le bouton rouge
let input =document.querySelector(".input")
let enregistre=document.querySelector("#enregistré")
let vaccine=document.querySelector("#vaccinés")
let button_eng=document.querySelector("#button_eng")
let add_button=document.querySelector("#add_button")
let error=document.querySelector(".error")
let button_vac=document.querySelector("#button_vac")
error.style.display="none"
add_button.addEventListener("click",ajouter_eng)
button_vac.addEventListener("click",supprimer)
//fct pour ajouter une personne a la liste enregistrer
function ajouter_eng(){
    let t=input.value
    
    if(t==""){
        error.style.display = "inline"
        input.style.borderColor="red"
        return
    }
    error.style.display = "none"
    input.style.borderColor="black"

    // ajout 
    
    let li=document.createElement("li")
    let button=document.createElement("button")
    let ul=document.createElement("ul")
    li.innerText=t
    button.innerText= X 
ul.appendChild(li)
ul.appendChild(button)
ul.classList.add("enregistré")
   input.value = ""
    


}
function supprimer(text)
let list=document.querySelectorAll(".li")
for (let i=0;i<=list.length;i++){
    if list[i]==text{
        list[i].remove()
    }
    
}
function ajouter_vac(){
    let name=document.createElement(".li")//donner parmi la liste des personnes enregistrer un nom pour ajouter à la liste des vaccinées
    let V=choose_name(name)
    let li=document.createElement("liV")
    let button=document.createElement("button")
    let ul=document.createElement("ul")
    li.innerText=V
    button.innerText= X 
    button.style.color="red"
ul.appendChild(li)
ul.appendChild(button)
ul.classList.add("enregistré")

}
function choose_name(name){
    let list=document.querySelectorAll(".li")
    for (let i=0;i<=list.length;i++){
        if name=list[i]{
            return list[i]
        }
        
    }
    return "ce nom n'est pas enregistré"
}



