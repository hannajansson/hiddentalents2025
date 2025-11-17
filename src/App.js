import './App.css';
import ExtendableQuestion from './ExtendableQuestion.tsx';


function App() {

  const questions = [
    {question: "Har jag en dold talang?", answer: "Talang handlar inte om att du måste prestera bättre än någon annan eller vinna över andra. Utan det handlar om att du genom naturlig förmåga eller inövad skicklighet gör något som kanske gör dagen lite bättre för dig eller din omgivning. Det kan vara att allt från konstnärligt skapande till ledarskap och att projektleda vardagen."},
    {question: "Hur vet jag om detta är ett event för mig?", answer: "Kvällen är riktad till kvinnor med koppling till Örnsköldsvik, i alla åldrar, med all slags bakgrund och alla delar av kommunen. Om du är intresserad av att dela med dig av dina erfarenheter, underhållas av talangfulla kvinnor eller inspireras av kvinnors framgångshistorier är detta event för dig. När kvällen är slut ska vi tillsammans ha tagit ett steg för att synliggöra och stärka kvinnors talanger genom samtal, framträdanden och ett showroom."},
    {question: "Måste jag visa upp min dolda talang?", answer: "Nej, fokus är på att uppmärksamma och värdesätta var individs unika förmågor. Det är inget krav på att delta i någon specifik form men alla som deltar har möjlighet att visa sin talang i ett showroom och genom samtal med andra kvinnor under kvällen."},
    {question: "Är en dold talang ett krav för att delta?", answer: "Nej, en dold talang är inte ett krav för att delta. Eventet är öppet för alla kvinnor som vill vara en del av gemenskapen och inspireras av andra. Syftet är att uppmärksamma och stärka kvinnors talanger och vem vet, när kvällen är slut kanske du ser att du har en talang som inte ens du visste om?"},
    {question: "Får jag delta?", answer: "Ja, kom precis som du är! Det blir en kväll för dig att inspireras och bidra till en gemenskap!"},
  ]

  const projectmembers = [
    {name: "Hanna Jansson", description: "Designer för närvarande bosatt i Stockholm som brinner för att skapa ett nätverk av kvinnor som peppar varandra!", image: "./assets/images/Hanna.jpg"},
    {name: "Erica Markusson", description: "Bor i Högbyn med sin familj och försöker hitta tid för kreativitet när hon inte jobbar med att stötta startups!", image: "./assets/images/Erica.png"},
    {name: "Monica Lindmark", description: "Pltaschef på VIK Group Event och golf. Inspirerad av människors drivklart och ser möjligheter före hinder!", image: "./assets/images/Monica.png"},
    {name: "Rebecka Söderström", description: "Musiklärare, musikutövare och mamma till två döttrar som finner sin inspiration i mötet med andra människor!", image: "./assets/images/Rebecka.JPG"},
    {name: "Ida Aavik", description: "Nyinflyttad i Övik och mitt uppe i husbygge. Brinner för användarvänlighet och att ta mig ann nya utmaningar!", image: "./assets/images/Ida.JPG"},
  ]

  return (
    <div className="mainWrapper">
      <div className='block-image'>
        <div className="blockContent">
          <div className="navBar">
            <p>27 FEBRUARI 2026</p>
            <img className='navbarLogo' src="./assets/logo/Group 3-1.png"/>
            <a className="links" href="https://forms.gle/6WL1MckoHWtxnycN8">Anmäl till showroom</a>
          </div>
          
          <div className="h1">
            H!DDEN TALENTS
          </div>
          <div className="block1-textAndImagesWrapper">
            <div className="block1-bodyAndTicket">
              <div className='body-light block1-body'>En kväll där vi lyfter dolda talanger hos kvinnor med stark koppling till Örnsköldsvik. och massor med text som är beskrivande typ som en om text man kan läsa här</div>
              <button className='ticketButton' onClick={() => {window.open('https://www.tickster.com/se/sv/events/7xfhupvfxtf29h6/2025-02-28/hidden-talents')}}>Köp din biljett här</button>
              <button className='showroomButton' onClick={() => {window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ffH3sNMSU8YFw5trZEgzcFxGCwYHgauP-eDHgqqUAGTtEg/viewform')}}>Anmäl till showroom</button>
            </div>
            <div className="block1-images">
              <img className='img-small block1-smallImg' src="./assets/images/Images11.png"/>
              <img className='img-medium' src="./assets/images/Images06.png"/>
            </div>
          </div>
        </div>
      </div>
      <div className='block-light'>
        <div className="blockContent">
          <div className="h2-dark">DOLD TALANG?</div>
          <div className='block2-textAndImagesWrapper'>
            <div>
              <div className="body-dark block2-bodyText">Den vanligaste frågan vi får är vad en dold talang är. För oss är det en naturlig förmåga eller skicklighet inom ett visst område som känns genuin och ger glädje för både individen och andra. Vi vill uppmärksamma och värdesätta de unika förmågor som kvinnor borde uppskatta hos sig själva och som andra borde uppskatta att de har.</div>
              <div className="block2Questions">
                {questions.map((question) => (
                  <>
                    <ExtendableQuestion question={question.question} answer={question.answer}/>
                    <div className="questionSeparator"></div>
                  </>
                ))}
              </div>
            </div>

              <img className='img-large' src="./assets/images/Images06.png"/>
            
          </div>
        </div>
      </div>
      <div className="block-dark">
        <div className="blockContent">
        <div className="content-container">
            <div className="text-content">
              <div className="h2-light">GULDPARTNER</div>
              <div className="body-light">
                Som lokal och fristående Sparbank är vårt syfte att skapa nytta för våra kunder och vårt lokalsamhälle. Förutom att våra vinster går till att bygga en trygg och stabil bank så avsätter vi varje år en del av vinsten till sponsring och bidrag till samhällsnytta, vilket är en central del i sparbanksidén. Våra bidrag sker utifrån mottot ”Vi ser människan”. Vi utgår även från ett hållbarhetsperspektiv, vilket innebär att vi prioriterar och stöttar initiativ som bidrar till de globala målen om hållbar utveckling. Vi har valt att vara guldpartners till Hidden talents för att bidra till deras värdefulla arbete med att främja jämställdhet och framhäva talangfulla kvinnor i vårt samhälle.
              </div>
            </div>
            <img className="img-sponsor" src="./assets/images/Jubileumsloggan med huset.png" alt="Guldpartner" />
          </div>
          <div class="logo-container">
          <p class="paragraph-logo">Våra möjliggörare</p>
          <div class="logo-row">
            <img src="./assets/logo/Hotellogo.png" alt="Logo 1" class="logo-img" />
            <img src="./assets/logo/Stattlogo.png" alt="Logo 2" class="logo-img" />
            <img src="./assets/logo/Sidensjologo.png" alt="Logo 3" class="logo-img" />
          </div>
        </div> 
        </div> 
      </div>
      <div className="block-light">
        <div className="blockContent">
          <div className="h2-dark">KVÄLLENS PROGRAM</div>
          <div className="schemaAndImageWeapper">
            <div className='schemaWrapper'>
              <div className='schemaImage'>
                <img src="./assets/icons/Sun icon.svg" className='schemaIcon'/>
                <div className='schemaLine'></div>
                <img src="./assets/icons/Moon icon.svg" className='schemaIcon'/>
              </div>
              <div className="schemaItems">
                <div className="body-dark schemaItem">17.00 // Fördrink i showroom med dolda talanger och dolda mästerverk</div>
                <div className="body-dark schemaItem">17.30 // Vi välkomnas av dansuppträdande & poesi från kvinnliga talanger</div>
                <div className="body-dark schemaItem">17.35 // Dansuppträdande av Martina Hanell</div>
                <div className="body-dark schemaItem">18.00 // Maarit Juntunen framför poesi från Musikhjälpen</div>
                <div className="body-dark schemaItem">18.15 // Sidensjö Sparbank presenterar Hidden Speaker: Ulrika Sedin</div>
                <div className="body-dark schemaItem">18.30 // Middagsbuffé</div>
                <div className="body-dark schemaItem">19.30 // Musik av Alice Hellström och Siirin Ludén</div>
                <div className="body-dark schemaItem">19.45 // Vägen mot Drakbåts-SM - Josefine Rönnqvist, Linda Karlfors och och Magdalena Zunino Åberg</div>
                <div className="body-dark schemaItem">20.00 // Efterrättsbuffé</div>
                <div className="body-dark schemaItem">20.45 // Musik av Rebecka Karlsdotter</div>
                <div className="body-dark schemaItem">21.30 // Dansgolvet öppnar och First Hotell Statt fortsätter</div>
              </div>
            </div>
            <div className='block4-images'>
              <div className="block4-imageAndTextTop">
                <img className={window.innerWidth <= 480 ? 'img-small' : 'img-large'} src="./assets/images/Ulrika.jpg"/>
                <div>Talare 1: Ulrika Sedin</div>
              </div>
              <div className="block4-imageAndTextBottom">
                <img className='img-small block4-imgBottom' src="./assets/images/Talare2.JPG"/>
                <div>Talare 2: Linda & Josefine</div>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div className="block-dark block-5">
        <div className="blockContent">
          <div className="h2-light">{window.innerWidth <= 480 ? "PROJEKT-GRUPPEN" : "PROJEKTGRUPPEN"}</div>
          <div className="body-light">Sommaren 2024 bildades den ideella föreningen Hidden Talents för att främja att kvinnor ska bli stärkta i sin vardag och känna sig uppskattade. Genom eventet Hidden Talents skapas en scen, showroom och generationsöverskridande nätverk för kvinnor att lyfta varandras dolda talanger.</div>
          <div className="projectTeamImages">
                  {projectmembers.map((member) => (
                    <>
                      <div className="projectMemberBackground">
                        <div className='projectMemberImageDiv'>
                          <img src={member.image} className='projectMemberImage'>{member.img}</img>
                        </div>
                        <div>
                          <div className='projectMemberName'>{member.name}</div>
                          <div className='projectMemberDesc'>{member.description}</div>
                        </div>
                      </div>
                    </>
                  ))}
          </div>
        </div>  
      </div>
      <div className="footer">
        <div className="blockContent">
          <div className='footer-titles'>
          <div className="footer-h1-top">
              <div className="h1-bottom">
                H!DDEN TALENTS
              </div>
              <img className='footer-logo' src="./assets/logo/Group 3.png"/>
              <div className="h1-bottom">
                H!DDEN TALENTS
              </div>
              <img className='footer-logo' src="./assets/logo/Group 3.png"/>
            </div>
            <div className="footer-h1-middle">
              <div className="h1-pink">
                H!DDEN TALENTS
              </div>
              <img className='footer-logo' src="./assets/logo/Group 3-1.png"/>
              <div className="h1-pink">
                H!DDEN TALENTS
              </div>
            </div>
            <div className="footer-h1-bottom">
              <div className="h1-bottom">
                H!DDEN TALENTS
              </div>
              <img className='footer-logo' src="./assets/logo/Group 3.png"/>
              <div className="h1-bottom">
                H!DDEN TALENTS
              </div>
            </div>
          </div>
          <div className='footer-bottom-container'>
            <div>
              <div className="body-light">Vi är en idéel förening som gör detta event enbart av glädjen det ger oss att se de fina kontakterna som skapas under en kväll, så tack tack tack för att du tog dig tiden att läsa igenom vår webbsida och vi hoppas verkligen vi syns i februari - följ oss i våra sociala kanaler för de senaste uppdateringarna</div>
              <div className="body-light-bold">©2024 Hanna Jansson & Erica Markusson. All Rights Reserved</div>
            </div>
            <div>
              <div className='footer-links'>
                <div onClick={() => {window.open('')}}>Instagram</div>
                <div onClick={() => {window.open('')}}>Facebook</div>
                <div onClick={() => {window.open('')}}>LinkedIn</div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
