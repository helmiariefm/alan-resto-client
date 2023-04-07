import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
    state(){
        return {  
          baseUrl: `http://localhost:3000`,
          food: []
        }
    },
    actions: {
        async fetchFood(){
            const { data } = await axios({
                method: "get",
                url: `${this.baseUrl}/foodlist`,                
            });
            this.food = data;
        },
    }
})