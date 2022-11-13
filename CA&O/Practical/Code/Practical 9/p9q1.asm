
;<Program title>

jmp start

;data


;code
start: nop

lda  03H
mov  c, a
lda  41H
add  c
sta  1100H

hlt