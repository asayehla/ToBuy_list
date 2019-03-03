<template>
<main id="todos">
  <header>
    <h1>Inköp!</h1>
  </header>
  <section class="content">
    <todo />
  </section>
  <footer>
    <a href="#" class="btn">Slide to add new</a>
  </footer>
</main>
</template>

<script>
import todo from '@/components/Todo.vue';

export default {
  name: 'todos',
  components: {
    todo
  }
}
</script>

<style lang="scss">
#todos {


    header {
          h1 {
              margin: 0;
              padding: 0;
              font-family: 'Julius Sans One', sans-serif, 'Trebuchet MS';
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-size: 3rem;
              text-shadow: 3px 3px 0 rgb(66, 65, 66);
              }
            p {
                margin: 0;
                font-weight: 700;
            }
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        a.btn {
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgb(46, 45, 45);
            color: white;
            font-weight: 700;
            text-decoration: none;
            height: 3rem;
            border-radius: 999rem;
        }
    }
}
</style>
