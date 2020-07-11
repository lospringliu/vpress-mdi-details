<template>
  <div>
    <pre class="mermaid">
	{{ graph }}
    </pre>
  </div>
</template>

<script>
import { onMounted, watch, watchEffect } from 'vue'
import Loading from './Loading.vue'
export default {
    name: "Mermaid",
    components: {Loading},
    props: {
        graph: {
            type: String,
            required: false,
			default: `graph BT\n    B-->T`
        },
    },
    setup (props, context) {
	  watchEffect(() => console.log(`id is: ${props.id}`))
	  watchEffect(() => console.log(`graph is: ${props.graph}`))
      onMounted(() => {
        console.log('component mermaid mounting');
      })
	  console.log(context.attrs)
    }
}
</script>

<style>
.mermaid {
  cursor: pointer;
  padding: 5px;
}

.mermaid.show {
  background-color: rgba(0,255,255,0.85);
}

.mermaid pre {
  font-family: Hack, monospace;
  font-size: 13px;
  margin: 0;
}
</style>
