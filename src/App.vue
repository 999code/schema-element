<template>
  <div class="example-layout">
    <aside class="example-sidebar">
      <ExampleMenu :items="exampleRoutes" />
    </aside>

    <main class="example-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import ExampleMenu from './components/ExampleMenu.vue';
import { exampleRoutes } from './router';

defineOptions({
  name: 'App',
});
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f8f8f8;
}

.example-layout {
  display: grid;
  grid-template-columns: 224px minmax(0, 1fr);
  min-height: 100vh;
}

.example-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  border-right: 1px solid var(--el-border-color-light);
  background: var(--el-bg-color);
}

.example-content {
  min-width: 0;
  padding: 32px;
  overflow-x: auto;
}

@media (max-width: 768px) {
  .example-layout {
    grid-template-columns: 144px minmax(0, 1fr);
  }

  .example-content {
    padding: 24px 16px;
  }
}

h4 {
  border-bottom: 1px solid #dcdfe6;
  padding: 10px 0 0 20px;
  margin: 60px 0 40px;
  font-weight: 400;
  text-align: left;
  position: relative;
  line-height: 30px;
}

h4:before {
  display: block;
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  top: 20px;
  left: 0px;
  background: #262626;
}

h4:first-child {
  margin-top: 0;
}
</style>
