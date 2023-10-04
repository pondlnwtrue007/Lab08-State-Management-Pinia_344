<script setup>
import  { useCounterStore } from '@/stores/products'


const storeCounter = useCounterStore()

</script>

<template>
    <div class="outcon">
        <div class="maincontainer mt-3">
            <div class="bd-example">
            <table class="table table-light"  style="text-align: center; vertical-align: middle;">
                <thead>
                <tr>
                <th scope="col" style="width:40%;">สินค้า</th>
                <th scope="col" style="width:20%;">ราคาต่อชิ้น</th>
                <th scope="col">จำนวน</th>
                <th scope="col">ราคารวม</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="product-grid">
                    <div class="product-image">
                    <img src="@/assets/product-mockup.png" alt="" style="border-radius: 10px; width: 100%;">
                    </div>
                    <div class="product-name">
                    <span>productname</span>
                    </div>
                </td>
                <td>productprice</td>
                <td>
                    <div class="panelbuttcon">
                        <div class="buttcon" >
                        <div class="input-group mb-2">
                            <span class="input-group-text quatitybuttbgminus"><button class="quatitybutt" @click="storeCounter.decrement"><img class="imgbutt" src="@/assets/minus.png" alt="minus"></button></span>
                            <input class="form-control no-spinners" type="number" v-model="storeCounter.counter" style="text-align: center; font-size: smaller;" min="0">
                            <span class="input-group-text quatitybuttbgplus"><button class="quatitybutt" @click="storeCounter.increment"><img class="imgbutt" src="@/assets/plus.png" alt="minus"></button></span>
                        </div>  
                        </div>
                    </div>
                </td>
                <td>@mdo</td>
                <td>ewf</td>
                </tr>
                
            </tbody>

            </table>
            </div>
        </div>
    </div>
</template>


<style>
.outcon{
    display: flex;
}

.maincontainer{
    width: 80%;
    margin: auto;
}

.table td {
    padding: 0.2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-column-gap: 2%; 
  align-items: center; 
}



</style>