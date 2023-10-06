import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id : 'productList',
  idCounter : 'counter',
  state: () => ({
    counter : 1,
    productsList : [
      { id : 1,
        Name : 'YONEX Skyarc สายเอ็นแบดมินตัน',
        Des1 : 'สายเอ็นแบดมินตันผลิตจากวัสดุไฟเบอร์และไนล่อนโพลีเมอร์', 
        Des2 : 'YONEX Skyarc สายเอ็นแบดมินตันผลิตจากวัสดุไฟเบอร์และไนล่อนโพลีเมอร์ มีความเหนียวแข็งแรงและทนทานสูง สะดวกในการติดตั้งใช้งานง่าย', 
        Price : '฿320.00',
        PriceCal : 320, 
        img : "./src/assets/1Skyarc.png",
        quatity : 0 },
      { id : 2,
        Name : 'YONEX Nanoflare 100',
        Des1 : 'ออกแบบให้เหมาะสำหรับผู้เล่นที่ชอบไม้หัวเบา', 
        Des2 : 'ออกแบบให้เหมาะสำหรับผู้เล่นที่ชอบไม้หัวเบาที่สามารถสวิงไม้ได้อย่างรวดเร็ว พร้อมด้ามจับถนัดมือให้คุณควบคุมไม้และลูกตบได้อย่างมั่นใจ', 
        Price : '฿690.00',
        PriceCal : 690, 
        img : './src/assets/2YONEXNanoflare100.png',
        quatity : 0 },
      { id : 3,
        Name : 'YONEX Aerosensa10',
        Des1 : 'ลูกขนไก่ YONEX ผลิตจากวัสดุคุณภาพดี', 
        Des2 : 'ลูกขนไก่ YONEX รุ่น Aerosensa10 (AS-10) ผลิตจากวัสดุคุณภาพดี สปริงตัวตอบสนองต่อแรงตีได้อย่างดี สามารถใช้ได้ทั้งผู้เล่นระดับเริ่มต้นไปจนถึงมืออาชีพ', 
        Price : '฿750.00',
        PriceCal : 750, 
        img : './src/assets/3Aerosensa10.png',
        quatity : 0 },
      { id : 4,
        Name : 'YONEX Nanoflare Feel',
        Des1 : 'โดดเด่นดีไซน์เฉียบบางที่สุดที่เคยผลิตโดย YONEX', 
        Des2 : 'ไม้แบดมินตัน YONEX Nanoflare Feel โดดเด่นดีไซน์เฉียบบางที่สุดที่เคยผลิตโดย YONEX ช่วยลดแรงต้านของอากาศในขณะที่มอบความรู้สึกในการตี เฟรม AERO เพื่อความโค้งมนทั่วทั้งหัวไม้ ลดการต้านลมและเพิ่มความเร็วไม้ มาพร้อมเทคโนโลยี ISOMETRICTM ขยายจุด Sweet spot ให้ใหญ่ขึ้นโดยการปรับจุดตัดของสายหลักและสายไขว้ให้เหมาะสม', 
        Price : '฿1,680.00', 
        PriceCal : 1680,
        img : './src/assets/4YONEXNanoflareFeel.png',
        quatity : 0 },
      { id : 5,
        Name : 'YONEX Astrox 88D Play',
        Des1 : 'โดดเด่นด้วยเฟรม AERO+BOX เพื่อมอบสัมผัสการตีที่หนักแน่นและการสวิงที่รวดเร็ว', 
        Des2 : 'ไม้แบดมินตัน YONEX Astrox 88D Play โดดเด่นด้วยเฟรม AERO+BOX เพื่อมอบสัมผัสการตีที่หนักแน่นและการสวิงที่รวดเร็ว มากับเทคโนโลยี Volume Cut Resin ช่วยลดน้ำหนักไม้ให้เบาลงกว่าเดิม ผสานระบบ Rotational Generator ให้คุณเปลี่ยนช็อตได้อย่างราบรื่น ต่อเนื่องและรวดเร็ว เหมาะสำหรับการเล่นคู่ที่ต้องการรูปแบบการเล่นที่รวดเร็วและแม่นยำ มอบพลังการตีจากท้ายคอร์ทไปยังฝั่งตรงข้ามได้อย่างมีประสิทธิภาพ', 
        Price : '฿1,760.00',
        PriceCal : 1760.00, 
        img : './src/assets/5YONEXAstrox88DPlay.png',
        quatity : 0 },
      { id : 6,
        Name : 'YONEX Arcsaber 7 Tour',
        Des1 : 'กรอบไม้แกรไฟต์ HM / Pocketing Booster', 
        Des2 : 'กรอบไม้ : แกรไฟต์ HM / Pocketing Booster ก้านไม้ : แกรไฟต์ HM น้ำหนัก / ด้ามจับ : 4U (ประมาณ 83 กรัม) G5', 
        Price : '฿3,315.00',
        PriceCal : 3315.00, 
        img : './src/assets/6YONEXArcsaber7Tour.png',
        quatity : 0 },
      { id : 7,
        Name : 'YONEX Nanoflare 600 ',
        Des1 : 'มอบความเร็วและการคอนโทรลลูกได้อย่างมีประสิทธิภาพและแม่นยำ', 
        Des2 : 'YONEX Nanoflare 600 ไม้แบดมินตันที่มาพร้อมตัวเฟรมทำจากวัสดุ HM Graphite, M40X, SUPER HMG, VDM มีความแข็งแรงทนทาน และด้ามจับหุ้มด้วย Graphite TORAYCAR M40X และ SUPER HMG น้ำหนักเบา สามารถจับแน่นกระชับไม่ลื่นหลุดมือ ผสานเทคโนโลยี ISOMETRIC™ ช่วยมอบความเร็วและการคอนโทรลลูกได้อย่างมีประสิทธิภาพและแม่นยำ', 
        Price : '฿4,615.00', 
        PriceCal : 4615.00,
        img : './src/assets/7YONEXNanoflare600.png',
        quatity : 0 },
      { id : 8,
        Name : 'YONEX Astrox 88S Pro',
        Des1 : 'ตอบโจทย์การเล่นเพื่อโจมตีอย่างแม่นยำและรวดเร็ว', 
        Des2 : 'ไม้แบดมินตัน YONEX Astrox 88S Pro ออกแบบมาสำหรับผู้เล่นในตำแหน่งหน้าคอร์ทช่วยให้ลูกรับส่งยาวขึ้นเพื่อการควบคุมบริเวณตาข่ายอย่างแม่นยำ พัฒนาไปอีกขั้นด้วยเทคโนโลยีใหม่ VOLUME CUT RESIN เรซินที่ใช้ในปริมาณน้อยลง น้ำหนักเบาขึ้นเพิ่มความสมดุลของน้ำหนักที่ถ่วง ส่งผลให้กระจายน้ำหนักได้ดีกว่าเดิม ตอบโจทย์การเล่นเพื่อโจมตีอย่างแม่นยำและรวดเร็ว', 
        Price : '฿5,455.00', 
        PriceCal : 5455.00,
        img : './src/assets/8YONEXAstrox88SPro.png',
        quatity : 0 },
      { id : 9,
        Name : 'YONEX Arcsaber 11 Pro',
        Des1 : 'น้ำหนักเบาเพียง 83 กรัม', 
        Des2 : 'กรอบไม้ : แกรไฟต์ HM / Pocketing Booster ก้านไม้ : แกรไฟต์ HM / SUPER HMG / ULTRA PE FIBER น้ำหนัก / ด้ามจับ : 4U (ประมาณ 83 กรัม) G5, 6 / 3U (ประมาณ 88 กรัม)', 
        Price : '฿5,455.00', 
        PriceCal : 5545.00, 
        img : './src/assets/9YONEXArcsaber11Pro.png',
        quatity : 0 },
      { id : 10,
        Name : 'YONEX Astrox 99 Pro',
        Des1 : 'เปิดเกมรุกได้อย่างคล่องแคล่วและยืดหยุ่น', 
        Des2 : 'ควบคุมเกมด้วยทักษะที่เหนือชั้น ด้วยไม้แบดมินตัน YONEX Astrox 99 Pro ผลิตจากวัสดุที่แข็งแรง ทนทาน ผสานเทคโนโลยีเพื่อซัพพอร์ทการตีลูกอย่างทรงพลัง ปรับจุดกระทบลูกให้กว้างขึ้นเพื่อเพิ่มความแม่นยำในทุกช็อต พร้อมเปิดเกมรุกอย่างคล่องแคล่วและยืดหยุ่น', 
        Price : '฿5,525.00',
        PriceCal : 5525.00, 
        img : './src/assets/10YONEXAstrox99Pro.png',
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

