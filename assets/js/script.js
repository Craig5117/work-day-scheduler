var activities = []


var loadActivities = function() {
    activities = JSON.parse(localStorage.getItem("activities"));
    console.log(activities) 
    var textVal = 
    $("textarea").each(function() {
    for (var i = 0; i < activities.length; ++i) {
            if (activities[i].id === parseInt($(this).attr("id"))){
        console.log(parseInt($(this).attr("id")))
        console.log(activities[i].text)
            $(this).val() === activities[i].text;

            
            }
            // if (activities[i].id === $(this).id) {
            //     $(this).val().replaceWith(activities[i].text);
            // }
        
        }
    })
}

var saveActivity = function() {
    localStorage.setItem("activities", JSON.stringify(activities));
}

$(".saveBtn").on("click", function(){
        activityText = $(this).prev().children("textarea").val();
        activityId = $(this).prev().children("textarea").attr("id");
        activityIndex = parseInt(activityId);
        console.log("Index is " + activityIndex)
        activityObj = {id: activityIndex, text: activityText}
        console.log("activities.length is " + activities.length)
        if (activities.length === 0) {
            activities.push(activityObj)
            console.log(activities)
        }
        //this is sort of working but it makes too many
        else { 
            for (var i = 0; i < activities.length; ++i) {
                // this part is sort of working
                if (activities[i].id === activityObj.id) {
                    activities.splice(activities[i].id, 1);
                    console.log(activities)
                }
                
            }
            activities.push(activityObj);
            activities.sort((a, b) => a.id - b.id);
            console.log(activities)
        }
        saveActivity();
});
var timeStatusAudit = function() {
    $(".hour").each(function (){
    // console.log("I was checked");
    var currentTime = Math.floor(moment().format('H'));
    // console.log("The current time is " + currentTime)
    var activityTime = parseInt($(this).attr("data-time"));
    if (activityTime === currentTime) {
        // console.log(activityTime + " is now");
        $(this).siblings(".activity").removeClass("future").addClass("present");
    }
    else if (activityTime - currentTime < 0) {
        // console.log(activityTime + " has already passed")
        $(this).siblings(".activity").removeClass("future")
        $(this).siblings(".activity").removeClass("present").addClass("past");
    }
    else if (activityTime - currentTime > 0) {
        // console.log("You still have time until " + activityTime)
        $(this).siblings(".activity").removeClass("present");
        $(this).siblings(".activity").removeClass("past").addClass("future");
    }
    });
    // update activity time status every 15 minutes
    setTimeout(timeStatusAudit, 900000);
};

 
$("#date").text(moment().format('dddd, MMMM Do')); 

timeStatusAudit();
loadActivities();