//jshint eversion:6


module.exports =  getDate;

function getDate() {
    var today = new Date();
    
    var  options = {
        weekDay:"long",
        day:"numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-US", options)
    return day;
}