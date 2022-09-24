flag='01111110'
data_list = list(input("Enter Data: "))
c=0
index=0
print("Flag is: ",flag)
print("Original Data is: "+"".join(data_list))
while (index<len(data_list)):
    if(index<len(data_list)):
        if(data_list[index]=='1' and index==0):
            while (index<len(data_list)):
                if(data_list[index]=='1'):
                    index=index+1
                else:
                    break
    if(index<len(data_list)):
        if(data_list[index]=='0'):
            c=0
            index=index+1
        elif(data_list[index]=='1'):
            c=c+1
            index=index+1
        if(c==6):
            data_list.insert(index-1,'0')
            c=0
print("Bit Stuff Data is: ",flag,"".join(data_list),flag)
