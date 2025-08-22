<script>
import MyComponent from "@/components/MyComponent.vue";

export default {
  name: "HomeView",
  components: {
    MyComponent,
    ProductCard,
    TheWelcome
  }
}
import TheWelcome from '@/components/TheWelcome.vue';
import ProductCard from "@/components/ProductCard.vue";
</script>

<template>
  <main>
<!--    <TheWelcome />-->
<!--    <ProductCard />
    <MyComponent name="Tabitha" surname="Steffens"/>-->
    <MyComponent/>
  </main>
</template>
