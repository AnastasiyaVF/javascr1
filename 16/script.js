 
 //Объявляем переменные 
 let basket = [];// массив корзины 
 let btn_sunnrise = document.getElementById ('btn_Sunnrise');
 let btn_sunset = document.getElementById ('btn_sunset');
 let btn_day_light = document.getElementById ('btn_day_light');
 let total = document.getElementById ('total');//сумма

 btn_sunnrise.addEventListener('click', () => { //добавляем в корзину название и цену
   total.innerHTML = '';
   basket.push({name:'Рассвет', price:100})
   ren();
   total.innerHTML = 'Итого:' + summAll();
   total.style.border = '1px solid blue';
   total.style.width = '100px';
 });

 btn_sunset.addEventListener('click', () => {
  total.innerHTML = '';
  basket.push({name:'Закат', price:125})
  ren();
  total.innerHTML = 'Итого:' + summAll();
  total.style.border = '1px solid blue';
  total.style.width = '100px';
});

btn_day_light.addEventListener('click', () => {
  total.innerHTML = '';
  basket.push({name:'Дневное сияние', price:150})
  ren();
  total.innerHTML = 'Итого:' + summAll();
  total.style.border = '1px solid blue';
  total.style.width = '100px';
});


 function summAll () { //считает сумму корзины и возращает ее
   let summ =0;
   basket.forEach((elem) => {
     summ+=elem.price
   })
   return summ;
 }
 
 function ren (){//прорисвываем объект
   const list = document.querySelector('ul');
   list.innerHTML = '';
   basket.forEach((elem) => {
  let listItem = document.createElement ('li');
  listItem.innerHTML= (elem.name + ': ' + elem.price);
  list.appendChild(listItem);
  })
 }


