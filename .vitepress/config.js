module.exports = {
  // plugins: ['@talltotal/vuepress-plugin-ppt'],
  title: "CICD",
  description: "CICD documents",
  themeConfig: {
    repo: "https://github.ibm.com/ICP-DevOps/cicd-docs",
    lastUpdated: "Last Updated", // string | boolean
    repoLabel: "Contribute!",
    docsRepo: "https://github.ibm.com/ICP-DevOps/cicd-docs",
    docsDir: "common_services",
    // editLinks: true,
    // editLinkText: "help updating docs!",
    nav: [
      { text: "wiki", link: "/wiki/" },
      { text: "services", link: "/common_services/" },
      { text: "syntax", link: "/PLUGINS" },
      { text: "resource", link: "/resource/" }
    ]
  }
}
