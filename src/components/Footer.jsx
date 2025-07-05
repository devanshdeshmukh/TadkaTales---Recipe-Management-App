import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0e3133] text-white py-3 h-[110px] text-center mt-20 font-inherit tracking-wide border-t border-[#333]">
            <div className="max-w-[900px] mx-auto">
                <h3 className="m-0 font-semibold text-[22px]">Tasty Recipes</h3>
                <p className="mt-1 mb-0 text-[15px] text-[#bbb]">
                    Discover, cook, and enjoy delicious recipes every day.
                </p>
                <div className="mt-1 text-[14px] text-[#888]">
                    &copy; {new Date().getFullYear()} Food Recipes. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
