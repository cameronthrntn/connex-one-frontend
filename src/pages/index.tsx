import Head from "next/head";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import Skeleton from "react-loading-skeleton";
import { fetchData } from "@/services/api";
import moment from "moment";
import { toast } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";
import { AnimatePresence, motion } from "framer-motion";

const toastSettings = {
  pending: "Fetching New Data",
  success: "Server Time Updated!",
  error: "An Error Occured!",
};

export default function Home() {
  const [serverTime, setServerTime] = useState<number | undefined>();
  const [metrics, setMetrics] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<number | undefined>();
  const theme = useTheme();

  useEffect(() => {
    const getData = async () => {
      const { epoch, metrics } = await fetchData();
      setServerTime(epoch);
      setMetrics(metrics || "");
    };
    toast.promise(getData, toastSettings);

    const interval = setInterval(() => {
      toast.promise(getData, toastSettings);
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
        <Section $left>
          <Title>Server Time</Title>
          <AnimatePresence>
            {serverTime ? (
              <ServerTime
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                {serverTime}
              </ServerTime>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                data-cy="skeleton-time">
                <Skeleton height={40} width={300} />
              </motion.div>
            )}
          </AnimatePresence>
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
          <Title as="h2">Server Response metrics</Title>
          <Metrics layout="size" transition={{ duration: 0.5 }}>
            <AnimatePresence>
              {metrics ? (
                <MetricText
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.7 }}>
                  {metrics}
                </MetricText>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  data-cy="skeleton-metrics">
                  <Skeleton
                    count={5}
                    height={15}
                    style={{ marginBottom: 8 }}
                    baseColor={theme.colors.skeletonbase}
                    highlightColor={theme.colors.text}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Metrics>
        </Section>
      </Main>
    </>
  );
}

const Main = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth}px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  gap: 16px;
  @media (max-width: ${({ theme }) => theme.sizes.tablet}px) {
    flex-direction: column;
  }
`;

const Section = styled.section<{ $left?: boolean }>`
  border-right: ${({ $left, theme }) =>
    $left ? `1px solid ${theme.colors.text}` : "none"};
  width: ${({ $left }) => ($left ? "30%" : "70%")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  box-sizing: border-box;
  min-height: 500px;
  @media (max-width: ${({ theme }) => theme.sizes.tablet}px) {
    width: 100%;
    height: ${({ $left }) => ($left ? "30%" : "70%")};
    min-height: 0;
    border-bottom: ${({ $left, theme }) =>
      $left ? `1px solid ${theme.colors.text}` : "none"};
    border-right: none;
    padding: 16px;
    justify-content: ${({ $left }) => ($left ? "center" : "flex-start")};
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const ServerTime = styled(motion.h2)`
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 100%;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.sizes.tablet}px) {
    font-size: 36px;
  }
`;

const Difference = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Metrics = styled(motion.code)`
  border-radius: 16px;
  padding: 24px;
  max-height: 300px;
  width: 100%;
  overflow-y: scroll;
  background: ${({ theme }) => theme.colors.codeBlock};
  @media (max-width: ${({ theme }) => theme.sizes.tablet}px) {
    padding: 12px;
    max-height: 500px;
  }
`;

const MetricText = styled(motion.code)`
  color: ${({ theme }) => theme.colors.code};
  font-family: Inter;
  font-size: 10px;
`;
