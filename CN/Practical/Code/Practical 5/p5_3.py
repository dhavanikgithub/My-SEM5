def xor(a, b):
    result = []
    for i in range(len(b)):
        if a[i] == b[i]:
            result.append('0')
        else:
            result.append('1')
    return ''.join(result)

def divmodulo(data,dim):
    index=0
    while(True):
        if(data[index]=="0"):
            index=index+1
        else:
            break
    r = xor(data[index:index+len(dim)],dim)
    c=0
    index=index+len(dim)
    for i in range(len(r)):
        if(r[i]=='0'):
            r=r+data[index]
            index=index+1
            c=c+1
        else:
            break
    r=r[c:]
    while(index<len(data)):
        r = xor(r,dim)
        c=0
        for i in range(len(r)):
            if(r[i]=='0'):
                if(index<len(data)):
                    r=r+data[index]
                    index=index+1
                    c=c+1
                else:
                    return r
            else:
                break
        r=r[c:]
    r=xor(r,dim)
    return r

#Process at Sender Side
data=input("Enter Data at Sender Side: ")
dim = input("Enter Dim: ")
print("Data is: ",data)
print("Divisor is: ",dim)
crc=""
for i in range(len(dim)-1):
    crc=crc+"0"
dataword=data+crc
sender_reminder = divmodulo(dataword,dim)
print("Dataword+CRC is: ",dataword)
sender_reminder=sender_reminder[len(sender_reminder)%len(crc):]
print("Reminder at Sender side: ",sender_reminder)
codeword = bin(int(dataword,2)+int(sender_reminder,2)).replace("0b","")
print("Codeword is: ",codeword)


#Process At receiver Side
r_data=input("Enter Data at Receiver side: ")
receiver_reminder=divmodulo(r_data,dim)
receiver_reminder=receiver_reminder[len(receiver_reminder)%len(crc):]
print("Reminder at Receiver side: ",receiver_reminder)
if("1" in receiver_reminder):
    print("Something Error with Message")
else:
    print("Message Receive Without Error")
print("Original Data: ",codeword)
print("Recived Data is: ",r_data)