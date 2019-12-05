// #1
var a1=14,b1=76,sum1;

function Sum2Chisel(a,b) {
    return sum1=a+b;
}
Sum2Chisel(a1,b1);
console.log(sum1);


// #2
var a2=10,b2=70,sum2;

var Sum2Chisel2 = function(a,b)
{return sum2=a+b}
Sum2Chisel2(a2,b2);
console.log(sum2);


// #3
var a3=15,b3=76,sum3;

Sum2Chisel3 = (a,b) => sum3=a+b
Sum2Chisel3(a3,b3);
console.log(sum3);


// #4
var a4=15,b4=76,c4=34,z4=43,sum4=0;

function SumAllArgum()
{
    let i;
    for(i=0;i<arguments.length;i++)
    {
        sum4=sum4+arguments[i];
    }
    return sum4;
}
SumAllArgum(a4,b4,c4,z4);
console.log(sum4);


// #5
var a5=41,b5=43,sum5;

function FunKonstr(a,b)
{
    this.a=a;
    this.b=b;
    this.Sum = function()
    {
        sum5=this.a+this.b;
    }
}

var ekz1 = new FunKonstr(a5,b5)
ekz1.Sum()
console.log(sum5)


// #6
var a6=23,b6=43,sum6;
function SumNum6 (a) 
{
    return function (b) {return a+b; };
}
var sum6 = SumNum6(a6);
console.log (sum6(b6));


// #7
function Recurs(n)
{
    if(n>1)
    {
        return n * Recurs(n - 1)
    }
    else return 1;
}
console.log(Recurs(6));


// #8
function Recurs(n)
{
    if(n>1)
    {
        return n * Recurs(n - 1)
    }
    else return 1;
}
function Call(fun)
{
    return console.log(fun)
}
Call(Recurs(5));


// #9

function Tamagochi()
{
    var name,age;

    this.setName = function(newName)
    {
        name=newName;
    };
    
    this.setAge = function(newAge)
    {
        age=newAge;
    };

    this.getNameAndAge = function()
    {
        return 'I am '+name+' and I am '+age+' years old';
    }
}

var tamagoch1 = new Tamagochi();
tamagoch1.setName("Tomi");
tamagoch1.setAge("19");

console.log(tamagoch1.getNameAndAge());