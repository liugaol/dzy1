<template>
  <div class="hello">
    <p v-for="(item,index) in arr" :key="index" @click="set">
      {{item}}{{$store.state.sex}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        form: {
          a: 1,
          b: 1,
          c: 2,
        },
        arr: [1, 2, 3]
      }
    },
    mounted() {
      this.form = Object.assign({}, this.form, {d: 1, e: 2})
      this.$set(this.arr, 1, 5);
      console.log(this.$store.getters.doneTodos)
    },
    methods:{
      set(){
        this.$store.commit('edit',{age:15,sex:'男'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
