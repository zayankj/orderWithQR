import { useEffect, useState } from "react";
import QRCode from "qrcode";

function QRCodeGenerator({ url }) {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL(url)
      .then((generatedUrl) => setQrCodeUrl(generatedUrl))
      .catch((err) => console.error("QR Code generation failed:", err));
  }, [url]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Scan to view menu 📱</h2>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
    </div>
  );
}

export default QRCodeGenerator;
