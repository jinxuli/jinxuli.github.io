<template>
  <header class="i-header-wrap">
    <div class="i-header-container">
      <div class="i-logo"></div>
      <div class="i-content"></div>
    </div>
  </header>
</template>
<script setup></script>
<style lang="less">
.i-header-wrap {
  box-sizing: border-box;
  padding: 0 48px;
  border-bottom: 1px solid @border-color;
  .i-header-container {
    display: flex;
    justify-content: space-between;
    height: 55px;
    margin: 0 auto;
  }
}
</style>
