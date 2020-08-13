<template>
   <div class="product">
      <div v-if="$route.name == 'product'">
         Product
      </div>
      <router-view v-else />
   </div>
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