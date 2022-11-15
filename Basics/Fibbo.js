function fibbo(num)
{
    let n1=0,n2=1,n3,i;
    console.log(n1);
    console.log(n2);
    for(i=2;i<num;i++)
    {
        n3=n1+n2;
        console.log(n3);
        n1=n2;
        n2=n3;
    }
}
fibbo(10);

//Reverse String
function Reverse(abc)
{
    let newstring="";
    for(let i=abc.length-1;i>=0;i--)
    {
        newstring+=abc[i];
    }
    console.log(newstring);
}
let string="Hello";
Reverse(string);

