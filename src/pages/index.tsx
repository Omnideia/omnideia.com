import Head from "next/head";
import Main from '../pages/Main';

type Props = {
  title: string;
};

export default function Home({ title = "React Avançado" }: Props) {
  return (
    <Main />
    );
}
