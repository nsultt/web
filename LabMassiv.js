// #1
let fruits = ["Яблука", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push ("Банан");

// в fruits["Яблука", "Груша", "Апельсин","Банан"] тому що ми додали командою push.
alert (fruits.length); //4


// #2
let n,styles = ["Джаз","Блюз"];

styles.push("Рок-н-рол");
console.log(styles);

n=Math.floor(styles.length/2);
console.log(n);

styles[n]="Класика";
console.log(styles);

console.log(styles.shift());

styles.unshift("Реп","Реггі");
console.log(styles);


// #3
let arr = ["a", "b"];

arr.push (function () {
   alert (this);
})

arr [2] (); //виводе a,b,function () {alert (this);} тому що ми додали функцію в массив яка в свою чергу виводе всі елементи масива;


// #4



// #5
var mas = [];
suminput =() =>
{
    let sum=0,chislo,flag=true;
    while(flag)
    {
        chislo = prompt("Введи число:",);

        if(chislo === "" || chislo === null || isNaN(chislo)===true) 
        {
            flag=false;
        }
        else{
        mas.push(+chislo);
        }
    }
    for(let i=0;i<mas.length;i++)
    {
        sum=sum+mas[i];
    }
    console.log(mas);
    console.log(sum);
}
suminput();


// #5
var flag1=true,flag2=true,mas5 =[],chislo5,sum5=0;
var left,right;
while(flag1)
{
    chislo5 = prompt("Vvedi chislo:",);

    if(chislo5 === "" || chislo5 === null || isNaN(chislo5)===true) 
    {
        flag1=false;
    }
    else{
    mas5.push(+chislo5);
    }
}
for(let i1=0; i1<mas5.length;i1++)
{
    left=mas5[i1];
    while(left!=0)
    {
        right=left%10;
        left=left/10;
        sum5=sum5+right;
        sum5=Math.floor(sum5);
    }
    flag2=true;
}
console.log(mas5);
console.log(sum5);

