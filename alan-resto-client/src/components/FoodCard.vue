<script>
    export default {
        props: ['foodProp'],
        methods: {
            handleTransaction(id){
                this.addTransaction(id)
            },
            handleImageError(foodProp){
                foodProp.foto = '/brokenImg.png'
            }
        }
    }
</script>

<template>
    <div class="bg-white w-72 h-[320px] mr-9 mt-11 text-black text-center shadow-md hover:scale-105 transition-all duration-300" >
        <img :src="foodProp.foto" @error="handleImageError(foodProp)" class="w-72 h-60 mr-9"/>
        <h2 class="pt-3">{{ foodProp.nama }}</h2>
        <h2 class="text-sky-500 font-medium pb-3">{{ foodProp.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }) }}</h2>
    </div>
</template>