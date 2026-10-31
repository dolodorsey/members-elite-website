// Single source for the Member's Elite division map, fixtures and sponsors.
// Prices follow docs/SPORTS-OPERATING-SYSTEM.md (canonical catalog).

export const STORAGE = 'https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics';
export const TOURNAMENT_INTAKE = 'https://forms.thekollectivehospitality.com/f/members-elite/';
export const ticketUrl = id => `https://www.eventbrite.com/e/${id}`;

export const groups = [
  { key: 'leagues', label: 'Leagues', items: ['meb', 'wda', 'atf'] },
  { key: 'train', label: 'Train', items: ['training', 'camps'] },
  { key: 'business', label: 'Management', items: ['management'] },
  { key: 'community', label: 'Community', items: ['playmakers', 'sole-exchange'] },
];

export const divisions = {
  meb: {
    code: 'MEB', name: "Member's Elite Basketball", short: 'Basketball league', href: '/meb', art: 'court', tone: 'meb',
    line: "Men's league nights, multi-court tournaments and the Kings of the Court 5v5 series.",
  },
  wda: {
    code: 'WDA', name: "Women's Dunk Association", short: 'Women’s dunk league', href: '/wda', art: 'rim', tone: 'wda',
    line: 'Above-the-rim women’s competition: dunk league nights and Championship Sunday finals.',
  },
  atf: {
    code: 'ATF', name: 'American Track & Field', short: 'Pro track league', href: '/atf', art: 'track', tone: 'atf',
    line: 'A professional track league launching in 2027.',
  },
  training: {
    code: 'PT', name: 'Personal Training', short: 'Private + small group', href: '/training', art: 'turf', tone: 'training',
    line: 'Private and small-group development with Coach Tae and Coach Justin.',
  },
  camps: {
    code: 'CMP', name: 'Sports Camps', short: 'Camps + combines', href: '/camps', art: 'cones', tone: 'camps',
    line: 'Saturday skills camps, multi-day academies, combine prep and team sessions.',
  },
  management: {
    code: 'MGMT', name: 'Sports Management', short: 'Athlete management', href: '/management', art: 'mgmt', tone: 'management',
    line: 'Career, brand, partnerships, media and business built around the athlete.',
  },
  playmakers: {
    code: 'PSA', name: 'Playmakers Sports Association', short: 'Nonprofit', href: '/playmakers', art: 'plays', tone: 'playmakers',
    line: 'Our sports-based nonprofit, getting more young athletes into organized play.',
  },
  'sole-exchange': {
    code: 'SOLE', name: 'Sole Exchange', short: 'Shoe drive', href: '/sole-exchange', art: 'sole', tone: 'sole',
    line: 'Bring a pair, change a stride. Sneakers donated at our events go to people who need them.',
  },
};

// Live Eventbrite listings (Member's Elite Sports Division, Atlanta).
export const fixtures = [
  { id: '2003872195680', date: '2026-11-20', day: 'Fri', time: '7–11 PM', title: 'Kings of the Court', sub: "Men's 5v5", division: 'meb' },
  { id: '2003872196683', date: '2026-11-21', day: 'Sat', time: '4–8 PM', title: "Women's Dunk League", sub: 'Dunk night', division: 'wda' },
  { id: '2003872197686', date: '2026-11-22', day: 'Sun', time: '4–8 PM', title: 'Championship Sunday', sub: 'MEB + WDA finals', division: 'meb' },
  { id: '2003872198689', date: '2026-12-18', day: 'Fri', time: '7–11 PM', title: 'Kings of the Court', sub: "Men's 5v5", division: 'meb' },
  { id: '2003872200695', date: '2026-12-19', day: 'Sat', time: '4–8 PM', title: "Women's Dunk League", sub: 'Dunk night', division: 'wda' },
  { id: '2003872201698', date: '2026-12-20', day: 'Sun', time: '4–8 PM', title: 'Championship Sunday', sub: 'MEB + WDA finals', division: 'meb' },
];

export const sponsors = [
  { key: 'fenyx', name: 'FĚNYX', what: 'Athletic-lifestyle apparel' },
  { key: 'infinity', name: 'infinity', small: 'water', what: 'Premium bottled water' },
  { key: 'kollective', name: 'The Kollective', what: 'The Kollective Hospitality Group', href: 'https://thekollectivehospitality.com' },
];

export const training = [
  ['Assessment', '$75', 'Start here. A 60-minute baseline with a program recommendation.'],
  ['Private session', '$125', '60 minutes, 1-on-1.'],
  ['Private packs', '$450 / $800 / $1,050', '4, 8 or 12 private sessions.'],
  ['Small group', '$40', '75 minutes of group basketball or football position work.'],
  ['Shooting Lab', '$50', 'Tracked, game-speed shooting reps.'],
  ['Speed + Agility', '$40', 'Acceleration, change of direction, sprint mechanics.'],
  ['Combine Prep', '$75', '40, splits, jumps and testing strategy.'],
  ['Pro Experience', '$175', '90 minutes at professional pace with Coach Tae.'],
];

export const camps = [
  ['Saturday Skills Camp', '$75', '2–3 hours of skills and competition.'],
  ['Elite One-Day Camp', '$149', 'Training, competition and evaluation in one day.'],
  ['Two-Day Elite Camp', '$249', 'Two days of immersive development.'],
  ['Three-Day Elite Academy', '$349', 'Our deepest camp format.'],
  ['Pro Basketball Camp', '$249', 'Led by Coach Tae.'],
  ['Football Elite Camp', '$199', 'Position coaching, testing and competition with Coach Justin.'],
  ['Team Training', '$350', 'Per 90-minute session for schools, AAU and clubs. 4 for $1,200, 8 for $2,200.'],
];

export const memberships = [
  ['Rookie', '$149', '4 group sessions a month'],
  ['Starter', '$249', '8 group sessions + monthly assessment'],
  ['Elite', '$399', '8 group + 2 private, development plan, film review'],
  ['Pro', '$649', '8 group + 4 private, film analysis, recruiting consult'],
];

export function fmtDate(iso) {
  const d = new Date(iso + 'T12:00:00');
  return { mon: d.toLocaleString('en-US', { month: 'short' }), num: d.getDate() };
}

export function upcoming(list = fixtures, now = new Date()) {
  const cutoff = new Date(now.getTime() - 86400000);
  return list.filter(f => new Date(f.date + 'T23:59:00') >= cutoff);
}
