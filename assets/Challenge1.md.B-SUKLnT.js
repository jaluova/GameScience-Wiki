import{_ as i,c as a,a2 as n,o as l}from"./chunks/framework.Dinh2P0H.js";const c=JSON.parse('{"title":"Challenge 1 : Try EasyX","description":"","frontmatter":{},"headers":[],"relativePath":"Challenge1.md","filePath":"Challenge1.md"}'),e={name:"Challenge1.md"};function t(h,s,p,k,d,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="challenge-1-try-easyx" tabindex="-1">Challenge 1 : Try EasyX <a class="header-anchor" href="#challenge-1-try-easyx" aria-label="Permalink to &quot;Challenge 1 : Try EasyX&quot;">​</a></h1><h2 id="_0xff-easyx是什么-能吃吗" tabindex="-1">0xFF EasyX是什么?能吃吗 <a class="header-anchor" href="#_0xff-easyx是什么-能吃吗" aria-label="Permalink to &quot;0xFF EasyX是什么?能吃吗&quot;">​</a></h2><p><code>EasyX</code>是一个针对<code>C/C++</code>的<code>简单</code>,<code>易上手</code>的图形库.</p><p>学习完它你将可以做出一些<code>画面精美</code>的<code>能接收鼠标信息的</code>小游戏.</p><p><s>(是的,如果你用的是windows系统的控制台,是无法接受鼠标信息的😭)</s></p><p>如果你已经学过了C语言<code>数组</code>、<code>指针</code>、<code>函数</code>、<code>结构体</code>等知识,EasyX的学习对你来说将如同其名一样&quot;Easy&quot;.</p><blockquote><p>安装EasyX的教程:<a href="https://easyx.cn/" target="_blank" rel="noreferrer">EasyX官网</a></p><p>官网描述还是挺详细的,这里便不过多赘述</p><p>(推荐使用Visual Studio 2022)</p></blockquote><h2 id="_0x01-简单上手" tabindex="-1">0x01 简单上手 <a class="header-anchor" href="#_0x01-简单上手" aria-label="Permalink to &quot;0x01 简单上手&quot;">​</a></h2><p>接下来是一段演示代码</p><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;graphics.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	initgraph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1280</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">720</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	BeginBatchDraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		ExMessage msg;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">peekmessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">msg)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (msg.message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WM_MOUSEMOVE) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg.x;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg.y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">			cleardevice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">			solidcircle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		FlushBatchDraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	EndBatchDraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>我们不必急于去理解每段代码的含义,可以先简单上手玩一玩😏</p><p>告诉我,你看到了什么?<s>(如果你什么也没看到,请检查你的安装是否成功😰)</s></p><ol><li>一个黑底弹窗</li><li>一个白色小圆(并且会跟随你的鼠标动哦)</li></ol><p>是不是还挺有意思的,那就让我(GPT)来告诉你这些是如何实现的吧!</p><h3 id="首先是基本的图形元素" tabindex="-1">首先是基本的图形元素 <a class="header-anchor" href="#首先是基本的图形元素" aria-label="Permalink to &quot;首先是基本的图形元素&quot;">​</a></h3><h4 id="背景-background" tabindex="-1">背景(Background) <a class="header-anchor" href="#背景-background" aria-label="Permalink to &quot;背景(Background)&quot;">​</a></h4><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initgraph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1280</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">720</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>这段代码用于<code>初始化(init)</code>我们的<code>图(graph)形背景</code>,并且我们在这里确定了它的大小是<code>1280像素*720像素(pixel)</code>的<code>720p</code></p><h4 id="实心圆-solidcircle" tabindex="-1">实心圆(solidcircle) <a class="header-anchor" href="#实心圆-solidcircle" aria-label="Permalink to &quot;实心圆(solidcircle)&quot;">​</a></h4><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">solidcircle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>这里我们使用的是<code>solidecircle</code>,代表我们需要的是一个实心圆,你也可以试试把<code>solidcircle</code>改为<code>circle</code></p><p>这里的<code>x</code>,<code>y</code>,<code>100</code>其实含义也很显然(apparent),我们只需要三个参数就可以确定一个圆在平面中的位置关系:<code>圆心坐标(横,纵)</code>,<code>半径</code></p><h3 id="如何实现动态交互" tabindex="-1">如何实现动态交互 <a class="header-anchor" href="#如何实现动态交互" aria-label="Permalink to &quot;如何实现动态交互&quot;">​</a></h3><p>如果你只是想在平面上画一个圆,那代码也将很简单,可是这样是不是就少了一点趣味呢?</p>`,24)]))}const o=i(e,[["render",t]]);export{c as __pageData,o as default};