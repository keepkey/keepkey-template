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
      <SomeText />
      <SomeImage />
      <CTASection />
    </Grid>
  );
};

export default Home;
