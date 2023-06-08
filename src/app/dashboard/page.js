import Nav from "@/components/Header/Nav";
import Image from "next/image";
import Link from "next/link";
import styles from "./dashboard.module.css"
const page = async () => {
  const res = await fetch("https://server.easyshop50.com/product");
  const data = await res.json();
  // console.log(data.data[0]);

  return (
    <div>
      <Nav />

      <h2>This is Dashboard</h2>

      <div className={styles.product_conntainer}>
        {data?.data?.length &&
          data.data.map((pd) => {
            return (
              <div key={pd._id}>
                <Image
                  src={`https://server.easyshop50.com/${pd.img}`}
                  height={100}
                  width={500}
                  alt=""
                />
                <p>{pd.title}</p>
                <Link href={`/product/${pd._id}`}>Click Here</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default page;
