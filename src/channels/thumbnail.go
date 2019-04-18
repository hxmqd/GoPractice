package main

import "log"

// imageFile reads an image from infile and writes a thumbnail-size version of it in the same directory
func imageFile(infile string)(string, error){
	//	TODO
	return "", nil
}

// 循环迭代一些图片文件名，并为每一张图片生成一个缩略图
func makeThumbnails(filenames []string){
	for _, f := range filenames {
		if _, err := imageFile(f); err != nil {
			log.Println(err)
		}
	}
}

// 错误的协程并发方式，函数未等到其他协程执行结束就返回了
func makeThumbnails2(filenames []string){
	for _, f := range filenames{
		go imageFile(f)
	}
}

// 没有直接的方法能够等待goroutine执行完成，但可以通过channel发送事件的方式向外部调用协程报告完成情况
func makeThumbnails3(filenames []string){
	ch := make(chan struct{})
	for _, f:= range filenames{
		// 将f的值作为一个显式的变量传给了函数，而不是在循环的闭包中声明
		// 当新的goroutine开始执行匿名函数时，for循环可能已经更新了f并且开始了另一轮的迭代或者已经结束了整个循环，
		// 所以当这些goroutine开始读取f的值时，它们所看到的值可能是slice迭代之后的元素或者最后一个元素了
		go func(f string) {
			imageFile(f)
			ch <- struct{}{}
		}(f)
	}

	// wait for goroutines to complete
	for range filenames {
		<- ch
	}
}

func makeThubnails4(filenames []string) error {
	errors := make(chan error)

	for _, f := range filenames {
		go func(f string) {
			_, err := imageFile(f)
			errors <- err
		}(f)
	}

	// incorrect
	// 当它遇到第一个非nil的error时会直接将error返回到调用方，使得没有一个goroutine去清空errors channel。
	// 这样剩下的worker goroutine在向这个channel中发送值时，都会永远地阻塞下去
	for range filenames{
		if err := <- errors; err != nil {
			return err
		}
	}

	return nil
}

// 最简单的解决办法就是用一个具有合适大小的buffered channel
// ch := make(chan item, len(filenames))