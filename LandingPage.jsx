import React, { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: envoyer l'e‑mail vers votre système de gestion de contacts
    alert(`Merci pour votre inscription, ${email} !`);
    setEmail('');
  };
  return (
    <div className="min-h-screen flex flex-col bg-[#14255f] text-white font-sans">
      {/* Navigation */}
      <header className="w-full fixed top-0 z-50 bg-[#14255f]/90 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="font-bold text-xl text-[#e2001a]">FO Besançon</div>
            <span className="hidden sm:inline text-sm italic">Mobilités</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#actualites" className="hover:text-[#e2001a]">Actualités</a>
            <a href="#videos" className="hover:text-[#e2001a]">Vidéos</a>
            <a href="#boutique" className="hover:text-[#e2001a]">Boutique</a>
            <a href="#avis" className="hover:text-[#e2001a]">Avis</a>
            <a href="#faq" className="hover:text-[#e2001a]">FAQ</a>
          </div>
          <div className="hidden md:block">
            <a href="#cta" className="px-4 py-2 bg-[#e2001a] rounded-lg hover:bg-[#c60016] transition-colors">S’inscrire</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-32 bg-gradient-to-br from-[#14255f] via-[#135e8d] to-[#e2001a]" id="hero">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">La mobilité en mouvement : votre voix, notre force</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            Des femmes et des hommes libres, unis pour défendre vos droits.  Informez‑vous, partagez, agissez.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <form onSubmit={handleSubmit} className="flex w-full sm:w-auto">
              <input
                type="email"
                required
                placeholder="Votre email"
                className="w-full sm:w-64 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="px-4 py-2 bg-[#e2001a] text-white font-semibold rounded-r-md hover:bg-[#c60016] transition-colors">
                Je m’abonne
              </button>
            </form>
            <a href="#boutique" className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-[#14255f] transition-colors">Découvrir la boutique</a>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section id="actualites" className="py-20 bg-[#f7f7f7] text-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#14255f]">Pourquoi cette plateforme ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Actualités */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#e2001a] mb-4 text-4xl">📰</div>
              <h3 className="font-bold mb-2">Actualités locales & nationales</h3>
              <p className="text-sm">104 Unions départementales et 22 Fédérations forment un réseau pour vous informer en temps réel.</p>
            </div>
            {/* Vidéos */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#e2001a] mb-4 text-4xl">🎬</div>
              <h3 className="font-bold mb-2">Vidéos exclusives</h3>
              <p className="text-sm">Reportages, interviews et web‑séries pour comprendre les enjeux de la mobilité.</p>
            </div>
            {/* Boutique */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" id="boutique">
              <div className="text-[#e2001a] mb-4 text-4xl">🛍️</div>
              <h3 className="font-bold mb-2">Boutique solidaire</h3>
              <p className="text-sm">Tee‑shirts, sweats et accessoires aux couleurs FO pour soutenir nos actions.</p>
            </div>
            {/* Participation */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#e2001a] mb-4 text-4xl">💬</div>
              <h3 className="font-bold mb-2">Participation & proximité</h3>
              <p className="text-sm">Partagez vos avis et commentaires : FO rapproche les travailleurs pour défendre leurs intérêts communs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="avis" className="py-20 bg-[#14255f] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ils·elles parlent de nous</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#1e366a] rounded-lg shadow-md">
              <p className="italic mb-4">« J’aime la liberté et l’indépendance que prône FO.  Grâce au site, je suis informée en un clic des actions locales et je peux enfin suivre les débats en vidéo.»</p>
              <span className="font-semibold">Claire, conductrice de tramway</span>
            </div>
            <div className="p-6 bg-[#1e366a] rounded-lg shadow-md">
              <p className="italic mb-4">« FO m’a aidé à défendre mes droits sur les horaires de nuit.  La boutique est un plus : j’ai acheté un sweat FO pour soutenir notre section.»</p>
              <span className="font-semibold">Jean‑Marc, contrôleur ferroviaire</span>
            </div>
            <div className="p-6 bg-[#1e366a] rounded-lg shadow-md">
              <p className="italic mb-4">« Je pensais que les syndicats n’étaient pas pour moi.  Ici, tout le monde peut commenter, donner son avis et s’informer.  C’est fun et moderne.»</p>
              <span className="font-semibold">Isabelle, étudiante intérimaire</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section vidéo */}
      <section id="videos" className="py-20 bg-[#f7f7f7] text-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#14255f]">Découvrez nos vidéos</h2>
          <div className="relative aspect-w-16 aspect-h-9 mb-6">
            <iframe
              className="w-full h-64 md:h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Vidéo de présentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mb-6 text-sm">Un aperçu de nos reportages et web‑séries.  Visitez la section Vidéos pour en voir davantage.</p>
          <a href="#" className="px-4 py-2 bg-[#e2001a] text-white rounded-md hover:bg-[#c60016] transition-colors">Voir toutes les vidéos</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-[#14255f] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            <details className="bg-[#1e366a] rounded-lg p-4">
              <summary className="cursor-pointer font-semibold">Pourquoi créer une plateforme FO Besançon Mobilités ?</summary>
              <p className="mt-2 text-sm">Parce que l’information est un droit.  Cette plateforme centralise actualités, vidéos et boutique pour soutenir la défense des droits de chacun.</p>
            </details>
            <details className="bg-[#1e366a] rounded-lg p-4">
              <summary className="cursor-pointer font-semibold">Faut‑il être adhérent pour s’inscrire ?</summary>
              <p className="mt-2 text-sm">Non.  L’inscription à la newsletter et l’achat de produits sont ouverts à tout public sans obligation d’adhésion.</p>
            </details>
            <details className="bg-[#1e366a] rounded-lg p-4">
              <summary className="cursor-pointer font-semibold">Comment mes données sont‑elles protégées ?</summary>
              <p className="mt-2 text-sm">Nous respectons votre vie privée : vos données ne sont utilisées que pour vous envoyer nos actualités et ne sont jamais partagées.</p>
            </details>
            <details className="bg-[#1e366a] rounded-lg p-4">
              <summary className="cursor-pointer font-semibold">Quels produits propose la boutique ?</summary>
              <p className="mt-2 text-sm">Des tee‑shirts, sweats, casquettes, mugs et accessoires aux couleurs FO.  Chaque achat soutient nos actions.</p>
            </details>
            <details className="bg-[#1e366a] rounded-lg p-4">
              <summary className="cursor-pointer font-semibold">Pourquoi FO est‑il indépendant ?</summary>
              <p className="mt-2 text-sm">Force Ouvrière regroupe des femmes et des hommes libres dans une organisation indépendante pour défendre les droits des travailleurs.  Nous refusons les politiques d’austérité et sommes attachés à la liberté syndicale.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 bg-gradient-to-r from-[#e2001a] to-[#c60016] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Prêt·e à rejoindre le mouvement ?</h2>
          <p className="mb-8 text-lg">Abonnez‑vous pour recevoir nos actualités exclusives, partagez vos avis et soutenez nos actions.  Ensemble, nous sommes la force de la proximité !</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#" className="px-6 py-3 bg-white text-[#e2001a] font-semibold rounded-md hover:bg-gray-200 transition-colors">Je m’inscris</a>
            <a href="#boutique" className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-[#e2001a] transition-colors">Je découvre la boutique</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14255f] text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg text-white mb-2">FO Besançon Mobilités</h3>
            <p className="text-sm">Des femmes et des hommes libres, unis pour défendre les salarié·e·s.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Liens</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#actualites" className="hover:text-white">Actualités</a></li>
              <li><a href="#videos" className="hover:text-white">Vidéos</a></li>
              <li><a href="#boutique" className="hover:text-white">Boutique</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Contact</h4>
            <p className="text-sm">Adresse : 12 rue de la Mobilité, 25000 Besançon<br/>Courriel : contact@fo‑besancon‑mobilites.fr</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Suivez‑nous</h4>
            <div className="flex space-x-4 text-2xl">
              <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-white">📘</a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-white">🐦</a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-white">📸</a>
              <a href="https://www.youtube.com" aria-label="YouTube" className="hover:text-white">▶️</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()}\u00a0FO\u00a0Besançon\u00a0Mobilités — Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
