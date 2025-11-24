"use client";

import { useState, type FormEvent } from "react";

export default function PersonalOrganizerLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Por favor, preencha todos os campos.");
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
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a
  href="/"
  className="text-2xl font-bold text-[#37332F]"
  style={{ fontFamily: "Playfair Display, serif" }}
>
  Raquel Martins
</a>

<div className="hidden md:block">
  <div className="ml-10 flex items-baseline space-x-8">
    <a
      href="#servicos"
      className="text-[#37332F] hover:text-[#7D7C60] transition-colors"
    >
      Serviços
    </a>
    <a
      href="#sobre"
      className="text-[#37332F] hover:text-[#7D7C60] transition-colors"
    >
      Sobre
    </a>
    <a
      href="#portfolio"
      className="text-[#37332F] hover:text-[#7D7C60] transition-colors"
    >
      Portfólio
    </a>
    <a
      href="#contato"
      className="text-[#37332F] hover:text-[#7D7C60] transition-colors"
    >
      Contato
    </a>
  </div>
</div>
</div>
</div>
</nav>

      {/* HERO – VARIAÇÃO 1A */}
      <section className="relative bg-[#FDF7F2] py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/raquel-martins.jpeg"
            alt="Ambiente organizado"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-[#FDF7F2]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto principal */}
            <div>
              <p className="uppercase tracking-[0.2em] text-sm text-[#7D7C60] mb-3">
                Personal Organizer em São Paulo
              </p>

              <h2
                className="text-4xl lg:text-5xl font-bold text-[#37332F] mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Organize sua casa e ganhe tempo para o que realmente importa
              </h2>

              <p className="text-lg lg:text-xl text-[#37332F] mb-6">
                Chega de perder tempo procurando coisas ou vivendo em um ambiente
                que te cansa. Com a organização profissional, sua casa fica funcional,
                bonita e fácil de manter no dia a dia.
              </p>

              <ul className="text-[#37332F] mb-8 space-y-2 text-sm sm:text-base">
                <li>• Organização completa de closets, cozinhas, despensas e home office</li>
                <li>• Sistemas pensados para a sua rotina – nada engessado</li>
                <li>• Mais praticidade, bem-estar e sensação de leveza em casa</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contato"
                  className="bg-[#37332F] text-white px-8 py-4 rounded-lg text-center hover:bg-[#2a251f] transition-colors"
                >
                  Agendar avaliação gratuita
                </a>
                <a
                  href="https://wa.me/5511947358000?text=Olá! Gostaria de saber mais sobre os serviços de Personal Organizer."
                  className="border-2 border-[#37332F] text-[#37332F] px-8 py-4 rounded-lg text-center hover:bg-[#37332F] hover:text-white transition-colors"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>

            {/* Foto */}
            <div className="lg:text-right">
              <img
                src="/img/raquel-martins.jpeg"
                alt="Raquel Martins - Personal Organizer"
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
              className="text-3xl lg:text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Por que contratar uma Personal Organizer?
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              A organização profissional vai muito além de “arrumar a bagunça”.
              Ela cria um sistema inteligente que mantém sua casa em ordem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-time-line text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Mais tempo no dia a dia
              </h3>
              <p className="text-[#37332F]">
                Encontre tudo em segundos e elimine a sensação de perder tempo com
                pequenas coisas.
              </p>
            </div>

            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-settings-3-line text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Casa funcional de verdade
              </h3>
              <p className="text-[#37332F]">
                Cada item tem um lugar pensado para o seu jeito de viver, não só para
                “ficar bonito na foto”.
              </p>
            </div>

            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-heart-3-line text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Mais leveza e bem-estar
              </h3>
              <p className="text-[#37332F]">
                Um ambiente organizado diminui o estresse visual e traz sensação
                de calma e aconchego.
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
              className="text-3xl lg:text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Serviços de Organização Residencial
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Cada projeto é personalizado para a sua rotina, espaço e objetivos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="/img/armario-personal-organizer.jpg"
                alt="Organização de armários e closets"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                  Armários e Closets
                </h3>
                <p className="text-[#37332F]">
                  Organização completa de guarda-roupas, closets e roupeiros com
                  setorização inteligente, dobra padrão e cabides alinhados.
                </p>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="/img/cozinha-personal-organizer.jpg"
                alt="Organização de cozinhas e despensas"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                  Cozinhas e Despensas
                </h3>
                <p className="text-[#37332F]">
                  Organização de armários, gavetas e despensas para facilitar o
                  preparo das refeições e evitar desperdícios.
                </p>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="/img/escritorio-personal-organizer.jpg"
                alt="Organização de escritórios e home office"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                  Escritórios e Home Office
                </h3>
                <p className="text-[#37332F]">
                  Ambientes de trabalho organizados para aumentar a concentração,
                  produtividade e clareza mental.
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
                src="/img/raquel-martins.jpeg"
                alt="Raquel Martins"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[#37332F] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Sobre a Raquel Martins
              </h2>

              <p className="text-lg text-[#37332F] mb-4 leading-relaxed">
                Com mais de 8 anos de experiência em organização residencial,
                Raquel Martins já transformou dezenas de lares em São Paulo e região.
              </p>

              <p className="text-lg text-[#37332F] mb-4 leading-relaxed">
                Com formação em áreas ligadas à organização e experiência prática
                em projetos reais, ela desenvolveu um método que une estética,
                funcionalidade e, principalmente, a rotina de cada família.
              </p>

              <p className="text-lg text-[#37332F] mb-6 leading-relaxed">
                Nada de soluções engessadas: cada projeto é pensado junto com o
                cliente, para que a organização seja fácil de manter no dia a dia.
              </p>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">200+</div>
                  <div className="text-[#37332F] text-sm">Projetos realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">8</div>
                  <div className="text-[#37332F] text-sm">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">100%</div>
                  <div className="text-[#37332F] text-sm">Foco no cliente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO – ANTES E DEPOIS */}
      <section id="portfolio" className="py-20 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Antes e Depois da Organização
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Veja alguns exemplos reais de transformação em closets, despensas
              e escritórios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Closet */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 h-56">
                <img
                  src="/img/closet-antes.jpg"
                  alt="Closet antes da organização"
                  className="w-full h-full object-cover"
                />
                <img
                  src="/img/closet-depois.jpg"
                  alt="Closet depois da organização"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#37332F] mb-1">Closet Residencial</h3>
                <p className="text-sm text-[#7D7C60]">
                  Setorização por tipo de peça, cores e frequência de uso.
                </p>
              </div>
            </div>

            {/* Despensa */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 h-56">
                <img
                  src="/img/despensa-antes.jpg"
                  alt="Despensa antes da organização"
                  className="w-full h-full object-cover"
                />
                <img
                  src="/img/despensa-depois.jpg"
                  alt="Despensa depois da organização"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#37332F] mb-1">Despensa Gourmet</h3>
                <p className="text-sm text-[#7D7C60]">
                  Itens categorizados, etiquetas e fácil visualização de estoques.
                </p>
              </div>
            </div>

            {/* Escritório */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 h-56">
                <img
                  src="/img/escritorio-antes.jpg"
                  alt="Escritório antes da organização"
                  className="w-full h-full object-cover"
                />
                <img
                  src="/img/escritorio-depois.jpg"
                  alt="Escritório depois da organização"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#37332F] mb-1">Home Office</h3>
                <p className="text-sm text-[#7D7C60]">
                  Mesa limpa, arquivos categorizados e fluxo de trabalho organizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS – COM FOTOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              O que as clientes dizem
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Depoimentos reais de quem já passou pela experiência de ter a casa
              organizada profissionalmente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-[#FDF7F2] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/img/maria-silva.jpg"
                  alt="Maria Silva"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#37332F]">Maria Silva</h4>
                  <p className="text-[#7D7C60] text-sm">Executiva e mãe de dois</p>
                </div>
              </div>
              <p className="text-[#37332F] italic leading-relaxed text-sm">
                “A Raquel transformou meu closet e a nossa despensa. Hoje eu ganho
                tempo todos os dias e quase não compro nada repetido. Valeu cada centavo.”
              </p>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-[#FDF7F2] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/img/ana-costa.jpg"
                  alt="Ana Costa"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#37332F]">Ana Costa</h4>
                  <p className="text-[#7D7C60] text-sm">Empresária</p>
                </div>
              </div>
              <p className="text-[#37332F] italic leading-relaxed text-sm">
                “Eu achava que não conseguiria manter a organização, mas o sistema
                que ela criou é tão lógico que toda a família entrou no ritmo.”
              </p>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-[#FDF7F2] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/img/carla-mendes.jpg"
                  alt="Carla Mendes"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#37332F]">Carla Mendes</h4>
                  <p className="text-[#7D7C60] text-sm">Professora</p>
                </div>
              </div>
              <p className="text-[#37332F] italic leading-relaxed text-sm">
                “Meu home office era um caos. Agora tenho espaço, clareza e vontade
                de trabalhar. A sensação é de ter mudado de casa.”
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
              className="text-3xl lg:text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Como funciona o processo de organização?
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Um passo a passo simples, transparente e pensado para deixar tudo
              claro desde o primeiro contato.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                Avaliação inicial
              </h3>
              <p className="text-[#37332F] leading-relaxed text-sm">
                Conversa pelo WhatsApp ou telefone para entender sua necessidade
                e alinhar expectativas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                Proposta e cronograma
              </h3>
              <p className="text-[#37332F] leading-relaxed text-sm">
                Envio de proposta clara com etapas, prazos e, se necessário,
                indicação de organizadores extras.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                Mão na massa
              </h3>
              <p className="text-[#37332F] leading-relaxed text-sm">
                Triagem, categorização, organização e, no final, orientação para
                você manter tudo em ordem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ – VARIAÇÃO 2i (objetivo e direto) */}
      <section className="py-20 bg-white border-t border-[#F0E8DD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Dúvidas frequentes
            </h2>
            <p className="text-lg text-[#7D7C60]">
              Respostas rápidas para as principais perguntas sobre o serviço.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Organizar com uma Personal Organizer é muito caro?",
                a: "A organização é um investimento que retorna em tempo, bem-estar e economia. Você passa a usar melhor o que já tem e evita compras por excesso ou repetidas. Os projetos são personalizados de acordo com o tamanho do espaço e a complexidade.",
              },
              {
                q: "Vou conseguir manter a organização depois?",
                a: "Sim. O objetivo não é só deixar tudo bonito no dia, mas criar um sistema lógico, com categorias claras, que qualquer pessoa da casa consegue seguir. No final do projeto você recebe orientações para manutenção.",
              },
              {
                q: "Preciso comprar muitos produtos organizadores?",
                a: "Nem sempre. Primeiro avaliamos o que você já tem em casa. Quando é necessário comprar, indicamos apenas o essencial, pensando no seu orçamento e na durabilidade das peças.",
              },
              {
                q: "Você atende apenas em São Paulo capital?",
                a: "A base é São Paulo, mas há possibilidade de atendimento em cidades da região mediante análise do projeto. No primeiro contato, já avaliamos a viabilidade logística.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#7D7C60]/20 rounded-lg overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full p-6 flex justify-between items-center bg-white hover:bg-[#FDF7F2] transition-colors text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h4 className="font-semibold text-lg text-[#37332F]">
                    {item.q}
                  </h4>
                  <i
                    className={`ri-arrow-${
                      openFaq === index ? "up" : "down"
                    }-s-line text-[#7D7C60] text-xl`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 bg-white">
                    <p className="text-[#37332F] leading-relaxed text-sm">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Vamos organizar sua casa?
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Preencha o formulário abaixo ou, se preferir, clique para falar pelo
              WhatsApp. Em até 24 horas úteis retornamos com os próximos passos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    WhatsApp
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
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#37332F] text-white py-4 rounded-lg hover:bg-[#2a251f] transition-colors"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>

            {/* Contato lateral */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                  Outras formas de contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#7D7C60] rounded-full flex items-center justify-center mr-4">
                      <i className="ri-whatsapp-line text-white text-xl" />
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
                      <i className="ri-mail-line text-white text-xl" />
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
                <h4 className="font-bold text-[#37332F] mb-3">Horário de atendimento</h4>
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
              <p className="text-gray-300 leading-relaxed text-sm">
                Transformando espaços e organizando vidas com projetos
                personalizados de organização residencial.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#servicos" className="text-gray-300 hover:text-white">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-gray-300 hover:text-white">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-300 hover:text-white">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-300 hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Redes sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/raquelmartinsorganiza/"
                  className="w-10 h-10 bg-[#7D7C60] rounded-full flex items-center justify-center hover:bg-[#6a6850] transition-colors"
                >
                  <i className="ri-instagram-line text-lg" />
                </a>
                <a
                  href="https://wa.me/5511947358000"
                  className="w-10 h-10 bg-[#7D7C60] rounded-full flex items-center justify-center hover:bg-[#6a6850] transition-colors"
                >
                  <i className="ri-whatsapp-line text-lg" />
                </a>
                <a
                  href="mailto:contato@raquelmartinsorganiza.com.br"
                  className="w-10 h-10 bg-[#7D7C60] rounded-full flex items-center justify-center hover:bg-[#6a6850] transition-colors"
                >
                  <i className="ri-mail-line text-lg" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
            © {new Date().getFullYear()} Raquel Martins Organização. Todos os
            direitos reservados.
          </div>
        </div>
      </footer>

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/5511947358000?text=Olá! Gostaria de saber mais sobre os serviços de Personal Organizer."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#7D7C60] hover:bg-[#6a6850] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <i className="ri-whatsapp-fill text-white text-4xl" />
      </a>
    </div>
  );
}
