import {
  Grid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import SomeText from "./components/SomeText";
import Pubkeys from "./components/Pubkeys";

const Home = () => {
  return (
    <Grid gap={4}>
      <Tabs>
        <TabList>
          <Tab>KeepKey info</Tab>
          <Tab>extended pubkeys</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SomeText />
          </TabPanel>
          <TabPanel>
            <Pubkeys />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Grid>
  );
};

export default Home;
