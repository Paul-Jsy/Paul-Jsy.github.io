import{D as e,S as t,b as n,x as r,y as i}from"./app-2gu-taJy.js";import{t as a}from"./plugin-vue_export-helper-BDNMzG2s.js";var o=JSON.parse(`{"path":"/tutorials/computer-organization/alu/solution.html","title":"ALU 实验参考实现","lang":"zh-CN","frontmatter":{"title":"ALU 实验参考实现","icon":"circle-check","date":"2026-04-04T00:00:00.000Z","category":["计算机组成原理"],"tag":["ALU","Verilog","参考实现"],"order":2,"article":false,"redirectFrom":"/zh/lab/2_alu/2-2_rs.html","description":"下面给出 ALU 实验的一种参考实现，用于完成独立设计后的对照和复盘。","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"ALU 实验参考实现\\",\\"description\\":\\"下面给出 ALU 实验的一种参考实现，用于完成独立设计后的对照和复盘。\\"}"],["meta",{"property":"og:url","content":"https://paul-jsy.github.io/tutorials/computer-organization/alu/solution.html"}],["meta",{"property":"og:site_name","content":"Paul 的技术笔记"}],["meta",{"property":"og:title","content":"ALU 实验参考实现"}],["meta",{"property":"og:description","content":"下面给出 ALU 实验的一种参考实现，用于完成独立设计后的对照和复盘。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-10-14T06:41:31.000Z"}],["meta",{"property":"article:tag","content":"参考实现"}],["meta",{"property":"article:tag","content":"Verilog"}],["meta",{"property":"article:tag","content":"ALU"}],["meta",{"property":"article:published_time","content":"2026-04-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2026-10-14T06:41:31.000Z"}]]},"git":{"createdTime":1791862064000,"updatedTime":1791960091000,"contributors":[{"name":"paul-codex","username":"paul-codex","email":"paul-codex@localhost","commits":3,"url":"https://github.com/paul-codex"}]},"readingTime":{"minutes":0.86,"words":258},"filePathRelative":"tutorials/computer-organization/alu/solution.md","excerpt":"<p>下面给出 ALU 实验的一种参考实现，用于完成独立设计后的对照和复盘。</p>\\n","autoDesc":true}`),s={name:`solution.md`};function c(a,o,s,c,l,u){return e(),r(`div`,null,[o[0]||=i(`p`,null,`下面给出 ALU 实验的一种参考实现，用于完成独立设计后的对照和复盘。`,-1),n(` more `),o[1]||=t(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>module alu(</span></span>
<span class="line"><span>    input  [31:0] dip_sw,   // 输入开关</span></span>
<span class="line"><span>    output [15:0] leds      // 输出 LED 显示结果</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wire [7:0]  op      = dip_sw[31:24];  // 操作码</span></span>
<span class="line"><span>wire [7:0]  unused  = dip_sw[23:16];  // 保留不用</span></span>
<span class="line"><span>wire [7:0]  alu_src1 = dip_sw[15:8];  // 操作数 A</span></span>
<span class="line"><span>wire [7:0]  alu_src2 = dip_sw[7:0];   // 操作数 B</span></span>
<span class="line"><span></span></span>
<span class="line"><span>reg  [15:0] alu_result;               // ALU 运算结果</span></span>
<span class="line"><span>assign leds = alu_result;             // 结果输出到 LED</span></span>
<span class="line"><span></span></span>
<span class="line"><span>always @(*) begin</span></span>
<span class="line"><span>    case (op)</span></span>
<span class="line"><span>        8&#39;h00: alu_result = {op, alu_src1 + alu_src2};        // ADD</span></span>
<span class="line"><span>        8&#39;h01: alu_result = {op, alu_src1 - alu_src2};        // SUB</span></span>
<span class="line"><span>        8&#39;h02: alu_result = {op, alu_src1 &amp; alu_src2};        // AND</span></span>
<span class="line"><span>        8&#39;h03: alu_result = {op, alu_src1 | alu_src2};        // OR</span></span>
<span class="line"><span>        8&#39;h04: alu_result = {op, alu_src1 ^ alu_src2};        // XOR</span></span>
<span class="line"><span>        8&#39;h05: alu_result = {op, ~alu_src1};                  // NOT</span></span>
<span class="line"><span>        8&#39;h06: alu_result = {op, alu_src1 &lt;&lt; alu_src2};       // SLL</span></span>
<span class="line"><span>        8&#39;h07: alu_result = {op, alu_src1 &gt;&gt; alu_src2};       // SRL</span></span>
<span class="line"><span>        8&#39;h08: alu_result = {op, $signed(alu_src1) &gt;&gt;&gt; alu_src2};  // SRA</span></span>
<span class="line"><span>        8&#39;h09: alu_result = {op, (alu_src1 &lt;&lt; alu_src2) | (alu_src1 &gt;&gt; (8 - alu_src2))}; // ROL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 无效 OP：</span></span>
<span class="line"><span>        default: alu_result = {8&#39;hFF, 8&#39;h00};</span></span>
<span class="line"><span>    endcase</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>endmodule</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)])}var l=a(s,[[`render`,c]]);export{o as _pageData,l as default};