# ItalPont webshop Projektterv 2024

## 1. Összefoglaló 

Az italnagyker webáruházaknak több előnye is van, amelyek kényelmesebbé és gazdaságosabbá teszik az italkereskedést, különösen nagy mennyiségek vásárlása esetén.
Az italnagyker webshopok általában széles kínálattal rendelkeznek, beleértve a különböző alkoholos és alkoholmentes italokat, így könnyű megtalálni a kívánt termékeket egy helyen.
Online vásárlással a rendelést bármikor és bárhonnan leadhatod, így nem szükséges fizikailag megjelenni egy üzletben. Ez idő- és energiatakarékos megoldás.
Ha cégek vagy vendéglátóhelyek számára vásárolsz, gyakran lehetőség van egyéni árajánlatokra, hosszú távú együttműködésre és egyéb üzleti kedvezményekre.


## 2. A projekt bemutatása

Ez a projektterv ItalPont (italnagyker) webshop projektet mutatja be, amely 2024-09-23-től 2024-12-02-ig tart, azaz összesen 70 napon keresztül fog futni. A projekten hét fejlesztő fog dolgozni, az elvégzett feladatokat pedig négy alkalommal fogjuk prezentálni a megrendelőnek, annak érdekében, hogy biztosítsuk a projekt folyamatos előrehaladását.

### 2.1. Rendszerspecifikáció

Alapvető funkció, hogy az italnagyker kínálatában lévő összes terméket meg lehet tekinteni, rendelni és az esetleges akciókról értesülni. A termékekről részletes információk olvashatók, valamint az elérhetőség is fel van tüntetve. Szállítási idő és költség is fel van tüntetve. Az elkészült webshop képes lesz a árukészlet leltárazására (fizikai pozició, rendelkezésreálló mennyiség, kiszerelés). Regisztrált felhasználókból megkülönböztetünk kisker vásárlót, üzleti partnert (pl. vendéglátó egységek), valamint admint. 

### 2.2. Funkcionális követelmények

 - Felhasználók kezelése (admin, kisker vásárló, üzleti partner) (CRUD)
 - Felhasználói munkamenet megvalósítása több jogosultsági szinttel 
 - Raktárak kezelése (CRUD)
 - Árukészletek kezelése (CRUD)
 - Rendelések kezelése (CRUD)
 - Email-es visszajelzés új rendelés esetén a megrendelőnek és a raktárnak
 - Biztonsági mentés automatikus létrehozása

### 2.3. Nem funkcionális követelmények

 - A kliens oldal böngészőfüggetlen legyen
 - Reszponzív megjelenés
 - Az érzékeny adatokat biztonságosan tároljuk
 - A legfrissebb technológiákat használja a rendszer
 - Intuitív, átláthatóság könnyű

## 3. Költség- és erőforrás-szükségletek

Az erőforrásigényünk összesen 133 személynap, átlagosan 19 személynap/fő.

A rendelkezésünkre áll összesen 7 * 70 = 490 pont.

## 4. Szervezeti felépítés és felelősségmegosztás

A projekt megrendelője Dr. Pflanzner Tamás. A ItalPont projektet a projektcsapat fogja végrehajtani, amely jelenleg hét fejlesztőből áll. A csapatban található tapasztalt és pályakezdő webprogramozó is, A tapasztalt projekttagok között valaki frontend valaki backend területen jártasabb. A tapasztaltabbak mindenképp törekednek a többieket segíteni.

 - `Szabó Bence (3 év ipari tapasztalat a Számító Gép Kft.-nél)`
 - `Papp Bence (3 év egyetemi tapasztalat)`
 - `Racskó Ádám (<1 év tapasztalatő)`
 - `Kurucz László (3 év ipari tapasztalat a Számító Gép Kft.-nél)`
 - `Kovács-Némedi Máté (3 év egyetemi tapasztalat)`
 - `Szántó Mihály (<1 év tapasztalatő)`
 - Szegedi Bence (1 év webszerkesztő tapasztalat React és JS-ben.)

