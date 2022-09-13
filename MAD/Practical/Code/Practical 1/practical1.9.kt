fun main() {
    var arrlist = ArrayList<Int>()
    for(i in 0..5)
    {
        print("arr[$i]: ")
        arrlist.add(readLine()!!.toInt())
    }
    var maxNum:Int
    maxNum=arrlist[0]
    for (i in arrlist) {
        if(maxNum<i)
        {
            maxNum=i
        }
    }
    println("Max number is: $maxNum")
}