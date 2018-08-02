import v from 'validator';

export const isNotEmail = (value) => {
    return !v.isEmail(value);
}

export const isEmpty = (value) => {
    return !value || v.isEmpty(value);
}

export const isNotEmpty = (value) => {
    return value && !v.isEmpty(value);
}

export const runValidator = (dataObject, validator) => {
    const error = {}
    for (const key in dataObject) {
        const patterns = validator[key];
        for (const pattern of patterns) {
            if (pattern.method(dataObject[key])) {
                error[key] = pattern.message;
                break;
            }
        }
    }

    return error;
}