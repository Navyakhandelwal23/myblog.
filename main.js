var names = [];
function submit(){
    var guest_name = document.getElementById("Enter_Name").value;
    names.push(guest_name)
}

function show(){

    document.getElementById("Display_Names").innerHTML =  names
}

function sorting(){
    names.sort()
    document.getElementById("Display_Names").innerHTML = names
}

function search(){
    var search  = document.getElementById("names_of_people").value
    var found = 0
    var j;
    for(j=0; j<names.length; j++){

        if(search == names[j]){
            found = found+1
        }
    }

    document.getElementById("Show_name_in_a_list").innerHTML = "Name found"+ found+"Time/s"
}
