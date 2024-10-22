# Frontend útmutató

#### Futtatás
- crtl + ö -> terminál
- cd frontend
- npm install
- npm run dev

#### Felépítés
 A main.jsx rendereli ki az index.htmlben az oldalt. AZ App.jsx-ben vannak megadva az elérési útvonalak, valamint az oldal felépítése. A /pages/Main.jsx a főoldal componenseit tartalmazza. 
 A Category.jsx gondoskodik a megadott kategóriák (Categories.jsx) megjelenítéséről, attól függően, hogy az urlben mi van megadva. A subcategory a kiválasztott alkategória termékeit (Item.jsx) jeleníti meg hasonló logikával, mint az előbb. 
 A termékek részletes megjelenítését a Product.jsx intézi, amiben 2 konponens van: Breadcrum és Productdisplay. A Productdisplay.jsx propként kapja meg a terméket, amit meg kell jeleníteni.
