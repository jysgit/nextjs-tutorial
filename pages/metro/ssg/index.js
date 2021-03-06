import NextLink from "next/link";
export default function MetroHome({ stations }) {
  return (
    <>
      <p className="text-2xl">點擊車站以查詢詳細資料:</p>
      {stations.map((station) => (
        <p
          className="text-blue-500 text-xl underline"
          key={station["捷運站代號"]}
        >
          <NextLink href={`/metro/ssg/${station["捷運站代號"]}`}>
            <a>{station["站名"]}</a>
          </NextLink>
        </p>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  // Taichung Metro API description: https://data.gov.tw/dataset/144164
  const url =
    "https://datacenter.taichung.gov.tw/swagger/OpenData/8fce6507-58a6-40e4-a62e-96f4898a291f";
  const stations = await fetch(url).then((res) => res.json());
  // console.log(stations);
  return {
    props: {
      stations,
    },
  };
};
