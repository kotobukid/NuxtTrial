<template>
<div>
    <h1>pages/index.vue</h1>
    <NuxtLink to="/mycomponent">Component1</NuxtLink>
    <br>
    <NuxtLink to="/mycomponent2">Component2</NuxtLink>
</div>
</template>

<script setup lang="ts">
import MyComponent from "~/components/MyComponent.vue";
</script>