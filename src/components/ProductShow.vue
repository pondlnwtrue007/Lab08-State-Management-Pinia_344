<script setup>
import { RouterLink } from 'vue-router';
import  { useProductStore } from '@/stores/products'
const storeProduct = useProductStore()

const addToCart = (productData) => {
  storeProduct.addToCart({
    id: productData.id,
    Name: productData.Name,
    Price: productData.Price,
    PriceCal: productData.PriceCal,
    img: productData.img,
    quatity: productData.quatity,
  });
};
</script>

<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" width="100vw">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="@/assets/slide1.png" class="d-block w-100" alt="Image 1">
            </div>
            <div class="carousel-item">
                <img src="@/assets/slide2.png" class="d-block w-100" alt="Image 2">
            </div>
        </div>

        <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
        <ol class="carousel-indicators" style="list-style-type: none;">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1" class="active"></li>
        </ol>
    </div>

    <div class="row row-cols-5 mt-3" style="width: 95%; margin: auto;">
      <div class="col mb-4" v-for="(productData, index) in storeProduct.productsList" :key="index">
        <div class="card cardframe" >
          <img :src="productData.img" class="card-img-top" alt="productImg">
          <div class="card-body">
            <h6 class="card-title mt-3" style=" color: rgb(11, 34, 57);">{{ productData.Name }}</h6>
            <div class="pricetag">
                <p style="  color: rgb(11, 34, 57);">{{ productData.Price }}</p>
              </div>
            <div class="panelbuttcon">
              <div class="panelbuttcon">
                <div class="buttcon">
                  <div class="input-group mb-2">
                    <span class="input-group-text quatitybuttbgminus">
                      <button class="quatitybutt" @click="storeProduct.decrementQuantity(productData)">
                        <img class="imgbutt" src="@/assets/minus.png" alt="">
                      </button>
                    </span>
                    <input class="form-control no-spinners" type="number" v-model="productData.quatity" style="font-weight: bold; text-align: center; font-size: smaller; color: rgb(11, 34, 57);" min="0">
                    <span class="input-group-text quatitybuttbgplus">
                      <button class="quatitybutt" @click="storeProduct.incrementQuantity(productData)">
                        <img class="imgbutt" src="@/assets/plus.png" alt="">
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="panelbuttcon">
              <button type="button" class="btn btn-success" style="margin: auto; margin-bottom: 1%;"  @click="addToCart(productData)">เพิ่มลงในตะกร้า</button>
            </div>
            <div class="panelbuttcon">
              <RouterLink :to="{name: 'productDetail', params: {id: productData.id}}" class="btn btn-secondary" style="margin: auto; width: 100%;">เพิ่มเติม</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>



<style scoped>
body{
  margin: 0%;
  padding: 0%;
}

.cardframe:hover{
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}
.panelbuttcon{
  display: flex;
}

.buttcon{
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  
}

.quatitybuttbgminus:hover{
background-color: rgb(248, 79, 49);
}

.quatitybuttbgplus:hover{
background-color: rgb(35, 197, 82);
}


.quatitybutt{
  border: hidden;   
  background-color: transparent;
}

.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0; /* Optional: Adjust margin to control spacing */
}


.imgbutt{
  width: 1vw;
}
</style>
