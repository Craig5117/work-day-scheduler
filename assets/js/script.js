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
})

 
$("#date").text(moment().format('dddd, MMMM Do')); 

