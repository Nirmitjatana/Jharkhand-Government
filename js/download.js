


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
  setTimeout(() => {
    saveImg.src = '../Assets/img/save_pink.png';
  }, 170);
});
save.addEventListener('mouseout', () => {
  saveImg.src = '../Assets/img/save.png';
});

const ham = document.querySelector('.bam');
const navExp = document.querySelector('.nav_expanded');
const container = document.querySelector('.container');
const logo2 = document.querySelector('.logo2');
const logo3 = document.querySelector('.logo3');
const govt = document.querySelector('.govt');
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
    logo2.style.display = 'none';
    logo3.style.display = 'none';
    govt.style.display = 'none';
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
    logo2.style.opacity = '0';
    logo2.style.display = 'none';
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
    logo2.style.display = 'block';
    logo3.style.display = 'block';
    govt.style.display = 'block';
    container.style.gridTemplateRows = '100%';
    navExp.style.gridTemplateRows = '12% 12% 12% 12% 20% 20% 5%';
    t1.fromTo(navExp, 1, {
      width: '0',
    }, {
      width: '100%',
    })
      .fromTo(logo2, 0.1, {
        opacity: '0',
      }, {
        opacity: '1',
      })
      .fromTo(logo3, 0.1, {
        opacity: '0',
      }, {
        opacity: '1',
      })
      .fromTo(govt, 0.1, {
        opacity: '0',
      }, {
        opacity: '1',
      });
  }
}
