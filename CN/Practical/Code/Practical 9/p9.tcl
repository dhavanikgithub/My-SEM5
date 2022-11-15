set ns [new Simulator]
$ns rtproto DV
set nf [open p9out.nam w]
$ns namtrace-all $nf

proc finish {} {
        global ns nf
        $ns flush-trace
        close $nf
        exec nam p9out.nam
        exit 0
}

for {set i 0} {$i<10} {incr i} {
set n($i) [$ns node]
}

for {set i 0} {$i<10} {incr i} {
$ns duplex-link $n($i) $n([expr ($i+1)%10]) 1Mb 10ms DropTail
}

 
set udp0 [new Agent/UDP]
$ns attach-agent $n(0) $udp0

set cbr0 [new Application/Traffic/CBR]
$cbr0 attach-agent $udp0

set null0 [new Agent/Null]
$ns attach-agent $n(7) $null0

$ns connect $udp0 $null0

$ns rtmodel-at 1.0 down $n(9) $n(8)
$ns rtmodel-at 2.0 up $n(9) $n(8)

$ns at 0.5 "$cbr0 start"
$ns at 4.5 "$cbr0 stop"

$ns at 4.0 "finish"
$ns run
