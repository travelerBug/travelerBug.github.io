<template><div><h3 id="polytree-getfirst" tabindex="-1"><a class="header-anchor" href="#polytree-getfirst" aria-hidden="true">#</a> <strong>PolyTree.GetFirst</strong></h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Del.» function GetFirst: TPolyNode;

C++ » PolyNode* GetFirst();

C#  » public PolyNode GetFirst();
</code></pre></div><p>该方法返回第一个有效的polygon的PolyNode指针，否则返回空；</p>
<p>该方法等价于调用Child[0]除非一个PolyTree的对象为空（无任何子对象），这种情况下使用Child[0]会产生越界。</p>
</div></template>
