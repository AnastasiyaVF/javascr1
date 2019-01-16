
let images = document.querySelectorAll('img');

let big1 = document.querySelector('.big_picture1');
let big2 = document.querySelector('.big_picture2');

big1.style.display = "none";
big2.style.display = "none";

let small1 = document.querySelector('.small_picture1');
let small2 = document.querySelector('.small_picture2');
let small3 = document.querySelector('.small_picture3');


images.forEach(function(elem) {
    console.log(elem)
    if ((elem.className!=="small_picture3")&&(elem.className!=="big_picture1")&&(elem.className!=="big_picture2")){
        elem.addEventListener('click', function(){
            if(elem.className ==="small_picture1"){
                big1.style.display = "block";
                // elem.style.display = "none"
            }
            if(elem.className ==="small_picture2"){
                big2.style.display = "block";
                // elem.style.display = "none"
            }
            
        })
    } else if ((elem.className==="big_picture1")||(elem.className==="big_picture2")){
        elem.addEventListener('click',function(){
            if(elem.className ==="big_picture1"){
               elem.style.display = "none";
            //    small1.style.display = "block";
            }
            if(elem.className ==="big_picture2"){
                elem.style.display = "none";
                // small2.style.display = "block";
            }
        })
    } else if (elem.className ==="small_picture3") {
        elem.addEventListener('click',function(){
            console.error('It was error!');
        })
    }
})
