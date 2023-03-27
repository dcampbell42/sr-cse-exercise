import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import pageContent from "@/data/qa";

const inter = Inter({ subsets: ["latin"] });

const NavItems = pageContent;

const NavList = () => {
  return (
    <div className={styles.grid}>
      {NavItems.map((item) => (
        <Link
          href={`/questions/${item.id}`}
          key={item.id}
          className={styles.card}
        >
          <h2 className={inter.className}>
            Question {item.id} <span>-&gt;</span>
          </h2>
          <p className={inter.className}>{item.question}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavList;
