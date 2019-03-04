<template>
<div id="app">
  <section class="slider" :class="'slide-' + activeSlide">
    <todos />
    <newtodo />
  </section>
</div>
</template>

<script>
import todos from './views/Todo.vue'
import newtodo from './views/NewTodo.vue'

export default {
  name: 'app',
  computed: {
    activeSlide() {
      return this.$store.state.activeSlide;
    }
  },
  components: {
    todos,
    newtodo
  },
  beforeMount() {
    this.$store.dispatch('getTodos')
  }
}
</script>


<style lang="scss">
@import 'scss/main.scss';
</style>
