export function roundOffString(number: string, offset: number) {
  return Number(number).toFixed(offset);
}

export function formatNumber(number: number, toFixed = 2) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(toFixed) + "B";
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(toFixed) + "M";
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(toFixed) + "K";
  } else {
    return number.toString();
  }
}

type Data = {
  [key: string]: object;
};

export function formatMarketData(data: Data): object[] {
  return Object.keys(data).map<object>((k) => {
    return { ...data[k], date: k.split("-").reverse().splice(0, 2).join("-") };
  });
}
