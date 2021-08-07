// Function to limit maximum date (input Date): (this function return a string date)
export function maxDate(){
    const date = new Date();
    let day = (date.getDay()+1).toString();
    let month = (date.getMonth()+1).toString();
    let year = (date.getFullYear()).toString();

    if (day.length===1) {
        day = 0+day;
    }
    if (month.length===1) {
        month = 0+month;
    }

    return year+"-"+month+"-"+day;
}
//--------------------------------------------//

