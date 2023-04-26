<script>
  import { mapActions, mapWritableState } from 'pinia';
  import { useCounterStore } from '../stores/counter';
  import Modal from '../components/Modal.vue'
  import FoodCard from '../components/FoodCard.vue';
  import Swal from 'sweetalert2'  

  export default{
      components: {
          Modal,
          FoodCard
      },
      computed: {
        ...mapWritableState(useCounterStore, ['food', 'trans']),
        transLength() {
            return useCounterStore().transLength;
        },
        chargeBill() {
          return 10000 * this.transLength;
        }
      },
      watch: {
        trans(newVal) {
          console.log(newVal.length);
        },
      },
      methods: {
        ...mapActions(useCounterStore, ['fetchFood', 'fetchTransaction', 'productById', 'addTransaction', 'clearCart']),
        handleTransaction(id){
          this.addTransaction(id)
        },
        handleClearCart(){
          this.clearCart()
        },
        handleSaveBill(){
          Swal.fire({
            title: 'Success',
            text: 'Your bill has been saved successfully',
            icon: 'success',
            confirmButtonColor: '#0ea5e9'
          })
        },
        handlePrintBill(){
          window.print()
        }
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
        this.fetchTransaction()
      }
  }


</script>

<template>
    <div class="px-20 flex">
      <!-- Product List -->
      <div class="w-4/6 grid grid-cols-3">        
        <FoodCard v-for="foodProp in food" :key="foodProp.id" :foodProp="foodProp" v-on:click="$event => handleTransaction(foodProp.id)"/>
      </div>

      <!-- Bill -->
      <div class="w-2/6">
        <div class="bg-white w-full mr-9 mt-11 pt-7 pb-9 text-black text-center shadow-md">
          
          <div class="justify-center flex gap-2 mb-7">
            <img src="../assets/pesanan.png" class="w-9"/>
            <h1 class="text-xl font-semibold">Pesanan</h1>
          </div>
          
          <div v-for="transaction in trans" :key="transaction.id" class="mx-9 mb-5 flex justify-between">
            <div class="flex">
              <img :src="transaction.foto" class="w-28 h-20 mr-2"/>
              <h2 class="my-auto ml-2">{{ transaction.nama }}</h2>
            </div>
            <div class="flex">
              <h2 class="my-auto mr-5">x{{ transaction.amount }}</h2>
              <h2 class="text-sky-500 font-medium my-auto">Rp. {{ transaction.harga }}</h2>
            </div>
          </div>

          <div class="mt-9">
            <div class="mx-9 my-3">
              <button @click.prevent="handleClearCart()" class="text-red-600 font-semibold border-2 border-red-600 rounded-sm px-2 w-full">Clear Cart</button>
            </div>
  
            <div class="mx-9 my-3 flex gap-5">
              <button @click.prevent="handleSaveBill()" class="text-white font-semibold bg-emerald-600 hover:bg-emerald-500 rounded-sm px-2 py-1 w-full">Save Bill</button>
              <button @click.prevent="handlePrintBill()" class="text-white font-semibold bg-emerald-600 hover:bg-emerald-500 rounded-sm px-2 py-1 w-full">Print Bill</button>
            </div>
  
            <div class="mx-9 my-3">
              <button @click="showModal = true" class="text-white font-semibold bg-sky-500 hover:bg-sky-400 rounded-sm p-2 w-full">Charge Rp. {{ chargeBill }}</button>
              <Modal v-if="showModal" @close="showModal = false" :title="modalTitle" :content="modalContent" />
            </div>
          </div>          

        </div>
      </div>
    </div>
</template>