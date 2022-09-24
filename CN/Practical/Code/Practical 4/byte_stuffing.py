flag=input("Enter flag: ")
esc_char=input("Enter ESC Character: ")
data=input("Enter Data: ")
byte_stuff=[]
byte_stuff.append(flag)
for i in data:
    if(i==flag or i==esc_char):
        byte_stuff.append(esc_char)
    byte_stuff.append(i)
byte_stuff.append(flag)
print("Flag is: ",flag)
print("ESC is: ",esc_char)
print("Original data is: ",data)
print("ByteStuff Data is: ","".join(byte_stuff))