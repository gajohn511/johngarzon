<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <todo-list v-bind:todos="todos"></todo-list> -->
    <!-- <todo v-bind:todos="alist"></todo> -->
  </div>
</template>

<script>

// import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    // todo: TodoList,
  },
  data() {
    return {
      alist: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
