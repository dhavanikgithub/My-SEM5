
;<Program title>

jmp start

;data


;code
start: nop

lhld 3000H
xchg
lhld 3002H
mvi  c, 00H
dad  d
jnc  loop
inr  c
loop:  shld  3004H
mov a, c
sta 3006H

hlt