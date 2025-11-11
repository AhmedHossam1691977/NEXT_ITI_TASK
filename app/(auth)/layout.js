import Footer from "../../components/Footer.jsx";
import Navbar from "../../components/Navbar.jsx";

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}