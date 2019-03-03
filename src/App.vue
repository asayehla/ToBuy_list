<template>
  <div id="app">
    <section class="slider">
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
  components: {
    todos, newtodo
  }
}

</script>


<style lang="scss">
@import 'scss/main.scss';

</style>
