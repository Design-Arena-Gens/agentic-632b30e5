document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("download-guide");
  if (!button) return;

  button.addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 56;
    const lineHeight = 20;
    const pageHeight = doc.internal.pageSize.getHeight();
    const maxLineWidth = doc.internal.pageSize.getWidth() - margin * 2;
    let cursorY = margin;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(
      "Guia Completo: Canal de Shorts 100% Automático, Anônimo e Escalável",
      margin,
      cursorY
    );

    cursorY += 28;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    cursorY = writeParagraph(
      doc,
      "Este manual orienta a criação de um ecossistema de conteúdo curto automatizado para YouTube Shorts e TikTok, garantindo anonimato completo, eficiência operacional e potencial de monetização desde o primeiro dia.",
      margin,
      cursorY,
      maxLineWidth,
      lineHeight,
      pageHeight
    );

    const sections = [
      {
        title: "1. Fundamentos da Operação",
        paragraphs: [
          "Objetivo: construir um canal de vídeos curtos capaz de publicar diariamente sem intervenção manual, mantendo consistência visual, narrativa e coerência com o posicionamento escolhido.",
          "Princípios-chave: automatize todo processo repetitivo, priorize nichos evergreen com forte apelo visual, garanta anonimato removendo qualquer dado pessoal e utilize métricas para guiar decisões."
        ],
        bullets: [
          "Nicho evergreen: finanças pessoais, curiosidades científicas, hacks de produtividade, resumos motivacionais, histórias misteriosas.",
          "Identidade visual: cores neutras, tipografia legível, ícones abstratos; crie logotipo com IA (Midjourney, DALL·E ou Looka).",
          "Persona invisível: narração sintética, personagens ilustrados ou animações; evite áudios originais com ruído ambiente."
        ]
      },
      {
        title: "2. Pesquisa de Nicho e Branding",
        paragraphs: [
          "Analise concorrentes: liste 10 canais na mesma temática em uma planilha e mapeie visual, tempo médio, hashtags e engajamento. Ferramentas: VidIQ, TubeBuddy, Notion (template de benchmarking).",
          "Crie identidade anônima: defina nome curto e memorável (use Namelix ou ChatGPT), desenvolva logotipo e pacote de cores (coolors.co), selecione banco de recursos (ícones de Flaticon, fontes do Google Fonts)."
        ],
        bullets: [
          "Documento de posicionamento (Notion): missão, estilo narrativo, promessa principal, referências.",
          "Cartela de cores e presets de vídeo armazenados no Canva ou CapCut Web.",
          "Biblioteca de assets em nuvem (Google Drive/Notion Files) organizada por tema."
        ]
      },
      {
        title: "3. Arquitetura de Automação",
        paragraphs: [
          "Objetivo: transformar ideias em vídeos curtos aprovados com mínima intervenção manual. Cada etapa deve ter ferramenta definida e integração entre elas.",
          "Estruture o pipeline em cinco blocos: ideias, roteiros, voz, vídeo, publicação. Automatize com Zapier, Make ou n8n conforme orçamento."
        ],
        bullets: [
          "Ideias → Roteiros: planilha com prompts baseados em dados (Google Sheets + extensão GPT for Sheets, ou Notion + Automations).",
          "Roteiro → Narração: Synthesia, ElevenLabs, Clipchamp, ou Narakeet com modelo de voz neutra.",
          "Narração → Vídeo: Pictory, HeyGen, Runway (text-to-video), InVideo, CapCut (templates + auto captions).",
          "Video final → Upload: SocialBee, Metricool, Buffer ou Hootsuite com agendamento multiplataforma.",
          "Monitoramento → Analytics: Google Looker Studio + APIs (YouTube Data API, TikTok Analytics via Metricool)."
        ]
      },
      {
        title: "4. Pipeline Operacional Diário",
        paragraphs: [
          "Meta: manter 7 a 14 vídeos prontos com antecedência, cada um otimizado para Shorts e Reels. Use metodologia Kanban (Backlog, Em Produção, Publicado).",
          "Template sugerido (Notion): página raiz com checklist semanal, banco de ideias categorizadas, status automático via automações."
        ],
        bullets: [
          "Segunda: gerar 20 ideias baseadas em tendências (Google Trends, Exploding Topics, Feedly).",
          "Terça: roteirizar top 10 ideias com IA (ChatGPT ou Claude) usando prompt estruturado com hook + storytelling + CTA.",
          "Quarta: gerar vozes sintéticas e revisar entonação (batch upload).",
          "Quinta: produzir vídeos com overlays e legendas automáticas (CapCut Web ou Descript).",
          "Sexta: subir para agendadores, inserir hashtags (Trendscoop, TikTok Creative Center) e CTA fixo."
        ]
      },
      {
        title: "5. Fluxo de Conteúdo 100% Anônimo",
        paragraphs: [
          "Garanta que nenhum recurso utilize imagem ou voz pessoal. Prefira personagens AI, vídeos stock abstratos e sons sintéticos.",
          "Defina pseudônimo para interações em comentários e suporte. Utilize VPN e contas dedicadas ao acessar plataformas sensíveis."
        ],
        bullets: [
          "Banco de imagens/vídeos: Storyblocks, MotionElements, Canva Pro, Envato Elements.",
          "Avatares animados: D-ID, Synthesia, HeyGen (com template identitário).",
          "Vozes: ElevenLabs clonada a partir de voz genérica, PlayHT, Resemble AI com licenças comerciais.",
          "Legenda automática: CapCut, AutoSub, VEED; padronize cores e fontes."
        ]
      },
      {
        title: "6. Otimização e Crescimento",
        paragraphs: [
          "Track de métricas: retenção média, taxa de cliques nos primeiros 3 segundos, fonte de tráfego, comentários gerados. Revise semanalmente.",
          "Experimente variações de hook, tom de voz e trilha sonora. Utilize testes A/B manuais alternando thumbnails e legendas."
        ],
        bullets: [
          "Dashboard: planilha conectada à API do YouTube + Metricool para consolidar dados.",
          "Matriz de experimentos: defina hipótese, variação e resultado esperado; revise a cada 14 dias.",
          "Automação de resposta a comentários com ChatGPT + Zapier (moderação + CTA para playlist)."
        ]
      },
      {
        title: "7. Monetização Multicanal",
        paragraphs: [
          "Estratégia progressiva: primeiro foque em monetização indireta (afiliados, produtos digitais), depois explore Programa de Parcerias quando elegível.",
          "Crie ativos externos para capturar leads (Mini-site em Notion ou Carrd, formulário Typeform ligado ao MailerLite)."
        ],
        bullets: [
          "Afiliados: Hotmart, Eduzz, Amazon Afiliados, ClickBank (use Bitly ou Switchy para links rastreáveis).",
          "Produtos próprios: pacotes de templates, mini cursos, newsletter premium; automatize entrega com Gumroad ou Lemonsqueezy.",
          "Patrocínios: prepare mídia kit anônimo com métricas agregadas e projeções (Canva + PDF)."
        ]
      },
      {
        title: "8. Checklist Técnico Inicial",
        paragraphs: [
          "Complete os passos abaixo em até 48 horas para colocar o canal em funcionamento. Marque cada item assim que for concluído."
        ],
        bullets: [
          "Criar contas separadas para YouTube, TikTok e ferramentas de automação (e-mails dedicados).",
          "Configurar autenticação em duas etapas nas plataformas.",
          "Definir identidade visual (logotipo, cores, fontes) e salvar em pasta compartilhada.",
          "Criar planilha ou banco Notion para ideias e script base.",
          "Contratar ferramenta de voz sintética e vídeo automático (trial ou plano básico).",
          "Produzir 5 vídeos piloto, revisar e ajustar fluxo.",
          "Agendar publicações para próximos 7 dias."
        ]
      },
      {
        title: "9. Templates de Prompt Recomendados",
        paragraphs: [
          "Use prompts base para acelerar geração de roteiros e legendas. Personalize com seu nicho e CTA."
        ],
        bullets: [
          "Prompt de roteiro (ChatGPT): \"Gere um roteiro para vídeo curto de até 55 segundos sobre [tema], com estrutura Hook (máx. 8s), Contexto resumido, 3 insights rápidos em frases curtas e CTA final convidando a seguir o canal. Utilize linguagem motivadora e mantenha anonimato.\"",
          "Prompt de descrição (ChatGPT): \"Escreva descrição de até 400 caracteres para vídeo curto sobre [tema], incluindo 3 hashtags relevantes e CTA para playlist.\"",
          "Prompt de thumbnail (Midjourney/DALL·E): \"Create a futuristic flat illustration, high contrast, featuring abstract elements representing [tema], vertical orientation, bold typography space for title 'SEGREDO REVELADO'.\""
        ]
      },
      {
        title: "10. Rotina de Manutenção",
        paragraphs: [
          "Tudo automatizado requer revisão periódica para manter qualidade. Estabeleça check-ins semanais e mensais.",
          "Etapas mínimas: validar automações, revisar desempenho, atualizar banco de ideias, renovar licenças/ferramentas."
        ],
        bullets: [
          "Revisão semanal: rodar relatório rápido (Metricool), analisar vídeos com retenção abaixo de 50%, ajustar hooks.",
          "Revisão mensal: atualizar templates de edição, testar novas vozes, revisar funil de monetização.",
          "Backup: garantir que todos os arquivos finais estejam sincronizados em nuvem (Google Drive/Dropbox)."
        ]
      },
      {
        title: "11. Recursos e Ferramentas Sugeridas",
        paragraphs: [
          "Priorize ferramentas com APIs ou integrações nativas para manter a automação robusta."
        ],
        bullets: [
          "Ideias e pesquisa: Google Trends, AnswerThePublic, Glimpse, Morningfame.",
          "Roteiro: ChatGPT, Claude, Notion AI, Typefully (script mode).",
          "Voz e áudio: ElevenLabs, PlayHT, Murf, Adobe Podcast Enhance.",
          "Vídeo: CapCut Web, Descript, Pictory, Runway Gen-2, Canva Video.",
          "Publicação: Metricool, Hypefury, Vista Social, Later.",
          "Analytics: YouTube Studio, VidIQ, Tubular, Notion Database + API.",
          "Produtividade: Notion, Trello, Airtable, Zapier/Make/n8n."
        ]
      },
      {
        title: "12. Plano de Escala",
        paragraphs: [
          "Após validar consistência e engajamento, expanda com múltiplos canais (idiomas/temas) e colaborações estratégicas.",
          "Automatize replicação de conteúdo, adaptação de legendas e distribuição em Reels, Shorts, Kwai e Shorts do Facebook."
        ],
        bullets: [
          "Crie banco de prompts multilíngues para replicar scripts em inglês/espanhol.",
          "Use ferramentas como OpusClip ou Dumme para reciclar lives e conteúdos longos.",
          "Implemente automação de repost com repurpose.io ou Crossclip.",
          "Monitore direitos autorais e trilhas sonoras livres de royalties (Artlist, Epidemic Sound)."
        ]
      },
      {
        title: "Conclusão e Próximos Passos",
        paragraphs: [
          "Seguindo este plano, você terá um canal de vídeos curtos capaz de operar em modo piloto automático, mantendo anonimato total e escalando de forma sustentável. Foque em consistência, acompanhe métricas e ajuste fluxos semanalmente.",
          "Faça download deste guia, duplique o checklist para seu gerenciador favorito e inicie a produção hoje mesmo."
        ],
        bullets: [
          "Passo imediato: selecionar nicho e preparar identidade visual ainda hoje.",
          "Próximo: configurar automações essenciais (roteiro, voz e publicação).",
          "Manter: revisar métricas semanalmente e incorporar melhorias baseadas em dados."
        ]
      }
    ];

    sections.forEach((section) => {
      cursorY = writeSection(
        doc,
        section,
        margin,
        cursorY,
        maxLineWidth,
        lineHeight,
        pageHeight
      );
    });

    doc.save("canal-automatico-shorts.pdf");
  });
});

