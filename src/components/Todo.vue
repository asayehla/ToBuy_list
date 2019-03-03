<template lang="html">
  <article class="todo">
    <aside class="done">
      <p><svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.0649 2L9.77204 17.2929C9.38152 17.6834 8.74835 17.6834 8.35783 17.2929L2 10.9351" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
    </aside>
    <section class="text">
      {{todo.text}}
    </section>
  </article>
</template>

<script>
export default {
  name: 'todo',
  data() {
    return {
      todo: {
        text: 'ingefärsshot',
        done: false
      },
      url: process.env.VUE_APP_ALWAYS
    }
  }
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
