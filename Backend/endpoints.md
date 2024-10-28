# Backend végpontok

`http://localhost:3000`

## /auth

<table style="text-align: center;">
    <tr>
        <th>Végpont</th>
        <th>params</th>
        <th>body</th>
        <th>Válasz</th>
        <th>Megjegyzés</th>
    </tr>
    <tr>
        <td>/registration</td>
        <td>-</td>
        <td>
        <pre><code>
{
    email: string,
    lastName: string,
    firstName: string,
    birthDate: string (forma: "YYYY-MM-DD"),
    password: string (erősnek kell lennie),
    nick: string | null (azaz, kihagyható),
    postcode: string,
    address: string,
    mobile: string
}
        </code></pre>
        </td>
        <td>
            Sikeres:
            <pre><code>
{
    message: string,
    user: JSON
}
            </code></pre>
        </td>
        <td>Itt elég a status code-t vizsgálni, hogy 201-e (CREATED). Ezt a végpontot kifogom még bővíteni azzal, hogy duplikáló e-mail vagy gyenge jelszó esetén hibaüzenetet adjon vissza.</td>
    </tr>
    <tr>
        <td>/login</td>
        <td>-</td>
        <td>
            <pre><code>
{
    email: string,
    password: string
}
            </code></pre>
        </td>
        <td>
        Sikeres:<pre><code>
{
    token: string,
    user: JSON (jelszón kívül minden user attribútum)
}
        </code></pre>
        User nem található:<pre><code>
{
    message: string
}
        </code></pre>
        Hibás jelszó:<pre><code>
{
    message: string,
    (itt visszaadja a státuszt és a kódot, de az nem fontos)
}
        </code></pre>
        </td>
        <td>A kapott tokent érdemes sessionStorage-ba (elvész a lap bezárása után) vagy localStorage-ba (megmarad), majd ezt olvasni, ha szükséges (sütizést még nem próbáltam)</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
