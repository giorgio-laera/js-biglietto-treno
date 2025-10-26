//creo due variabili per eta e km da percorere
const inputKm = prompt("inserire i km da percorrere");
const inputEtà = prompt("inserire l'età");
// creo due variabili per convertire i prompt in num
const km = parseInt(inputKm);
const età =parseInt(inputEtà);
console.log(km, età);
const priceForKm = 0.21;
const under18=0.2;
const over65=0.4;
let costoKm= NaN;
let sconto= NaN;
let price =NaN;

//calccolo prezzo per km
if (km==0){

    alert("inserire km");
}
else{
  costoKm=km*priceForKm 
}
//calcolo sconto
if(età< 18){ //uder 18
sconto = costoKm*under18;
price = costoKm-sconto;
document.getElementById("priceTiket").innerHTML = price.toFixed(2);
   // alert(price.toFixed(2));
}else if(età >=65){ //over65
    sconto = costoKm*over65;
price = costoKm-sconto;
document.getElementById("priceTiket").innerHTML = price.toFixed(2);

}else{
    price=costoKm
       document.getElementById("priceTiket").innerHTML = price.toFixed(2);

}

