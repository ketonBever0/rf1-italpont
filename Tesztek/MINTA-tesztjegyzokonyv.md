# Tesztjegyzőkönyv-`Alapműveletek`

Az alábbi tesztdokumentum a `MINTA` projekthez tartozó `9.4.5. Alapműveletek` funkcióihoz készült. Felelőse: `Teszt Elek` 

``` 
A tesztelési dokumentáció áttekinthetőségének érdekében egy jegyzőkönyv egy adott témához tartozó funkciókat tartalmazza 
(pl. vektorműveletek) és ne az adott projekttaghoz tartozó összes funkció tesztelését belesűrítve egy fájlba.
``` 

## 1. Teszteljárások (TP)

### 1.1. Összeadás funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: összeadás funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és indítsuk el az összeadás funkciót
    1. lépés: Az `INPUT1` szövegbeviteli mezőbe írjunk be a `NUMBER1` számot
    2. lépés: Az `INPUT2` szövegbeviteli mezőbe írjunk be a `NUMBER2` számot
    3. lépés: Nyomjuk meg az `OSSZEAD` gombot 
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `NUMBER3`

### 1.2. Négyzetre emelés funkció tesztelése
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: négyzetre emelés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és indítsuk el a négyzetre emelés funkciót
    1. lépés: Az `INPUT` szövegbeviteli mezőbe írjunk be a `NUMBER1` számot
    2. lépés: Nyomjuk meg az `NEGYZETREEMEL` gombot 
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `NUMBER2`

## 2. Teszesetek (TC)

### 2.1. Összeadás funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: összeadás funkció tesztelése 
- Bemenet: `NUMBER1` = 0 ; `NUMBER2` = 3 
- Művelet: nyomjuk meg az `OSSZEAD` gombot 
- Elvárt kimenet: az eredmény mező tartalma: `NUMBER3` = 3

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: összeadás funkció tesztelése 
- Bemenet: `NUMBER1` = X ; `NUMBER2` = 3 
- Művelet: nyomjuk meg az `OSSZEAD` gombot 
- Elvárt kimenet: az eredmény mező tartalma: `NUMBER3`= HIBA (`NUMBER1` értéke nem szám)

### 2.2. Négyzetre emelés funkció tesztesetei

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: négyzetre emelés funkció tesztelése
- Bemenet: `NUMBER1` = 2 
- Művelet: nyomjuk meg az `NEGYZETREEMEL` gombot 
- Elvárt kimenet: az eredmény mező tartalma: `NUMBER2` = 4

## 3. Tesztriportok (TR)

### 3.1. Összeadás funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: 0-t beírtam
    2. lépés: 3-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (3)
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: X-t beírtam
    2. lépés: 3-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (HIBA)

### 3.2. Négyzetre emelés funkció tesztriportjai

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: 2-t beírtam
    2. lépés: a gomb egyszeri megnyomás után inaktív lett
    3. lépés: helyes eredményt kaptam (4)


    
