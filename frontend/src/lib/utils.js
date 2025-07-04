export function formatDate(date){
    return date.toLocaleDateString("en-US", {
        year: 'numeric', 
        day: 'numeric', 
        month: 'short',
    });
}