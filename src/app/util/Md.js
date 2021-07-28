import  MarkdownIt  from "markdown-it";
import markdownItHighlightjs from "markdown-it-highlightjs";
import highlightjsCypher from "highlightjs-cypher";
import 'highlight.js/styles/atom-one-dark.css'

class Md{
    static markdownIt = MarkdownIt().use(markdownItHighlightjs, {
        register: {
            cypher: highlightjsCypher
        }
    })

    static toHtml (mdtext) {
       return this.markdownIt.render(mdtext)
    }
}

export default Md
// var result = md.render('# markdown-it rulezz!');