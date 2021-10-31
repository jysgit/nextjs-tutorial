export default function SSGStationsPage(props) {
  return (
    <>
      {Object.entries(props.station).map((key, value) => {
        return (
          <p key={key}>
            {key[0]}: {key[1]}
          </p>
        );
      })}
    </>
  );
}

//有多少個路徑需要產生靜態檔案, 他會把所有params排列組合都跑一遍, 只跑一次
export const getStaticPaths = async () => {
  const url =
    "https://datacenter.taichung.gov.tw/swagger/OpenData/8fce6507-58a6-40e4-a62e-96f4898a291f";
  // TODO: fetch url and define static paths for SSG to render at build time
  //       REPLACE `stationPaths` with your own
  const stations = await fetch(url).then((res) => res.json());
  const stationPaths = stations.map((station) => ({
    params: {
      // 要回傳多少個路徑都要在這邊定義
      // 有中括號的路徑都要在這邊定義一遍
      stationId: station["捷運站代號"],
    },
  }));

  return {
    paths: stationPaths,
    fallback: false, // true, false, 'blocking'
  };
};

// 有多少個路徑就跑多少次, 產生對應數量的static file
export const getStaticProps = async ({ params }) => {
  // Get station ID from params (passed from static paths that you defined) and return the specific station data into the page.
  const url =
    "https://datacenter.taichung.gov.tw/swagger/OpenData/8fce6507-58a6-40e4-a62e-96f4898a291f";
  const stations = await fetch(url).then((res) => res.json());
  const stationObj = {};

  stations.forEach((station) => {
    stationObj[station["捷運站代號"]] = station;
  });
  // console.log(stationObj);
  // console.log({ params });

  return {
    props: {
      station: stationObj[params.stationId],
    },
  };
};
