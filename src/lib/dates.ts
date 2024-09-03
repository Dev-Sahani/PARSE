export function ddmonthyyyy(date = new Date()) {
  return date.toUTCString().substring(5, 17);
}
