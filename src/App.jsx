import QRCode from "qrcode"; // QRCode generation library
import { useState } from "react"; // React hook for state management
import { ToastContainer, toast } from "react-toastify"; // Notification library
import "react-toastify/dist/ReactToastify.css"; // CSS for notifications

function App() {
  // State variables to hold the URL input and the generated QR code data URL
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  // Function to generate QR code
  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url, // The URL to encode in the QR code
      {
        width: 800, // Width of the QR code
        margin: 2, // Margin around the QR code
        color: {
          dark: "#000", // Color of the dark modules
          light: "#fff", // Color of the light modules
        },
      },
      (err, url) => {
        if (err) return toast.error("NOOO EMPTY INPUT!"); // Display error if URL is empty or invalid
        setQr(url); // Set the generated QR code data URL to state
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Generator</h1>
      {/* Input field for the URL */}

      <input
        type="text"
        placeholder="https://www.youtube.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      {/* Button to generate the QR code */}
      <button onClick={GenerateQRCode}>Generate</button>
      {/* Display the generated QR code and a download link if available */}
      {qr && (
        <>
          <img src={qr} />
          <a href={qr} download="qrcode.png">
            Download
          </a>
        </>
      )}
      {/* Container for toast notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;
