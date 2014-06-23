#### A new year!

Well, I know it’s not new year yet; however, i think the sense of “new year” should not be limited by the start of the year. Anytime you can choose to step up and decide on something self productive.

This site is driven by [Markdown Markup] and [AngularJS]. I think i’ll be going fullsteam ahead with [MEAN Stack]([http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and][) development.

---

So, it looks like [Markdown Markup]  has a limitation of having link target ```_blank```  or  ```_new```. I found a similar problem raised up at [Stackoverflow], so I went ahead and see if I can fix this little bugger with Regular Expression pattern and I came up with the code below:

<pre><code>
var pattern = /&lt;a href=/g;
var el = document.querySelector(‘.markdownText’);
var converter = new Showdown.converter();           
var rawMarkdown = converter.makeHtml(el.innerHTML);            
var htmlText = rawMarkdown.replace(pattern,”&lt;a target=’_blank’ href=”);

el.innerHTML = htmlText;
</code>
</pre>

Link to [JSFiddle][1]

[Markdown Markup]: http://daringfireball.net/projects/markdown/
[AngularJS]: http://angularjs.org
[Stackoverflow]: http://stackoverflow.com/questions/4425198/markdown-target-blank/ 
[1]:http://jsfiddle.net/2c2GQ/9/ 

