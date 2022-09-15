flag = "01111110"
data=list(input("Enter Data: "))
print("Flag is: ",flag)
print("Original Data is: ","".join(data))
for i in range(0,len(data)):
    if(data[i]=='1'):
        f=1
        for j in range(1,6):
            if(flag[j]!=data[i]):
                f=0
                break
            i=i+1
        if(f==1):
            data.insert(i-1,'0')
print("Bit Stuff Data is: ","".join(data))