export async function getChartData() {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=BRITANNIA.BSE&apikey=${process.env.api_key}`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200) throw new Error("Cannot get the data.");
      return res.json();
    })
    .catch((err) => {
      console.log(err);
      return { "Monthly Time Series": [] };
    });

  return data;
}

export async function getMarketData() {
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=${process.env.api_key}`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200) throw new Error("Cannot get the data.");
      return res.json();
    })
    .catch((err) => {
      console.log(err);
      return { "Monthly Time Series": [] };
    });

  return data;
}
