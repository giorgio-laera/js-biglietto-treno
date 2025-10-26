//creo due variabili per eta e km da percorere
const inputKm = prompt("inserire i km da percorrere");
const inputEtà = prompt("inserire l'età");
// creo due variabili per convertire i prompt in num
const km = parseInt(inputKm);
const età =parseInt(inputEtà);
const priceForKm = 0.21
let costokm= NaN
console.log(km, età);

if (km==0){

    alert("inserire km")
}
else{
  costokm=km*priceForKm 
//   alert(costokm)
}
if(età< 18){
    alert("paghi meno")
}else if(età >=65){
       alert("paghi ancora meno")
}else{
       alert("paghi dippiù")
}

