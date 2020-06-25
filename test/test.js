const MD = require("markdown-it")
const plugin = require("../").plugin
const md_regular = new MD()
const md_plugin = (new MD()).use(plugin)

const md_detail = '::: details DETAIL\ncontent\n:::\n'
const md_tip = '::: tip\ncontent\n:::\n'
const md_detail_bad = '::: details DETAIL\ncontent\n:::\n'

const out_regular = `<p>::: details DETAIL
content
:::</p>
`
const out_plugin = `<details class="details custom-block"><summary>DETAIL</summary>
<p>content</p>
</details>
`

test('render regular', () => {
  expect(md_regular.render(md_detail)).toBe(out_regular)
});

test('render plugin', () => {
  expect(md_plugin.render(md_detail)).toBe(out_plugin)
});
