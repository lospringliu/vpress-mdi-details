module.exports = {
	plugin
}
function plugin (md) {
	md.use(require('markdown-it-container'), 'details', {
		validate: function(params) {
			return params.trim().match(/^details\s+(.*)$/)
		},
		render: function (tokens, idx) {
			var m = tokens[idx].info.trim().match(/^details\s+(.*)$/)
			if (tokens[idx].nesting === 1) {
				return '<details class="details custom-block"><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n'
			} else {
				return '</details>\n'
			}
		}
	})
}
