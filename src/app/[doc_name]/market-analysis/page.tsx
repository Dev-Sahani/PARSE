import { getChartData, getMarketData } from "@/app/api/market-analysis";
import NumberCard from "@/components/ui/NumberCard";
import { formatMarketData } from "@/lib/typeConvertion";
import { TableComponent } from "@/components/ui/TableComponent";

export default function MarketAnalysis({}) {
  return (
    <div className="flex flex-col gap-8">
      <InitialInfo />
      <StockGraph />
      <Table />
    </div>
  );
}

function InitialInfo() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">Market Analysis</h3>
      <div className="flex justify-between gap-6">
        <NumberCard
          title="Profit Predicted"
          number={4563410}
          percentage={89}
          type="currency"
        />
        <NumberCard
          title="Market Cap"
          number={154654398}
          percentage={89}
          type="currency"
        />
        <NumberCard
          title="Income"
          number={"9.8332 M"}
          percentage={89}
          type="currency"
        />
      </div>
    </div>
  );
}

import Header from "@/components/Header";
import LineCharts from "@/components/graphs/LineCharts";
import { MARKET_TABLE } from "@/lib/constants";

async function StockGraph() {
  // const data = (await getChartData()) as any;
  const data = {
    "Meta Data": {
      "1. Information": "Monthly Prices (open, high, low, close) and Volumes",
      "2. Symbol": "IBM",
      "3. Last Refreshed": "2024-08-30",
      "4. Time Zone": "US/Eastern",
    },
    "Monthly Time Series": {
      "2024-08-30": {
        "1. open": "192.8100",
        "2. high": "202.1700",
        "3. low": "181.8100",
        "4. close": "202.1300",
        "5. volume": "65453729",
      },
      "2024-07-31": {
        "1. open": "173.4500",
        "2. high": "196.2600",
        "3. low": "173.3800",
        "4. close": "192.1400",
        "5. volume": "81258646",
      },
      "2024-06-28": {
        "1. open": "166.5400",
        "2. high": "178.4599",
        "3. low": "163.5300",
        "4. close": "172.9500",
        "5. volume": "70706301",
      },
      "2024-05-31": {
        "1. open": "165.6900",
        "2. high": "175.4600",
        "3. low": "162.6200",
        "4. close": "166.8500",
        "5. volume": "78620355",
      },
      "2024-04-30": {
        "1. open": "190.0000",
        "2. high": "193.2800",
        "3. low": "165.2605",
        "4. close": "166.2000",
        "5. volume": "98297181",
      },
      "2024-03-28": {
        "1. open": "185.4900",
        "2. high": "199.1800",
        "3. low": "185.1800",
        "4. close": "190.9600",
        "5. volume": "99921776",
      },
      "2024-02-29": {
        "1. open": "183.6300",
        "2. high": "188.9500",
        "3. low": "178.7500",
        "4. close": "185.0300",
        "5. volume": "88679550",
      },
      "2024-01-31": {
        "1. open": "162.8300",
        "2. high": "196.9000",
        "3. low": "157.8850",
        "4. close": "183.6600",
        "5. volume": "128121557",
      },
      "2023-12-29": {
        "1. open": "158.4100",
        "2. high": "166.3400",
        "3. low": "158.0000",
        "4. close": "163.5500",
        "5. volume": "87358302",
      },
      "2023-11-30": {
        "1. open": "145.0000",
        "2. high": "158.6000",
        "3. low": "144.4500",
        "4. close": "158.5600",
        "5. volume": "78460252",
      },
      "2023-10-31": {
        "1. open": "140.0400",
        "2. high": "144.7600",
        "3. low": "135.8700",
        "4. close": "144.6400",
        "5. volume": "94386980",
      },
      "2023-09-29": {
        "1. open": "147.2600",
        "2. high": "151.9299",
        "3. low": "139.6100",
        "4. close": "140.3000",
        "5. volume": "82806487",
      },
      "2023-08-31": {
        "1. open": "144.2500",
        "2. high": "147.7275",
        "3. low": "139.7600",
        "4. close": "146.8300",
        "5. volume": "84274205",
      },
      "2023-07-31": {
        "1. open": "133.4200",
        "2. high": "144.6050",
        "3. low": "131.5500",
        "4. close": "144.1800",
        "5. volume": "85778938",
      },
      "2023-06-30": {
        "1. open": "128.4400",
        "2. high": "139.4690",
        "3. low": "127.7800",
        "4. close": "133.8100",
        "5. volume": "100722016",
      },
      "2023-05-31": {
        "1. open": "126.3500",
        "2. high": "130.0699",
        "3. low": "120.5500",
        "4. close": "128.5900",
        "5. volume": "95710890",
      },
      "2023-04-28": {
        "1. open": "130.9700",
        "2. high": "132.6100",
        "3. low": "124.5600",
        "4. close": "126.4100",
        "5. volume": "83664114",
      },
      "2023-03-31": {
        "1. open": "128.9000",
        "2. high": "131.4800",
        "3. low": "121.7100",
        "4. close": "131.0900",
        "5. volume": "138093084",
      },
      "2023-02-28": {
        "1. open": "134.4900",
        "2. high": "137.3900",
        "3. low": "128.8600",
        "4. close": "129.3000",
        "5. volume": "76080679",
      },
      "2023-01-31": {
        "1. open": "141.1000",
        "2. high": "147.1800",
        "3. low": "132.9800",
        "4. close": "134.7300",
        "5. volume": "105576019",
      },
      "2022-12-30": {
        "1. open": "149.9800",
        "2. high": "153.2100",
        "3. low": "137.1950",
        "4. close": "140.8900",
        "5. volume": "86426226",
      },
      "2022-11-30": {
        "1. open": "138.2500",
        "2. high": "150.4600",
        "3. low": "133.9700",
        "4. close": "148.9000",
        "5. volume": "93620235",
      },
      "2022-10-31": {
        "1. open": "120.1600",
        "2. high": "138.8615",
        "3. low": "115.5450",
        "4. close": "138.2900",
        "5. volume": "113480787",
      },
      "2022-09-30": {
        "1. open": "128.4000",
        "2. high": "130.9900",
        "3. low": "118.6100",
        "4. close": "118.8100",
        "5. volume": "87256958",
      },
      "2022-08-31": {
        "1. open": "130.7500",
        "2. high": "139.3400",
        "3. low": "128.4000",
        "4. close": "128.4500",
        "5. volume": "77392342",
      },
      "2022-07-29": {
        "1. open": "141.0000",
        "2. high": "141.8700",
        "3. low": "125.1300",
        "4. close": "130.7900",
        "5. volume": "129801061",
      },
      "2022-06-30": {
        "1. open": "139.6700",
        "2. high": "144.7300",
        "3. low": "132.8500",
        "4. close": "141.1900",
        "5. volume": "105815743",
      },
      "2022-05-31": {
        "1. open": "133.0000",
        "2. high": "139.8300",
        "3. low": "125.8000",
        "4. close": "138.8400",
        "5. volume": "113207659",
      },
      "2022-04-29": {
        "1. open": "129.6600",
        "2. high": "141.8800",
        "3. low": "124.9100",
        "4. close": "132.2100",
        "5. volume": "107525264",
      },
      "2022-03-31": {
        "1. open": "122.6700",
        "2. high": "133.0800",
        "3. low": "120.7000",
        "4. close": "130.0200",
        "5. volume": "96447210",
      },
      "2022-02-28": {
        "1. open": "133.7600",
        "2. high": "138.8200",
        "3. low": "118.8100",
        "4. close": "122.5100",
        "5. volume": "98492968",
      },
      "2022-01-31": {
        "1. open": "134.0700",
        "2. high": "142.2000",
        "3. low": "124.1930",
        "4. close": "133.5700",
        "5. volume": "147238382",
      },
      "2021-12-31": {
        "1. open": "118.2500",
        "2. high": "134.9900",
        "3. low": "116.5600",
        "4. close": "133.6600",
        "5. volume": "113930079",
      },
      "2021-11-30": {
        "1. open": "125.0500",
        "2. high": "127.2900",
        "3. low": "114.5600",
        "4. close": "117.1000",
        "5. volume": "119252012",
      },
      "2021-10-29": {
        "1. open": "141.0000",
        "2. high": "146.0000",
        "3. low": "124.6200",
        "4. close": "125.1000",
        "5. volume": "144097758",
      },
      "2021-09-30": {
        "1. open": "139.9800",
        "2. high": "140.5700",
        "3. low": "132.7800",
        "4. close": "138.9300",
        "5. volume": "76644238",
      },
      "2021-08-31": {
        "1. open": "141.4500",
        "2. high": "144.7000",
        "3. low": "137.2100",
        "4. close": "140.3400",
        "5. volume": "69687056",
      },
      "2021-07-30": {
        "1. open": "146.9600",
        "2. high": "147.5000",
        "3. low": "136.2089",
        "4. close": "140.9600",
        "5. volume": "110625907",
      },
      "2021-06-30": {
        "1. open": "145.0000",
        "2. high": "152.8400",
        "3. low": "143.0400",
        "4. close": "146.5900",
        "5. volume": "84365220",
      },
      "2021-05-28": {
        "1. open": "143.8100",
        "2. high": "148.5150",
        "3. low": "140.9200",
        "4. close": "143.7400",
        "5. volume": "98036425",
      },
      "2021-04-30": {
        "1. open": "133.7600",
        "2. high": "148.7400",
        "3. low": "130.3800",
        "4. close": "141.8800",
        "5. volume": "122920494",
      },
      "2021-03-31": {
        "1. open": "120.3500",
        "2. high": "137.0700",
        "3. low": "118.7550",
        "4. close": "133.2600",
        "5. volume": "127967821",
      },
      "2021-02-26": {
        "1. open": "119.9000",
        "2. high": "124.3500",
        "3. low": "118.1200",
        "4. close": "118.9300",
        "5. volume": "106339228",
      },
      "2021-01-29": {
        "1. open": "125.8500",
        "2. high": "132.2400",
        "3. low": "117.3600",
        "4. close": "119.1100",
        "5. volume": "176168962",
      },
      "2020-12-31": {
        "1. open": "123.9000",
        "2. high": "127.6900",
        "3. low": "121.7200",
        "4. close": "125.8800",
        "5. volume": "102587006",
      },
      "2020-11-30": {
        "1. open": "112.6500",
        "2. high": "125.3130",
        "3. low": "111.1600",
        "4. close": "123.5200",
        "5. volume": "103461100",
      },
      "2020-10-30": {
        "1. open": "122.3600",
        "2. high": "135.5000",
        "3. low": "105.9200",
        "4. close": "111.6600",
        "5. volume": "159130911",
      },
      "2020-09-30": {
        "1. open": "122.8500",
        "2. high": "129.9500",
        "3. low": "116.4800",
        "4. close": "121.6700",
        "5. volume": "84510174",
      },
      "2020-08-31": {
        "1. open": "123.5000",
        "2. high": "130.4700",
        "3. low": "122.1500",
        "4. close": "123.3100",
        "5. volume": "74033007",
      },
      "2020-07-31": {
        "1. open": "120.2700",
        "2. high": "132.1700",
        "3. low": "115.2000",
        "4. close": "122.9400",
        "5. volume": "113972765",
      },
      "2020-06-30": {
        "1. open": "124.6400",
        "2. high": "135.8800",
        "3. low": "115.8800",
        "4. close": "120.7700",
        "5. volume": "120931250",
      },
      "2020-05-29": {
        "1. open": "123.1900",
        "2. high": "126.9700",
        "3. low": "111.8100",
        "4. close": "124.9000",
        "5. volume": "92864791",
      },
      "2020-04-30": {
        "1. open": "106.3600",
        "2. high": "129.3100",
        "3. low": "104.5200",
        "4. close": "125.5600",
        "5. volume": "130400316",
      },
      "2020-03-31": {
        "1. open": "130.7500",
        "2. high": "136.1000",
        "3. low": "90.5600",
        "4. close": "110.9300",
        "5. volume": "189585053",
      },
      "2020-02-28": {
        "1. open": "144.2500",
        "2. high": "158.7500",
        "3. low": "126.3600",
        "4. close": "130.1500",
        "5. volume": "118092333",
      },
      "2020-01-31": {
        "1. open": "135.0000",
        "2. high": "145.7900",
        "3. low": "133.2000",
        "4. close": "143.7300",
        "5. volume": "112864967",
      },
      "2019-12-31": {
        "1. open": "134.4500",
        "2. high": "136.4200",
        "3. low": "130.6900",
        "4. close": "134.0400",
        "5. volume": "71661951",
      },
      "2019-11-29": {
        "1. open": "134.5000",
        "2. high": "139.1400",
        "3. low": "132.7500",
        "4. close": "134.4500",
        "5. volume": "64898948",
      },
      "2019-10-31": {
        "1. open": "145.5900",
        "2. high": "147.3500",
        "3. low": "130.9000",
        "4. close": "133.7300",
        "5. volume": "92647927",
      },
      "2019-09-30": {
        "1. open": "134.8500",
        "2. high": "146.5700",
        "3. low": "133.3300",
        "4. close": "145.4200",
        "5. volume": "62083780",
      },
      "2019-08-30": {
        "1. open": "148.9000",
        "2. high": "152.9500",
        "3. low": "128.8300",
        "4. close": "135.5300",
        "5. volume": "96719129",
      },
      "2019-07-31": {
        "1. open": "139.6000",
        "2. high": "151.9400",
        "3. low": "139.1300",
        "4. close": "148.2400",
        "5. volume": "80175943",
      },
      "2019-06-28": {
        "1. open": "127.1000",
        "2. high": "140.1500",
        "3. low": "127.0600",
        "4. close": "137.9000",
        "5. volume": "61342985",
      },
      "2019-05-31": {
        "1. open": "140.5500",
        "2. high": "141.8100",
        "3. low": "126.8500",
        "4. close": "126.9900",
        "5. volume": "75537897",
      },
      "2019-04-30": {
        "1. open": "141.5100",
        "2. high": "145.3900",
        "3. low": "136.2600",
        "4. close": "140.2700",
        "5. volume": "80199229",
      },
      "2019-03-29": {
        "1. open": "139.3100",
        "2. high": "142.1200",
        "3. low": "133.5800",
        "4. close": "141.1000",
        "5. volume": "74688899",
      },
      "2019-02-28": {
        "1. open": "134.9700",
        "2. high": "140.4900",
        "3. low": "132.1200",
        "4. close": "138.1300",
        "5. volume": "68462024",
      },
      "2019-01-31": {
        "1. open": "112.0100",
        "2. high": "135.4100",
        "3. low": "111.6900",
        "4. close": "134.4200",
        "5. volume": "120388583",
      },
      "2018-12-31": {
        "1. open": "125.6700",
        "2. high": "126.5900",
        "3. low": "105.9400",
        "4. close": "113.6700",
        "5. volume": "115600988",
      },
    },
  };

  return (
    <div className="w-full ">
      <Header companyName={data["Meta Data"]["2. Symbol"]} />
      <main className="pt-4 pb-1 border-2 border-secondary">
        <LineCharts
          data={formatMarketData(data["Monthly Time Series"])}
          lineKey="4. close"
          xAxis="date"
        />
      </main>
    </div>
  );
}

