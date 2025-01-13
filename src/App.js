import './App.css';
import ExtendableQuestion from './ExtendableQuestion.tsx';


function App() {

  const questions = [
    {question: "Kan jag klassas som en dold talang?", answer: "Ja, absoult"},
    {question: "Hur vet jag om detta är ett event för mig?", answer: "Det är ett event för alla"},
    {question: "Måste jag visa upp min dolda talang?", answer: "Ja, annars tror vi inte på dig"},
    {question: "Är en dold talang ett krav för att delta?", answer: "Ja, inga publika talanger tack"},
    {question: "Får jag delta?", answer: "Kanske, om du kan vår hemliga kod för att komma med"},
  ]

  const projectmembers = [
    {name: "Hanna Jansson", description: "Designer för närvarande bosatt i Stockholm som brinner för att skapa ett nätverk av kvinnor som peppar varandra!"},
    {name: "Erika Markusson", description: "Designer för närvarande bosatt i Stockholm som brinner för att skapa ett nätverk av kvinnor som peppar varandra!"},
    {name: "Monica Lindmark", description: "Designer för närvarande bosatt i Stockholm som brinner för att skapa ett nätverk av kvinnor som peppar varandra!"},
    {name: "Rebecka Söderström", description: "Designer för närvarande bosatt i Stockholm som brinner för att skapa ett nätverk av kvinnor som peppar varandra!"},
    {name: "Ida Aavik", description: "Designer för närvarande bosatt i Stockholm som brinner för att skapa ett nätverk av kvinnor som peppar varandra!"}
  ]

  return (
    <div className="mainWrapper">
      <div className='block-dark'>
        <div className="blockContent">
          <div className="navBar">
            <p>28 FEBRUARI 2025</p>
            <img className='navbarLogo' src="./assets/logo/Group 3-1.png"/>
            <a className="links" href="https://www.tickster.com/se/sv/events/7xfhupvfxtf29h6/2025-02-28/hidden-talents">Köp biljett</a>
          </div>
          
          <div className="h1">
            H!DDEN TALENTS
          </div>
          <div className="block1-textAndImagesWrapper">
            <div className="block1-bodyAndTicket">
              <div className='body-light block1-body'>En kväll där vi lyfter dolda talanger hos kvinnor med stark koppling till Örnsköldsvik. och massor med text som är beskrivande typ som en om text man kan läsa här</div>
              <button className='ticketButton' onClick={() => {window.open('https://www.tickster.com/se/sv/events/7xfhupvfxtf29h6/2025-02-28/hidden-talents')}}>Köp din biljett här</button>
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
              <div className="body-dark block2-bodyText">Den vanligaste frågan vi får är vad en dold talang är och här är vår defintion på en dold talang: “Någon som ... “</div>
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
          <div className="h2-light">GULDPARTNER</div>
          <div className="body-light">Vi är glada att presentera guldpartner som vill vara med och bidra till ...</div>
          <div className="body-light">Kort text om företaget! Länkar?</div>
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
                <div className="body-dark schemaItem">17.30 // Talang för framtidens bruk - Åsa Hägglund</div>
                <div className="body-dark schemaItem">17.50 // Musik av kvinnliga talanger - Rebecka Söderström, Cecilia Grönfelt & Edit Vestberg varvas med Maarit Juntunen som läser poesi</div>
                <div className="body-dark schemaItem">18.30 // Middagsbuffé</div>
                <div className="body-dark schemaItem">19.30 // Talang i en motorburen värld - Sandra Wiberg</div>
                <div className="body-dark schemaItem">19.50 // Musik av kvinnliga talanger - Melinda Westin</div>
                <div className="body-dark schemaItem">20.00 // Efterrättsbuffé</div>
                <div className="body-dark schemaItem">21.00 // Musik av kvinnliga talanger - Linnea Israelsson, Frida Perstrand och Lena Lindberg</div>
                <div className="body-dark schemaItem">21.30 // Dansgolvet öppnar med DJ</div>
              </div>
            </div>
            <div className='block4-images'>
              <div className="block4-imageAndTextTop">
                <img className='img-small block4-imgTop' src="./assets/images/Images06.png"/>
                <div>Talare1: Johanna Lundin</div>
              </div>
              <div className="block4-imageAndTextBottom">
                <img className='img-small block4-imgBottom' src="./assets/images/Images11.png"/>
                <div>Talare1: Johanna Lundin</div>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div className="block-dark">
        <div className="blockContent">
          <div className="h2-light">PROJEKTGRUPPEN</div>
          <div className="body-light">Detta är en underrubrik</div>
          <div className="projectTeamImages">
                  {projectmembers.map((member) => (
                    <>
                      <div className="projectMemberBackground">
                        <div className='projectMemberImage'></div>
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
      <div className="footer-dark">
        <div className="blockContent">
          <div className="body-light">Vi är en idéel förening som gör detta event enbart av glädjen det ger oss att se de fina kontakterna som skapas under en kväll, så tack tack tack för att du tog dig tiden att läsa igenom vår webbsida och vi hoppas verkligen vi syns i februari - följ oss i våra sociala kanaler för de senaste uppdateringarna</div>
          <div className="body-light">©2024 Hanna Jansson & Erica Markusson. All Rights Reserved</div>
          
        </div>  
      </div>
    </div>
  );
}

export default App;
