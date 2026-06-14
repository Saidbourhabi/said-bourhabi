import { 
    FaBehance, 
    FaDribbble,
    FaCodepen, 
} from 'react-icons/fa'
import { FaGitlab, FaXTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-[#eeeeee]">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:py-10 text-center">
                <div className="mb-4">
                    <NavLink to="/" aria-label="Home" className="inline-block">
                        <img src="/saidbourhabi.svg" alt="Said Bourhabi" className="mx-auto h-10 sm:h-10 w-auto invert cursor-pointer" />
                    </NavLink>
                </div>
                <div className="flex flex-row sm:flex-row justify-center items-center gap-6 sm:gap-6">
                    <a href="https://gitlab.com/saidbourhabi" target="_blank" rel="noreferrer" className="text-black hover:text-[#E4FF30] p-2 text-2xl sm:text-3xl transition-colors" aria-label="GitLab">
                        <FaGitlab />
                    </a>
                    <a href="https://www.dribbble.com/saidbourhabi/" target="_blank" rel="noreferrer" className="text-black hover:text-[#E4FF30] p-2 text-2xl sm:text-3xl transition-colors" aria-label="Dribbble">
                        <FaDribbble />
                    </a>
                    <a href="https://www.x.com/bourhabisaid/" target="_blank" rel="noreferrer" className="text-black hover:text-[#E4FF30] p-2 text-2xl sm:text-3xl transition-colors" aria-label="X (Twitter)">
                        <FaXTwitter />
                    </a>
                    <a href="https://codepen.io/Saidbourhabi" target="_blank" rel="noreferrer" className="text-black hover:text-[#E4FF30] p-2 text-2xl sm:text-3xl transition-colors" aria-label="CodePen">
                        <FaCodepen />
                    </a>
                    <a href="https://www.behance.net/saidbourhabi" target="_blank" rel="noreferrer" className="text-black hover:text-[#E4FF30] p-2 text-2xl sm:text-3xl transition-colors" aria-label="Behance">
                        <FaBehance />
                    </a>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base text-[#222222]">
                    <span>© Copyright Said Bourhabi {new Date().getFullYear()}</span>
                    <NavLink to="/legal" className="hover:underline font-semibold">
                        Legal Notices
                    </NavLink>
                </div>
            </div>
        </footer>
    )}
export default Footer