/* eslint-disable no-undef */
/* globals: window */

import moment from 'moment';
import _ from 'lodash';
import $ from 'jquery'
import { getState } from '../store/store'
import { ROLES } from '../configs';

export class UtilsHelper {
  static serialize(obj, prefix = false) {
    const str = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const p in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(p)) {
        const k = prefix ? `${prefix}[${p}]` : p;
        const v = obj[p];
        str.push((v !== null && typeof v === 'object')
          ? UtilsHelper.serialize(v, k)
          : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
      }
    }
    return str.join('&');
  }

  static clearPhoneNumber(number) {
    return number.replace(/\D/gi, '');
  }

  static randomStr(length) {
    let i = 0;
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (i; i < length; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  static random = length => Math.round(Math.random() * (10 ** length));

  static getWeekRangeByDate(date) {
    const weekNumber = moment(date)
      .isoWeek();
    const yearNumber = moment(date)
      .format('YYYY');

    return UtilsHelper.getWeekRangeByWeekAndYear(weekNumber, yearNumber);
  }

  static getWeekRangeByWeekAndYear(weekNumber, yearNumber) {
    const startDate = moment()
      .year(yearNumber)
      .isoWeek(weekNumber)
      .startOf('isoweek');
    const endDate = moment()
      .year(yearNumber)
      .isoWeek(weekNumber)
      .endOf('isoweek');

    return {
      startDate,
      endDate,
    };
  }

  static numberWithCommas(x) {
    const parts = x.toString()
      .split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  static trimSlashes = url => url && url.replace(/^\/|\/$/g, '');

  static normalizeDividedNumber = (number) => {
    return number - Math.round(number) < 0.015 ? Math.round(number) : number;
  };

  static round = (number, roundTo = 100) => Math.round(number * roundTo) / roundTo;

  static isNumeric = value => !Number.isNaN(value - parseFloat(value));

  static reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  static getNum = (val) => {
    if (Number.isNaN(val) || val === undefined) {
      return 0;
    }
    return parseFloat(val);
  };

  static removeEmptyFields = (object) => {
    return Object.entries(object)
      // eslint-disable-next-line no-unused-vars
      .filter(([key, value]) => {
        if (_.isArray(value)) {
          return !_.isEmpty(value);
        }

        return !!value || value === 0;
      })
      .reduce((acc, [key, value]) => {
        acc[key] = value;

        return acc;
      }, {});
  };

  static normalizeImageUrl = (url, options = { size: 'sm' }) => {

    if (!url) return './images/required/placeholder-product.jpg';
    let size = '&w=320';

    switch (options.size) {
      case 'sm':
        size = '&w=320';
        break;
      case 'xs':
        size = '&h=50';
        break;
      default:
        size = '&w=320';
    }

    return _.first(url) + size;
  };

  static milesToKilometers = (miles) => {
    return parseInt(miles) * 1.60934;
  }

  static convertObjToArray = (obj) => {

    let arr = [];

    _.forEach(obj, function (value, key) {
      let str = key, capsFound = false;
      let keyString = "", index = 0;

      for (let i = 0; i < str.length; i++) {
        var n = str.charCodeAt(i);
        if (n >= 65 && n <= 90) {
          capsFound = true;
          keyString += str.substring(index, i) + " ";
          index = i;
        }
      }

      keyString += str.substring(index, str.length)

      if (capsFound)
        keyString = keyString
      else
        keyString = key

      arr.push({ key: keyString, value })
    });

    return arr;
  }

  static _getListofRecord(arr, values) {

    let finalArr = []

    _.map(values, obj => {
      const o = _.filter(arr, arrObj => {
        return arrObj.id === obj.courseId;
      })
      if (o.length > 0) {
        finalArr.push(o[0].name)
      }
    })

    return finalArr
  }

  static getDateDiff(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    const diffTime = (date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  static getScheduleCredit(d1, d2) {
    let credit = 0;
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    const diffTime = (date2 - date1);

    const diffWeek = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    credit = (Math.floor(diffWeek / 7) * 0.5)

    return credit
  }

  static numberToStringMap(num) {
    var str = num.toString();
    var len = str.length;
    var val = "";
    if (len >= 4 && len <= 6)
      val = str.substr(0, len - 3) + "k"
    else if (len >= 7 && len <= 9)
      val = str.substr(0, len - 6) + (str[1] === "0" ? "" : "." + str[1]) + (str[2] === "0" ? "" : "" + str[2]) + "M"
    else if (len <= 3)
      val = str;

    return val;
  }






}