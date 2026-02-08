let products = [
  { id: 1, name: "Lacivert Gömlek", price: 1999.9, image: "./photos/bluz_lacivert.webp" ,alt :"Lacivert Gömlek"},
  { id: 2, name: "Kırmızı Kısa Kollu Gömlek", price: 1499.9, image: "./photos/bluz_kirmizi.webp" , alt :"Kırmızı Kısa Kollu Gömlek"},
  { id: 3, name: "Leopar Desenli Gömlek", price: 2999.9, image: "./photos/gomlek_kahverengi.webp" , alt :"Leopar Desenli Gömlek"},
  { id: 4, name: "Mavi Örme Midi Elbise", price: 2499.9, image: "./photos/mavielbise.webp",alt :"Mavi Örme Midi Elbise" },
  { id: 5, name: "Fiyonk Detaylı Dokuma Mini Elbise", price: 799.9, image: "./photos/sarielbise.webp" ,alt :"Fiyonk Detaylı Dokuma Mini Elbise"},
  { id: 6, name: "Boncuk Detaylı Askılı Mini Elbise", price: 1499.9, image: "./photos/ketenelbise.webp", alt :"Boncuk Detaylı Askılı Mini Elbise" },
  { id: 7, name: "Sıfır Yaka Mesh Bluz", price: 1299.9, image: "./photos/gribluz.webp", alt :"Sıfır Yaka Mesh Bluz" },
  { id: 8, name: "Yılan Desenli Mini Etek", price: 2499.9, image: "./photos/yilanetek.webp" , alt :"Yılan Desenli Mini Etek" },
 { id: 9, name: "Uzun Kollu Saten Gömlek", price: 1899.9, image: "./photos/saten-gomlek.webp",alt :"Uzun Kollu Saten Gömlek"},  
  { id: 10, name: "Fermuarlı Peluş Mont", price: 3999.9, image: "./photos/pelus.webp" , alt :"Fermuarlı Peluş Mont"},   
];

function createCard(p) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

 const card=document.createElement("div");
 card.className="card shadow-sm";

 const img=document.createElement("img");
 img.src=p.image;
 img.alt=p.name;
 img.className="card-img-top";

 const body =document.createElement("div");
 body.className="card-body text-center";

 const title=document.createElement("h6");
 title.className="card-title";
 title.textContent=p.name;

 const price = document.createElement("p");
 price.className = "card-text text-danger fw-bold";
 price.textContent = `${p.price} TL`;

 const button = document.createElement("button");
 button.className = "btn btn-success btn-sm";
 button.textContent = "Sepete Ekle";

 button.addEventListener("click", () => {
    alert(`${p.name} sepete eklendi!`);
    });

    body.append(title,price,button);
    card.append(img,body);
    slide.append(card);
 return slide;
}



// Swiper yapılandırması
const wrapper = document.getElementById("product-wrapper");
products.forEach(p => wrapper.appendChild(createCard(p)));

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: { delay: 2000, disableOnInteraction: false },
  centeredSlides:false,
  loopedSlides: products.length,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: { slidesPerView: 6 }, // masaüstü
    992:  { slidesPerView: 5 },
    768:  { slidesPerView: 4 },
    576:  { slidesPerView: 3 },
    400:  { slidesPerView: 2 },
  }
});
