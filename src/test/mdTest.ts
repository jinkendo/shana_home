import Md from "../app/util/Md"; 

const html:string = Md.toHtml(`
# 未知元素\`ubn-ele\`

> 浑未识, 金粉本来疏; ***自有一般真实相***,不知何物是谁如,**天意肯教舒**;

### 时间链接科学艺术 


1.  壹
2.  贰
3.  叁
4.  肆
5.  伍
6.  陆
7.  柒
8.  捌
9.  玖
10.  拾


|东方|北方|中方|南方|西方|
|--|--|--|--|--|
|夏|彬|华|明|金|
|夏|彬|华|明|金|
|夏|彬|华|明|金|
|夏|彬|华|明|金|

- 黄麒麒 
- 黄麟麟
- 青凤雨
- 青凰炎 

===HUB===
`)


console.log(html)