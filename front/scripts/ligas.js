const fixtures = document.getElementById('fixtures');
const divFixture = document.getElementById('divF1')
const divFixture1 = document.createElement('div')
const divFixture2 = document.getElementById('divF2')
const div3 = document.getElementById('tableLigaDiv')
let fechano = ""

function temporadaL(id){
    fixture(id)
    temporada(id)
}

function temporada(id){fetch(proxy+`ligas?id=${id}&token=${token}`)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      for(let i = 0; i < response.standings[0].groups.length; i++){
        const titulo = document.getElementById('tituloLiga')
        const a = document.createElement('a')
      if(response.standings[0].groups.length === 1){
        a.textContent= "Tabla de Puntos"
        a.id="tituloLiga2"
      }else{
        if(i===0){
            a.textContent= "ZONA A"
        }else{
            const titulo2 = document.createElement('div')
            const a2 = document.createElement('a')
            titulo2.id="tituloLiga"
            a2.textContent= "ZONA B"
            a2.id="tituloLiga2"
            titulo2.appendChild(a2)
            div3.appendChild(titulo2)
        }
      }
      titulo.appendChild(a)
      const table = document.createElement('table')
      table.id ="tableLiga"
      table.className= "table"
      div3.appendChild(table)
      const thead = document.createElement('thead')
      const tr1 = document.createElement('tr')
      thead.appendChild(tr1)
      thead.id="theadLigas"
      table.appendChild(thead)
      tr1.style.backgroundColor="black"
      tr1.style.color="white"
      const th1 = document.createElement('th')
      th1.textContent = "#"
      th1.style="color:#ffffff; font-weight:bold;"
      tr1.appendChild(th1)
      const th2 = document.createElement('th')
      th2.textContent = "Equipo"
      th2.style="color:#ffffff; font-weight:bold;"
      tr1.appendChild(th2)
      const th3 = document.createElement('th')
      th3.textContent = "Pts"
      th3.style="color:#ffffff; font-weight:bold;"
      tr1.appendChild(th3)
      const th4 = document.createElement('th')
      th4.textContent = "PJ"
      th4.style="color:#ffffff; font-weight:bold;"
      tr1.appendChild(th4)
      const th5 = document.createElement('th')
      th5.textContent = "PG"
      th5.style="color:#ffffff; font-weight:bold;"
      tr1.appendChild(th5)
      const th6 = document.createElement('th')
      th6.textContent = "PE"
      th6.style="color:#ffffff; font-weight:bold;"
      tr1.appendChild(th6)
      const th7 = document.createElement('th')
      th7.textContent = "PP"
      th7.style="color:#ffffff; font-weight:bold;"
      tr1.appendChild(th7)
      const th8 = document.createElement('th')
      th8.textContent = "GF"
      th8.style="color:#ffffff; font-weight:bold;"
      tr1.appendChild(th8)
      const th9 = document.createElement('th')
      th9.textContent = "GC"
      th9.style="color:#ffffff; font-weight:bold;"
      tr1.appendChild(th9)
      const th0 = document.createElement('th')
      th0.textContent = "DIF"
      th0.style="color:#ffffff; font-weight:bold;"
      tr1.appendChild(th0)
      const tbody = document.createElement('tbody')
      table.appendChild(tbody)
      function forin(obj, id){
      for(let key in obj){
        const tr = document.createElement("tr")
        tr.style.backgroundColor="rgb(230,230,230)"
        tr.style.color="black"
        tr.style.fontWeight="bold"
        const pos = document.createElement('td')
        pos.textContent = response.standings[0].groups[i].standings[key].rank
        tr.appendChild(pos)
        const equipo = document.createElement('td')
        equipo.textContent = response.standings[0].groups[i].standings[key].competitor.name
        const logo = document.createElement('img')
        logo.src='logos/'+response.standings[0].groups[i].standings[key].competitor.country+'/'+response.standings[0].groups[i].standings[key].competitor.name+'.png'
        logo.id="logoEquipo"
        equipo.id="nombreEquipo"
        equipo.prepend(logo)
        tr.appendChild(equipo)
        const pts = document.createElement('td')
        pts.textContent = response.standings[0].groups[i].standings[key].points
        tr.appendChild(pts)
        const pj = document.createElement('td')
        pj.textContent = response.standings[0].groups[i].standings[key].played
        tr.appendChild(pj)
        const pg = document.createElement('td')
        pg.textContent = response.standings[0].groups[i].standings[key].win
        tr.appendChild(pg)
        const pe = document.createElement('td')
        pe.textContent = response.standings[0].groups[i].standings[key].draw
        tr.appendChild(pe)
        const pp = document.createElement('td')
        pp.textContent = response.standings[0].groups[i].standings[key].loss
        tr.appendChild(pp)
        const gf = document.createElement('td')
        gf.textContent = response.standings[0].groups[i].standings[key].goals_for
        tr.appendChild(gf)
        const gc = document.createElement('td')
        gc.textContent = response.standings[0].groups[i].standings[key].goals_against
        tr.appendChild(gc)
        const dif = document.createElement('td')
        dif.textContent = response.standings[0].groups[i].standings[key].goals_diff
        if(dif.textContent > 0){
            dif.textContent = "+"+dif.textContent
        }
        tr.appendChild(dif)
        
        if(response.standings[0].groups[i].standings[key].rank === 1){
            tr.style.backgroundColor="#90ee90"
            pos.style="background-color:#008000; color:white; padding-left 2px; padding-right:2px;"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "Champions League"){
            pos.style="background-color:#008000; color:white; padding-left 2px; padding-right:2px;"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "Copa Libertadores"){
            pos.style="background-color:#008000; color:white; padding-left 2px; padding-right:2px;"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "Copa Libertadores Qualification"){
            pos.style="background-color:#008000; color:white; padding-left 2px; padding-right:2px;"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "UEFA Europa League"){
            pos.style.backgroundColor="#ffff00"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "Copa Sudamericana"){
            pos.style.backgroundColor="#ffff00"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "UEFA Conference League"){
            pos.style.backgroundColor="#e8d747"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "Conference League Qualification"){
            pos.style.backgroundColor="#e8d747"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "Relegation"){
            pos.style="background-color:#ff0000; color:white; padding-left 2px; padding-right:2px;"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "Relegation Playoff"){
            pos.style="background-color:#ffa500; color:white; padding-left 2px; padding-right:2px;"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "Qualified"){
            pos.style="background-color:#008000; color:white; padding-left 2px; padding-right:2px;"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "Playoffs"){
            pos.style.backgroundColor="#ffff00"
        } else if(response.standings[0].groups[i].standings[key].current_outcome === "Promotion Playoff"){
            pos.style.backgroundColor="#ffff00"
        }
        tbody.appendChild(tr)
      }
    }
    forin(response.standings[1].groups[i].standings, id)
    }
    })
    .catch(err => console.error(err));
  }
  
    function fixture(temporada){fetch(proxy+`fixture?temporada=${temporada}&token=${token}`)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        divFixture1.innerHTML = ""
        divFixture2.innerHTML = ""
        divFixture.id = "divF1"
        divFixture1.id = "divF11"
        divFixture2.id = "divF2"
        fixtures.appendChild(divFixture)
        fixtures.appendChild(divFixture2)
        const largo = response.schedules.length-1
        let fechaActual = 0
        for (let i=0; i<largo;i++){
            if(response.schedules[i].sport_event_status.status === "closed"){
                fechaActual = response.schedules[i].sport_event.sport_event_context.round.number
            }
        }
        fechaL(fechaActual)
        for(let i=0;i<response.schedules[largo].sport_event.sport_event_context.round.number;i++){
            const fecha = document.createElement('a')
            fecha.style.color="white"
            fecha.style.backgroundColor="gray"
            fecha.style.border="1px solid"
            fecha.style.borderColor="black"
            fecha.textContent = i+1
            fecha.style.padding="2px"
            fecha.href="#"
            divFixture.appendChild(fecha)
            fecha.addEventListener('click', () => fechaL(i))
        }
        function fechaL(i){
            divFixture2.innerHTML = ""
            const table = document.createElement('table')
            table.id="fixturesTabla"
            table.className="table"
            const a = document.createElement('a')
            a.id="fixturesTitulo"
            let fecha1 = i+1
            a.textContent = "FECHA " +fecha1
            divFixture2.appendChild(a)
            divFixture2.appendChild(table)
            for(let key in response.schedules){
                if(response.schedules[key].sport_event.sport_event_context.round.number === i+1){
                    let calendario = response.schedules[key].sport_event.start_time.split("T")
                    if(calendario[0] === fechano){
                    }else{
                        const tr3 = document.createElement('tr')
                        const th1 = document.createElement('th')
                        th1.textContent = calendario[0]
                        th1.style.fontSize = "15px"
                        th1.style.backgroundColor = "gray"
                        th1.style.color = "white"
                        th1.style.padding = "6px"
                        th1.style.alignContent="center"
                        th1.style.textAlign="center"
                        tr3.appendChild(th1)
                        table.appendChild(tr3)
                        fechano = calendario[0]
                    }
                    const tr2 = document.createElement('tr')
                    table.appendChild(tr2)
                    const tha = document.createElement('th')
                    if (response.schedules[key].sport_event_status.status === "closed"){
                        tha.textContent = "Final"
                        tha.style.fontSize = "15px"
                        tha.style.backgroundColor = "darkGray"
                        tha.style.color = "white"
                        tha.style.padding = "6px"
                        tha.style.alignContent="center"
                        tha.style.textAlign="center"
                    }else if(response.schedules[key].sport_event_status.status === "live"){
                        tha.textContent = response.schedules[key].sport_event_status.clock.played
                        tha.style.backgroundColor= "red"
                        tha.style.color = "white"
                        tha.style.padding = "6px"
                        tha.style.alignContent="center"
                        tha.style.textAlign="center"
                    }else if(response.schedules[key].sport_event_status.status === "not_started"){
                        let calendario2 = response.schedules[key].sport_event.start_time.split("T")
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
                    tr2.appendChild(tha)
                    const thb = document.createElement('th')
                    thb.textContent = response.schedules[key].sport_event.competitors[0].name
                    thb.style.backgroundColor="rgba(255, 255, 255, .95)"
                    thb.style.color= "black"
                    thb.style.padding = "6px"
                    tr2.appendChild(thb)
                    const thc = document.createElement('th')
                    thc.textContent = response.schedules[key].sport_event_status.home_score
                    thc.style.backgroundColor = "white"
                    thc.style.color= "black"
                    thc.style.padding = "6px"
                    tr2.appendChild(thc)
                    const thd = document.createElement('th')
                    thd.textContent = response.schedules[key].sport_event_status.away_score
                    thd.style.backgroundColor = "white"
                    thd.style.color= "black"
                    thd.style.padding = "6px"
                    tr2.appendChild(thd)
                    const the = document.createElement('th')
                    the.textContent = response.schedules[key].sport_event.competitors[1].name
                    the.style.backgroundColor="rgba(255, 255, 255, .95)"
                    the.style.color= "black"
                    the.style.padding = "6px"
                    tr2.appendChild(the)
                    let expresionRegular = /\s*:\s*/;
                    const id3 = response.schedules[key].sport_event.id.split(expresionRegular);
                    if(response.schedules[key].sport_event_status.status === "not_started"){
                        console.log("a")
                        const thf = document.createElement('td')
                        thf.textContent = " "
                        thf.style.backgroundColor = "white"
                        thf.style.padding = "6px"
                        tr2.appendChild(thf)
                    }else{
                    const thf = document.createElement('button')
                    thf.textContent = " "
                    thf.style.backgroundColor = "white"
                    thf.style.padding = "6px"
                    if(response.schedules[key].sport_event.coverage.sport_event_properties.lineups){
                        console.log("b")
                        thf.textContent = "+"
                        thf.addEventListener('click', () => partido(id3[2]))
                    }
                    tr2.appendChild(thf)
                    }
                    
                }
            }
        }

            console.log(response.schedules[largo].sport_event.sport_event_context.round.number)
     })
    .catch(err => console.error(err));
  } 
  function partido(id){
    const url = `partido.html?id=${encodeURIComponent(id)}`;
    window.location.href = url;
  }