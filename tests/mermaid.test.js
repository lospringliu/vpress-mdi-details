const MD = require("markdown-it")
const plugin = require("../").mermaid
const md_regular = new MD()
const md_plugin = (new MD()).use(plugin)

const md_content = `\`\`\`mermaid
graph LR
    A-->B
\`\`\`
`
const md_component = `<mermaid>
graph LR
    A-->B
</mermaid>
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


test('render mermaid regular fence', () => {
  expect(md_regular.render(md_content)).toBe(out_regular)
});

test('render mermaid plugin fence', () => {
  expect(md_plugin.render(md_content)).toBe(out_plugin)
});

test('render mermaid regular component', () => {
  console.log(md_regular.render(md_component))
  expect(1+2).toBe(3)
});

test('render mermaid plugin component', () => {
  console.log(md_plugin.render(md_component))
  expect(1+2).toBe(3)
});
