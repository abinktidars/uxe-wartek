export default {
  name: "Bottomsheet",
  mounted () {
    document.addEventListener('keyup', this.onEsc)
  },
  methods: {
    onEsc () {
      this.$emit('escClick')
    },
    onEsc(e) {
      if (e.keyCode != 27) return
      this.close()
      this.$emit('escClick')
    }
  }
}