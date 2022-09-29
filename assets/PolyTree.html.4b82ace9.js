import{_ as e,o,c as l,e as t}from"./app.ad4da1a1.js";const r={},n=t(`<h3 id="polytree" tabindex="-1"><a class="header-anchor" href="#polytree" aria-hidden="true">#</a> <strong>PolyTree</strong></h3><p>\u7EE7\u627F\u81EA\uFF1A<strong>PolyNode</strong></p><p>PolyTree\u88AB\u8BBE\u8BA1\u6210\u4E00\u4E2A<strong>\u53EA\u8BFB</strong>\u6570\u636E\u7ED3\u6784\u53EA\u80FD\u591F\u7528\u6765\u63A5\u6536\u88C1\u526A\u6216\u8005\u504F\u7F6E\u7684\u7ED3\u679C\u3002\u4E00\u822C\u5728\u7ED3\u679C\u4E2D\u7ECF\u5E38\u4F1A\u9009\u62E9\u662F\u5426\u4F7F\u7528Paths\u6216\u8005PolyTree\u6765\u83B7\u53D6\u6700\u7EC8\u7684\u7ED3\u679C\uFF1BPolyTree\u6570\u636E\u7ED3\u6784\u4F18\u4E8EPaths\u7684\u4E24\u4E2A\u70B9\u4E3A1\uFF09\u80FD\u591F\u6B63\u786E\u53CD\u6620\u8FD4\u56DE\u7C7B\u578B\u7684<strong>\u7236\u5B50\u5173\u7CFB</strong> 2\uFF09\u80FD\u591F\u5BF9\u5F00\u653E\u8DEF\u5F84\u548C\u95ED\u5408\u8F6E\u5ED3\u8FDB\u884C\u533A\u522B\u3002\u4F46\u662F\uFF0C\u4E5F\u6B63\u56E0\u4E3APolyTree\u6709\u7740\u6BD4Paths\u66F4\u590D\u6742\u7684\u7ED3\u6784\uFF0C\u5BFC\u81F4\u7B97\u6CD5\u6548\u7387\u4E0B\u964D\u5927\u7EA65%\u4EE5\u4E0A\u3002PolyTree\u76EE\u524D\u53EA\u80FD\u7528\u4E8E\u9700\u8981\u5BFB\u627E\u7236\u5B50\u5173\u7CFB\u6216\u5F00\u653E\u8DEF\u5F84\u9700\u8981\u8003\u8651\u7684\u573A\u5408\uFF1B \u5728Clipper.Execute\u4E0EClipperOffset.Execute\u4E24\u4E2A\u51FD\u6570\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u7A7A\u7684PolyTree\u5BF9\u8C61\u6765\u4F5C\u4E3Asolution\u53C2\u6570\u63A5\u6536\u7ED3\u679C\u3002\u4E00\u65E6\u88C1\u526A\u5DE5\u4F5C\u6216\u8005\u504F\u7F6E\u5DE5\u4F5C\u5B8C\u6210\u540E\uFF0C\u51FD\u6570\u5C31\u4F1A\u5C06\u7ED3\u679C\u4EE5PolyTree\u7684\u5F62\u5F0F\u8FD4\u56DE\u51FA\u6765\uFF1B \u4E00\u4E2APolyTree\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EFB\u4F55\u6570\u76EE\u7684PolyNode\u5B50\u5BF9\u8C61\uFF0C\u5176\u4E2D\u6BCF\u4E00\u4E2APolyNode\u4EE3\u8868\u4E86\u591A\u8FB9\u5F62\u7684\u4E00\u4E2A\u8F6E\u5ED3\uFF08\u5185\u8F6E\u5ED3\u6216\u8005\u5916\u8F6E\u5ED3\uFF09\u3002<mark>PolyTree\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u7279\u6B8A\u7684PolyNode\u5BF9\u8C61\uFF0C\u5B83\u7684\u5B50\u5BF9\u8C61\u5373\u4EE3\u8868\u7ED3\u679C\u4E2D\u4E86\u6700\u9AD8\u7EA7\u522B\u7684\u5916\u8F6E\u5ED3\uFF0C\u800C\u5B83\u81EA\u8EAB\u7684Contour\u6570\u636E\u59CB\u7EC8\u4E3A\u7A7A</mark>\u3002\u88AB\u5305\u542B\u7684\u6700\u9AD8\u7EA7\u522B\u7684PolyNode\u8FD8\u53EF\u80FD\u5305\u542B\u5B83\u81EA\u5DF1\u7684\u5B50\u5BF9\u8C61\uFF08\u5185\u5B54\uFF09\uFF0C\u751A\u81F3\u81EA\u5DF1\u7684\u5185\u5B54\u8FD8\u53EF\u4EE5\u5305\u62EC\u88AB\u5D4C\u5957\u7684\u5916\u8F6E\u5ED3\u7B49\u3002\u4F46\u662F\u5916\u8F6E\u5ED3\u7684\u5B50\u5BF9\u8C61\u6C38\u8FDC\u662F\u5B54\uFF0C\u5B54\u7684\u5B50\u5BF9\u8C61\u6C38\u8FDC\u662F\u5916\u8F6E\u5ED3\u3002 PolyTree\u53EF\u4EE5\u5305\u542B\u5F00\u653E\u8DEF\u5F84\u3002\u5F00\u653E\u8DEF\u5F84\u6C38\u8FDC\u4F1A\u5728\u6700\u9AD8\u7EA7\u522B\u7684\u5B50\u8F6E\u5ED3\u4E2D\u5B58\u50A8\u3002\u63D0\u4F9B\u4E86\u4E24\u4E2A\u51FD\u6570\u53EF\u4EE5\u5FEB\u901F\u7684\u5206\u79BB\u63D0\u53D6PolyTree\u5F00\u653E\u8DEF\u5F84\u548C\u5C01\u95ED\u8F6E\u5ED3\u2014\u2014OpenPathsFromPolyTree\u548CClosedPathsFromPolyTree\u3002 <img src="https://downloadflies.com/blog-img/polytree.png" alt=""></p><div class="language-text ext-text"><pre class="language-text"><code>polytree: 
    Contour = ()
    ChildCount = 1
    Childs[0]: 
        Contour = ((10,10),(100,10),(100,100),(10,100))
        IsHole = False
        ChildCount = 1
        Childs[0]: 
            Contour = ((20,20),(20,90),(90,90),(90,20))
            IsHole = True
            ChildCount = 2
            Childs[0]: 
                Contour = ((30,30),(50,30),(50,50),(30,50))
                IsHole = False
                ChildCount = 0
            Childs[1]: 
                Contour = ((60,60),(80,60),(80,80),(60,80))
                IsHole = False
                ChildCount = 0

</code></pre></div>`,4),s=[n];function a(d,i){return o(),l("div",null,s)}var h=e(r,[["render",a],["__file","PolyTree.html.vue"]]);export{h as default};