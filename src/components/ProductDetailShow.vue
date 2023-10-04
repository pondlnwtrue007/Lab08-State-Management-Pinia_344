<template>
    <!-- <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" width="100vw">
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="https://legendary-sfogliatella-22b1d4.netlify.app/img/slide1.png" class="d-block w-100" alt="Image 1">
              </div>
              <div class="carousel-item">
                  <img src="https://legendary-sfogliatella-22b1d4.netlify.app/img/slide2.png" class="d-block w-100" alt="Image 2">
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
      </div> -->
  
      <div class="row row-cols-1 mt-3" style="width: 40%; margin: auto;">
        <div class="col mb-4">
          <div class="card" >
            <img src="@/assets/1Skyarc.png" class="card-img-top" alt="">
            <div class="card-body">
              <h6 class="card-title mt-3">Special title treatment</h6>
              <p class="card-text" style="font-size: 1.7ch;">description</p>
              <div class="panelbuttcon">
                <div class="buttcon" >
                  <div class="input-group mb-2">
                    <span class="input-group-text quatitybuttbgminus"><button class="quatitybutt" @click="storeCounter.decrement"><img class="imgbutt" src="@/assets/minus.png" alt=""></button></span>
                    <input class="form-control no-spinners" type="number" v-model="storeCounter.counter" style="text-align: center; font-size: smaller;" min="0">
                    <span class="input-group-text quatitybuttbgplus"><button class="quatitybutt" @click="storeCounter.increment"><img class="imgbutt" src="@/assets/plus.png" alt=""></button></span>
                  </div>  
                </div>
              </div>
              <div class="panelbuttcon">
                <button type="button" class="btn btn-success" style="margin: auto; margin-bottom: 1%;">เพิ่มลงในตะกร้า</button>
              </div>
              <div class="panelbuttcon">
                <RouterLink to="/product" class="btn btn-primary" style="margin: auto; width: 100%;">เพิ่มเติม</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
  
  
    
  
  
  
  
  
  
  
  
  </template>
  
  <script setup>
  import  { useCounterStore } from '@/stores/products'
  import { RouterLink } from 'vue-router';
  
  const storeCounter = useCounterStore()
  </script>
  
  <style scoped>
  body{
    margin: 0%;
    padding: 0%;
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
  