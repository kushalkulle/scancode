let cart = [];
let items = [
  { name: "iphone", id: 8880003770108, price: 30 },
  { name: "samsung", id: 1234567899992, price: 100 },
  { name: "lg", id: 6291062103288, price: 300 },
];
$("#enter").click(() => {
  const inputID = $("#txt_name").val();
  const selectedItem = items.find((d) => d.id == inputID);
  if (selectedItem) {
    if (cart?.filter((d) => d.id == selectedItem.id).length) {
      return;
    } else {
      cart.push(selectedItem);
    }
  }
  console.log(cart);
});

function onScanSuccess(decodedText, decodedResult) {
//   console.log(`Code scanned = ${decodedText}`, decodedResult);
//   const decodedText = $("#txt_name").val();
  const selectedItem = items.find((d) => d.id == decodedText);
    if (selectedItem) {
        if (cart?.filter((d) => d.id == selectedItem.id).length) {
          return;
        } else {
          cart.push(selectedItem);
          var aAudio = new Audio('bell.mp3');
          aAudio.play();
          console.table(cart);
        }
      }
 
  
}
var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", {
  fps: 10,
  qrbox: 250,
});
html5QrcodeScanner.render(onScanSuccess);