### 4.1 Projektcsapat

A projekt a következő emberekből áll:

| Név          | Pozíció          |   E-mail cím (stud-os)        |
|--------------|------------------|-------------------------------|
| Szegedi Bence | Projektmenedzser | h269466@stud.u-szeged.hu    |
| Szabó Bence   | Projekt tag      | `h654321@stud.u-szeged.hu`    |
| Kurucz László   | Projekt tag      | `h000000@stud.u-szeged.hu`    |
| Racskó Ádám Ákos | Projekt tag | `h269466@stud.u-szeged.hu`    |
| Papp Bence | Projekt tag      | `h654321@stud.u-szeged.hu`    |
| Szántó Mihály József   | Projekt tag      | `h000000@stud.u-szeged.hu`    |
| Kovács-Némedi Máté   | Projekt tag      | `h000000@stud.u-szeged.hu`    |



## 5. A munka feltételei

### 5.1. Munkakörnyezet

A projekt a következő munkaállomásokat fogja használni a munka során:

 - Munkaállomások: 7 db, Windows 10-es operációs rendszerrel
 - Dell Lattitude 7440 laptop (CPU: i7-1365U, RAM: 16 GB, GPU: Nvidia 920M)
 - `Acer Aspire 573g laptop (CPU: i3 5005U, RAM: 4 GB, GPU: Nvidia 920M)`
 - `Asztali számítógép (CPU: i7 7700k, RAM: 16GB, GPU: Nvidia GTX1070)`
 - `Acer Aspire 573g laptop (CPU: i3 5005U, RAM: 4 GB, GPU: Nvidia 920M)`
 - `Asztali számítógép (CPU: i7 7700k, RAM: 16GB, GPU: Nvidia GTX1070)`
 - `Acer Aspire 573g laptop (CPU: i3 5005U, RAM: 4 GB, GPU: Nvidia 920M)`
 - `Asztali számítógép (CPU: i7 7700k, RAM: 16GB, GPU: Nvidia GTX1070)`

A projekt a következő technológiákat/szoftvereket fogja használni a munka során: 

 - Prisma Studio adatbázis-kezelés
 - Xampp phpMyAdmin által biztosított mySql adatbázisszerver
 - React keretrendszer
 - Prisma backend keretrendszer
 - Visual Studio Code fejlesztőkörnyezet
 - Github Desktop verziókövető (GitLab)
 - Netlify hostoláshoz
 
### 5.2. Rizikómenedzsment

| Kockázat| Leírás| Valószínűség | Hatás  |
|---------|-------|--------------|--------|
| Betegség | Súlyosságtól függően hátráltatja vagy bizonyos esetekben teljes mértékben korlátozza a munkavégzőt, így az egész projektre kihatással van. Megoldás: a feladatok átcsoportosítása|nagy| erős |
| Kommunikációs fennakadás a csapattagokkal | A csapattagok között nem elégséges az információ áramlás, nem pontosan, esetleg késve vagy nem egyértelműen tájékoztatjuk egymást. Megoldás: még gyakoribb és behatóbb megbeszélések és ellenőrzések | kis | erős |
| Laptop használhatatlanná válik| Laptop nélkül kényelmetlen és egyes esetekben kivitelezhetetlen lehet a kiosztott feladat elvégzése. Megoldás: Laptop kölcsönadása, közösmunka, feladatok átcsoportosítása| közepes | erős |
| a | b | c | d |
| a | b | c | d |


## 6. Jelentések

### 6.1. Munka menedzsment
A munkát Szegedi Bence koordinálja. Fő feladata, hogy folyamatosan egyeztessen a csapattagokkal az előrehaladásról és a fellépő problémákról, esetlegesen a megoldásban is segítséget nyújhat a projekt csúszásának elkerülése végett. További feladata a heti szinten tartandó csoportgyűlések időpontjának és helyszínének leszervezése, erről messenger-ben tájékoztatja a projektcsapatot.


### 6.2. Csoportgyűlések

