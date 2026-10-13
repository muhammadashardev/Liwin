export const clientProjectInfo = {
  clientName: 'Boda Piroska',
  websiteUrl: 'https://liwin.hu',
  platform: 'WordPress + WooCommerce',
  objective: 'Initial Technical Overhaul + Long-Term Maintenance',
  status: 'Audit Completed - Ready for Implementation',
};

export const auditMetrics = [
  { label: 'Mobile PageSpeed', current: 48, target: 92, unit: '/100', status: 'critical' },
  { label: 'Desktop PageSpeed', current: 63, target: 96, unit: '/100', status: 'warning' },
  { label: 'Time to First Byte (TTFB)', current: '1.42s', target: '<0.4s', status: 'critical' },
  { label: 'Total Page Weight', current: '5.8 MB', target: '<1.6 MB', status: 'warning' },
  { label: 'Core Web Vitals (LCP)', current: '4.1s', target: '1.8s', status: 'critical' },
  { label: 'PHP & DB Queries', current: '168 queries', target: '<45 queries', status: 'warning' },
];

export const auditPhases = [
  {
    phase: 'Phase 1: Initial Technical Upgrade',
    subtitle: 'Alapvető technikai rendbetétel és biztonság',
    items: [
      { id: '1.1', title: 'WooCommerce & WordPress Core Frissítés', desc: 'Biztonsági mentés után kompatibilis verzióra emelés.', done: true },
      { id: '1.2', title: 'Bővítmény (Plugin) Audit & Tisztítás', desc: 'Elavult, duplikált és lassító pluginok cseréje.', done: true },
      { id: '1.3', title: 'Képtömörítés & WebP Konverzió', desc: 'Termékképek optimalizálása 70%-os méretcsökkenéssel.', done: false },
      { id: '1.4', title: 'Redis Objektum Cache & CDN Bekötés', desc: 'TTFB és szerver válaszidő drasztikus lecsökkentése.', done: false },
      { id: '1.5', title: 'Pénztár (Checkout) Folyamat Fixálás', desc: 'Kosár elhagyási arány csökkentése, zökkenőmentes Barion fizetés.', done: false },
    ]
  },
  {
    phase: 'Phase 2: Hosszútávú Karbantartás (Long-Term)',
    subtitle: 'Stabilitás, havi monitorozás és hibajavítás',
    items: [
      { id: '2.1', title: 'Heti Automata Biztonsági Mentések (Offsite)', desc: 'Napi adatbázis és heti teljes fájlmentés külső felhőbe.', done: false },
      { id: '2.2', title: 'Staging Környezet Frissítési Tesztekhez', desc: 'Éles oldal védelme, tesztelés leállás nélkül.', done: false },
      { id: '2.3', title: 'Uptime & Sebesség 24/7 Monitorozás', desc: 'Azonnali értesítés szerverleállás vagy lassulás esetén.', done: false },
      { id: '2.4', title: 'Havi Karbantartási Jelentés & Órakeret', desc: 'Átlátható fejlesztési támogatás és gyors reagálás.', done: false }
    ]
  },
  {
    phase: 'Phase 3: Kommunikáció & Megbízhatóság',
    subtitle: 'Munkaidős elérhetőség, hivatalos számlázás',
    items: [
      { id: '3.1', title: 'Munkaidős Gyors Reakcióidő (SLA < 2 óra)', desc: 'Közvetlen kapcsolat, sürgős hibaelhárítás prioritással.', done: false },
      { id: '3.2', title: 'Hivatalos Számlaképesség', desc: 'Magyar jogszabályoknak megfelelő vállalkozói számlaadás.', done: true },
      { id: '3.3', title: 'WooCommerce Szakmai Tapasztalat & Referenciák', desc: 'Többéves webshop fejlesztői háttér, referenciákkal.', done: true }
    ]
  }
];

export const uiImprovements = [
  {
    area: 'Header & Navigáció',
    currentIssue: 'Nem látható egyértelműen a kosárérték és a mobil menü nehézkes.',
    solution: 'Letisztult sticky fejléc, élő kosár számláló és gyorskereső.'
  },
  {
    area: 'Termékkártyák',
    currentIssue: 'Inkonzisztens gombok, hiányzó diétás címkék (pl. gluténmentes, keto).',
    solution: 'Egységesített kártyák, tápérték gyorsnézet és azonnali kosárba gomb.'
  },
  {
    area: 'Termékoldal (PDP)',
    currentIssue: 'Tápértékek és allergének nehezen olvasható bekezdésekben vannak.',
    solution: 'Strukturált táblázat, rost-tartalom kiemelés, adagoló infó.'
  },
  {
    area: 'Pénztár & Fizetés',
    currentIssue: 'Túl sok felesleges mező, hiányos szállítási díj visszajelzés.',
    solution: '1-oldalas egyszerűsített checkout, ingyenes szállítás sávval.'
  }
];
