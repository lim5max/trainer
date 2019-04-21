
function frontt(selectedEdge)        {

    bl = cub.first_blue
    switch(selectedEdge) {
        case 'first_blue':

            var fb = cub.first_blue;


            var init1 = fb[0][0];
            var init2 = fb[0][1];
            fb[0][0] = fb[0][2];
            fb[0][1] = fb[1][2];
            fb[0][2] = fb[2][2];

            fb[1][2] = fb[2][1];
            fb[2][2] = fb[2][0];

            fb[2][1] = fb[1][0];
            fb[2][0] = init1;
            fb[1][0] = init2;


             for (var i = 0 ; i<3; i++){
                var ini = yel[i][0]
                yel[i][0]=orange[0][i]
                orange[0][i]=  wh[i][2]
                wh[i][2]=red[2][i]
                red[2][i]=ini
             }

            break;
        case 'second_orange':
            var fb = cub.second_orange;


            var init1 = fb[0][0];
            var init2 = fb[0][1];
            fb[0][0] = fb[0][2];
            fb[0][1] = fb[1][2];
            fb[0][2] = fb[2][2];

            fb[1][2] = fb[2][1];
            fb[2][2] = fb[2][0];

            fb[2][1] = fb[1][0];
            fb[2][0] = init1;
            fb[1][0] = init2;

            for (var i = 0 ; i<3; i++){
                var ini = bl[2][i]
                bl[2][i] = yel[i][0]
             yel[i][0]  =gr[0][i]
             gr[0][i] = wh[i][2]
             wh[i][2] = ini
            }
            break
            case 'third_green' :
            var fb = cub.third_green;


            var init1 = fb[0][0];
            var init2 = fb[0][1];
            fb[0][0] = fb[0][2];
            fb[0][1] = fb[1][2];
            fb[0][2] = fb[2][2];

            fb[1][2] = fb[2][1];
            fb[2][2] = fb[2][0];

            fb[2][1] = fb[1][0];
            fb[2][0] = init1;
            fb[1][0] = init2;
             for (var i = 0 ; i<3; i++){
                var ini = orange[2][i]
                orange[2][i]=yel[i][0]
                yel[i][0]=red[0][i]
                red[0][i]=wh[i][2]
                wh[i][2]=ini
            }
            break;
            case 'fourth_red' :
            var fb = cub.fourth_red;


            var init1 = fb[0][0];
            var init2 = fb[0][1];
            fb[0][0] = fb[0][2];
            fb[0][1] = fb[1][2];
            fb[0][2] = fb[2][2];

            fb[1][2] = fb[2][1];
            fb[2][2] = fb[2][0];

            fb[2][1] = fb[1][0];
            fb[2][0] = init1;
            fb[1][0] = init2;
             for (var i = 0 ; i<3; i++){
                var ini = gr[2][i]
                gr[2][i]=yel[i][0]

                yel[i][0]=bl[0][i]
                bl[0][i]=wh[i][2]
                wh[i][2]=ini
            }
            break;
            case 'fifth_white' :
            var fb = cub.fifth_white;


            var init1 = fb[0][0];
            var init2 = fb[0][1];
            fb[0][0] = fb[0][2];
            fb[0][1] = fb[1][2];
            fb[0][2] = fb[2][2];

            fb[1][2] = fb[2][1];
            fb[2][2] = fb[2][0];

            fb[2][1] = fb[1][0];
            fb[2][0] = init1;
            fb[1][0] = init2;

            for (var i = 0 ; i<3; i++){
                var ini = gr[i][0]
                gr[i][0]=red[i][0]
                red[i][0]=bl[i][0]
                bl[i][0]=orange[i][0]
                orange[i][0]=ini

            }
            break;
            case 'sixth_yellow':
            var fb = cub.sixth_yellow;


            var init1 = fb[0][0];
            var init2 = fb[0][1];
            fb[0][0] = fb[0][2];
            fb[0][1] = fb[1][2];
            fb[0][2] = fb[2][2];

            fb[1][2] = fb[2][1];
            fb[2][2] = fb[2][0];

            fb[2][1] = fb[1][0];
            fb[2][0] = init1;
            fb[1][0] = init2;

            for (var i = 0 ; i<3; i++){
                var ini = gr[i][2]
                gr[i][2]=red[i][2]
                red[i][2]=bl[i][2]
                bl[i][2]=orange[i][2]
                orange[i][2]=ini

            }


    }
}
function front(selectedEdge){
    switch(selectedEdge){
        case 'first_blue':
        frontt('first_blue')

        break
        case 'second_orange':
        var fb = cub.third_green;
        frontt('second_orange')


            break;
        case 'third_green':
       frontt('third_green')

            break
        case 'fourth_red':
        var fb = cub.first_blue;
        frontt('fourth_red')


            break;
        case 'fifth_white':
        frontt('fifth_white')



        break
        case'sixth_yellow':
        frontt('sixth_yellow')


        break


    }

}
active = 4
var activebut = false
zapis =[]
const c = document.querySelector('.c');
 const rec = document.querySelector('#record')
 const mil = document.querySelector('.mil')
 const iner1 =  document.querySelector('.inner')
