
;<Program title>

jmp start

;data


;code
start: nop

lda  1102H
mvi  c, 00H
mov  b, a
lda  40H
add  b
jnc  loop
inr  c
loop:  sta  1105H
mov  a, c
sta  03H

hlt