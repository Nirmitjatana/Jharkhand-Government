const tables = document.querySelector('.tables');
const tablesImg = document.querySelector('.tablesImg');
tables.addEventListener('mouseover', () => {
  tablesImg.src = '../Assets/img/tables_pink.png';
});
tables.addEventListener('mouseout', () => {
  tablesImg.src = '../Assets/img/table.png';
});
const about = document.querySelector('.about');
const aboutImg = document.querySelector('.aboutImg');
about.addEventListener('mouseover', () => {
  aboutImg.src = '../Assets/img/about_pink.png';
});
about.addEventListener('mouseout', () => {
  aboutImg.src = '../Assets/img/about.png';
});
const feed = document.querySelector('.feedback');
const feedbackImg = document.querySelector('.feedbackImg');
feed.addEventListener('mouseover', () => {
  feedbackImg.src = '../Assets/img/feedback_pink.png';
});
feed.addEventListener('mouseout', () => {
  feedbackImg.src = '../Assets/img/feedback.png';
});

const save = document.querySelector('.save');
const saveImg = document.querySelector('.saveImg');
save.addEventListener('mouseover', () => {
  saveImg.src = '../Assets/img/save_pink.png';
});
save.addEventListener('mouseout', () => {
  saveImg.src = '../Assets/img/save.png';
});

const ham = document.querySelector('.bam');
const navExp = document.querySelector('.nav_expanded');
const container = document.querySelector('.container');
const govt = document.querySelector('.govt');
const suc = document.querySelector(".suc");
const eve = document.querySelector(".eve");
const sucImg = document.querySelector(".sucImg");
const eveImg = document.querySelector(".eveImg");
suc.addEventListener('mouseover', () => {
  sucImg.src = '../Assets/img/trophy_pink.png';
});
suc.addEventListener('mouseout', () => {
  sucImg.src = '../Assets/img/trophy.png';
});
eve.addEventListener('mouseover', () => {
  eveImg.src = '../Assets/img/ca_pink.png';
});
eve.addEventListener('mouseout', () => {
  eveImg.src = '../Assets/img/calender.png';
});
let i = 0;
ham.addEventListener('click', okay);
const t1 = new TimelineLite();