rec.addEventListener('click', ( )=>{
    console.log(555)
    var initialDate = new Date
    function getTime() {

         var currentDate = new Date;

          timer = new Date (currentDate - initialDate);


          milliseconds = timer.getMilliseconds();

          seconds = timer.getSeconds();

          minutes = timer.getMinutes();

          hours = timer.getUTCHours();

        if(milliseconds < 100){

            milliseconds = '0' + milliseconds;

          }

          if(seconds < 10){

            seconds = '0' + seconds;

          }

          if (minutes < 10){

            minutes = '0' + minutes;

          }

          if (hours < 10){

            hours = '0' + hours;

          }

        }

         // display timer in document

        function counter() {

          getTime();

          console.log (milliseconds)



        }

        // interval for display



        timerId = setInterval(counter, 10);



})
 console.log(c)
function startgo(){
    c.innerHTML = ''
    var y=0
    var newtimer =  setInterval(function() {
        c.className = 'newsec'
        c.innerHTML = y + 'sec'
        y++

      }, 1000);
}
/* but.addEventListener('click', () => {
    activebut = true
    if(activebut){
        var t = 10
        var timerId = setInterval(function() {
            c.innerHTML = t
            t--
            if(t<0){
                clearInterval(timerId)
                startgo()
            }
          }, 1000);


    }
})*/
glob = 0

function fillEdge(color) {
    res = [];
    for(let i = 0; i < 3; ++i) {
        let toAdd = [];
        for(let j = 0; j < 3; ++j) {
            toAdd.push(color);
        }
        res.push(toAdd);
    }
    return res;
}

colors= {blue: 1, orange: 2, green: 3, red: 4, white: 5, yellow: 6}

colorToStyle = {1 : '#2C6E96' , 2: '#ff7f1d', 3:  '#7ce544',4:  '#ff0808' , 5: '#fffbfb' ,6:  '#fff339'}

console.log(fillEdge(colors.green))
cub = {
    first_blue:  fillEdge(colors.blue),
    second_orange:   fillEdge(colors.orange) ,
    third_green:  fillEdge(colors.green),
    fourth_red:  fillEdge(colors.red),
    fifth_white:    fillEdge(colors.white),
    sixth_yellow:  fillEdge(colors.yellow)


}
    var wh = cub.fifth_white
    var yel = cub.sixth_yellow
    var red = cub.fourth_red
    var orange = cub.second_orange
    var gr = cub.third_green
    var bl = cub.first_blue;
