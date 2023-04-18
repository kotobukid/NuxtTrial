<template lang="pug">
.hello pages/mycomponent.vue
NuxtLink(to="/") index
br
NuxtLink(to="/mycomponent2") Component2
</template>

<style scoped lang="less">
.hello {
    color: red;
}
</style>