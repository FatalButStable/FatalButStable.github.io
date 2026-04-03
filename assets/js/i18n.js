// ============================================
// Language metadata
// ============================================
const langMeta = {
    en: { label: 'EN', name: 'English', flag: '🇬🇧' },
    hi: { label: 'हि', name: 'हिन्दी', flag: '🇮🇳' },
    es: { label: 'ES', name: 'Español', flag: '🇪🇸' },
    fr: { label: 'FR', name: 'Français', flag: '🇫🇷' },
    de: { label: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    ja: { label: 'JA', name: '日本語', flag: '🇯🇵' },
};

// ============================================
// Translations
// ============================================
const translations = {
    en: {
        'nav-about': 'About', 'nav-experience': 'Experience', 'nav-skills': 'Skills', 'nav-contact': 'Contact',
        'hero-greeting': 'Hey, I\'m',
        'hero-tagline': 'I make systems disappear.',
        'hero-description': 'Not literally. I build backend systems so reliable, you forget they exist. Currently turning clicks into bookings at <span class="highlight-link">Headout</span>. Previously shipping trading infrastructure at <span class="highlight-link">Morgan Stanley</span>.',
        'hero-btn-1': 'Say hello', 'hero-btn-2': 'The journey so far',
        'hero-status': 'Open to opportunities', 'hero-scroll': 'Scroll',
        'about-label': 'About',
        'about-title': 'Seven years of making<br><span class="gradient-text">complex things simple.</span>',
        'about-p1': 'When millions of people book a sunset cruise in Santorini or skip-the-line tickets at the Louvre, my code is what makes it feel instant. I lead engineering at <span class="highlight-link">Headout</span>, where every millisecond of latency is a booking lost &mdash; and I don\'t lose many.',
        'about-p2': 'Before that, I spent two years at <span class="highlight-link">Morgan Stanley</span> building trading systems where "move fast and break things" means something very different. That\'s where I learned to obsess over reliability, correctness, and the kind of code that lets you sleep at night.',
        'about-p3': 'B.M.S. College of Engineering, Bengaluru &mdash; <span class="highlight-link">Information Technology</span>, Class of 2019.',
        'stat-1-label': 'Years<br>Shipping Code', 'stat-2-label': 'Cities<br>Worldwide', 'stat-3-label': 'Experiences<br>Powered',
        'exp-label': 'Experience',
        'exp-title': 'The places that<br><span class="gradient-text">shaped my craft.</span>',
        'exp-headout-date': 'Oct 2021 &mdash; Present &middot; 4+ yrs', 'exp-badge-current': 'Current',
        'exp-lead-desc': 'Own the conversion funnel end-to-end. Every API call between "I want this" and "You\'re booked" runs through systems I lead. When checkout conversion ticks up 0.5%, that\'s millions in revenue.',
        'exp-senior-desc': 'Took ownership of payments and distribution &mdash; the systems where money actually moves. Built real-time inventory pipelines that made "sold out" errors drop dramatically.',
        'exp-swe-desc': 'Joined a fast-moving team and shipped from day one. Got deep into Kotlin and distributed systems, learned what "scale" actually means when real users are waiting.',
        'exp-ms-date': 'Aug 2019 &mdash; Oct 2021 &middot; 2 yrs 3 mos', 'exp-ms-role': 'Software Consultant',
        'exp-ms-1': 'Built trading APIs that handled automatic purchase and redemption &mdash; the kind where a bug doesn\'t mean a bad UX, it means real money lost',
        'exp-ms-2': 'Introduced TDD and automated deployments to a team that previously deployed manually. Bugs caught in staging went from "sometimes" to "almost always"',
        'exp-ms-3': 'Designed data pipelines that sourced, validated, and transformed financial data from multiple providers into a single clean output',
        'exp-ns-date': 'Jun 2021 &mdash; Oct 2021 &middot; 5 mos', 'exp-ns-role': 'Technical Mentor', 'exp-badge-freelance': 'Freelance',
        'exp-ns-1': 'Helped aspiring engineers crack the code &mdash; literally. Mentored on full-stack development, DSA, and the art of not panicking in interviews',
        'skills-label': 'Skills',
        'skills-title': 'What I bring<br><span class="gradient-text">to the table.</span>',
        'skill-backend': 'Backend &mdash; where I live', 'skill-infra': 'Infrastructure &mdash; what keeps it running',
        'skill-data': 'Data &mdash; the source of truth', 'skill-frontend': 'Frontend &mdash; when needed',
        'contact-label': 'Contact',
        'contact-title': 'Got an idea?<br><span class="gradient-text">I\'ve got the code.</span>',
        'contact-desc': 'Building something ambitious? Need someone who\'s done it at scale? Or just want to argue about Kotlin vs Go? I\'m in.',
        'lang-prompt': 'We noticed you browse in <strong>{lang}</strong>. Want to view this site in your language?',
        'lang-prompt-yes': 'Yes, switch', 'lang-prompt-no': 'No, keep English',
    },

    hi: {
        'nav-about': 'परिचय', 'nav-experience': 'अनुभव', 'nav-skills': 'कौशल', 'nav-contact': 'संपर्क',
        'hero-greeting': 'नमस्ते, मैं हूँ',
        'hero-tagline': 'मैं सिस्टम्स गायब कर देता हूँ।',
        'hero-description': 'सच में नहीं। मैं ऐसे बैकएंड सिस्टम बनाता हूँ जो इतने भरोसेमंद हैं कि आप भूल जाते हैं कि वो मौजूद हैं। फ़िलहाल <span class="highlight-link">Headout</span> में क्लिक्स को बुकिंग्स में बदल रहा हूँ। पहले <span class="highlight-link">Morgan Stanley</span> में ट्रेडिंग इंफ्रा बना रहा था।',
        'hero-btn-1': 'नमस्ते कहें', 'hero-btn-2': 'अब तक का सफ़र',
        'hero-status': 'नए अवसरों के लिए तैयार', 'hero-scroll': 'स्क्रॉल करें',
        'about-label': 'परिचय',
        'about-title': 'सात साल से मुश्किल चीज़ों को<br><span class="gradient-text">आसान बना रहा हूँ।</span>',
        'about-p1': 'जब लाखों लोग Santorini में sunset cruise बुक करते हैं या Louvre में skip-the-line टिकट लेते हैं, तो मेरा कोड ही है जो इसे instant महसूस कराता है। मैं <span class="highlight-link">Headout</span> में इंजीनियरिंग लीड करता हूँ, जहाँ हर मिलीसेकंड की latency एक बुकिंग का नुकसान है &mdash; और मैं ज़्यादा नहीं खोता।',
        'about-p2': 'इससे पहले, मैंने <span class="highlight-link">Morgan Stanley</span> में दो साल ट्रेडिंग सिस्टम बनाए जहाँ "move fast and break things" का मतलब बहुत अलग होता है। वहीं मैंने reliability, correctness, और उस तरह का कोड लिखना सीखा जो रात को चैन से सोने देता है।',
        'about-p3': 'B.M.S. College of Engineering, बेंगलुरु &mdash; <span class="highlight-link">Information Technology</span>, बैच 2019।',
        'stat-1-label': 'साल<br>कोड लिखते हुए', 'stat-2-label': 'शहर<br>दुनियाभर में', 'stat-3-label': 'अनुभव<br>पावर्ड',
        'exp-label': 'अनुभव',
        'exp-title': 'वो जगहें जिन्होंने<br><span class="gradient-text">मेरा हुनर तराशा।</span>',
        'exp-headout-date': 'अक्टूबर 2021 &mdash; वर्तमान &middot; 4+ साल', 'exp-badge-current': 'वर्तमान',
        'exp-lead-desc': 'पूरे conversion funnel की ज़िम्मेदारी। "मुझे ये चाहिए" से "आपकी बुकिंग हो गई" तक हर API call मेरे सिस्टम से गुज़रती है। जब checkout conversion 0.5% बढ़ता है, तो वो करोड़ों का revenue होता है।',
        'exp-senior-desc': 'Payments और distribution की ownership ली &mdash; वो सिस्टम जहाँ पैसा असल में चलता है। Real-time inventory pipelines बनाईं जिससे "sold out" errors काफ़ी कम हो गईं।',
        'exp-swe-desc': 'एक तेज़ टीम में शामिल हुआ और पहले दिन से शिप किया। Kotlin और distributed systems में गहराई से उतरा, सीखा कि "scale" का असल मतलब क्या होता है जब real users इंतज़ार कर रहे हों।',
        'exp-ms-date': 'अगस्त 2019 &mdash; अक्टूबर 2021 &middot; 2 साल 3 महीने', 'exp-ms-role': 'सॉफ़्टवेयर कंसल्टेंट',
        'exp-ms-1': 'ट्रेडिंग APIs बनाए जो automatic purchase और redemption handle करते थे &mdash; जहाँ bug का मतलब खराब UX नहीं, बल्कि असली पैसों का नुकसान होता है',
        'exp-ms-2': 'TDD और automated deployments को एक ऐसी टीम में introduce किया जो पहले manually deploy करती थी। Staging में bugs पकड़ना "कभी-कभी" से "लगभग हमेशा" हो गया',
        'exp-ms-3': 'Data pipelines डिज़ाइन कीं जो multiple providers से financial data source, validate और transform करके एक clean output देती थीं',
        'exp-ns-date': 'जून 2021 &mdash; अक्टूबर 2021 &middot; 5 महीने', 'exp-ns-role': 'टेक्निकल मेंटर', 'exp-badge-freelance': 'फ्रीलांस',
        'exp-ns-1': 'नए इंजीनियर्स को कोड क्रैक करने में मदद की &mdash; सच में। Full-stack development, DSA, और इंटरव्यू में घबराने की कला पर मेंटरशिप दी',
        'skills-label': 'कौशल',
        'skills-title': 'मैं क्या लेकर<br><span class="gradient-text">आता हूँ।</span>',
        'skill-backend': 'बैकएंड &mdash; यहीं रहता हूँ', 'skill-infra': 'इंफ्रा &mdash; जो सब चालू रखता है',
        'skill-data': 'डेटा &mdash; सच्चाई का स्रोत', 'skill-frontend': 'फ़्रंटएंड &mdash; ज़रूरत पड़े तो',
        'contact-label': 'संपर्क',
        'contact-title': 'कोई आइडिया है?<br><span class="gradient-text">कोड मेरे पास है।</span>',
        'contact-desc': 'कुछ बड़ा बना रहे हैं? किसी ऐसे की ज़रूरत है जिसने scale पर काम किया हो? या बस Kotlin vs Go पर बहस करनी है? मैं तैयार हूँ।',
    },

    es: {
        'nav-about': 'Sobre mí', 'nav-experience': 'Experiencia', 'nav-skills': 'Habilidades', 'nav-contact': 'Contacto',
        'hero-greeting': 'Hola, soy',
        'hero-tagline': 'Hago que los sistemas desaparezcan.',
        'hero-description': 'No literalmente. Construyo sistemas backend tan confiables que olvidas que existen. Actualmente convirtiendo clics en reservas en <span class="highlight-link">Headout</span>. Antes construyendo infraestructura de trading en <span class="highlight-link">Morgan Stanley</span>.',
        'hero-btn-1': 'Saluda', 'hero-btn-2': 'Mi trayectoria',
        'hero-status': 'Abierto a oportunidades', 'hero-scroll': 'Desplázate',
        'about-label': 'Sobre mí',
        'about-title': 'Siete años haciendo<br><span class="gradient-text">lo complejo, simple.</span>',
        'about-p1': 'Cuando millones de personas reservan un crucero al atardecer en Santorini o entradas sin cola al Louvre, mi código es lo que hace que se sienta instantáneo. Lidero ingeniería en <span class="highlight-link">Headout</span>, donde cada milisegundo de latencia es una reserva perdida &mdash; y no pierdo muchas.',
        'about-p2': 'Antes de eso, pasé dos años en <span class="highlight-link">Morgan Stanley</span> construyendo sistemas de trading donde "moverse rápido y romper cosas" significa algo muy diferente. Ahí aprendí a obsesionarme con la fiabilidad, la corrección y el tipo de código que te deja dormir tranquilo.',
        'about-p3': 'B.M.S. College of Engineering, Bengaluru &mdash; <span class="highlight-link">Tecnología de la Información</span>, Promoción 2019.',
        'stat-1-label': 'Años<br>Escribiendo Código', 'stat-2-label': 'Ciudades<br>Mundiales', 'stat-3-label': 'Experiencias<br>Impulsadas',
        'exp-label': 'Experiencia',
        'exp-title': 'Los lugares que<br><span class="gradient-text">forjaron mi oficio.</span>',
        'exp-headout-date': 'Oct 2021 &mdash; Presente &middot; 4+ años', 'exp-badge-current': 'Actual',
        'exp-lead-desc': 'Responsable del embudo de conversión de principio a fin. Cada llamada API entre "lo quiero" y "reservado" pasa por sistemas que lidero. Cuando la conversión sube un 0.5%, eso son millones en ingresos.',
        'exp-senior-desc': 'Asumí la propiedad de pagos y distribución &mdash; los sistemas donde el dinero realmente se mueve. Construí pipelines de inventario en tiempo real que redujeron drásticamente los errores de "agotado".',
        'exp-swe-desc': 'Me uní a un equipo ágil y empecé a entregar desde el primer día. Me sumergí en Kotlin y sistemas distribuidos, aprendí lo que "escala" realmente significa cuando hay usuarios reales esperando.',
        'exp-ms-date': 'Ago 2019 &mdash; Oct 2021 &middot; 2 años 3 meses', 'exp-ms-role': 'Consultor de Software',
        'exp-ms-1': 'Construí APIs de trading con compra y redención automáticas &mdash; donde un bug no significa mala UX, sino dinero real perdido',
        'exp-ms-2': 'Introduje TDD y despliegues automatizados en un equipo que antes desplegaba manualmente. Los bugs detectados en staging pasaron de "a veces" a "casi siempre"',
        'exp-ms-3': 'Diseñé pipelines de datos que obtenían, validaban y transformaban datos financieros de múltiples proveedores en una salida limpia y uniforme',
        'exp-ns-date': 'Jun 2021 &mdash; Oct 2021 &middot; 5 meses', 'exp-ns-role': 'Mentor Técnico', 'exp-badge-freelance': 'Freelance',
        'exp-ns-1': 'Ayudé a ingenieros aspirantes a descifrar el código &mdash; literalmente. Mentoría en desarrollo full-stack, estructuras de datos y el arte de no entrar en pánico en entrevistas',
        'skills-label': 'Habilidades',
        'skills-title': 'Lo que traigo<br><span class="gradient-text">a la mesa.</span>',
        'skill-backend': 'Backend &mdash; donde vivo', 'skill-infra': 'Infraestructura &mdash; lo que mantiene todo funcionando',
        'skill-data': 'Datos &mdash; la fuente de verdad', 'skill-frontend': 'Frontend &mdash; cuando hace falta',
        'contact-label': 'Contacto',
        'contact-title': '¿Tienes una idea?<br><span class="gradient-text">Yo tengo el código.</span>',
        'contact-desc': '¿Construyendo algo ambicioso? ¿Necesitas a alguien que lo haya hecho a escala? ¿O solo quieres debatir Kotlin vs Go? Cuenta conmigo.',
    },

    fr: {
        'nav-about': 'À propos', 'nav-experience': 'Expérience', 'nav-skills': 'Compétences', 'nav-contact': 'Contact',
        'hero-greeting': 'Salut, je suis',
        'hero-tagline': 'Je fais disparaître les systèmes.',
        'hero-description': 'Pas littéralement. Je construis des systèmes backend si fiables qu\'on oublie qu\'ils existent. Actuellement, je transforme des clics en réservations chez <span class="highlight-link">Headout</span>. Avant, je construisais l\'infrastructure de trading chez <span class="highlight-link">Morgan Stanley</span>.',
        'hero-btn-1': 'Dire bonjour', 'hero-btn-2': 'Mon parcours',
        'hero-status': 'Ouvert aux opportunités', 'hero-scroll': 'Défiler',
        'about-label': 'À propos',
        'about-title': 'Sept ans à rendre<br><span class="gradient-text">le complexe simple.</span>',
        'about-p1': 'Quand des millions de personnes réservent une croisière au coucher du soleil à Santorin ou des billets coupe-file au Louvre, c\'est mon code qui rend tout ça instantané. Je dirige l\'ingénierie chez <span class="highlight-link">Headout</span>, où chaque milliseconde de latence est une réservation perdue &mdash; et j\'en perds peu.',
        'about-p2': 'Avant ça, j\'ai passé deux ans chez <span class="highlight-link">Morgan Stanley</span> à construire des systèmes de trading où "aller vite et casser des choses" a un tout autre sens. C\'est là que j\'ai appris à être obsédé par la fiabilité, l\'exactitude, et le genre de code qui vous laisse dormir tranquille.',
        'about-p3': 'B.M.S. College of Engineering, Bengaluru &mdash; <span class="highlight-link">Technologies de l\'Information</span>, Promotion 2019.',
        'stat-1-label': 'Ans<br>de Code', 'stat-2-label': 'Villes<br>dans le Monde', 'stat-3-label': 'Expériences<br>Propulsées',
        'exp-label': 'Expérience',
        'exp-title': 'Les endroits qui<br><span class="gradient-text">ont forgé mon métier.</span>',
        'exp-headout-date': 'Oct 2021 &mdash; Présent &middot; 4+ ans', 'exp-badge-current': 'Actuel',
        'exp-lead-desc': 'Responsable du tunnel de conversion de bout en bout. Chaque appel API entre "je veux ça" et "c\'est réservé" passe par les systèmes que je dirige. Quand la conversion augmente de 0.5%, ce sont des millions de revenus.',
        'exp-senior-desc': 'Pris en charge les paiements et la distribution &mdash; les systèmes où l\'argent circule vraiment. Construit des pipelines d\'inventaire en temps réel qui ont drastiquement réduit les erreurs "complet".',
        'exp-swe-desc': 'Rejoint une équipe rapide et livré dès le premier jour. Plongé dans Kotlin et les systèmes distribués, appris ce que "scale" signifie vraiment quand de vrais utilisateurs attendent.',
        'exp-ms-date': 'Août 2019 &mdash; Oct 2021 &middot; 2 ans 3 mois', 'exp-ms-role': 'Consultant Logiciel',
        'exp-ms-1': 'Construit des APIs de trading avec achat et remboursement automatiques &mdash; où un bug ne signifie pas une mauvaise UX, mais de l\'argent réel perdu',
        'exp-ms-2': 'Introduit le TDD et les déploiements automatisés dans une équipe qui déployait manuellement. Les bugs détectés en staging sont passés de "parfois" à "presque toujours"',
        'exp-ms-3': 'Conçu des pipelines de données qui collectaient, validaient et transformaient des données financières de multiples fournisseurs en une sortie propre et uniforme',
        'exp-ns-date': 'Juin 2021 &mdash; Oct 2021 &middot; 5 mois', 'exp-ns-role': 'Mentor Technique', 'exp-badge-freelance': 'Freelance',
        'exp-ns-1': 'Aidé de futurs ingénieurs à craquer le code &mdash; littéralement. Mentorat en développement full-stack, structures de données, et l\'art de ne pas paniquer en entretien',
        'skills-label': 'Compétences',
        'skills-title': 'Ce que j\'apporte<br><span class="gradient-text">à la table.</span>',
        'skill-backend': 'Backend &mdash; mon terrain', 'skill-infra': 'Infrastructure &mdash; ce qui fait tourner',
        'skill-data': 'Données &mdash; la source de vérité', 'skill-frontend': 'Frontend &mdash; quand il faut',
        'contact-label': 'Contact',
        'contact-title': 'Une idée ?<br><span class="gradient-text">J\'ai le code.</span>',
        'contact-desc': 'Vous construisez quelque chose d\'ambitieux ? Besoin de quelqu\'un qui l\'a fait à grande échelle ? Ou juste envie de débattre Kotlin vs Go ? Je suis partant.',
    },

    de: {
        'nav-about': 'Über mich', 'nav-experience': 'Erfahrung', 'nav-skills': 'Skills', 'nav-contact': 'Kontakt',
        'hero-greeting': 'Hey, ich bin',
        'hero-tagline': 'Ich lasse Systeme verschwinden.',
        'hero-description': 'Nicht wörtlich. Ich baue Backend-Systeme, die so zuverlässig sind, dass man vergisst, dass sie existieren. Derzeit verwandle ich Klicks in Buchungen bei <span class="highlight-link">Headout</span>. Zuvor Trading-Infrastruktur bei <span class="highlight-link">Morgan Stanley</span>.',
        'hero-btn-1': 'Sag Hallo', 'hero-btn-2': 'Mein Werdegang',
        'hero-status': 'Offen für Möglichkeiten', 'hero-scroll': 'Scrollen',
        'about-label': 'Über mich',
        'about-title': 'Sieben Jahre, in denen ich<br><span class="gradient-text">Komplexes einfach mache.</span>',
        'about-p1': 'Wenn Millionen Menschen eine Sunset-Kreuzfahrt in Santorini oder Skip-the-Line-Tickets für den Louvre buchen, sorgt mein Code dafür, dass es sich sofort anfühlt. Ich leite das Engineering bei <span class="highlight-link">Headout</span>, wo jede Millisekunde Latenz eine verlorene Buchung bedeutet &mdash; und ich verliere nicht viele.',
        'about-p2': 'Davor verbrachte ich zwei Jahre bei <span class="highlight-link">Morgan Stanley</span> und baute Trading-Systeme, wo "schnell handeln und Dinge kaputt machen" eine ganz andere Bedeutung hat. Dort lernte ich, mich auf Zuverlässigkeit, Korrektheit und Code zu fokussieren, der einen ruhig schlafen lässt.',
        'about-p3': 'B.M.S. College of Engineering, Bengaluru &mdash; <span class="highlight-link">Informationstechnologie</span>, Jahrgang 2019.',
        'stat-1-label': 'Jahre<br>Code Shipping', 'stat-2-label': 'Städte<br>Weltweit', 'stat-3-label': 'Erlebnisse<br>Angetrieben',
        'exp-label': 'Erfahrung',
        'exp-title': 'Die Orte, die<br><span class="gradient-text">mein Handwerk formten.</span>',
        'exp-headout-date': 'Okt 2021 &mdash; Heute &middot; 4+ Jahre', 'exp-badge-current': 'Aktuell',
        'exp-lead-desc': 'Verantwortlich für den gesamten Conversion-Funnel. Jeder API-Aufruf zwischen "Das will ich" und "Gebucht" läuft durch Systeme, die ich leite. Wenn die Checkout-Conversion um 0,5% steigt, sind das Millionen an Umsatz.',
        'exp-senior-desc': 'Übernahm Payments und Distribution &mdash; die Systeme, wo Geld tatsächlich fließt. Echtzeit-Inventar-Pipelines gebaut, die "Ausverkauft"-Fehler drastisch reduzierten.',
        'exp-swe-desc': 'Kam in ein schnelles Team und lieferte ab Tag eins. Tauchte tief in Kotlin und verteilte Systeme ein, lernte, was "Skalierung" wirklich bedeutet, wenn echte Nutzer warten.',
        'exp-ms-date': 'Aug 2019 &mdash; Okt 2021 &middot; 2 J. 3 Mon.', 'exp-ms-role': 'Software-Berater',
        'exp-ms-1': 'Trading-APIs gebaut mit automatischem Kauf und Rücknahme &mdash; wo ein Bug nicht schlechte UX bedeutet, sondern echtes Geld verloren geht',
        'exp-ms-2': 'TDD und automatisierte Deployments in ein Team eingeführt, das vorher manuell deployed hat. In Staging gefundene Bugs gingen von "manchmal" zu "fast immer"',
        'exp-ms-3': 'Daten-Pipelines entworfen, die Finanzdaten von mehreren Anbietern beschafften, validierten und in einen sauberen, einheitlichen Output transformierten',
        'exp-ns-date': 'Jun 2021 &mdash; Okt 2021 &middot; 5 Mon.', 'exp-ns-role': 'Technischer Mentor', 'exp-badge-freelance': 'Freelance',
        'exp-ns-1': 'Angehenden Ingenieuren geholfen, den Code zu knacken &mdash; buchstäblich. Mentoring in Full-Stack-Entwicklung, DSA und der Kunst, in Interviews nicht in Panik zu geraten',
        'skills-label': 'Skills',
        'skills-title': 'Was ich<br><span class="gradient-text">mitbringe.</span>',
        'skill-backend': 'Backend &mdash; mein Zuhause', 'skill-infra': 'Infrastruktur &mdash; hält alles am Laufen',
        'skill-data': 'Daten &mdash; die Quelle der Wahrheit', 'skill-frontend': 'Frontend &mdash; wenn nötig',
        'contact-label': 'Kontakt',
        'contact-title': 'Eine Idee?<br><span class="gradient-text">Ich hab den Code.</span>',
        'contact-desc': 'Baust du etwas Ambitioniertes? Brauchst jemanden, der es in großem Maßstab gemacht hat? Oder willst einfach über Kotlin vs Go streiten? Bin dabei.',
    },

    ja: {
        'nav-about': '自己紹介', 'nav-experience': '経歴', 'nav-skills': 'スキル', 'nav-contact': '連絡先',
        'hero-greeting': 'こんにちは、',
        'hero-tagline': 'システムを消す人です。',
        'hero-description': '比喩です。私は存在を忘れるほど信頼性の高いバックエンドシステムを構築しています。現在は<span class="highlight-link">Headout</span>でクリックを予約に変えています。以前は<span class="highlight-link">Morgan Stanley</span>でトレーディングインフラを構築していました。',
        'hero-btn-1': 'メッセージを送る', 'hero-btn-2': 'これまでの道のり',
        'hero-status': '新しい機会を歓迎', 'hero-scroll': 'スクロール',
        'about-label': '自己紹介',
        'about-title': '7年間、複雑なものを<br><span class="gradient-text">シンプルにしてきました。</span>',
        'about-p1': '何百万人もの人がサントリーニでサンセットクルーズを予約したり、ルーブル美術館の優先入場チケットを取る時、それを瞬時に感じさせるのは私のコードです。<span class="highlight-link">Headout</span>でエンジニアリングをリードしています。レイテンシの1ミリ秒は予約の損失 &mdash; そして私はほとんど失いません。',
        'about-p2': 'その前は<span class="highlight-link">Morgan Stanley</span>で2年間トレーディングシステムを構築しました。「素早く動いて壊す」が全く違う意味を持つ世界。そこで信頼性、正確性、そして夜ぐっすり眠れるコードへの執着を学びました。',
        'about-p3': 'B.M.S. College of Engineering, ベンガルール &mdash; <span class="highlight-link">情報技術</span>、2019年卒業。',
        'stat-1-label': '年間<br>コード出荷', 'stat-2-label': '都市<br>世界中で', 'stat-3-label': '体験<br>を支える',
        'exp-label': '経歴',
        'exp-title': '私の技術を<br><span class="gradient-text">形作った場所。</span>',
        'exp-headout-date': '2021年10月 &mdash; 現在 &middot; 4年以上', 'exp-badge-current': '現職',
        'exp-lead-desc': 'コンバージョンファネル全体を担当。「これが欲しい」から「予約完了」までの全てのAPI呼び出しが私のシステムを通ります。チェックアウトのコンバージョンが0.5%上がると、それは数百万の収益です。',
        'exp-senior-desc': '決済と配信を所有 &mdash; お金が実際に動くシステム。リアルタイム在庫パイプラインを構築し、「売り切れ」エラーを大幅に削減しました。',
        'exp-swe-desc': '素早く動くチームに参加し、初日から出荷。Kotlinと分散システムに深く入り込み、実際のユーザーが待っている時の「スケール」の本当の意味を学びました。',
        'exp-ms-date': '2019年8月 &mdash; 2021年10月 &middot; 2年3ヶ月', 'exp-ms-role': 'ソフトウェアコンサルタント',
        'exp-ms-1': '自動売買と償還を処理するトレーディングAPIを構築 &mdash; バグが悪いUXではなく、実際のお金の損失を意味する世界',
        'exp-ms-2': 'TDDと自動デプロイを手動デプロイしていたチームに導入。ステージングでのバグ検出が「時々」から「ほぼ常に」に',
        'exp-ms-3': '複数のプロバイダーから金融データを取得、検証、変換し、クリーンな出力にするデータパイプラインを設計',
        'exp-ns-date': '2021年6月 &mdash; 2021年10月 &middot; 5ヶ月', 'exp-ns-role': 'テクニカルメンター', 'exp-badge-freelance': 'フリーランス',
        'exp-ns-1': '志望エンジニアのコード解読を支援 &mdash; 文字通り。フルスタック開発、DSA、面接でパニックにならない技術のメンタリング',
        'skills-label': 'スキル',
        'skills-title': '私が持ち込む<br><span class="gradient-text">もの。</span>',
        'skill-backend': 'バックエンド &mdash; 私の住処', 'skill-infra': 'インフラ &mdash; 全てを動かすもの',
        'skill-data': 'データ &mdash; 真実の源', 'skill-frontend': 'フロントエンド &mdash; 必要な時に',
        'contact-label': '連絡先',
        'contact-title': 'アイデアがある？<br><span class="gradient-text">コードは任せて。</span>',
        'contact-desc': '野心的なものを作っていますか？スケールで経験のある人が必要？それともKotlin vs Goについて議論したい？いつでもどうぞ。',
    },
};

// ============================================
// Selector map
// ============================================
const i18nMap = [
    { sel: '.nav-links a[href="#about"]', key: 'nav-about' },
    { sel: '.nav-links a[href="#experience"]', key: 'nav-experience' },
    { sel: '.nav-links a[href="#skills"]', key: 'nav-skills' },
    { sel: '.nav-links a[href="#contact"]', key: 'nav-contact' },
    { sel: '.hero-greeting .reveal-inner', key: 'hero-greeting' },
    { sel: '.hero-tagline .reveal-inner', key: 'hero-tagline' },
    { sel: '.hero-description', key: 'hero-description' },
    { sel: '.hero-actions .btn-primary span', key: 'hero-btn-1' },
    { sel: '.hero-actions .btn-ghost span', key: 'hero-btn-2' },
    { sel: '.image-status span:last-child', key: 'hero-status' },
    { sel: '.hero-scroll > span', key: 'hero-scroll' },
    { sel: '#about .section-label span:last-child', key: 'about-label' },
    { sel: '#about .section-title', key: 'about-title' },
    { sel: '#about .about-text p:nth-child(2)', key: 'about-p1' },
    { sel: '#about .about-text p:nth-child(3)', key: 'about-p2' },
    { sel: '#about .about-text p:nth-child(4)', key: 'about-p3' },
    { sel: '.stat-card:nth-child(1) .stat-label', key: 'stat-1-label' },
    { sel: '.stat-card:nth-child(2) .stat-label', key: 'stat-2-label' },
    { sel: '.stat-card:nth-child(3) .stat-label', key: 'stat-3-label' },
    { sel: '#experience .section-label span:last-child', key: 'exp-label' },
    { sel: '#experience .section-title', key: 'exp-title' },
    { sel: '.exp-card:nth-child(1) .exp-date', key: 'exp-headout-date' },
    { sel: '.exp-card:nth-child(1) .exp-badge', key: 'exp-badge-current' },
    { sel: '.exp-sub-role:nth-child(1) .exp-sub-desc', key: 'exp-lead-desc' },
    { sel: '.exp-sub-role:nth-child(2) .exp-sub-desc', key: 'exp-senior-desc' },
    { sel: '.exp-sub-role:nth-child(3) .exp-sub-desc', key: 'exp-swe-desc' },
    { sel: '.exp-card:nth-child(2) .exp-date', key: 'exp-ms-date' },
    { sel: '.exp-card:nth-child(2) .exp-role', key: 'exp-ms-role' },
    { sel: '.exp-card:nth-child(2) .exp-details li:nth-child(1)', key: 'exp-ms-1' },
    { sel: '.exp-card:nth-child(2) .exp-details li:nth-child(2)', key: 'exp-ms-2' },
    { sel: '.exp-card:nth-child(2) .exp-details li:nth-child(3)', key: 'exp-ms-3' },
    { sel: '.exp-card:nth-child(3) .exp-date', key: 'exp-ns-date' },
    { sel: '.exp-card:nth-child(3) .exp-role', key: 'exp-ns-role' },
    { sel: '.exp-card:nth-child(3) .exp-badge', key: 'exp-badge-freelance' },
    { sel: '.exp-card:nth-child(3) .exp-details li', key: 'exp-ns-1' },
    { sel: '#skills .section-label span:last-child', key: 'skills-label' },
    { sel: '#skills .section-title', key: 'skills-title' },
    { sel: '.skill-block:nth-child(1) h3', key: 'skill-backend' },
    { sel: '.skill-block:nth-child(2) h3', key: 'skill-infra' },
    { sel: '.skill-block:nth-child(3) h3', key: 'skill-data' },
    { sel: '.skill-block:nth-child(4) h3', key: 'skill-frontend' },
    { sel: '#contact .section-label span:last-child', key: 'contact-label' },
    { sel: '.contact-title', key: 'contact-title' },
    { sel: '.contact-description', key: 'contact-desc' },
];

// ============================================
// Engine
// ============================================
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang];
    if (!t) return;

    i18nMap.forEach(({ sel, key }) => {
        const el = document.querySelector(sel);
        if (el && t[key]) el.innerHTML = t[key];
    });

    const label = document.getElementById('lang-label');
    if (label) label.textContent = langMeta[lang]?.label || lang.toUpperCase();
    document.documentElement.lang = lang;

    // Close dropdown if open
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.classList.remove('open');
}

