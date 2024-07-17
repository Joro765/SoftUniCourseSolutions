export function convertDate(dateString) {
    const date = new Date(dateString);

    const convertedDate = date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    return convertedDate;
}


export function createDate() {
    const date = new Date();

    const isoString = date.toISOString();

    return isoString;
}