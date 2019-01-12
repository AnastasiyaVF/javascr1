var tableElem = document.querySelector('table');
var numbers = [1,2,3,4,5,6,7,8];
var letters = ['A','B','C','D','E','F','G','H'];
var figures = {
    white: {
        king: '&#9812;',
        queen: '&#9813;',
        rook: '&#9814;',
        elephant: '&#9815;',
        horse: '&#9816;',
        pawn: '&#9817;',
    },
    black: {
        king: '&#9818;',
        queen: '&#9819;',
        rook: '&#9820;',
        elephant: '&#9821;',
        horse: '&#9822;',
        pawn: '&#9823;',
    }
}

for (var i=0; i<10; i++) {
    var trElem = document.createElement('tr');
    
    for (var j=0; j<10; j++) {
        var tdElem = document.createElement('td');
        tdElem.style.width ='50px';
        tdElem.style.height ='50px';
        tdElem.style.border ='3px solid black';
        trElem.appendChild(tdElem);
        if ( (i+j)%2 ) {
            tdElem.style.backgroundColor ='brown';
        } else {
            tdElem.style.backgroundColor ='beige'; 
        }
       
    
        if ((i===0)||(i===9)) {
            tdElem.style.backgroundColor ='white';
            tdElem.style.border ='3px solid white';
                     
            if((j>0)&&(j<9)){
                tdElem.innerHTML = letters[j-1]
            }
             if((j>0)&&(j<9)){
                tdElem.innerHTML = letters[j-1]
            }
        }
        /*if ((j===0)||(j===9)) {
            if ((i>0) && (i<9))  {
                trElem.innerHTML = numbers[i-1];
            }
        }*/
       if ((i==1) && ((j===1) || (j===8))) {
        tdElem.innerHTML = figures.white.rook;
       }
       if ((i==1) && ((j==2) || (j===7))) {
        tdElem.innerHTML = figures.white.horse;
       }
       if ((i==1) && ((j==3) || (j===6))) {
        tdElem.innerHTML = figures.white.elephant;
       }
       if ((i==1) && (j==4)) {
        tdElem.innerHTML = figures.white.queen;
       }
       if ((i==1) && (j==5)) {
        tdElem.innerHTML = figures.white.king;
       }
       if ((i==2) && ((j>0)&&(j<9))) {
        tdElem.innerHTML = figures.white.pawn;
       }
       if ((i==7) && ((j>0)&&(j<9))) {
        tdElem.innerHTML = figures.black.pawn;
       }
       if ((i==8) && ((j===1) || (j===8))) {
        tdElem.innerHTML = figures.black.rook;
       }
       if ((i==8) && ((j==2) || (j===7))) {
        tdElem.innerHTML = figures.black.horse;
       }
       if ((i==8) && ((j==3) || (j===6))) {
        tdElem.innerHTML = figures.black.elephant;
       }
       if ((i==8) && (j==4)) {
        tdElem.innerHTML = figures.black.queen;
       }
       if ((i==8) && (j==5)) {
        tdElem.innerHTML = figures.black.king;
       }
      
        if ((j===0)||(j===9)) {
            tdElem.style.backgroundColor ='white';
            tdElem.style.border ='3px solid white';
        }
        tdElem.style.fontSize = '25px';
    }
    tableElem.appendChild(trElem);
}
