import { site } from "./site.ts";

export type Lang = "en" | "hi";

export type Copy = Record<Lang, string>;

const en = {
  skip: "Skip to content",
  nav: {
    about: "About",
    services: "Services",
    work: "Work",
    faq: "FAQ",
    contact: "Contact",
    menu: "Open menu",
    close: "Close menu",
    primary: "Primary",
  },
  lang: {
    label: "Language",
    en: "English",
    hi: "Hindi",
    switchToEn: "Switch to English",
    switchToHi: "Switch to Hindi",
  },
  theme: {
    label: "Theme",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  cta: {
    services: "Explore services",
    contact: "Contact me",
    quote: "Request a quote",
    viewWork: "View work",
    openProject: "Open live site",
    newTab: "opens in a new tab",
    allServices: "All services",
    readCase: "Read notes",
  },
  hero: {
    kicker: "ODIN / odincalm0",
    title: "Web and Android developer",
    lede: "I build responsive websites, basic Android app screens, and student notes, slides, and formatted documents. Scope, price, and timing are agreed in writing before work starts.",
    available: "Available for enquiries",
    person: "Nitin Kumar",
    points: [
      "Responsive websites and landing pages",
      "Basic Android app UI",
      "Notes, slides, and document formatting",
    ],
  },
  home: {
    workEyebrow: "Selected work",
    workTitle: "Public websites",
    workLede: "Four live links. Descriptions match what is on those pages. Client status is stated only where the page itself says it.",
    servicesEyebrow: "Services",
    servicesTitle: "What you can ask for",
    servicesLede: "Websites, basic Android UI, and student or business documents. There is no published price list yet — every job is quoted.",
    processEyebrow: "Process",
    processTitle: "How a job starts",
    closingTitle: "Tell me what you need",
    closingLede: "Send a WhatsApp message, an email, or the enquiry form. The form prepares a message. It is not sent until you confirm it in WhatsApp or your email app.",
    closingNote: "India: quotes can be in INR. Outside India: a separate quote, not an automatic currency conversion.",
  },
  process: [
    {
      title: "You send the brief",
      body: "Service, what the finished work should do, files you already have, a deadline if you have one, and a budget range if you know it.",
    },
    {
      title: "I reply in writing",
      body: "Scope, price, and timing. Indian quotes can be in INR. International quotes name the currency we will use. Nothing is auto-converted.",
    },
    {
      title: "Work starts after you confirm",
      body: "I start when you accept the written scope. Payment terms are part of that note, because they are not fixed on this site.",
    },
    {
      title: "You review the draft",
      body: "The earlier public terms included one revision round unless a quote says otherwise. Extra work is priced before it starts.",
    },
  ],
  about: {
    eyebrow: "About",
    title: "What I actually do",
    lede: "Nitin Kumar works publicly as ODIN / odincalm0. This page sticks to the work that has been described. It does not add years of experience, client counts, or awards.",
    photoAlt: "Mirror photo of Nitin Kumar, who publishes work as ODIN / odincalm0.",
    photoCap: "Photo used on the previous portfolio. It is a casual mirror photo, not a studio portrait.",
    blocks: [
      {
        title: "Websites",
        body: "Responsive business sites and landing pages. Recent public examples are linked on the work page, including Nikkblend, MKS Hair Salon, and a product site named Odin.",
      },
      {
        title: "Basic Android",
        body: "Basic Android application screens and UI implementation. The previous site described this as AI-assisted. This is not a claim of advanced Android work, Play Store publishing, or large app backends.",
      },
      {
        title: "Student documents",
        body: "Notes and study materials from sources you provide, PowerPoint presentations, and PDF or Word formatting. Custom document requests are scoped one by one.",
      },
      {
        title: "How tools are used",
        body: "I use practical tools, including AI assistance where it helps drafting or layout. You still get a written scope. I do not promise grades, rankings, or business results.",
      },
    ],
  },
  servicesPage: {
    eyebrow: "Services",
    title: "Six ways to start",
    lede: "Each service lists what you receive, who it is for, what you need to send, and how the quote works. Prices are not published yet.",
  },
  pricing: {
    title: "Pricing",
    body: "There is no approved public price list yet. Ask for a quote. Clients in India can request the quote in INR. International clients receive a separate quote in a currency we name in writing. This site does not convert currencies or show a live exchange rate.",
    pending: "Figures stay blank until the owner approves them.",
  },
  serviceUi: {
    deliverables: "What you receive",
    customers: "Who it is for",
    inputs: "What to send",
    process: "How it runs",
    quote: "How to request a quote",
    quoteBody: "Use the contact form with this service selected, or open WhatsApp. A quote is a written reply after I see the brief. It is not an automatic price.",
    related: "Related work",
    noSamples: "No sample file is published for this service. Ask for a relevant example when you enquire.",
  },
  workPage: {
    eyebrow: "Work",
    title: "Live projects",
    lede: "Filters only group the four public links. They are not industries I claim to specialise in beyond these sites.",
    empty: "Nothing in this filter.",
  },
  caseUi: {
    status: "How to read this",
    visible: "What the public site shows",
    visit: "Open the live site",
    more: "Other projects",
  },
  contact: {
    eyebrow: "Contact",
    title: "Four ways to reach me",
    lede: "WhatsApp, email, Instagram, and LinkedIn. The form below prepares the message. Opening WhatsApp or email does not mean the message was sent.",
    methods: "Direct links",
    formTitle: "Project enquiry",
    formLede: "Required fields are marked. Nothing is stored on a server by this form. Email relay is not connected, so delivery happens only if you send the WhatsApp message or the email draft yourself.",
    whatsapp: "WhatsApp",
    email: "Email",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    prepare: "Prepare message",
    preview: "Message preview",
    openWa: "Open WhatsApp",
    openMail: "Open email draft",
    copy: "Copy message",
    copied: "Copied. Paste it into the app you opened.",
    copyFail: "Could not copy automatically. Select the message and copy it.",
    waExplain: "WhatsApp should open with this text. It is not sent until you tap Send there.",
    mailExplain: "Your email app should open a draft to odincalm@proton.me. It is not sent until you send that draft.",
    socialExplain: "Instagram and LinkedIn do not accept a prefilled message from this site. Copy the text, then paste it after the profile opens.",
    openProfile: "Open profile",
    retry: "Edit and try again",
    spam: "This enquiry could not be prepared. Wait a moment and try again.",
    long: "This message is long. If the app cuts it off, send the rest in a second message or use email.",
    budgetHint: "Your range, not a published fee.",
    required: "required",
    optional: "optional",
    honeypot: "Company website",
  },
  fields: {
    name: "Name",
    email: "Email",
    country: "Country or region",
    service: "Service",
    contact: "Preferred contact",
    budget: "Approximate budget",
    requirements: "Project requirements",
    deadline: "Target deadline",
    choose: "Select",
  },
  errors: {
    required: "Enter this field.",
    email: "Enter a valid email address.",
    short: "Add a little more detail (at least 20 characters).",
    long: "Shorten this field.",
    invalid: "Choose an option from the list.",
    summary: "Check the highlighted fields.",
  },
  budget: {
    "inr-under-5k": "Under ₹5,000 (INR)",
    "inr-5-15": "₹5,000 – ₹15,000 (INR)",
    "inr-15-40": "₹15,000 – ₹40,000 (INR)",
    "inr-40-plus": "Above ₹40,000 (INR)",
    intl: "International — quote in another currency",
    unsure: "Not sure yet",
  },
  contactMethod: {
    whatsapp: "WhatsApp",
    email: "Email",
    instagram: "Instagram",
    linkedin: "LinkedIn",
  },
  message: {
    intro: "Hi Odin — I would like to discuss a project.",
    name: "Name",
    email: "Email",
    country: "Country/region",
    service: "Service",
    budget: "Approximate budget",
    timeline: "Timeline",
    requirements: "Requirements",
    contact: "Preferred contact",
    subject: "Project enquiry",
  },
  faqPage: {
    eyebrow: "FAQ",
    title: "Common questions",
    lede: "Short answers. Where a number or legal term has not been fixed, the answer says so.",
  },
  policies: {
    eyebrow: "Draft for review",
    title: "Payment, cancellation, and refunds",
    banner: "Draft for the owner's review. This is not legal advice. It does not claim to override consumer rules that may apply where you live. The note both sides confirm in writing is what governs that job.",
  },
  privacyPage: {
    eyebrow: "Privacy",
    title: "What this site keeps",
    lede: "No analytics and no accounts. Language and theme stay in this browser. The enquiry form does not upload your message to a server.",
  },
  notFound: {
    title: "This page is not here",
    body: "The link may be old. Use the menu or go back to the home page.",
    home: "Back to home",
  },
  footer: {
    note: "Web and Android developer. Quotes in writing before work starts.",
    privacy: "Privacy",
    policies: "Payment and refunds",
  },
  filters: {
    all: "All",
    grooming: "Grooming and salon",
    product: "Product site",
    portfolio: "Portfolio",
    label: "Filter projects",
  },
};

type Ui = typeof en;

const hi: Ui = {
  skip: "मुख्य सामग्री पर जाएँ",
  nav: {
    about: "परिचय",
    services: "सेवाएँ",
    work: "काम",
    faq: "प्रश्न",
    contact: "संपर्क",
    menu: "मेनू खोलें",
    close: "मेनू बंद करें",
    primary: "मुख्य",
  },
  lang: {
    label: "भाषा",
    en: "English",
    hi: "हिन्दी",
    switchToEn: "अंग्रेज़ी पर जाएँ",
    switchToHi: "हिन्दी पर जाएँ",
  },
  theme: {
    label: "थीम",
    toLight: "लाइट थीम चालू करें",
    toDark: "डार्क थीम चालू करें",
  },
  cta: {
    services: "सेवाएँ देखें",
    contact: "मुझसे संपर्क करें",
    quote: "कोट माँगें",
    viewWork: "काम देखें",
    openProject: "लाइव साइट खोलें",
    newTab: "नए टैब में खुलता है",
    allServices: "सभी सेवाएँ",
    readCase: "नोट पढ़ें",
  },
  hero: {
    kicker: "ODIN / odincalm0",
    title: "वेब और एंड्रॉइड डेवलपर",
    lede: "मैं रिस्पॉन्सिव वेबसाइटें, बेसिक एंड्रॉइड ऐप स्क्रीन, और छात्रों के नोट्स, स्लाइड्स और फ़ॉर्मैट किए दस्तावेज़ बनाता हूँ। काम शुरू होने से पहले दायरा, कीमत और समय लिखित रूप में तय होता है।",
    available: "पूछताछ के लिए उपलब्ध",
    person: "Nitin Kumar",
    points: [
      "रिस्पॉन्सिव वेबसाइटें और लैंडिंग पेज",
      "बेसिक एंड्रॉइड ऐप UI",
      "नोट्स, स्लाइड्स और दस्तावेज़ फ़ॉर्मैटिंग",
    ],
  },
  home: {
    workEyebrow: "चुना हुआ काम",
    workTitle: "सार्वजनिक वेबसाइटें",
    workLede: "चार लाइव लिंक। विवरण उन्हीं पेजों से मेल खाता है। क्लाइंट का रिश्ता वहीं लिखा है जहाँ पेज खुद बताता है।",
    servicesEyebrow: "सेवाएँ",
    servicesTitle: "आप क्या माँग सकते हैं",
    servicesLede: "वेबसाइटें, बेसिक एंड्रॉइड UI, और छात्र या व्यापार के दस्तावेज़। अभी कोई सार्वजनिक कीमत सूची नहीं है — हर काम का कोट अलग होता है।",
    processEyebrow: "प्रक्रिया",
    processTitle: "काम कैसे शुरू होता है",
    closingTitle: "बताइए क्या चाहिए",
    closingLede: "WhatsApp, ईमेल, या पूछताछ फ़ॉर्म। फ़ॉर्म संदेश तैयार करता है। वह तब तक नहीं भेजा जाता जब तक आप WhatsApp या ईमेल ऐप में खुद भेज न दें।",
    closingNote: "भारत: कोट INR में हो सकता है। भारत के बाहर: अलग कोट, अपने आप मुद्रा बदलना नहीं।",
  },
  process: [
    {
      title: "आप ब्रीफ़ भेजते हैं",
      body: "सेवा, तैयार काम क्या करेगा, जो फ़ाइलें आपके पास हैं, समय-सीमा अगर हो, और बजट की सीमा अगर पता हो।",
    },
    {
      title: "मैं लिखित जवाब देता हूँ",
      body: "दायरा, कीमत और समय। भारतीय कोट INR में हो सकता है। अंतरराष्ट्रीय कोट में मुद्रा का नाम लिखा होगा। अपने आप कन्वर्ज़न नहीं होता।",
    },
    {
      title: "पुष्टि के बाद काम शुरू",
      body: "जब आप लिखित दायरा मान लेते हैं, तब मैं शुरू करता हूँ। भुगतान की शर्त उसी नोट में होती है, क्योंकि इस साइट पर वह तय नहीं है।",
    },
    {
      title: "आप ड्राफ़्ट देखते हैं",
      body: "पहले की सार्वजनिक शर्तों में एक रिवीज़न राउंड था, जब तक कोट कुछ और न कहे। अतिरिक्त काम शुरू होने से पहले कीमत तय होती है।",
    },
  ],
  about: {
    eyebrow: "परिचय",
    title: "मैं वास्तव में क्या करता हूँ",
    lede: "Nitin Kumar सार्वजनिक रूप से ODIN / odincalm0 के नाम से काम करते हैं। यह पेज उसी काम तक रहता है जो बताया गया है। अनुभव के साल, क्लाइंट की गिनती या पुरस्कार नहीं जोड़े गए।",
    photoAlt: "Nitin Kumar की मिरर फ़ोटो, जो ODIN / odincalm0 के नाम से काम प्रकाशित करते हैं।",
    photoCap: "पिछले पोर्टफोलियो की फ़ोटो। यह साधारण मिरर फ़ोटो है, स्टूडियो पोर्ट्रेट नहीं।",
    blocks: [
      {
        title: "वेबसाइटें",
        body: "रिस्पॉन्सिव बिज़नेस साइटें और लैंडिंग पेज। हाल के सार्वजनिक उदाहरण काम वाले पेज पर हैं: Nikkblend, MKS Hair Salon, और Odin नाम की एक प्रोडक्ट साइट।",
      },
      {
        title: "बेसिक एंड्रॉइड",
        body: "बेसिक एंड्रॉइड ऐप स्क्रीन और UI। पिछली साइट पर इसे AI की मदद वाला बताया गया था। यह एडवांस्ड एंड्रॉइड, Play Store पब्लिशिंग, या बड़े बैकएंड का दावा नहीं है।",
      },
      {
        title: "छात्र दस्तावेज़",
        body: "आपकी दी हुई सामग्री से नोट्स और अध्ययन सामग्री, PowerPoint, और PDF या Word फ़ॉर्मैटिंग। कस्टम दस्तावेज़ एक-एक करके तय होते हैं।",
      },
      {
        title: "टूल्स का इस्तेमाल",
        body: "मैं व्यावहारिक टूल्स इस्तेमाल करता हूँ, जिसमें ड्राफ़्ट या लेआउट के लिए AI भी हो सकता है। आपको फिर भी लिखित दायरा मिलता है। ग्रेड, रैंकिंग या व्यापारिक नतीजे का वादा नहीं।",
      },
    ],
  },
  servicesPage: {
    eyebrow: "सेवाएँ",
    title: "शुरू करने के छह तरीके",
    lede: "हर सेवा में यह है कि आपको क्या मिलेगा, यह किसके लिए है, क्या भेजना है, और कोट कैसे माँगें। कीमतें अभी प्रकाशित नहीं हैं।",
  },
  pricing: {
    title: "कीमत",
    body: "अभी कोई मंजूर सार्वजनिक कीमत सूची नहीं है। कोट माँगें। भारत में कोट INR में माँग सकते हैं। अंतरराष्ट्रीय क्लाइंट को अलग कोट मिलता है, जिस मुद्रा का नाम लिख दिया जाता है। यह साइट मुद्रा नहीं बदलती और लाइव रेट नहीं दिखाती।",
    pending: "मालिक के मंज़ूर करने तक आँकड़े खाली रहेंगे।",
  },
  serviceUi: {
    deliverables: "आपको क्या मिलेगा",
    customers: "यह किसके लिए है",
    inputs: "क्या भेजें",
    process: "काम कैसे चलता है",
    quote: "कोट कैसे माँगें",
    quoteBody: "संपर्क फ़ॉर्म में यह सेवा चुनें, या WhatsApp खोलें। कोट ब्रीफ़ देखने के बाद लिखित जवाब है। यह अपने आप लगने वाली कीमत नहीं है।",
    related: "जुड़ा काम",
    noSamples: "इस सेवा की कोई नमूना फ़ाइल यहाँ प्रकाशित नहीं है। पूछताछ में उदाहरण माँग सकते हैं।",
  },
  workPage: {
    eyebrow: "काम",
    title: "लाइव प्रोजेक्ट",
    lede: "फ़िल्टर सिर्फ़ इन चार सार्वजनिक लिंक को समूह में बाँटते हैं। ये उन उद्योगों की विशेषज्ञता का दावा नहीं हैं जो इन साइटों से आगे हो।",
    empty: "इस फ़िल्टर में कुछ नहीं।",
  },
  caseUi: {
    status: "इसे कैसे पढ़ें",
    visible: "सार्वजनिक साइट पर क्या दिखता है",
    visit: "लाइव साइट खोलें",
    more: "अन्य प्रोजेक्ट",
  },
  contact: {
    eyebrow: "संपर्क",
    title: "मुझ तक पहुँचने के चार तरीके",
    lede: "WhatsApp, ईमेल, Instagram और LinkedIn। नीचे का फ़ॉर्म संदेश तैयार करता है। WhatsApp या ईमेल खुलने का मतलब यह नहीं कि संदेश भेज दिया गया।",
    methods: "सीधे लिंक",
    formTitle: "प्रोजेक्ट पूछताछ",
    formLede: "ज़रूरी फ़ील्ड चिह्नित हैं। यह फ़ॉर्म आपका संदेश सर्वर पर नहीं रखता। ईमेल रिले जुड़ा नहीं है, इसलिए संदेश तभी जाता है जब आप खुद WhatsApp या ईमेल ड्राफ़्ट भेजते हैं।",
    whatsapp: "WhatsApp",
    email: "ईमेल",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    prepare: "संदेश तैयार करें",
    preview: "संदेश का पूर्वावलोकन",
    openWa: "WhatsApp खोलें",
    openMail: "ईमेल ड्राफ़्ट खोलें",
    copy: "संदेश कॉपी करें",
    copied: "कॉपी हो गया। जिसे आपने खोला है, उस ऐप में चिपकाएँ।",
    copyFail: "अपने आप कॉपी नहीं हो सका। संदेश चुनकर कॉपी करें।",
    waExplain: "WhatsApp इस पाठ के साथ खुलना चाहिए। वहाँ Send दबाने से पहले वह नहीं भेजा जाता।",
    mailExplain: "आपका ईमेल ऐप odincalm@proton.me पर ड्राफ़्ट खोले। ड्राफ़्ट भेजने से पहले वह नहीं जाता।",
    socialExplain: "Instagram और LinkedIn इस साइट से भरा हुआ संदेश स्वीकार नहीं करते। पाठ कॉपी करें, प्रोफ़ाइल खुलने के बाद चिपकाएँ।",
    openProfile: "प्रोफ़ाइल खोलें",
    retry: "बदलें और फिर कोशिश करें",
    spam: "यह पूछताछ तैयार नहीं हो सकी। थोड़ी देर रुककर फिर कोशिश करें।",
    long: "यह संदेश लंबा है। अगर ऐप काट दे, तो बाकी दूसरा संदेश भेजें या ईमेल इस्तेमाल करें।",
    budgetHint: "यह आपकी सीमा है, प्रकाशित फ़ीस नहीं।",
    required: "ज़रूरी",
    optional: "वैकल्पिक",
    honeypot: "कंपनी की वेबसाइट",
  },
  fields: {
    name: "नाम",
    email: "ईमेल",
    country: "देश या क्षेत्र",
    service: "सेवा",
    contact: "पसंदीदा संपर्क",
    budget: "अनुमानित बजट",
    requirements: "प्रोजेक्ट की ज़रूरतें",
    deadline: "लक्षित समय-सीमा",
    choose: "चुनें",
  },
  errors: {
    required: "यह फ़ील्ड भरें।",
    email: "सही ईमेल पता लिखें।",
    short: "थोड़ा और विवरण लिखें (कम से कम 20 अक्षर)।",
    long: "इसे छोटा करें।",
    invalid: "सूची में से एक विकल्प चुनें।",
    summary: "चिह्नित फ़ील्ड जाँचें।",
  },
  budget: {
    "inr-under-5k": "₹5,000 से कम (INR)",
    "inr-5-15": "₹5,000 – ₹15,000 (INR)",
    "inr-15-40": "₹15,000 – ₹40,000 (INR)",
    "inr-40-plus": "₹40,000 से अधिक (INR)",
    intl: "अंतरराष्ट्रीय — दूसरी मुद्रा में कोट",
    unsure: "अभी तय नहीं",
  },
  contactMethod: {
    whatsapp: "WhatsApp",
    email: "ईमेल",
    instagram: "Instagram",
    linkedin: "LinkedIn",
  },
  message: {
    intro: "नमस्ते Odin — मुझे एक प्रोजेक्ट पर बात करनी है।",
    name: "नाम",
    email: "ईमेल",
    country: "देश/क्षेत्र",
    service: "सेवा",
    budget: "अनुमानित बजट",
    timeline: "समय-सीमा",
    requirements: "ज़रूरतें",
    contact: "पसंदीदा संपर्क",
    subject: "प्रोजेक्ट पूछताछ",
  },
  faqPage: {
    eyebrow: "प्रश्न",
    title: "आम सवाल",
    lede: "छोटे जवाब। जहाँ संख्या या कानूनी शर्त तय नहीं है, जवाब वही कहता है।",
  },
  policies: {
    eyebrow: "समीक्षा के लिए मसौदा",
    title: "भुगतान, रद्द करना और रिफ़ंड",
    banner: "मालिक की समीक्षा के लिए मसौदा। यह कानूनी सलाह नहीं है। यह दावा नहीं करता कि यह आपके इलाके के उपभोक्ता नियमों से ऊपर है। जो नोट दोनों पक्ष लिखकर मानते हैं, वही उस काम पर लागू होता है।",
  },
  privacyPage: {
    eyebrow: "गोपनीयता",
    title: "यह साइट क्या रखती है",
    lede: "कोई एनालिटिक्स नहीं, कोई खाता नहीं। भाषा और थीम इसी ब्राउज़र में रहती हैं। पूछताछ फ़ॉर्म आपका संदेश सर्वर पर नहीं भेजता।",
  },
  notFound: {
    title: "यह पेज यहाँ नहीं है",
    body: "लिंक पुराना हो सकता है। मेनू इस्तेमाल करें या होम पेज पर जाएँ।",
    home: "होम पर वापस",
  },
  footer: {
    note: "वेब और एंड्रॉइड डेवलपर। काम से पहले लिखित कोट।",
    privacy: "गोपनीयता",
    policies: "भुगतान और रिफ़ंड",
  },
  filters: {
    all: "सभी",
    grooming: "ग्रूमिंग और सैलून",
    product: "प्रोडक्ट साइट",
    portfolio: "पोर्टफोलियो",
    label: "प्रोजेक्ट फ़िल्टर",
  },
};

export const ui: Record<Lang, Ui> = { en, hi };

export type Service = {
  slug: string;
  title: Copy;
  summary: Copy;
  deliverables: Record<Lang, string[]>;
  customers: Copy;
  inputs: Record<Lang, string[]>;
  steps: Record<Lang, string[]>;
};

export const services: Service[] = [
  {
    slug: "websites",
    title: {
      en: "Responsive business websites and landing pages",
      hi: "रिस्पॉन्सिव बिज़नेस वेबसाइटें और लैंडिंग पेज",
    },
    summary: {
      en: "A phone-friendly site that explains what you offer and gives people a clear way to contact you.",
      hi: "एक फ़ोन-अनुकूल साइट जो बताए कि आप क्या देते हैं, और लोगों को संपर्क का साफ़ रास्ता दे।",
    },
    deliverables: {
      en: [
        "A responsive page or small site for phones, tablets, and desktops",
        "Sections for your offer, proof you already have (photos or links), and a contact path",
        "Page titles and short descriptions for the pages I build",
        "A short note on what you need to publish it. I do not take over hosting accounts unless that is written into the quote",
      ],
      hi: [
        "फ़ोन, टैबलेट और डेस्कटॉप के लिए एक रिस्पॉन्सिव पेज या छोटी साइट",
        "आपकी सेवा, आपके पास मौजूद फ़ोटो या लिंक, और संपर्क का रास्ता",
        "जो पेज मैं बनाऊँ, उनके शीर्षक और छोटा विवरण",
        "प्रकाशित करने के लिए क्या चाहिए, इसकी छोटी नोट। होस्टिंग खाते तब तक नहीं लेता जब तक कोट में लिखा न हो",
      ],
    },
    customers: {
      en: "Small businesses, salons, personal brands, and anyone who needs a public page. Suits India and international enquiries.",
      hi: "छोटे व्यवसाय, सैलून, पर्सनल ब्रांड, और जिसे एक सार्वजनिक पेज चाहिए। भारत और बाहर, दोनों की पूछताछ चलती है।",
    },
    inputs: {
      en: [
        "The name people should see, and what you want the page to do",
        "Any logo, photos, or text you already have the right to use",
        "Examples of sites you like, and the pages you need",
        "Say if you want me to draft the sentences or only design and build around your text",
      ],
      hi: [
        "जो नाम लोगों को दिखे, और पेज से आप क्या करवाना चाहते हैं",
        "लोगो, फ़ोटो या पाठ जिसके इस्तेमाल का अधिकार आपके पास हो",
        "पसंद की साइटों के उदाहरण, और कितने पेज चाहिए",
        "बताएँ कि वाक्य मैं लिखूँ या सिर्फ़ आपके पाठ के आसपास डिज़ाइन और बिल्ड करूँ",
      ],
    },
    steps: {
      en: [
        "You send the brief and any files",
        "I reply with scope, an INR or international quote, and timing",
        "After written confirmation I build a draft you can open in a browser",
        "You review. Changes follow the revision line in the quote",
      ],
      hi: [
        "आप ब्रीफ़ और फ़ाइलें भेजते हैं",
        "मैं दायरा, INR या अंतरराष्ट्रीय कोट, और समय लिखकर भेजता हूँ",
        "लिखित पुष्टि के बाद एक ड्राफ़्ट बनता है जिसे ब्राउज़र में खोला जा सकता है",
        "आप समीक्षा करते हैं। बदलाव कोट की रिवीज़न लाइन के अनुसार होते हैं",
      ],
    },
  },
  {
    slug: "android",
    title: {
      en: "Basic Android applications and UI implementation",
      hi: "बेसिक एंड्रॉइड ऐप और UI",
    },
    summary: {
      en: "Simple Android screens and basic flows. Not an offer of advanced app engineering.",
      hi: "सरल एंड्रॉइड स्क्रीन और बेसिक फ़्लो। एडवांस्ड ऐप इंजीनियरिंग का ऑफ़र नहीं।",
    },
    deliverables: {
      en: [
        "Screen layouts for a small Android app",
        "A basic flow between those screens when that is in the quote",
        "Use of AI-assisted drafting where it helps, as described on the previous site",
        "A build or project files you can open. Play Store submission is not a standard deliverable",
      ],
      hi: [
        "एक छोटे एंड्रॉइड ऐप की स्क्रीन लेआउट",
        "जब कोट में हो, उन स्क्रीन के बीच एक बेसिक फ़्लो",
        "जहाँ मदद करे, AI की सहायता से ड्राफ़्ट — जैसा पिछली साइट पर लिखा था",
        "बिल्ड या प्रोजेक्ट फ़ाइलें जिन्हें आप खोल सकें। Play Store सबमिशन मानक डिलिवरेबल नहीं है",
      ],
    },
    customers: {
      en: "Students, personal projects, and small tools that need a clear interface rather than a large production system.",
      hi: "छात्र, निजी प्रोजेक्ट, और छोटे टूल जिन्हें बड़े प्रोडक्शन सिस्टम की जगह साफ़ इंटरफ़ेस चाहिए।",
    },
    inputs: {
      en: [
        "A list of screens and what each one should show",
        "Sample text, and colors or a logo if you have them",
        "Whether you need only the UI or a basic working flow",
        "The Android tools you expect to open the project in, if you already know",
      ],
      hi: [
        "स्क्रीन की सूची और हर स्क्रीन पर क्या दिखे",
        "नमूना पाठ, और रंग या लोगो अगर हो",
        "सिर्फ़ UI चाहिए या बेसिक काम करता फ़्लो",
        "आप प्रोजेक्ट किस Android टूल में खोलना चाहते हैं, अगर पता हो",
      ],
    },
    steps: {
      en: [
        "We list the screens in writing so the size of the job is clear",
        "I quote that list. Anything outside the list is a new quote",
        "You review the screens on a device or emulator you have",
        "I adjust within the agreed revision round",
      ],
      hi: [
        "स्क्रीन लिखित सूची में होती हैं ताकि काम का आकार साफ़ हो",
        "मैं उसी सूची का कोट देता हूँ। सूची के बाहर नई कीमत होती है",
        "आप स्क्रीन अपने डिवाइस या एमुलेटर पर देखते हैं",
        "मैं तय रिवीज़न राउंड के अंदर सुधार करता हूँ",
      ],
    },
  },
  {
    slug: "notes",
    title: {
      en: "Student notes and study materials",
      hi: "छात्र नोट्स और अध्ययन सामग्री",
    },
    summary: {
      en: "Notes and summaries arranged for study, from material you are allowed to use.",
      hi: "अध्ययन के लिए सजाए नोट्स और सार, उस सामग्री से जिसके इस्तेमाल की आपको अनुमति हो।",
    },
    deliverables: {
      en: [
        "Structured notes or a summary in the file type we agree (usually Word or PDF)",
        "Headings that follow the topic order you want",
        "Your source material shaped into shorter study pages — not a promise of marks",
      ],
      hi: [
        "सजे हुए नोट्स या सार, जिस फ़ाइल प्रकार पर सहमति हो (आमतौर पर Word या PDF)",
        "शीर्षक आपके चाहे विषय-क्रम में",
        "आपकी स्रोत सामग्री को छोटे अध्ययन पेजों में ढालना — अंकों का वादा नहीं",
      ],
    },
    customers: {
      en: "Students who want class material, a syllabus, or readings organized for revision.",
      hi: "वे छात्र जो कक्षा की सामग्री, सिलेबस या रीडिंग को दोहराई के लिए सजवाना चाहते हैं।",
    },
    inputs: {
      en: [
        "The source files or text you may use",
        "Subject, language of the notes, and any school format rules",
        "What must stay in your own words, if the school requires that",
      ],
      hi: [
        "स्रोत फ़ाइलें या पाठ जिनका आपको उपयोग करने की अनुमति हो",
        "विषय, नोट्स की भाषा, और स्कूल के फ़ॉर्मैट नियम",
        "क्या आपके अपने शब्दों में रहना चाहिए, अगर स्कूल माँगता हो",
      ],
    },
    steps: {
      en: [
        "You send the source and the format rules",
        "I confirm what I will organize and what I will not write for you to submit as solely your own unseen work",
        "You receive a draft and check it against your material",
        "Factual corrections to that draft follow the quoted revision round",
      ],
      hi: [
        "आप स्रोत और फ़ॉर्मैट नियम भेजते हैं",
        "मैं पुष्टि करता हूँ कि क्या सजाऊँगा, और क्या ऐसा नहीं लिखूँगा जिसे आप बिना देखे अपना काम बताकर जमा करें",
        "आपको ड्राफ़्ट मिलता है, आप अपनी सामग्री से मिलाते हैं",
        "उस ड्राफ़्ट की तथ्यात्मक सुधार कोट के रिवीज़न राउंड में होते हैं",
      ],
    },
  },
  {
    slug: "presentations",
    title: {
      en: "PowerPoint presentations",
      hi: "PowerPoint प्रस्तुतियाँ",
    },
    summary: {
      en: "A readable deck with your content, structured for a class or a small business talk.",
      hi: "आपकी सामग्री के साथ एक पढ़ने लायक डेक, कक्षा या छोटी व्यापारिक बात के लिए।",
    },
    deliverables: {
      en: [
        "A PowerPoint file (PPTX) unless we agree another format",
        "A title, section flow, and slides that can be read from the back of a room",
        "Your images only where you have the right to use them",
      ],
      hi: [
        "PowerPoint फ़ाइल (PPTX), जब तक कोई और फ़ॉर्मैट तय न हो",
        "शीर्षक, खंडों का क्रम, और स्लाइड जो कमरे के पीछे से पढ़ी जा सकें",
        "आपकी तस्वीरें वहीं जहाँ उनके उपयोग का अधिकार आपके पास हो",
      ],
    },
    customers: {
      en: "Students and small businesses who already know the point of the talk.",
      hi: "छात्र और छोटे व्यवसाय जिन्हें बात का मुद्दा पहले से पता हो।",
    },
    inputs: {
      en: [
        "An outline or rough notes",
        "Slide count, if someone has set one",
        "Where it will be shown, and any logo or template you must use",
      ],
      hi: [
        "रूपरेखा या कच्चे नोट्स",
        "स्लाइड की संख्या, अगर किसी ने तय की हो",
        "यह कहाँ दिखेगा, और कोई लोगो या टेम्पलेट जो इस्तेमाल करना ज़रूरी हो",
      ],
    },
    steps: {
      en: [
        "You send the outline and the rules",
        "I quote the slide range before building",
        "You get a draft deck and check the facts",
        "Wording and layout edits follow the quoted revisions",
      ],
      hi: [
        "आप रूपरेखा और नियम भेजते हैं",
        "बनाने से पहले मैं स्लाइड की सीमा का कोट देता हूँ",
        "आपको ड्राफ़्ट डेक मिलता है और आप तथ्य जाँचते हैं",
        "शब्द और लेआउट के बदलाव तय रिवीज़न के अनुसार होते हैं",
      ],
    },
  },
  {
    slug: "documents",
    title: {
      en: "PDF and Word document formatting",
      hi: "PDF और Word दस्तावेज़ फ़ॉर्मैटिंग",
    },
    summary: {
      en: "Clean formatting for a document you already wrote or outlined: headings, spacing, numbers, and export.",
      hi: "उस दस्तावेज़ की साफ़ फ़ॉर्मैटिंग जो आप पहले ही लिख चुके हैं या जिसकी रूपरेखा है: शीर्षक, अंतर, नंबर और निर्यात।",
    },
    deliverables: {
      en: [
        "A Word file, a PDF, or both, as quoted",
        "Consistent headings, spacing, and page numbers",
        "A contents list when the document is long enough to need one",
        "Formatting to a style guide you supply (font, margins, citation layout). I follow the guide; I do not invent school rules",
      ],
      hi: [
        "Word फ़ाइल, PDF, या दोनों — जैसा कोट में हो",
        "एक जैसे शीर्षक, अंतर और पेज नंबर",
        "विषय-सूची जब दस्तावेज़ इतना लंबा हो कि ज़रूरत पड़े",
        "आपके दिए स्टाइल गाइड के अनुसार फ़ॉर्मैटिंग (फ़ॉन्ट, मार्जिन, उद्धरण)। मैं गाइड मानता हूँ; स्कूल के नियम नहीं गढ़ता",
      ],
    },
    customers: {
      en: "Students and small businesses who need a document to look consistent and be easy to read.",
      hi: "छात्र और छोटे व्यवसाय जिन्हें दस्तावेज़ एक जैसा और पढ़ने में आसान चाहिए।",
    },
    inputs: {
      en: [
        "The file or the text",
        "The style rules, if a school or client set them",
        "Whether you need Word, PDF, or both",
      ],
      hi: [
        "फ़ाइल या पाठ",
        "स्टाइल नियम, अगर स्कूल या क्लाइंट ने दिए हों",
        "Word चाहिए, PDF, या दोनों",
      ],
    },
    steps: {
      en: [
        "You send the file and the rules",
        "I say what formatting is included and quote it",
        "You check a draft export",
        "Formatting fixes in scope are part of the quoted revision",
      ],
      hi: [
        "आप फ़ाइल और नियम भेजते हैं",
        "मैं बताता हूँ कौन सी फ़ॉर्मैटिंग शामिल है, और कोट देता हूँ",
        "आप ड्राफ़्ट निर्यात जाँचते हैं",
        "दायरे की फ़ॉर्मैटिंग सुधार तय रिवीज़न का हिस्सा हैं",
      ],
    },
  },
  {
    slug: "custom-documents",
    title: {
      en: "Custom academic and digital document requirements",
      hi: "कस्टम शैक्षणिक और डिजिटल दस्तावेज़",
    },
    summary: {
      en: "A document job that does not fit the other five, agreed as its own scope.",
      hi: "ऐसा दस्तावेज़ काम जो बाकी पाँच में न बैठे, और जिसका दायरा अलग से तय हो।",
    },
    deliverables: {
      en: [
        "Only what the written quote lists. Examples: notes plus a short deck, a report with a PDF export, or a one-page handout",
        "File types named in the quote",
        "No extra research, printing, or posting unless that line is in the quote",
      ],
      hi: [
        "वही जो लिखित कोट में हो। उदाहरण: नोट्स और छोटा डेक, PDF निर्यात वाली रिपोर्ट, या एक पेज का हैंडआउट",
        "कोट में लिखे फ़ाइल प्रकार",
        "अतिरिक्त शोध, छपाई या पोस्टिंग नहीं, जब तक वह पंक्ति कोट में न हो",
      ],
    },
    customers: {
      en: "Anyone with a specific file in mind that the standard services do not describe.",
      hi: "जिसे एक खास फ़ाइल चाहिए जिसे मानक सेवाएँ ठीक से नहीं बतातीं।",
    },
    inputs: {
      en: [
        "What the finished file should be",
        "The source material",
        "A deadline if you have one, and anything that must not be changed",
      ],
      hi: [
        "तैयार फ़ाइल कैसी हो",
        "स्रोत सामग्री",
        "समय-सीमा अगर हो, और जो बदला नहीं जाना चाहिए",
      ],
    },
    steps: {
      en: [
        "Describe the finished file in a few sentences",
        "I either quote that description or say I cannot take it",
        "Work follows the same written confirm-then-draft path as the other services",
      ],
      hi: [
        "तैयार फ़ाइल को कुछ वाक्यों में बताएँ",
        "मैं उस विवरण का कोट देता हूँ, या कहता हूँ कि यह काम नहीं ले सकता",
        "बाकी सेवाओं की तरह पहले लिखित पुष्टि, फिर ड्राफ़्ट",
      ],
    },
  },
];

export type ProjectCategory = "grooming" | "product" | "portfolio";

export type Project = {
  slug: string;
  name: string;
  url: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  category: ProjectCategory;
  alt: Copy;
  summary: Copy;
  status: Copy;
  points: Record<Lang, string[]>;
};

export const projects: Project[] = [
  {
    slug: "nikkblend",
    name: "Nikkblend by Nitin Kumar",
    url: "https://nikkblend-web.vercel.app/",
    image: "/work/nikkblend.jpg",
    imageWidth: 1280,
    imageHeight: 800,
    category: "grooming",
    alt: {
      en: "Screenshot of the Nikkblend website, signature services section, on a black background.",
      hi: "Nikkblend वेबसाइट का स्क्रीनशॉट, काले बैकग्राउंड पर सिग्नेचर सेवाओं का खंड।",
    },
    summary: {
      en: "A public site for NIKKBLEND, presented as a luxury mobile grooming atelier. The footer credits the website to Nitin Kumar and @odincalm0.",
      hi: "NIKKBLEND की सार्वजनिक साइट, जिसे लग्ज़री मोबाइल ग्रूमिंग एटेलियर के रूप में दिखाया गया है। फ़ुटर वेबसाइट का श्रेय Nitin Kumar और @odincalm0 को देता है।",
    },
    status: {
      en: "The live page says the website was crafted by Nitin Kumar. This portfolio does not add a separate claim that it was a paid client job, and it does not report bookings or revenue.",
      hi: "लाइव पेज कहता है कि वेबसाइट Nitin Kumar ने बनाई। यह पोर्टफोलियो अलग से यह दावा नहीं जोड़ता कि यह पेड क्लाइंट काम था, और बुकिंग या आय नहीं बताता।",
    },
    points: {
      en: [
        "Public title: NIKKBLEND, luxury mobile atelier",
        "A signature-services section lists six named grooming services",
        "Appointment booking is offered, including a WhatsApp path",
        "The footer also links services, gallery, and contact",
      ],
      hi: [
        "सार्वजनिक शीर्षक: NIKKBLEND, लग्ज़री मोबाइल एटेलियर",
        "सिग्नेचर सेवाओं के खंड में छह नामित ग्रूमिंग सेवाएँ हैं",
        "अपॉइंटमेंट बुकिंग है, जिसमें WhatsApp का रास्ता भी है",
        "फ़ुटर में सेवाएँ, गैलरी और संपर्क के लिंक भी हैं",
      ],
    },
  },
  {
    slug: "odin",
    name: "Odin by Nitin Kumar",
    url: "https://odin-plum-tau.vercel.app",
    image: "/work/odin.jpg",
    imageWidth: 1280,
    imageHeight: 800,
    category: "product",
    alt: {
      en: "Screenshot of the Odin website homepage with a dark background and a headline about autonomous AI.",
      hi: "Odin वेबसाइट के होम पेज का स्क्रीनशॉट, गहरे बैकग्राउंड और ऑटोनॉमस AI वाले शीर्षक के साथ।",
    },
    summary: {
      en: "A public homepage that presents a product called ODIN as an AI web-development workspace. Treated here as a personal project by Nitin Kumar.",
      hi: "एक सार्वजनिक होम पेज जो ODIN नाम के प्रोडक्ट को AI वेब-डेवलपमेंट वर्कस्पेस बताता है। यहाँ इसे Nitin Kumar का निजी प्रोजेक्ट माना गया है।",
    },
    status: {
      en: "Statements on that site, including that a platform is live, are its own marketing copy. This portfolio does not independently verify accounts, code generation, or deployment.",
      hi: "उस साइट के कथन, जिसमें यह भी है कि प्लेटफ़ॉर्म लाइव है, उसकी अपनी मार्केटिंग कॉपी हैं। यह पोर्टफोलियो खाते, कोड जनरेशन या डिप्लॉयमेंट की अलग से जाँच नहीं करता।",
    },
    points: {
      en: [
        "Visible homepage sections include Smart Generation, Live Preview, and Premium Aesthetics",
        "The page shows Login, Sign Up, Enter Workspace, and View Documentation actions",
        "No client name other than the Odin / Nitin Kumar project title is published here",
      ],
      hi: [
        "दिखने वाले होम खंडों में Smart Generation, Live Preview और Premium Aesthetics हैं",
        "पेज पर Login, Sign Up, Enter Workspace और View Documentation क्रियाएँ दिखती हैं",
        "Odin / Nitin Kumar प्रोजेक्ट शीर्षक के अलावा कोई क्लाइंट नाम यहाँ प्रकाशित नहीं है",
      ],
    },
  },
  {
    slug: "mks-hair-salon",
    name: "MKS Hair Salon website",
    url: "https://barber-olive-delta.vercel.app/",
    image: "/work/mks.jpg",
    imageWidth: 1280,
    imageHeight: 800,
    category: "grooming",
    alt: {
      en: "Screenshot of the MKS Hair Salon homepage with a light layout, booking actions, and a salon photo.",
      hi: "MKS Hair Salon होम पेज का स्क्रीनशॉट, हल्के लेआउट, बुकिंग बटनों और सैलून फ़ोटो के साथ।",
    },
    summary: {
      en: "A public website titled MKS Hair Salon — Modern Grooming, for a studio on Salarpur Road. Listed by Nitin Kumar.",
      hi: "MKS Hair Salon — Modern Grooming शीर्षक वाली सार्वजनिक वेबसाइट, Salarpur Road के एक स्टूडियो के लिए। Nitin Kumar की सूची में।",
    },
    status: {
      en: "Client status beyond the owner's decision to list this site is not stated here, and there is no testimonial. Phone numbers on that site belong to the salon, not to this portfolio.",
      hi: "मालिक के इस साइट को सूची में रखने के अलावा क्लाइंट स्थिति यहाँ नहीं लिखी, और कोई प्रशंसापत्र नहीं है। उस साइट के फ़ोन नंबर सैलून के हैं, इस पोर्टफोलियो के नहीं।",
    },
    points: {
      en: [
        "The page identifies MKS Hair Salon (also written M.K.S) and Salarpur Road",
        "Visible navigation includes Home, Services, Work, Location, and About",
        "Appointment actions are on the page, including a WhatsApp booking label",
        "A public price range for salon services appears on the page. Those are the salon's prices, not ODIN's fees",
      ],
      hi: [
        "पेज MKS Hair Salon (M.K.S भी) और Salarpur Road बताता है",
        "दिखने वाले नेविगेशन में Home, Services, Work, Location और About हैं",
        "पेज पर अपॉइंटमेंट क्रियाएँ हैं, जिसमें WhatsApp बुकिंग का लेबल भी है",
        "सैलून सेवाओं की सार्वजनिक कीमत सीमा पेज पर है। वे सैलून की कीमतें हैं, ODIN की फ़ीस नहीं",
      ],
    },
  },
  {
    slug: "portfolio",
    name: "ODIN / odincalm0 portfolio",
    url: "https://odincalm.github.io/portfolio/",
    category: "portfolio",
    alt: {
      en: "Text panel for the ODIN portfolio, because this card links to the current GitHub Pages site.",
      hi: "ODIN पोर्टफोलियो का पाठ पैनल, क्योंकि यह कार्ड वर्तमान GitHub Pages साइट पर जाता है।",
    },
    summary: {
      en: "The public portfolio for ODIN / odincalm0. The current GitHub Pages site is a single dark page with services, four project links, and WhatsApp, email, and Instagram contacts.",
      hi: "ODIN / odincalm0 का सार्वजनिक पोर्टफोलियो। वर्तमान GitHub Pages साइट एक गहरा एकल पेज है, जिसमें सेवाएँ, चार प्रोजेक्ट लिंक, और WhatsApp, ईमेल व Instagram संपर्क हैं।",
    },
    status: {
      en: "This is the owner's own site, not a client project. The link opens the GitHub Pages URL that is live today.",
      hi: "यह मालिक की अपनी साइट है, क्लाइंट प्रोजेक्ट नहीं। लिंक आज की GitHub Pages URL खोलता है।",
    },
    points: {
      en: [
        "Live URL: https://odincalm.github.io/portfolio/",
        "The live page is one HTML file with a dark layout",
        "It already publishes the WhatsApp number and Instagram profile used on this site",
      ],
      hi: [
        "लाइव URL: https://odincalm.github.io/portfolio/",
        "लाइव पेज एक HTML फ़ाइल है, गहरे लेआउट के साथ",
        "वहाँ वही WhatsApp नंबर और Instagram प्रोफ़ाइल पहले से है जो इस साइट पर है",
      ],
    },
  },
];

export const faqs: { q: Copy; a: Copy }[] = [
  {
    q: {
      en: "What services are available?",
      hi: "कौन सी सेवाएँ उपलब्ध हैं?",
    },
    a: {
      en: "Responsive websites and landing pages, basic Android app UI, student notes and study materials, PowerPoint decks, PDF and Word formatting, and other document jobs agreed one by one.",
      hi: "रिस्पॉन्सिव वेबसाइटें और लैंडिंग पेज, बेसिक एंड्रॉइड ऐप UI, छात्र नोट्स और अध्ययन सामग्री, PowerPoint, PDF और Word फ़ॉर्मैटिंग, और अन्य दस्तावेज़ काम जो एक-एक करके तय हों।",
    },
  },
  {
    q: {
      en: "How do I request a quote?",
      hi: "कोट कैसे माँगूँ?",
    },
    a: {
      en: "Use the contact form, WhatsApp, or email odincalm@proton.me. Say which service you need and what the finished work should be. I reply in writing with scope and price. The form only prepares the message. You still send it.",
      hi: "संपर्क फ़ॉर्म, WhatsApp, या odincalm@proton.me पर ईमेल करें। बताएँ कौन सी सेवा चाहिए और तैयार काम क्या हो। मैं दायरा और कीमत लिखकर भेजता हूँ। फ़ॉर्म सिर्फ़ संदेश तैयार करता है। भेजना आपको होता है।",
    },
  },
  {
    q: {
      en: "What information should I provide?",
      hi: "मुझे कौन सी जानकारी देनी चाहिए?",
    },
    a: {
      en: "Your name, email, the service, a plain description of the work, files you already have, a deadline if you have one, and a budget range if you know it. Country helps me see whether the quote should be in INR or a separate international quote.",
      hi: "नाम, ईमेल, सेवा, काम का सादा विवरण, जो फ़ाइलें पहले से हों, समय-सीमा अगर हो, और बजट की सीमा अगर पता हो। देश से पता चलता है कि कोट INR में हो या अलग अंतरराष्ट्रीय कोट।",
    },
  },
  {
    q: {
      en: "Can international clients enquire?",
      hi: "क्या भारत के बाहर से पूछताछ हो सकती है?",
    },
    a: {
      en: "Yes. Use the same WhatsApp number, email, Instagram, or LinkedIn. International prices are quoted on their own. This site does not convert INR with a live exchange rate.",
      hi: "हाँ। वही WhatsApp नंबर, ईमेल, Instagram या LinkedIn इस्तेमाल करें। अंतरराष्ट्रीय कीमत अलग से लिखी जाती है। यह साइट लाइव रेट से INR नहीं बदलती।",
    },
  },
  {
    q: {
      en: "How long does a project take?",
      hi: "प्रोजेक्ट में कितना समय लगता है?",
    },
    a: {
      en: "It depends on the brief, how complete your material is, and the scope we write down. I do not publish one turnaround for every job. The date is in the quote, before work starts.",
      hi: "यह ब्रीफ़, आपकी सामग्री कितनी पूरी है, और लिखे दायरे पर निर्भर है। मैं हर काम के लिए एक ही समय नहीं छापता। तारीख कोट में होती है, काम शुरू होने से पहले।",
    },
  },
  {
    q: {
      en: "How do revisions work?",
      hi: "रिवीज़न कैसे काम करते हैं?",
    },
    a: {
      en: "The previous public terms said one revision round is included and further rounds are billed. That is the default only when your quote repeats it. If the quote names a different number, the quote wins. New scope is a new quote.",
      hi: "पिछली सार्वजनिक शर्तों में एक रिवीज़न राउंड शामिल था और आगे के राउंड का शुल्क था। यह तभी डिफ़ॉल्ट है जब आपका कोट इसे दोहराए। अगर कोट कोई और संख्या लिखे, तो कोट मान्य है। नया दायरा नया कोट है।",
    },
  },
  {
    q: {
      en: "What are the payment and cancellation terms?",
      hi: "भुगतान और रद्द करने की शर्तें क्या हैं?",
    },
    a: {
      en: "Payment method and schedule are agreed in writing before work starts. They are not a public rate card. If you cancel before work starts, you are not billed for work that was not done. If work has started, you pay for the portion already done, as the written note describes. Read the draft policy page for the full wording under review.",
      hi: "भुगतान का तरीका और समय काम से पहले लिखित रूप में तय होता है। यह सार्वजनिक दर सूची नहीं है। शुरू होने से पहले रद्द करें तो जो काम नहीं हुआ उसका बिल नहीं। काम शुरू हो चुका हो तो जितना हो चुका है उसका भुगतान, जैसा लिखित नोट कहे। पूरी भाषा समीक्षा वाले नीति पेज पर है।",
    },
  },
  {
    q: {
      en: "What is the refund policy?",
      hi: "रिफ़ंड नीति क्या है?",
    },
    a: {
      en: "The owner states a no-refund position for work that has been delivered as agreed. Undelivered work is not treated as finished. This page does not claim to cancel consumer rights that apply where you live. The wording is a draft for the owner to review.",
      hi: "मालिक की स्थिति है कि जो काम तय समझौते के अनुसार दे दिया गया, उसका रिफ़ंड नहीं। जो काम नहीं दिया गया, उसे पूरा नहीं माना जाता। यह पेज यह दावा नहीं करता कि आपके इलाके के उपभोक्ता अधिकार समाप्त हो जाते हैं। भाषा मालिक की समीक्षा के लिए मसौदा है।",
    },
  },
];

export const policySections: { title: Copy; body: Copy }[] = [
  {
    title: { en: "Quotes", hi: "कोट" },
    body: {
      en: "A quote names the work, the price, the currency, the timing, and how many revision rounds are included. Indian quotes can be in INR. International quotes name their own currency. There is no automatic conversion on this site.",
      hi: "कोट में काम, कीमत, मुद्रा, समय और रिवीज़न राउंड की संख्या होती है। भारतीय कोट INR में हो सकता है। अंतरराष्ट्रीय कोट अपनी मुद्रा का नाम लिखता है। इस साइट पर अपने आप कन्वर्ज़न नहीं होता।",
    },
  },
  {
    title: { en: "Payment", hi: "भुगतान" },
    body: {
      en: "How and when you pay is written in the quote. This site does not list UPI, cards, or bank details because those have not been supplied as a public method.",
      hi: "आप कैसे और कब भुगतान करते हैं, यह कोट में लिखा होता है। यह साइट UPI, कार्ड या बैंक विवरण नहीं दिखाती, क्योंकि उन्हें सार्वजनिक तरीके के रूप में नहीं दिया गया।",
    },
  },
  {
    title: { en: "Cancellation and incomplete work", hi: "रद्द करना और अधूरा काम" },
    body: {
      en: "Before work starts, you can cancel and you are not billed for work that was not produced. After work has started, you pay for the portion completed, as described in the quote or a follow-up note. Work that has not been delivered is not treated as complete.",
      hi: "काम शुरू होने से पहले आप रद्द कर सकते हैं, और जो काम नहीं बना उसका बिल नहीं। शुरू होने के बाद जितना हिस्सा पूरा हुआ उसका भुगतान, जैसा कोट या अगली नोट में हो। जो काम नहीं दिया गया उसे पूरा नहीं माना जाता।",
    },
  },
  {
    title: { en: "Refunds", hi: "रिफ़ंड" },
    body: {
      en: "The owner states that fees for work delivered as agreed are not refunded. This is the owner's position for review. It is not a statement that the policy overrides the law where you live. If a mandatory rule requires a different outcome, that rule still applies.",
      hi: "मालिक की स्थिति है कि तय समझौते के अनुसार दिए गए काम की फ़ीस वापस नहीं होती। यह समीक्षा के लिए मालिक की स्थिति है। यह कथन नहीं है कि नीति आपके इलाके के कानून से ऊपर है। अगर कोई अनिवार्य नियम दूसरा नतीजा माँगे, तो वह नियम लागू रहता है।",
    },
  },
  {
    title: { en: "Revisions and scope changes", hi: "रिवीज़न और दायरे में बदलाव" },
    body: {
      en: "The previous public terms included one revision round, with further rounds billed. Use that only when the quote repeats it. A change of scope is quoted before the extra work starts.",
      hi: "पिछली सार्वजनिक शर्तों में एक रिवीज़न राउंड था, आगे के राउंड का शुल्क अलग। इसे तभी मानें जब कोट दोहराए। दायरा बदलने पर अतिरिक्त काम से पहले नया कोट होता है।",
    },
  },
];

export const privacySections: { title: Copy; body: Copy }[] = [
  {
    title: { en: "What is not collected", hi: "क्या इकट्ठा नहीं होता" },
    body: {
      en: "This site does not run analytics, advertising trackers, or accounts. It does not ask you to sign in.",
      hi: "यह साइट एनालिटिक्स, विज्ञापन ट्रैकर या खाते नहीं चलाती। साइन-इन नहीं माँगती।",
    },
  },
  {
    title: { en: "Saved in this browser", hi: "इसी ब्राउज़र में सहेजा" },
    body: {
      en: "Your language (English or Hindi) and theme (light or dark) are stored in local storage on your device so the next visit can match. That data is not sent to me. You can clear it in your browser settings.",
      hi: "आपकी भाषा (English या हिन्दी) और थीम (लाइट या डार्क) आपके डिवाइस के लोकल स्टोरेज में रहती है, ताकि अगली बार वही खुले। यह डेटा मुझे नहीं भेजा जाता। आप इसे ब्राउज़र सेटिंग में मिटा सकते हैं।",
    },
  },
  {
    title: { en: "Enquiries", hi: "पूछताछ" },
    body: {
      en: `The enquiry form checks your answers in the browser and builds a message. It does not upload that message to a server, because an email relay is not configured. If you open WhatsApp, email, Instagram, or LinkedIn, you send the message yourself, and those services have their own privacy rules. The business email is ${site.email}.`,
      hi: `पूछताछ फ़ॉर्म जवाब ब्राउज़र में जाँचता है और संदेश बनाता है। वह संदेश सर्वर पर नहीं जाता, क्योंकि ईमेल रिले सेट नहीं है। WhatsApp, ईमेल, Instagram या LinkedIn खोलने पर संदेश आप खुद भेजते हैं, और उन सेवाओं के अपने गोपनीयता नियम हैं। व्यापारिक ईमेल ${site.email} है।`,
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.personName,
  alternateName: [site.name, site.handle, "Odin Calm"],
  jobTitle: "Web and Android Developer",
  email: `mailto:${site.email}`,
  telephone: "+91-9034951794",
  url: `${site.productionOrigin}/`,
  sameAs: [site.linkedinUrl, site.instagramUrl, site.githubUrl, site.whatsappUrl],
};
