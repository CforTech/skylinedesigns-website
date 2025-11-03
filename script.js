document.getElementById("year").textContent = new Date().getFullYear();
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");
const zoomBtn = document.getElementById("zoomBtn");
let zoomed = false;
document.querySelectorAll(".gallery-container img").forEach(img=>{
  img.addEventListener("click",()=>{
    modal.classList.add("active");
    modalImg.src = img.src;
    zoomed = false;
    modalImg.style.transform = "scale(1)";
  });
});
closeModal.addEventListener("click",()=>modal.classList.remove("active"));
zoomBtn.addEventListener("click",()=>{
  zoomed = !zoomed;
  modalImg.style.transform = zoomed ? "scale(1.8)" : "scale(1)";
});
modal.addEventListener("click",(e)=>{if(e.target===modal) modal.classList.remove("active");});
const slides = document.getElementById("slides");
const slideImages = slides.querySelectorAll("img");
const totalSlides = slideImages.length;
let index = 0;
document.getElementById("next").addEventListener("click",()=>{index=(index+1)%totalSlides;slides.style.transform=`translateX(-${index*100}%)`;});
document.getElementById("prev").addEventListener("click",()=>{index=(index-1+totalSlides)%totalSlides;slides.style.transform=`translateX(-${index*100}%)`;});
setInterval(()=>{index=(index+1)%totalSlides;slides.style.transform=`translateX(-${index*100}%)`;},5000);
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();alert("Thank you for contacting Skyline Design Services!");e.target.reset();});