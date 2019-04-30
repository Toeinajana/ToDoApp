
//select element
const list = document.getElementById("list");
const input = document.getElementById("input");

//classes name
const CHECK = "fa-heart";
const UNCHECK = "fa-heart-o";
const LINE_THROUGH = "lineThrough";

//variable
let LIST, id;

//data storage

let data = localStorage.getItem("TODO");

//data  not empty

if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}
else{

    LIST =[];
    id = 0;
}


//load item to user interface

function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
        
    });
}

//add to do function

function addToDo(toDo, id, done, trash){


    if(trash){return;}

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}">${toDo}</p>
    <i class="fa fa-times-circle de" job="delete" id="${id}"></i>
  </li>
`;

    const position = "beforeend";

    list.insertAdjacentHTML(position,item);

}

//add item to list user enter

document.getElementById("addbtn").addEventListener("click",function(event){


    if(document.getElementById('addbtn').onclick = true){

        const toDo = input.value;

        //if input not empty

        if(toDo){

            addToDo(toDo, id, false, false);


            LIST.push({

                name : toDo,
                id : id,
                done : false,
                trash : false

            });

            //add to storage

            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;


        }


        input.value ="";


    }



});


//complete to do

function completeToDo(element){


    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);

    element.parentNode.querySelector(".text").classList.toggle;


    LIST[element.id].done = LIST[element.id].done ? false : true;
}


// remove to do

function removeToDo(element){

    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;


}

// target items created

list.addEventListener("click", function(event){

    const element = event.target;

    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){

        completeToDo(element);

    }
    else if(elementJob == "delete"){

        removeToDo(element);


    }

    localStorage.setItem("TODO", JSON.stringify(LIST));




});

var app = {
    // Application Constructor
    initialize: function() {

        document.addEventListener("resume", this.onResume, false);

        document.addEventListener("onpause", this.onPause, false);



    },

    onResume:function () {
    


        console.log("resume!");
        
    },

    onPause: function(){

        console.log("pause!");

    },

};

app.initialize();