function front1(selectedEdge){
    switch(selectedEdge){
        case 'sixth_yellow' :




        var fb = cub.sixth_yellow;
        var init1 = fb[0][0];
        var init2 = fb[0][1];
        fb[0][0] = fb[0][2];
        fb[0][1] = fb[1][2];
        fb[0][2] = fb[2][2];

        fb[1][2] = fb[2][1];
        fb[2][2] = fb[2][0];

        fb[2][1] = fb[1][0];
        fb[2][0] = init1;
        fb[1][0] = init2;

        break;
        case 'fifth_white':


        var fb = cub.fifth_white;
        console.log('f6656656b')


        var init1 = fb[0][0];
        var init2 = fb[0][1];
        fb[0][0] = fb[0][2];
        fb[0][1] = fb[1][2];
        fb[0][2] = fb[2][2];

        fb[1][2] = fb[2][1];
        fb[2][2] = fb[2][0];

        fb[2][1] = fb[1][0];
        fb[2][0] = init1;
        fb[1][0] = init2;
        break;

    }

}
function shiftfront1(selectedEdge){
    switch(selectedEdge){
        case 'sixth_yellow':
        var fb = cub.sixth_yellow;
        console.log(fb)



            var init2 = fb[2][1];
            var init1=fb[2][0]
            fb[2][0]=fb[2][2]
            fb[2][2]=fb[0][2]
            fb[0][2]=fb[0][0]
            fb[0][0]=init1
            fb[2][1]=fb[1][2]
            fb[1][2]=fb[0][1]
            fb[0][1]=fb[1][0]
            fb[1][0]=init2
            break;

        case 'fifth_white':
        var fb = cub.fifth_white;


        var init2 = fb[2][1];
        var init1=fb[2][0]
        fb[2][0]=fb[2][2]
        fb[2][2]=fb[0][2]
        fb[0][2]=fb[0][0]
        fb[0][0]=init1
        fb[2][1]=fb[1][2]
        fb[1][2]=fb[0][1]
        fb[0][1]=fb[1][0]
        fb[1][0]=init2
        break;
    }
}
h = 6
if(h=1) h=6;
noww=1
function rotright(selectedEdge){

    switch(selectedEdge){
        case 'first_blue':
        front('second_orange')

        break
        case 'second_orange':
        var fb = cub.third_green;
        front('third_green')


            break;
        case 'third_green':
       front('fourth_red')

            break
        case 'fourth_red':
        var fb = cub.first_blue;
        front('first_blue')


            break;
        case 'fifth_white':
        switch (noww){
            case 1:
              front('second_orange')
            break;
            case 2:
            front('third_green')
            break;
            case 3:
            front('fourth_red')
            break;
            case 4:
            front('first_blue')
           break;


        }



        break
        case'sixth_yellow':
        switch (noww){
            case 1:
              front('second_orange')
            break;
            case 2:
            front('third_green')
            break;
            case 3:
            front('fourth_red')
            break;
            case 4:
            front('first_blue')
           break;}
           break






    }

}

function rot(n) {
    var y  = cub.sixth_yellow;
    var w  = cub.fifth_white;
    if(  n>0){
        switch (n){
            case 0 : break;
            case 1:

                    front1('fifth_white')
                    shiftfront1('sixth_yellow')

                    break;


            case 2:
            for(var i = 0 ; i<=1; i++){
                shiftfront1('sixth_yellow')
                front1('fifth_white')
            }

                    break


            case 3:
            for(var i = 0 ; i<= 2; i++){
                shiftfront1('sixth_yellow')
                front1('fifth_white')
            }

                break
            }
             }  else{
                 var yyb = n * (-1)
                 console.log(yyb)
                 switch(yyb){
                    case 1:
                    front1('sixth_yellow')
                    shiftfront1('fifth_white')
                    break;
                    case 2:
                    for(var i = 0 ; i<= 1; i++){
                        front1('sixth_yellow')
                        shiftfront1('fifth_white')
                    }
                    break;
                    case 3:
                    for(var i = 0 ; i<=2 ; i++){
                        front1('sixth_yellow')
                        shiftfront1('fifth_white')
                    };

             }}
         }

