import React from "react";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-miikaty mb-4">Contactez-nous</h2>
      <form className="space-y-4 mb-8">
        <input type="text" placeholder="Nom" className="w-full border rounded px-3 py-2" required />
        <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2" required />
        <textarea placeholder="Votre message" className="w-full border rounded px-3 py-2" rows="5" required></textarea>
        <button type="submit" className="bg-miikaty text-white px-6 py-2 rounded font-semibold hover:bg-miikaty-dark transition">Envoyer</button>
      </form>
      <div className="mb-8 text-gray-600">
        <p>Email : contact@miikaty.com</p>
        <p>Téléphone : +33 1 23 45 67 89</p>
      </div>
      <div className="flex gap-4 mt-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-miikaty text-2xl hover:text-miikaty-dark transition"><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-miikaty text-2xl hover:text-miikaty-dark transition"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-miikaty text-2xl hover:text-miikaty-dark transition"><i className="fab fa-instagram"></i></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-miikaty text-2xl hover:text-miikaty-dark transition"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="mt-8 text-sm text-gray-500">Support disponible 24/7 par email ou sur nos réseaux sociaux.</div>
    </div>
  );
} 