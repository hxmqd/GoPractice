package main

import (
	"io"
	"log"
	"net"
	"os"
)

/* 一个基于无缓存Channels的发送操作将导致发送者goroutine阻塞，直到另一个goroutine在相
同的Channels上执行接收操作，当发送的值通过Channels成功传输之后，两个goroutine可以继
续执行后面的语句。反之，如果接收操作先发生，那么接收者goroutine也将阻塞，直到有另一个
goroutine在相同的Channels上执行发送操作。无缓存Channels有时候也被称为同步Channels */


//当用户关闭标准输入，主goroutine中的mustCopy函数调用会返回，然后调用conn.Close()
//关闭读和写方向的网络连接。关闭网络链接中的写方向的链接将导致server程序收到一个文件
//结束（end-of-file）的信号。关闭网络链接中读方向的链接将导致后台goroutine的io.Copy函
//数调用返回一个read from closed connection（从关闭的链接读） 类似的错误
func main(){
	conn, err := net.Dial("tcp", "localhost:8000")
	if err != nil {
		log.Fatal(err)
	}
	done := make(chan struct{})
	go func() {
		io.Copy(os.Stdout, conn)
		log.Print("done")
		/*消息事件
		有些消息事件并不携带额外的信息，它仅仅是用作两个goroutine之间的同步，这时候我们可
		以用 struct{} 空结构体作为channels元素的类型*/
		done <- struct{}{}
	}()
	mustCopy(conn, os.Stdin)
	conn.Close()
	<-done

}

func mustCopy(dst io.Writer, src io.Reader){
	if _, err := io.Copy(dst, src); err != nil {
		log.Fatal(err)
	}
}
