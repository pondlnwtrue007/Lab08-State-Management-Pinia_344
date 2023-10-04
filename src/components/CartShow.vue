<script setup>
import  { useCounterStore } from '@/stores/products'


const storeCounter = useCounterStore()

</script>

<template>
    <div class="outcon">
        <div class="maincontainer mt-3">
            <div class="carthead">
                <h2>ตะกร้าสินค้าของคุณ</h2>
            </div>

            <div class="bd-example">
            <table class="table custom-table"  style="text-align: center; vertical-align: middle;">
                <thead>
                <tr>
                <th scope="col" style="width:40%;">สินค้า</th>
                <th scope="col" style="width:10%;">ราคาต่อชิ้น</th>
                <th scope="col" style="width:20%;">จำนวน</th>
                <th scope="col" style="width:10%;">ราคารวม</th>
                <th scope="col" style="width:20%;">Action</th>
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
                <td>productpriceperpiece</td>
                <td>
                    <div class="panelbuttcon">
                        <div class="buttcon" >
                        <div class="butsemicon">
                        <div class="input-group mb-2">
                            <span class="input-group-text quatitybuttbgminus"><button class="quatitybutt" @click="storeCounter.decrement"><img class="imgbutt" src="@/assets/minus.png" alt="minus"></button></span>
                            <input class="form-control no-spinners" type="number" v-model="storeCounter.counter" style="text-align: center; font-size: smaller;" min="0">
                            <span class="input-group-text quatitybuttbgplus"><button class="quatitybutt" @click="storeCounter.increment"><img class="imgbutt" src="@/assets/plus.png" alt="minus"></button></span>
                        </div>
                        </div> 
                        </div>
                    </div>
                </td>
                <td>totalproductprice</td>
                <td>
                     <button class="binbutt">
                         <img src="@/assets/bin.png" alt="bin" style="width: 20%;">
                        ลบออกจากตะกร้า
                    </button>
                </td>
                </tr>
                
            </tbody>

            </table>
            </div>
        </div>
    </div>

    <div class="outconbill">
        <div class="mainbillcontainer mt-3">
            <div class="billhead">
                
            </div>
            <div class="detailbill">
                <p>รวม : {{ totalprice }} บาท</p>
                <hr>
                <p>รายละเอียดการสั่งซื้อ</p>
                <form action="">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">ชื่อผู้รับ</span>
                        <input id="name" type="text" class="form-control" placeholder="ชื่อผู้รับ" aria-label="Username" aria-describedby="basic-addon1" required="">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">ที่อยู่</span>
                        <textarea class="form-control" aria-label="With textarea" placeholder="ที่อยู่" required></textarea>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">เบอร์โทรศัพท์</span>
                        <input id="num" class="form-control" type="text" pattern="[0-9]{10}" maxlength="10" placeholder="กรอกเบอร์โทรศัพท์(10หลัก)" aria-label="tel" aria-describedby="basic-addon1" required="">
                    </div>
                    <div class="panelbuttcon">
                        <button type="submit" class="btn btn-success" style="margin: auto; margin-bottom: 1%;">ยืนยันการสั่งซื้อ</button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
</template>


<style>
.outcon{
    display: flex;
    
}
.outconbill{
    display: flex;
    margin-bottom: 2%;
}

.maincontainer{
    border-radius: 10px;
    padding:1%;
    width: 90%;
    margin: auto;
    background-color: white;
}

.mainbillcontainer{
    border-radius: 10px;
    padding:1%;
    width: 30%;
    margin-left: 65%;
    background-color: white;
}

.carthead{
    text-align: center;
    margin-bottom: 2%;
}

.billhead{
    text-align: center;
}

.detailbill{
    text-align:left;
    font-size: larger;
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

.imgbutt{
  width: 1vw;
}

.buttcon{
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  
}

.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
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


.custom-table {
  background-color: rgb(240, 240, 240); 
  border-collapse: collapse; 
  
}


.custom-table th {
  background-color: rgb(18, 56, 95); 
  color: rgb(255, 255, 255); 
}


.custom-table td {
  background-color: rgb(236, 236, 236); 
  color: #333; 
  border: 1px solid rgb(230, 221, 221);
   
}


.binbutt{
  border-radius: 10px;
  padding: 2%;
  border: hidden;   
  background-color: transparent;
  background-color: rgb(255, 255, 255);
}

.binbutt:hover{
  border: hidden;   
  background-color: rgb(248, 79, 49);
}

.panelbuttcon{
    display: flex;
}
</style>