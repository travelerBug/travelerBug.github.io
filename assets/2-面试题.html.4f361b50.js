import{_ as n,o as s,c as a,e as t}from"./app.cef7465c.js";const p={},o=t(`<h3 id="_1-2-1-\u4FEE\u6539\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u4FEE\u6539\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 1.2.1 \u4FEE\u6539\u5B57\u7B26\u4E32</h3><p>\u8981\u4FEE\u6539\u5B57\u7B26\u4E32\uFF0C\u9700\u8981\u5148\u5C06\u5176\u8F6C\u6362\u6210<code>[]rune\u6216[]byte</code>\uFF0C\u5B8C\u6210\u540E\u518D\u8F6C\u6362\u4E3A<code>string</code>\u3002\u65E0\u8BBA\u54EA\u79CD\u8F6C\u6362\uFF0C\u90FD\u4F1A\u91CD\u65B0\u5206\u914D\u5185\u5B58\uFF0C\u5E76\u590D\u5236\u5B57\u8282\u6570\u7EC4\u3002</p><div class="language-go ext-go"><pre class="language-go"><code>    <span class="token keyword">func</span> <span class="token function">changeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        s1 <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>
        <span class="token comment">// \u5F3A\u5236\u7C7B\u578B\u8F6C\u6362</span>
        byteS1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
        byteS1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;H&#39;</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>byteS1<span class="token punctuation">)</span><span class="token punctuation">)</span>

        s2 <span class="token operator">:=</span> <span class="token string">&quot;\u535A\u5BA2&quot;</span>
        runeS2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
        runeS2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;\u72D7&#39;</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>runeS2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre></div>`,3),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","2-\u9762\u8BD5\u9898.html.vue"]]);export{k as default};
