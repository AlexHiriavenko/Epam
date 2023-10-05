export function getFullDaysBeforeNewYear(date, month) {
    function isValidParams(date, month) {
        return (
            !!date &&
            !!month &&
            date >= 1 &&
            date < 32 &&
            month > 0 &&
            month < 13
        );
    }
    if (!isValidParams(date, month)) return null;

    const endDate = new Date("December 31, 2023");
    const targetDate = new Date(2023, month - 1, date);
    const msFullDay = 1000 * 3600 * 24;

    const timeDifference = endDate.getTime() - targetDate.getTime();
    const daysDifference = Math.floor(timeDifference / msFullDay);
    return daysDifference + 1;
}

export function formatWithWeekday(date) {
    if (!date) return "";

    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    const dateOfMonth = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${weekday}, ${dateOfMonth}, ${month} ${year}`;
}

export function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

export function isAfter(date, dateToCompare) {
    if (
        !(date instanceof Date) ||
        isNaN(date) ||
        !(dateToCompare instanceof Date) ||
        isNaN(dateToCompare)
    ) {
        return false;
    }

    return date > dateToCompare;
}

export function formatDistanceToNow(date) {
    if (!isValidDate(date)) {
        return "Date is unknown";
    }

    const now = new Date();
    const diffMilliseconds = now - date;
    const diffSeconds = diffMilliseconds / 1000;
    const diffMinutes = diffSeconds / 60;

    if (diffSeconds <= 30) {
        return "less than a minute";
    } else if (diffSeconds <= 90) {
        return "1 minute";
    } else if (diffMinutes <= 44) {
        return `${Math.round(diffMinutes)} minutes`;
    } else if (diffMinutes <= 89) {
        return "about 1 hour";
    } else {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    }
}
