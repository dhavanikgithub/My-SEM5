var str = "dhAvanik"
str = str.toLowerCase();
var arr = new Array("a","e","i","o","u");
var count=0;
for(i in str)
{
    for(j in arr)
    {
        if(str[i]==arr[j])
        {
            count++;
            break;
        }
    }
}
console.log(count)