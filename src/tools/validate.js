const is_valid_email = (str) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
};

const is_valid_phone_number = (str) => {
    return /^\+?([0-9]+[ \/\-])?[0-9]+( ?[0-9]+)?$/.test(str);
};

const has_links = (str) => {
    return /[a-z]+\.[a-z]{1,3}/.test(str);
};

module.exports = {
    is_valid_email,
    is_valid_phone_number,
    has_links,
};