A projekt hetente ülésezik, hogy megvitassák az azt megelőző hét problémáit, illetve hogy megbeszéljék a következő hét feladatait. A megbeszélésről minden esetben memó készül.

1. megbeszélés:
 - Időpont: 2024.09.30.
 - Hely: Bohém Tanya
 - Résztvevők: Mindenki
 - Érintett témák: Ismerkedés, Github Desktop tesztelése

2. megbeszélés:
 - Időpont: 2024.10.06.
 - Hely: Online megbeszélés
 - Résztvevők: Mindenki
 - Érintett témák: Projektterv szerkesztése, feladatok kiosztása

3. Megbeszélés:
 - `Időpont: 2021.09.29.`
 - `Hely: TIK – Szeged, Ady tér 10.`
 - `Résztvevők: Teszt Elek, Remek Elek`
 - `Érintett témák: Egyeztetés az UML diagramokról, illetve az adatbázis táblák és kapcsolatok meghatározása`
 
 4. Megbeszélés:
 - `Időpont: 2021.09.29.`
 - `Hely: TIK – Szeged, Ady tér 10.`
 - `Résztvevők: Teszt Elek, Remek Elek`
 - `Érintett témák: Egyeztetés az UML diagramokról, illetve az adatbázis táblák és kapcsolatok meghatározása`
 
 5. Megbeszélés:
 - `Időpont: 2021.09.29.`
 - `Hely: TIK – Szeged, Ady tér 10.`
 - `Résztvevők: Teszt Elek, Remek Elek`
 - `Érintett témák: Egyeztetés az UML diagramokról, illetve az adatbázis táblák és kapcsolatok meghatározása`

### 6.3. Minőségbiztosítás

Az elkészült terveket a terveken nem dolgozó csapattársak közül átnézik, hogy megfelel-e a specifikációnak és az egyes diagramtípusok összhangban vannak-e egymással. A meglévő rendszerünk helyes működését a prototípusok bemutatása előtt a tesztelési dokumentumban leírtak végrehajtása alapján ellenőrizzük és összevetjük a specifikációval, hogy az elvárt eredményt kapjuk-e. További tesztelési lehetőségek: unit tesztek írása az egyes modulokhoz vagy a kód közös átnézése (code review) egy, a vizsgált modul programozásában nem résztvevő csapattaggal. Szoftverünk minőségét a végső leadás előtt javítani kell a rendszerünkre lefuttatott kódelemzés során kapott metrikaértékek és szabálysértések figyelembevételével.
Az alábbi lehetőségek vannak a szoftver megfelelő minőségének biztosítására:
- Specifikáció és tervek átnézése (kötelező)
- Teszttervek végrehajtása (kötelező)
- Unit tesztek írása (választható)
- Kód átnézése (választható)

### 6.4. Átadás, eredmények elfogadása

A projekt eredményeit a megrendelő, Dr. Pflanzner Tamás fogja elfogadni. A projektterven változásokat csak a megrendelő írásos engedélyével lehet tenni. A projekt eredményesnek bizonyul, ha specifikáció helyes és határidőn belül készül el. Az esetleges késések pontlevonást eredményeznek. 
Az elfogadás feltételeire és beadás formájára vonatkozó részletes leírás a következő honlapon olvasható: https://okt.inf.szte.hu/rf1/

### 6.5. Státuszjelentés

Minden mérföldkő leadásnál a projekten dolgozók jelentést tesznek a mérföldkőben végzett munkájukról a a megadott sablon alapján. A gyakorlatvezetővel folytatott csapatmegbeszéléseken a csapat áttekintik és felmérik az eredményeket és teendőket. Továbbá gazdálkodnak az erőforrásokkal és szükség esetén a megrendelővel egyeztetnek a projektterv módosításáról.

## 7. A munka tartalma

### 7.1. Tervezett szoftverfolyamat modell és architektúra

`A szoftver fejlesztése során az agilis fejlesztési modellt alkalmazzuk, mivel a fejlesztés során nagy hangsúlyt fektetünk a folyamatos kommunikcióra. A fejlesztés során a szoftver specifikációi rugalmasan vátozhatnak, és ezzel a módszertannal tudunk a leggyorsabban alkalmazkodni az új elvárásokhoz.`

