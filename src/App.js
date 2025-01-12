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

  return (
    <div className="mainWrapper">
      <div className='block-dark'>
        <div className="blockContent">
          <div className="navBar">
            <p>28 FEBRUARI 2025</p>
            <p>logga</p>
            <p>Köp biljett</p>
          </div>
          
          <div className="h1">
            H!DDEN TALENTS
          </div>
          <div className="textAndImagesWrapper">
            <div className="block1-bodyAndTicket">
              <div className='body-light block1-body'>En kväll där vi lyfter dolda talanger hos kvinnor med stark koppling till Örnsköldsvik. och massor med text som är beskrivande typ som en om text man kan läsa här</div>
              <button className='ticketButton' onClick={() => {window.open('https://www.tickster.com/se/sv/events/7xfhupvfxtf29h6/2025-02-28/hidden-talents')}}>Köp din biljett här</button>
            </div>
            <div className="block1-images">
              <img src="assets/images/images11.png"/>
              <img src="/src/assets/images/Images06.png"/>
            </div>
          </div>
        </div>
      </div>
      <div className='block-light'>
        <div className="blockContent">
          <div className="h2-dark">DOLD TALANG?</div>
          <div className="body-dark">Den vanligaste frågan vi får är vad en dold talang är och här är vår defintion på en dold talang: “Någon som ... “</div>
          <div className="block2Questions">
            {questions.map((question) => (
              <>
                <ExtendableQuestion question={question.question} answer={question.answer}/>
                <div className="questionSeparator"></div>
              </>
            ))}
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
          <div className="body-light">17.00 // Fördrink i showroom med dolda talanger och dolda mästerverk</div>
          <div className="body-light">17.30 // Talang för framtidens bruk - Åsa Hägglund</div>
          <div className="body-light">17.50 // Musik av kvinnliga talanger - Rebecka Söderström, Cecilia Grönfelt & Edit Vestberg varvas med Maarit Juntunen som läser poesi</div>
          <div className="body-light">18.30 // Middagsbuffé</div>
          <div className="body-light">19.30 // Talang i en motorburen värld - Sandra Wiberg</div>
          <div className="body-light">19.50 // Musik av kvinnliga talanger - Melinda Westin</div>
          <div className="body-light">20.00 // Efterrättsbuffé</div>
          <div className="body-light">21.00 // Musik av kvinnliga talanger - Linnea Israelsson, Frida Perstrand och Lena Lindberg</div>
          <div className="body-light">21.30 // Dansgolvet öppnar med DJ</div>
          
        </div>  
      </div>
      <div className="block-dark">
        <div className="blockContent">
          <div className="h2-light">PROJEKTGRUPPEN</div>
          
        </div>  
      </div>
    </div>
  );
}

export default App;
