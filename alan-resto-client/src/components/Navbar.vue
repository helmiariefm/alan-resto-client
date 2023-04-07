<script>
    import {RouterLink} from 'vue-router'
</script>

<template>
    <div>
        <div class="bg-sky-500 flex px-20 py-2">
            <RouterLink to="/">
                <img src="../assets/logo.png" class="w-9 mr-3"/>
            </RouterLink>
            <RouterLink to="/" class="text-xl">Alan Resto</RouterLink>
        </div>
        <div class="bg-white flex px-20 py-2 text-black font-semibold shadow-lg">
            <RouterLink to="/food" active-class="active" class="mx-7">Food</RouterLink>
            <RouterLink to="/" active-class="active" class="mx-7">Transaction</RouterLink>
        </div>
    </div>
</template>

<style>
    .active {
        color: #0ea5e9;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 11px;
        font-weight: bold;
    }
</style>