import './styles/vars.css';
import './styles/layout.css';
import './styles/code.css';
import './styles/custom-blocks.css';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
const theme = {
    Layout,
    NotFound,
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from createApp()
        // router is VitePress' custom router (see `lib/app/router.js`)
        // siteData is a ref of current site-level metadata.
        // console.log(app)
        console.log("... enhanceing App")
        // import("https://unpkg.com/mermaid/dist/mermaid.min.js")
		// try {
        //   import("mermaid/dist/mermaid.min").then(() => {
        //       console.log("mermaidjs loaded")
        //       setTimeout(() => mermaid.init(), 1000)
	  	//   })
		// } catch (e) {}
        // import("mermaid/dist/mermaid.min")
        // setTimeout(() => mermaid.init(), 1000)
    }
};
export default theme;
