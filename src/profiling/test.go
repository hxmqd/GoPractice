package main

import (
	"fmt"
	"log"
	"net/http"
	_ "net/http/pprof"
	"strings"
	"time"
)

func sayHelloName(w http.ResponseWriter, r *http.Request) {
	r.ParseForm() //解析参数，默认是不会解析的
	fmt.Println(r.Form) //这些信息是输出到服务器端的打印信息
	fmt.Println("path", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	fmt.Println(r.Form["url_long"])
	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}
	fmt.Fprintf(w, "Hello astaxie!") //这个写入到w的是输出到客户端的
}

// go tool pprof -http=:1234 http://localhost:8005/debug/pprof/profile?seconds=20
func main(){
	go func() {
		for {
			time.Sleep(10)
		}
	}()
	http.HandleFunc("/", sayHelloName) //设置访问的路由
	err := http.ListenAndServe("0.0.0.0:8005", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
