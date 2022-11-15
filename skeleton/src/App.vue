<template>
  <div id="app">
    <div class="facebook-card">
      <vue-skeleton-loader
        type="circle"
        :width="50"
        :height="50"
        animation="fade"
      />
    </div>
    <div class="facebook-card">
      <vue-skeleton-loader
        type="rect"
        :width="200"
        :height="20"
        animation="wave"
      />
    </div>
    <div class="facebook-card">
      <vue-skeleton-loader
        type="circle"
        :width="20"
        :height="20"
        animation="wave"
      />
    </div>
    <div class="facebook-card">
      <vue-skeleton-loader
        type="rect"
        color="tomato"
        :rounded="true"
        :width="300"
        :height="20"
        animation="wave"
      />
    </div>
    <div class="facebook-card">
      <vue-skeleton-loader
        type="circle"
        wave-color="red"
        :rounded="true"
        :width="50"
        :height="50"
        animation="wave"
      />
    </div>
    <div class="facebook-card">
      <vue-skeleton-loader
        type="rect"
        :rounded="true"
        :width="300"
        :height="50"
        animation="pulse"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
