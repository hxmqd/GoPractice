// Copyright 2019 didi. All rights reserved.
// Created by hexiaomin on 2019/4/2.

package main

import (
	"crypto/md5"
	"fmt"
	"html/template"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"
)




func login(w http.ResponseWriter, r *http.Request) {

		t, err := template.ParseFiles("pages/upload.gtpl")
		if err != nil {
			fmt.Printf(err.Error())
		}
		log.Println(t.Execute(w, nil))
}

func main() {
	http.HandleFunc("/file", login) //设置访问的路由
	http.HandleFunc("/upload", upload)
	// 处理/upload 逻辑
	err := http.ListenAndServe(":9090", nil) //设置监听的端口
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

func upload(w http.ResponseWriter, r *http.Request) {
	fmt.Println("method:", r.Method) //获取请求的方法
	if r.Method == "GET" {
		crutime := time.Now().Unix()
		h := md5.New()
		io.WriteString(h, strconv.FormatInt(crutime, 10))
		token := fmt.Sprintf("%x", h.Sum(nil))
		t, _ := template.ParseFiles("pages/upload.gtpl")
		t.Execute(w, token)
	} else {
		r.ParseMultipartForm(32 << 20)
		file, handler, err := r.FormFile("uploadfile")
		if err != nil {
			fmt.Println(err)
			return
		}
		defer file.Close()
		fmt.Fprintf(w, "%v", handler.Header)
		f, err := os.Create("model/"+handler.Filename)
		if err != nil {
			fmt.Println(err)
			return
		}
		defer f.Close()
		io.Copy(f, file)
	}
}


