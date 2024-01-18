//convertion d'un entier en chaine:
function entierEnChaine(x)

if Number.isInteger(x){
    var chaine=x.tostring();
      console.log(chaine);
      return(chaine)
    }
else{
    console.log("erreur de conversion");
}

 
//somme des elemnets d"un tableau
function sommeTab(T)
 let n=T.length;
 let somme =0;

 for (let i=0;i<n+1;i++){
     if T[i]>0{
        s=s+T[i];

     }
     else{
        s=s-T[i];
     }
    }
    console.log(s);
    return(s)


//moyenne tab
function MoyenneTab(T)
let n =T.length();
let m=T[1].length();
return(sommeTab(T)/n)
//exercice4
function getUserByid(T,id)
let n=T.length();
for (let i=0; i<=n;i++){
   
        if T[i][0]==id{
            return(T[i])
        }
   
}
return("pas d'utilisation de cet ID")

//ex5
function sortUser(user){
    let test=true
    while (test=true){
        test=false
        let l=[]
        for (let i=0;i<=user.length;i++){
            if user[i][4]>user[i+1][4]{
                user[i],user[i+1]=user[i+1],user[i]
                test=true
            }
        }
    }
    for (let i=0;i<=user.length;i++){
        l.append(user[i][4])
    }
    return l
}
   