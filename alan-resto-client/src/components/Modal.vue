<script>
    import { mapActions, mapWritableState } from 'pinia';
    import { useCounterStore } from '../stores/counter';

    export default {
        props: {
            title: String,
            content: String
        },
        computed: {
            ...mapWritableState(useCounterStore, ['food', 'trans']),
            transLength() {
                return useCounterStore().transLength;
            },
            chargeBill() {
                const hargaSum = this.trans.reduce((total, transItem) => total + transItem.harga_x_amount, 0);
                return (10000 * this.transLength) + hargaSum;
            },
            kembalian() {                
                return this.inputValue ? this.inputValue - this.chargeBill : 0;
            }
        },
        data() {
            return {
                inputValue: null
            }
        },
        methods: {
            ...mapActions(useCounterStore, ['fetchFood', 'fetchTransaction']),
        },
        mounted(){
            this.fetchFood()
            this.fetchTransaction()
        },
        created(){
            console.log(this.chargeBill, "<<<<")
        }
    }
</script>

<template>
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">       
        <h1 class="text-xl text-left font-semibold mb-5">Detail Pesanan</h1>
        <div class="flex justify-between">
            <table class="table-auto w-8/12">
                <thead>
                    <tr class="bg-gray-300">
                        <th class="px-4 py-2">#</th>
                        <th class="px-4 py-2">Nama</th>
                        <th class="px-4 py-2">Foto</th>
                        <th class="px-4 py-2">Harga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="transItem in trans" :key="transItem.id" class="even:bg-white odd:bg-gray-100">
                        <td class=" px-4 py-2">1</td>
                        <td class=" px-4 py-2">{{ transItem.nama }} x{{ transItem.amount }}</td>
                        <td class=" px-4 py-2">
                            <img :src="transItem.foto" class="w-28 h-20 mx-auto"/>
                        </td>
                        <td class=" px-4 py-2">Rp. {{ transItem.harga }}</td>
                    </tr>
                </tbody>
            </table>

            <div class="relative mx-7"></div>
            
            <div class="w-4/12">
                <form>
                    <label class="text-lg font-semibold">Uang pembeli (Rp)</label>
                    <input v-model="inputValue" type="number" class="w-full px-3 py-1 rounded-sm text-black bg-white border-2 border-gray-200"/>
                    <div class="flex gap-3 mt-3">
                        <button @click="$emit('close')" class="w-full px-3 rounded-sm border-2 border-gray-200 text-gray-400">Close</button>
                        <button class="w-full text-white font-semibold bg-sky-500 px-3 rounded-sm">Pay!</button>
                    </div>
                    <div class="mt-3">
                        <h2 class="text-red-500 text-lg text-left">Kembalian : {{ kembalian }}</h2>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
</template>
  
<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 4px;
        width: 848px;        
        z-index: 1;
    }

    .relative::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background-color: #f3f4f6;
    }
</style>
