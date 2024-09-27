const div = document.getElementById('fixtures')
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
let num = 0
const fecha = `${year}-${month}-${day}`;

partidoshoy(num)
function partidoshoy(num) {fetch(proxy+`index?fecha=${fecha}&num=${num}&token=${token}`)
.then(response => response.json())
.then(response => {
  console.log(response)

  const competitions = [
    { id: "sr:competition:295", name: "Eliminatorias Conmebol", flag: "https://flagcdn.com/un.svg", tableId: "tableConmebol" },
    { id: "sr:competition:27", name: "Eliminatorias UEFA", flag: "https://flagcdn.com/un.svg", tableId: "tableUefa" },
    { id: "sr:competition:23755", name: "UEFA Nations League", flag: "https://flagcdn.com/un.svg", tableId: "tableUefaNL" },
    { id: "sr:competition:14", name: "Eliminatorias Concacaf", flag: "https://flagcdn.com/un.svg", tableId: "tableConcacaf" },
    { id: "sr:competition:7", name: "Champions League", flag: "", tableId: "tableChampions" },
    { id: "sr:competition:384", name: "Copa Libertadores", flag: "", tableId: "tableLibertadores" },
    { id: "sr:competition:480", name: "Copa Sudamericana", flag: "", tableId: "tableSudamericana" },
    { id: "sr:competition:155", name: "Liga Profesional", flag: "https://flagcdn.com/ar.svg", tableId: "tableLigaArg" },
    { id: "sr:competition:1024", name: "Copa Argentina", flag: "", tableId: "tableCopaArg" },
    { id: "sr:competition:17", name: "Premier League", flag: "https://flagcdn.com/gb.svg", tableId: "tablePremier" },
    { id: "sr:competition:21", name: "Carabao Cup", flag: "", tableId: "tableCarabao" },
    { id: "sr:competition:18", name: "FA Cup", flag: "", tableId: "tableFACup" },
    { id: "sr:competition:8", name: "LaLiga", flag: "https://flagcdn.com/es.svg", tableId: "tableLaLiga" },
    { id: "sr:competition:329", name: "Copa del Rey", flag: "", tableId: "tableCopaDelRey" },
    { id: "sr:competition:23", name: "Serie A", flag: "https://flagcdn.com/it.svg", tableId: "tableSerieA" },
    { id: "sr:competition:328", name: "Coppa Italia", flag: "", tableId: "tableCoppaItalia" },
    { id: "sr:competition:30", name: "Bundesliga", flag: "https://flagcdn.com/de.svg", tableId: "tableBundesliga" },
    { id: "sr:competition:703", name: "Primera Nacional", flag: "https://flagcdn.com/ar.svg", tableId: "tableNacionalB" },
    { id: "sr:competition:1347", name: "B Metro", flag: "https://flagcdn.com/ar.svg", tableId: "tableBmetro" },
    { id: "sr:competition:30106", name: "Federal A", flag: "https://flagcdn.com/ar.svg", tableId: "tableFederalA"},
    { id: "sr:competition:26174", name: "Primera C", flag: "https://flagcdn.com/ar.svg", tableId: "tablePrimeraC"},
    { id: "sr:competition:30254", name: "Primera D", flag: "https://flagcdn.com/ar.svg", tableId: "tablePrimeraD"},
    { id: "sr:competition:40649", name: "Copa Proyeccion Reserva", flag: "https://flagcdn.com/ar.svg", tableId: "tableCopaReserva"},
    { id: "sr:competition:36954", name: "Copa Proyeccion Reserva", flag: "https://flagcdn.com/ar.svg", tableId: "tableCopaReserva1"}
  ];
  
  function createOrUseExistingTable({ id, name, flag, tableId }) {
    let table = document.getElementById(tableId);
    
    if (!table) {
      table = document.createElement('table');
      table.id = tableId;
      table.className = "table table-striped table-bordered";
      tablas.appendChild(table);
    }
    tablavivo(response.summaries, id, name, flag, table);
  }
  
  competitions.forEach(createOrUseExistingTable);

  // Resto del mundo
  //tablavivo(response.summaries, "asd", "resto", "https://flagcdn.com/un.svg", tableresto)
  function tablavivo(obj, liga, nombre, bandera, table){
    for(let key in obj){
       if(response.summaries[key].sport_event.sport_event_context.competition.id === liga){
        const tr = document.createElement('tr')
        if (table.querySelectorAll('tr').length < 1) {
         const trcomp = document.createElement('tr')
         table.appendChild(trcomp)
         const thh = document.createElement('th')
         const competencia = document.createElement('a')
         competencia.textContent = nombre
         competencia.href= "#"
         thh.style= 'background-color: black; text-align:center;'
         thh.colSpan = '8'
         const id2 = response.summaries[key].sport_event.sport_event_context.season.id.split(":");
         const ida = response.summaries[key].sport_event.sport_event_context.competition.id.split(":")
         const IdsCopas = ["23755", "7", "384", "480", "1024", "21", "18", "329", "328"];
         if(IdsCopas.includes(ida[2])){
          competencia.addEventListener('click', () => copa1(id2[2], nombre))
         }else{
         competencia.addEventListener('click', () => temporada1(id2[2], bandera, nombre))
         }
         const img = document.createElement('img')
         img.src = bandera
         img.style= "width:30px; padding:0; background-color: transparent;"
         const img2 = document.createElement('img')
         img2.src = bandera
         img2.style= "width:30px; padding:0; background-color: transparent;"
         competencia.style="color: white;background-color:transparent;text-decoration: none; font-size:18px;"
         competencia.prepend(img)
         competencia.appendChild(img2)
         thh.appendChild(competencia)
         trcomp.appendChild(thh)
         }
         crearTabla(table, "no")}
          else if (nombre === "resto"){
            const competenciasIds = ["sr:competition:30106","sr:competition:26174","sr:competition:30254","sr:competition:40649","sr:competition:36954", "sr:competition:1347","sr:competition:27","sr:competition:7", "sr:competition:384", "sr:competition:48", "sr:competition:155", "sr:competition:1024", "sr:competition:17", "sr:competition:21", 
                "sr:competition:18", "sr:competition:8", "sr:competition:329", "sr:competition:23", "sr:competition:328", "sr:competition:30", "sr:competition:703", "sr:competition:295"];
           if(competenciasIds.includes(response.summaries[key].sport_event.sport_event_context.competition.id)){
           }else{
           const resto = document.getElementById('resto')
           if(!resto){
           const table = document.createElement("table");
           table.className= "table table-striped table-bordered"
           table.id= "resto"
           tablas.appendChild(table);
           const trcomp = document.createElement('tr')
           table.appendChild(trcomp)
           const competencia = document.createElement('th')
           
           competencia.style= 'background-color: black; text-align:center;'
           competencia.colSpan = '8'
           const img = document.createElement('img')
           img.src = bandera
           img.style= "width:30px; padding:0; background-color: transparent;"
           const img2 = document.createElement('img')
           img2.src = bandera
           img2.style= "width:30px; padding:0; background-color: transparent;"
           competencia.textContent = " Resto de Competencias "
           competencia.prepend(img)
           trcomp.appendChild(competencia)
           competencia.appendChild(img2)
           crearTabla(table, "si")
           }else{crearTabla(resto, "si")}}
          }
     function crearTabla(table, sino){
     const tr = document.createElement('tr')
     if(sino=== "si"){
     const liga = document.createElement('th')
     liga.textContent = response.summaries[key].sport_event.sport_event_context.competition.name
     tr.appendChild(liga)}
     const tha = document.createElement('td')
     if (response.summaries[key].sport_event_status.status === "closed"){
      tha.textContent = "Final"
      tha.style.fontSize = "15px"
      tha.style.backgroundColor = "gray"
      tha.style.color = "white"
      tha.style.padding = "6px"
      tha.style.alignContent="center"
      tha.style.textAlign="center"
  }else if(response.summaries[key].sport_event_status.status === "live"){
      tha.textContent = response.summaries[key].sport_event_status.clock.played
      tha.style.backgroundColor= "red"
      tha.style.color = "white"
      tha.style.padding = "6px"
      tha.style.alignContent="center"
      tha.style.textAlign="center"
  }else if(response.summaries[key].sport_event_status.status === "not_started"){
      let calendario2 = response.summaries[key].sport_event.start_time.split("T")
      let calendario3 = calendario2[1].split("+")
      let calendario4 = calendario3[0].split(":")
      let cambiohorario = calendario4[0] - 3
      if(cambiohorario < 0){
          cambiohorario = 24 + cambiohorario
      }
      tha.textContent = cambiohorario+":"+calendario4[1]
      tha.style.backgroundColor = "green"
      tha.style.color = "white"
      tha.style.padding = "6px"
      tha.style.alignContent="center"
      tha.style.textAlign="center"
  }
     tha.style.minWidth="51px"
     tr.appendChild(tha)
     const local = document.createElement('td')
     const local2 = document.createElement('a')
     local2.textContent = (response.summaries[key].sport_event.competitors[0].name)
     local.style="width: 250px;"
     local2.style= "background:transparent;"
     const logo1 = document.createElement('img')
     logo1.src = 'logos/'+response.summaries[key].sport_event.competitors[0].country+'/'+response.summaries[key].sport_event.competitors[0].name+'.png'
     logo1.style = "width: 30px; padding:0px; background:transparent;"
     local.prepend(logo1)
     local.appendChild(document.createElement('br'))
     local.appendChild(local2)
     tr.appendChild(local)
     table.appendChild(tr)
     const scoreL = document.createElement('td')
     scoreL.textContent = (response.summaries[key].sport_event_status.home_score)
     scoreL.style="font-weight: bold;font-size: 24px;background-color: rgba(255, 255, 255, .93); width: 51px;"
     tr.appendChild(scoreL)
     const scoreV = document.createElement('td')
     scoreV.textContent = (response.summaries[key].sport_event_status.away_score)
     scoreV.style="font-weight: bold;font-size: 24px;background-color: rgba(255, 255, 255, .93); width: 51px;"
     tr.appendChild(scoreV)
     const visitante = document.createElement('td')
     const visitante2 = document.createElement('a')
     visitante2.textContent = (response.summaries[key].sport_event.competitors[1].name)
     visitante2.style= "background:transparent;"
     visitante.style="width: 250px;"
     const logo2 = document.createElement('img')
     logo2.src = 'logos/'+response.summaries[key].sport_event.competitors[1].country+'/'+response.summaries[key].sport_event.competitors[1].name+'.png'
     logo2.style = "width: 30px; padding:0px; background:transparent;"  
     visitante.prepend(logo2)
     visitante.appendChild(document.createElement('br'))
     visitante.appendChild(visitante2)
     tr.appendChild(visitante)
     if(response.summaries[key].sport_event_status.status === "not_started"){
      const tdPartido = document.createElement('td')
      tdPartido.textContent = " "
      tr.appendChild(tdPartido)
     }else{
      const id3 = obj[key].sport_event.id.split(":");
      const botonPartido = document.createElement('button')
      const tdPartido = document.createElement('td')
      botonPartido.textContent = " "
      botonPartido.id = "botonPartido"
      botonPartido.style = "height: 20px;width: 20px;display: flex;font-weight: bold;align-items: center;justify-content: center;"
      if(response.summaries[key].sport_event.coverage.sport_event_properties.lineups){
      botonPartido.addEventListener('click', () => partido(id3[2]))
      botonPartido.textContent = "+"
      }
      tdPartido.appendChild(botonPartido)
      tr.appendChild(tdPartido)
      table.appendChild(tr)
       }
    if(response.summaries[key].statistics){
      const tr1 = document.createElement('tr')
      const td1 = document.createElement('td')
      console.log(response.summaries[key].statistics)
      for(let i = 0; i < response.summaries[key].statistics.totals.competitors[0].players.length;i++){
        for(let j = 0; j <response.summaries[key].statistics.totals.competitors[0].players[i].statistics.goals_scored;j++){
          const nombre = response.summaries[key].statistics.totals.competitors[0].players[i].name.split(',')
          td1.textContent += nombre[0] + ";"
        }
      }
      const td2 = document.createElement("td")
      for(let i = 0; i < response.summaries[key].statistics.totals.competitors[1].players.length;i++){
        for(let j = 0; j <response.summaries[key].statistics.totals.competitors[1].players[i].statistics.goals_scored;j++){
          const nombre = response.summaries[key].statistics.totals.competitors[1].players[i].name.split(',')
          td2.textContent += nombre[0] + ";"
        }
      }
      td1.colSpan="3"
      tr1.appendChild(td1)
      td2.colSpan="3"
      tr1.appendChild(td2)
      tr1.style="font-weight: bold;font-size: 12px;background-color: rgba(255, 255, 255, 0.93);"
      table.appendChild(tr1)
    }
     }
    }
}
if(response.summaries.length > 199){
  num+=200
  partidoshoy(num)
  //setTimeout (partidoshoy(num), 2)
  //setTimeout (borrarTablas, 301)
}else{
  console.log("No hay más partidos.")
  //setTimeout (borrarTablas, 101)
}


  /*function borrarTablas(){
  const tablas = document.getElementsByTagName("table");
  Array.from(tablas).forEach((tabla) => {
    const numeroFilas = tabla.getElementsByTagName("tr").length;
    if (numeroFilas === 0) {
        tabla.remove();
        console.log("Una tabla vacía ha sido eliminada.");
    }
});
}*/
})
  .catch(err => console.error(err));
}
function partido(id){
  const url = `partido.html?id=${encodeURIComponent(id)}`;
  window.location.href = url;
}