<script>
  import { mapActions } from 'pinia';
  import { useCounterStore } from '../stores/counter';

  export default{
    data(){
      return {
        fileName: '',
        nama: '',
        harga: 0,
        file: null
      }
    },
    methods: {
      ...mapActions(useCounterStore, ['addMenu']),
      async handleAddmenu() {
        const form = new FormData();
        form.append('nama', this.nama);
        form.append('harga', this.harga);
        form.append('foto', this.file); // Append the selected file

        try {
          await this.addMenu(form);
          this.$router.push('/food');
        } catch (err) {
          console.log(err);
        }
      },
      handleFileUpload(event) {
          const files = event.target.files;
          this.fileName = files[0].name;
          this.file = files[0]; // Store the selected file
      },
      handleFileDrop(event) {
          event.preventDefault();
          const files = event.dataTransfer.files;
          this.fileName = files[0].name;
          this.file = files[0]; // Store the dropped file
      }
    }
  }
</script>

<template>
    <div class="px-20 text-black mt-7">
      <div class="w-full p-9 bg-white shadow-lg">
        <h2 class="font-semibold text-sky-400 rounded-sm py-2 mb-9">Tambahkan Menu</h2>
        <form @submit.prevent="handleAddmenu">
          <label>Nama Menu</label>
          <input v-model="nama" type="text" class="w-full border-2 border-zinc-300 bg-white px-2 py-1 my-1 rounded-sm"/>
          <br><br>
          <label>Gambar</label>
          <div
            class="border-2 border-zinc-300 p-6 my-1 h-52 rounded-sm bg-zinc-100 text-center"
            @dragover.prevent
            @drop="handleFileDrop"
            @click="$refs.fileInput.click()"
          >
            <img src="../assets/upload.png" class="w-9 opacity-60 mx-auto mt-11"/>
            <label for="fileInput" :class="{ 'cursor-pointer text-zinc-400': !fileName, 'cursor-pointer text-emerald-500 font-semibold': fileName }">
              {{ fileName || 'drag and drop a file here or click' }}
            </label>
            <input
              type="file"
              id="fileInput"
              class="hidden"
              ref="fileInput"
              @change="handleFileUpload"
            />
          </div>
          <br>
          <label>Harga</label>          
          <div class="relative my-1">
            <input
              v-model="harga"
              type="number"
              class="px-20 py-2 border-2 border-zinc-300 rounded-sm w-full bg-white"              
            />
            <span class="absolute left-0 text-center pt-2 bg-sky-400 text-white text-lg h-11 w-16">Rp</span>
          </div>
          <br>
          <div class="text-right mt-2">
            <button type="submit" class="text-white font-semibold bg-emerald-600 hover:bg-emerald-500 rounded-sm px-2 py-1 w-48">Simpan</button>
          </div>
        </form>
      </div>
    </div>
</template>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
  .hidden {
    display: none;
  }
</style>