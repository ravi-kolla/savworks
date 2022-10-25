import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, {useState, useEffect} from "react"
import { Bounded } from "./Bounded";

export const Header = ({ navigation, settings }) => {

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Bounded as="header" className="border-b-2 py-2">
    <div className="">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto w-full max-w-7xl">
              <div className="flex justify-between">
                <div className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
                  <div className="flex-shrink-0">
                    <PrismicLink href="/" className="text-xl font-semibold tracking-tight max-h-52">
                      <img className="logo" src={navigation.data.logo.url} alt={navigation.data.logo.alt} />
                    </PrismicLink>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-4">
                    {navigation.data?.links.map((item) => (
                      <li
                        key={prismicH.asText(item.label)}
                        className="font-semibold tracking-tight text-slate-800 list-none"
                      >
                        <PrismicLink field={item.link}>
                          <PrismicText field={item.label} />
                        </PrismicLink>
                      </li>
                    ))}
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center mobile-button justify-center rounded-md p-2 text-gray-400 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.data?.links.map((item) => (
                  <li
                    key={prismicH.asText(item.label)}
                    className="font-semibold tracking-tight text-slate-800 list-none hover:bg-gray-100"
                  >
                    <PrismicLink field={item.link}>
                      <PrismicText field={item.label} />
                    </PrismicLink>
                  </li>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
    </Bounded>
  );
};
