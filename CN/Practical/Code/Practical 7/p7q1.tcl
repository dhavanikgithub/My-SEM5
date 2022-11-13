set ns [ new Simulator ]
set nf [ open p7q1.nam w ]
$ns namtrace-all $nf

set n0 [$ns node]
set n1 [$ns node]
$ns duplex-link $n0 $n1 1Mb 10ms DropTail

proc finish {} {
	global ns nf
	$ns flush-trace
	close $nf
	exec nam out.nam &
	exit 0
}
$ns at 5.0 "finish"
$ns run