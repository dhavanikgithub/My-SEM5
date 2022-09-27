no_of_codeword=int(input("Enter no of code word: "))
codeword_bit=int(input("Enter no of bit in one data: "))
codeword=[]
counter=[]
for i in range(0,no_of_codeword):
    print("Enter ",i," Codeword bit: ")
    d=list(input("Enter bit: "))
    codeword.append(d)
print(codeword)
for i in range(0,len(codeword)-1):
    for j in range(i,len(codeword)):
        c=0
        for k in range(0, codeword_bit):
            if(codeword[i][k] != codeword[j][k]):
                c=c+1
        print(c)
        counter.append(c)
print(counter)
