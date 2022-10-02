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
    for j in range(i+1,len(codeword)):
        c=-1
        for k in range(0, codeword_bit):
            if(int(codeword[i][k]) != int(codeword[j][k])):
                c=c+1
        counter.append(c+1)
print("Minimum Hamming Distance is: ",min(counter))