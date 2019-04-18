// Copyright 2019 didi. All rights reserved.
// Created by hexiaomin on 2019/4/13.

package main

import (
	"encoding/binary"
	"fmt"
)

func main(){

	//奇偶位交换
 	var a = 8
	fmt.Println(a & 0x55555555 <<1 | a &0xaaaaaaaa >>1 )
 	fmt.Printf(string(binary.Size(a)))
}
