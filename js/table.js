const tables = document.querySelector('.tables');
const tablesImg = document.querySelector('.tablesImg');
tables.addEventListener("mouseover", ()=>{
    
    tablesImg.src = "../Assets/img/tables_pink.png";
})
tables.addEventListener("mouseout", ()=>{
    tablesImg.src = "../Assets/img/table.png";
})
const about = document.querySelector('.about');
const aboutImg = document.querySelector('.aboutImg');
about.addEventListener("mouseover", ()=>{
    aboutImg.src = "../Assets/img/about_pink.png";
})
about.addEventListener("mouseout", ()=>{
    aboutImg.src = "../Assets/img/about.png";
})
const feed = document.querySelector('.feedback');
const feedbackImg = document.querySelector('.feedbackImg');
feed.addEventListener("mouseover", ()=>{
    feedbackImg.src = "../Assets/img/feedback_pink.png";
})
feed.addEventListener("mouseout", ()=>{
    feedbackImg.src = "../Assets/img/feedback.png";
})

const save = document.querySelector('.save');
const saveImg = document.querySelector('.saveImg');
save.addEventListener("mouseover", ()=>{
    setTimeout(function() {
        saveImg.src = "../Assets/img/save_pink.png";
    }, 170);
    
})
save.addEventListener("mouseout", ()=>{
    saveImg.src = "../Assets/img/save.png";
})

const ham = document.querySelector(".bam");
const navExp = document.querySelector(".nav_expanded");
const container = document.querySelector(".container");
const logo2 = document.querySelector(".logo2");
const logo3 = document.querySelector(".logo3");
const govt = document.querySelector(".govt");
let i = 0;
ham.addEventListener("click" , okay);
const t1 = new TimelineLite();
function okay(){
    i++;
    if(i%2 == 0){
        about.style.display = "none";
        feed.style.display = "none";
        tables.style.display = "none";
        save.style.display = "none";
        logo2.style.display = "none";
        logo3.style.display = "none";
        govt.style.display = "none";
        container.style.gridTemplateRows = "55px auto";
        TweenLite.fromTo(navExp, 1 , {
            width: "100%"
        },{
            width: "0"
        });
        TweenLite.fromTo(about, 0.5, {
            opacity: "1"
        },{
            opacity: "0"
        })
        TweenLite.fromTo(feed, 0.5, {
            opacity: "1"
        },{
            opacity: "0"
        })
        TweenLite.fromTo(tables, 0.5, {
            opacity: "1"
        },{
            opacity: "0"
        })
        TweenLite.fromTo(save, 0.5, {
            opacity: "1"
        },{
            opacity: "0"
        })
        logo2.style.opacity = "0";
        logo2.style.display = "none";
    }
    else{
        TweenLite.fromTo(about, 0.1, {
            opacity: "0",
            display: "none"
        },{
            opacity: "1",
            display: "block"
        })
        TweenLite.fromTo(feed, 0.1, {
            opacity: "0",
            display: "none"
        },{
            opacity: "1",
            display: "block"
        })
        TweenLite.fromTo(tables, 0.1, {
            opacity: "0",
            display: "none"
        },{
            opacity: "1",
            display: "block"
        })
        TweenLite.fromTo(save, 0.1, {
            opacity: "0",
            display: "none"
        },{
            opacity: "1",
            display: "block"
        })
        logo2.style.display = "block";
        logo3.style.display = "block";
        govt.style.display = "block";
        container.style.gridTemplateRows = "100%";
        navExp.style.gridTemplateRows = "12% 12% 12% 12% 20% 20% 5%";
        t1.fromTo(navExp, 1 , {
            width: "0"
        },{
            width: "100%"
        })
        .fromTo(logo2, 0.1, {
            opacity: "0",
        },{
            opacity: "1",
        })
        .fromTo(logo3, 0.1, {
            opacity: "0",
        },{
            opacity: "1",
        })
        .fromTo(govt, 0.1, {
            opacity: "0",
        },{
            opacity: "1",
        })
    }
}

const selector = document.querySelector(".tableContainer");
const drop = document.querySelector("#main");
const change = document.querySelector(".change");
const change2 = document.querySelector(".changeb")
var options = ["Hospitalisation", "B" , "C" , "D"];
var dbTables = [
    ["Alfreds","Maria","Germany" ],
    ["Centro","Francisco","Mexico"],
    ["Ernst","Roland","Austria"],
    ["Island","Helen","UK"]
];
var columns = [
    ["Name", "Last Name", "Country"],
    ["Nice", "Last", "Count"],
    ["Nae", "Last Na", "Cotry"],
    ["Na", "Last", "try"]
];
table();
function table(){


    fetch("http://pmjay.herokuapp.com/csv/", {
        method: 'GET',
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": "Token 99998b6539472741666fb07fcdf6f338db860cdb"
        },

        })
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                console.log('Logged IN')
            } else {
                console.log('Not Logged IN')
            }
           return res.json();
           
        })
        .then(data => {
            console.log(data)
            data.forEach(element => {
                var dropdown = document.getElementById("main");
                var opt = document.createElement("option");
                console.log(element.csv_name)
                opt.text = element.csv_name;
                opt.value = element.csv_name;
                dropdown.options.add(opt);

                var dropdown = document.getElementById("sub");
                var opt = document.createElement("option");
                console.log(element.version)
                opt.text = element.version;
                opt.value = element.version;
                dropdown.options.add(opt);
            });

        })
        .catch(error => {
            console.log('Cannot connect to server')
        })


    
    
    var file = document.getElementById("main").value;
    var version = document.getElementById("sub").value;

    //Register User
    var urls = "http://pmjay.herokuapp.com/?file="+file+"&version="+version;
    fetch(urls, {
        method: 'GET',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json'
        },
        data : {
            'file' : "p4",
            'version':"1"
        }
    })
    .then(res => {
        console.log(res)
        if (res.status === 200) {
            console.log('Logged IN')
        } else {
            console.log('Not Logged IN')
        }
        return res.json()
    })
    .then(data => {
        console.log(data.message);
        
        $.ajax({
        url:data.message,
        dataType:"text",
        success:function(data)
        {
            var employee_data = data.split(/\r?\n|\r/);
            var table_data = '<table class="table table-bordered table-striped">';
            for(var count = 0; count<employee_data.length; count++){
                var cell_data = employee_data[count].split(",");
                console.log(cell_data)
                table_data += '<tr>';
                for(var cell_count=0; cell_count<cell_data.length; cell_count++){
                    if(count === 1){
                        table_data += '<th>'+cell_data[cell_count]+'</th>';
                    }
                    else{
                        table_data += '<td>'+cell_data[cell_count]+'</td>';
                    }
                }
                table_data += '</tr>';
            }
            table_data += '</table>';
            $(selector).html(table_data);
        }
        });
    })
  
 }
