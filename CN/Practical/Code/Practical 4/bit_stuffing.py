flag = "01111110"
data=list(input("Enter Data: "))
print("Flag is: ",flag)
print("Original Data is: ","".join(data))
for i in range(0,len(data)):
    if(data[i]=='1'):
        f=1
        for j in range(1,6):
            if(flag[j]!=data[i] and i<len(data)):
                f=0
                break
            i=i+1
        if(f==1):
            if(data[i]!='0'):
                data.insert(i,'0')
print("Bit Stuff Data is: ","".join(data))
