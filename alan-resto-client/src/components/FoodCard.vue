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
    <div class="bg-white md:w-72 h-[320px] md:mr-9 mt-11 md:mt-5 text-black text-center shadow-md hover:scale-105 transition-all duration-300" >
        <img :src="foodProp.foto" @error="handleImageError(foodProp)" class="md:w-72 h-60 md:mr-9 w-full"/>
        <h2 class="pt-3">{{ foodProp.nama }}</h2>
        <h2 class="text-sky-500 font-medium pb-3">{{ foodProp.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }) }}</h2>
    </div>
</template>