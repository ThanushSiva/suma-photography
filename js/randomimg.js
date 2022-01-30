const imgselector = document.querySelector("#randomimg");
const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

const imgfun = () => {
    setInterval(() => {
        imgselector.src = images[Math.floor(Math.random()*images.length)]
    },2000);
};

imgfun();