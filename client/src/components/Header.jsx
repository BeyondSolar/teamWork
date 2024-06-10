import React from "react";

const Header = () => {
    return (
        <div className="flex flex-row justify-between items-center font-saira p-4 text-header border-b">
            <div className="flex space-x-2 items-center">
                <a href="/" className="flex items-center pb-1">
                    <img src="./images/teamWork-logo.svg" className="w-36 mr-4"/>
                </a>
                <a href="/" className="hover:text-theme-100">Jobs</a>
            </div>
            <div className="flex space-x-2">
                <a href="/" className="pl-4 pr-4 bg-theme text-white transition-colors duration-300 hover:bg-theme-100">Sign in</a>
                <a href="/"className="hover:text-theme-100">Employer/Post a Job</a>
            </div>
        </div>
    )
}

export default Header;