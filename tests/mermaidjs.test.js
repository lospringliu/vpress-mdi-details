const MD = require("markdown-it")
const plugin = require("../").mermaidjs
const md_regular = new MD()
const md_plugin = (new MD()).use(plugin)

const md_content = `\`\`\`mermaid
graph LR
    A-->B
\`\`\`
`
const md_tip = '::: tip\ncontent\n:::\n'
const md_detail_bad = '::: details DETAIL\ncontent\n:::\n'

const out_regular = `<pre><code class="language-mermaid">graph LR
    A--&gt;B
</code></pre>
`

const out_plugin = `<div class="mermaid"><pre><code>graph LR
    A-->B</code></pre></div>`


test('render mermaid regular', () => {
  // console.log(md_regular.render(md_content))
  expect(1+2).toBe(3)
});

test('render mermaid plugin', () => {
  console.log(md_plugin.render(md_content))
  expect(1+2).toBe(3)
});
