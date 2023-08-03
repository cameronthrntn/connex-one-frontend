import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Connex One | Cameron Thornton</title>
        <meta
          name="description"
          content="The Frontend built as part of the Connex One technical test."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>Hello, world!</Main>
    </>
  );
}

const Main = styled.main`
  border: 1px solid red;
`;
