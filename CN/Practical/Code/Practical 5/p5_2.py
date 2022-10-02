k=int(input("No of Part: "))
m=int(input("Enter no of bit in one part: "))
dataword=[]
sum="0"

#Sender Side Process
print("====Enter Data At Sender Side====")
for i in range(k):
    d=input("Data "+str(i+1)+": ")
    sum=bin(int(sum,2)+int(d, 2)).replace("0b", "")
    dataword.append(d)
print("Sender side Data: ",dataword)
print("Sum is: ",sum)
while(True):
    if(len(sum)>m):
        l=len(sum)-m
        sum = bin(int(sum[:l],2)+int(sum[l:],2)).replace("0b","")
    else:
        break
print("Wrap Sum is: ",sum)
checksum=""
for i in sum:
    if(i=='1'):
        checksum=checksum+"0"
    else:
        checksum=checksum+"1"
print("Checksum is: ",checksum)

# Receiver Side Process
print("====Enter Data At Receiver Side====")
for i in range(k):
    d=input("Data "+str(i+1)+": ")
    dataword[i]=d
print("Receiver Side Data is: ",dataword)
dataword.append(checksum)
sum="0"
for i in range(len(dataword)):
    sum=bin(int(sum,2)+int(dataword[i],2)).replace("0b","")
if(len(sum)>m):
    l=len(sum)-m
    sum = bin(int(sum[:l],2)+int(sum[l:],2)).replace("0b","")
f=1
result=""
for i in sum:
    if(i=='1'):
        result=result+"0"
    else:
        f=0
        result=result+"1"
if(f==1):
    print("Data is Correct")
    print("Original Data is: ",dataword[0:len(dataword)-1])
else:
    print("!Data is Corrupted")
print("Result is: ",result)