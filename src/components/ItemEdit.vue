<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update item</h3>
            <form @submit.prevent="onUpdateForm">
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
                    <input type="number"  step="0.01"  min="0" class="form-control" v-model="item.price" required>

                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update Item</button>
                </div>
            </form>

        </div>

    </div>
</template>

<script>
import {db} from '../firebaseDb';

export default {
    data(){
        return{
            item: {

            }
        }
    },
    created(){
        let dbRef = db.collection('items').doc(this.$route.params.id);
        dbRef.get().then((doc)=>{
            this.item = doc.data();

        }).catch((error)=>{
            console.log(error)
        })
    },

    methods: {
        onUpdateForm(event){
            event.preventDefault()
            db.collection('items').doc(this.$route.params.id)
            .update(this.item).then(()=>{
                console.log("Item Successfully updated!");
                this.$router.push('/list')
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
    
}
</script>