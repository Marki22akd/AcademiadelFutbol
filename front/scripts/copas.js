function copa(id) {
    fetch(proxy + `copas?id=${id}&token=${token}`)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const div3 = document.getElementById('div3');
        div3.innerHTML = ""
        div3.style = "width:500px;"
        for (let i = 0; i < response.season_form_standings[0].groups.length; i++) {
            const titulo = document.createElement('div')
            const titulo1 = document.createElement('a')
            titulo1.textContent = "Grupo " + i
            titulo.className = "bg-secondary text-white p-2";
            const div = document.createElement('div')
            const div2 = document.createElement('div')
            titulo.appendChild(titulo1)
            div.appendChild(titulo)
            div.appendChild(div2)
            div3.appendChild(div)
            const table = document.createElement('table')
            table.id = "tableLiga"
            table.style = "border:1px; width:100%"
           // table.className = "table table-bordered table-responsive"; 
            div2.appendChild(table)

            const thead = document.createElement('thead');
            const tr1 = document.createElement('tr');
            thead.appendChild(tr1);
            table.appendChild(thead);
            tr1.className = "bg-dark text-white"; 

            const th1 = document.createElement('th');
            th1.textContent = "#";
            tr1.appendChild(th1);

            const th2 = document.createElement('th');
            th2.textContent = "Equipo";
            tr1.appendChild(th2);

            const th3 = document.createElement('th');
            th3.textContent = "Pts";
            tr1.appendChild(th3);

            const th4 = document.createElement('th');
            th4.textContent = "PJ";
            tr1.appendChild(th4);

            const th5 = document.createElement('th');
            th5.textContent = "PG";
            tr1.appendChild(th5);

            const th6 = document.createElement('th');
            th6.textContent = "PE";
            tr1.appendChild(th6);

            const th7 = document.createElement('th');
            th7.textContent = "PP";
            tr1.appendChild(th7);

            const th8 = document.createElement('th');
            th8.textContent = "GF";
            tr1.appendChild(th8);

            const th9 = document.createElement('th');
            th9.textContent = "GC";
            tr1.appendChild(th9);

            const th0 = document.createElement('th');
            th0.textContent = "DIF";
            tr1.appendChild(th0);
            for (let j = 0; j < 4; j++) {
                const tr = document.createElement("tr")
                tr.style.backgroundColor = "rgb(230,230,230)"
                tr.style.color = "black"
                tr.style.fontWeight = "bold"
                const pos = document.createElement('td')
                pos.textContent = j + 1
                if (j < 2) {
                    pos.style = "background-color:green; color: white;"
                } else if (j === 3) {
                    pos.style = "background-color:yellow;"
                }
                tr.appendChild(pos)
                const equipo = document.createElement('td')
                equipo.textContent = response.season_form_standings[0].groups[i].form_standings[j].competitor.name
                const logo = document.createElement('img')
                logo.src = 'logos/' + response.season_form_standings[0].groups[i].form_standings[j].competitor.country + '/' + response.season_form_standings[0].groups[i].form_standings[j].competitor.name + '.png'
                logo.style = "width: 30px; height: 30px;"
                equipo.style = "float: left; display: flex; align-items: center;"
                equipo.prepend(logo)
                tr.appendChild(equipo)
                const pts = document.createElement('td')
                pts.textContent = response.season_form_standings[0].groups[i].form_standings[j].points
                tr.appendChild(pts)
                const pj = document.createElement('td')
                pj.textContent = response.season_form_standings[0].groups[i].form_standings[j].played
                tr.appendChild(pj)
                const pg = document.createElement('td')
                pg.textContent = response.season_form_standings[0].groups[i].form_standings[j].win
                tr.appendChild(pg)
                const pe = document.createElement('td')
                pe.textContent = response.season_form_standings[0].groups[i].form_standings[j].draw
                tr.appendChild(pe)
                const pp = document.createElement('td')
                pp.textContent = response.season_form_standings[0].groups[i].form_standings[j].loss
                tr.appendChild(pp)
                const gf = document.createElement('td')
                gf.textContent = response.season_form_standings[0].groups[i].form_standings[j].goals_for
                tr.appendChild(gf)
                const gc = document.createElement('td')
                gc.textContent = response.season_form_standings[0].groups[i].form_standings[j].goals_against
                tr.appendChild(gc)
                const dif = document.createElement('td')
                dif.textContent = response.season_form_standings[0].groups[i].form_standings[j].goals_diff
                tr.appendChild(dif)
                table.appendChild(tr)
            }
        }
    })
    .catch(err => console.error(err));
}