`A webalkalmazás az MVC (modell-view-controller) felépítést követi, a szerver és a kliens függetlenek, csupán API végpontok segítségével kommunikálnak.`

Miso átírja

```
Milyen szoftverfolyamat modellt követve állítja elő a csapat a specifikációnak megfelelő prototípusokat? Miért ezt választja? 
A csapat milyen architektúrát választ a projekt megvalósításához? Milyen rétegek (logikai, adat, GUI) lesznek?`
```

### 7.2. Átadandók és határidők

A főbb átadandók és határidők a projekt időtartama alatt a következők:


| Szállítandó |    Neve    |   Határideje  |
|:-----------:|:--------------:|:-------------:|
|      D1     |  Projektterv és Gantt chart, prezentáció, egyéni jelentés    | 2024-10-14  |
|    P1+D2    |   UML, adatbázis- és képernyőtervek, prezentáció, egyéni jelentés   | 2024-10-28  |
|    P1+D3   | Prototípus I. és tesztelési dokumentáció, egyéni jelentés    | 2024-11-18  |
|    P2+D4    |      Prototípus II. és frissített tesztelési dokumentáció, egyéni jelentés  | 2024-12-02  |


## 8. Feladatlista

A következőkben a tervezett feladatok részletes összefoglalása található.

### 8.1. Projektterv (1. mérföldkő)

Ennek a feladatnak az a célja, hogy megvalósításhoz szükséges lépéseket, az erőforrásigényeket, az ütemezést, a felelősöket és a feladatok sorrendjét meghatározzuk, majd vizualizáljuk Gantt diagram segítségével.

Részfeladatai a következők:

#### 8.1.1. Projektterv kitöltése

Felelős: Mindenki

Tartam:  4 nap

Erőforrásigény:  1 személynap/fő


#### 8.1.2. Bemutató elkészítése

Felelős: Szabó Bence

Tartam:  2 nap

Erőforrásigény:  0.5 személynap

```
A mérföldkőhöz tartozó feladatok bemutatása PPT keretében, pl. téma, tervezett funkciók, tagok, Gantt diagram.`
```

### 8.2. UML és adatbázis- és képernyőtervek (2. mérföldkő)

Ennek a feladatnak az a célja, hogy a rendszerarchitektúrát, az adatbázist és webalkalmazás kinézetét megtervezzük. Erre a Figma szoftvert fogjuk használni.

Részfeladatai a következők:

#### 8.2.1. Use Case diagram

Felelős: Szegedi Bence

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.2.2. Class diagram

Felelős: Kovács-Némedi Máté

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.2.3. Sequence diagram

Felelős: Papp Bence

Tartam:  3 nap

Erőforrásigény:  2 személynap

#### 8.2.4. Egyed-kapcsolat diagram adatbázishoz

Felelős: Kurucz László

Tartam:  4 nap

Erőforrásigény: 2 személynap

#### 8.2.5. Package diagram

Felelős: Szabó Bence

Tartam:  3 nap

Erőforrásigény:  0.5 személynap

#### 8.2.6. Képernyőtervek

Felelős: Racskó Ádám

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.2.7. Bemutató elkészítése

Felelős: Szántó Mihály

Tartam:  1 nap

Erőforrásigény:  0.5 személynap

