---
title: RTL 与 Verilog
icon: code
date: 2026-03-31
category:
  - 计算机组成原理
tag:
  - RTL
  - Verilog
order: 3
article: false
redirectFrom: /zh/lab/1_基础与衔接/1-3_RTL与Verilog.html
---

本文用于建立 RTL 设计的基本概念，并整理实验中会用到的 Verilog 语法与设计习惯。

<!-- more -->

::: tip 学习目标
理解 RTL 描述与普通程序的区别，能够读写实验中常见的组合逻辑和时序逻辑。
:::

## RTL 是什么

RTL（Register Transfer Level，寄存器传输级）描述的是数据如何在寄存器之间流动，以及每个时钟周期中对数据执行什么逻辑操作。Verilog 代码最终会被综合成真实电路，因此不能简单地把它当作按顺序执行的软件程序。

设计时可以先回答三个问题：

1. 模块有哪些输入和输出？
2. 哪些逻辑只由当前输入决定？
3. 哪些状态需要跨时钟周期保存？

## 模块与端口

模块是 Verilog 设计的基本边界。下面的模块把 32 位拨码开关的低 16 位连接到 LED：

```verilog
module led(
    input  wire [31:0] dip_sw,
    output wire [15:0] leds
);
    assign leds = dip_sw[15:0];
endmodule
```

`wire` 表示连线，适合由 `assign` 或其他模块输出驱动；需要在过程块中赋值的信号通常声明为 `reg`（SystemVerilog 中更推荐使用 `logic`）。

## 组合逻辑

组合逻辑的输出只取决于当前输入。简单表达式可以使用连续赋值：

```verilog
assign result = a + b;
```

分支较多时，可以使用 `always @(*)`。所有分支都应为输出赋值，避免综合出非预期锁存器：

```verilog
always @(*) begin
    result = 8'h00;
    case (op)
        2'b00: result = a + b;
        2'b01: result = a - b;
        2'b10: result = a & b;
        2'b11: result = a | b;
    endcase
end
```

## 时序逻辑

时序逻辑在时钟边沿更新状态。非阻塞赋值 `<=` 能更准确地表达多个寄存器同时更新：

```verilog
always @(posedge clk or posedge reset) begin
    if (reset)
        value <= 8'h00;
    else if (enable)
        value <= next_value;
end
```

实验中建议遵循：组合逻辑使用阻塞赋值 `=`，时序逻辑使用非阻塞赋值 `<=`。

## 位宽与切片

```verilog
wire [7:0] opcode = dip_sw[31:24];
wire [7:0] src1   = dip_sw[15:8];
wire [7:0] src2   = dip_sw[7:0];
```

`[31:24]` 表示从 32 位信号中选取 8 位。运算时要留意结果位宽、符号扩展和移位规则；有符号运算可使用 `$signed(...)` 明确转换。

## 下一步

完成基础语法后，可以进入 [ALU 设计实验](../alu/design.md)，用操作码选择不同的组合逻辑功能；随后在[寄存器实验](../memory/register.md)中加入时钟和状态。
