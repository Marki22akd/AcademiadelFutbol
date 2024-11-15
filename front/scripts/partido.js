const arquerosl = []
const defensoresl = []
const volantesl = []
const delanterosl = []
const arquerosv = []
const defensoresv = []
const volantesv = []
const delanterosv = []
const lacancha = document.createElement('div')
const lacancha1 = document.createElement('div')
const lacancha2 = document.createElement('div')
const content = document.getElementById('content')
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar-wrapper');

function calcularEdad(fechaNacimiento) {
  const fechaNac = new Date(fechaNacimiento);
  const hoy = new Date();

  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  const mesNac = fechaNac.getMonth();
  const diaNac = fechaNac.getDate();

  if (hoy.getMonth() < mesNac || (hoy.getMonth() === mesNac && hoy.getDate() < diaNac)) {
    edad--;
  }

  return edad;
}



function partido(id3) {
  fetch(proxy + `partido?id=${id3}&token=${token}`)
    .then(response => response.json())
    .then(response => {
      const div7 = document.createElement('div')
      const div8 = document.createElement('div')
      const div1 = document.createElement('div')
      const div4 = document.createElement('div')
      div7.style = 'display:flex; align-items:center; flex-direction: column;'
      div4.style = 'width: 100%;height: 100px;background-color: rgb(70, 70, 70);display: flex;justify-content: center;'
      div1.style = 'width: 40%; display: flex; align-items: center; flex-direction: column;height: 100px;justify-content: center;'
      div8.id = 'lineups'
      div8.style = 'margin-left: 400px;'
      content.appendChild(div8)
      div7.appendChild(div4)
      div7.style = 'gap: 5px;'
      div8.appendChild(div7)
      console.log(response)
      const logo1 = document.createElement('img')
      logo1.src = 'logos/' + response.lineups.competitors[0].country + '/' + response.lineups.competitors[0].name + '.png'
      logo1.style = "height: 100%"
      div4.appendChild(logo1)
      const logo2 = document.createElement('img')
      logo2.src = 'logos/' + response.lineups.competitors[1].country + '/' + response.lineups.competitors[1].name + '.png'
      logo2.style = "height: 100%"
      div4.appendChild(div1)
      div4.appendChild(logo2)
      const table2 = document.createElement('table')
      table2.style = "text-align: justify;"
      table2.border = '1'
      table2.style = 'color:white;'
      table2.id = 'tableLiga'
      div1.appendChild(table2)
      const tr1 = document.createElement('tr')
      table2.appendChild(tr1)
      if (response.sport_event.start_time) {
        const horario = document.createElement('a')
        horario.textContent = response.sport_event.start_time
        horario.style = "color:white; font-size:11px; font-weight:bold"
        div1.appendChild(horario)
      }
      if (response.sport_event.coverage.sport_event_properties.venue) {
        const estadio = document.createElement('a')
        estadio.textContent = response.sport_event.venue.name
        estadio.style = "color:white; font-size:11px; font-weight:bold"
        div1.appendChild(estadio)
      }
      const th2 = document.createElement('th')
      th2.textContent = response.sport_event_status.home_score
      tr1.appendChild(th2)
      const tht = document.createElement('th')
      if (response.sport_event_status.clock) {
        tht.textContent = response.sport_event_status.clock.played
      } else {
        tht.textContent = "Finalizado"
      }
      tht.style = "background-color: white; color:black;"
      tr1.appendChild(tht)
      const th3 = document.createElement('th')
      th3.textContent = response.sport_event_status.away_score
      tr1.appendChild(th3)
      tr1.style = "font-size:25px;"
      lacancha.style = 'background-image: url(./imagenes/campo.png); background-position: center; background-size: cover;width: 700px; height: 438px;'
      div7.appendChild(lacancha)
      lacancha1.style = 'width: 350px; height: 438px; float: left; display: flex;flex-direction: row;'
      lacancha2.style = 'width: 350px; height: 438px; float: left; display: flex;flex-direction: row-reverse;'
      lacancha.appendChild(lacancha1)
      lacancha.appendChild(lacancha2)

      const div2 = document.createElement('div')
      div2.style = 'width: 100%; gap: 10px; display: flex;'
      content.appendChild(div2)
      div7.appendChild(div2)
      const tr2 = document.createElement('tr')
      table2.appendChild(tr2)
      function forin(obj, obj2) {
        const tabla = document.createElement('table')
        tabla.border = '1'
        tabla.style = 'color:white; width:50;'
        const tablaJugadores = document.createElement('tbody')
        tabla.appendChild(tablaJugadores)
        div2.appendChild(tabla)
        const tr00 = document.createElement('tr')
        const td00 = document.createElement('td')
        tr00.style = "font-size: 14px; font-weight: bold;"
        td00.textContent = obj2.name;
        td00.colSpan = '7'
        td00.style = 'background-color: black; text-align:center;'
        tr00.appendChild(td00)
        tablaJugadores.appendChild(tr00)
        tablaJugadores.appendChild(tr00)
        const tr0 = document.createElement('tr')
        const td = document.createElement('td')
        tr0.style = "font-size: 14px; font-weight: bold;"
        td.textContent = "Titulares"
        td.style = 'background-color: black; text-align:center;'
        td.colSpan = '7'
        tr0.appendChild(td)
        tablaJugadores.appendChild(tr0)
        const tr = document.createElement('tr')
        tr.style = "font-size: 14px; font-weight: bold;"
        tablaJugadores.appendChild(tr)
        const th0 = document.createElement('th')
        th0.textContent = "POS"
        tr.appendChild(th0)
        const th1 = document.createElement('th')
        th1.textContent = "N°"
        tr.appendChild(th1)
        const th4 = document.createElement('th')
        th4.textContent = ""
        tr.appendChild(th4)
        const th2 = document.createElement('th')
        th2.textContent = "Nombre"
        tr.appendChild(th2)
        const th5 = document.createElement('th')
        th5.textContent = "Edad"
        tr.appendChild(th5)
        const th3 = document.createElement('th')
        th3.textContent = "Alt"
        tr.appendChild(th3)
        for (let key in obj) {
          if (obj[key].starter) {
            const tr = document.createElement('tr')
            tr.style = "font-size: 12px; font-weight: bold;"
            const pos = document.createElement('td')
            const nombre = obj[key].name.split(',')
            const posi = obj[key].position
            if (obj2 === response.lineups.competitors[0]) {
              if (obj[key].type === "forward") {
                pos.textContent = "DEL"
                pos.style = "background-color:black; color: red;"
                const obj2 = { nombre: nombre[0], num: obj[key].jersey_number, pos: posi }
                delanterosl.push(obj2)

              } else if (obj[key].type === "midfielder") {
                pos.textContent = "MED"
                pos.style = "background-color:black; color: green;"
                const obj2 = { nombre: nombre[0], num: obj[key].jersey_number, pos: posi }
                volantesl.push(obj2)
              } else if (obj[key].type === "defender") {
                pos.textContent = "DEF"
                pos.style = "background-color:black; color: blue;"
                const obj2 = { nombre: nombre[0], num: obj[key].jersey_number, pos: posi }
                defensoresl.push(obj2)
              } else {
                pos.textContent = "ARQ"
                pos.style = "background-color:black; color: orange;"
                const obj2 = { nombre: nombre[0], num: obj[key].jersey_number, pos: posi }
                arquerosl.push(obj2)
              }
            } else {
              if (obj[key].type === "forward") {
                pos.textContent = "DEL"
                pos.style = "background-color:black; color: red;"
                const obj2 = { nombre: nombre[0], num: obj[key].jersey_number }
                delanterosv.push(obj2)

              } else if (obj[key].type === "midfielder") {
                pos.textContent = "MED"
                pos.style = "background-color:black; color: green;"
                const obj2 = { nombre: nombre[0], num: obj[key].jersey_number }
                volantesv.push(obj2)
              } else if (obj[key].type === "defender") {
                pos.textContent = "DEF"
                pos.style = "background-color:black; color: blue;"
                const obj2 = { nombre: nombre[0], num: obj[key].jersey_number }
                defensoresv.push(obj2)
              } else {
                pos.textContent = "ARQ"
                pos.style = "background-color:black; color: orange;"
                const obj2 = { nombre: nombre[0], num: obj[key].jersey_number }
                arquerosv.push(obj2)
              }
            }
            tr.appendChild(pos)
            const dorsal = document.createElement('td')
            dorsal.textContent = obj[key].jersey_number
            dorsal.style = "text-align: center; width: 25px;color: black;border-radius: 100%;background: white";
            tr.appendChild(dorsal)
            let paisA = (obj[key].country_code)
            if (paisA === "ENG" || paisA === "NIR" || paisA === "SCO") {
              paisA = "GBR"
              forin4(paisA, tr, tablaJugadores)
            } else {
              forin4(paisA, tr, tablaJugadores)
            }
            const jugador = document.createElement('td')
            jugador.textContent = obj[key].name
            tr.appendChild(jugador)
            const edad = document.createElement('td')
            const edadConvertida = calcularEdad(obj[key].date_of_birth)
            edad.textContent = edadConvertida
            tr.appendChild(edad)
            const altura = document.createElement('td')
            altura.textContent = obj[key].height
            tr.appendChild(altura)
          }
        }

        const trs = document.createElement('tr')
        trs.style = "font-size: 14px; font-weight: bold;"
        const tds = document.createElement('td')
        tds.textContent = "Suplentes"
        tds.style = 'background-color: black; text-align:center;'
        tds.colSpan = '7'
        trs.appendChild(tds)
        tablaJugadores.appendChild(trs)
        const trs1 = document.createElement('tr')
        trs1.style = "font-size: 14px; font-weight: bold;"
        tablaJugadores.appendChild(trs1)
        const th0s = document.createElement('th')
        th0s.textContent = "POS"
        trs1.appendChild(th0s)
        const th1s = document.createElement('th')
        th1s.textContent = "N°"
        trs1.appendChild(th1s)
        const th4s = document.createElement('th')
        th4s.textContent = ""
        trs1.appendChild(th4s)
        const th2s = document.createElement('th')
        th2s.textContent = "Nombre"
        trs1.appendChild(th2s)
        const th5s = document.createElement('th')
        th5s.textContent = "Edad"
        trs1.appendChild(th5s)
        const th3s = document.createElement('th')
        th3s.textContent = "Alt"
        trs1.appendChild(th3s)
        tablaJugadores.appendChild(trs1)


        for (let key in obj) {
          if (!obj[key].starter) {
            const trs1 = document.createElement('tr')
            trs1.style = "font-size: 12px; font-weight: bold;"
            const poss = document.createElement('td')

            if (obj[key].type === "forward") {
              poss.textContent = "DEL"
              poss.style = "background-color:black; color: red;"

            } else if (obj[key].type === "midfielder") {
              poss.textContent = "MED"
              poss.style = "background-color:black; color: green;"
            } else if (obj[key].type === "defender") {
              poss.textContent = "DEF"
              poss.style = "background-color:black; color: blue;"
            } else {
              poss.textContent = "ARQ"
              poss.style = "background-color:black; color: orange;"
            }
            trs1.appendChild(poss)
            const dorsals = document.createElement('td')
            dorsals.textContent = obj[key].jersey_number
            dorsals.style = "text-align: center; width: 25px;color: black;border-radius: 100%;background: white";
            trs1.appendChild(dorsals)
            let paisAs = (obj[key].country_code)
            if (paisAs === "ENG" || paisAs === "NIR" || paisAs === "SCO") {
              paisAs = "GBR"
              forin4(paisAs, trs1, tablaJugadores)
            } else {
              forin4(paisAs, trs1, tablaJugadores)
            }
            const jugadors = document.createElement('td')
            jugadors.textContent = obj[key].name
            trs1.appendChild(jugadors)
            const edads = document.createElement('td')
            const edadConvertidas = calcularEdad(obj[key].date_of_birth)
            edads.textContent = edadConvertidas
            trs1.appendChild(edads)
            const alturas = document.createElement('td')
            alturas.textContent = obj[key].height
            trs1.appendChild(alturas)
          }
        }
        tabla.style = "color: white;width: 50%; background-color: rgb(70,70,70);"

      }


      function forin4(paisL, tr2, table2) {
        for (let key in paises) {
          if (paises[key].alpha3Code === paisL) {
            const paisLocal = paises[key].flag
            const banderaL = document.createElement('img')
            banderaL.src = paisLocal
            banderaL.style.width = "30px"
            tr2.appendChild(banderaL)
            table2.appendChild(tr2)
            break;
          }
        }
      }
      if (response.sport_event.coverage.sport_event_properties.lineups) {
        forin(response.lineups.competitors[0].players, response.lineups.competitors[0])
        forin(response.lineups.competitors[1].players, response.lineups.competitors[1])
        formacion(lacancha1, arquerosl, defensoresl, volantesl, delanterosl)
        formacion(lacancha2, arquerosv, defensoresv, volantesv, delanterosv)
      }
    })
    .catch(err => console.error(err));
}



