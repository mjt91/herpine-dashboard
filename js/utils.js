const DateTime = luxon.DateTime;

let now = DateTime.now();

const MONTHS = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember'
];

export function months(config) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}

export function newDate(days) {
  return DateTime.now().plus({days}).toJSDate();
}

export function newDateString(days) {
  return DateTime.now().plus({days}).toISO();
}

export function newDateStringDate(days) {
  return DateTime.now().plus({days}).toISODate();
}

export function parseISODate(str) {
  return DateTime.fromISO(str);
}
