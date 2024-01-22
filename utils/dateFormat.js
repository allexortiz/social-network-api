// Function to add date suffix (e.g., 'st', 'nd', 'rd', 'th') to the day
const addDateSuffix = (date) => {
    const dateStr = date.toString();
    const lastChar = dateStr.charAt(dateStr.length - 1);
    const suffix = (lastChar === '1' && dateStr !== '11') ? 'st' :
                   (lastChar === '2' && dateStr !== '12') ? 'nd' :
                   (lastChar === '3' && dateStr !== '13') ? 'rd' : 'th';

    return `${dateStr}${suffix}`;
};

// Function to format a timestamp
module.exports = (timestamp, { monthLength = 'short', dateSuffix = true } = {}) => {
    // Array of month abbreviations
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Create a Date object from the timestamp
    const dateObj = new Date(timestamp);

    // Get the formatted month using the month abbreviations array
    const formattedMonth = months[dateObj.getMonth()];

    // Get the day of the month, optionally with date suffix
    const dayOfMonth = dateSuffix ? addDateSuffix(dateObj.getDate()) : dateObj.getDate();

    // Get the year
    const year = dateObj.getFullYear();
    
    // Get the hour, minutes, and period of the day (am/pm)
    let hour = (dateObj.getHours() % 12) || 12;
    const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();
    const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

    // Create and return the formatted timestamp string
    return `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
};