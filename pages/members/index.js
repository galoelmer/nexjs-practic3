import Head from "next/head";
import styles from '../../styles/Members.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      members: data,
    },
  };
};

const Index = ({ members }) => {
  return (
    <>
      <Head>
        <title>Elephant Origami | Members</title>
        <meta name="keywords" content="Elephant Origami" />
      </Head>
      <div>
        <h1>Members</h1>
        {members.map((user) => (
          <Link href={`/members/${user.id}`} key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Index;
