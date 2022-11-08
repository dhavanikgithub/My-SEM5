
;<Program title>

jmp start

;data


;code
start: nop

lxi  h, 3000H
mov  b, m
inx  h
mov  a, m
add  b
sta  3002H


hlt