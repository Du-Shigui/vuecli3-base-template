<template>
   <div class="product" v-if="$route.name == 'product'">
      123
   </div>
   <router-view v-else />
</template>


<script>
   export default {
      name: 'Product',
      data() {
         return {
            showSelf: 1,
         }
      },
   }
</script>

<style>

</style>