import {
  Grid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import CTASection from "./components/CTASection";
import SomeImage from "./components/SomeImage";
import SomeText from "./components/SomeText";
// import { KeepKeySdk } from '@keepkey/keepkey-sdk'

const Home = () => {
  return (
    <Grid gap={4}>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Transfers</Tab>
          <Tab>Staking</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SomeText />
            <SomeImage />
            <CTASection />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Grid>
  );
};

export default Home;
