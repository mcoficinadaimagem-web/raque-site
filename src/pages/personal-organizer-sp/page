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

      {/* NAV ---------------------------------------------------------- */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1
              className="text-2xl font-bold text-[#37332F]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Raquel Martins
            </h1>

            <div className="hidden md:flex space-x-8">
              <a href="/" className="hover:text-[#7D7C60]">Home</a>
              <a href="#servicos" className="hover:text-[#7D7C60]">Serviços</a>
              <a href="#sobre" className="hover:text-[#7D7C60]">Sobre</a>
              <a href="#contato" className="hover:text-[#7D7C60]">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO ---------------------------------------------------------- */}
      <section className="relative bg-[#FDF7F2] py-14 lg:py-20">
        <div className="absolute inset-0">
          <img
            src="/raquel-martins.jpeg"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-[#FDF7F2]/80"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-[#37332F] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Personal Organizer em São Paulo
              </h1>

              <p className="text-xl text-[#37332F] mb-6 leading-relaxed">
                Transforme sua casa com um sistema de organização elegante, funcional
                e feito sob medida para sua rotina.
              </p>

              <a
                href="#contato"
                className="inline-block bg-[#37332F] text-white px-8 py-4 rounded-lg hover:bg-[#2a251f]"
              >
                Agendar Avaliação
              </a>
            </div>

            <div className="lg:text-right">
              <img
                src="/raquel-martins.jpeg"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                alt="Personal Organizer em São Paulo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS ---------------------------------------------------------- */}
      <section id="servicos" className="py-18 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center text-[#37332F] mb-12"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Serviços de Organização
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#FDF7F2] rounded-lg shadow p-6 text-center">
              <img
                src="/armario-personal-organizer.jpg"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                Organização de Armários
              </h3>
              <p>Closets funcionais, acessíveis e visualmente harmoniosos.</p>
            </div>

            <div className="bg-[#FDF7F2] rounded-lg shadow p-6 text-center">
              <img
                src="/cozinha-personal-organizer.jpg"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                Cozinhas Otimizadas
              </h3>
              <p>Fluxo inteligente, praticidade e categorização eficiente.</p>
            </div>

            <div className="bg-[#FDF7F2] rounded-lg shadow p-6 text-center">
              <img
                src="/escritorio-personal-organizer.jpg"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                Escritórios & Home Office
              </h3>
              <p>Ambientes produtivos com foco em funcionalidade.</p>
            </div>

          </div>
        </div>
      </section>

      {/* SOBRE ---------------------------------------------------------- */}
      <section id="sobre" className="py-18 bg-[#FDF7F2]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <img
            src="/raquel-martins.jpeg"
            className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
          />

          <div>
            <h2
              className="text-4xl font-bold text-[#37332F] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Sobre a Profissional
            </h2>

            <p className="text-lg leading-relaxed mb-4">
              Com mais de 8 anos de experiência, Raquel Martins transforma lares
              através de sistemas práticos, modernos e personalizados.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Seu método combina estética com funcionalidade, criando espaços que
              realmente funcionam.
            </p>

            <div className="flex space-x-10 mt-6">
              <div className="text-center">
                <div className="text-[#7D7C60] text-3xl font-bold">+200</div>
                <p>Projetos</p>
              </div>

              <div className="text-center">
                <div className="text-[#7D7C60] text-3xl font-bold">8</div>
                <p>Anos</p>
              </div>

              <div className="text-center">
                <div className="text-[#7D7C60] text-3xl font-bold">100%</div>
                <p>Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ---------------------------------------------------------- */}
      <section className="py-18 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center text-[#37332F] mb-12"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Dúvidas Frequentes
          </h2>

          <div className="space-y-4">
            {[
              { q: "Organizar é caro?", a: "É um investimento que gera economia de tempo e qualidade de vida." },
              { q: "Preciso comprar caixas?", a: "Apenas quando realmente necessário, sempre com bom custo-benefício." },
              { q: "Quanto tempo leva?", a: "Depende do ambiente: closets levam entre 4–8h; casas completas, até 5 dias." }
            ].map((f, i) => (
              <div key={i} className="border rounded-lg border-[#7D7C60]/30">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between p-5 text-left hover:bg-[#FDF7F2]"
                >
                  <span className="font-bold text-[#37332F]">{f.q}</span>
                  <i className={`ri-arrow-${openFaq === i ? "up" : "down"}-s-line text-xl text-[#7D7C60]`} />
                </button>

                {openFaq === i && (
                  <div className="px-5 pb-5 text-[#37332F]">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO ---------------------------------------------------------- */}
      <section id="contato" className="py-20 bg-[#FDF7F2]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          <div>
            <h2
              className="text-4xl font-bold text-[#37332F] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Agende Sua Avaliação
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Nome"
                value={formData.name}
                required
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                required
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="text"
                placeholder="Telefone"
                value={formData.phone}
                required
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <textarea
                placeholder="Mensagem"
                rows={5}
                value={formData.message}
                required
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg"
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
              <a href="https://wa.me/5511947358000">(11) 94735-8000</a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#7D7C60] flex items-center justify-center">
                <i className="ri-mail-line text-white text-xl"></i>
              </div>
              <a href="mailto:contato@raquelmartinsorganiza.com.br">
                contato@raquelmartinsorganiza.com.br
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* RODAPÉ ---------------------------------------------------------- */}
      <footer className="bg-[#37332F] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          © {new Date().getFullYear()} Raquel Martins Organização
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

