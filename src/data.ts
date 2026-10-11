export const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const CLINIC = {
  name: "Cabinet Dr. Walid Aouini",
  short: "Dr. Aouini",
  tagline: "The modern dental studio of Tunis",
  address: "Avenue de la République, Centre Urbain Nord",
  city: "1053 Les Berges du Lac, Tunis, Tunisia",
  phone: "+216 71 824 310",
  whatsapp: "+216 71 824 310",
  email: "care@dr-aouini.tn",
  hours: [
    { day: "Monday – Wednesday", time: "09:00 – 18:00" },
    { day: "Thursday", time: "09:00 – 20:30" },
    { day: "Friday – Saturday", time: "09:00 – 18:00" },
    { day: "Sunday", time: "Closed · emergencies by phone" },
  ],
};

export const IMAGES = {
  hero: px(4269268, 1300, 1500),
  gallery: [
    { src: px(5355863, 1200, 800), alt: "Treatment room 01", caption: "Treatment room 01 · Air-polish unit" },
    { src: px(38055774, 1200, 800), alt: "Implant suite", caption: "The implant suite · 3D-guided planning" },
    { src: px(4269277, 1200, 800), alt: "Treatment room 02", caption: "Treatment room 02 · Daylight & soft focus" },
    { src: px(6502543, 1200, 800), alt: "Digital handpieces", caption: "Digitally calibrated handpieces" },
    { src: px(5355920, 1200, 800), alt: "Reception", caption: "Reception & care lounge" },
    { src: px(532786, 1200, 800), alt: "3D scanning corner", caption: "Intraoral 3D scanning corner" },
  ],
  steps: [
    { src: px(5355891, 900, 700), alt: "Friendly first visit at the cabinet" },
    { src: px(6627427, 900, 700), alt: "Dr. Aouini examining a patient" },
    { src: px(6529119, 900, 700), alt: "Comfort-first treatment in progress" },
    { src: px(9788574, 900, 700), alt: "Patient smiling at home" },
  ],
  before: "/images/smile-before.jpg",
  after: "/images/smile-after.jpg",
  doctor: "/images/dr-aouini.jpg",
};

