
;<Program title>

jmp start

;data


;code
start: nop

lxi h, 3000H
mov b, m
inx h
mov a, m
sub b
mvi b, 00H
jnc loop
inr b
loop: sta 3002H
mov a, b
sta 3003H

hlt