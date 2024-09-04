export function extractTime(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = padZero(date.getMinutes());
    const ampm = hours >= 12 ? "PM" : "AM";
  
    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12; // Convert '0' hours to '12'
    hours = padZero(hours);
  
    return `${hours}:${minutes} ${ampm}`;
  }
  
  // Helper function to pad single-digit numbers with a leading zero
  function padZero(number) {
    return number.toString().padStart(2, "");
  }
  