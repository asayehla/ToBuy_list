<template lang="html">
  <article class="todo" :class="{ completed : todo.done }" v-touch:swipe="completed">
    <aside class="done">
      <p></p>
    </aside>
    <section class="text">
      {{todo.text}}
    </section>
  </article>
</template>

<script>
export default {
  name: 'todo',
  props: ['todo, index'],
  methods: {
    completed() {
      this.$store.commit('updateTodo', this.index);
    }
  }
  //  url: process.env.VUE_APP_ALWAYS
}
</script>

<style lang="scss">
.todo {
    background: rgba($color: #000000, $alpha: .5);
    padding: 0.25rem;
    display: flex;
    border-radius: 999rem;

    aside {
        background: rgb(81, 203, 67);
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 999rem;
    }
    .text {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;
    }

}
</style>
