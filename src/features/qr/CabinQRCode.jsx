import QRCodeGenerator from "../../componets/QRCodeGenerator";

function CabinQRCode() {
  const menuUrl = "http://192.168.1.6:5173/"; // Use your local network URL
  return <QRCodeGenerator url={menuUrl} />;
}

export default CabinQRCode;
