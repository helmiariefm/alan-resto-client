<script>
    export default {
        props: {
            title: String,
            content: String
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
                    <tr class="even:bg-white odd:bg-gray-100">
                        <td class=" px-4 py-2">1</td>
                        <td class=" px-4 py-2">Sate Ayam</td>
                        <td class=" px-4 py-2">
                            <img src="https://cdn-2.tstatic.net/jambi/foto/bank/images/resep-sate-ayam-manis.jpg" class="w-28 h-20 mx-auto"/>
                        </td>
                        <td class=" px-4 py-2">Rp. 30.000</td>
                    </tr>
                    <tr class="even:bg-white odd:bg-gray-100">
                        <td class=" px-4 py-2">2</td>
                        <td class=" px-4 py-2">Sate Ayam</td>
                        <td class=" px-4 py-2">
                            <img src="https://cdn-2.tstatic.net/jambi/foto/bank/images/resep-sate-ayam-manis.jpg" class="w-28 h-20 mx-auto"/>
                        </td>
                        <td class=" px-4 py-2">Rp. 30.000</td>
                    </tr>
                    <tr class="even:bg-white odd:bg-gray-100">
                        <td class=" px-4 py-2">3</td>
                        <td class=" px-4 py-2">Sate Ayam</td>
                        <td class=" px-4 py-2">
                            <img src="https://cdn-2.tstatic.net/jambi/foto/bank/images/resep-sate-ayam-manis.jpg" class="w-28 h-20 mx-auto"/>
                        </td>
                        <td class=" px-4 py-2">Rp. 30.000</td>
                    </tr>
                </tbody>
            </table>

            <div class="relative mx-7"></div>
            
            <div class="w-4/12">
                <h2 class="text-lg font-semibold">Uang pembeli (Rp)</h2>
                <form>
                    <input type="number" class="w-full px-3 py-1 rounded-sm text-black bg-white border-2 border-gray-200"/>
                    <div class="flex gap-3 mt-3">
                        <button @click="$emit('close')" class="w-full px-3 rounded-sm border-2 border-gray-200 text-gray-400">Close</button>
                        <button class="w-full text-white font-semibold bg-sky-500 px-3 rounded-sm">Pay!</button>
                    </div>
                    <div class="mt-3">
                        <h2 class="text-red-500 text-lg text-left">Kembalian : </h2>
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