function shiftfront(selectedEdge) {
    var wh = cub.fifth_white
    var yel = cub.sixth_yellow
    var red = cub.fourth_red
    var orange = cub.second_orange
    var gr = cub.third_green
    bl = cub.first_blue
    switch(selectedEdge) {
        case 'first_blue':
            var fb = cub.first_blue;


            var init2 = fb[2][1];
            var init1=fb[2][0]
            fb[2][0]=fb[2][2]
            fb[2][2]=fb[0][2]
            fb[0][2]=fb[0][0]
            fb[0][0]=init1
            fb[2][1]=fb[1][2]
            fb[1][2]=fb[0][1]
            fb[0][1]=fb[1][0]
            fb[1][0]=init2



            for (var y = 0 ; y<3;y++){


             for (var i = 0 ; i<3; i++){
                var ini = yel[i][0]
                yel[i][0]=orange[0][i]
                orange[0][i]=  wh[i][2]
                wh[i][2]=red[2][i]
                red[2][i]=ini
             }
            }

            break;
        case 'second_orange':
            var fb = cub.second_orange;


            var init2 = fb[2][1];
            var init1=fb[2][0]
            fb[2][0]=fb[2][2]
            fb[2][2]=fb[0][2]
            fb[0][2]=fb[0][0]
            fb[0][0]=init1
            fb[2][1]=fb[1][2]
            fb[1][2]=fb[0][1]
            fb[0][1]=fb[1][0]
            fb[1][0]=init2

            for (var y = 0 ; y<3;y++){
                for (var i = 0 ; i<3; i++){
                    var ini = bl[2][i]
                    bl[2][i] = yel[i][0]
                 yel[i][0]  =gr[0][i]
                 gr[0][i] = wh[i][2]
                 wh[i][2] = ini
                }
            }
            break;
            case 'third_green' :
            var fb = cub.third_green;


            var init2 = fb[2][1];
            var init1=fb[2][0]
            fb[2][0]=fb[2][2]
            fb[2][2]=fb[0][2]
            fb[0][2]=fb[0][0]
            fb[0][0]=init1
            fb[2][1]=fb[1][2]
            fb[1][2]=fb[0][1]
            fb[0][1]=fb[1][0]
            fb[1][0]=init2

            for (var y = 0 ; y<3;y++){
                for (var i = 0 ; i<3; i++){
                    var ini = orange[2][i]
                    orange[2][i]=yel[i][0]
                    yel[i][0]=red[0][i]
                    red[0][i]=wh[i][2]
                    wh[i][2]=ini
                }
            }
            break;
            case 'fourth_red' :
            var fb = cub.fourth_red;


            var init2 = fb[2][1];
            var init1=fb[2][0]
            fb[2][0]=fb[2][2]
            fb[2][2]=fb[0][2]
            fb[0][2]=fb[0][0]
            fb[0][0]=init1
            fb[2][1]=fb[1][2]
            fb[1][2]=fb[0][1]
            fb[0][1]=fb[1][0]
            fb[1][0]=init2

            for (var y = 0 ; y<3;y++){
                for (var i = 0 ; i<3; i++){
                    var ini = gr[2][i]
                    gr[2][i]=yel[i][0]

                    yel[i][0]=bl[0][i]
                    bl[0][i]=wh[i][2]
                    wh[i][2]=ini
                } }
            break;
            case 'fifth_white' :
            var fb = cub.fifth_white;


            var init2 = fb[2][1];
            var init1=fb[2][0]
            fb[2][0]=fb[2][2]
            fb[2][2]=fb[0][2]
            fb[0][2]=fb[0][0]
            fb[0][0]=init1
            fb[2][1]=fb[1][2]
            fb[1][2]=fb[0][1]
            fb[0][1]=fb[1][0]
            fb[1][0]=init2

            for (var y = 0 ; y<3;y++){

            for (var i = 0 ; i<3; i++){
                var ini = gr[i][0]
                gr[i][0]=red[i][0]
                red[i][0]=bl[i][0]
                bl[i][0]=orange[i][0]
                orange[i][0]=ini

            }
            }
            break;
            case 'sixth_yellow':
            var fb = cub.sixth_yellow;


            var init2 = fb[2][1];
            var init1=fb[2][0]
            fb[2][0]=fb[2][2]
            fb[2][2]=fb[0][2]
            fb[0][2]=fb[0][0]
            fb[0][0]=init1
            fb[2][1]=fb[1][2]
            fb[1][2]=fb[0][1]
            fb[0][1]=fb[1][0]
            fb[1][0]=init2

            for (var y = 0 ; y<3;y++){

            for (var i = 0 ; i<3; i++){
                var ini = gr[i][2]
                gr[i][2]=red[i][2]
                red[i][2]=bl[i][2]
                bl[i][2]=orange[i][2]
                orange[i][2]=ini

            }
            }
            break

    }}
    function up(selectedEdge){
        switch(selectedEdge){
            case 'first_blue':
            front('fifth_white')

            break
            case 'second_orange':
            var fb = cub.third_green;
            front('fifth_white')


                break;
            case 'third_green':
           front('fifth_white')

                break
            case 'fourth_red':
            var fb = cub.first_blue;
            front('fifth_white')


                break;
                case 'fifth_white':
                switch (noww){
                    case 1:
                      front('third_green')
                    break;
                    case 2:
                    front('fourth_red')
                    break;
                    case 3:
                    front('first_blue')
                    break;
                    case 4:
                    front('second_orange')
                   break;


                }



                break
                case'sixth_yellow':
                switch (noww){
                    case 1:
                     front('first_blue')
                    break;
                    case 2:
                    front('second_orange')
                    break;
                    case 3:
                    front('third_green')
                    break;
                    case 4:
                    front('fourth_red')
                   break;}
            break


        }

    }
