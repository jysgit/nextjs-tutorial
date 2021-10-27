// import stationList from "../../../data/stations";
export default function MetroHome({ stationId, stationData }) {
  // TODO: display station info
  //   const router = useRouter();
  //   const stationId = router.query.stationId;

  return (
    <>
      <p>捷運站代號：{stationId}</p>
      <p>站名：{stationData["站名"]}</p>
      <p>車站地址：{stationData["車站地址"]}</p>
      <p>網址：{stationData["資訊網址"]}</p>
    </>
  );
}

export const getServerSideProps = async ({ req, res, params }) => {
  const url =
    "https://datacenter.taichung.gov.tw/swagger/OpenData/8fce6507-58a6-40e4-a62e-96f4898a291f";
  // TODO: fetch url and pass specific station data into page by props
  // Hint: see /metro/ssr/index.js for implementation details
  //       remember to use `params` to receive station
  const stations = await fetch(url).then((res) => res.json());
  const stationId = params["stationId"];
  let stationIdx = 0;

  for (const [index, eachStation] of stations.entries()) {
    if (stationId === eachStation["捷運站代號"]) {
      stationIdx = index;
      break;
    }
  }

  const stationData = stations[stationIdx];

  return {
    props: {
      stationId,
      stationData,
    },
  };
};