function writeSection(doc, section, margin, cursorY, maxLineWidth, lineHeight, pageHeight) {
  cursorY = ensureSpace(doc, cursorY, margin, 28, pageHeight);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(section.title, margin, cursorY);
  cursorY += 22;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  section.paragraphs.forEach((paragraph) => {
    cursorY = writeParagraph(
      doc,
      paragraph,
      margin,
      cursorY,
      maxLineWidth,
      lineHeight,
      pageHeight
    );
  });

  if (section.bullets && section.bullets.length > 0) {
    cursorY = writeBullets(
      doc,
      section.bullets,
      margin,
      cursorY,
      maxLineWidth,
      lineHeight,
      pageHeight
    );
  }

  cursorY += 6;
  return cursorY;
}

function writeParagraph(doc, text, margin, cursorY, maxLineWidth, lineHeight, pageHeight) {
  const lines = doc.splitTextToSize(text, maxLineWidth);
  const heightNeeded = lines.length * lineHeight;
  cursorY = ensureSpace(doc, cursorY, margin, heightNeeded, pageHeight);
  lines.forEach((line) => {
    doc.text(line, margin, cursorY);
    cursorY += lineHeight;
  });
  cursorY += 4;
  return cursorY;
}

function writeBullets(
  doc,
  bullets,
  margin,
  cursorY,
  maxLineWidth,
  lineHeight,
  pageHeight
) {
  const bulletIndent = 18;
  bullets.forEach((bullet) => {
    const lines = doc.splitTextToSize(bullet, maxLineWidth - bulletIndent);
    const heightNeeded = lines.length * lineHeight;
    cursorY = ensureSpace(doc, cursorY, margin, heightNeeded, pageHeight);
    doc.text("•", margin, cursorY);
    lines.forEach((line, index) => {
      doc.text(line, margin + bulletIndent, cursorY);
      if (index < lines.length - 1) {
        cursorY += lineHeight;
      }
    });
    cursorY += lineHeight;
  });
  cursorY += 2;
  return cursorY;
}

function ensureSpace(doc, cursorY, margin, heightNeeded, pageHeight) {
  if (cursorY + heightNeeded > pageHeight - margin) {
    doc.addPage();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    return margin;
  }
  return cursorY;
}

