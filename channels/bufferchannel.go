package main

import "fmt"

// 向缓存Channel的发送操作就是向内部缓存队列的尾部插入元素，接收操作则是从队列的头部
// 删除元素。如果内部缓存队列是满的，那么发送操作将阻塞直到因另一个goroutine执行接收
// 操作而释放了新的队列空间。相反，如果channel是空的，接收操作将阻塞直到有另一个
// goroutine执行发送操作而向队列插入元素
func main()  {
	//ch := make(chan string, 3)
	//ch <- "A"
	//ch <- "B"
	//fmt.Println(cap(ch)) //内部缓存容量 3
	//fmt.Println(len(ch)) // 内部有效元素个数 2

	fmt.Println(mirroredQuery())

}

// 并发地向三个站点发出请求,分别将收到的响应发送到带缓存channel，最后只返回第一个收到的响应
// 如果我们使用了无缓存的channel，那么两个慢的goroutines将会因为channel无法接收而被永远阻塞。
// 这种情况，称为goroutines泄漏,泄漏的goroutines并不会被自动回收
func mirroredQuery() string {
	responses := make(chan string, 3)
	go func() {responses <- request("www.baidu.com") }()
	go func() {responses <- request("www.google.com") }()
	go func() {responses <- request("www.taobao.com") }()
	return <- responses
}

func request(hostname string)(response string){
	response = hostname
	return
}