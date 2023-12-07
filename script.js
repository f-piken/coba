const btn = document.getElementById('btn')
const para = document.getElementById('peru')
btn.addEventListener('click',()=>{
    para.classList.toggle('active');
});
// function startScrolling() {
//     const container = document.querySelector('.konten');
//     const items = document.querySelectorAll('.tiga');
//     let position = 0;
//     const scrollSpeed = 2; // Atur kecepatan scroll
  
//     function scroll() {
//       position += scrollSpeed;
//       container.style.transform = `translateX(-${position}px)`;
  
//       if (position + container.clientWidth > container.scrollWidth) {
//         position = 0;
//       }
  
//       requestAnimationFrame(scroll);
//     }
  
//     requestAnimationFrame(scroll);
//   }
  
//   startScrolling();

document.querySelectorAll('.peru a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Sesuaikan dengan jarak yang diinginkan dari bagian atas
            behavior: 'smooth'
        });
    });
});
  