function okay() {
  i++;
  if (i % 2 == 0) {
    about.style.display = 'none';
    feed.style.display = 'none';
    tables.style.display = 'none';
    save.style.display = 'none';
    govt.style.display = 'none';
    suc.style.display = 'none';
    eve.style.display = 'none';
    container.style.gridTemplateRows = '55px auto';
    TweenLite.fromTo(navExp, 1, {
      width: '100%',
    }, {
      width: '0',
    });
    TweenLite.fromTo(about, 0.5, {
      opacity: '1',
    }, {
      opacity: '0',
    });
    TweenLite.fromTo(feed, 0.5, {
      opacity: '1',
    }, {
      opacity: '0',
    });
    TweenLite.fromTo(tables, 0.5, {
      opacity: '1',
    }, {
      opacity: '0',
    });
    TweenLite.fromTo(save, 0.5, {
      opacity: '1',
    }, {
      opacity: '0',
    });
    TweenLite.fromTo(suc, 0.5, {
      opacity: '1',
    }, {
      opacity: '0',
    });
    TweenLite.fromTo(eve, 0.5, {
      opacity: '1',
    }, {
      opacity: '0',
    });
  } else {
    TweenLite.fromTo(about, 0.1, {
      opacity: '0',
      display: 'none',
    }, {
      opacity: '1',
      display: 'block',
    });
    TweenLite.fromTo(feed, 0.1, {
      opacity: '0',
      display: 'none',
    }, {
      opacity: '1',
      display: 'block',
    });
    TweenLite.fromTo(tables, 0.1, {
      opacity: '0',
      display: 'none',
    }, {
      opacity: '1',
      display: 'block',
    });
    TweenLite.fromTo(save, 0.1, {
      opacity: '0',
      display: 'none',
    }, {
      opacity: '1',
      display: 'block',
    });
    TweenLite.fromTo(suc, 0.1, {
      opacity: '0',
      display: 'none',
    }, {
      opacity: '1',
      display: 'block',
    });
    TweenLite.fromTo(eve, 0.1, {
      opacity: '0',
      display: 'none',
    }, {
      opacity: '1',
      display: 'block',
    });
    container.style.gridTemplateRows = '100%';
    navExp.style.gridTemplateRows = '12% 12% 12% 12% 12% 12% 18% 5%';
    t1.fromTo(navExp, 0.2, {
      width: '0',
      }, {
      width: '100%',
      })
      .fromTo(govt, 0.1, {
        opacity: '0',
        display: 'none',
      }, {
        opacity: '1',
        display: 'block',
      });
  }
}
const selector = document.querySelector('.tableContainer');
const drop = document.querySelector('#main');
const change = document.querySelector('.change');
const change2 = document.querySelector('.changeb');
let z = 0;
table();
let k = 0;
let l = 0;
const main_dropdown = document.getElementById('main');
const sub_dropdown = document.getElementById('sub');
function table() {
  z++;

  fetch('https://pmjay.herokuapp.com/csv/', {
    method: 'GET',
    crossDomain: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Token 99998b6539472741666fb07fcdf6f338db860cdb',
    },

        })
        .then(res => {
            if (res.status === 200) {
                console.log('Logged IN')
            } else {
                console.log('Not Logged IN')
            } 
           return res.json();
           
        })
        .then(data => {
          document.querySelector(".mainopt").innerHTML = "Select Table";
          document.querySelector(".subopt").innerHTML = "Select Version";
            console.log(data)
            const entries = Object.entries(data);
                for( ;l < entries.length; l++){
                    
                    var opt = document.createElement("option");
                    opt.value = entries[l][0];
                    opt.text = entries[l][0];
                    main_dropdown.options.add(opt)
                }
                main_dropdown.addEventListener("change", () =>{
                    sub_dropdown.innerHTML = "";
                    sub_dropdown.value = "none";
                    nice();
                })
            function nice(){
                
                for(k = 0 ;k < entries.length; k++){
                    if(entries[k][0] === main_dropdown.value){
                        change.innerHTML = main_dropdown.value;
                        change2.innerHTML = main_dropdown.value;
                        var optb = document.createElement("option");
                        optb.value = "none";
                        optb.text = "Select Version";
                        sub_dropdown.options.add(optb);
                        for(let c = 0; c < entries[k][1].length; c++){
                            var optc = document.createElement("option");
                            optc.value = entries[k][1][c];
                            optc.text = entries[k][1][c];
                            sub_dropdown.options.add(optc)
                        }
                    }
                } 
            }
    })
    .catch((error) => {
      console.log('Cannot connect to server');
    });
  // Register User
  const file = document.getElementById('main').value;
  const version = document.getElementById('sub').value;
  if (file == '' || version == 'none') {
    selector.innerHTML = '';
  } else {
    
    const urls = `https://pmjay.herokuapp.com/?file=${file}&version=${version}`;
    selector.innerHTML = '<img src="../Assets/gifs/loading.gif" alt="" height="20px" style = "position: absolute; top: 50%; left: 50%; transfrom: translate(-50%,-50%);">';

    fetch(urls, {
      method: 'GET',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        file: 'p4',
        version: '1',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('Logged IN');
        } else {
          console.log('Not Logged IN');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.message);
        const pdfurl = `https://pmjay.herokuapp.com/pdf/?file=${file}&version=${version}`;

        $.ajax({
          url: data.message,
          dataType: 'text',
          success(data) {
            const employee_data = data.split(/\r?\n|\r/);
            let table_data = '<table class="table table-bordered table-striped">';
            for (let count = 0; count < employee_data.length; count++) {
              const cell_data = employee_data[count].split(',');
              table_data += '<tr>';
              for (let cell_count = 0; cell_count < cell_data.length; cell_count++) {
                if (count === 0) {
                  table_data += `<th>${cell_data[cell_count]}</th>`;
                } else {
                  table_data += `<td>${cell_data[cell_count]}</td>`;
                }
              }
              table_data += '</tr>';
            }
            table_data += '</table>';

            // set PDF download URL in the "Generate PDF" anchor
            // This gets cleared on page load and overwritten on
            // option dropdown selection
           
            pdfgen.setAttribute('href', pdfurl);
            $(selector).html(table_data);
          },
        });
      });
  }
}
