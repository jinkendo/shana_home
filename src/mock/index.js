import Mock from 'mockjs'
const mdtxt = `
# ${Mock.Random.cparagraph(1)}
## ${Mock.Random.cparagraph(1)}
### ${Mock.Random.cname()}
#### ${Mock.Random.cname()}
##### ${Mock.Random.cname()}
###### ${Mock.Random.cname()}

> 浑未识, 金粉本来疏; ***自有一般真实相***,不知何物是谁如,**天意肯教舒**;

时间链接科学艺术 


${Mock.mock('@paragraph(20, 300)')}

----

${Mock.Random.cparagraph(200, 3000)}


1.  ${Mock.Random.name()}
2.  ${Mock.Random.name()}
3.  ${Mock.Random.name()}
4.  ${Mock.Random.name()}
5.  ${Mock.Random.name()}
6.  ${Mock.Random.name()}
7.  ${Mock.Random.name()}
8.  ${Mock.Random.name()}
9.  ${Mock.Random.name()}
10. ${Mock.Random.name()}

- ${Mock.Random.cname()}
- ${Mock.Random.cname()}
- ${Mock.Random.name()}
- ${Mock.Random.name()}

|东方|北方|中方|南方|西方|
|--|--|--|--|--|
|夏|彬|华|明|金|
|夏|彬|华|明|金|
|夏|彬|华|明|金|
|夏|彬|华|明|金|

请在shell 输入 \` echo "hell jinkendo" \`


\`\`\` javascript
Mock.mock("/HOME/Content.api/key/test/type/md", {
    status: 1,
    err: null,
    data: {
        contentType: 'markdown',
        txt:mdtxt,
        reading:Mock.Random.integer(),
        title: "未知元素\`ubn-ele\`",
        author: Mock.Random.cname(),
        des: Mock.Random.cparagraph(1,3)
    }
} )

console.log( Mock.Random.cparagraph(1,3).length)
\`\`\`
伟大

![haok1](/public/bk.jpg)
`
Mock.mock("/HOME/Content.api/key/test/type/md", {
    status: 1,
    err: null,
    data: {
        contentType: 'markdown',
        txt:mdtxt,
        reading:Mock.Random.integer(),
        title: "未知元素\`ubn-ele\`",
        author: Mock.Random.cname(),
        des: Mock.Random.cparagraph(1,3)
    }
} )

console.log( Mock.Random.cparagraph(1,3).length)