function rigt(selectedEdge){

    switch(selectedEdge){
        case 'first_blue':
        shiftfront('second_orange')

        break
        case 'second_orange':
        var fb = cub.third_green;
        shiftfront('third_green')


            break;
        case 'third_green':
        shiftfront('fourth_red')

            break
        case 'fourth_red':
        var fb = cub.first_blue;
        shiftfront('first_blue')


            break;
        case 'fifth_white':
        switch (noww){
            case 1:
            shiftfront('second_orange')
            break;
            case 2:
            shiftfront('third_green')
            break;
            case 3:
            shiftfront('fourth_red')
            break;
            case 4:
            shiftfront('first_blue')
           break;


        }



        break
        case'sixth_yellow':
        switch (noww){
            case 1:
            shiftfront('second_orange')
            break;
            case 2:
            shiftfront('third_green')
            break;
            case 3:
            shiftfront('fourth_red')
            break;
            case 4:
            shiftfront('first_blue')
           break;}
           break






    }

    }
    function down(selectedEdge){
        switch(selectedEdge){
            case 'first_blue':
            front('sixth_yellow')

            break
            case 'second_orange':
            var fb = cub.third_green;
            front('sixth_yellow')


                break;
            case 'third_green':
           front('sixth_yellow')

                break
            case 'fourth_red':
            var fb = cub.first_blue;
            front('sixth_yellow')


                break;
                case 'fifth_white':

                switch (noww){
                    case 1:
                     front('first_blue')
                    break;
                    case 2:
                    front('second_orange')
                    break;
                    case 3:
                    front('third_green')
                    break;
                    case 4:
                    front('fourth_red')
                   break;}



                break
                case'sixth_yellow':
                switch (noww){
                    case 1:
                      front('third_green')
                    break;
                    case 2:
                    front('fourth_red')
                    break;
                    case 3:
                    front('first_blue')
                    break;
                    case 4:
                    front('second_orange')
                   break;


                }
            break


        }

    }
    function sfiftdown (){
        switch(selectedEdge){
            case 'first_blue':
            shiftfront('sixth_yellow')

            break
            case 'second_orange':
            var fb = cub.third_green;
            shiftfront('sixth_yellow')


                break;
            case 'third_green':
            shiftfront('sixth_yellow')

                break
            case 'fourth_red':
            var fb = cub.first_blue;
            shiftfront('sixth_yellow')


                break;
                case 'fifth_white':

                switch (noww){
                    case 1:
                    shiftfront('first_blue')
                    break;
                    case 2:
                    shiftfront('second_orange')
                    break;
                    case 3:
                    shiftfront('third_green')
                    break;
                    case 4:
                    shiftfront('fourth_red')
                   break;}



                break
                case'sixth_yellow':
                switch (noww){
                    case 1:
                    shiftfront('third_green')
                    break;
                    case 2:
                    shiftfront('fourth_red')
                    break;
                    case 3:
                    shiftfront('first_blue')
                    break;
                    case 4:
                    shiftfront('second_orange')
                   break;


                }
            break


        }
    }
    function shiftbach(selectedEdge){
        switch(selectedEdge){
            case 'first_blue':
            shiftfront('sixth_yellow')

            break
            case 'second_orange':
            var fb = cub.third_green;
            shiftfront('sixth_yellow')


                break;
            case 'third_green':
            shiftfront('sixth_yellow')

                break
            case 'fourth_red':
            var fb = cub.first_blue;
            shiftfront('sixth_yellow')


                break;
                case 'fifth_white':

                switch (noww){
                    case 1:
                    shiftfront('first_blue')
                    break;
                    case 2:
                    shiftfront('second_orange')
                    break;
                    case 3:
                    shiftfront('third_green')
                    break;
                    case 4:
                    shiftfront('fourth_red')
                   break;}



                break
                case'sixth_yellow':
                switch (noww){
                    case 1:
                    shiftfront('third_green')
                    break;
                    case 2:
                    shiftfront('fourth_red')
                    break;
                    case 3:
                    shiftfront('first_blue')
                    break;
                    case 4:
                    shiftfront('second_orange')
                   break;


                }
            break


        }
    }
    function  bach(selectedEdge){
        switch(selectedEdge){
            case 'first_blue':
            front('third_green')

            break
            case 'second_orange':
            var fb = cub.third_green;
            front('fourth_red')


                break;
            case 'third_green':
           front('first_blue')

                break
            case 'fourth_red':
            var fb = cub.first_blue;
            front('second_orange')


                break;
            case 'fifth_white':
            front('sixth_yellow')



            break
            case'sixth_yellow':
            front('fifth_white')


            break


        }
    }
    function shiftup(selectedEdge){
        switch(selectedEdge){
            case 'first_blue':
            shiftfront('fifth_white')

            break
            case 'second_orange':
            var fb = cub.third_green;
            shiftfront('fifth_white')


                break;
            case 'third_green':
           shiftfront('fifth_white')

                break
            case 'fourth_red':
            var fb = cub.first_blue;
            shiftfront('fifth_white')


                break;
                case 'fifth_white':
                switch (noww){
                    case 1:
                    shiftfront('third_green')
                    break;
                    case 2:
                    shiftfront('fourth_red')
                    break;
                    case 3:
                    shiftfront('first_blue')
                    break;
                    case 4:
                    shiftfront('second_orange')
                   break;


                }



                break
                case'sixth_yellow':
                switch (noww){
                    case 1:
                    shiftfront('first_blue')
                    break;
                    case 2:
                    shiftfront('second_orange')
                    break;
                    case 3:
                    shiftfront('third_green')
                    break;
                    case 4:
                    shiftfront('fourth_red')
                   break;}
            break


        }

    }


