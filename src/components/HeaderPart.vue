<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <header class="d-flex flex-wrap justify-content-center py-3" style="width: 100%; background-image: url('src/assets/Topbar.png'); background-size: cover; background-repeat: no-repeat;">
        <RouterLink to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="50" height="70"></svg>
        <span class="fs-3" style="color: rgb(#CDBFBF); " ><h2> หน้าหลัก</h2></span>
        </RouterLink>
        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small ">
                <li>
                <RouterLink to="/cart" class="nav-link text-white"> 
                    <img class="bi d-block mx-auto mb-1" src="@/assets/cart.png" alt="cart" width="24" height="24" >
                    ตะกร้า  
                </RouterLink>
                </li>
                <li>
                <RouterLink to="/historyorder" class="nav-link text-white">
                    <img class="bi d-block mx-auto mb-1" src="@/assets/order.png" alt="cart" width="24" height="24" >
                    รายการสั่งซื้อ
                </RouterLink>
                </li>
            </ul>
    </header>
    
    
</template>

