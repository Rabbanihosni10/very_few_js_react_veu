//Callback function
function pakhiBhai(callMe,patro,patri){
    if(patri){
        pakhiBhai(callMe);
    }

}
console.log(pakhiBhai)

function callMe(person){
    console.log("Calling:", person);
}
callMe('Kodu');