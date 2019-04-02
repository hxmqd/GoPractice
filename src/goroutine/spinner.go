package main

import (
	"fmt"
	"time"
)

func main(){
	go spinner(300 * time.Millisecond)
	const n = 45
	fibN := fib(n)
	fmt.Printf("\rFibonacci(%d) = %d\n", n, fibN)
}

func spinner(delay time.Duration){
	strs := []string{".","..","...","....",".....","....."}
	for{
		for _, s:= range strs {
			fmt.Printf("\r%s", s)
			time.Sleep(delay)
		}
	}
}

func fib(x int) int {
	if x < 2 {
		return x
	}
	return fib(x - 1) + fib(x - 2)
}