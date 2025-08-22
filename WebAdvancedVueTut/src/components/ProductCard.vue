<script>
export default {
  name: "ProductCard",
  data(){
    return {
      image: "https://placehold.co/600x400",
      title: "Product Name",
      price: "Product Price",
      category: ["Product Category"],
      description: "Product Description",
    }
  }
}

</script>

<template>
  <div>
    <img :src="image" alt="Product"/>
    <h3>{{title}}</h3>
    <p>{{category[0]}}</p>
    <p>{{description}}</p>
  </div>
</template>

<style scoped>
img {
  width: 400px;
}
</style>