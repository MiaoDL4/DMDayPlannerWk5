//show current date on top
var currentTime = dayjs();
$("#currentDay").text(currentTime.format("dddd MMMM DD"))

//apended planner
for(hourMark = 9; hourMark < 18; hourMark ++){ //can use forEach, i would need array
    var hourRow = $("<div>");
    hourRow.addClass("row time-block");
    hourRow.attr("id", hourMark);
    var hourColumn = $("<div>");
    hourColumn.addClass("col-2 col-md-1 hour text-center py-3");
    hourColumn.text(hourMark + ":00");
    var textColumn = $("<textarea>");
    textColumn.addClass("col-8 col-md-10 description");
    var saveBtn = $("<button>");
    saveBtn.addClass("btn saveBtn col-2 col-md-1");
    saveBtn.attr("aria-hidden", "save");
    var iSaveBtn = $("<i>");
    iSaveBtn.addClass("fas fa-save")
    iSaveBtn.attr("aria-hidden", "true");
    hourRow.append(hourColumn, textColumn, saveBtn); // parent is hourRow
    saveBtn.append(iSaveBtn);
    $(".container").append(hourRow);
}

//listener like 
$('.saveBtn').click(saveNote);

//save in to local storage
function saveNote () {
    var time = $(this).parent().attr('id'); //gets the hour (hourmark)
    var descriptionText = $(this).siblings('.description').val(); //get the text from desciption
    localStorage.setItem(time, descriptionText);
}

//changing the color based on time
