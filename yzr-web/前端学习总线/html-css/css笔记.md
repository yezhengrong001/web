### 选择器：
	1.id选择器：#idname
	2.class选择器：.classname
	3.标签选择器（分组选择器）：tagsname
	4.通用选择器：*
	5.组合器：
		1.空格：后代选择器
		2.+：相邻兄弟选择器
		3.`>`：子选择器
		4.`~`：通用兄弟选择器
	6.伪类：
		1.锚伪类：<element>:link :visited :hover(常用) :acctive
		2.:first-child 伪类与指定的元素匹配：该元素是另一个元素的第一个子元素。
		3.:lang 伪类允许您为不同的语言定义特殊的规则。
			示例：<html>
					<head>
					<style>
					q:lang(no) {
					  quotes: "~" "~";
					}
					</style>
					</head>
					<body>

					<p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p>

					</body>
					</html>
		:active	a:active	选择活动的链接。
		:checked	input:checked	选择每个被选中的 <input> 元素。
		:disabled	input:disabled	选择每个被禁用的 <input> 元素。
		:empty	p:empty	选择没有子元素的每个 <p> 元素。
		:enabled	input:enabled	选择每个已启用的 <input> 元素。
		:first-child	p:first-child	选择作为其父的首个子元素的每个 <p> 元素。
		:first-of-type	p:first-of-type	选择作为其父的首个 <p> 元素的每个 <p> 元素。
		:focus	input:focus	选择获得焦点的 <input> 元素。
		:hover	a:hover	选择鼠标悬停其上的链接。
		:in-range	input:in-range	选择具有指定范围内的值的 <input> 元素。
		:invalid	input:invalid	选择所有具有无效值的 <input> 元素。
		:lang(language)	p:lang(it)	选择每个 lang 属性值以 "it" 开头的 <p> 元素。
		:last-child	p:last-child	选择作为其父的最后一个子元素的每个 <p> 元素。
		:last-of-type	p:last-of-type	选择作为其父的最后一个 <p> 元素的每个 <p> 元素。
		:link	a:link	选择所有未被访问的链接。
		:not(selector)	:not(p)	选择每个非 <p> 元素的元素。
		:nth-child(n)	p:nth-child(2)	选择作为其父的第二个子元素的每个 <p> 元素。
		:nth-last-child(n)	p:nth-last-child(2)	选择作为父的第二个子元素的每个<p>元素，从最后一个子元素计数。
		:nth-last-of-type(n)	p:nth-last-of-type(2)	选择作为父的第二个<p>元素的每个<p>元素，从最后一个子元素计数
		:nth-of-type(n)	p:nth-of-type(2)	选择作为其父的第二个 <p> 元素的每个 <p> 元素。
		:only-of-type	p:only-of-type	选择作为其父的唯一 <p> 元素的每个 <p> 元素。
		:only-child	p:only-child	选择作为其父的唯一子元素的 <p> 元素。
		:optional	input:optional	选择不带 "required" 属性的 <input> 元素。
		:out-of-range	input:out-of-range	选择值在指定范围之外的 <input> 元素。
		:read-only	input:read-only	选择指定了 "readonly" 属性的 <input> 元素。
		:read-write	input:read-write	选择不带 "readonly" 属性的 <input> 元素。
		:required	input:required	选择指定了 "required" 属性的 <input> 元素。
		:root	root	选择元素的根元素。
		:target	#news:target	选择当前活动的 #news 元素（单击包含该锚名称的 URL）。
		:valid	input:valid	选择所有具有有效值的 <input> 元素。
		:visited	a:visited	选择所有已访问的链接。
	7.伪元素：
		::after	p::after	在每个 <p> 元素之后插入内容。
		::before	p::before	在每个 <p> 元素之前插入内容。
		::first-letter	p::first-letter	选择每个 <p> 元素的首字母。
		::first-line	p::first-line	选择每个 <p> 元素的首行。
		::selection	p::selection	选择用户选择的元素部分。
### 背景：
	background
	background-color
	background-image
	background-position
	background-repeat
	background-attachment
	opacity 具有继承性
### 单位
	1.绝对长度:
|单位	|描述						|
|-------|---------------------------|
|cm		|厘米						|
|mm		|毫米						|
|in		|英寸 (1in = 96px = 2.54cm)	|
|px *	|像素 (1px = 1/96th of 1in)	|
|pt		|点 (1pt = 1/72 of 1in)		|
|pc		|派卡 (1pc = 12 pt)			|

	2.相对单位

|单位	|描述	|						
|-------------|--------------------------------|
|em	|相对于元素的字体大小（font-size）（2em 表示当前字体大小的 2 倍）|																	|
|ex	|相对于当前字体的 x-height(极少使用)|																	|
|ch	|相对于 "0"（零）的宽度|																	|
|rem	|相对于根元素的字体大小（font-size）|																	|
|vw	|相对于视口*宽度的 1%|																	|
|vh	|相对于视口*高度的 1%|																	|
|vmin	|相对于视口*较小尺寸的 1％|																	|
|vmax	|相对于视口*较大尺寸的 1％|																	|
|%		|相对于父元素														|

### CSS 拥有如下轮廓属性：

	1.outline-style
	2.outline-color
	3.outline-width
	4.outline-offset
	5.outline
### 定位position
	1.relative
	2.absolute
	3.fixed
	4.sticky
	
	```css
	
		div.sticky {
		  position: -webkit-sticky; /* Safari */
		  position: sticky;
		  top: 0;
		  background-color: green;
		  border: 2px solid #4CAF50;
		}
	```