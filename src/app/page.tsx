"use client";

import {
  Body2,
  Button,
  LargeTitle,
  Text,
  Title1,
  Title2,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";

import { PlayCircle20Regular } from "@fluentui/react-icons";
import { NavLinkItem } from "./interfaces/navlinkitem";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  industries: {
    width: "auto",
    maxWidth: "100%",
    height: "auto",
    maxHeight: "100%",
  },

  card: {
    width: "480px",
    maxWidth: "100%",
    height: "auto",
    maxHeight: "100%",
  },

  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    ...shorthands.gap("16px"),
  },

  horizontalCardImage: {
    width: "64px",
    height: "64px",
  },
});

export default function Home() {
  const styles = useStyles();

  const subSectionNav: NavLinkItem = {
    label: "label",
    link: "link",
    class: "",
    openInNewTab: false,
  };

  return (
    <main className="">
      <div className="home-landing">
        <div className="container w-full md:px-5 py-10 px-2 h-full flex items-center gap-10">
          <div className="w-full flex flex-col md:px-5 max-md:mx-auto">
            <LargeTitle className="pb-4 md:w-4/5">
              Hello! Welcome to Bitmosys Support.
            </LargeTitle>
            <Text className="pb-4 mb-4 md:w-4/5">
              Manage your clients and staff all in one place with features to
              create, receive, and manage staff bookings, employee scheduling,
              e-timesheet management, invoicing, and many more.
            </Text>
            <div className="flex gap-6 py-4">
              <Button appearance="primary" size="large">
                <Text>See plans & pricing</Text>
              </Button>
              <Button appearance="secondary" size="large">
                <Text>Talk to us</Text>
              </Button>
              <Button appearance="transparent" size="large">
                <div className="flex gap-1">
                  <PlayCircle20Regular />
                  <Text>Watch video</Text>
                </div>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-end md:w-full md:h-full max-md:hidden lg:block">
            <div className="imgplaceholder bg-white md:w-full">
            </div>
            {/* <Image src="/dummy.jpg" width={500} height={500} alt="Dummy Image" /> */}
          </div>
        </div>
      </div>
      {/* <div className="bg-slate-50">
        <SubSection image={""} title={"This is a sub-section"} content={"Currently, we operate only in the United Kingdom"} link={subSectionNav}>
        </SubSection>
      </div> */}
    </main>
  );
}

