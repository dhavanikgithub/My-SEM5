fun main()
{
    println("Addition of: 111,2222,-222 is: ${operations('+',111,2222,-222)}")
    println("Subtraction of: 111,2222,-222 is: ${operations('-',111,2222,-222)}")
    println("Multiplication of: 111,2222,-222 is: ${operations('*',111,2222,-222)}")
    println("Division of: 2222,111 is: ${operations('/',2222,111)}")
}
fun operations(op:Char,vararg numArr:Int):Int{
    var result:Int=0
    when(op)
    {

        '+'->{
            for(num in numArr)
            {
                result+=num
            }

        }
        '-'->{
            result=numArr[0]
            for (num in 1 until numArr.size)
            {
                result-=numArr[num]
            }
        }
        '*'->{
            result=1
            for(num in numArr)
            {
                result*=num
            }
        }
        '/'->{
            result=numArr[0]
            for (num in 1 until numArr.size)
            {
                result/=numArr[num]
            }
        }
        else->return -1
    }
    return result
}