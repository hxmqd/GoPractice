`ch := make(chan int)`
1. 和map类似，channel也是一个make创建的底层数据结构的引用, channel的零值是nil
2. `ch <- x // 发送语句`
3. `x = <- x // 接收语句`
4. `<- x // 接收语句，结果丢弃`
5. `close(ch) // 用于关闭channel,随后对基于该channel的任何发送操作都会导致panic异常。
对一个已经被close的channel执行接收操作依然可以接受到之前已经成功发送的数据;如果channel中没有数据,则会产生一个零值的数据`
