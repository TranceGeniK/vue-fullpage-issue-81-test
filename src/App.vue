<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/fullpage">Fullpage</router-link>
      |
      <router-link to="/fullpage2">Fullpage 2</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" role="main"/>
    </transition>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
  }
  
  html {
    min-height: 100vh;
  }
  
  * {
    margin: 0;
    padding: 0;
  }
  
  #nav {
    padding: 30px;
    position: fixed;
    z-index: 100;
    a {
      font-weight: bold;
      color: #2c3e50;
      
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 1;
  }
  
  .fade-leave-to, .fade-enter
  {
    opacity: 0;
  }
</style>
