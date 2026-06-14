import { NavLink } from "react-router-dom";
export default function NotFound() {
return (
    <main className="w-full h-screen">
        <div className="grid min-h-full place-items-center bg-[#eeeeee] px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center max-w-2xl">
                <img src="/error-404.svg" alt="404 character illustration" className="mx-auto w-40 h-auto mb-2" />
                <p className="text-3xl font-semibold text-[#E4FF30]">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl">
                    Page not found
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-[#929AAB] sm:text-xl/8">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10">
                    <NavLink
                        to="/"
                        className="rounded-md bg-[#E4FF30] px-3.5 py-2.5 text-sm font-semibold hover:bg-black hover:text-[#E4FF30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4FF30] transition-colors"
                    >
                        Go back home
                    </NavLink>
                </div>
            </div>
        </div>
    </main>
)}