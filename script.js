const genbtn=document.querySelector('.genbtn');
// const qr=document.querySelector('.resultbox img');
let qrInput=document.querySelector('input')
qrImg=document.querySelector('.resultbox img')
var preloader = document.querySelector('.preloader');
// const downbtn=document.querySelector('.downbtn');

genbtn.addEventListener("click",()=>{

    let qrvalue=qrInput.value;
    if(!qrvalue) return ;

    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    preloader.style.display="block"
    qrImg.style.display="none";
    genbtn.innerHTML="Generating...."

    qrImg.addEventListener('load',()=>{
        qrImg.style.display="flex";
        genbtn.innerHTML="Completed."  
        // downbtn.style.display="flex";
        preloader.style.display = 'none';
    
        // Show the image
        var qrImage = document.getElementById('qrimage');
        qrImage.style.display = 'block';

    });

})


// function downloadImage() {
//     // Get the image element by its id
//     var imgElement = document.getElementById('qrimage');
    
//     // Create a temporary anchor element
//     var a = document.createElement('a');
    
//     // Set the download attribute with the desired file name
//     a.download = 'Qr_Code.jpg';
    
//     // Create a data URL from the image source
//     a.href = imgElement.src;

//     // Check if the browser supports the download attribute
//     if ('download' in a) {
//         // Append the anchor element to the document body
//         document.body.appendChild(a);
        
//         // Trigger a click on the anchor element to start the download
//         a.click();
        
//         // Remove the anchor element from the document
//         document.body.removeChild(a);
//     } else {
//         // For browsers that do not support the download attribute, open the image in a new tab/window
//         window.open(imgElement.src, '_blank');
//     }
// }
