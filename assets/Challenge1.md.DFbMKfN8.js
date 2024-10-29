import{_ as i,c as a,a2 as e,o as n}from"./chunks/framework.Dinh2P0H.js";const r=JSON.parse('{"title":"Challenge 1 : Try EasyX","description":"","frontmatter":{},"headers":[],"relativePath":"Challenge1.md","filePath":"Challenge1.md"}'),l={name:"Challenge1.md"};function p(h,s,t,k,d,c){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="challenge-1-try-easyx" tabindex="-1">Challenge 1 : Try EasyX <a class="header-anchor" href="#challenge-1-try-easyx" aria-label="Permalink to &quot;Challenge 1 : Try EasyX&quot;">​</a></h1><h2 id="_0xff-easyx是什么-能吃吗" tabindex="-1">0xFF EasyX是什么?能吃吗 <a class="header-anchor" href="#_0xff-easyx是什么-能吃吗" aria-label="Permalink to &quot;0xFF EasyX是什么?能吃吗&quot;">​</a></h2><p><code>EasyX</code>是一个针对<code>C/C++</code>的<code>简单</code>,<code>易上手</code>的图形库.</p><p>学习完它你将可以做出一些<code>画面精美</code>的<code>能接收鼠标信息的</code>小游戏.</p><p><s>(是的,如果你用的是windows系统的控制台,是无法接受鼠标信息的😭)</s></p><p>如果你已经学过了C语言<code>数组</code>、<code>指针</code>、<code>函数</code>、<code>结构体</code>等知识,EasyX的学习对你</p><p>来说将如同其名一样<code>&quot;Easy&quot;</code>.</p><blockquote><p>安装EasyX的教程:<a href="https://easyx.cn/" target="_blank" rel="noreferrer">EasyX官网</a></p><p>官网描述还是挺详细的,这里便不过多赘述</p><p>(推荐使用Visual Studio 2022)</p></blockquote><h2 id="_0x01-简单上手" tabindex="-1">0x01 简单上手 <a class="header-anchor" href="#_0x01-简单上手" aria-label="Permalink to &quot;0x01 简单上手&quot;">​</a></h2><p>接下来是一段演示代码</p><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;graphics.h&gt;</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>我们不必急于去理解每段代码的含义,可以先简单上手玩一玩😏</p><p>告诉我,你看到了什么?<s>(如果你什么也没看到,请检查你的安装是否成功😰)</s></p><p>是不是:</p><blockquote><ol><li>一个黑底弹窗</li><li>一个白色小圆(并且会跟随你的鼠标动哦)</li></ol></blockquote><p>还挺有意思的(对吧😋),接下来就让我(<s>GPT</s>)来告诉你这些是如何实现的吧!</p><h3 id="首先是基本的图形元素" tabindex="-1">首先是基本的图形元素 <a class="header-anchor" href="#首先是基本的图形元素" aria-label="Permalink to &quot;首先是基本的图形元素&quot;">​</a></h3><h4 id="背景-background" tabindex="-1">背景(Background) <a class="header-anchor" href="#背景-background" aria-label="Permalink to &quot;背景(Background)&quot;">​</a></h4><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initgraph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1280</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">720</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>这段代码用于<code>初始化(init)</code>我们的<code>图(graph)形背景</code>,并且我们在这里确定了它的</p><p>大小是<code>1280像素*720像素(pixel)</code>的<code>720p</code></p><h4 id="实心圆-solidcircle" tabindex="-1">实心圆(solidcircle) <a class="header-anchor" href="#实心圆-solidcircle" aria-label="Permalink to &quot;实心圆(solidcircle)&quot;">​</a></h4><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">solidcircle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>这里我们使用的是<code>solidcircle</code>,代表我们需要的是一个实心圆,你也可以试试把</p><p><code>solidcircle</code>改为<code>circle</code></p><p>这里的<code>x</code>,<code>y</code>,<code>100</code>其实含义也很显然(apparent),我们只需要三个参数就可以确定一</p><p>个圆在平面中的位置关系:<code>圆心坐标(横,纵)</code>,<code>半径</code></p><h3 id="如何实现动态交互" tabindex="-1">如何实现动态交互 <a class="header-anchor" href="#如何实现动态交互" aria-label="Permalink to &quot;如何实现动态交互&quot;">​</a></h3><p>如果你只是想在平面上画一个圆,那代码也将很简单,可是这样是不是就少了一点<code>交互性</code></p><p>呢?</p><p>那么,怎样才算是<code>交互</code>呢?我们的生活中其实充满了交互的例子.</p><p>例如,我们在向GPT讨要水课作业答案时,就是在与GPT交互.我们<code>输入</code>合适的提示词,而</p><p>GPT会根据我们输入的内容,<code>输出</code>相应的内容.</p><p>而<code>交互</code>的实现就得益于我们对<code>输入</code>与<code>输出</code>的处理</p><p>在这个示例中,我们<code>输入</code>的信息是<code>鼠标指针(cursor)的坐标</code>,而程序根据这个坐标,<code>输出</code>相应的<code>图形(solidcircle)</code>.</p><p>而这几段代码就是用来接收我们的<code>输入</code>的</p><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExMessage msg;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//定义一个信息(message)变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">peekmessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">msg)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//输入信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">msg.message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WM_MOUSEMOVE</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//判断信息的类型为鼠标移动</span></span></code></pre></div><p>而这几段是来响应我们的<code>输入</code>,并转化为<code>输出</code></p><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取鼠标指针的位置坐标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg.x;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg.y;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//根据获取的坐标,输出图形</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">solidcircle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>另外,我们发现:我们的程序是<code>每 时 每 刻</code>都在进行着<code>输入</code>,<code>输出</code>(<code>交互</code>)的过程 因此,我们还需要一个<code>循环</code>来<code>重复</code>这一<code>交互</code>的过程</p><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//...		</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="细节上的优化" tabindex="-1">细节上的优化 <a class="header-anchor" href="#细节上的优化" aria-label="Permalink to &quot;细节上的优化&quot;">​</a></h3><p>ok🥳,我们已经完成了对这个程序基本框架的搭建,接下来是一些<code>细节上的优化</code></p><h4 id="画面重绘" tabindex="-1">画面重绘 <a class="header-anchor" href="#画面重绘" aria-label="Permalink to &quot;画面重绘&quot;">​</a></h4><div class="language-c++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleardevice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//清空全部画面</span></span></code></pre></div><p>想要了解这段代码的功能,我们不妨采纳<code>减法原理</code>,看看删除掉这段代码会发生什么? 重新运行,我们可以发现小圆留下了一条<code>轨迹</code>😢,而这是我们不希望看到的 为什么会出现这种情况呢?</p><p>因为我们并没有对之前的画面进行<code>清空(clear)</code>,因此而留下了之前的<code>印记</code></p><p>所以我们使用了<code>cleardevice()</code>函数</p><h4 id="画面刷新" tabindex="-1">画面刷新 <a class="header-anchor" href="#画面刷新" aria-label="Permalink to &quot;画面刷新&quot;">​</a></h4><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BeginBatchDraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//放在while循环前</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FlushBatchDraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//放在while循环中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EndBatchDraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//放在while循环后</span></span></code></pre></div><p>我们同样可以使用<code>减法原理</code>来理解这段代码的大致用途</p><p>删去后我们发现(可能比较难发现),画面有闪烁</p><p>我们目前还不必过多了解这三段代码的深层原理,只需要将它们当作一种<code>魔法咒语(magic spell)</code>即可</p><h2 id="_0x02-结语" tabindex="-1">0x02 结语 <a class="header-anchor" href="#_0x02-结语" aria-label="Permalink to &quot;0x02 结语&quot;">​</a></h2><p>本章只是简单地开了个头,后续我们将会对<code>输入输出</code>,<code>循环</code>等进行更加深入的研究,并且尝试着做一些小游戏(期待一下吧😁)</p><p>下面有个<code>评论区</code>,不妨留下你的建议与看法(总不能让它空着吧😭😨)</p>`,56)]))}const E=i(l,[["render",p]]);export{r as __pageData,E as default};
