import QRCode from "qrcode";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#000",
          light: "#fff",
        },
      },
      (err, url) => {
        if (err) return toast.error("NOOO EMPTY INPUT!");
        setQr(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Generator</h1>
      <input
        type="text"
        placeholder="https://www.youtube.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={GenerateQRCode}>Generate</button>
      {qr && (
        <>
          <img src={qr} />
          <a href={qr} download="qrcode.png">
            Download
          </a>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
