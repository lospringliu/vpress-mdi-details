const MD = require("markdown-it")
const plugin = require("../").details
const md_regular = new MD()
const md_plugin = (new MD()).use(plugin)

const md_content = '::: details DETAIL\ncontent\n:::\n'
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

test('render details regular', () => {
  expect(md_regular.render(md_content)).toBe(out_regular)
});

test('render details plugin', () => {
  expect(md_plugin.render(md_content)).toBe(out_plugin)
});
