"use client";
import { useState } from "react";

export default function PersonalOrganizerSP() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    } catch {
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* NAV */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center h-16 justify-between">
          <h1
            className="text-2xl font-bold text-[#37332F]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Raquel Martins
          </h1>

          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-[#7D7C60]">Home</a>
            <a href="#servicos" className="hover:text-[#7D7C60]">Serviços</a>
            <a href="#portfolio" className="hover:text-[#7D7C60]">Portfólio</a>
            <a href="#contato" className="hover:text-[#7D7C60]">Contato</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-[#FDF7F2] py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src="/img/raquel-martins.jpeg"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#FDF7F2]/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-4xl lg:text-6xl font-bold text-[#37332F] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Personal Organizer em São Paulo
            </h1>

            <p className="text-xl text-[#37332F] leading-relaxed mb-8">
              Transforme sua casa com sistemas de organização inteligentes e personalizados.
              Praticidade, beleza e funcionalidade para o seu dia a dia.
            </p>

            <a
              href="#contato"
              className="inline-block bg-[#37332F] text-white px-8 py-4 rounded-lg hover:bg-[#2a251f]"
            >
              Agende Sua Avaliação
            </a>
          </div>

          <div className="text-right">
            <img
              src="/img/raquel-martins.jpeg"
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12 text-[#37332F]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Serviços de Organização
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#FDF7F2] rounded-lg shadow p-6 text-center">
              <img
                src="/img/armario-personal-organizer.jpg"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                Armários e Closets
              </h3>
              <p>Soluções práticas com categorização eficiente e fluxo ideal.</p>
            </div>

            <div className="bg-[#FDF7F2] rounded-lg shadow p-6 text-center">
              <img
                src="/img/cozinha-personal-organizer.jpg"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-3 text-[#37332F]">
                Cozinhas & Despensas
              </h3>
              <p>Organização funcional para otimizar preparo, fluxo e rotina.</p>
            </div>

            <div className="bg-[#FDF7F2] rounded-lg shadow p-6 text-center">
              <img
                src="/img/escritorio-personal-organizer.jpg"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-3 text-[#37332F]">
                Escritórios & Home Office
              </h3>
              <p>Ambientes produtivos, minimalistas e organizados.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ANTES & DEPOIS */}
      <section id="portfolio" className="py-20 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12 text-[#37332F]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Antes & Depois
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Closet */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 h-64">
                <img src="/img/closet-antes.jpg" className="object-cover h-full" />
                <img src="/img/closet-depois.jpg" className="object-cover h-full" />
              </div>
              <div className="p-4">
                <h4 className="font-bold">Closet</h4>
                <p className="text-[#7D7C60] text-sm">Transformação completa</p>
              </div>
            </div>

            {/* Despensa */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 h-64">
                <img src="/img/despensa-antes.jpg" className="object-cover h-full" />
                <img src="/img/despensa-depois.jpg" className="object-cover h-full" />
              </div>
              <div className="p-4">
                <h4 className="font-bold">Despensa</h4>
                <p className="text-[#7D7C60] text-sm">Organização funcional</p>
              </div>
            </div>

            {/* Escritório */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 h-64">
                <img src="/img/escritorio-antes.jpg" className="object-cover h-full" />
                <img src="/img/escritorio-depois.jpg" className="object-cover h-full" />
              </div>
              <div className="p-4">
                <h4 className="font-bold">Home Office</h4>
                <p className="text-[#7D7C60] text-sm">Produtividade máxima</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12 text-[#37332F]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            O que dizem os clientes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#FDF7F2] p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img
                  src="/img/maria-silva.jpg"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#37332F]">Maria Silva</h4>
                  <p className="text-[#7D7C60] text-sm">Executiva</p>
                </div>
              </div>
              <p className="italic">
                “A organização da Raquel mudou completamente minha rotina!”
              </p>
            </div>

            <div className="bg-[#FDF7F2] p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img
                  src="/img/ana-costa.jpg"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#37332F]">Ana Costa</h4>
                  <p className="text-[#7D7C60] text-sm">Empresária</p>
                </div>
              </div>
              <p className="italic">
                “Profissional incrível! Minha casa nunca esteve tão organizada.”
              </p>
            </div>

            <div className="bg-[#FDF7F2] p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img
                  src="/img/carla-mendes.jpg"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#37332F]">Carla Mendes</h4>
                  <p className="text-[#7D7C60] text-sm">Professora</p>
                </div>
              </div>
              <p className="italic">
                “Resultado impecável! Recomendo de olhos fechados.”
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-[#FDF7F2]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          <div>
            <h2
              className="text-4xl font-bold text-[#37332F] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Agende sua avaliação
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-3 border rounded-lg"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 border rounded-lg"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <input
                type="text"
                placeholder="Telefone"
                className="w-full px-4 py-3 border rounded-lg"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <textarea
                rows={5}
                placeholder="Mensagem"
                className="w-full px-4 py-3 border rounded-lg"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <button
                type="submit"
                className="w-full bg-[#37332F] text-white py-4 rounded-lg hover:bg-[#2a251f]"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#7D7C60] flex items-center justify-center">
                <i className="ri-whatsapp-line text-white text-xl"></i>
              </div>
              <a href="https://wa.me/5511947358000" className="text-lg">
                (11) 94735-8000
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#7D7C60] flex items-center justify-center">
                <i className="ri-mail-line text-white text-xl"></i>
              </div>
              <a href="mailto:contato@raquelmartinsorganiza.com.br" className="text-lg">
                contato@raquelmartinsorganiza.com.br
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#37332F] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          © {new Date().getFullYear()} Raquel Martins Organização – Todos os direitos reservados
        </div>
      </footer>

      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/5511947358000?text=Olá! Gostaria de falar sobre organização residencial."
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#7D7C60] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <i className="ri-whatsapp-fill text-white text-4xl"></i>
      </a>

    </div>
  );
}
