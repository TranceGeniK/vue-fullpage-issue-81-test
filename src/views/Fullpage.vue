<template>
  <div class="fullpage">
    <full-page :options="options" ref="fullpage" :destroy-only-events="true">
      <div class="section">
        <h3>vue-fullpage.js</h3>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 2.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
    </full-page>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {},
      };
    },
    mounted() {
    },
  };
</script>

<style scoped lang="scss">
  .fullpage {
    overflow: hidden;
    height: 100vh;
    
    .section {
      height: 100vh;
      padding: 0;
    }
  }
</style>
