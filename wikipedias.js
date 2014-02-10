// IRC rooms are of the form #lang.wikipedia
// the list of languages is here:
// http://meta.wikimedia.org/wiki/List_of_Wikipedias#All_Wikipedias_ordered_by_number_of_articles
// http://meta.wikimedia.org/wiki/List_of_Wikipedias#1_000_000.2B_articles
var millionPlusLanguages = {
  en: true,
  de: true,
  nl: true,
  fr: true,
  it: true,
  es: true,
  ru: true
};

// http://meta.wikimedia.org/wiki/List_of_Wikipedias#100_000.2B_articles
var oneHundredThousandPlusLanguages = {
  sv: true,
  pl: true,
  ja: true,
  pt: true,
  zh: true,
  vi: true,
  uk: true,
  ca: true,
  no: true,
  war: true,
  ceb: true,
  fi: true,
  fa: true,
  cs: true,
  hu: true,
  ko: true,
  ar: true,
  ro: true,
  ms: true,
  tr: true,
  id: true,
  kk: true,
  sr: true,
  sk: true,
  eo: true,
  da: true,
  lt: true,
  eu: true,
  bg: true,
  he: true,
  hr: true,
  sl: true,
  uz: true,
  vo: true,
  et: true,
  hi: true,
  nn: true,
  gl: true
};

var tenThousandPlusLanguages = {
  simple: true,
  az: true,
  la: true,
  el: true,
  sh: true,
  th: true,
  ka: true,
  mk: true,
  oc: true,
  new: true,
  pms: true,
  tl: true,
  be: true,
  ta: true,
  ht: true,
  te: true,
  'be-x-old': true,
  cy: true,
  lv: true,
  bs: true,
  br: true,
  sq: true,
  hy: true,
  tt: true,
  jv: true,
  mg: true,
  mr: true,
  lb: true,
  is: true,
  my: true,
  ml: true,
  yo: true,
  ba: true,
  an: true,
  lmo: true,
  af: true,
  fy: true,
  pnb: true,
  bn: true,
  sw: true,
  bpy: true,
  io: true,
  ky: true,
  ur: true,
  ne: true,
  scn: true,
  'zh-yue': true,
  gu: true,
  nds: true,
  ga: true,
  ku: true,
  ast: true,
  qu: true,
  su: true,
  cv: true,
  sco: true,
  als: true,
  ia: true,
  nap: true,
  bug: true,
  'bat-smg': true,
  kn: true,
  'map-bms': true,
  wa: true,
  am: true,
  ckb: true,
  gd: true,
  hif: true,
  'zh-min-nan': true,
  tg: true,
  arz: true,
  mzn: true,
  yi: true,
  vec: true
};

var thousandPlusLanguages = {
  mn: true,
  nah: true,
  'roa-tara': true,
  sah: true,
  sa: true,
  os: true,
  pam: true,
  hsb: true,
  si: true,
  se: true,
  bar: true,
  li: true,
  mi: true,
  co: true,
  gan: true,
  fo: true,
  ilo: true,
  pa: true,
  bo: true,
  glk: true,
  rue: true,
  bcl: true,
  'fiu-vro': true,
  mrj: true,
  'nds-nl': true,
  tk: true,
  ps: true,
  vls: true,
  xmf: true,
  gv: true,
  diq: true,
  or: true,
  kv: true,
  pag: true,
  km: true,
  zea: true,
  dv: true,
  nrm: true,
  mhr: true,
  rm: true,
  koi: true,
  udm: true,
  csb: true,
  frr: true,
  vep: true,
  lad: true,
  lij: true,
  wuu: true,
  fur: true,
  'zh-classical': true,
  ug: true,
  sc: true,
  stq: true,
  ay: true,
  mt: true,
  pi: true,
  so: true,
  bh: true,
  ksh: true,
  nov: true,
  hak: true,
  ang: true,
  kw: true,
  pcd: true,
  nv: true,
  gn: true,
  ext: true,
  frp: true,
  as: true,
  szl: true,
  gag: true,
  eml: true,
  ie: true,
  ln: true,
  ace: true,
  ce: true,
  pfl: true,
  krc: true,
  xal: true,
  haw: true,
  pdc: true,
  rw: true,
  crh: true,
  to: true,
  dsb: true,
  kl: true,
  arc: true,
  myv: true,
  kab: true,
  lez: true,
  bjn: true,
  sn: true,
  pap: true,
  tpi: true,
  lbe: true,
  wo: true,
  jbo: true,
  mdf: true,
  'cbk-zam': true,
  av: true,
  kbd: true,
  srn: true,
  mwl: true
};

var hundredPlusLanguages = {
  ty: true,
  lo: true,
  ab: true,
  tet: true,
  kg: true,
  ltg: true,
  na: true,
  ig: true,
  bxr: true,
  nso: true,
  za: true,
  kaa: true,
  zu: true,
  chy: true,
  rmy: true,
  'roa-rup': true,
  cu: true,
  tn: true,
  chr: true,
  bi: true,
  cdo: true,
  got: true,
  sm: true,
  mo: true,
  bm: true,
  iu: true,
  pih: true,
  pnt: true,
  sd: true,
  ss: true,
  ki: true,
  ee: true,
  ha: true,
  om: true,
  fj: true,
  ti: true,
  ts: true,
  ks: true,
  ve: true,
  sg: true,
  rn: true,
  st: true,
  dz: true,
  ak: true,
  cr: true,
  tum: true,
  lg: true,
  ik: true,
  ff: true,
  ny: true,
  tw: true,
  ch: true,
  xh: true
};

var tenPlusLanguages = {
  ng: true,
  ii: true,
  cho: true,
  mh: true
};

var onePlusLanguages = {
  aa: true,
  kj: true,
  ho: true,
  mus: true,
  kr: true
};

var zeroLanguages = {
  hz: true
};

var reallyLongTailWikipedias = {};
var smallerLanguageWikipedias = [].concat(
    tenThousandPlusLanguages,
    thousandPlusLanguages,
    hundredPlusLanguages,
    tenPlusLanguages,
    onePlusLanguages,
    zeroLanguages);
smallerLanguageWikipedias.forEach(function(smallerLanguageWikipedia) {
  for (var language in smallerLanguageWikipedia) {
    reallyLongTailWikipedias[language] = smallerLanguageWikipedia[language];
  }
});

var wikidata = {
  wikidata: true
};

module.exports = {
  millionPlusLanguages: millionPlusLanguages,
  oneHundredThousandPlusLanguages: oneHundredThousandPlusLanguages,
  reallyLongTailWikipedias: reallyLongTailWikipedias,
  wikidata: wikidata
};