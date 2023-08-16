import {
  Grid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { KeepKeySdk } from "@keepkey/keepkey-sdk";
import Features from "./components/Features";
import Pubkeys from "./components/Pubkeys";
import Txs from "./components/Txs";
import { useEffect, useState } from "react";

const Home = () => {
  const [sdk, setSdk] = useState(null);
  const onStart = async function () {
    try {
      const spec = "http://localhost:1646/spec/swagger.json";
      const apiKey = localStorage.getItem("apiKey") || "1234";
      const config = {
        apiKey,
        pairingInfo: {
          name: "KeepKey-template Demo App",
          imageUrl: "https://pioneers.dev/coins/keepkey.png",
          basePath: spec,
          url: "http://localhost:1646",
        },
      };
      // init
      const sdk = await KeepKeySdk.create(config);
      if (config.apiKey !== apiKey)
        localStorage.setItem("apiKey", config.apiKey);

      console.log(sdk);
      // @ts-ignore
      setSdk(sdk);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  // onstart get data
  useEffect(() => {
    onStart();
  }, []);

  return (
    <Grid gap={4}>
      <Tabs>
        <TabList>
          <Tab>KeepKey Info</Tab>
          <Tab>Extended Pubkeys</Tab>
          <Tab>Sign TX </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Features sdk={sdk} />
          </TabPanel>
          <TabPanel>
            <Pubkeys sdk={sdk} />
          </TabPanel>
          <TabPanel>
            <Txs sdk={sdk} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Grid>
  );
};

export default Home;
