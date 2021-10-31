// import stationList from "../../../data/stations";
export default function MetroHome(props) {
  // TODO: display station info

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

export const getServerSideProps = async ({ req, res, params }) => {
  const url =
    "https://datacenter.taichung.gov.tw/swagger/OpenData/8fce6507-58a6-40e4-a62e-96f4898a291f";
  // TODO: fetch url and pass specific station data into page by props
  // Hint: see /metro/ssr/index.js for implementation details
  //       remember to use `params` to receive station
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
