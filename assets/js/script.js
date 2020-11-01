var activities = []


// var loadActivities = function() {
//      activities = JSON.parse(localStorage.getItem("activities"));
  
//     // if nothing in localStorage, create a new object to track all activity arrays
//     if (!activities) {
//       activities = {
//         activity = [$(".activity-text").attr("id").val()]
//       };
//     }
//     console.log(activities)
// }

// var saveActivity = function() {
//     activity = 
//     localStorage.setItem("activities", JSON.stringify(activities));
// }

$(".saveBtn").on("click", function(){
        activityText = $(this).prev().children("textarea").val();
        activityId = $(this).prev().children("textarea").attr("id");
        index = parseInt(activityId);
        console.log("Index is " + index)
        activityObj = {id: index, text: activityText}
        console.log("activities.length is " + activities.length)
        if (activities.length === 0) {
            activities.push(activityObj)
            console.log(activities)
        }
        //this is sort of working but it makes too many
        else if (activities.length > 0) { 
            console.log("I at least made it this far.")
            for (var i = 0; i < activities.length; ++i) {
                if (activities[i].id === activityObj.id) {
                    console.log("is in array");
                    activities[i].text = activityObj.text;
                    console.log(activities);
                }
                else {
                    activities.push(activityObj);
                    console.log("It ain't here bro.");
                }
            }
        }
        // else if (activities.length > 0) { 
        //     console.log("I at least made it this far.")
        //     for (var i = 0; i < activities.length; ++i) {
        //         if (jQuery.inArray(activityObj.id, activities)) {
        //             console.log("is in array");
        //             console.log(activities);
        //         }
        //         else {activities.push(activityObj)
        //             console.log("It ain't here bro.");
        //             console.log(activites)
        //         }
        //     }
        // }
        // 
        // } else {
        //     console.log("is NOT in array");
        // }
        // console.log(activityObj)
        // console.log(index)
});

$(".hour").each(function(){
    console.log("I was checked");
    var currentTime = moment().format('H');
    console.log(currentTime)
    var activityTime = parseInt($(this).attr("data-time"));
    if (Math.abs(currentTime - activityTime > 0) && Math.abs(currentTime - activityTime <= 1)) {
        console.log(activityTime + " is now");
        $(this).siblings(".activity").removeClass("future").addClass("present");
    }
    else if (activityTime - currentTime < 0) {
        console.log(activityTime + " has already passed")
        $(this).siblings(".activity").removeClass("future", "present").addClass("past");
    }
    else if (activityTime - currentTime > 0) {
        console.log("You still have time until " + activityTime)
        $(this).siblings(".activity").removeClass("past", "present").addClass("future");
    }
});
 
$("#date").text(moment().format('dddd, MMMM Do')); 