export const NAV_LINKS = [
  { label: "Care", href: "#care" },
  { label: "Results", href: "#results" },
  { label: "Care Menu", href: "#menu" },
  { label: "The Doctor", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export type Service = {
  slug: string;
  name: string;
  time: string;
  minutes: string;
  desc: string;
  /** Longer description for the dedicated service page */
  longDesc: string;
  includes: string[];
  /** What happens step-by-step during this treatment */
  steps?: string[];
  /** Ideal candidates for this treatment */
  idealFor?: string[];
  note?: string;
  tag?: string;
  /** true = complimentary consultation — shown as "Free" */
  free?: boolean;
};

export type ServiceCategory = {
  id: string;
  label: string;
  blurb: string;
  icon: "sparkle" | "gem" | "screw" | "family";
  services: Service[];
};

export const CATEGORIES: ServiceCategory[] = [
  {
    id: "clean",
    label: "Clean & Prevent",
    blurb: "Air-polish precision cleaning, gum therapy and routine care that keeps enamel calm and bright.",
    icon: "sparkle",
    services: [
      {
        slug: "first-visit",
        name: "First Visit",
        time: "Complimentary",
        minutes: "45-minute",
        desc: "A full oral assessment with digital X-rays and an intraoral 3D scan — no pressure, just a clear picture.",
        longDesc: "Your first visit at the cabinet is designed to feel like a conversation, not a checklist. We start with a relaxed chat about your goals, your dental history and anything that's been on your mind. Then comes the clinical picture: a full oral assessment with digital X-rays and an intraoral 3D scan that gives both you and the surgeon a precise, shared view of your mouth. You leave with a personalised prevention plan and a fixed written quotation — no commitment, no pressure, just clarity.",
        includes: ["Complete oral health assessment & photos", "Digital X-rays + intraoral 3D scan", "Personalised prevention plan — free, no commitment"],
        steps: ["Warm welcome & intake conversation", "Full oral assessment with digital X-rays", "Intraoral 3D scan of your teeth", "Personalised prevention plan delivered"],
        idealFor: ["New patients wanting a complete picture", "Anyone who hasn't seen a dentist in 1+ years", "Patients seeking a second opinion", "Expats looking for a bilingual dentist in Tunis"],
        note: "For new patients · complimentary · no obligation",
        free: true,
      },
      {
        slug: "airpolish",
        name: "AirPolish",
        time: "Professional air cleaning",
        minutes: "60-minute",
        desc: "Air-polish water-air cleaning that lifts plaque, tartar and surface stains without harsh scraping.",
        longDesc: "AirPolish is the gentle, modern way to clean teeth — no scraping, no harsh ultrasonic tools. A fine jet of warm water, air and powder sweeps across every surface, lifting plaque, tartar and stubborn stains from coffee, tea or tobacco in a single session. The result is teeth that feel genuinely lighter and smoother, with enamel polished and protected by a fluoride sealant. Most patients describe it as the best cleaning they've ever had.",
        includes: ["Air-polish cleaning above & below the gum line", "Removal of surface stains (coffee, tea, tobacco)", "Fluoride sealant polish included"],
        steps: ["Plaque-revealing rinse & oral health check", "Air-polish cleaning — gentle water-air jet", "Fluoride sealant polish for strength", "Before/after shade comparison"],
        idealFor: ["Anyone with surface stains from coffee, tea or tobacco", "Patients who find traditional scraping uncomfortable", "Routine 6-month maintenance", "Preparation before a whitening session"],
      },
      {
        slug: "gum-therapy",
        name: "Gum Therapy",
        time: "Deep cleaning · SRP",
        minutes: "90-minute",
        desc: "For gums that bleed, swell or pocket deeper than 5 mm — clears bacteria below the surface.",
        longDesc: "When gum disease moves below the surface, regular cleaning isn't enough. Scaling and root planing (SRP) — sometimes called deep cleaning — removes bacterial deposits from below the gum line and smooths the root surfaces so your gums can reattach and heal. It's done under local anaesthesia, quadrant by quadrant, and is the most effective non-surgical treatment for early to moderate periodontal disease. A follow-up visit at 6 weeks confirms the healing.",
        includes: ["Full periodontal charting + X-rays", "Scaling & root planing, all four quadrants", "Re-check visit included at 6 weeks"],
        steps: ["Full periodontal charting & measurements", "Local anaesthesia for comfort", "Scaling & root planing below the gum line", "6-week follow-up to confirm healing"],
        idealFor: ["Gums that bleed when brushing or flossing", "Gum pockets deeper than 5 mm", "Diagnosed early or moderate periodontal disease", "Patients with a family history of gum problems"],
      },
      {
        slug: "childrens-visit",
        name: "Children's Visit",
        time: "Pediatric check-up",
        minutes: "30-minute",
        desc: "Gentle, unhurried dentistry for little patients — fluorides, sealants and fear-free first visits.",
        longDesc: "A child's first dental experience shapes how they feel about the dentist for the rest of their life. That's why every children's visit at the cabinet is unhurried, gentle and designed to feel safe. We count teeth together, apply fluorides or sealants where needed, and make sure every child leaves with a smile and a prize. Digital X-rays are only taken when clinically necessary, and everything is explained to both the child and the parent.",
        includes: ["Gentle exam with digital X-rays if needed", "Fluoride application or sealants", "A prize from the cabinet, always"],
        steps: ["Friendly welcome — the child sets the pace", "Gentle examination of teeth and gums", "Fluoride or sealant application if needed", "A small prize and a sticker chart"],
        idealFor: ["Children from age 2 onwards", "First-ever dental visits", "Routine 6-month check-ups for kids", "Children with dental anxiety"],
      },
    ],
  },
  {
    id: "shine",
    label: "Whiten & Aesthetics",
    blurb: "Studio whitening, porcelain veneers and full smile design — natural results, mapped in 3D first.",
    icon: "gem",
    services: [
      {
        slug: "studio-whitening",
        name: "Studio Whitening",
        time: "LED whitening session",
        minutes: "60-minute",
        desc: "Dentist-supervised in-studio whitening that lifts 3–4 shades safely, sensitivity-managed to you.",
        longDesc: "Studio Whitening at the cabinet is a dentist-supervised LED whitening treatment designed for visible results in a single visit. We begin by mapping your current shade with a VITA guide, then apply a customised gel strength based on your sensitivity profile. The LED activation accelerates the process while you relax in a comfortable chair. Most patients see 3–4 shades of improvement. You leave with a take-home touch-up kit and a personalised maintenance plan.",
        includes: ["Shade mapping before & after (VITA guide)", "Custom sensitivity protocol — multiple gel strengths", "At-home touch-up kit included"],
        steps: ["Shade assessment with VITA colour guide", "Gum protection & gel application", "LED-activated whitening session", "Post-treatment shade comparison & aftercare plan"],
        idealFor: ["Anyone wanting a visibly brighter smile", "Coffee, tea or red wine stains", "Special occasions — weddings, job interviews", "Patients who've tried over-the-counter kits without results"],
        tag: "Most loved",
      },
      {
        slug: "airpolish-shine",
        name: "AirPolish + Shine",
        time: "Clean then whiten",
        minutes: "105-minute",
        desc: "The full duet — a precise air-polish clean followed by a 60-minute whitening session in one visit.",
        longDesc: "This is the full smile reset. We begin with a complete AirPolish cleaning that lifts plaque, tartar and surface stains, giving your teeth the cleanest possible canvas. Then — without leaving the chair — we move into a 60-minute LED whitening session. Cleaning first means the whitening gel works directly on bare enamel, producing brighter, more even results than whitening alone. The session ends with a fluoride sealant polish and a take-home kit.",
        includes: ["Air-polish cleaning (up to 3 shades brighter before whitening)", "60-minute LED whitening session", "Fluoride sealant polish + take-home kit"],
        steps: ["AirPolish cleaning — gentle water-air jet", "Shade assessment before whitening", "LED-activated whitening session (60 min)", "Fluoride sealant + take-home kit"],
        idealFor: ["Anyone wanting the deepest clean + brightest result in one visit", "Patients who haven't had a professional cleaning recently", "Pre-wedding or pre-event smile prep", "Those who want to combine maintenance and aesthetics"],
      },
      {
        slug: "porcelain-veneer",
        name: "Porcelain Veneer",
        time: "Per tooth · 2 visits",
        minutes: "2 sessions",
        desc: "Ultra-thin, hand-finished ceramic veneers designed digitally so you approve the smile before we begin.",
        longDesc: "Porcelain veneers are the gold standard for smile transformation — ultra-thin shells of feldspathic ceramic bonded to the front of your teeth. At the cabinet, every veneer case starts with a digital smile preview: a 3D mock-up of your future smile on your own scan. You approve the design before any tooth is touched. The veneers are then hand-finished by a master ceramist, shade-matched to your neighbouring teeth, and bonded with a 10-year craftsmanship warranty.",
        includes: ["Digital smile preview — you approve the design first", "Ultra-thin feldspathic porcelain, CE-certified", "10-year craftsmanship warranty"],
        steps: ["Digital smile preview on your own 3D scan", "Tooth preparation — minimal, guided by the approved design", "Temporary veneers while the lab hand-builds yours", "Final fitting, shade check and bonding"],
        idealFor: ["Chipped, cracked or worn front teeth", "Gaps between teeth (diastema)", "Intrinsic stains that whitening can't fix", "Anyone wanting a natural-looking smile upgrade"],
      },
      {
        slug: "smile-design",
        name: "Smile Design",
        time: "3D smile preview",
        minutes: "45-minute",
        desc: "A 3D mock-up of your future smile on your own scan. Walk in with a photo of where you want to end up.",
        longDesc: "Smile Design is a complimentary consultation where we show you exactly what your new smile could look like — before you commit to anything. Using an intraoral 3D scan of your current teeth, we create a digital mock-up that overlays the proposed changes onto your own mouth. You can compare shades, shapes and proportions in real time. Bring a photo of a smile you admire and we'll map it onto your scan. The result is a shared visual plan and a written quotation.",
        includes: ["Intraoral 3D scan + shade analysis", "Digital mock-up of your new smile", "Fixed quotation at the visit — no surprises"],
        steps: ["Intraoral 3D scan of your current teeth", "Discussion of your goals — bring inspiration photos", "Digital mock-up overlaid on your scan", "Written quotation for the approved plan"],
        idealFor: ["Anyone curious about veneers, bonding or orthodontics", "Patients who want to see results before committing", "Those exploring multiple treatment options", "Wedding or event preparation planning"],
        free: true,
      },
    ],
  },
  {
    id: "restore",
    label: "Implants & Prosthetics",
    blurb: "3D-guided implantology and fixed prosthetics — surgical precision with a boutique level of calm.",
    icon: "screw",
    services: [
      {
        slug: "implant-consultation",
        name: "Implant Consultation",
        time: "3D CBCT scan included",
        minutes: "60-minute",
        desc: "A full digital implant work-up: 3D CT scan, bone analysis and a fixed price before any decision.",
        longDesc: "This complimentary consultation is the first step for anyone considering a dental implant. We take a 3D CBCT scan that shows bone volume, density and nerve positions in three dimensions. Dr. Aouini reviews the scan with you on screen, simulates the surgical guide, and delivers a written quotation that covers every stage — implant, abutment and crown. No surprises, no pressure. You leave with a complete picture of what's possible and exactly what it involves.",
        includes: ["3D CBCT scan & volumetric bone analysis", "Surgical guide simulation", "Fixed quotation at the visit, installments available"],
        steps: ["3D CBCT scan — the full picture of your jawbone", "Bone volume & density analysis with Dr. Aouini", "Surgical guide simulation on screen", "Written quotation for the complete implant journey"],
        idealFor: ["Anyone missing one or more teeth", "Patients told they need a bridge but prefer a fixed solution", "Those exploring implant options for the first time", "Patients with dentures looking for a permanent alternative"],
        free: true,
      },
      {
        slug: "full-implant",
        name: "Full Implant",
        time: "Titanium + porcelain crown",
        minutes: "3 visits",
        desc: "Swiss and CE-certified titanium implant with a hand-built porcelain crown — placed under 3D guidance.",
        longDesc: "A full implant replaces a missing tooth from root to crown. The titanium fixture is placed into the jawbone under local anaesthesia using a 3D surgical guide for precision. After a healing period where the implant integrates with the bone, a custom abutment and hand-built porcelain crown are fitted. The result looks, feels and functions like a natural tooth. Every implant comes with a 10-year warranty on the fixture and the crown.",
        includes: ["3D-guided placement, local anaesthesia", "Premium titanium implant + abutment", "Hand-built porcelain crown · 10-year warranty"],
        steps: ["Implant placement under 3D guidance (Visit 1)", "Healing period — osseointegration (8–12 weeks)", "Abutment impression & shade matching (Visit 2)", "Final crown fitting & bite check (Visit 3)"],
        idealFor: ["Single missing teeth", "Multiple missing teeth (individual implants)", "Patients who want a permanent, fixed solution", "Those with adequate jawbone volume"],
        tag: "Signature",
      },
      {
        slug: "crowns-bridges",
        name: "Crowns & Bridges",
        time: "Per unit · CAD/CAM",
        minutes: "2 visits",
        desc: "Digital crowns milled to the micron — no messy impressions, no temporary surprises.",
        longDesc: "Crowns and bridges at the cabinet are designed digitally and milled with CAD/CAM precision. We start with a goop-free digital impression — an intraoral scan that captures every detail of your preparation. The crown is then designed to match the shape, shade and bite of your neighbouring teeth. Layered or monolithic ceramic is chosen based on the position and aesthetic demands. The result is a restoration that fits perfectly and lasts for years.",
        includes: ["Digital impression, goop-free", "CAD/CAM milled or layered ceramic", "Shade-matched to neighbouring teeth"],
        steps: ["Digital intraoral scan — no messy putty", "CAD design of your crown or bridge", "Milling & hand-finishing by the ceramist", "Fitting, shade verification and bite adjustment"],
        idealFor: ["Broken or heavily decayed teeth", "Old metal crowns that need replacing", "Teeth after root canal treatment", "Bridges to replace one or two adjacent missing teeth"],
      },
      {
        slug: "night-guard",
        name: "Night Guard",
        time: "Custom 3D-scan guard",
        minutes: "30-minute scan",
        desc: "For clenching and grinding — a breathable custom guard that eases tension and protects your enamel.",
        longDesc: "Bruxism — grinding and clenching — quietly damages teeth, jaw joints and sleep quality. The Night Guard is a custom-fitted occlusal guard made from a goop-free 3D digital scan of your teeth. It's designed to be breathable, comfortable and easy to clean, with a 45-night fit guarantee. Most patients notice reduced jaw tension within the first week and better sleep within the first month.",
        includes: ["Goop-free 3D digital scan", "Custom-fit, all-night comfort", "45-night fit guarantee"],
        steps: ["Quick 3D scan of your teeth (goop-free)", "Digital design of your custom guard", "Fitting appointment — adjustments if needed", "45-night trial — we adjust until it's perfect"],
        idealFor: ["Jaw clenching or teeth grinding (bruxism)", "Morning headaches or jaw pain", "Worn or chipped teeth from grinding", "Patients with dental work to protect"],
      },
    ],
  },
  {
    id: "align",
    label: "Orthodontics & Urgent",
    blurb: "Clear aligner journeys and same-day urgent care — straight teeth without the steel.",
    icon: "family",
    services: [
      {
        slug: "invisalign-consultation",
        name: "Invisalign® Consultation",
        time: "Free 3D scan & exam",
        minutes: "45-minute",
        desc: "A clear-aligner roadmap built for your bite — see your projected finish before you commit.",
        longDesc: "This complimentary consultation is the first step for anyone considering clear aligners. We take a 3D scan of your teeth — no putty impressions — and create a digital simulation that shows how your smile will move, week by week, toward the final result. Dr. Aouini reviews the plan with you, explains the timeline and wear schedule, and delivers a written quotation for the full journey. No commitment required.",
        includes: ["3D scan + full orthodontic exam", "Digital simulation of your final smile", "Transparent total quotation at the visit"],
        steps: ["Full orthodontic exam & bite analysis", "3D scan of your teeth — no putty", "Digital simulation of your treatment journey", "Written quotation & timeline discussion"],
        idealFor: ["Adults wanting straighter teeth without metal braces", "Relapsed orthodontics — teeth that shifted after braces", "Mild to moderate crowding or spacing", "Professionals who need an invisible solution"],
        free: true,
      },
      {
        slug: "clear-aligners",
        name: "Clear Aligners",
        time: "Full journey · 9–18 months",
        minutes: "per case",
        desc: "Ultra-clear, digitally mapped trays with monthly check-ins — most patients finish faster than projected.",
        longDesc: "Clear aligners at the cabinet are a complete orthodontic journey — not a mail-order shortcut. Every set of trays is digitally mapped to your bite and manufactured to medical-grade precision. You wear them 20–22 hours a day, changing to the next set every 1–2 weeks. Monthly check-ins at the cabinet keep the progress on track and allow for mid-course corrections. At the end, retainers hold the result in place. Most patients finish faster than the initial projection.",
        includes: ["Digital mapping + progress tracking", "Monthly check-in visits", "Retainers included at the end"],
        steps: ["3D scan & digital treatment plan", "First set of aligners fitted & wear instructions", "Monthly progress check-ins at the cabinet", "Final refinement & retainer fitting"],
        idealFor: ["Mild to moderate crowding or spacing", "Overbite, underbite or crossbite correction", "Patients who completed orthodontics but had relapse", "Anyone wanting a discreet, removable solution"],
      },
      {
        slug: "same-day-urgent",
        name: "Same-Day Urgent",
        time: "Seen today",
        minutes: "same-day",
        desc: "Broken tooth, lost filling, swelling — call or WhatsApp and we keep an evening chair for you.",
        longDesc: "Dental emergencies don't wait for appointments. That's why the cabinet keeps an evening chair open every day for urgents — broken teeth, lost fillings, sudden swelling or unmanageable pain. Call or WhatsApp during opening hours and you'll be seen the same day. Thursdays we stay open until 20:30. The priority is always pain relief first, definitive treatment second. If a crown or more involved work is needed, we schedule the follow-up before you leave.",
        includes: ["Guaranteed same/next-day slot", "Pain relief while you wait", "Thursdays open until 20:30"],
        steps: ["Call or WhatsApp during opening hours", "Same-day chair — pain relief is the priority", "Assessment & temporary or definitive treatment", "Follow-up scheduled if more work is needed"],
        idealFor: ["Broken, cracked or knocked-out teeth", "Lost fillings or crowns", "Sudden swelling or abscess", "Unmanageable toothache"],
        tag: "24h response",
      },
    ],
  },
];

/** Look up a service by its URL slug across all categories */
export function getServiceBySlug(slug: string) {
  for (const cat of CATEGORIES) {
    const svc = cat.services.find((s) => s.slug === slug);
    if (svc) return { service: svc, category: cat };
  }
  return null;
}

export const REVIEWS = [
  {
    name: "Issam K.",
    role: "Implant patient",
    text: "I would like to warmly thank Dr. Walid Aouini for his exceptional professionalism, expertise and the quality of his care. A serious, meticulous and attentive doctor who inspires complete confidence. I highly recommend him.",
  },
  {
    name: "Ahmed H.",
    role: "2 implants, 2 visits",
    text: "The best dental clinic in Centre Urbain Nord. My implants were done within two appointments, a week apart — I am very satisfied with the results. I do recommend him to you.",
  },
  {
    name: "Mira N.",
    role: "AirPolish + Whitening",
    text: "I spent my life afraid of going to the dentist. Finally I found a calm and understanding clinic. Dr. Walid is very professional, calm — he takes his time. Fini les angoisses.",
  },
  {
    name: "Salma B.",
    role: "Veneers, 4 teeth",
    text: "From the front desk to the chair, everything felt boutique rather than medical. The veneers look completely natural and the quotation was exactly what I was told. No upsell, ever.",
  },
  {
    name: "Léa M.",
    role: "Invisalign, 14 months",
    text: "Dr. Aouini walked me through every option before we decided. Bilingue — I was followed in English the whole journey and the monthly check-ins were never rushed.",
  },
  {
    name: "Youssef T.",
    role: "Urgent visit",
    text: "Called at 15h with a broken molar, I was seen that same evening. Gentle, fast, and the crown was ready days later. The team is kind and the clinic runs like clockwork.",
  },
];

export const COMPARISON = [
  {
    feature: "Quotation",
    us: "Fixed, written quotation at your first visit — no upsells, no surprises at the chair",
    them: "Hidden costs, vague estimates, prices discussed after treatment begins",
  },
  {
    feature: "Booking",
    us: "Book online in seconds — same & next-day slots, Thursday evenings",
    them: "Phone only, months of waiting, strictly 9am–5pm",
  },
  {
    feature: "Care philosophy",
    us: "Comfort-first: explained, consented, unhurried at every step",
    them: "Clinical, routine-focused and often rushed",
  },
  {
    feature: "Technology",
    us: "3D CBCT scanner, intraoral camera, CAD/CAM & air-polish",
    them: "Aged equipment and messy silicone impressions",
  },
  {
    feature: "In-chair comfort",
    us: "Soft light, headphones, eye mask, warm tea — on the house",
    them: "A chair and a bright overhead lamp",
  },
  {
    feature: "Environment",
    us: "Boutique studio in Centre Urbain Nord · FR / AR / EN team",
    them: "Sterile hospital feel, language barriers for expats",
  },
  {
    feature: "Verified reviews",
    us: "5.0 ★ from 83+ verified Google reviews — and counting",
    them: "Mixed experiences, few verifiable reviews",
  },
];

export const FAQS = [
  {
    q: "Do you speak English? I'm a foreign resident in Tunis.",
    a: "Yes — the whole team works fluently in French, Arabic and English. A large part of our patient list is international, from expats in Les Berges du Lac to patients travelling from abroad for implant work. Your records and treatment plan can be written in any of the three languages.",
  },
  {
    q: "How do I know the cost before committing?",
    a: "Every treatment begins with a written quotation you approve before anything starts. For complimentary consultations (first visit, implant consult, smile design, Invisalign consult), there is no charge and no obligation. For all other treatments, the full cost is discussed and agreed in writing at your first appointment — it does not move.",
  },
  {
    q: "Which insurance do you accept?",
    a: "We work with CNAM and all major private insurers in Tunisia (AXA, API, Tunisienne, COTON…). At the end of your visit we hand you a full dossier — certificate, breakdown, receipts — so your reimbursement file takes minutes, not weeks. Most treatments are payable in up to 6 interest-free installments.",
  },
  {
    q: "Does an implant really hurt?",
    a: "Most patients tell us the placement felt calmer than a filling. Implants are placed under local anaesthesia using a 3D surgical guide, which keeps the procedure short and precise. Sedation options are available for anxious patients, and we schedule the crown visit so you are never walking around with a gap longer than necessary.",
  },
  {
    q: "How long do whitening results last?",
    a: "Typically 12 to 24 months, depending on coffee, tea, tobacco and genetics. Every session ends with a personalised maintenance routine and an at-home touch-up kit. We photograph and shade-map your smile before and after, so you can see exactly what you're maintaining.",
  },
  {
    q: "Can I get a same-day appointment if it's urgent?",
    a: "Yes. We keep an evening chair open for urgents — a broken tooth, a lost crown, swelling or pain. Call or WhatsApp us during opening hours and you will be seen the same day; Thursdays we stay open until 20:30. Out of hours, the number is answered by the on-call team.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Your insurance card, a list of any medication you take, and — if you have old X-rays or records from another clinic — bring them along or send them by email. That's it. The first visit, with digital X-rays and a 3D scan, is complimentary for new patients.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes — for larger treatments we split the total into 3 to 6 interest-free monthly installments, agreed in writing before the first appointment. The full cost is quoted at the consultation, and it does not move.",
  },
];

export const STATS = [
  { value: "15+", label: "years of surgical practice" },
  { value: "4,000+", label: "smiles treated at the cabinet" },
  { value: "5.0 ★", label: "83+ verified Google reviews" },
  { value: "3", label: "languages · FR / AR / EN" },
];

export const TRUST_ITEMS = [
  "CNAM & private insurers accepted",
  "5.0 ★ · 83+ Google reviews",
  "3D CBCT & CAD/CAM on site",
  "French · Arabic · English",
  "Same-day urgent chairs",
  "10-year craftsmanship warranty",
  "Interest-free installments",
];