<script>
    import { RouterLink } from 'vue-router';
    import { mapActions, mapWritableState } from 'pinia';
    import { useCounterStore } from '../stores/counter';
    import VueNumeric from 'vue-numeric';

    export default{
      computed: {
        ...mapWritableState(useCounterStore, ['food']),
      },
      methods: {
        ...mapActions(useCounterStore, ['fetchFood']),
        handleImageError(foodProp) {          
          foodProp.foto = '/brokenImg.png'
        }
      },
      directives: {
        numeric: VueNumeric
      },
      mounted(){
        this.fetchFood()        
      }
    }
</script>

<template>
  <div class="md:px-20 px-5 w-full">
    <h2 class="text-zinc-400 text-md my-7">Tambahkan menu makanan yang ada di resto</h2>
    <div class="w-full md:p-9 px-3 py-7 bg-white shadow-lg">
      <RouterLink to="/food/addmenu" class="text-white font-semibold bg-sky-500 hover:bg-sky-400 rounded-sm p-2 mb-9">+ Tambah Menu</RouterLink>
      <div class="overflow-x-auto">
        <table class="w-full text-black mt-9">
          <thead>
            <tr class="bg-gray-300 text-left">
              <th class="px-4 py-2">#</th>
              <th class="px-4 py-2">Nama</th>
              <th class="px-4 py-2">Foto</th>
              <th class="px-4 py-2">Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(foodProp, i) in food" :key="foodProp.id" class="even:bg-white odd:bg-gray-100">
              <td class="px-4 py-2">{{ i + 1 }}</td>
              <td class="px-4 py-2">{{ foodProp.nama }}</td>
              <td class="md:px-4 py-2">
                <img :src="foodProp.foto" @error="handleImageError(foodProp)" class="w-28 h-20 object-cover md:w-40 md:h-28"/>
              </td>
              <td class="md:px-4 px-2 text-sm md:text-base py-2">Rp. {{ foodProp.harga }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
