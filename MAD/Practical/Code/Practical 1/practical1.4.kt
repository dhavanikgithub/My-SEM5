fun main()
{
    print("Enter Number: ")
    var num:Int= readLine()!!.toInt()
    println(if(num%2==0) "Num is Even" else "Num is Odd")
}