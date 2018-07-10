import v from 'validator';

export const isNotEmail = (value) => {
    return !v.isEmail(value);
}

export const isNotEmpty = (value) => {
    return value && !v.isEmpty(value);
}