# web2020


Changes due to Framework7 compatibility:

1. framework7.bundle.css
commented out:
line 603 - 624 => html, body
line 9776 - 10024 => .panel


2. slides.js
new global parameter added, line 43, 657:
window.animationTrigger = 8; // triggers animation when new slides comes into viewport, 2 = at 50% height


3. CSS
smaller Typography / Font-Sizes:
- defined in css/custom-smaller-fonts.css
- based on css/custom-smaller-fonts.scss
- compiled by http://beautifytools.com/scss-compiler.php



##TOOLS:
https://beautifier.io/
http://beautifytools.com/scss-compiler.php