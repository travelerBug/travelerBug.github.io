内置函数 `new` 分配内存。该函数只接受一个参数，该参数是一个任意类型(包括自定义类型)，而不是值，返回指向该类型新分配零值的指针。

```GO

// The new built-in function allocates memory. The first argument is a type,
// not a value, and the value returned is a pointer to a newly
// allocated zero value of that type.
func new(Type) *Type
```

使用 `new` 函数首先会分配内存，并设置类型零值，最后返回指向该类型新分配零值的指针。

```go

package main

import (
	"fmt"
)

func main() {
	num := new(int)
	// 打印出类型的值
	fmt.Println(*num)  // 0
}
```

## 1.1 make 函数

内置函数 `make` 只能分配和初始化类型为 `slice` 、 `map` 或 `chan` 的对象。与 `new` 一样，第一个参数是类型，而不是值。与 `new` 不同， `make` 的返回类型与其参数的类型相同，而不是指向它的指针。结果取决于类型：

- `slice`：size 指定长度。切片的容量等于其长度。可提供第三个参数以指定不同的容量；它不能小于长度。
- `map`：为空映射分配足够的空间来容纳指定数量的元素。可以省略大小，在这种情况下，分配一个小的起始大小。
- `chan`：使用指定的缓冲区容量初始化通道的缓冲区。如果为零，或者忽略了大小，则通道是无缓冲的。

```GO

func make(t Type, size ...IntegerType) Type
```

注意，使用 make 函数必须初始化。例如：

```GO

// slice
a := make([]int, 2, 10)

// map
b := make(map[string]int)

// chan
c := make(chan int, 10)
```

## 1.2 new 和 make 的区别

`new`：为所有的类型分配内存，并初始化为零值，返回指针。

`make`：只能为 `slice` 、 `map` 、 `chan` 分配内存，并初始化，返回的是类型。