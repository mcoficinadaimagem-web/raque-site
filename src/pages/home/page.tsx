"use client";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch {
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* NAV */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1
              className="text-2xl font-bold text-[#37332F]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Raquel Martins
            </h1>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#servicos" className="text-[#37332F] hover:text-[#7D7C60]">
                  Serviços
                </a>
                <a href="#sobre" className="text-[#37332F] hover:text-[#7D7C60]">
                  Sobre
                </a>
                <a href="#portfolio" className="text-[#37332F] hover:text-[#7D7C60]">
                  Portfólio
                </a>
                <a href="#contato" className="text-[#37332F] hover:text-[#7D7C60]">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-[#FDF7F2] py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src="/raquel-martins.jpeg"
            alt="Ambiente organizado"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-[#FDF7F2]/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* TEXTO PRINCIPAL */}
            <div>
              <h1
                className="text-4xl lg:text-6xl font-bold text-[#37332F] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Personal Organizer Profissional em São Paulo
              </h1>

              <p className="text-xl text-[#37332F] mb-8">
                Organize sua casa e transforme sua rotina com um sistema de organização
                pensado especialmente para você.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#servicos"
                  className="bg-[#37332F] text-white px-8 py-4 rounded-lg hover:bg-[#2a251f]"
                >
                  Ver Serviços
                </a>

                <a
                  href="#sobre"
                  className="border-2 border-[#37332F] text-[#37332F] px-8 py-4 rounded-lg hover:bg-[#37332F] hover:text-white"
                >
                  Saiba Mais
                </a>
              </div>
            </div>

            {/* FOTO */}
            <div className="lg:text-right">
              <img
                src="/raquel-martins.jpeg"
                alt="Raquel Martins - Organizadora Pessoal"
                className="w-full max-w-sm mx-auto lg:ml-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#37332F]">Benefícios da Organização</h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Descubra como a organização pode transformar sua rotina e bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">Economia de Tempo</h3>
              <p>Encontre tudo rapidamente com sistemas eficientes.</p>
            </div>

            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-settings-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">Mais Funcionalidade</h3>
              <p>Otimize cada espaço da sua casa com soluções inteligentes.</p>
            </div>

            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-heart-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">Redução do Estresse</h3>
              <p>Viva com mais tranquilidade em um ambiente harmonioso.</p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#37332F]">Nossos Serviços</h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Soluções personalizadas para cada ambiente da sua casa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="armario personal organizer.jpg" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Armários</h3>
                <p>Organização prática e funcional para closets e guarda-roupas.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="cozinha personal organizer.jpg" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Cozinhas</h3>
                <p>Transforme sua cozinha em um espaço eficiente e organizado.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="escritório personal organizer.jpg" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Escritórios</h3>
                <p>Ambientes de trabalho organizados para máxima produtividade.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <img
                src="/raquel-martins.jpeg"
                alt="Raquel Martins"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#37332F] mb-6">Sobre a Raquel</h2>

              <p className="text-lg text-[#37332F] mb-6">
                Com mais de 8 anos de experiência, Raquel Martins transforma ambientes com
                metodologias modernas de organização.
              </p>

              <p className="text-lg text-[#37332F] mb-8">
                Sua missão é ajudar pessoas a viverem com mais leveza e funcionalidade,
                criando espaços que realmente funcionam.
              </p>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">200+</div>
                  <div className="text-[#37332F]">Projetos</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">8</div>
                  <div className="text-[#37332F]">Anos</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">100%</div>
                  <div className="text-[#37332F]">Satisfação</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#37332F]">O Que Dizem Nossos Clientes</h2>
            <p className="text-lg text-[#7D7C60]">Depoimentos reais de clientes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic">
                "A organização da Raquel mudou completamente meu dia a dia!"
              </p>
              <p className="text-[#7D7C60] mt-4">— Maria</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic">
                "Profissional excelente! Minha casa nunca esteve tão funcional."
              </p>
              <p className="text-[#7D7C60] mt-4">— Ana</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic">
                "Recomendo demais! Resultado impecável."
              </p>
              <p className="text-[#7D7C60] mt-4">— Carla</p>
            </div>

          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#37332F]">Como Funciona</h2>
            <p className="text-lg text-[#7D7C60]">Processo simples e eficiente</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold">Contato</h3>
              <p className="text-[#37332F]">Agende sua avaliação inicial.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold">Visita Técnica</h3>
              <p>Avaliação do espaço e levantamento das necessidades.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold">Organização</h3>
              <p>Soluções sob medida para sua rotina.</p>
            </div>

          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="py-20 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#37332F]">Portfólio</h2>
            <p className="text-lg text-[#7D7C60]">Antes e depois reais</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="closet antes.jpg" className="w-full h-64 object-cover" />
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="despensa antes.jpg" className="w-full h-64 object-cover" />
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="escritorio antes.jpg" className="w-full h-64 object-cover" />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#37332F]">Dúvidas Frequentes</h2>
            <p className="text-lg text-[#7D7C60]">
              Tire suas principais dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="space-y-4">

            {/* PERGUNTA */}
            {[ 
              { q: "Organizar é caro?", a: "A organização retorna em economia de tempo e produtividade."},
              { q: "Preciso comprar caixas organizadoras?", a: "Nem sempre; aproveitamos o que você já possui."},
              { q: "Quanto tempo leva a organização?", a: "Depende do espaço; um closet leva 4 a 8 horas."}
            ].map((item, index) => (
              <div key={index} className="border border-[#7D7C60]/20 rounded-lg">
                <button
                  className="w-full p-6 flex justify-between items-center hover:bg-[#FDF7F2]"
                  onClick={() => toggleFaq(index)}
                >
                  <h4 className="font-bold text-lg text-[#37332F]">{item.q}</h4>
                  <i className={`ri-arrow-${openFaq === index ? "up" : "down"}-s-line text-[#7D7C60]`}></i>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#37332F]">{item.a}</p>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#37332F]">Entre em Contato</h2>
            <p className="text-lg text-[#7D7C60]">Pronta para transformar sua casa?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* FORM */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="font-semibold">Nome</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-semibold">E-mail</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-semibold">Telefone</label>
                  <input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-semibold">Mensagem</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#37332F] text-white py-4 rounded-lg hover:bg-[#2a251f]"
                >
                  Enviar Mensagem
                </button>

              </form>
            </div>

            {/* CONTATO LATERAL */}
            <div className="space-y-8">

              <div>
                <h3 className="text-2xl font-bold text-[#37332F]">Outras Formas</h3>

                <div className="space-y-4 mt-4">

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#7D7C60] rounded-full flex items-center justify-center mr-4">
                      <i className="ri-whatsapp-line text-white"></i>
                    </div>
                    <a href="https://wa.me/5511947358000">(11) 94735-8000</a>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#7D7C60] rounded-full flex items-center justify-center mr-4">
                      <i className="ri-mail-line text-white"></i>
                    </div>
                    <a href="mailto:contato@raquelmartinsorganiza.com.br">
                      contato@raquelmartinsorganiza.com.br
                    </a>
                  </div>

                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-[#37332F]">Horário</h4>
                <p>Seg–Sex: 8h–20h</p>
                <p>Sábado: 8h–18h</p>
                <p>Domingo: Fechado</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#37332F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8 mb-8">

            <div>
              <h3 className="text-2xl font-bold">Raquel Martins</h3>
              <p className="text-gray-300 mt-4">
                Transformando espaços, organizando vidas.
              </p>
            </div>

            <div>
              <h4 className="font-bold">Links</h4>
              <ul className="space-y-2 mt-4">
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">Redes</h4>
              <div className="flex space-x-4 mt-4">

                <a
                  href="https://www.instagram.com/raquelmartinsorganiza/"
                  className="w-10 h-10 bg-[#7D7C60] flex items-center justify-center rounded-full"
                >
                  <i className="ri-instagram-line text-lg"></i>
                </a>

                <a
                  href="https://wa.me/5511947358000"
                  className="w-10 h-10 bg-[#7D7C60] flex items-center justify-center rounded-full"
                >
                  <i className="ri-whatsapp-line text-lg"></i>
                </a>

              </div>
            </div>

          </div>

          <div className="border-t border-gray-600 pt-8 text-center">
            © {new Date().getFullYear()} Raquel Martins Organização
          </div>

        </div>
      </footer>

      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/5511947358000?text=Olá! Gostaria de saber mais sobre organização residencial."
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#7D7C60] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <i className="ri-whatsapp-fill text-white text-4xl"></i>
      </a>

    </div>
  );
}