async function Table() {
  // const data = await getMarketData();
  const data = {
    Symbol: "IBM",
    AssetType: "Common Stock",
    Name: "International Business Machines",
    Description:
      "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York. IBM produces and sells computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most annual U.S. patents generated by a business (as of 2020) for 28 consecutive years. Inventions by IBM include the automated teller machine (ATM), the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.",
    CIK: "51143",
    Exchange: "NYSE",
    Currency: "USD",
    Country: "USA",
    Sector: "TECHNOLOGY",
    Industry: "COMPUTER & OFFICE EQUIPMENT",
    Address: "1 NEW ORCHARD ROAD, ARMONK, NY, US",
    OfficialSite: "https://www.ibm.com",
    FiscalYearEnd: "December",
    LatestQuarter: "2024-06-30",
    MarketCapitalization: "186191659000",
    EBITDA: "14625000000",
    PERatio: "22.31",
    PEGRatio: "4.163",
    BookValue: "26.08",
    DividendPerShare: "6.65",
    DividendYield: "0.033",
    EPS: "9.06",
    RevenuePerShareTTM: "68.06",
    ProfitMargin: "0.135",
    OperatingMarginTTM: "0.149",
    ReturnOnAssetsTTM: "0.047",
    ReturnOnEquityTTM: "0.362",
    RevenueTTM: "62363001000",
    GrossProfitTTM: "32688000000",
    DilutedEPSTTM: "9.06",
    QuarterlyEarningsGrowthYOY: "0.141",
    QuarterlyRevenueGrowthYOY: "0.019",
    AnalystTargetPrice: "172.31",
    AnalystRatingStrongBuy: "4",
    AnalystRatingBuy: "6",
    AnalystRatingHold: "9",
    AnalystRatingSell: "3",
    AnalystRatingStrongSell: "0",
    TrailingPE: "22.31",
    ForwardPE: "20",
    PriceToSalesRatioTTM: "2.986",
    PriceToBookRatio: "7.75",
    EVToRevenue: "3.726",
    EVToEBITDA: "15.35",
    Beta: "0.705",
    "52WeekHigh": "202.17",
    "52WeekLow": "130.68",
    "50DayMovingAverage": "186.5",
    "200DayMovingAverage": "177.31",
    SharesOutstanding: "921148000",
    DividendDate: "2024-09-10",
    ExDividendDate: "2024-08-09",
  };
  return (
    <div className="w-full flex justify-between gap-12">
      <TableComponent data={data} entriesToShow={MARKET_TABLE.slice(0, 3)} />
      <TableComponent data={data} entriesToShow={MARKET_TABLE.slice(3)} />
    </div>
  );
}
