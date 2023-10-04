<script setup>

</script>

<template>
    <div class="outcon">
        <div class="maincontainerr mt-3">
            <div class="cartheadd">
                <h2>ประวัติคำสั่งซื้อ</h2>
            </div>
            <div class="lateorder">
                <div class="orderdetail">
                    <div class="orderdetailhead">
                        <h4>คำสั่งซื้อ #{{ ordernumber }}</h4>
                    </div>
                    <table class="table custom-table"  style="text-align: center; vertical-align: middle;">
                    <thead>
                        <tr>
                        <th scope="col" style="width:55%;">สินค้า</th>
                        <th scope="col" style="width:15%;">ราคาต่อชิ้น</th>
                        <th scope="col" style="width:15%;">จำนวน</th>
                        <th scope="col" style="width:15%;">ราคารวม</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class="product-grid">
                            <div class="product-image">
                            <img src="@/assets/product-mockup.png" alt="" style="border-radius: 10px; width: 70%;">
                            </div>
                            <div class="product-name">
                            <span>{{productname}}</span>
                            </div>
                        </td>
                        <td>{{productpriceperpiece}}</td>
                        <td>
                            {{ quatityofproduct }} 
                        </td>
                        <td>{{totalproductprice}}</td>
                        </tr>
                    </tbody>
                    </table>
                    <div class="priceshow">
                        <p>รวม : {{ totalprice }} บาท</p>
                    </div>

                    <div class="customerDetail">
                       <p>ชื่อผู้รับ : {{ customerName }}</p>
                       <p>ที่อยู่ : {{ customerAddr }}</p>
                       <p>เบอร์โทรศัพท์ : {{ customerTel }}</p>
                    </div>
                </div>
            </div>  
        </div>
    </div>

    <div class="outcon">
        <div class="maincontainerrnull mt-3">
            <div class="cartheadd">
                <h2>ประวัติคำสั่งซื้อ</h2>
            </div>
            <div class="lateordernull">
                <div class="orderdetailnull">
                    <div class="orderdetailheadnull">
                        <h4>ยังไม่มีคำสั่งซื้อ</h4>
                    </div>
                </div>
            </div> 
        </div>
    </div>

</template>


<style>
.lateorder{
    padding: 1%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
}

.orderdetailhead{
    color: rgb(11, 34, 57);
    text-align: center;
}

.customerDetail{
    margin-left: 2%;
    font-size: large;
    color: rgb(11, 34, 57);
}

.priceshow{
    margin-right: 2%;
    text-align: right;
    font-size: large;
    color: rgb(11, 34, 57);
}

.outcon{
    display: flex;
    
}

.maincontainerr{
    border-radius: 10px;
    padding:1%;
    width: 90%;
    margin: auto;
    background-color: rgb(18, 56, 95);
}

.cartheadd{
    text-align: center;
    margin-bottom: 2%;
    color: rgb(255, 255, 255);
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

.custom-table {
  background-color: rgb(240, 240, 240); 
  
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


.maincontainerrnull{
    border-radius: 10px;
    padding:1%;
    width: 90%;
    margin: auto;
    background-color: rgb(18, 56, 95);
}

.lateordernull{
    padding: 1%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
}


.orderdetailheadnull h4{
    color: rgb(11, 34, 57);
    text-align: center;
    padding-top: 25vh;
    padding-bottom: 25vh;
}


</style>