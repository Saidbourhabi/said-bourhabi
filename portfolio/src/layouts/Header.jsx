'use client'
import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    HiOutlineCursorArrowRays,
} from 'react-icons/hi2'
import { BsVectorPen } from 'react-icons/bs'
import { TbPrompt } from 'react-icons/tb'
import { FaBars, FaGithub ,FaLinkedinIn  } from 'react-icons/fa'
import { RiArrowDropDownLine, RiCameraLensAiLine } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'

const products = [
    { name: 'Graphics', description: 'High-quality graphic design services', href: 'graphics', icon: BsVectorPen  },
    { name: 'Web Design', description: 'Modern and responsive website design', href: 'web-design', icon: HiOutlineCursorArrowRays },
    { name: 'Photography', description: 'Professional photography services', href: 'photography', icon: RiCameraLensAiLine },
    { name: 'Prompts', description: 'AI-powered prompt library', href: 'prompts', icon: TbPrompt },
]
const callsToAction = [
    { name: 'GitHub', href: 'https://github.com/saidbourhabi', icon: FaGithub , target: '_blank' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/saidbourhabi/', icon: FaLinkedinIn, target: '_blank'  },
]

export default function Header() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

return (
    <header className="bg-[#eeeeee] fixed w-full z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <NavLink to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Contact</span>
                <img
                    alt="Said Bourhabi"
                    src="/saidbourhabi.svg"
                    className="h-8 w-auto invert cursor-pointer"/>
                </NavLink>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black hover:text-[#E4FF30]">
                    <span className="sr-only">Open main menu</span>
                    <FaBars aria-hidden="true" className="size-8" />
                </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                {({ close }) => (
                <>
                    <PopoverButton className="text-sm/6 font-semibold text-black hover:text-[#E4FF30] cursor-pointer">
                        Services
                    </PopoverButton>
                    <PopoverPanel
                        transition
                        className="absolute rounded-md left-1/2 z-10 mt-7 w-screen max-w-md -translate-x-1/2 overflow-hidden bg-black data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                        <div className="p-4">
                            {products.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={`/${item.href}`}
                                    onClick={() => close()}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                                >
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                                        <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-[#E4FF30]" />
                                    </div>
                                    <div className="flex-auto">
                                        <span className="block font-semibold text-white">{item.name}</span>
                                        <p className="mt-1 text-white">{item.description}</p>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
                            {callsToAction.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target={item.target}
                                    rel={item.target === '_blank' ? 'noreferrer' : undefined}
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:bg-gray-700/50"
                                >
                                    <item.icon aria-hidden="true" className="size-5 flex-none text-[#E4FF30] " />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </PopoverPanel>
                </>
            )}
                </Popover>
                <NavLink to="/prompts" className="text-sm/6 font-semibold text-black hover:text-[#E4FF30] cursor-pointer">
                    Prompts
                </NavLink>
                <NavLink to="/library" className="text-sm/6 font-semibold text-black hover:text-[#E4FF30] cursor-pointer">
                    Library
                </NavLink>
                <NavLink to="/about" className="text-sm/6 font-semibold text-black hover:text-[#E4FF30] cursor-pointer">
                    About
                </NavLink>
            </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <NavLink to="/contact" className="text-sm/6 font-semibold text-black hover:text-[#E4FF30] cursor-pointer">
                        Contact
                    </NavLink>
                </div>
        </nav>

        {/* // ?Mobile menu */}

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-black">    
                <div className="flex items-center justify-between">
                <NavLink to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Contact</span>
                        <img
                        alt="Said Bourhabi"
                        src="/saidbourhabi.svg"
                        className="h-8 w-auto"/>
                </NavLink>
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-white hover:text-[#E4FF30]">
                    <span className="sr-only">Close menu</span>
                    <FaXmark aria-hidden="true" className="size-8" />
                </button>
                </div>
                <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                        Services
                        <RiArrowDropDownLine aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                    </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                <DisclosureButton
                        key={item.name}
                        as={NavLink}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#E4FF30] hover:bg-white/5">
                        {item.name}
                    </DisclosureButton>
                    ))}
                </DisclosurePanel>
                </Disclosure>
                <NavLink
                    to="/prompts"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                    Prompts
                </NavLink>
                <NavLink
                    to="/library"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                    Library
                </NavLink>
                <NavLink
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                    Contact
                </NavLink>
            </div>
            </div>
            </div>
            </DialogPanel>
        </Dialog>
    </header>
)}