<template><div><h2 id="取整-rounding" tabindex="-1"><a class="header-anchor" href="#取整-rounding" aria-hidden="true">#</a> 取整(Rounding)</h2>
<p>通过使用一个整形数据，Clipper库已经能够避免因为数值稳定性造成的重大错误；关于数值取整问题和它们可能的解决办法将要在下面进行讨论；
首先需要强调，取整导致点会对他们的本来的理论坐标形成一定程度的偏移；但是，结果的不精确性是可以通过正确的缩放来进行避免的；
Clipper库自身支持可以缩放到一个相对较高精度，它所支持的整形坐标值范围在±0x3FFFFFFFFFFFFFFF (± 4.6e+18)之间。
另一个使用离散数据（相较于使用浮动类型数据）的隐患在于可能在极少数的情况下会造成小的自交情况。在没有缩放的左侧图片中（这里单位为1像素），两个多边形的相交部分被用亮绿色标出；
<img src="https://downloadflies.com/blog-img/clipper_rounding.png" alt="">
一个30倍放大的交点部分下部图片显示图该图其实有很小程度的自交情况。三个黑点标明了实际的交点情况（通过展示它们小数点部分）；红色点显示在取整之后交点的情况。你很容易就会观察到取整让方向变反并且引起了一定程度的小的自交；
<img src="https://downloadflies.com/blog-img/clipper_rounding2.png" alt="">
尽管这些小的自交是不常见的，如果这些被认为是有必要被考虑的，最好使用<strong>CleanPolygon</strong>的属性来对这种情况进行清除；（将Clipper对象的StrictlySimple属性设定为true同样会对这类自交产生影响但是小的多余的人为引起的错误方向的多边形仍然是不可避免的）
在最后的例子中，左侧的简单多边形仍然有轻微的自交。但是，在裁剪算法中处理时，算法将其当做仅仅是“触碰到”，而不是自交到右侧线段上去（虽然仅仅只有小于1个像素的部分）；既然这样的自交一般不会被检测到，裁剪算法（例如求并运算）仍然会包含这样的小的自交。将Clipper库的StrictlySimple属性设定为true可以避免这一类情况；
<img src="https://downloadflies.com/blog-img/clipper_rounding4.png" alt=""></p>
</div></template>
