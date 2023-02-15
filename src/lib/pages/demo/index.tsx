import {
  Grid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import SomeText from "./components/SomeText";

const Home = () => {
  return (
    <Grid gap={4}>
      <Tabs>
        <TabList>
          <Tab>KeepKey info</Tab>
          <Tab>pubkeys</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SomeText />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Grid>
  );
};

export default Home;
