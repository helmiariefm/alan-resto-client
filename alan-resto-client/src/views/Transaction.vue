<script>
  import { mapActions, mapWritableState } from 'pinia';
  import { useCounterStore } from '../stores/counter';
  import Modal from '../components/Modal.vue'
  import FoodCard from '../components/FoodCard.vue';

  export default{
      components: {
          Modal,
          FoodCard
      },
      computed: {
        ...mapWritableState(useCounterStore, ['food']),
      },
      methods: {
        ...mapActions(useCounterStore, ['fetchFood'])
      },
      data() {
        return {
          showModal: false,
          modalTitle: 'Modal Title',
          modalContent: 'Modal Content',      
        }    
      },
      mounted(){
        this.fetchFood()        
      }
  }

</script>

<template>
    <div class="px-20 flex">
      <!-- Product List -->
      <div class="w-4/6 grid grid-cols-3">
        <FoodCard v-for="foodProp in food" :key="foodProp.id" :foodProp="foodProp"/>        
      </div>

      <!-- Bill -->
      <div class="w-2/6">
        <div class="bg-white w-full mr-9 mt-11 pt-7 pb-9 text-black text-center shadow-md">
          
          <div class="justify-center flex gap-2 mb-7">
            <img src="../assets/pesanan.png" class="w-9"/>
            <h1 class="text-xl font-semibold">Pesanan</h1>
          </div>
          
          <div class="mx-9 mb-5 flex justify-between">
            <div class="flex">
              <img src="https://cdn-2.tstatic.net/jambi/foto/bank/images/resep-sate-ayam-manis.jpg" class="w-28 h-20 mr-2"/>
              <h2 class="my-auto ml-2">Sate Ayam</h2>
            </div>
            <div class="flex">
              <h2 class="my-auto mr-5">x1</h2>
              <h2 class="text-sky-500 font-medium my-auto">Rp. 30.000</h2>
            </div>
          </div>

          <div class="mx-9 mb-5 flex justify-between">
            <div class="flex">
              <img src="https://cdn-2.tstatic.net/jambi/foto/bank/images/resep-sate-ayam-manis.jpg" class="w-28 h-20 mr-2"/>
              <h2 class="my-auto ml-2">Sate Ayam</h2>
            </div>
            <div class="flex">
              <h2 class="my-auto mr-5">x1</h2>
              <h2 class="text-sky-500 font-medium my-auto">Rp. 30.000</h2>
            </div>
          </div>

          <div class="mx-9 mb-5 flex justify-between">
            <div class="flex">
              <img src="https://cdn-2.tstatic.net/jambi/foto/bank/images/resep-sate-ayam-manis.jpg" class="w-28 h-20 mr-2"/>
              <h2 class="my-auto ml-2">Sate Ayam</h2>
            </div>
            <div class="flex">
              <h2 class="my-auto mr-5">x1</h2>
              <h2 class="text-sky-500 font-medium my-auto">Rp. 30.000</h2>
            </div>
          </div>

          <div class="mt-9">
            <div class="mx-9 my-3">
              <button class="text-red-600 font-semibold border-2 border-red-600 rounded-sm px-2 w-full">Clear Cart</button>
            </div>
  
            <div class="mx-9 my-3 flex gap-5">
              <button class="text-white font-semibold bg-emerald-600 hover:bg-emerald-500 rounded-sm px-2 py-1 w-full">Save Bill</button>
              <button class="text-white font-semibold bg-emerald-600 hover:bg-emerald-500 rounded-sm px-2 py-1 w-full">Print Bill</button>
            </div>
  
            <div class="mx-9 my-3">
              <button @click="showModal = true" class="text-white font-semibold bg-sky-500 hover:bg-sky-400 rounded-sm p-2 w-full">Charge Rp. 40.000</button>
              <Modal v-if="showModal" @close="showModal = false" :title="modalTitle" :content="modalContent" />
            </div>
          </div>          

        </div>
      </div>
    </div>
</template>