f       =       0
first   =       1
second  =       2
tird    =       3
fourth  =       4
fifth   =       5
sixth   =       6
const canvas = document.querySelector('canvas');
const main_div = document.querySelector('.objects2d');
function draw(){


    // main_div.style.width = 500 + 'px';
    // main_div.style.width = 500 + 'px';
    // canvas.width = main_div.style.width;
    // canvas.height = main_div.style.height;
    canvas.width = 600;
    canvas.height = 600;
    console.log(main_div)
    var edgeNames = [
        ['first_blue', [5, 105], ['first']],
         ['second_orange', [105, 105],['second']],
          ['third_green', [205, 105],['tird']],
          ['fourth_red', [305, 105],['fourth']],
            ['fifth_white', [205, 5],['fifth']],
            ['sixth_yellow' , [205, 205],['']]
        ];
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 1000, 1000);

        edgeNames.forEach(function(edge ){
            name = edge[0];
            var sideX = edge[1][0];
            var sideY = edge[1][1];





          if (name == selectedEdge) {
                console.log('selected' + selectedEdge)
                ctx.rect(sideX-5, sideY-5, 90, 90)
                ctx.stroke() ;
            }


            for (var x = 0; x < 3; x++){


                for (var y = 0; y<3; y++){


                    let color = cub[name][x][y];

                    let fillStylec = colorToStyle[color];
                    ctx.fillStyle = fillStylec;
                    ctx.fillRect(sideX + x * 30, sideY + y * 30, 20, 20);

                }
            }


        })
    }
}
window.addEventListener("keypress",(e) => {
    pressed(e, draw)
}, false);

selectedEdge = 'first_blue';

start=1;
ras = 0;

spans=0
divs=0

howmany=0
var smalll=document.getElementsByClassName('small')
var divv=document.getElementsByClassName('condiv')
function createsmall( n ) {
    var t = document.createElement('div')
    t.className = 'small'


    t.innerHTML = n
    return t
}
function Left(){
    switch(selectedEdge){
        case 'first_blue':
        front('fourth_red')

        break
        case 'second_orange':
        var fb = cub.third_green;
        front('first_blue')


            break;
        case 'third_green':
       front('second_orange')

            break
        case 'fourth_red':
        var fb = cub.first_blue;
        front('third_green')


            break;
            case 'fifth_white':
            switch (noww){
                case 1:
                front('fourth_red')
                 break;
                case 2:
                front('first_blue')
                break;
                case 3:
                 front('second_orange')
                break;
                case 4:
                front('third_green')
               break;


            }



            break
            case'sixth_yellow':
            switch (noww){
                case 1:
                front('fourth_red')
                break;
                case 2:
                front('first_blue')
                break;
                case 3:
                front('second_orange')
                break;
                case 4:
                front('third_green')
               break;


            }
        break


    }
}

