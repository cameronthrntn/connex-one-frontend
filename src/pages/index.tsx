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
      <Main>
        <Section $border>
          <Title>Server Time</Title>
          <ServerTime>1691069728</ServerTime>
          <Difference>-00:00:12</Difference>
        </Section>
        <Section>
          <Title>Server Response metrics</Title>
          <Metrics>
            const Main = styled.main border: 1px solid red; max-width: $ px;
            height: 100vh; margin: 0 auto; display: flex; justify-content:
            center; align-items: center; padding: 8px; box-sizing: border-box;
            gap: 16px; ;
          </Metrics>
        </Section>
      </Main>
    </>
  );
}

const Main = styled.main`
  max-width: ${({ theme }) => theme.sizes.maxWidth}px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  gap: 16px;
`;

const Section = styled.section<{ $border?: boolean }>`
  border-right: ${({ $border, theme }) =>
    $border ? `1px solid ${theme.colors.text}` : "none"};
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  box-sizing: border-box;
  min-height: 500px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const ServerTime = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Difference = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Metrics = styled.code`
  border-radius: 16px;
  padding: 24px;
  color: ${({ theme }) => theme.colors.code};
  background: ${({ theme }) => theme.colors.codeBlock};
`;
