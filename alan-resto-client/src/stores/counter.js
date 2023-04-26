import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
    state(){
        return {  
          baseUrl: `https://dramatic-carpenter-production.up.railway.app`,          
          food: [],
          trans: [],          
        }
    },
    getters: {
        transLength() {
            return this.trans.length;
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
        async fetchTransaction(){
            const { data } = await axios({
                method: "get",
                url: `${this.baseUrl}/transactionlist`
            })       
            this.trans = data
        },
        async addMenu(form){
            try {
                const {data} = await axios({
                    method: 'post',
                    url: `${this.baseUrl}/addmenu`,
                    data: form
                })
                this.router.push("/food")
            } catch (err) {
                console.log(err)
            }
        },
        async productById(id){
            try {
              const {data} = await axios.get(`${this.baseUrl}/productbyid/${id}`)
              this.productDetail = data        
            //   this.router.push(`/productdetail/${id}`)
            } catch (err) {
              console.log(err)
            }
        },
        async addTransaction(id){
            // console.log(id, "<<<< coming from COUNTER STORE")
            try {
                const {data}= await axios({
                    method: "post",
                    url: `${this.baseUrl}/transactions/${id}`,                
                })            
                // Check if the product already exists in the transaction list
                const existingTransaction = this.trans.find(t => t.id === data.id)
                if (existingTransaction) {
                    existingTransaction.amount = data.amount
                    existingTransaction.harga = data.harga
                } else {
                this.trans.push(data)
                }
                // Clear the selected food item
                this.food = this.food.map(f => f.id === id ? { ...f, selected: false } : f)                
                this.router.push("/");
            } catch (err) {
                console.log(err)
            }
        },
        async clearCart(){
            try {
                const {data} = await axios({
                    method: 'delete',
                    url: `${this.baseUrl}/clear-cart`
                })
                this.trans = []
            } catch (err) {
                console.log(err)
            }
        }        
    }
})