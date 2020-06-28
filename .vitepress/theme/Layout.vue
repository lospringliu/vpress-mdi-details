<template>
  <div class="theme">
    <header>
      <NavBar />
    </header>
    <aside>
      <SideBar />
    </aside>
    <main>
      <Page />
    </main>
  </div>
  <script src="https://unpkg.com/mermaid/dist/mermaid.min.js"></script>
  <script>
    setTimeout(() => mermaid.initialize({startOnLoad:true,securityLevel:'loose'}), 2000)
    setTimeout(() => mermaid.init(), 3000)
  </script>
  <Debug />
</template>

<script>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import Page from './components/Page.vue'

export default {
  components: {
    NavBar,
    SideBar,
    Page
  }
}
</script>
