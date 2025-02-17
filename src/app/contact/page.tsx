import ContactForm from "@/components/contact-form";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us. We'd love to hear from you!",
  openGraph: {
    title: "Contact | SmurfCodes",
    description: "Get in touch with us. We'd love to hear from you!",
    url: "https://smurfcodes.com/contact",
    images: [
      {
        url: "https://mywebsite.com/contact-og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};
export default function ContactPage() {
  return (
    <>
      <Navbar />{" "}
      <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-cyan-500 text-transparent bg-clip-text">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We&apos;re here to help and answer any question you might have. We
              look forward to hearing from you!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
