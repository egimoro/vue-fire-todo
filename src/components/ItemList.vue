<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in Items" :key="item.key">
                        <td>{{ item.name }}</td>
                         <td>{{ item.description}}</td>
                          <td>{{ item.price }}</td>
                          <td>
                              <router-link :to="{name: 'edit', params: {id: item.key}}" class="btn btn-primary">Edit</router-link>
                              <button @click.prevent="deleteItem(item.key)" class="btn btn-danger">Delete</button>
                          </td>

                    </tr>
                </tbody>
            </table>

        </div>

    </div>
</template>

<script>
import {db} from '../firebaseDb';
export default {

    data(){
        return {
            Items: []
        }
    },
    created(){
        db.collection('items').onSnapshot((snapsgotChange)=>{
            this.Items = [];
            snapsgotChange.forEach((doc)=>{
                this.Items.push({
                    key: doc.id,
                    name: doc.data().name,
                    description:doc.data().description,
                    price: doc.data().price

                })
            });
        })
    },
    methods: {
        deleteItem(id){
            if (window.confirm("Do you really want to delete?")){
                db.collection("items").doc(id).delete().then(()=>{
                    console.log("Document Deleted!")
                })
                .catch((error)=>{
                    console.error(error);
                })
            }
        }
    }
    
}
</script>

<style>
    .btn-primary{
        margin-right: 12px;
    }
</style>