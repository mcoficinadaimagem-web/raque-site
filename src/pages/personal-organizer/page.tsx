"use client";
import { useState } from "react";

export default function PersonalOrganizerLanding() {
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

      {/* HERO */}
      <section className="relative bg-[#FDF7F2] py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src="/raquel-martins.jpeg"
            alt="Ambiente organizado residencial em São Paulo"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-[#FDF7F2]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* TEXTO PRINCIPAL */}
            <div>
              <h2
                className="text-sm font-semibold tracking-[0.2em] uppercase text-[#7D7C60] mb-3"
              >
                Personal Organizer SP • Organização Residencial
              </h2>

              <h1
                className="text-4xl lg:text-6xl font-bold text-[#37332F] mb-5"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Personal Organizer em São Paulo – Organização Residencial
                Profissional
              </h1>

              <p className="text-xl text-[#37332F] mb-4">
                Organize sua casa e transforme sua rotina com um sistema de
                organização pensado especialmente para o seu dia a dia,
                estilo de vida e necessidades da sua família.
              </p>

              <p className="text-base text-[#37332F] mb-8">
                Se você buscou por{" "}
                <strong>personal organizer em São Paulo</strong>,{" "}
                <strong>organização de casa</strong> ou{" "}
                <strong>organização residencial SP</strong>, aqui você encontra
                um atendimento profissional, humanizado e com resultados
                duradouros – sem fórmulas prontas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#servicos"
                  className="bg-[#37332F] text-white px-8 py-4 rounded-lg hover:bg-[#2a251f] transition-colors text-center"
                >
                  Ver serviços de organização
                </a>

                <a
                  href="#contato"
                  className="border-2 border-[#37332F] text-[#37332F] px-8 py-4 rounded-lg hover:bg-[#37332F] hover:text-white transition-colors text-center"
                >
                  Solicitar avaliação gratuita
                </a>
              </div>

              <p className="mt-4 text-sm text-[#7D7C60]">
                Atendimento em toda São Paulo e região. Projetos sob medida
                para closets, quartos, cozinhas, despensas, escritórios,
                home offices e casas completas.
              </p>
            </div>

            {/* FOTO */}
            <div className="lg:text-right">
              <img
                src="/raquel-martins.jpeg"
                alt="Raquel Martins - Personal Organizer em São Paulo"
                className="w-full max-w-sm mx-auto lg:ml-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO SEO - SERVIÇO */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-[#37332F] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Serviço de Personal Organizer em São Paulo
          </h2>
          <p className="text-lg text-[#37332F] mb-3 leading-relaxed">
            A organização profissional vai muito além de “arrumar a casa”.
            Como <strong>Personal Organizer em São Paulo</strong>, eu crio
            sistemas inteligentes para que cada coisa tenha o seu lugar
            e seja fácil de manter no dia a dia. O objetivo é trazer{" "}
            <strong>praticidade, conforto e bem-estar</strong> para sua rotina.
          </p>
          <p className="text-lg text-[#37332F] leading-relaxed">
            Trabalhamos com organização de{" "}
            <strong>closets, armários, cozinhas, despensas, áreas de serviço,
            home offices e ambientes completos</strong>, sempre respeitando seu
            estilo de vida, o espaço disponível e o orçamento.
          </p>
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
              Benefícios da Organização Residencial
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Organização profissional que gera mais tempo, funcionalidade e
              leveza para sua rotina em São Paulo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-time-line text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Economia de Tempo
              </h3>
              <p className="text-[#37332F]">
                Chega de perder minutos preciosos procurando roupas, documentos
                ou utensílios. Com um sistema funcional, você encontra tudo em
                poucos segundos.
              </p>
            </div>

            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-settings-3-line text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Ambientes Mais Funcionais
              </h3>
              <p className="text-[#37332F]">
                Cada ambiente é pensado para ser prático, bonito e
                funcional, facilitando sua rotina e o uso diário de cada
                espaço da casa.
              </p>
            </div>

            <div className="text-center p-8 bg-[#FDF7F2] rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <i className="ri-heart-3-line text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-4">
                Menos Estresse, Mais Leveza
              </h3>
              <p className="text-[#37332F]">
                Uma casa organizada transmite calma, aconchego e sensação de
                cuidado. Isso impacta diretamente o bem-estar de toda a
                família.
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
              Serviços de Personal Organizer
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Soluções de organização residencial em São Paulo, pensadas para
              cada ambiente e para a rotina da sua família.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Armários */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="armario-personal-organizer.jpg"
                alt="Organização de armários e closets"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                  Closets e Armários
                </h3>
                <p className="text-[#37332F] mb-2">
                  Organização de guarda-roupas e closets com setorização,
                  categorias, cores e uso inteligente de cabides, colmeias,
                  caixas e divisórias.
                </p>
                <p className="text-sm text-[#7D7C60]">
                  Ideal para quem quer praticidade na hora de se vestir e
                  manter tudo sempre em ordem.
                </p>
              </div>
            </div>

            {/* Cozinhas */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="cozinha-personal-organizer.jpg"
                alt="Organização de cozinhas e despensas"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                  Cozinhas e Despensas
                </h3>
                <p className="text-[#37332F] mb-2">
                  Organização de armários, gavetas, utensílios e mantimentos
                  para facilitar o preparo das refeições e o dia a dia da
                  família.
                </p>
                <p className="text-sm text-[#7D7C60]">
                  Cada item tem seu lugar definido, com foco em segurança,
                  higiene e praticidade.
                </p>
              </div>
            </div>

            {/* Escritórios */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="escritório-personal-organizer.jpg"
                alt="Organização de escritórios e home offices"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                  Escritórios e Home Offices
                </h3>
                <p className="text-[#37332F] mb-2">
                  Organização de documentos, materiais, gavetas e estação de
                  trabalho para aumentar foco e produtividade.
                </p>
                <p className="text-sm text-[#7D7C60]">
                  Ideal para quem trabalha em casa e precisa de um ambiente
                  organizado para produzir melhor.
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
                alt="Personal Organizer Raquel Martins em São Paulo"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2
                className="text-4xl font-bold text-[#37332F] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Sobre a Personal Organizer
              </h2>

              <p className="text-lg text-[#37332F] mb-4 leading-relaxed">
                Com mais de <strong>8 anos de experiência</strong> em
                organização residencial, a Personal Organizer{" "}
                <strong>Raquel Martins</strong> já ajudou dezenas de famílias
                em São Paulo a viverem em casas mais leves, funcionais e
                fáceis de manter.
              </p>

              <p className="text-lg text-[#37332F] mb-4 leading-relaxed">
                Unindo técnica, sensibilidade e olhar estético, cada projeto é
                pensado de forma personalizada, respeitando a rotina, os
                hábitos e o estilo de vida de quem mora no espaço.
              </p>

              <p className="text-lg text-[#37332F] mb-6 leading-relaxed">
                Mais do que “organizar”, o objetivo é transformar a relação
                das pessoas com a casa, trazendo conforto, praticidade e
                bem-estar no dia a dia.
              </p>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">200+</div>
                  <div className="text-[#37332F]">Projetos concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">8</div>
                  <div className="text-[#37332F]">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7D7C60]">100%</div>
                  <div className="text-[#37332F]">Clientes satisfeitos</div>
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
              O que dizem as clientes
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Depoimentos reais de quem já transformou a casa com a ajuda de
              uma Personal Organizer profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic text-[#37332F] leading-relaxed">
                “A organização da Raquel mudou completamente meu dia a dia.
                Hoje minha rotina é muito mais leve e encontro tudo com
                facilidade.”
              </p>
              <p className="text-[#7D7C60] mt-4 font-semibold">— Maria, Vila Mariana</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic text-[#37332F] leading-relaxed">
                “Profissional excelente! Minha casa ficou funcional, bonita
                e muito mais prática. Valeu cada minuto do processo.”
              </p>
              <p className="text-[#7D7C60] mt-4 font-semibold">
                — Ana, Perdizes
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic text-[#37332F] leading-relaxed">
                “Recomendo de olhos fechados. Organização personalizada, sem
                julgamentos e com muito cuidado em cada detalhe.”
              </p>
              <p className="text-[#7D7C60] mt-4 font-semibold">
                — Carla, Moema
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
              Como funciona o processo de organização
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Um passo a passo claro para você entender exatamente como é
              contratar uma Personal Organizer em São Paulo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                Contato e avaliação
              </h3>
              <p className="text-[#37332F] leading-relaxed">
                Você envia fotos ou vídeos do ambiente e conversamos sobre
                suas dores, objetivos e prioridades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                Proposta personalizada
              </h3>
              <p className="text-[#37332F] leading-relaxed">
                Envio de uma proposta sob medida, com quantidade de dias
                necessários, investimento e sugestões de materiais.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#7D7C60] rounded-full flex items-center justify-center">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-[#37332F] mb-3">
                Organização e entrega
              </h3>
              <p className="text-[#37332F] leading-relaxed">
                Organização do ambiente, criação de sistema funcional e
                orientações para manutenção no dia a dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUANTO CUSTA */}
      <section className="py-20 bg-[#FDF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-[#37332F] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Quanto custa contratar uma Personal Organizer?
          </h2>
          <p className="text-lg text-[#37332F] mb-4 leading-relaxed">
            O investimento em uma <strong>Personal Organizer em São Paulo</strong>{" "}
            depende do tamanho do ambiente, da quantidade de itens e da
            complexidade do projeto. Em média, projetos residenciais podem
            variar de <strong>um a vários dias de organização</strong>.
          </p>
          <p className="text-lg text-[#37332F] mb-4 leading-relaxed">
            Para orçamentos mais precisos, trabalhamos com avaliação personalizada
            a partir de fotos, vídeos ou visita técnica. Assim, você recebe
            uma proposta alinhada à sua realidade e expectativas.
          </p>
          <p className="text-lg text-[#37332F] leading-relaxed">
            Clique no botão abaixo ou envie uma mensagem pelo formulário para
            solicitar um <strong>orçamento sem compromisso</strong>.
          </p>

          <div className="mt-6">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#37332F] text-white hover:bg-[#2a251f] transition-colors"
            >
              Solicitar orçamento agora
            </a>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Portfólio de Antes e Depois
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Alguns exemplos reais de transformações realizadas em closets,
              cozinhas e home offices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#FDF7F2] rounded-lg shadow-lg overflow-hidden">
              <img
                src="closet-antes.jpg"
                alt="Closet antes da organização"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-[#FDF7F2] rounded-lg shadow-lg overflow-hidden">
              <img
                src="despensa-antes.jpg"
                alt="Despensa antes da organização"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-[#FDF7F2] rounded-lg shadow-lg overflow-hidden">
              <img
                src="escritorio-antes.jpg"
                alt="Escritório antes da organização"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REGIÕES ATENDIDAS */}
      <section className="py-20 bg-[#FDF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-[#37332F] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Regiões atendidas em São Paulo
          </h2>
          <p className="text-lg text-[#37332F] mb-4 leading-relaxed">
            Atendimento em toda a cidade de São Paulo e região metropolitana,
            incluindo: Zona Norte, Zona Sul, Zona Leste, Zona Oeste, Centro,
            além de Alphaville, Osasco, Barueri, Santana de Parnaíba e região.
          </p>
          <p className="text-lg text-[#37332F] leading-relaxed">
            Ao preencher o formulário ou chamar pelo WhatsApp, você informa
            seu bairro e já alinhamos a melhor forma de atendimento para a sua
            localização.
          </p>
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
              Dúvidas frequentes
            </h2>
            <p className="text-lg text-[#7D7C60]">
              Algumas perguntas comuns de quem está contratando uma Personal
              Organizer pela primeira vez.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Organizar é caro?",
                a: "A organização é um investimento que retorna em economia de tempo, menos estresse, melhor aproveitamento dos espaços e redução de compras desnecessárias. Os valores são ajustados à sua realidade e ao tamanho do projeto.",
              },
              {
                q: "Preciso comprar caixas e organizadores antes?",
                a: "Não necessariamente. Primeiro avaliamos o que você já tem em casa. Só indicamos a compra de organizadores extras quando eles realmente vão fazer diferença no resultado e na manutenção do sistema.",
              },
              {
                q: "Quanto tempo leva para organizar um ambiente?",
                a: "Depende do tamanho, da quantidade de itens e do nível atual de acúmulo. Um closet pode levar de 4 a 8 horas; já uma casa completa pode demandar alguns dias de trabalho.",
              },
              {
                q: "Vou precisar jogar muitas coisas fora?",
                a: "Você sempre tem a palavra final. O processo é feito com muito respeito à sua história e aos seus objetos. A ideia é te ajudar a decidir o que faz sentido manter e o que já cumpriu seu ciclo.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#7D7C60]/20 rounded-lg"
              >
                <button
                  className="w-full p-6 flex justify-between items-center hover:bg-[#FDF7F2] transition-colors text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h4 className="font-bold text-lg text-[#37332F]">
                    {item.q}
                  </h4>
                  <i
                    className={`ri-arrow-${
                      openFaq === index ? "up" : "down"
                    }-s-line text-[#7D7C60] text-xl`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#37332F] leading-relaxed">
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
              className="text-4xl font-bold text-[#37332F] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Entre em contato
            </h2>
            <p className="text-lg text-[#7D7C60] max-w-2xl mx-auto">
              Pronta para transformar sua casa? Envie sua mensagem e receba um
              retorno com as melhores opções para o seu projeto de organização
              residencial.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FORM */}
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

            {/* CONTATO LATERAL */}
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
                  <strong>Seg a Sex:</strong> 8h às 20h
                </p>
                <p className="text-[#37332F]">
                  <strong>Sábado:</strong> 8h às 18h
                </p>
                <p className="text-[#37332F]">
                  <strong>Domingo:</strong> fechado
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
                Personal Organizer em São Paulo, especializada em organização
                residencial personalizada para quem busca mais leveza e
                funcionalidade no dia a dia.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Navegação</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#servicos"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Portfólio
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
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

          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Raquel Martins Organização. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/5511947358000?text=Olá! Gostaria de saber mais sobre os serviços de organização residencial."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#7D7C60] hover:bg-[#6a6850] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <i className="ri-whatsapp-fill text-white text-4xl" />
      </a>
    </div>
  );
}
