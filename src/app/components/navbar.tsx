"use client";
import {
  Button,
  tokens,
  Text,
  DrawerProps,
  OverlayDrawer,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerBody,
  Menu,
  MenuList,
  MenuTrigger,
  MenuPopover,
  MenuItemLink,
} from "@fluentui/react-components";
import {
  Navigation24Filled,
  Dismiss24Filled,
  Dismiss24Regular,
  ChevronDown20Regular,
} from "@fluentui/react-icons";
import { makeStyles, typographyStyles } from "@fluentui/react-components";
import NavLink from "./atomic/navlink";
import { useCallback, useState } from "react";
import { NavLinkItem } from "../interfaces/navlinkitem";

const useStyles = makeStyles({
  textTitle: typographyStyles.title2,
  textItem: typographyStyles.subtitle1,
  color: { color: tokens.colorBrandForeground1 },
});

// data for nav items
const navlinkitems: NavLinkItem[] = [
  {
    label: "Sole Trader",
    link: "/sole-trader",
    class: "mr-6 hover:text-stone-900",
    openInNewTab: false,
  },
  {
    label: "Plans & Pricing",
    link: "/pricing",
    class: "mr-6 hover:text-stone-900",
    openInNewTab: false,
  },
  {
    label: "Call us: 0789200000",
    link: "tel:0789200000",
    class: "mr-6 hover:text-stone-900",
    openInNewTab: false,
  },
  {
    label: "Support",
    link: "/contact",
    class: "mr-6 hover:text-stone-900",
    openInNewTab: false,
  },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [position, setPosition] = useState<DrawerProps["position"]>("start");

  const onClickRightButton = useCallback(() => {
    setPosition("end");
    setIsOpen(true);
  }, []);

  const styles = useStyles();
  const mainNavLink = `${styles.textTitle} ${styles.color}`;

  return (
    <main className="w-full bg-white flex flex-col items-center justify-between md:px-10 px-2">
      <ul className="w-full bg-white flex flex-col z-10">
        <ul className="container w-full flex flex-row py-4">
          {/* Home nav link */}
          <li className="self-center font-bold mr-2">
            <NavLink
              label={"Bitmosys Support"}
              class={mainNavLink}
              link={"/"}
              openInNewTab={false}
            ></NavLink>
          </li>
          {/* End of Home nav link */}

          {navlinkitems.map((item: NavLinkItem, index) => {
            return (
              <li
                key={"mainnavLink" + index}
                className={
                  index == 2
                    ? "ml-auto self-center px-2 hidden lg:block"
                    : "self-center px-2 hidden lg:block"
                }
              >
                {index == 4 ? (
                  <Menu>
                    <MenuTrigger>
                      <div className="group">
                        <Button
                          appearance="transparent"
                          className="overflow-visible hover-style"
                        >
                          <div className="flex items-center gap-2">
                            <div className="md:ml-3 text-black   ">
                              <Text>Support</Text>
                            </div>
                            <div className="group text-black">
                              <ChevronDown20Regular />
                            </div>
                          </div>
                        </Button>
                      </div>
                    </MenuTrigger>

                    <MenuPopover>
                      <MenuList>
                        <MenuItemLink href="/pricing">Link 1 </MenuItemLink>
                        <MenuItemLink href="/pricing">Link 2</MenuItemLink>
                        <MenuItemLink href="/pricing" disabled>
                          Link 3
                        </MenuItemLink>
                        <MenuItemLink href="/pricing">Link 4</MenuItemLink>
                      </MenuList>
                    </MenuPopover>
                  </Menu>
                ) : (
                  <NavLink
                    label={item.label}
                    class={
                      "ms-3 hover:border-b-2 hover:pb-2 border-black text-black"
                    }
                    link={item.link}
                    openInNewTab={item.openInNewTab}
                  ></NavLink>
                )}
              </li>
            );
          })}

          {/* Nav action button */}
          {/* <div className="max-md:ml-auto md:max-lg:ml-auto">
            <Button appearance="transparent">
              <div className="flex items-center gap-3 md:ml-3 text-black">
                <Text>Sign In</Text>
                <Avatar />
              </div>
            </Button>
          </div> */}
          {/* End of Nav action button */}

          {/* Hamburger icon */}
          <li className="self-center ml-auto lg:hidden block">
            {!nav ? (
              <Navigation24Filled
                onClick={() => {
                  setNav(!nav);
                  onClickRightButton();
                }}
              />
            ) : (
              <Dismiss24Filled
                onClick={() => {
                  setNav(!nav);
                }}
              />
            )}
          </li>
          {/* End of Hamburger icon */}
        </ul>
      </ul>

      {/* Sidebar nav panel */}
      <OverlayDrawer
        position={position}
        open={isOpen}
        onOpenChange={(_, { open }) => {
          setNav(!nav);
          setIsOpen(open);
        }}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => {
                  setNav(!nav);
                  setIsOpen(false);
                }}
              />
            }
          >
            <NavLink
              label={"Bitmosys"}
              class={mainNavLink}
              link={"/"}
              openInNewTab={false}
            ></NavLink>
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <ul className="w-full flex flex-col justify-start">
            {/* <li className="self-center font-bold mb-2"></li> */}
            {navlinkitems.map((item: NavLinkItem, index) => {
              return (
                <li
                  key={"drawer_" + index}
                  className={"w-full justify-start mt-6"}
                >
                  <NavLink
                    label={item.label}
                    class={"mr-6"}
                    link={item.link}
                    openInNewTab={item.openInNewTab}
                    textSize={300}
                  ></NavLink>
                </li>
              );
            })}
          </ul>
        </DrawerBody>
      </OverlayDrawer>
      {/* End of Sidebar nav panel */}
    </main>
  );
}
