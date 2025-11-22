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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
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
                <a
                  href="#servicos"
                  className="text-[#37332F] hover:text-[#7D7C60] transition-colors cursor-pointer"
                >
                  Serviços
                </a>
                <a
                  href="#sobre"
                  className="text-[#37332F] hover:text-[#7D7C60] transition-colors cursor-pointer"
                >
                  Sobre
                </a>
                <a
                  href="#portfolio"
                  className="text-[#37332F] hover:text-[#7D7C60] transition-colors cursor-pointer"
                >
                  Portfólio
                </a>
                <a
                  href="#contato"
                  className="text-[#37332F] hover:text-[#7D7C60] transition-colors cursor-pointer"
                >
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
            <div>
              <h1
                className="text-4xl lg:text-6xl font-bold text-[#37332F] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Organize sua casa, transforme sua vida
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

<p className="text-xl text-[#37332F] mb-8">
  Organize sua casa e transforme sua rotina com um sistema de organização
  pensado especialmente para você.
</p>


<p className="text-xl text-[#37332F] mb-8">
  Organize sua casa e transforme sua rotina com um sistema de organização
  pensado especialmente para você.
</p>


              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#servicos"
                  className="bg-[#37332F] text-white px-8 py-4 rounded-lg hover:bg-[#2a251f] transition-colors cursor-pointer"
                >
                  Ver Serviços
                </a>

                <a
                  href="#sobre"
                  className="border-2 border-[#37332F] text-[#37332F] px-8 py-4 rounded-lg hover:bg-[#37332F] hover:text-white transition-colors cursor-pointer"
                >
                  Saiba Mais
                </a>
              </div>
            </div>

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
            <h2
              className="text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Benefícios da Organização
            </h2>

            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Descubra como a organização pode transformar sua rotina e
              bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>

              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Economia de Tempo
              </h3>

              <p className="text-[#37332F]">
                Encontre tudo rapidamente com sistemas eficientes que poupam
                horas do seu dia.
              </p>
            </div>

            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-settings-3-line text-2xl text-white"></i>
              </div>

              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Mais Funcionalidade
              </h3>

              <p className="text-[#37332F]">
                Otimize cada espaço da sua casa com soluções inteligentes.
              </p>
            </div>

            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-heart-3-line text-2xl text-white"></i>
              </div>

              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Redução do Estresse
              </h3>

              <p className="text-[#37332F]">
                Viva com mais tranquilidade em um ambiente harmonioso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Nossos Serviços
            </h2>

            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Soluções personalizadas para cada ambiente da sua casa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="armario personal organizer.jpg"
                alt="Organização de Armários"
                className="w-full h-64 object-cover object-top"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                  Armários
                </h3>

                <p className="text-[#37332F]">
                  Transforme seu guarda-roupa em um espaço funcional e
                  inspirador com organização por categorias e cores.
                </p>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="cozinha personal organizer.jpg"
                alt="Organização de Cozinhas"
                className="w-full h-64 object-cover object-top"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                  Cozinhas
                </h3>

                <p className="text-[#37332F]">
                  Otimize sua cozinha com soluções práticas e funcionais.
                </p>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="escritório personal organizer.jpg"
                alt="Organização de Escritórios"
                className="w-full h-64 object-cover object-top"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                  Escritórios
                </h3>

                <p className="text-[#37332F]">
                  Crie um ambiente de trabalho produtivo e organizado.
                </p>
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
              <h2
                className="text-4xl font-bold text-[#37332F] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Sobre a Raquel
              </h2>

              <p className="text-lg text-[#37332F] mb-6 leading-relaxed">
                Com mais de 8 anos de experiência em organização residencial,
                Raquel Martins é especialista em transformar espaços caóticos em
                ambientes funcionais e harmoniosos.
              </p>

              <p className="text-lg text-[#37332F] mb-6 leading-relaxed">
                Formada em Design de Interiores e certificada em Personal
                Organizing, ela desenvolveu uma metodologia única que combina
                funcionalidade com estética, sempre respeitando o estilo de vida
                de cada cliente.
              </p>

              <p className="text-lg text-[#37332F] mb-8 leading-relaxed">
                Sua missão é ajudar pessoas a viverem com mais organização e
                bem-estar, criando sistemas personalizados que realmente
                funcionam no dia a dia.
              </p>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">
                    200+
                  </div>
                  <div className="text-[#37332F]">Projetos</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">8</div>
                  <div className="text-[#37332F]">Anos de Experiência</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">
                    100%
                  </div>
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
            <h2
              className="text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              O Que Dizem Nossos Clientes
            </h2>

            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Depoimentos reais de quem transformou sua casa com nossos serviços
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="maria silva.jpg"
                  alt="Maria Silva"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#37332F]">Maria Silva</h4>
                  <p className="text-[#7D7C60] text-sm">Executiva</p>
                </div>
              </div>

              <p className="text-[#37332F] italic leading-relaxed">
                "Raquel transformou completamente minha casa! Agora encontro
                tudo rapidamente e tenho muito mais tempo para minha família."
              </p>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="ana costa.jpg"
                  alt="Ana Costa"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#37332F]">Ana Costa</h4>
                  <p className="text-[#7D7C60] text-sm">Empresária</p>
                </div>
              </div>

              <p className="text-[#37332F] italic leading-relaxed">
                "O trabalho da Raquel vai além da organização. Ela criou um
                sistema que realmente funciona para minha rotina corrida."
              </p>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="carla mendes.jpg"
                  alt="Carla Mendes"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#37332F]">Carla Mendes</h4>
                  <p className="text-[#7D7C60] text-sm">Professora</p>
                </div>
              </div>

              <p className="text-[#37332F] italic leading-relaxed">
                "Profissional excepcional! Minha casa nunca esteve tão organizada
                e funcional. Recomendo de olhos fechados!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Como Funciona
            </h2>

            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Um processo simples e eficiente para transformar seus espaços
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Contato
              </h3>
              <p className="text-[#37332F] leading-relaxed">
                Entre em contato pelo formulário ou WhatsApp para agendar uma
                conversa inicial.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Visita Técnica
              </h3>
              <p className="text-[#37332F] leading-relaxed">
                Avaliamos seus espaços e entendemos suas necessidades específicas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Organização Personalizada
              </h3>
              <p className="text-[#37332F] leading-relaxed">
                Criamos soluções sob medida que se adaptam ao seu dia a dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="py-20 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Portfólio
            </h2>

            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Veja algumas das transformações realizadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 h-64">
                <img
                  src="closet antes.jpg"
                  alt="Antes"
                  className="w-full h-full object-cover"
                />

                <img
                  src="closet depois.jpg"
                  alt="Depois"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h4 className="font-bold text-[#37332F] mb-2">
                  Closet Residencial
                </h4>
                <p className="text-sm text-[#7D7C60]">
                  Transformação completa do guarda-roupa
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 h-64">
                <img
                  src="despensa antes.jpg"
                  alt="Antes"
                  className="w-full h-full object-cover"
                />

                <img
                  src="despensa depois.jpg"
                  alt="Depois"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h4 className="font-bold text-[#37332F] mb-2">
                  Despensa Gourmet
                </h4>
                <p className="text-sm text-[#7D7C60]">
                  Organização funcional da cozinha
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 h-64">
                <img
                  src="escritorio antes.jpg"
                  alt="Antes"
                  className="w-full h-full object-cover"
                />

                <img
                  src="escritorio depois.jpg"
                  alt="Depois"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h4 className="font-bold text-[#37332F] mb-2">Home Office</h4>
                <p className="text-sm text-[#7D7C60]">
                  Espaço de trabalho organizado e produtivo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Dúvidas Frequentes
            </h2>
            <p className="text-lg text-[#7D7C60]">
              Tire suas principais dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="space-y-4">
            {/* Pergunta 1 */}
            <div className="border border-[#7D7C60]/20 rounded-lg">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-[#FDF7F2] transition-colors cursor-pointer"
                onClick={() => toggleFaq(0)}
              >
                <h4 className="font-bold text-[#37332F] text-lg">
                  Organizar é caro?
                </h4>
                <i
                  className={`ri-arrow-${openFaq === 0 ? "up" : "down"}-s-line text-[#7D7C60] text-xl`}
                ></i>
              </button>

              {openFaq === 0 && (
                <div className="px-6 pb-6">
                  <p className="text-[#37332F] leading-relaxed">
                    A organização é um investimento que retorna em economia de tempo,
                    praticidade e redução de compras desnecessárias. Há opções para
                    vários perfis e orçamentos.
                  </p>
                </div>
              )}
            </div>

            {/* Pergunta 2 */}
            <div className="border border-[#7D7C60]/20 rounded-lg">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-[#FDF7F2] transition-colors cursor-pointer"
                onClick={() => toggleFaq(1)}
              >
                <h4 className="font-bold text-[#37332F] text-lg">
                  Preciso comprar caixas organizadoras?
                </h4>
                <i
                  className={`ri-arrow-${openFaq === 1 ? "up" : "down"}-s-line text-[#7D7C60] text-xl`}
                ></i>
              </button>

              {openFaq === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-[#37332F] leading-relaxed">
                    Nem sempre. Primeiro avaliamos o que você já possui. Caso seja
                    necessário, recomendamos apenas o essencial — sempre com ótimo custo-benefício.
                  </p>
                </div>
              )}
            </div>

            {/* Pergunta 3 */}
            <div className="border border-[#7D7C60]/20 rounded-lg">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-[#FDF7F2] transition-colors cursor-pointer"
                onClick={() => toggleFaq(2)}
              >
                <h4 className="font-bold text-[#37332F] text-lg">
                  Quanto tempo leva a organização?
                </h4>
                <i
                  className={`ri-arrow-${openFaq === 2 ? "up" : "down"}-s-line text-[#7D7C60] text-xl`}
                ></i>
              </button>

              {openFaq === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-[#37332F] leading-relaxed">
                    Depende do tamanho do ambiente. Um closet leva de 4 a 8 horas,
                    enquanto uma casa inteira pode levar até 5 dias.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Entre em Contato
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Pronta para transformar sua casa? Envie sua mensagem abaixo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <form
                id="contato-form"
                data-readdy-form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block text-[#37332F] font-semibold mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#7D7C60]/30 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#37332F] font-semibold mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#7D7C60]/30 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#37332F] font-semibold mb-2">
                    Telefone
                  </label>
                  <input
                    type="text"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#7D7C60]/30 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#37332F] font-semibold mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    maxLength={500}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#7D7C60]/30 rounded-lg resize-none"
                    required
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

            {/* Contato lateral */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                  Outras Formas
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#7D7C60] rounded-full flex items-center justify-center mr-4">
                      <i className="ri-whatsapp-line text-white text-xl"></i>
                    </div>
                    <a
                      href="https://wa.me/5511947358000"
                      className="text-[#37332F] hover:text-[#7D7C60]"
                    >
                      (11) 94735-8000
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#7D7C60] rounded-full flex items-center justify-center mr-4">
                      <i className="ri-mail-line text-white text-xl"></i>
                    </div>
                    <a
                      href="mailto:contato@raquelmartinsorganiza.com.br"
                      className="text-[#37332F] hover:text-[#7D7C60]"
                    >
                      contato@raquelmartinsorganiza.com.br
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-[#37332F] mb-3">Horário</h4>
                <p className="text-[#37332F]">
                  <strong>Seg a Sex:</strong> 8h–20h
                </p>
                <p className="text-[#37332F]">
                  <strong>Sábado:</strong> 8h–18h
                </p>
                <p className="text-[#37332F]">
                  <strong>Domingo:</strong> Fechado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#37332F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Raquel Martins
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Transformando espaços, organizando vidas. Especialista em
                soluções personalizadas de organização residencial.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#servicos"
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Portfólio
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/raquelmartinsorganiza/"
                  className="w-10 h-10 bg-[#7D7C60] rounded-full flex items-center justify-center hover:bg-[#6a6850] transition-colors cursor-pointer"
                >
                  <i className="ri-instagram-line text-lg"></i>
                </a>

                <a
                  href="https://wa.me/5511947358000"
                  className="w-10 h-10 bg-[#7D7C60] rounded-full flex items-center justify-center hover:bg-[#6a6850] transition-colors cursor-pointer"
                >
                  <i className="ri-whatsapp-line text-lg"></i>
                </a>

                <a
                  href="mailto:contato@raquelmartinsorganiza.com.br"
                  className="w-10 h-10 bg-[#7D7C60] rounded-full flex items-center justify-center hover:bg-[#6a6850] transition-colors cursor-pointer"
                >
                  <i className="ri-mail-line text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Linha inferior do rodapé */}
          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Raquel Martins Organização. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/5511947358000?text=Olá! Gostaria de saber mais sobre os serviços de organização."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#7D7C60] hover:bg-[#6a6850] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        <i className="ri-whatsapp-fill text-white text-4xl"></i>
      </a>
    </div>
  );
}
