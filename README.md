# Kangaroo
## Installation

- $git clone https://github.com/anthonwellsjo/kangaroo.git
- npm install
- npm build
- npm start
- open http://localhost:1234/index.html in your browser
- ✨Magic ✨

## Externa bibliotek

### "@apollo/client": "^3.3.14", "graphql": "^15.5.0",
Klient för att konsumera graphQl (från sanity (där all content lever (notiser och artiklar)) -> och i framtiden från Apollo-Express-Servern som i nuläget inte används på klient-sidan)
### "@react-firebase/auth": "^0.2.10", "firebase": "^8.4.0":
För autentisering med firebase.
### "axios": "^0.21.1":
För http-requests till firebase realtime server (test databas för prototyp).
### "csstype": "^3.0.7":
Css-typer för typescript
### "@types/*":
Alla typer till Typescript.
### "concurrently":
För att köra flera script samtidigt i packase.json.
### "react-hook-form":
Ett paket för som föränklar användandet av forms i React.
### "react-router-dom":
För routing i react.
### "react-spring": 
Animationsbibliotek för react.
### "parcel-bundler":
En bundler för att bundla react-projektet.
### "typescript":
För användning av Typescript och en kompiler för att kompilera jsx.
### "sass":
Css pre-processor
    
## Tjänster
### Extern datalagring
I nuläget använder prototypen en firebase realtime db för datalagring. Med axios görs CRUD-anrop på en hårdkodad användare (samma användare oavsett vem som loggar in). För att se alla anrop, se client\src\REACT\src\queries\firebase\. Nedan följer exempel på när och varför dessa anrop används:

##### 1. Lägga till barn
I komponenten DashboardView>UserDash>NewChildButton (src\REACT\src\views\DashBoardView\components\NewChildButton\NewChildButton.tsx) finns en onClick-event. Den anropar context api (UserContext -> som ämnar att styra globalt tillstånd som har med en inloggad användare att göra) och ändrar showNewChildModal till true. Denna flagga renderar NewChildModal som innehåller ett formulär för att ange namn och födelsedatum. När användaren klickar på spara så renderas NewChildTaskModal som  innehåller ett axios.post-anrop och renderar olika beroende på svaret från anrop (laddningssida, eller success-view). 
Varför? Jag har valt att låta varje anrop API-anrop leva i en egen komponent (*TaskModal) för att dela upp koden i mindre komponenter + lätt kunna hantera visuell rendering beroende på svaret från api:et.
Dessa två sistnämna komponenter lever i GlobalModalLayer (mer om denna komponent nedan)

##### 2. Ta bort barn
I komponenten DashboardView>UserDash>ChildProfile finns en knapp som ändrar tillståndet deleteChildStatusModalOpen till true. Detta renderar DeleteChildTaskModal till true och en custom hook useFirebaseDeleteChildFromUser anropas som i sin tur har ett axios.delete-anrop för att ta bort barnet. 
Varför? I detta fallet lever DeleteChildTaskModal (komponenten som sköter anropet) inuti ChildProfile för att jag anser inte att det är ett anrop/ en rendering som jag vill kunna göra från fler platser i appen.

##### 3. Hämta alla användare från firebase realtime db
I app.ts så hämtas alla användare som ligger på datasen med hooken useFirebaseUsers().  Detta är såklart inte ok i en live-build eftersom det skulle innebära säkerhetsfaror och onödigt stor dataöverföring ifall det finns många användare. Dvs. det är logik som ska leva på servern i en http-endpoint (eller resolver i graphQl-världen). Detta anrop görs med en axios.get. 
Varför? Användaren omdirigeras (rerouting) till olika views (DashBoard eller Landing) beroende på om hen är inloggad eller inte. Därför behöver jag kontrollera (simulera att jag kontrollerar) att användaren är inloggad och finns i databasen innan appen renderas. Se följande kod:
``` 
        <Route exact path="/">
            {page.user ?
              <Redirect to={`/dashboard/${(page.user as firebase.User).uid}`} /> :
              <LandingView />}
         </Route>
```

##### Angående GlobalModalLayer
I komponenten GlobalModalLayer (Som wrappar hela appen i app.tsx) lever alla modals som jag i framtiden kommer kunna vilja kunna rendera från fler ställen i appen och renderas efter flaggor som ligger i context api (alternativet hade varit att renderat denna modal i "närhet" av NewChildButton-komponenten men då hade jag fått skapa flera instanser av denna komponent ifall jag skulle vilja att en användare ska kunna komma åt att lägga till användare på flera platser i appen).



### Autentisering
Jag använder firebase auth för autentisering för en snabbt integrerad och säker implementering av auth på hemsidan. Användarinformationen kommer sedan att leva på postgresQl-databasen (istället för firebase realtime db).


## Transpilers
On build code is transpiled from .ts and .jsx (.tsx) to Javascript using TypeScript transpiler
and from .scss to .css using sass.
