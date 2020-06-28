const MD = require("markdown-it")
const plugin = require("../").mermaid
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

const out_plugin = `<div><pre class="mermaid">graph LR
    A-->B
</pre></div>`


test('render mermaid regular', () => {
  expect(md_regular.render(md_content)).toBe(out_regular)
});

test('render mermaid plugin', () => {
  expect(md_plugin.render(md_content)).toBe(out_plugin)
});
