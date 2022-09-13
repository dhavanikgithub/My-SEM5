import java.math.BigInteger

fun main()
{
    print("Enter Number: ")
    var num:BigInteger = readLine()!!.toBigInteger()
    println("Factorial is: ${fact2(num)}")
    println("With using tailrec Factorial is: ${fact(num)}")
}
tailrec fun fact(n: BigInteger, temp: BigInteger = BigInteger("1")): BigInteger {
    return if (n == BigInteger("1")){
        temp
    } else {
        fact(n-BigInteger("1"), temp*n)
    }
}
fun fact2(n: BigInteger, temp: BigInteger = BigInteger("1")): BigInteger {
    return if (n == BigInteger("1")){
        temp
    } else {
        fact(n-BigInteger("1"), temp*n)
    }
}

