// Copyright 2019 didi. All rights reserved.
// Created by hexiaomin on 2019/3/20.

package main

import "errors"

func main(){
if err := test(); err != nil {
 print(err.Error())
}
}


func test() error{
 var err error
 defer func(er *error) {
  *er = errors.New("this have error")
 }(&err)
 return err
}