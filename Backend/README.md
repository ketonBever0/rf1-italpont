# Backend útmutató

## Környezeti változók

- **DATABASE_URL** - Adatbázis elérhetősége a Prisma kliens (@prisma/client) számára
  - **Minta**: `[protokoll]://[felhasználónév]:[jelszava]@[szerver IP-címe]:[port]/[adatbázis neve]`
  - **Példa**:`DATABASE_URL = mysql://prismauser:prisma123@localhost:3306/italpont"`
- **JWT_SECRET** - Titkos kulcs a JWT tokengenerálóhoz
  - Bármilyen string lehet

## Telepítés

1. Indítsd el a XAMPP-ban az Apache-ot és a mysql-t, majd a phpMyAdmin-ban hozz létre felhasználót a Prisma-nak és add meg neki a Szerkezet- és Adatkezelési jogokat (nem kötelező, használhatod a jelszónélküli root-ot is).
2. Nyisd meg VS Code-al az rf1-ben lévő `italpont.code-workspace` fájlt. Ezzel betöltöd a Frontend és Backend munkaterületeket.
3. Készítsd el a Backend mappában a `.env` fájlt, majd add hozzá a fenti környezeti változókat.
4. Nyiss terminált a Backend-nek (CTRL + Ö, majd a fenti menüben kiválasztod a Backend-et).
5. **Parancsok**:

- `npm i` - ezzel telepíted a `package.json` fájlban található modulokat.
  - (ha fel van telepítve a yarn (így: `npm install --global yarn`), akkor `yarn` parancs, ezzel a következő lépésekben `npn run...` és `npx...` parancsok helyett `yarn...` is használható)
- `npx prisma migrate deploy` - Létrehozza az adatbázis mysql-ben a Prisma séma és a migrációk alapján
- `npm run start:dev` - Elindítja a NestJS szervert fejlesztői módban
