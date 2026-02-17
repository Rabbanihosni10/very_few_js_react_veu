//callback


function pakhiBhai(callMe,patro,patri){
    console.log('CallMe Perameter',callMe);
    console.log("Value of patro is:", patro);
    if(patri){
        // console.log(callMe);
        callMe(patro);

    }
    else{
        console.log('Or kopal e patri nai!');
    }
}


function callSomeOne(person){
    console.log("Calling",person);
}
callSomeOne('Modu');

pakhiBhai(callSomeOne,'jodu');


// 
// [1,2,3,4,5].map(x=>x+5)


//When a function is called inside another functions argument then its a callback function
