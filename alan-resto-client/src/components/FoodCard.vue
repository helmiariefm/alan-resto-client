<script>
    export default {
        props: ['foodProp']
    }
</script>

<template>
    <div class="bg-white w-72 h-[320px] mr-9 mt-11 text-black text-center shadow-md">
        <img :src="foodProp.foto" class="w-72 h-60 mr-9"/>
        <h2 class="pt-3">{{ foodProp.nama }}</h2>
        <h2 class="text-sky-500 font-medium pb-3">Rp. {{ foodProp.harga }}</h2>
    </div>
</template>