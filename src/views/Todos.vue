
<template>
  <main id="todos">
    <header>
      <h1>Ditt och datt</h1>
    </header>
    <section class="content">
      <todo v-for="(todoData, index) in todos" :key="index" :todo="todoData" :index="index"/>
    </section>
    <footer>
      <a href="#" class="btn" v-touch:swipe.left="swipe">Slide to add new</a>
    </footer>
  </main>
</template>



<script>
//plugin med v-touch
import todo from "@/components/Todo.vue";

export default {
  name: "todos",

  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  },
  components: {
    todo
  }
  /*,
  methods: {
    swipe() {
      this.$store.commit("swipe", 1);
    }
  }*/
};
</script>

<style lang="scss">
#todos {
  header {
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
