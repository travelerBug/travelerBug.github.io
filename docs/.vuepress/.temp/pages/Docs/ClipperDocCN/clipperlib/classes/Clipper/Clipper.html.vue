<template><div><h3 id="clipper" tabindex="-1"><a class="header-anchor" href="#clipper" aria-hidden="true">#</a> <strong>Clipper</strong></h3>
<p>继承自：<strong>ClipperBase</strong></p>
<p>Clipper类将布尔运算内容(包含交并否异或)进行封装，称之为多边形裁剪；
输入的多边形，不管是subject还是clip，都通过AddPath或者AddPaths方法传递给Clipper对象，最后使用Execute函数进行裁剪。多个布尔运算可以通过输入相同的多边形，然后反复执行execute函数来实现；</p>
</div></template>