```
A mérföldkőhöz tartozó feladatok bemutatása PPT keretében (elkészült diagramok és képernyőtervek)`
```

### 8.3. Prototípus I. (3. mérföldkő)

Ennek a feladatnak az a célja, hogy egy működő prototípust hozzunk létre, ahol a vállalt funkcionális követelmények nagy része már prezentálható állapotban van.

Részfeladatai a következők:

#### 8.3.1. Felhasználók kezelése (admin, partner, vásárló, vendég) (CR)

Felelős: Kurucz László

Tartam:  5 nap

Erőforrásigény:  2 személynap
#### 8.3.2. Felhasználók kezelése (admin, partner, vásárló, vendég) (UD)

Felelős: Papp Bence

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.3.3. Felhasználók kezeléséhez szükséges adatok létrehozása az adatbázisban

Felelős: Papp Bence

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.3.4. Felhasználói munkamenet megvalósítása több jogosultsági szinttel

Felelős: Szegedi Bence

Tartam:  10 nap

Erőforrásigény:  2 személynap

#### 8.3.5. Raktárak kezelése (CRUD)

Felelős: Szabó Bence

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.3.6. Raktárkezeléshez szükséges adatok létrehozása az adatbázisban

Felelős: Kurucz László

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.3.7. Árukészletek kezelése ( C )

Felelős: Racskó Ádám

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.3.8. Árukészletek kezelése ( R )

Felelős: Szabó Bence

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.3.9. Árukészletek kezelése (UD)

Felelős: Szántó Mihály

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 8.3.10. Árukészletek kezeléséhez szükséges adatok létrehozása az adatbázisban

Felelős: Szántó Mihály

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 8.3.12. Rendelés kezelése (CR)

Felelős: Kovács-Némedi Máté

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.3.13. Rendelés kezelése (UD)

Felelős: Szántó Mihály

Tartam:  5 nap

Erőforrásigény:  2 személynap

#### 8.3.14. Rendelés szükséges adatok létrehozása az adatbázisban

Felelős: Szegedi Bence

Tartam:  3 nap

Erőforrásigény:  1 személynap

#### 8.3.15. Email-es kiértesítés elfogadott rendelés esetén a megrendelőnek

Felelős: Kurucz László

Tartam:  4 nap

Erőforrásigény:  2 személynap

#### 8.3.17. Biztonsági mentés automatikus létrehozása

Felelős: Racskó Ádám

Tartam: 3 nap

Erőforrásigény:  1 személynap

#### 8.3.18. Tesztelési dokumentum az összes funkcióhoz (TP, TC)

Felelős: Mindenki

Tartam:  7 nap

Erőforrásigény:  1 személynap/fő

#### 8.3.19. A prototípus kitelepítése éles környezetbe

Felelős: Szegedi Bence, Kurucz László

Tartam: 1 nap

Erőforrásigény:  1 személynap


### 8.4. Prototípus II. (4. mérföldkő)

Ennek a feladatnak az a célja, hogy az előző mérföldkő hiányzó funkcióit pótoljuk, illetve a hibásan működő funkciókat és az esetlegesen felmerülő új funkciókat megvalósítsuk. Továbbá az alkalmazás alapos tesztelése is a mérföldkőben történik az előző mérföldkőben összeállított tesztesetek alapján.

Részfeladatai a következők:

#### 8.4.1. Javított minőségű prototípus új funkciókkal

Felelős: `Teszt Elek`

Tartam:  `5 nap`

Erőforrásigény:  `2.5 személynap`

#### 8.4.2. Javított minőségű prototípus javított funkciókkal

Felelős: `Lev Elek`

Tartam:  `5 nap`

Erőforrásigény:  `2 személynap`

#### 8.4.3. Javított minőségű prototípus a korábbi hiányzó funkciókkal

Felelős: `Remek Elek`

Tartam:  `5 nap`

Erőforrásigény:  `1.5 személynap`

#### 8.4.4. Felhasználói munkamenet tesztelése (TR)

Felelős: `Teszt Elek`

Tartam:  `1 nap`

Erőforrásigény:  `1 személynap`

#### 8.4.5. Raktárak kezelésének tesztelése (TR)

Felelős: `Remek Elek`

Tartam:  `1 nap`

Erőforrásigény:  `0.5 személynap`

#### 8.4.6. Árukészletek kezelésének tesztelése (TR)

Felelős: `Teszt Elek`

Tartam:  `1 nap`

Erőforrásigény:  `1 személynap`



#### 8.4.8. Rendelések kezelésének tesztelése (TR)

Felelős: `Lev Elek`

Tartam:  `1 nap`

Erőforrásigény:  `0.5 személynap`

#### 8.4.9. Email-es funkciók tesztelése (TR)

Felelős: `Remek Elek`

Tartam:  `1 nap`

Erőforrásigény:  `0.5 személynap`



#### 8.4.11. Biztonsági mentés tesztelése (TR

Felelős: `Lev Elek`

Tartam:  `1 nap`

Erőforrásigény:  `0.5 személynap`

#### 8.4.12. A prototípus kitelepítésének frissítése

Felelős: Kurucz László, Szegedi Bence

Tartam:  1 nap

Erőforrásigény:  0.5 személynap


## 9. Részletes időbeosztás

![image](./MINTA-gantt-diagram.png)

```
Ide kell berakni a Gantt diagramot, amely a 9. fejezetben található részfeladatokat tartalmazza felelős/tartam bontásban.
```

## 10. Projekt költségvetés

```
Az egyes leadások alkalmával rögzített erőforrásigényt, az elvállalt feladatok számát 
és az adott mérföldkőben végzett munkáért szerezhető pontszámot kell beírni minden emberre külön-külön.
Figyeljünk arra, hogy mivel mindenkinek minden mérföldkövön dolgoznia kell, ezért a 10.3-as táblázat
minden módosítható oszlopában legalább 1 pontnak szerepelni kell.
```

### 10.1. Részletes erőforrásigény (személynap)


| Név               |   M1  |   M2  |   M3 |   M4  | Összesen |
|--------------     |-------|-------|------|-------|----------|
| Szegedi Bence     | `1.5` | `1.5` | `11` | `5`   | `19`     |
| Szabó Bence       | `1`   | `4`   | `13` | `3`   | `21`     |
| Kurucz László     | `1`   | `2.5` | `10` | `3.5` | `17`     |
| Papp Bence        | `1`   | `4`   | `13` | `3`   | `21`     |
| Kovács-Némedi Máté| `1`   | `2.5` | `10` | `3.5` | `17`     |
| Szántó Mihály     | `1`   | `4`   | `13` | `3`   | `21`     |
| Racskó Ádám       | `1`   | `2.5` | `10` | `3.5` | `17`     |

### 10.2. Részletes feladatszámok

| Név               |   M1  |   M2  |   M3 |   M4  | Összesen |
|--------------     |-------|-------|------|-------|----------|
| Szegedi Bence     | `1.5` | `1.5` | `11` | `5`   | `19`     |
| Szabó Bence       | `1`   | `4`   | `13` | `3`   | `21`     |
| Kurucz László     | `1`   | `2.5` | `10` | `3.5` | `17`     |
| Papp Bence        | `1`   | `4`   | `13` | `3`   | `21`     |
| Kovács-Némedi Máté| `1`   | `2.5` | `10` | `3.5` | `17`     |
| Szántó Mihály     | `1`   | `4`   | `13` | `3`   | `21`     |
| Racskó Ádám       | `1`   | `2.5` | `10` | `3.5` | `17`     |

### 10.3. Részletes költségvetés

| Név              | M1     | M2    | M3    | M4    | Összesen|
|------------------|--------|-------|-------|-------|---------|
| Maximálisan megszerezhető pontszám  |(7)|(20)|(35)|(28)|100% (70) |
| Szegedi Bence     | `1.5` | `1.5` | `11` | `5`   | `19`     |
| Szabó Bence       | `1`   | `4`   | `13` | `3`   | `21`     |
| Kurucz László     | `1`   | `2.5` | `10` | `3.5` | `17`     |
| Papp Bence        | `1`   | `4`   | `13` | `3`   | `21`     |
| Kovács-Némedi Máté| `1`   | `2.5` | `10` | `3.5` | `17`     |
| Szántó Mihály     | `1`   | `4`   | `13` | `3`   | `21`     |
| Racskó Ádám       | `1`   | `2.5` | `10` | `3.5` | `17`     |

Szeged, ` utolsó módosítás: 2024-10-07 19:00 `
