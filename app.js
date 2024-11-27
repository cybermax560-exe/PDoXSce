const images = [
    { src: "images/workshop1.jpg", alt: "Workshop 1" },
    { src: "images/workshop2.jpg", alt: "Workshop 2" },
    { src: "images/workshop3.jpg", alt: "Workshop 3" },
  ];
  
  const galleryContainer = document.getElementById("gallery-container");
  
  images.forEach(image => {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.className = "gallery-image";
    galleryContainer.appendChild(img);
  });
  
  function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}
