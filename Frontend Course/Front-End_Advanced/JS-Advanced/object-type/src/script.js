function createUser(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
    };
}

function getFullName(user) {
    if (!user) return "";
    return user?.firstName + " " + user?.lastName;
}

function getWidth(params) {
    return params?.styling?.sizes?.width || null;
}

function extendObject(obj, isValid) {
    return { ...obj, isValid: isValid };
}

function sumPrices(prices) {
    const isNum = (val) =>
        typeof val === "number" && !isNaN(val) && Math.abs(val) !== Infinity;
    return Object.values(prices).reduce(
        (acc, next) => (acc += isNum(next) ? next : 0),
        0
    );
}

function createUserWithFullName(firstName, lastName) {
    const resObj = createUser(firstName, lastName);
    resObj.setFirstName = function (newFirstName) {
        this.firstName = newFirstName;
    };
    resObj.setLastName = function (newLastName) {
        this.lastName = newLastName;
    };
    resObj.getFullName = () => getFullName(resObj);
    return resObj;
}
