<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">
        Add Item
      </h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label for="">Name</label>
          <input type="text" class="form-control" v-model="item.name" required>

        </div>

         <div class="form-group">
          <label for="">Description</label>
          <input type="text" class="form-control" v-model="item.description" required>

        </div>

         <div class="form-group">
          <label for="">Price</label>
          <input type="text" class="form-control" step="0.01"  min="0" v-model="item.price" required />

        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Add Item</button>
        </div>
      </form>

    </div>

  </div>
</template>

<script>
import { db } from '../firebaseDb';

export default {
  data(){
    return {
      item: {

      }
    }
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault()
      db.collection('items').add(this.item).then (()=>{
        alert("Item successfully created!");
       
        this.item.name = ''
        this.item.description = ''
        this.item.price = ''
         console.log(this.item)
      }).catch((error) => {
        console.log(error)
      });
    }
  }
  
}
</script>