function rotateLeft(selectedEdge){
    switch(selectedEdge){
        case 'first_blue':
        shiftfront('fourth_red')

        break
        case 'second_orange':
        var fb = cub.third_green;
        shiftfront('first_blue')


            break;
        case 'third_green':
       shiftfront('second_orange')

            break
        case 'fourth_red':
        var fb = cub.first_blue;
        shiftfront('third_green')


            break;
            case 'fifth_white':
            switch (noww){
                case 1:
                shiftfront('fourth_red')
                 break;
                case 2:
                shiftfront('first_blue')
                break;
                case 3:
                shiftfront('second_orange')
                break;
                case 4:
                shiftfront('third_green')
               break;


            }



            break
            case'sixth_yellow':
            switch (noww){
                case 1:
                shiftfront('fourth_red')
                break;
                case 2:
                shiftfront('first_blue')
                break;
                case 3:
                shiftfront('second_orange')
                break;
                case 4:
                shiftfront('third_green')
               break;


            }
        break


    }
}
var formula1 =  document.createElement('div')
    formula1.innerHTML = ''
    formula1.className = 'small'

const inner = document.querySelector('.inner')
inner.appendChild(formula1)

function pressed(e, callback)

{

    key = e.keyCode || e.which;
    console.log(key)



        var y = null;

        switch(key){
            case 49: selectedEdge = 'first_blue';    active = 1; ras = active-start; rot(ras); start=1; y='blue'; zapis.push(y); noww=1;console.log(ras); break ;
            case 50: selectedEdge = 'second_orange'; active = 2; ras = active - start;rot(ras); start=2;  y='orange'; zapis.push(y); noww=2; console.log(ras) ; break;
            case 51: selectedEdge = 'third_green';   active = 3; ras = active-start; rot(ras); start=3; y='green'; zapis.push(y); noww=3;console.log(ras); break;
            case 52: selectedEdge = 'fourth_red';  active = 4; ras = active-start; rot(ras); start=4; y='red'; zapis.push(y); noww=4;console.log(ras); break;
            case 53: selectedEdge = 'fifth_white';y='yel' ; zapis.push(y);break;
            case 54: selectedEdge = 'sixth_yellow'; y='wh';zapis.push(y);break;
        }
        if (key == 70){// shift+front
              shiftfront(selectedEdge)
              y="F'"
              zapis.push(y);


        }
        else if (key == 98){ // +back
            y="B "
             bach(selectedEdge)
            zapis.push(y);

        }
        else if (key == 66){ // +back
            y="B' "
             shiftbach(selectedEdge)
            zapis.push(y);

        }

        else if  (key == 76) {//shift + LEFT
            rotateLeft(selectedEdge)
            y="L'"
              zapis.push(y);

        }else if  (key == 108) {//shift + LEFT
            Left(selectedEdge)
            y="L "
            zapis.push(y);

        }
        else if (key == 82){// shift +right
            rigt(selectedEdge) ;
            y="R'"
              zapis.push(y);

        }
        else if (key == 85){// shift + up
            y="U'"
            shiftup(selectedEdge)
            zapis.push(y);

        }
        else if (key == 117){// shift + up
            y="U "
            up(selectedEdge)
            zapis.push(y);

        }
        else if (key == 68){ //shift + down
            y="D'"
            sfiftdown(selectedEdge)
            zapis.push(y);

        }else if (key == 100){ //shift + down
            y="D "
            down(selectedEdge)
            zapis.push(y);

        }
        else if (key == 102){ //front
            front(selectedEdge)
            y="F"
              zapis.push(y);

        }
        else if (key == 114){ //right
            rotright(selectedEdge)
            y="R"
              zapis.push(y);

        }
        var k = 1
        callback()


    }




 window.onload = function()

{

    draw()
    var only_forfirst = [
        { 'first': [ colors.blue, colors.blue, colors.blue]
        },
        { 'second': [colors.blue, colors.blue, colors.blue] },
        { 'third': [colors.blue, colors.blue, colors.blue] }
    ]










}
activeull = false
var menu = document.querySelector('.manu')
var ul = document.querySelector('.ul')
 function kok(){
    activeull = !activeull
    console.log(1)
    if (activeull){
        ul.setAttribute("style", "display: block;");
}else{
    ul.setAttribute("style", "display: none;");
}
}