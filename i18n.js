(function () {
  const translations = {
    'pt-BR': {
      nav: [
        'Home',
        'Sobre o Senai',
        'Últimas notícias',
        'Podcasts',
        'Oportunidades',
        'Cursos',
        'Posts da Comunidade',
        'Sobre Nós',
      ],
      hero: {
        subtitle: 'Conheça histórias, projetos e oportunidades da nossa comunidade escolar',
        cta: 'Saiba Mais',
      },
      history: {
        title: 'Nossa História',
        subtitle: 'Conheça a trajetória de excelência do SENAI Morvan Figueiredo',
        paragraphs: [
          'A história do SENAI Morvan Figueiredo da Mooca está ligada à história do próprio SENAI em São Paulo, criado em 1942.',
          'A unidade leva o nome do patrono Morvan Dias de Figueiredo, um importante líder da indústria brasileira, conhecido por sua atuação pioneira e por ser um dos idealizadores do SENAI em São Paulo.',
          'Com infraestrutura moderna e corpo docente altamente qualificado, continuamos nossa trajetória de excelência, formando os profissionais que a indústria precisa para enfrentar os desafios do futuro.',
        ],
      },
      news: {
        title: 'Últimas Notícias',
        subtitle: 'Fique por dentro das novidades e eventos das Escolas Senai em geral',
        cards: [
          {
            date: '26/11/2025 - atualizado às 09:31 em 27/11/2025',
            title: 'Desafio de Ideias ON mobiliza 1,8 mil estudantes do SENAI-SP em busca de soluções para a indústria',
            excerpt: 'Com metodologia baseada em projetos reais, o SENAI-SP aproxima educação e indústria em uma experiência de inovação aberta.',
            link: 'Leia mais →',
          },
          {
            date: '17/11/2025 - atualizado às 09:58 em 18/11/2025',
            title: 'SENAI-SP consolida liderança na educação profissional com vitória na WorldSkills Américas',
            excerpt: 'A delegação do SENAI-SP conquistou o maior número de medalhas da WorldSkills Américas, realizada em Santiago, no Chile, entre os dias 3 e 8 de novembro.',
            link: 'Leia mais →',
          },
          {
            date: '14/11/2025 - atualizado às 16:52 em 14/11/2025',
            title: 'Brasil Mais Produtivo reforça o protagonismo do SENAI na modernização da indústria',
            excerpt: 'A iniciativa fortalece a execução de políticas públicas voltadas à produtividade e ao fortalecimento do setor industrial, levando tecnologia, inovação e capacitação para empresas de todo o país.',
            link: 'Leia mais →',
          },
          {
            date: '11/11/2025 - atualizado às 09:12 em 13/11/2025',
            title: 'SENAI-SP destaca tendências do mercado de trabalho na área de TICs',
            excerpt: 'Mapa do Emprego Industrial aponta ações necessárias para a formação profissional em Tecnologia da Informação e Comunicação.',
            link: 'Leia mais →',
          },
          {
            date: '11/11/2025 - atualizado às 09:06 em 13/11/2025',
            title: 'SENAI-SP investe em educação profissional para impulsionar empregos verdes',
            excerpt: 'A instituição apresentou as principais ações na agenda da sustentabilidade durante painel no Summit SP + Verde.',
            link: 'Leia mais →',
          },
          {
            date: '24/10/2025 - atualizado às 11:50 em 29/10/2025',
            title: 'UniSENAI SP - Taubaté alcança nota máxima no MEC para o Curso Superior de Tecnologia em Mecatrônica Industrial',
            excerpt: 'O Curso Superior de Tecnologia em Mecatrônica Industrial da Faculdade de Tecnologia SENAI Félix Guisard, em Taubaté, recebeu nota máxima na avaliação do Ministério da Educação.',
            link: 'Leia mais →',
          },
        ],
      },
      podcasts: {
        title: 'Você já ouviu nossos podcasts?',
        subtitle: 'Conversas gerais sobre tecnologia, educação e carreiras industriais.',
        items: [
          '#01 Importance of PPE',
          '#02 The future of automation',
          '#03 Clean energy in industry',
        ],
      },
      opportunities: {
        title: 'Oportunidades',
        subtitle: 'Conecte-se com o mercado de trabalho através do SENAI',
        items: [
          {
            title: 'Vagas de Estágio',
            text: 'Empresas parceiras oferecem oportunidades exclusivas para nossos alunos iniciarem suas carreiras.',
          },
          {
            title: 'Bolsas de Estudo',
            text: 'Programas de incentivo e bolsas integrais para alunos de destaque acadêmico.',
          },
          {
            title: 'Emprego Efetivo',
            text: 'Parcerias com indústrias garantem contratação direta de técnicos qualificados.',
          },
        ],
      },
      courses: {
        title: 'Cursos Disponíveis',
        subtitle: 'Conheça alguns dos nossos cursos técnicos de qualificação profissional',
        items: [
          {
            title: 'Lógica de Programação',
            description: 'Entenda os princípios básicos da lógica de programação para criar sites e programar robôs.',
            duration: '⏱ 14 horas',
            aria: 'Acessar curso de Lógica de Programação',
          },
          {
            title: 'Design Thinking',
            description: 'O curso de aperfeiçoamento profissional em Design Thinking desenvolve competências para reconhecer novas formas de pensar o processo de criação de produtos e serviços.',
            duration: '⏱ 8 horas',
            aria: 'Acessar curso de Design Thinking',
          },
          {
            title: 'Design UI e UX',
            description: 'O curso desenvolve capacidades técnicas para criar interfaces para aplicativos, websites e mídias sociais, garantindo uma experiência de usuário excelente.',
            duration: '⏱ 60 horas',
            aria: 'Acessar curso de Design UI e UX',
          },
          {
            title: 'Segurança no Trabalho',
            description: 'Sensibiliza os participantes sobre prevenção de acidentes e segurança no ambiente de trabalho.',
            duration: '⏱ 14 horas',
            aria: 'Acessar curso de Segurança no Trabalho',
          },
          {
            title: 'Desvendando a Blockchain',
            description: 'Apresenta a tecnologia blockchain, seu funcionamento e os benefícios para o mundo dos negócios.',
            duration: '⏱ 20 horas',
            aria: 'Acessar curso Desvendando a Blockchain',
          },
          {
            title: 'Excel Básico',
            description: 'Desenvolve competências para elaborar e formatar planilhas com fórmulas e funções matemáticas, estatísticas e lógicas.',
            duration: '⏱ 40 horas',
            aria: 'Acessar curso de Excel Básico',
          },
          {
            title: 'Por Dentro da Computação Quântica',
            description: 'Apresenta os fundamentos da computação quântica, suas diferenças em relação à computação tradicional e suas aplicações.',
            duration: '⏱ 4 horas',
            aria: 'Acessar curso de Por Dentro da Computação Quântica',
          },
          {
            title: 'Preparação para o Mundo do Trabalho',
            description: 'Apresenta estratégias para inserção e recolocação de jovens e adultos no mercado de trabalho.',
            duration: '⏱ 14 horas',
            aria: 'Acessar curso de Preparação para o Mundo do Trabalho',
          },
          {
            title: 'Principais Estratégias de Importação e Exportação',
            description: 'Desenvolve competências para identificar estratégias de importação e exportação com base na estrutura legal brasileira.',
            duration: '⏱ 8 horas',
            aria: 'Acessar curso de Principais Estratégias de Importação e Exportação',
          },
          {
            title: 'Logística Reversa',
            description: 'Explora as rotinas operacionais básicas da logística reversa e sua importância na cadeia de suprimentos.',
            duration: '⏱ 40 horas',
            aria: 'Acessar curso de Logística Reversa',
          },
          {
            title: 'Programação de Banco de Dados',
            description: 'Desenvolve competências de análise, planejamento, criação e manutenção de bancos de dados relacionais.',
            duration: '⏱ 120 horas',
            aria: 'Acessar curso de Programação de Banco de Dados',
          },
          {
            title: 'Técnicas Básicas de Negociação',
            description: 'Reconhece as principais técnicas de negociação e vendas com foco em demandas e relacionamento ético com clientes.',
            duration: '⏱ 10 horas',
            aria: 'Acessar curso de Técnicas Básicas de Negociação',
          },
          {
            title: 'Planejamento e Controle da Produção',
            description: 'Desenvolve competências para dimensionar capacidade produtiva, organizar cronogramas e monitorar indicadores de produção.',
            duration: '⏱ 40 horas',
            aria: 'Acessar curso de Planejamento e Controle da Produção',
          },
          {
            title: 'Requisitos e Modelagem de Software',
            description: 'Desenvolve competências para coleta, análise e documentação de requisitos e modelagem de software.',
            duration: '⏱ 60 horas',
            aria: 'Acessar curso de Requisitos e Modelagem de Software',
          },
          {
            title: 'Prevenção e Reação aos Incidentes Cibernéticos',
            description: 'Explora conceitos fundamentais de segurança cibernética, medidas preventivas e ações em situações de crise.',
            duration: '⏱ 4 horas',
            aria: 'Acessar curso de Prevenção e Reação aos Incidentes Cibernéticos',
          },
        ],
      },
      community: {
        title: 'Posts da Comunidade',
        subtitle: 'Veja o que nossa comunidade tem a dizer sobre o SENAI',
        filters: ['Mais Curtidos', 'Menos Curtidos', 'Mais Recentes', 'Mais Antigos'],
        addTitle: 'Adicionar Post da Comunidade',
        button: 'Publicar Post',
        form: {
          name: 'Nome',
          namePlaceholder: 'Seu nome completo',
          date: 'Data',
          email: 'E-mail institucional',
          emailPlaceholder: 'seunome@aluno.senai.br',
          avatar: 'Link do Avatar (opcional)',
          avatarPlaceholder: 'https://exemplo.com/avatar.jpg',
          text: 'Texto do Post',
          textPlaceholder: 'Compartilhe sua experiência no SENAI...',
          tag: 'Tag',
          tagPlaceholder: 'Ex: Aluno - Automação Industrial',
        },
        posts: [
          {
            author: 'Maria Silva',
            date: '15 de Novembro, 2024',
            content: 'O SENAI mudou minha vida! Consegui meu primeiro emprego como técnica em automação logo após concluir o curso. Os professores são extremamente dedicados e a estrutura dos laboratórios é impecável. Recomendo muito!',
            tag: 'Aluna - Automação Industrial',
          },
          {
            author: 'João Santos',
            date: '10 de Novembro, 2024',
            content: 'Minha experiência no SENAI Morvan Figueiredo foi excepcional. O curso de Mecânica me proporcionou conhecimentos práticos e teóricos fundamentais. Hoje trabalho em uma grande montadora graças à formação que recebi aqui.',
            tag: 'Ex-aluno - Mecânica',
          },
          {
            author: 'Ana Costa',
            date: '5 de Novembro, 2024',
            content: 'Estou no terceiro semestre de Eletrotécnica e cada dia me surpreendo mais com a qualidade do ensino. As aulas práticas são fantásticas e os equipamentos são de última geração. Sinto que estou me preparando de verdade para o mercado!',
            tag: 'Aluna - Eletrotécnica',
          },
          {
            author: 'Beatriz Lima',
            date: '28 de Outubro, 2024',
            content: 'Concluí meu curso de Programação há 2 anos e hoje sou desenvolvedora em uma startup. O SENAI me deu a base sólida que eu precisava para entrar no mercado de tecnologia. Gratidão eterna a todos os professores!',
            tag: 'Ex-aluna - Programação',
          },
          {
            author: 'Roberto Ferreira',
            date: '22 de Outubro, 2024',
            content: 'A infraestrutura do SENAI é impressionante! Laboratórios modernos, biblioteca completa e áreas de convivência acolhedoras. O ambiente estimula o aprendizado e a troca de experiências entre os alunos.',
            tag: 'Aluno - Design UI/UX',
          },
        ],
      },
      about: {
        heroTitle: 'SOBRE NÓS',
        heroSubtitle: 'Conheça a equipe que produziu este blog',
        teamTitle: 'Nossa Equipe',
        teamSubtitle: 'Aqui você verá os estudantes que se envolveram para a feitura deste projeto',
        members: [
          {
            name: 'Guilherme Coutinho Simon',
            role: 'Desenvolvedor Backend',
            description: 'Responsável pela feitura de parte do JavaScript, isto é, o CRUD e as funcionalidades. E também, no início do projeto, em parte do HTML.',
            skills: ['JavaScript', 'CRUD', 'HTML'],
          },
          {
            name: 'Pedro Garcia Batista',
            role: 'Designer & Desenvolvedor Backend',
            description: 'Contribuiu também no CRUD e na estética, auxiliando nas paletas de cores.',
            skills: ['JavaScript', 'CRUD', 'Design'],
          },
          {
            name: 'João Vitor Rodriguez Nogueira',
            role: 'Designer',
            description: 'Contribuiu na confecção do protótipo de alta fidelidade no Figma.',
            skills: ['Figma', 'Prototipação'],
          },
          {
            name: 'Guilherme Jorge de Araujo',
            role: 'Desenvolvedor Frontend',
            description: 'Organização de grande parte do HTML e também do CSS.',
            skills: ['HTML', 'CSS'],
          },
        ],
        thanksTitle: 'Agradecimentos',
        thanksText: 'Agradecemos aos professores e à instituição pelo suporte e oportunidade de desenvolver nossas habilidades técnicas através deste blog.',
        backHome: 'Voltar para Home',
      },
      footer: '© 2025 SENAI Morvan Figueiredo. Todos os direitos reservados.',
      alerts: {
        invalidEmail: 'Apenas e-mails institucionais (@aluno.senai.br) podem enviar comentários.',
        nameRequired: 'Preencha o nome',
        dateRequired: 'Preencha a data',
        textRequired: 'Preencha o texto',
        tagRequired: 'Preencha a tag',
      },
      months: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      pageTitles: {
        index: 'SENAI Morvan Figueiredo',
        about: 'Sobre Nós - SENAI Morvan Figueiredo',
      },
    },
    en: {
      nav: [
        'Home',
        'About SENAI',
        'Latest news',
        'Podcasts',
        'Opportunities',
        'Courses',
        'Community Posts',
        'About Us',
      ],
      hero: {
        subtitle: 'Discover stories, projects and opportunities from our school community',
        cta: 'Learn More',
      },
      history: {
        title: 'Our History',
        subtitle: 'Discover the path of excellence of SENAI Morvan Figueiredo',
        paragraphs: [
          'The history of SENAI Morvan Figueiredo in Mooca is linked to the history of SENAI in São Paulo, created in 1942.',
          'The unit is named after patron Morvan Dias de Figueiredo, an important leader of Brazilian industry, known for his pioneering work and for being one of the founders of SENAI in São Paulo.',
          'With modern infrastructure and a highly qualified teaching staff, we continue our path of excellence by training the professionals the industry needs to face the challenges of the future.',
        ],
      },
      news: {
        title: 'Latest News',
        subtitle: 'Stay up to date with the latest news and events from SENAI schools in general',
        cards: [
          {
            date: 'Nov 26, 2025 - updated at 09:31 on Nov 27, 2025',
            title: 'ON Ideas Challenge mobilizes 1.8 thousand SENAI-SP students in search of solutions for industry',
            excerpt: 'With a methodology based on real projects, SENAI-SP brings education and industry together in an open innovation experience.',
            link: 'Read more →',
          },
          {
            date: 'Nov 17, 2025 - updated at 09:58 on Nov 18, 2025',
            title: 'SENAI-SP strengthens leadership in vocational education with victory at WorldSkills Americas',
            excerpt: 'The SENAI-SP delegation won the highest number of medals at WorldSkills Americas held in Santiago, Chile, from November 3 to 8.',
            link: 'Read more →',
          },
          {
            date: 'Nov 14, 2025 - updated at 16:52 on Nov 14, 2025',
            title: 'Brazil More Productive reinforces SENAI’s role in modernizing industry',
            excerpt: 'The initiative strengthens the execution of public policies focused on productivity and industrial development, bringing technology, innovation and training to companies across the country.',
            link: 'Read more →',
          },
          {
            date: 'Nov 11, 2025 - updated at 09:12 on Nov 13, 2025',
            title: 'SENAI-SP highlights labor market trends in the ICT area',
            excerpt: 'Industrial Employment Map points out actions needed for professional training in Information and Communication Technology.',
            link: 'Read more →',
          },
          {
            date: 'Nov 11, 2025 - updated at 09:06 on Nov 13, 2025',
            title: 'SENAI-SP invests in vocational education to drive green jobs',
            excerpt: 'The institution presented its main actions in the sustainability agenda during the SP + Green Summit panel.',
            link: 'Read more →',
          },
          {
            date: 'Oct 24, 2025 - updated at 11:50 on Oct 29, 2025',
            title: 'UniSENAI SP - Taubaté achieves maximum MEC score for the Bachelor of Industrial Mechatronics Technology',
            excerpt: 'The Bachelor of Industrial Mechatronics Technology at the SENAI Félix Guisard Technology School in Taubaté received the maximum score in the Ministry of Education assessment.',
            link: 'Read more →',
          },
        ],
      },
      podcasts: {
        title: 'Have you heard our podcasts?',
        subtitle: 'General conversations about technology, education and industrial careers.',
        items: [
          '#01 Importance of PPE',
          '#02 The future of automation',
          '#03 Clean energy in industry',
        ],
      },
      opportunities: {
        title: 'Opportunities',
        subtitle: 'Connect with the job market through SENAI',
        items: [
          {
            title: 'Internship Opportunities',
            text: 'Partner companies offer exclusive opportunities for our students to start their careers.',
          },
          {
            title: 'Scholarships',
            text: 'Incentive programs and full scholarships for students with outstanding academic performance.',
          },
          {
            title: 'Permanent Jobs',
            text: 'Partnerships with industries guarantee direct hiring of qualified technicians.',
          },
        ],
      },
      courses: {
        title: 'Available Courses',
        subtitle: 'Discover some of our technical courses for professional qualification',
        items: [
          {
            title: 'Programming Logic',
            description: 'Understand the basics of programming logic to create websites and program robots.',
            duration: '⏱ 14 hours',
            aria: 'Access Programming Logic course',
          },
          {
            title: 'Design Thinking',
            description: 'The professional development course in Design Thinking develops skills to recognize new ways of thinking about the product and service creation process.',
            duration: '⏱ 8 hours',
            aria: 'Access Design Thinking course',
          },
          {
            title: 'UI and UX Design',
            description: 'The course develops technical skills to create interfaces for applications, websites and social media, ensuring an excellent user experience.',
            duration: '⏱ 60 hours',
            aria: 'Access UI and UX Design course',
          },
          {
            title: 'Workplace Safety',
            description: 'It sensitizes participants to accident prevention and safety in the workplace.',
            duration: '⏱ 14 hours',
            aria: 'Access Workplace Safety course',
          },
          {
            title: 'Understanding Blockchain',
            description: 'It introduces blockchain technology, how it works and the benefits it brings to the business world.',
            duration: '⏱ 20 hours',
            aria: 'Access Understanding Blockchain course',
          },
          {
            title: 'Basic Excel',
            description: 'Develops skills to create and format spreadsheets with mathematical, statistical and logical formulas and functions.',
            duration: '⏱ 40 hours',
            aria: 'Access Basic Excel course',
          },
          {
            title: 'Inside Quantum Computing',
            description: 'Introduces the fundamentals of quantum computing, its differences from traditional computing and its applications.',
            duration: '⏱ 4 hours',
            aria: 'Access Inside Quantum Computing course',
          },
          {
            title: 'Preparation for the World of Work',
            description: 'Presents strategies to support the insertion and reintegration of young people and adults into the labor market.',
            duration: '⏱ 14 hours',
            aria: 'Access Preparation for the World of Work course',
          },
          {
            title: 'Main Import and Export Strategies',
            description: 'Develops skills to identify import and export strategies based on the Brazilian legal framework.',
            duration: '⏱ 8 hours',
            aria: 'Access Main Import and Export Strategies course',
          },
          {
            title: 'Reverse Logistics',
            description: 'Explores the basic operational routines of reverse logistics and its importance in the supply chain.',
            duration: '⏱ 40 hours',
            aria: 'Access Reverse Logistics course',
          },
          {
            title: 'Database Programming',
            description: 'Develops skills in analysis, planning, creation and maintenance of relational databases.',
            duration: '⏱ 120 hours',
            aria: 'Access Database Programming course',
          },
          {
            title: 'Basic Negotiation Techniques',
            description: 'Recognizes the main negotiation and sales techniques with an ethical focus on customer needs and relationships.',
            duration: '⏱ 10 hours',
            aria: 'Access Basic Negotiation Techniques course',
          },
          {
            title: 'Production Planning and Control',
            description: 'Develops skills to size productive capacity, organize schedules and monitor production indicators.',
            duration: '⏱ 40 hours',
            aria: 'Access Production Planning and Control course',
          },
          {
            title: 'Software Requirements and Modeling',
            description: 'Develops skills for collecting, analyzing and documenting requirements and software modeling.',
            duration: '⏱ 60 hours',
            aria: 'Access Software Requirements and Modeling course',
          },
          {
            title: 'Prevention and Response to Cyber Incidents',
            description: 'Explores key concepts of cybersecurity, preventive measures and response actions in crisis situations.',
            duration: '⏱ 4 hours',
            aria: 'Access Prevention and Response to Cyber Incidents course',
          },
        ],
      },
      community: {
        title: 'Community Posts',
        subtitle: 'See what our community has to say about SENAI',
        filters: ['Most Liked', 'Least Liked', 'Most Recent', 'Oldest'],
        addTitle: 'Add a Community Post',
        button: 'Publish Post',
        form: {
          name: 'Name',
          namePlaceholder: 'Your full name',
          date: 'Date',
          email: 'Institutional e-mail',
          emailPlaceholder: 'yourname@aluno.senai.br',
          avatar: 'Avatar Link (optional)',
          avatarPlaceholder: 'https://example.com/avatar.jpg',
          text: 'Post Text',
          textPlaceholder: 'Share your experience at SENAI...',
          tag: 'Tag',
          tagPlaceholder: 'Example: Student - Industrial Automation',
        },
        posts: [
          {
            author: 'Maria Silva',
            date: 'November 15, 2024',
            content: 'SENAI changed my life! I got my first job as an automation technician right after finishing the course. The teachers are extremely dedicated and the laboratory structure is impeccable. I highly recommend it!',
            tag: 'Student - Industrial Automation',
          },
          {
            author: 'João Santos',
            date: 'November 10, 2024',
            content: 'My experience at SENAI Morvan Figueiredo was exceptional. The Mechanics course gave me the practical and theoretical knowledge I needed. Today I work at a major automaker thanks to the training I received here.',
            tag: 'Former student - Mechanics',
          },
          {
            author: 'Ana Costa',
            date: 'November 5, 2024',
            content: 'I am in the third semester of Electrical Engineering and every day I am more impressed by the quality of teaching. The practical classes are fantastic and the equipment is state of the art. I feel I am truly preparing for the market!',
            tag: 'Student - Electrotechnics',
          },
          {
            author: 'Beatriz Lima',
            date: 'October 28, 2024',
            content: 'I completed my Programming course two years ago and today I work as a developer at a startup. SENAI gave me the solid foundation I needed to enter the technology market. Eternal gratitude to all the teachers!',
            tag: 'Former student - Programming',
          },
          {
            author: 'Roberto Ferreira',
            date: 'October 22, 2024',
            content: 'The infrastructure at SENAI is impressive! Modern laboratories, a complete library and welcoming common areas. The environment encourages learning and the exchange of experiences among students. I am very satisfied with my choice!',
            tag: 'Student - UI/UX Design',
          },
        ],
      },
      about: {
        heroTitle: 'ABOUT US',
        heroSubtitle: 'Meet the team that built this blog',
        teamTitle: 'Our Team',
        teamSubtitle: 'Here you will see the students who got involved in this project',
        members: [
          {
            name: 'Guilherme Coutinho Simon',
            role: 'Backend Developer',
            description: 'Responsible for part of the JavaScript, including the CRUD and its features. He also helped with part of the HTML at the beginning of the project.',
            skills: ['JavaScript', 'CRUD', 'HTML'],
          },
          {
            name: 'Pedro Garcia Batista',
            role: 'Designer & Backend Developer',
            description: 'Also contributed to the CRUD and the visual design, helping with the color palette.',
            skills: ['JavaScript', 'CRUD', 'Design'],
          },
          {
            name: 'João Vitor Rodriguez Nogueira',
            role: 'Designer',
            description: 'Contributed to the high-fidelity prototype in Figma.',
            skills: ['Figma', 'Prototyping'],
          },
          {
            name: 'Guilherme Jorge de Araujo',
            role: 'Frontend Developer',
            description: 'Organized much of the HTML and CSS.',
            skills: ['HTML', 'CSS'],
          },
        ],
        thanksTitle: 'Thank You',
        thanksText: 'We thank the teachers and the institution for the support and opportunity to develop our technical skills through this blog.',
        backHome: 'Back to Home',
      },
      footer: '© 2025 SENAI Morvan Figueiredo. All rights reserved.',
      alerts: {
        invalidEmail: 'Only institutional e-mails (@aluno.senai.br) can submit comments.',
        nameRequired: 'Please enter your name',
        dateRequired: 'Please enter a date',
        textRequired: 'Please enter your text',
        tagRequired: 'Please enter a tag',
      },
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      pageTitles: {
        index: 'SENAI Morvan Figueiredo',
        about: 'About Us - SENAI Morvan Figueiredo',
      },
    },
  };

  let currentLocale = 'pt-BR';

  function getInitialLocale() {
    const savedLocale = localStorage.getItem('site-locale');
    return savedLocale === 'en' ? 'en' : 'pt-BR';
  }

  function resolveValue(locale, path) {
    return path.split('.').reduce((acc, key) => acc?.[key], translations[locale]) || '';
  }

  function setLanguage(locale) {
    currentLocale = locale === 'en' ? 'en' : 'pt-BR';
    localStorage.setItem('site-locale', currentLocale === 'en' ? 'en' : 'pt-BR');
    document.documentElement.lang = currentLocale;
    document.documentElement.setAttribute('data-lang', currentLocale);

    const toggleButton = document.getElementById('language-toggle');
    if (toggleButton) {
      toggleButton.textContent = currentLocale === 'en' ? 'PT' : 'EN';
      toggleButton.setAttribute('title', currentLocale === 'en' ? 'Mudar para português' : 'Switch to English');
      toggleButton.setAttribute('aria-label', currentLocale === 'en' ? 'Mudar para português' : 'Switch to English');
    }

    applyTranslations();
    if (window.__onLanguageChanged) {
      window.__onLanguageChanged(currentLocale);
    }
  }

  function applyTranslations() {
    const locale = currentLocale;
    const isAboutPage = window.location.pathname.toLowerCase().includes('sobrenos') || window.location.pathname.toLowerCase().includes('sobre-nos');

    document.title = isAboutPage ? resolveValue(locale, 'pageTitles.about') : resolveValue(locale, 'pageTitles.index');

    const navLinks = document.querySelectorAll('#navbar .nav-link');
    navLinks.forEach((link, index) => {
      const text = resolveValue(locale, `nav.${index}`);
      if (text) {
        link.textContent = text;
      }
    });

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
      heroSubtitle.textContent = resolveValue(locale, 'hero.subtitle');
    }

    const heroButton = document.querySelector('.hero .btn-primary');
    if (heroButton) {
      heroButton.textContent = resolveValue(locale, 'hero.cta');
    }

    const historyTitle = document.querySelector('#historia .section-title');
    if (historyTitle) {
      historyTitle.textContent = resolveValue(locale, 'history.title');
    }

    const historySubtitle = document.querySelector('#historia .section-subtitle');
    if (historySubtitle) {
      historySubtitle.textContent = resolveValue(locale, 'history.subtitle');
    }

    const historyParagraphs = document.querySelectorAll('#historia .historia-text p');
    historyParagraphs.forEach((paragraph, index) => {
      const text = resolveValue(locale, `history.paragraphs.${index}`);
      if (text) {
        paragraph.textContent = text;
      }
    });

    const newsTitle = document.querySelector('#noticias .section-title');
    if (newsTitle) {
      newsTitle.textContent = resolveValue(locale, 'news.title');
    }

    const newsSubtitle = document.querySelector('#noticias .section-subtitle');
    if (newsSubtitle) {
      newsSubtitle.textContent = resolveValue(locale, 'news.subtitle');
    }

    const newsCards = document.querySelectorAll('#noticias .news-card');
    newsCards.forEach((card, index) => {
      const item = resolveValue(locale, `news.cards.${index}`);
      if (!item) return;
      const date = card.querySelector('.news-date');
      const title = card.querySelector('.news-title');
      const excerpt = card.querySelector('.news-excerpt');
      const link = card.querySelector('.news-link');
      if (date) date.textContent = item.date;
      if (title) title.textContent = item.title;
      if (excerpt) excerpt.textContent = item.excerpt;
      if (link) link.textContent = item.link;
    });

    const podcastsTitle = document.querySelector('#podcasts .section-title');
    if (podcastsTitle) {
      podcastsTitle.textContent = resolveValue(locale, 'podcasts.title');
    }

    const podcastsSubtitle = document.querySelector('#podcasts .section-subtitle');
    if (podcastsSubtitle) {
      podcastsSubtitle.textContent = resolveValue(locale, 'podcasts.subtitle');
    }

    const podcastItems = document.querySelectorAll('#podcasts .podcast-number');
    podcastItems.forEach((item, index) => {
      const text = resolveValue(locale, `podcasts.items.${index}`);
      if (text) {
        item.textContent = text;
      }
    });

    const opportunitiesTitle = document.querySelector('#oportunidades .section-title');
    if (opportunitiesTitle) {
      opportunitiesTitle.textContent = resolveValue(locale, 'opportunities.title');
    }

    const opportunitiesSubtitle = document.querySelector('#oportunidades .section-subtitle');
    if (opportunitiesSubtitle) {
      opportunitiesSubtitle.textContent = resolveValue(locale, 'opportunities.subtitle');
    }

    const opportunityCards = document.querySelectorAll('#oportunidades .opportunity-card');
    opportunityCards.forEach((card, index) => {
      const item = resolveValue(locale, `opportunities.items.${index}`);
      if (!item) return;
      const title = card.querySelector('.opportunity-title');
      const text = card.querySelector('.opportunity-text');
      if (title) title.textContent = item.title;
      if (text) text.textContent = item.text;
    });

    const coursesTitle = document.querySelector('#cursos .section-title');
    if (coursesTitle) {
      coursesTitle.textContent = resolveValue(locale, 'courses.title');
    }

    const coursesSubtitle = document.querySelector('#cursos .section-subtitle');
    if (coursesSubtitle) {
      coursesSubtitle.textContent = resolveValue(locale, 'courses.subtitle');
    }

    const courseCards = document.querySelectorAll('#cursos .course-card');
    courseCards.forEach((card, index) => {
      const item = resolveValue(locale, `courses.items.${index}`);
      if (!item) return;
      const title = card.querySelector('.course-title');
      const description = card.querySelector('.course-description');
      const duration = card.querySelector('.course-duration');
      const arrow = card.querySelector('.course-arrow');
      if (title) title.textContent = item.title;
      if (description) description.textContent = item.description;
      if (duration) duration.textContent = item.duration;
      if (arrow) arrow.setAttribute('aria-label', item.aria);
    });

    const communityTitle = document.querySelector('#posts-comunidade .section-title');
    if (communityTitle) {
      communityTitle.textContent = resolveValue(locale, 'community.title');
    }

    const communitySubtitle = document.querySelector('#posts-comunidade .section-subtitle');
    if (communitySubtitle) {
      communitySubtitle.textContent = resolveValue(locale, 'community.subtitle');
    }

    const filterButtons = document.querySelectorAll('#posts-comunidade .filtros button');
    filterButtons.forEach((button, index) => {
      const text = resolveValue(locale, `community.filters.${index}`);
      if (text) {
        button.textContent = text;
      }
    });

    const addPostTitle = document.querySelector('#posts-comunidade .add-post-form h2');
    if (addPostTitle) {
      addPostTitle.textContent = resolveValue(locale, 'community.addTitle');
    }

    const publishButton = document.querySelector('#posts-comunidade #add-comunidade');
    if (publishButton) {
      publishButton.textContent = resolveValue(locale, 'community.button');
    }

    const formLabels = document.querySelectorAll('#posts-comunidade .form-group label');
    const formFields = [
      { label: 'community.form.name', input: 'nome', placeholder: 'community.form.namePlaceholder' },
      { label: 'community.form.date', input: 'data', placeholder: null },
      { label: 'community.form.email', input: 'email', placeholder: 'community.form.emailPlaceholder' },
      { label: 'community.form.avatar', input: 'avatar', placeholder: 'community.form.avatarPlaceholder' },
      { label: 'community.form.text', input: 'texto', placeholder: 'community.form.textPlaceholder' },
      { label: 'community.form.tag', input: 'tag', placeholder: 'community.form.tagPlaceholder' },
    ];

    formLabels.forEach((label, index) => {
      const config = formFields[index];
      if (!config) return;
      const text = resolveValue(locale, config.label);
      if (text) {
        label.textContent = text;
      }
      const input = document.getElementById(config.input);
      if (input && config.placeholder) {
        input.placeholder = resolveValue(locale, config.placeholder);
      }
    });

    const communityPosts = document.querySelectorAll('#posts-comunidade .community-post');
    communityPosts.forEach((post, index) => {
      const item = resolveValue(locale, `community.posts.${index}`);
      if (!item) return;
      const author = post.querySelector('.post-author');
      const date = post.querySelector('.post-date');
      const content = post.querySelector('.post-content p');
      const tag = post.querySelector('.post-tag');
      if (author) author.textContent = item.author;
      if (date) date.textContent = item.date;
      if (content) content.textContent = item.content;
      if (tag) tag.textContent = item.tag;
    });

    const footerText = document.querySelector('.footer p');
    if (footerText) {
      footerText.textContent = resolveValue(locale, 'footer');
    }

    const aboutHeroWhite = document.querySelector('.hero .hero-title .white');
    const aboutHeroRed = document.querySelector('.hero .hero-title .red');
    if (aboutHeroWhite && aboutHeroRed && window.location.pathname.toLowerCase().includes('sobrenos')) {
      aboutHeroWhite.textContent = locale === 'en' ? 'ABOUT' : 'SOBRE';
      aboutHeroRed.textContent = locale === 'en' ? 'US' : 'NÓS';
    }

    const aboutHeroSubtitle = document.querySelector('.hero .hero-subtitle');
    if (aboutHeroSubtitle && window.location.pathname.toLowerCase().includes('sobrenos')) {
      aboutHeroSubtitle.textContent = resolveValue(locale, 'about.heroSubtitle');
    }

    const aboutTitle = document.querySelector('.section-light .section-title');
    if (aboutTitle && window.location.pathname.toLowerCase().includes('sobrenos')) {
      aboutTitle.textContent = resolveValue(locale, 'about.teamTitle');
    }

    const aboutSubtitle = document.querySelector('.section-light .section-subtitle');
    if (aboutSubtitle && window.location.pathname.toLowerCase().includes('sobrenos')) {
      aboutSubtitle.textContent = resolveValue(locale, 'about.teamSubtitle');
    }

    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
      const item = resolveValue(locale, `about.members.${index}`);
      if (!item) return;
      const name = member.querySelector('.member-name');
      const role = member.querySelector('.member-role');
      const description = member.querySelector('.member-description');
      const skillTags = member.querySelectorAll('.skill-tag');
      if (name) name.textContent = item.name;
      if (role) role.textContent = item.role;
      if (description) description.textContent = item.description;
      skillTags.forEach((tag, tagIndex) => {
        const skill = item.skills?.[tagIndex];
        if (skill) tag.textContent = skill;
      });
    });

    const thanksTitle = document.querySelector('.section-dark .section-title');
    if (thanksTitle && window.location.pathname.toLowerCase().includes('sobrenos')) {
      thanksTitle.textContent = resolveValue(locale, 'about.thanksTitle');
    }

    const thanksText = document.querySelector('.thanks-text');
    if (thanksText && window.location.pathname.toLowerCase().includes('sobrenos')) {
      thanksText.textContent = resolveValue(locale, 'about.thanksText');
    }

    const backHomeButton = document.querySelector('.section-dark .btn-primary');
    if (backHomeButton && window.location.pathname.toLowerCase().includes('sobrenos')) {
      backHomeButton.textContent = resolveValue(locale, 'about.backHome');
    }
  }

  function formatDate(value) {
    const [year, month, day] = value.split('-');
    const monthName = translations[currentLocale].months[parseInt(month, 10) - 1];
    const suffix = currentLocale === 'en' ? `${monthName} ${day}, ${year}` : `${day} de ${monthName}, ${year}`;
    return suffix;
  }

  function t(path) {
    return resolveValue(currentLocale, path) || path;
  }

  function init() {
    setLanguage(getInitialLocale());
  }

  window.i18n = {
    setLanguage,
    t,
    formatDate,
    currentLocale: () => currentLocale,
  };

  document.addEventListener('DOMContentLoaded', init);
})();
