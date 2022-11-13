
;<Program title>

jmp start

;data


;code
start: nop

lda 49H
mov b,a
lda 12H
sub b
sta 49664

hlt