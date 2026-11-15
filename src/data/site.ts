// Source unique des faits du site. Une date, un chiffre ou un partenaire change : on le corrige ICI,
// et toutes les pages suivent. Vérifié le 15/11/2026 contre CONTEXT.md, le dossier DigiMinds,
// l'infopack du 02/11/2026 et le rapport final du TEE.

export const asso = {
  nom: 'TalenceYouth',
  forme: 'Association loi 1901',
  fondation: '27 mars 2025',
  adresse: '16 avenue de Collegno, 33400 Talence',
  siren: '999 431 836',
  oid: 'E10403043',
  email: 'talenceyouth@gmail.com',
  instagram: 'https://www.instagram.com/talenceyouth/',
  instagramNom: '@talenceyouth',
  directeurPublication: 'Walid Taif, président',
  formulaireAdhesion: 'https://forms.gle/zf3CgggujPbg74Qb8',
};

// Subventions Erasmus+ obtenues par TalenceYouth en tant que bénéficiaire
export const subventions = {
  digiminds: 42299,
  tee: 9795,
};
export const totalSubventions = subventions.digiminds + subventions.tee;

export const euros = (n: number) => n.toLocaleString('fr-FR').replace(/ /g, ' ') + ' €';
export const eurosEn = (n: number) => '€' + n.toLocaleString('en-GB');

export const digiminds = {
  nom: 'DigiMinds',
  titreComplet: 'Digital Minds: Youth Critical Thinking in the AI Era',
  action: 'Échange de jeunes Erasmus+ (KA152)',
  reference: '2026-1-FR02-KA152-YOU-000393475',
  dates: 'du 19 au 28 juillet 2027',
  datesCourtes: '19-28 juillet 2027',
  datesEn: '19 to 28 July 2027',
  jours: 10,
  lieu: "l'auberge de jeunesse HI de Blanquefort, juste au nord de Bordeaux",
  personnes: 36,
  participants: 30,
  chefsDeGroupe: 5,
  pays: 5,
  groupeFrancais: { jeunes: 6, chefDeGroupe: 1, animateur: 1, moinsOpportunites: 3 },
  age: '18 à 30 ans le 19 juillet 2027',
  listeFinale: '31 mai 2027',
  preparation: '21 juin 2027',
  formulaire: 'https://forms.gle/vEW5cAo3G74SbMmo7',
};

export const tee = {
  nom: 'Talence-Europe Express',
  action: 'DiscoverEU Inclusion, Erasmus+ (KA155)',
  reference: '2026-1-FR02-KA155-YOU-000393540',
  dates: 'du 10 au 20 août 2026',
  jours: 11,
  jeunes: 5,
  accompagnateurs: 2,
  pays: 4,
};

export const actForInclusion = {
  nom: 'Act for Inclusion: Empathy on Stage',
  quand: 'juillet 2027',
  coordinateur: 'BİLSEM Denizli (Turquie)',
};

// Partenaires actuels, par pays (la Géorgie s'est retirée le 14/10/2026)
export const partenaires = [
  { pays: 'Italie', country: 'Italy', nom: 'Associazione SINGA', ville: 'Corigliano-Rossano, Calabre', city: 'Corigliano-Rossano, Calabria', projet: 'DigiMinds' },
  { pays: 'Italie', country: 'Italy', nom: "L'isola che c'è", ville: '', city: '', projet: 'Act for Inclusion' },
  { pays: 'Turquie', country: 'Türkiye', nom: 'Antalya Erasmus Sports Club', ville: 'Antalya', city: 'Antalya', projet: 'DigiMinds' },
  { pays: 'Turquie', country: 'Türkiye', nom: 'BİLSEM Denizli', ville: 'Denizli', city: 'Denizli', projet: 'Act for Inclusion (coordinateur)' },
  { pays: 'Turquie', country: 'Türkiye', nom: 'Yunus Emre Gençlik Merkezi', ville: 'Tunceli', city: 'Tunceli', projet: 'Act for Inclusion' },
  { pays: 'Pologne', country: 'Poland', nom: 'Stowarzyszenie ŻYJ KOLOROWO!', ville: 'Wrocław', city: 'Wrocław', projet: 'DigiMinds' },
  { pays: 'Lituanie', country: 'Lithuania', nom: 'Linkuva Youth & Children Centre', ville: 'Linkuva', city: 'Linkuva', projet: 'DigiMinds' },
];
export const nombrePaysPartenaires = 5; // France comprise

// Clause de l'article 17.3 des conventions, texte exact (ne pas reformuler)
export const clauseUE = {
  fr: "Financé par l'Union européenne. Les vues et opinions exprimées n'engagent que leur(s) auteur(s) et ne reflètent pas nécessairement celles de l'Union européenne ou de l'Agence du Service Civique (Agence Erasmus+ France Jeunesse & Sport). Ni l'Union européenne ni l'autorité chargée de l'octroi ne peuvent en être tenues pour responsables.",
  en: 'Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the Agence du Service Civique (Agence Erasmus+ France Jeunesse & Sport). Neither the European Union nor the granting authority can be held responsible for them.',
};

// Bureau : cinq bénévoles, présentés sans photo (choix du 15/11/2026)
export const bureau = [
  { nom: 'Walid Taif', role: 'Président et fondateur', bio: "Étudiant-entrepreneur, en master de commerce international. Il a fait plus de 10 projets Erasmus+ et il est parti avec DiscoverEU.", langues: 'français, italien, anglais, espagnol, arabe (darija)' },
  { nom: 'Morad Litim', role: 'Vice-président, audiovisuel', bio: "Master en sciences de l'éducation, futur enseignant. C'est lui qui filme les projets et en fait des vidéos.", langues: 'français, italien, anglais, arabe (darija)' },
  { nom: 'Abdel-Aziz Hamdani', role: 'Trésorier', bio: "Licence informatique, boxeur amateur depuis 15 ans. Il tient les comptes de l'asso.", langues: 'français, anglais, espagnol, arabe (tunisien)' },
  { nom: 'Pablo Lissa', role: 'Secrétaire', bio: "Master administration publique. Il écrit les candidatures Erasmus+ (KA1), formé chez Wipsee et à la Maison européenne des Landes.", langues: 'français, anglais, espagnol, italien' },
  { nom: 'Sohaïb Benchrif', role: 'Secrétaire adjoint, coordination', bio: 'Il coordonne, communique et accompagne les jeunes qui candidatent aux mobilités.', langues: 'français, anglais, espagnol, arabe (darija)' },
];
