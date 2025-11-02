let products = [
  { id: 1, name: "Lacivert Gömlek", price: 1999.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW035633/bluz_5ww035633_lacivert-494-lacivert_1_614x805.webp" },
  { id: 2, name: "Kırmızı Kısa Kollu Gömlek", price: 1499.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW035264/bluz_5ww035264_kirmizi-600-kirmizi_1_614x805.webp" },
  { id: 3, name: "Leopar Desenli Gömlek", price: 2999.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW085612/gomlek_5ww085612_aci-kahve-803-kahverengi_1_614x805.webp" },
  { id: 4, name: "Mavi Örme Midi Elbise", price: 2499.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW065870/elbise_5ww065870_koyu-petrol-427-koyu-yesil_1_614x805.webp" },
  { id: 5, name: "Fiyonk Detaylı Dokuma Mini Elbise", price: 799.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025yaz/5SW064409/elbise_5sw064409_ekru-114-ekru_3_614x805.webp" },
  { id: 6, name: "Boncuk Detaylı Askılı Mini Elbise", price: 1499.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025yaz/5SW063118/100-keten-duz-kesim-boncuk-detayli-askili-mini-elbise_5sw063118_aci-kahve-803-kahverengi_8_614x805.webp"},
  { id: 7, name: "Sıfır Yaka Mesh Bluz", price: 1299.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW036014/dar-kesim-sifir-yaka-renk-gecisli-mesh-bluz_5ww036014_gri-920-gri_2_614x805.webp" },
  { id: 8, name: "Yılan Desenli Mini Etek", price: 2499.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW075738/yilan-desenli-deri-gorunumlu-mini-etek_5ww075738_kahverengi-800-kahverengi_2_614x805.webp" },
 { id: 9, name: "Uzun Kollu Saten Gömlek", price: 1899.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW085970/rahat-kesim-uzun-kollu-saten-gomlek_5ww085970_saks-458-lacivert_1_614x805.webp" },  
  { id: 10, name: "Fermuarlı Peluş Mont", price: 3999.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW053688/dik-yaka-cep-detayli-fermuarli-pelus-mont_5ww053688_acik-kahve-815-kahverengi_1_614x805.webp" }   
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
