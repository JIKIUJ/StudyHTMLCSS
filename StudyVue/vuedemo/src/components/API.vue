
<template>
  <div id="API">
      <h1 @click="hello">大家好,我是调用的Java API</h1>

      {{ info }}
  </div>
</template>

<script>

export default {
  name: 'API',
  data(){
    return {
      info : ''
    }
  },
  methods: {
          hello: function() {
              console.log('点击了,hello');
              this.info = '点击了,hello'
          }
        },

  created() {
    this.$axios.get('http://localhost:8081/api/hello').then(res => {
        console.log(res.data)
        this.info = res.data
      });
  }

//   created:function(){
//   this.$axios.get("/seller",{"id":123}).then(res=>{
//     console.log(res.data);
//   });
// }


}




</script>

<style>

</style>