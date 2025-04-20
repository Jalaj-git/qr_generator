const qrText= document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');
const qrContainer= document.querySelector('.qr-body');

let size= sizes.value;
generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();
});
size.addEventListener('change', (e)=>{
    size=e.target.value;
    isEmptyInput();
})

function isEmptyInput(){
   // if(qrText.value.length > 0){
     //   generateQRcode();
    //}
    //else{
      //  alert("enter a correct url or text value");
   // }
   qrText.value.length > 0 ? generateQRcode() : alert("enter correct value");
}

function generateQRcode(){
    qrContainer.innerHTML="",
    new QRCode(qrContainer,{
        text:qrText.value,
        height: size,
        width:size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}