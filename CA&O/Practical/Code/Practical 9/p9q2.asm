
;<Program title>

jmp start

;data


;code
start: nop

lda  59H
sta  49664
mov  c, a
lda  77H
sta  49665
add  c
sta  49666


hlt