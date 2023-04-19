<script lang="ts" setup>
import axios, {type AxiosResponse} from 'axios';
import {type Ref, ref} from "@vue/reactivity";
import {type User} from "~/types";

const users: Ref<User[]> = ref([]);

onMounted(() => {
    axios.get('/api/user').then((res: AxiosResponse<{ users: User[] }>): void => {
        users.value = res.data.users;
    });
})


</script>

<template lang="pug">
NuxtLink(to="/") index
br
NuxtLink(to="/mycomponent2") Component2
table.users
    colgroup
        col(style="width: 100px;")
        col(style="width: 100px;")
    thead
        tr
            th ID
            th Name
    tbody
        tr(v-for="u in users")
            td {{ u.id }}
            td {{ u.name }}
</template>

<style scoped lang="less">
table.users {
    table-layout: fixed;
    border-collapse: collapse;

    th, td {
        border: 1px solid black;
    }

    th {
        color: white;
        background-color: #232323;
    }

    td {
        font-weight: bolder;
        color: black;
        background-color: white;
    }
}
</style>