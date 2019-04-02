// Copyright 2019 didi. All rights reserved.
// Created by hexiaomin on 2019/3/27.

package main

import (
	"fmt"
	. "github.com/dmitryikh/leaves"
)

func main(){

	model, err := XGEnsembleFromFile("model/xgboost.model",true)
	if err != nil {
		fmt.Println(err.Error())
		fmt.Println("error")
		return
	}
	result := model.PredictSingle([]float64{1.0, 11.0, 67354.0, 4080.0, 49.38666534423828, 3.0, 1.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1428571492433548, 0.1428571492433548, 9.0, 8.0, 13.0, 12.0, 37.71428680419922, 37.42856979370117, 1800.0, 446.0, 1.0, 17.0, 0.0, 0.0, 56.0, 60.67499923706055, 4.0, 0.9610000252723694, 34.91400146484375, 27.5, 125.04199981689453, 0.0, 59.69200134277344, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 500.0, 1.0, 1.0, 1.0, 2692.0, 11904.0, 0.0, 0.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.4846928024780937E-5, -1.0},0)
	fmt.Println(result)
}