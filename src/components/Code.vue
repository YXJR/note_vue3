<template>
  <pre class="shiki material-theme-palenight">
        <code class="language-js line-numbers" data-prismjs-copy="Copy">
            {{codes}}
        </code>
    </pre>
</template>

<script>
export default {
  props: {
    codes: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {}
  },
  mounted () {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss" scoped>
</style>