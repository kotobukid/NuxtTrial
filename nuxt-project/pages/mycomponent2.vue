<template lang="pug">
.component2
    .hello pages/mycomponent.vue
    NuxtLink(to="/") ホーム
</template>

<style scoped lang="less">
.component2 {
    background-color: black;
    color: white;
    padding: 10px;

    a {
        color: lightblue;
    }

    .hello {
        color: green;
    }
}

</style>