<template>
  <div id="Header">
    
      <h1>我是头部</h1>
    <router-view />

    
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>

    #Header{
        background-color: cadetblue;
    }

</style>