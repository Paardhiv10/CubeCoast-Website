var x= document.getElementById('scramble');
const scramble3 = ["U", "R", "D", "L", "F", "B", "U'", "R'", "D'", "L'", "F'", "B'", "U2", "R2", "D2", "L2", "F2", "B2"];
//let y = scramble3.join();

function getRndInteger(min, max) {
    var resulttext = "";
    for(var i=0;i<max;i++){
        resulttext = resulttext +' '+ scramble3[Math.floor(Math.random()*18)];
    }
    x.innerHTML = resulttext;
    x.style.color = 'white';
    x.style.textAlign = 'center';
    x.style.fontSize = '40px';
}




