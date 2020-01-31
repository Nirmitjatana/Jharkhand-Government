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

// const logo3 = document.querySelector('.logo3');
const govt = document.querySelector('.govt');
const suc = document.querySelector(".Suc");
const eve = document.querySelector(".eve")
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
    // logo3.style.display = 'none';
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
    navExp.style.gridTemplateRows = '11% 11% 11% 11% 11% 11% 25% 5%';
    t1.fromTo(navExp, 1, {
      width: '0',
    }, {
      width: '100%',
    })
      // .fromTo(logo3, 0.1, {
      //   opacity: '0',
      //   display: 'none',
      // }, {
      //   opacity: '1',
      //   display: 'block',
      // })
      .fromTo(govt, 0.1, {
        opacity: '0',
        display: 'none',
      }, {
        opacity: '1',
        display: 'block',
      });
  }
}
