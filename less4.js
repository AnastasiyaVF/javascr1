

/*****************1*********** */

function writeObject(num) {
    var arrNumber = num.split(''); 
    var objNumber = {};
if (arrNumber.length > 3)
{
    console.log("Ошибка")
    return 0;
}
else{

    objNumber['сотни'] = +arrNumber[0]; 
    objNumber['десятки'] = +arrNumber[1]; 
    objNumber['единицы'] = +arrNumber[2]; 
        return objNumber;
        }
    }
    var number = prompt("введите число от 0 до 999");
    var obj = writeObject(number);
    console.log(obj);













    