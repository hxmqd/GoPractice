// 单例模式
package singleton

import (
	"fmt"
	"sync"
)

type Single struct {
}

func (s *Single) ShowMessage() {
	fmt.Println("hello world!")
}

// 懒汉式，协程不安全
var single1 *Single

func GetInstance1() *Single{
	if single1 == nil {
		single1 = new(Single)
	}
	return single1
}

// 懒汉式，协程安全
var single2 *Single
var mux sync.Mutex
func GetInstance2() *Single {
	mux.Lock()
	if single1 == nil {
		single1 = new(Single)
	}
	mux.Unlock()
	return single1
}

// 饿汉式, 协程安全
 var single3 = new(Single)
 func GetInstance3() *Single{
 	return single3
 }

 // 双检锁/双重校验锁(double-checked locking)
var single4 *Single
var mux1 sync.Mutex
func GetInstance4() *Single {
	if single4 == nil {
		mux1.Lock()
		if single4 == nil {
			single4 = new(Single)
		}
		mux1.Unlock()
	}
	return single4
}

// sync.Once实现
var single5 *Single
var once sync.Once
func GetInstance5() *Single {
	once.Do(func(){
		single5 = &Single{}
	})
	return single5
}