function formacion(lacancha1, arquerosl, defensoresl, volantesl, delanterosl) {
  const linea1 = document.createElement('div')
  linea1.style = "display: flex;height: 100%;width: 109px;flex-direction: column;justify-content: center;"
  for (let i = 0; i < 1; i++) {
    lacancha1.appendChild(linea1)
    const ficha = document.createElement('div')
    ficha.style = "display: flex; flex-direction: column; align-items: center;"
    const p = document.createElement('p')
    p.textContent = arquerosl[i].num
    p.style = "font-weight: bold;font-size: 16px;text-align: center; width: 25px;color: black;border-radius: 100%;background: white; margin:0;";
    ficha.appendChild(p)
    const p2 = document.createElement('p')
    p2.textContent = arquerosl[i].nombre
    p2.style = "text-align: center; font-size: 14px;color: white;font-weight: bold;"
    ficha.appendChild(p2)
    linea1.appendChild(ficha)
  }
  const linea2 = document.createElement('div')
  linea2.style = "display: flex;height: 100%;width: 109px;flex-direction: column;justify-content: center;"
  for (let i = 0; i < defensoresl.length; i++) {
    lacancha1.appendChild(linea2)
    const ficha = document.createElement('div')
    ficha.style = "display: flex; flex-direction: column; align-items: center;"
    const p = document.createElement('p')
    p.textContent = defensoresl[i].num
    p.style = "font-weight: bold;font-size: 16px;text-align: center; width: 25px;color: black;border-radius: 100%;background: white; margin:0;";
    ficha.appendChild(p)
    const p2 = document.createElement('p')
    p2.textContent = defensoresl[i].nombre
    p2.style = "text-align: center; font-size: 14px;color: white;font-weight: bold;"
    ficha.appendChild(p2)
    linea2.appendChild(ficha)
  }
  const linea3 = document.createElement('div')
  linea3.style = "display: flex;height: 100%;width: 109px;flex-direction: column;justify-content: center;"
  for (let i = 0; i < volantesl.length; i++) {
    lacancha1.appendChild(linea3)
    const ficha = document.createElement('div')
    ficha.style = "display: flex; flex-direction: column; align-items: center;"
    const p = document.createElement('p')
    p.textContent = volantesl[i].num
    p.style = "font-weight: bold;font-size: 16px;text-align: center; width: 25px;color: black;border-radius: 100%;background: white; margin:0;";
    ficha.appendChild(p)
    const p2 = document.createElement('p')
    p2.textContent = volantesl[i].nombre
    p2.style = "text-align: center; font-size: 14px;color: white;font-weight: bold;"
    ficha.appendChild(p2)
    linea3.appendChild(ficha)
  }
  const linea4 = document.createElement('div')
  linea4.style = "display: flex;height: 100%;width: 109px;flex-direction: column;justify-content: center;"
  for (let i = 0; i < delanterosl.length; i++) {
    lacancha1.appendChild(linea4)
    const ficha = document.createElement('div')
    ficha.style = "display: flex; flex-direction: column; align-items: center;"
    const p = document.createElement('p')
    p.textContent = delanterosl[i].num
    p.style = "font-weight: bold;font-size: 16px;text-align: center; width: 25px;color: black;border-radius: 100%;background: white; margin:0;";
    ficha.appendChild(p)
    const p2 = document.createElement('p')
    p2.textContent = delanterosl[i].nombre
    p2.style = "text-align: center; font-size: 14px;color: white;font-weight: bold;"
    ficha.appendChild(p2)
    linea4.appendChild(ficha)
  }
}