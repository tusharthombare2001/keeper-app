import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p> 𝕋𝕌𝕊ℍ𝔸ℝ {currentYear}</p>
        </footer>
    );
}

export default Footer;