// ============================================
// Language prompt banner
// ============================================
function showLanguagePrompt(detectedLang) {
    const meta = langMeta[detectedLang];
    if (!meta) return;

    const banner = document.createElement('div');
    banner.className = 'lang-banner';
    banner.innerHTML = `
        <div class="lang-banner-content">
            <span class="lang-banner-flag">${meta.flag}</span>
            <span class="lang-banner-text">
                We noticed you browse in <strong>${meta.name}</strong>. View in your language?
            </span>
            <button class="lang-banner-yes" id="lang-banner-yes">${meta.flag} Switch to ${meta.name}</button>
            <button class="lang-banner-no" id="lang-banner-no">Keep English</button>
        </div>
    `;
    document.body.appendChild(banner);

    // Animate in
    requestAnimationFrame(() => banner.classList.add('visible'));

    document.getElementById('lang-banner-yes').addEventListener('click', () => {
        setLanguage(detectedLang);
        localStorage.setItem('lang-prompted', 'true');
        banner.classList.remove('visible');
        setTimeout(() => banner.remove(), 400);
    });

    document.getElementById('lang-banner-no').addEventListener('click', () => {
        localStorage.setItem('lang-prompted', 'true');
        banner.classList.remove('visible');
        setTimeout(() => banner.remove(), 400);
    });
}

// ============================================
// Init
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Build dropdown
    const switchBtn = document.getElementById('lang-switch');
    if (switchBtn) {
        const dropdown = document.createElement('div');
        dropdown.className = 'lang-dropdown';
        dropdown.id = 'lang-dropdown';

        Object.entries(langMeta).forEach(([code, meta]) => {
            const opt = document.createElement('button');
            opt.className = 'lang-option';
            opt.innerHTML = `<span>${meta.flag}</span><span>${meta.name}</span>`;
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                setLanguage(code);
            });
            dropdown.appendChild(opt);
        });

        switchBtn.style.position = 'relative';
        switchBtn.appendChild(dropdown);

        switchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });

        document.addEventListener('click', () => dropdown.classList.remove('open'));
    }

    // Apply saved language
    if (currentLang !== 'en') {
        setTimeout(() => setLanguage(currentLang), 1500);
    }

    // Detect browser language & prompt
    const alreadyPrompted = localStorage.getItem('lang-prompted');
    const savedLang = localStorage.getItem('lang');

    if (!alreadyPrompted && !savedLang) {
        const browserLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0];
        if (browserLang !== 'en' && translations[browserLang]) {
            setTimeout(() => showLanguagePrompt(browserLang), 2500);
        }
    }
});
