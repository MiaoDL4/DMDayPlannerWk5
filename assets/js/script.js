//show current date on top
var currentTime = dayjs();
var currentHour = dayjs().hour()
$("#currentDay").text(currentTime.format("MMMM DD,YYYY hh:mm A"))
console.log(currentHour);
var tweleveHr = ["8.00am", "9.00am", "10.00am", "11.00am", "12.00pm", "1.00pm", "2.00pm", "3.00pm", "4.00pm", "5.00pm"]
//apended planner java script copy of what was in HTML
for(i = 0; i < tweleveHr.length ; i ++){
    var hourRow = $("<div>"); //parent div
    hourRow.addClass("row time-block");
    hourRow.attr("id", i ); 
    var hourColumn = $("<div>"); //child div
    hourColumn.addClass("col-2 col-md-1 hour text-center py-3 hour");
    hourColumn.attr("id", i+8);// +8 to make up hour difference
    hourColumn.text(tweleveHr[i]);
    var textColumn = $("<textarea>");//child div
    textColumn.addClass("col-8 col-md-10 reminder");
    var saveBtn = $("<button>");
    saveBtn.addClass("btn saveBtn col-2 col-md-1");
    saveBtn.attr("aria-hidden", "save");
    var iSaveBtn = $("<i>");//child child div
    iSaveBtn.addClass("fas fa-save")
    iSaveBtn.attr("aria-hidden", "true");
    hourRow.append(hourColumn, textColumn, saveBtn);
    saveBtn.append(iSaveBtn);
    $(".container").append(hourRow);
}
//listener like 
$('.saveBtn').click(saveNote);
//save in to local storage
function saveNote () {
    var timeRow = $(this).parent().attr('id'); 
    var saveRow = $(this).siblings('.reminder').val();
    localStorage.setItem(timeRow, saveRow);
}
//display stored data
$(".time-block").each(function(index){
    $(this).children('.reminder').val(localStorage.getItem(index))
    console.log(index)
})
//changing the color based on time
$(".time-block").each(function(){
    var plannerTime = parseInt($(this).children(".hour").attr("id"));
    if (plannerTime < currentHour) {
        $(this).addClass("past");
    } else if (plannerTime > currentHour) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
})



