import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id : 'productList',
  idCounter : 'counter',
  state: () => ({
    counter : 1,
    productsList : [
      { id : 1,
        Name : 'Guava (ฝรั่ง)',
        Des1 : 'TEST1', 
        Des2 : 'ประโยชน์: มีวิตามิน C มาก ช่วยในการเสริมสร้างระบบภูมิคุ้มกัน และลดความเสี่ยงต่อการเกิดโรคหัวใจ', 
        Price : '฿15.00 บาท/ผล',
        PriceCal : 15, 
        img : "../Img/Guava.png",
        quatity : 0 },
      { id : 2,
        Name : 'Coco (มะพร้าว)',
        Des1 : 'TEST2', 
        Des2 : 'ประโยชน์: ช่วยบำรุงผิวพรรณ และกระตุ้นระบบย่อยอาหาร', 
        Price : '฿30.00 บาท/ลูก',
        PriceCal : 30, 
        img : '../Img/coco.png',
        quatity : 0 },
      { id : 3,
        Name : 'Grape (องุ่น)',
        Des1 : 'TEST3', 
        Des2 : 'ประโยชน์: มีสารประกอบที่ช่วยลดความเสี่ยงต่อโรคหัวใจ', 
        Price : '฿80.00 บาท/กก.',
        PriceCal : 80, 
        img : '../Img/Grape.png',
        quatity : 0 },
      { id : 4,
        Name : 'Avocado (อะโวคาโด)',
        Des1 : 'TEST4', 
        Des2 : 'ประโยชน์: มีไขมันดีที่ช่วยลดคอเลสเตอรอลในเลือด', 
        Price : '฿60.00 บาท/ผล', 
        PriceCal : 60,
        img : '../Img/Avocado.png',
        quatity : 0 },
      { id : 5,
        Name : 'Mango (มะม่วง)',
        Des1 : 'TEST5', 
        Des2 : 'ประโยชน์: มีวิตามิน A ช่วยในการบำรุงตา', 
        Price : '฿25.00 บาท/ผล',
        PriceCal : 25, 
        img : '../Img/Mango.png',
        quatity : 0 },
      { id : 6,
        Name : 'Apple (แอปเปิ้ล)',
        Des1 : 'TEST6', 
        Des2 : 'ประโยชน์: ช่วยในการควบคุมระดับน้ำตาลในเลือด', 
        Price : '฿20.00 บาท/ผล',
        PriceCal : 20, 
        img : '../Img/Apple.png',
        quatity : 0 },
      { id : 7,
        Name : 'Pineapple (สับปะรด)',
        Des1 : 'TEST7', 
        Des2 : 'ประโยชน์: ช่วยบำรุงระบบย่อยอาหาร', 
        Price : '฿35.00 บาท/ผล', 
        PriceCal : 35,
        img : '../Img/Pieapple.png',
        quatity : 0 },
      { id : 8,
        Name : 'Orange (ส้ม)',
        Des1 : 'TEST8', 
        Des2 : 'ประโยชน์: มีวิตามิน C ช่วยเสริมสร้างระบบภูมิคุ้มกัน', 
        Price : '฿15.00 บาท/ผล', 
        PriceCal : 15,
        img : '../Img/Orange.png',
        quatity : 0 },
      { id : 9,
        Name : 'Banana (กล้วย)',
        Des1 : 'TEST9', 
        Des2 : 'ประโยชน์: มีโพแทสเซียมที่ช่วยบำรุงกล้ามเนื้อ', 
        Price : '฿10.00 บาท/ผล', 
        PriceCal : 10, 
        img : '../Img/Banana.png',
        quatity : 0 },
      { id : 10,
        Name : 'Papaya (มะละกอ)',
        Des1 : 'TEST10', 
        Des2 : 'ประโยชน์: มีโพแทสเซียมที่ช่วยบำรุงกล้ามเนื้อ', 
        Price : '฿10.00 บาท/ผล',
        PriceCal : 10, 
        img : '../Img/papaya.png',
        quatity : 0 },
        ],
        CartList : [],
        OrderList : [],
        totalOverallPrice: 0
  }),
  getters: {
    totalOverallPrice() {
      return this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },

  },
  actions: {
    incrementQuantity(product) {
      product.quatity++;
    },
    decrementQuantity(product) {
      if (product.quatity > 0) {
        product.quatity--;
      }
    },
    addToCart(productData) {
      const existingProduct = this.CartList.find((product) => product.id === productData.id);

      if (existingProduct) {
        if (productData.quatity > 0) {
          existingProduct.quatity += productData.quatity;
          existingProduct.totalProductPrice = existingProduct.quatity * existingProduct.PriceCal;
        }
      } else {
        if (productData.quatity > 0) {
          const newProduct = { ...productData };
          newProduct.totalProductPrice = newProduct.quatity * newProduct.PriceCal;
          this.CartList.push(newProduct);
        }
      }

      const productIndex = this.productsList.findIndex((product) => product.id === productData.id);
      if (productIndex !== -1) {
        this.productsList[productIndex].quatity = 0;
      }
  
     
      this.updateTotalOverallPrice();
    },

    updateTotalOverallPrice() {
      this.totalOverallPrice = this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },
    removeFromCart(productId) {
      const productIndex = this.CartList.findIndex((product) => product.id === productId);
      if (productIndex !== -1) {
        this.CartList.splice(productIndex, 1); 
        this.updateTotalOverallPrice();
      }
    },
    addOrder(orderData) {
      this.OrderList.push(orderData);
      this.CartList = [];
      this.totalOverallPrice = 0;
    },
  },  
      
})

