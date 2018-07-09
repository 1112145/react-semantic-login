import _ from 'lodash';

export const intellisense = (dataSource, keyWord, key) => {
    var results = [];

    if (keyWord.length == 0) return dataSource;

    const re = new RegExp(_.escapeRegExp(keyWord), 'i');

    const isMatch = result => re.test((key) ? result[key] : result);

    results = _.filter(dataSource, isMatch);

    return results;

}