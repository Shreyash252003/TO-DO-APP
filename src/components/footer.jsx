import React from "react";

var today = new Date();
var year = today.getFullYear();

function Footer() {
    return (
        <footer>
            <p>CopyRight {year}</p>
        </footer>
    );
}
export default Footer;
