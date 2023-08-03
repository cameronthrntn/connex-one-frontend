import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchData } from "@/services/api";
import moment from "moment";

export default function Home() {
  const [serverTime, setServerTime] = useState<number | undefined>();
  const [metrics, setMetrics] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<number | undefined>();

  useEffect(() => {
    const getData = async () => {
      try {
        const { epoch, metrics } = await fetchData();
        setServerTime(epoch);
        setMetrics(metrics || "");
      } catch (e) {
        console.log({ e });
      }
    };
    getData();
    const interval = setInterval(() => {
      getData();
    }, 30000);
    const currentInterval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => {
      clearInterval(interval);
      clearInterval(currentInterval);
    };
  }, []);

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
          <ServerTime>{serverTime ? serverTime : <Skeleton />}</ServerTime>
          <Difference>
            -
            {moment()
              .hour(0)
              .minute(0)
              .second(moment(currentTime).diff(serverTime, "seconds"))
              .format("HH:mm:ss")}
          </Difference>
        </Section>
        <Section>
          <Title>Server Response metrics</Title>
          <Metrics>{metrics}</Metrics>
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
  width: 100%;
  text-align: center;
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
  max-height: 300px;
  width: 100%;
  overflow-y: scroll;
  color: ${({ theme }) => theme.colors.code};
  background: ${({ theme }) => theme.colors.codeBlock};
`;
