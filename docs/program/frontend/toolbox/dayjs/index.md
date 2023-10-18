# dayjs

## 介绍

是一个处理时间和日期的 JS 库

- 轻量，只有2kB
- API和monentjs完全一致
- 所有API操作都返回一个新的Dayjs对象（不影响原对象）
- 国际化友好

- 可以运行在浏览器和Node中

## 基本使用

```js
// 1. 直接调用 dayjs() 将返回一个包含当前日期和时间的 Day.js 对象。
console.log(dayjs());

// 2. 传入一个 ISO 8601 格式的时间字符串会解析并返回一个对应的 Day.js 对象
console.log(dayjs("2023-10-21"));

// 3. format用法：根据传入的占位符返回格式化后的日期字符串。

console.log(dayjs().format()); // 默认返回的是 ISO8601 格式字符串 '2023-10-18T16:06:58+08:00'

// 将字符放在方括号中，即可原样返回而不被格式化替换
console.log(
dayjs("2019-01-25").format("[hahahahaha] YYYY-MM-DDTHH:mm:ssZ[Z]")
); // 'hahahahaha 2019-01-25T00:00:00+08:00Z'

// 两位数的年份
console.log(dayjs(Date.now()).format("YY")); // 23
// 四位数的年份
console.log(dayjs(Date.now()).format("YYYY")); // 2023
// 一位数的月份
console.log(dayjs(Date.now() - 10000000000).format("M")); // 6
// 两位数的月份
console.log(dayjs(Date.now() - 10000000000).format("MM")); // 06
// 英文缩写的月份名称
console.log(dayjs(Date.now()).format("MMM")); // Oct
// 英文全写的月份名称
console.log(dayjs(Date.now()).format("MMMM")); // October
// 一位数的日期
console.log(dayjs(Date.now() - 1100000000).format("D")); // 5
// 两位数的日期
console.log(dayjs(Date.now() - 1100000000).format("DD")); // 05
// 星期，0~6，星期天是0
console.log(dayjs(Date.now()).format("d")); // 3
// 星期，英文
console.log(dayjs(Date.now()).format("dddd")); // Wednesday
// 星期，英文简写
console.log(dayjs(Date.now()).format("ddd")); // Wed
// 星期，最简写的英文
console.log(dayjs(Date.now()).format("dd")); // We
// 一位数的小时，24小时制
console.log(dayjs(Date.now() - 1090000000).format("H")); // 1
// 两位数的小时，24小时制
console.log(dayjs(Date.now() - 1090000000).format("HH")); // 01
// 一位数的小时，12小时制
console.log(dayjs(Date.now() - 1010000000).format("h")); // 11 （晚上）
// 两位数的小时，12小时制
console.log(dayjs(Date.now() - 1110000000).format("hh")); // 08 （晚上）
// 一位数的分钟
console.log(dayjs(Date.now() - 1110000000).format("m")); // 4
// 两位数的分钟
console.log(dayjs(Date.now() - 1110000000).format("mm")); // 04
// 一位数的秒
console.log(dayjs(Date.now() - 1110000000).format("s")); // 46
// 两位数的秒
console.log(dayjs(Date.now() - 1110000000).format("ss")); // 46
// 毫秒
console.log(dayjs(Date.now() - 1110000200).format("sss")); // 4646
```

### 支持的解析占位符列表

| 占位符 | 输出             | 详情                                                         |
| ------ | ---------------- | ------------------------------------------------------------ |
| `YY`   | 18               | 两位数的年份                                                 |
| `YYYY` | 2018             | 四位数的年份                                                 |
| `M`    | 1-12             | 月份，从 1 开始                                              |
| `MM`   | 01-12            | 月份，两位数                                                 |
| `MMM`  | Jan-Dec          | 缩写的月份名称                                               |
| `MMMM` | January-December | 完整的月份名称                                               |
| `D`    | 1-31             | 月份里的一天                                                 |
| `DD`   | 01-31            | 月份里的一天，两位数                                         |
| `d`    | 0-6              | 一周中的一天，星期天是 0                                     |
| `dd`   | Su-Sa            | 最简写的星期几                                               |
| `ddd`  | Sun-Sat          | 简写的星期几                                                 |
| `dddd` | Sunday-Saturday  | 星期几                                                       |
| `H`    | 0-23             | 小时                                                         |
| `HH`   | 00-23            | 小时，两位数                                                 |
| `h`    | 1-12             | 小时, 12 小时制                                              |
| `hh`   | 01-12            | 小时, 12 小时制, 两位数                                      |
| `m`    | 0-59             | 分钟                                                         |
| `mm`   | 00-59            | 分钟，两位数                                                 |
| `s`    | 0-59             | 秒                                                           |
| `ss`   | 00-59            | 秒 两位数                                                    |
| `SSS`  | 000-999          | 毫秒 三位数                                                  |
| `Z`    | +05:00           | UTC 的偏移量，±HH:mm                                         |
| `ZZ`   | +0500            | UTC 的偏移量，±HHmm                                          |
| `A`    | AM PM            |                                                              |
| `a`    | am pm            |                                                              |
| ...    | ...              | 其他格式 ( 依赖 [`AdvancedFormat` ](https://dayjs.gitee.io/docs/zh-CN/plugin/advanced-format)插件 ) |

## format源码

```js
 /**
   * @description: 根据模板返回对应格式的时间字符串
   * @param {String} formatStr 模板字符串
   * @return {String} 对应格式的时间字符串
   */
  format(formatStr) {
    if (!this.isValid()) return C.INVALID_DATE_STRING;

    // 整理出所需的各种变量和方法
    const str = formatStr || C.FORMAT_DEFAULT;
    const zoneStr = Utils.z(this);
    const locale = this.$locale();
    const { $H, $m, $M } = this;
    const { weekdays, months, meridiem } = locale;

    /**
     * @description: 返回对应缩写的字符串，可自适应
     * @param {Array} arr 几月或者周几的缩写数组 ["1月", "2月", "3月"...]
     * @param {Number} index 索引
     * @param {Array} full 几月或者周几的非缩写数组 ["一月", "二月", "三月"...]
     * @param {Number} length 返回结果的字符数
     * @return {String} 对应缩写的字符串
     */
    const getShort = (arr, index, full, length) =>
      (arr && (arr[index] || arr(this, str))) || full[index].substr(0, length);

    /**
     * @description: 获取固定长度的小时表示
     * @param {Number} num 小时的长度
     * @return {String} 固定长度的小时表示
     */
    const get$H = (num) => Utils.s($H % 12 || 12, num, '0');

    /**
     * @description: 根据时和分区分时间段（上午、下午）
     * @param {Number} hour 时
     * @param {Number} minute 分
     * @param {Boolean} isLowercase 是否小写，默认false
     * @return {String} 时间段 例如 AM
     */
    const meridiemFunc =
      meridiem ||
      ((hour, minute, isLowercase) => {
        const m = hour < 12 ? 'AM' : 'PM';
        return isLowercase ? m.toLowerCase() : m;
      });

    // 不同的模板对应的格式转换
    const matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, '0'),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, '0'),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, '0'),
      SSS: Utils.s(this.$ms, 3, '0'),
      Z: zoneStr, // 'ZZ' logic below
    };

    // /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
    // 最后进行了整个字符串模板的内容替换
    return str.replace(
      C.REGEX_FORMAT,
      (match, $1) => $1 || matches[match] || zoneStr.replace(':', '')
    ); // 'ZZ'
  }
```

