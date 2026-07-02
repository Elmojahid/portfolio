// =============================================
// i18n — Internationalization (FR / EN)
// =============================================

// Current language state
let currentLang = 'fr';

// ---- TRANSLATION DICTIONARY ----
const translations = {
  // === NAVIGATION ===
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.experience": { fr: "Parcours", en: "Experience" },
  "nav.projects": { fr: "Projets", en: "Projects" },
  "nav.skills": { fr: "Expertise", en: "Skills" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.hire": { fr: "Recruter", en: "Hire Me" },

  // === HERO ===
  "hero.tag": { fr: "Ingénieur Intelligence Artificielle", en: "Artificial Intelligence Engineer" },
  "hero.description": {
    fr: "Concepteur de solutions d'IA de niveau production. Spécialisé dans l'implémentation de systèmes RAG, le traitement automatique du langage naturel multilingue (Arabe/Français) et l'optimisation d'architectures d'inférence en temps réel.",
    en: "Production-grade AI solution architect. Specialized in RAG system implementation, multilingual NLP (Arabic/French) and real-time inference architecture optimization."
  },
  "hero.cta.project": { fr: "Démarrer un projet", en: "Start a Project" },
  "hero.cta.discover": { fr: "Découvrir mon parcours", en: "Discover My Journey" },
  "hero.location": { fr: "Rabat, Maroc", en: "Rabat, Morocco" },

  // === CONSOLE ===
  "console.loading": { fr: "⚡ Chargement des expériences professionnelles...", en: "⚡ Loading professional experiences from database..." },
  "console.prev": { fr: "◀ Précédent", en: "◀ Previous" },
  "console.next": { fr: "Suivant ▶", en: "Next ▶" },

  // === EXPERIENCE SECTION ===
  "exp.tag": { fr: "Expérience & Études", en: "Experience & Education" },
  "exp.title": { fr: "Parcours Professionnel", en: "Professional Journey" },
  "exp.desc": {
    fr: "Une timeline inspirée d'un pipeline MLOps, combinant recherche R&D, ingénierie de données et déploiements full-stack.",
    en: "A timeline inspired by an MLOps pipeline, combining R&D research, data engineering and full-stack deployments."
  },

  // -- Timeline Items --
  // 1. MaghrebIT
  "exp1.role": { fr: "Fondateur & Ingénieur IA / Full Stack", en: "Founder & AI / Full Stack Engineer" },
  "exp1.company": { fr: "Maghreb IT — Casablanca, Maroc", en: "Maghreb IT — Casablanca, Morocco" },
  "exp1.date": { fr: "Déc. 2025 – Présent (7 mois)", en: "Dec. 2025 – Present (7 months)" },
  "exp1.d1": { fr: "Conception et livraison de solutions d'IA et Web de bout en bout pour des clients (combinaison de vision par ordinateur, LLM et apps web).", en: "End-to-end AI and Web solution design and delivery for clients (combining computer vision, LLMs and web apps)." },
  "exp1.d2": { fr: "Création d'applications web sécurisées et responsives avec .NET Core, ASP.NET, React/Next.js, et SQL/MongoDB (intégration de paiements, CMS et authentification).", en: "Building secure and responsive web applications with .NET Core, ASP.NET, React/Next.js, and SQL/MongoDB (payment integration, CMS and authentication)." },
  "exp1.d3": { fr: "Intégration de fonctionnalités d'IA (recherche RAG, chatbots conversationnels, inférence vidéo/images) pour optimiser les flux de travail.", en: "AI feature integration (RAG search, conversational chatbots, video/image inference) to optimize workflows." },
  "exp1.d4": { fr: "Optimisation de la performance (indexation DB, mise en cache) et automatisation du déploiement via Docker et API FastAPI.", en: "Performance optimization (DB indexing, caching) and deployment automation via Docker and FastAPI APIs." },

  // 2. Parlement
  "exp2.role": { fr: "Ingénieur IA/ML (Stagiaire R&D)", en: "AI/ML Engineer (R&D Intern)" },
  "exp2.company": { fr: "Parlement, Chambre des Représentants — Rabat, Maroc", en: "Parliament, House of Representatives — Rabat, Morocco" },
  "exp2.date": { fr: "Avr. 2025 – Sept. 2025 (6 mois)", en: "Apr. 2025 – Sep. 2025 (6 months)" },
  "exp2.d1": { fr: "Développement de solutions d'intelligence artificielle et d'apprentissage automatique pour moderniser les processus législatifs.", en: "Development of AI and machine learning solutions to modernize legislative processes." },
  "exp2.d2": { fr: "Conception de systèmes intelligents d'analyse documentaire, d'indexation de textes législatifs et de classification automatique de débats.", en: "Design of intelligent document analysis systems, legislative text indexing and automated debate classification." },
  "exp2.d3": { fr: "Entraînement de modèles NLP bilingues (Arabe/Français) pour la recherche sémantique RAG et le suivi des pipelines d'inférence sécurisés.", en: "Training bilingual NLP models (Arabic/French) for RAG semantic search and secure inference pipeline monitoring." },
  "exp2.d4": { fr: "Optimisation des pipelines ML pour le traitement en temps réel des flux de données parlementaires conformes aux exigences de cybersécurité.", en: "ML pipeline optimization for real-time processing of parliamentary data flows meeting cybersecurity requirements." },

  // 3. Prodigy InfoTech
  "exp3.role": { fr: "Stagiaire en Machine Learning", en: "Machine Learning Intern" },
  "exp3.company": { fr: "Prodigy InfoTech — Télétravail", en: "Prodigy InfoTech — Remote" },
  "exp3.date": { fr: "Nov. 2024 – Déc. 2024 (2 mois)", en: "Nov. 2024 – Dec. 2024 (2 months)" },
  "exp3.d1": { fr: "Analyse exploratoire et prétraitement de jeux de données structurées pour l'entraînement de modèles prédictifs.", en: "Exploratory analysis and preprocessing of structured datasets for predictive model training." },
  "exp3.d2": { fr: "Développement et entraînement de modèles de régression linéaire et classification pour résoudre des problématiques réelles.", en: "Development and training of linear regression and classification models to solve real-world problems." },
  "exp3.d3": { fr: "Évaluation de modèles à l'aide de métriques de précision clés (MAE, MSE, coefficient R²).", en: "Model evaluation using key accuracy metrics (MAE, MSE, R² coefficient)." },
  "exp3.d4": { fr: "Visualisation graphique des résultats et matrices de confusion pour guider la prise de décision.", en: "Graphical visualization of results and confusion matrices to guide decision-making." },

  // 4. HCP
  "exp4.role": { fr: "Contrôleur RGPH", en: "Census Controller (RGPH)" },
  "exp4.company": { fr: "Haut-Commissariat au Plan (HCP) — Rabat, Maroc", en: "High Commission for Planning (HCP) — Rabat, Morocco" },
  "exp4.date": { fr: "Août 2024 – Sept. 2024 (2 mois)", en: "Aug. 2024 – Sep. 2024 (2 months)" },
  "exp4.d1": { fr: "Supervision opérationnelle et encadrement des agents recenseurs sur le terrain.", en: "Operational supervision and management of field census agents." },
  "exp4.d2": { fr: "Contrôle de conformité et validation de la qualité des données collectées pour le Recensement Général de la Population et de l'Habitat 2024.", en: "Compliance control and data quality validation for the 2024 General Population and Housing Census." },

  // 5. ZolaDesign
  "exp5.role": { fr: "Développeur Full Stack", en: "Full Stack Developer" },
  "exp5.company": { fr: "ZolaDesign — Casablanca, Maroc", en: "ZolaDesign — Casablanca, Morocco" },
  "exp5.date": { fr: "Mars 2024 – Août 2024 (6 mois)", en: "Mar. 2024 – Aug. 2024 (6 months)" },
  "exp5.d1": { fr: "Conception et développement complet de l'application web de l'entreprise (front-end, back-end d'API et portail d'administration).", en: "Complete design and development of the company web application (front-end, API back-end and admin portal)." },
  "exp5.d2": { fr: "Conception de maquettes responsives adaptées à l'image de marque et implémentation des règles métiers et bases de données.", en: "Responsive mockup design aligned with brand identity and implementation of business rules and databases." },

  // 6. JobInTech
  "exp6.role": { fr: "Développeur Full Stack (.NET/React)", en: "Full Stack Developer (.NET/React)" },
  "exp6.company": { fr: "Programme JobInTech — International University of Rabat", en: "JobInTech Program — International University of Rabat" },
  "exp6.date": { fr: "Déc. 2023 – Avril 2024 (5 mois)", en: "Dec. 2023 – Apr. 2024 (5 months)" },
  "exp6.d1": { fr: "Formation intensive pratique sur l'architecture n-tiers .NET Core, SQL Server et développement d'interfaces SPA sous React.", en: "Intensive hands-on training on n-tier .NET Core architecture, SQL Server and React SPA interface development." },
  "exp6.d2": { fr: "Gestion de projets et collaboration en équipe selon les méthodologies agiles (Scrum, Kanban).", en: "Project management and team collaboration using agile methodologies (Scrum, Kanban)." },

  // 7. IT Club FSSM
  "exp7.role": { fr: "Fondateur & Responsable Logistique / Communication", en: "Founder & Logistics / Communications Lead" },
  "exp7.company": { fr: "IT Club FSSM — Marrakech, Maroc", en: "IT Club FSSM — Marrakech, Morocco" },
  "exp7.date": { fr: "Oct. 2021 – Mars 2023 (1 an 6 mois)", en: "Oct. 2021 – Mar. 2023 (1 year 6 months)" },
  "exp7.d1": { fr: "Création et gestion d'un club informatique universitaire de premier plan au sein de la Faculté des Sciences Semlalia.", en: "Creation and management of a leading university IT club at the Faculty of Sciences Semlalia." },
  "exp7.d2": { fr: "Organisation de bootcamps technologiques, d'ateliers de programmation et gestion de la communication externe.", en: "Organization of tech bootcamps, coding workshops and external communications management." },

  // 8. BEIN ADVANCE
  "exp8.role": { fr: "Téléconseiller Clientèle", en: "Customer Service Representative" },
  "exp8.company": { fr: "BEIN ADVANCE — Marrakech, Maroc", en: "BEIN ADVANCE — Marrakech, Morocco" },
  "exp8.date": { fr: "Août 2022 – Oct. 2022 (3 mois)", en: "Aug. 2022 – Oct. 2022 (3 months)" },
  "exp8.d1": { fr: "Gestion de la relation client, qualification des besoins et fidélisation.", en: "Customer relationship management, needs qualification and retention." },
  "exp8.d2": { fr: "Atteinte d'objectifs de performance en matière de qualité de service.", en: "Achieving performance targets in service quality." },

  // 9. Youften_BTP (Assistant)
  "exp9.role": { fr: "Assistant Comptable", en: "Accounting Assistant" },
  "exp9.company": { fr: "Youften_BTP — Marrakech, Maroc", en: "Youften_BTP — Marrakech, Morocco" },
  "exp9.date": { fr: "Fév. 2021 – Nov. 2021 (10 mois)", en: "Feb. 2021 – Nov. 2021 (10 months)" },
  "exp9.d1": { fr: "Saisie d'écritures de facturation, passation des règlements, rapprochements bancaires et classement des pièces comptables.", en: "Invoice entry recording, payment processing, bank reconciliations and accounting document filing." },
  "exp9.d2": { fr: "Collaboration étroite avec le chef comptable pour l'audit trimestriel.", en: "Close collaboration with the chief accountant for quarterly audits." },

  // 10. Youften_BTP (Stage)
  "exp10.role": { fr: "Assistant Comptable (Stage)", en: "Accounting Assistant (Internship)" },
  "exp10.company": { fr: "Youften_BTP — Marrakech, Maroc", en: "Youften_BTP — Marrakech, Morocco" },
  "exp10.date": { fr: "Juin 2019 – Sept. 2019 (4 mois)", en: "Jun. 2019 – Sep. 2019 (4 months)" },
  "exp10.d1": { fr: "Saisie comptable des pièces de caisse et banques, classement administratif et archivage numérique des pièces justificatives.", en: "Accounting entry of cash and bank documents, administrative filing and digital archiving of supporting documents." },

  // === PROJECTS SECTION ===
  "proj.tag": { fr: "Portfolio", en: "Portfolio" },
  "proj.title": { fr: "Projets IA Phares", en: "Flagship AI Projects" },
  "proj.desc": {
    fr: "Une sélection de travaux axés sur le RAG multilingue, l'optimisation d'inférence en temps réel et le traitement de données.",
    en: "A selection of work focused on multilingual RAG, real-time inference optimization and data processing."
  },
  // Project 1
  "proj1.title": { fr: "Assistant IA Parlementaire", en: "Parliamentary AI Assistant" },
  "proj1.desc": {
    fr: "Moteur de recherche sémantique bilingue (Arabe/Français) et assistant conversationnel basé sur les documents officiels du Parlement marocain.",
    en: "Bilingual semantic search engine (Arabic/French) and conversational assistant based on official Moroccan Parliament documents."
  },
  "proj1.b1": { fr: "Bases vectorielles (ChromaDB/Weaviate) pour la recherche hybride.", en: "Vector databases (ChromaDB/Weaviate) for hybrid search." },
  "proj1.b2": { fr: "Inférence locale optimisée d'embeddings et de LLMs.", en: "Optimized local inference for embeddings and LLMs." },
  "proj1.b3": { fr: "Vitesse d'extraction documentaire améliorée de 55%.", en: "Document retrieval speed improved by 55%." },
  // Project 2
  "proj2.title": { fr: "Reconnaissance de Panneaux", en: "Traffic Sign Recognition" },
  "proj2.desc": {
    fr: "Système de détection et classification de panneaux routiers en temps réel pour l'aide à la conduite intelligente (ITS).",
    en: "Real-time traffic sign detection and classification system for intelligent driving assistance (ITS)."
  },
  "proj2.b1": { fr: "Modèle de Convolution (CNN) entraîné sur GPU.", en: "Convolutional Neural Network (CNN) trained on GPU." },
  "proj2.b2": { fr: "Inférence optimisée (Quantification FP16/INT8).", en: "Optimized inference (FP16/INT8 Quantization)." },
  "proj2.b3": { fr: "Précision finale de 97% avec -30% de latence.", en: "Final accuracy of 97% with -30% latency." },
  // Project 3
  "proj3.title": { fr: "Intelligent Document Processing", en: "Intelligent Document Processing" },
  "proj3.desc": {
    fr: "Plateforme modulaire de classification, d'extraction d'entités nommées et de recherche sémantique pour flux documentaires complexes.",
    en: "Modular platform for classification, named entity extraction and semantic search for complex document workflows."
  },
  "proj3.b1": { fr: "Extraction hybride combinant OCR, Regex et LLM.", en: "Hybrid extraction combining OCR, Regex and LLM." },
  "proj3.b2": { fr: "Architecture microservices scalable pilotée par API.", en: "Scalable API-driven microservices architecture." },
  "proj3.b3": { fr: "Traitement asynchrone des tâches avec files de messages.", en: "Asynchronous task processing with message queues." },

  // === SKILLS SECTION ===
  "skills.tag": { fr: "Compétences", en: "Skills" },
  "skills.title": { fr: "Matrice Technologique", en: "Technology Matrix" },
  "skills.desc": {
    fr: "Mon éventail technique, structuré depuis l'ingénierie de modèles d'IA jusqu'aux solutions de déploiement et de développement full-stack.",
    en: "My technical range, structured from AI model engineering to deployment and full-stack development solutions."
  },

  // === EDUCATION SECTION ===
  "edu.tag": { fr: "Académie", en: "Academy" },
  "edu.title": { fr: "Diplômes & Langues", en: "Degrees & Languages" },
  "edu.desc": {
    fr: "Ma formation académique de base en mathématiques, algorithmique et intelligence artificielle.",
    en: "My core academic training in mathematics, algorithms and artificial intelligence."
  },
  "edu.master.title": { fr: "Master Informatique & IA", en: "MSc Computer Science & AI" },
  "edu.master.school": { fr: "Faculté des Sciences Ibn Tofail", en: "Faculty of Sciences Ibn Tofail" },
  "edu.master.desc": {
    fr: "Formation théorique et pratique approfondie : Apprentissage automatique, calcul distribué, traitement d'images et de textes par réseaux profonds.",
    en: "In-depth theoretical and practical training: Machine learning, distributed computing, image and text processing with deep networks."
  },
  "edu.master.loc": { fr: "Kenitra, Maroc", en: "Kenitra, Morocco" },
  "edu.licence.title": { fr: "Licence Mathématiques & Informatique", en: "BSc Mathematics & Computer Science" },
  "edu.licence.school": { fr: "Faculté des Sciences Semlalia", en: "Faculty of Sciences Semlalia" },
  "edu.licence.desc": {
    fr: "Socle analytique fort : Algèbre linéaire, statistiques, probabilités, structures de données et algorithmique fondamentale.",
    en: "Strong analytical foundation: Linear algebra, statistics, probability, data structures and fundamental algorithms."
  },
  "edu.licence.loc": { fr: "Marrakech, Maroc", en: "Marrakech, Morocco" },
  "edu.lang.title": { fr: "Langues & Communication", en: "Languages & Communication" },
  "edu.lang.subtitle": { fr: "Compétences linguistiques", en: "Language proficiency" },
  "edu.lang.ar": { fr: "Arabe", en: "Arabic" },
  "edu.lang.ar.level": { fr: "Langue maternelle", en: "Native speaker" },
  "edu.lang.fr": { fr: "Français", en: "French" },
  "edu.lang.fr.level": { fr: "Courant / Bilingue professionnel", en: "Fluent / Professional bilingual" },
  "edu.lang.en": { fr: "Anglais", en: "English" },
  "edu.lang.en.level": { fr: "Niveau professionnel (B2)", en: "Professional level (B2)" },
  "edu.lang.meta1": { fr: "Communication multiculturelle", en: "Multicultural communication" },
  "edu.lang.meta2": { fr: "Bilingue NLP", en: "Bilingual NLP" },

  // === CONTACT SECTION ===
  "contact.tag": { fr: "Coordonnées", en: "Get in Touch" },
  "contact.title": { fr: "Travaillons Ensemble", en: "Let's Work Together" },
  "contact.desc": {
    fr: "Que ce soit pour intégrer vos modèles en production, concevoir un assistant RAG sur mesure ou renforcer vos équipes, discutons de vos besoins.",
    en: "Whether it's integrating your models into production, designing a custom RAG assistant or strengthening your teams, let's discuss your needs."
  },
  "contact.email.label": { fr: "Email direct", en: "Direct Email" },
  "contact.phone.label": { fr: "Téléphone / Whatsapp", en: "Phone / Whatsapp" },
  "contact.location.label": { fr: "Localisation", en: "Location" },
  "contact.location.value": { fr: "Rabat, Maroc (Disponible sur site & remote)", en: "Rabat, Morocco (Available on-site & remote)" },
  "contact.form.name": { fr: "Votre nom ou entreprise", en: "Your name or company" },
  "contact.form.name.ph": { fr: "votre nom ou entreprise", en: "your name or company" },
  "contact.form.email": { fr: "Votre adresse e-mail", en: "Your email address" },
  "contact.form.email.ph": { fr: "votre adresse e-mail", en: "your email address" },
  "contact.form.subject": { fr: "Sujet", en: "Subject" },
  "contact.form.subject.ph": { fr: "Offre de projet / Recrutement", en: "Project offer / Recruitment" },
  "contact.form.message": { fr: "Détails de votre projet ou message", en: "Project details or message" },
  "contact.form.message.ph": { fr: "Décrivez succinctement votre besoin ou votre projet...", en: "Briefly describe your need or project..." },
  "contact.form.submit": { fr: "Envoyer la requête", en: "Send Request" },

  // === FOOTER ===
  "footer.copy": {
    fr: "© 2026 El Mustapha El Mojahid. Tous droits réservés. Conçu avec rigueur algorithmique.",
    en: "© 2026 El Mustapha El Mojahid. All rights reserved. Crafted with algorithmic rigor."
  },

  // === FORM SUBMIT STATES ===
  "form.sending": { fr: "Transmission en cours...", en: "Sending..." },
  "form.success": { fr: "Message Transmis avec Succès !", en: "Message Sent Successfully!" },
  "form.reset": { fr: "Envoyer la requête", en: "Send Request" }
};


// ---- LANGUAGE SWITCHING LOGIC ----

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('lang', lang);

  // Update all elements with data-i18n attribute (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });

  // Update all elements with data-i18n-ph attribute (placeholder)
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[key] && translations[key][lang]) {
      el.placeholder = translations[key][lang];
    }
  });

  // Update the language button label
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
    langBtn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en Français');
  }

  // Re-render the current experience in the console with updated language
  if (typeof renderExperience === 'function' && typeof currentExpIndex !== 'undefined') {
    renderExperience(currentExpIndex);
  }
}

function toggleLanguage() {
  setLanguage(currentLang === 'fr' ? 'en' : 'fr');
}

// ---- INITIALIZATION ----
(function initI18n() {
  const saved = localStorage.getItem('lang');
  const browserLang = navigator.language?.substring(0, 2);
  
  // Priority: saved > browser > default (fr)
  if (saved === 'en' || saved === 'fr') {
    currentLang = saved;
  } else if (browserLang === 'en') {
    currentLang = 'en';
  } else {
    currentLang = 'fr';
  }

  // Apply after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setLanguage(currentLang));
  } else {
    setLanguage(currentLang);
  }
})();
