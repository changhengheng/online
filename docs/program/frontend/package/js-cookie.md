# js-cookie

[npm 链接](https://www.npmjs.com/package/js-cookie)
[github 链接](https://github.com/js-cookie/js-cookie/tree/latest#readme)

> 用于处理 Cookie 的简单、轻量级 JavaScript API

- 适用于所有浏览器
- 接受任何字符（指 cookie 名）
- 通过了大量的测试
- 无依赖
- 支持 ESM
- 支持 AMD/CommonJS
- 符合[RFC 6265](https://tools.ietf.org/html/rfc6265) 规范
- Useful [Wiki](https://github.com/js-cookie/js-cookie/wiki)
- 启用自定义编码/解码
- 体积小于800字节

## 安装

### NPM

```
npm i js-cookie
```

## 基本用法

创建一个在整个网站上有效的cookie：

```
Cookies.set('name', 'value')
```

创建一个从现在起7天内过期的cookie，在整个网站上有效：

```
Cookies.set('name', 'value', { expires: 7 })
```

创建一个过期cookie，对当前页面的路径有效：

```
Cookies.set('name', 'value', { expires: 7, path: '' })
```

读取 cookie:

```
Cookies.get('name') // => 'value'
Cookies.get('nothing') // => undefined
```

读取所有可见 cookie：

```
Cookies.get() // => { name: 'value' }
```

_Note: It is not possible to read a particular cookie by passing one of the cookie attributes (which may or may not have been used when writing the cookie in question):_
注意：通过传递其中一个cookie属性（在编写有问题的cookie时可能使用过，也可能没有使用过），无法读取特定cookie：

```
Cookies.get('foo', { domain: 'sub.example.com' }) // `domain` won't have any effect...!
```

The cookie with the name `foo` will only be available on `.get()` if it's visible from where the code is called; the domain and/or path attribute will not have an effect when reading.

Delete cookie:

```
Cookies.remove('name')
```

Delete a cookie valid to the path of the current page:

```
Cookies.set('name', 'value', { path: '' })
Cookies.remove('name') // fail!
Cookies.remove('name', { path: '' }) // removed!
```

_IMPORTANT! When deleting a cookie and you're not relying on the [default attributes](https://github.com/js-cookie/js-cookie/tree/latest#cookie-attributes), you must pass the exact same path and domain attributes that were used to set the cookie:_

```
Cookies.remove('name', { path: '', domain: '.yourdomain.com' })
```

_Note: Removing a nonexistent cookie neither raises any exception nor returns any value._

## Namespace conflicts

If there is any danger of a conflict with the namespace `Cookies`, the `noConflict` method will allow you to define a new namespace and preserve the original one. This is especially useful when running the script on third party sites e.g. as part of a widget or SDK.

```
// Assign the js-cookie api to a different variable and restore the original "window.Cookies"
var Cookies2 = Cookies.noConflict()
Cookies2.set('name', 'value')
```

_Note: The `.noConflict` method is not necessary when using AMD or CommonJS, thus it is not exposed in those environments._

## Encoding

This project is [RFC 6265](http://tools.ietf.org/html/rfc6265#section-4.1.1) compliant. All special characters that are not allowed in the cookie-name or cookie-value are encoded with each one's UTF-8 Hex equivalent using [percent-encoding](http://en.wikipedia.org/wiki/Percent-encoding).
The only character in cookie-name or cookie-value that is allowed and still encoded is the percent `%` character, it is escaped in order to interpret percent input as literal.
Please note that the default encoding/decoding strategy is meant to be interoperable [only between cookies that are read/written by js-cookie](https://github.com/js-cookie/js-cookie/pull/200#discussion_r63270778). To override the default encoding/decoding strategy you need to use a [converter](https://github.com/js-cookie/js-cookie/tree/latest#converters).

_Note: According to [RFC 6265](https://tools.ietf.org/html/rfc6265#section-6.1), your cookies may get deleted if they are too big or there are too many cookies in the same domain, [more details here](https://github.com/js-cookie/js-cookie/wiki/Frequently-Asked-Questions#why-are-my-cookies-being-deleted)._

## Cookie Attributes

Cookie attribute defaults can be set globally by creating an instance of the api via `withAttributes()`, or individually for each call to `Cookies.set(...)` by passing a plain object as the last argument. Per-call attributes override the default attributes.

### expires

Define when the cookie will be removed. Value must be a [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) which will be interpreted as days from time of creation or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) instance. If omitted, the cookie becomes a session cookie.

To create a cookie that expires in less than a day, you can check the [FAQ on the Wiki](https://github.com/js-cookie/js-cookie/wiki/Frequently-Asked-Questions#expire-cookies-in-less-than-a-day).

**Default:** Cookie is removed when the user closes the browser.

**Examples:**

```
Cookies.set('name', 'value', { expires: 365 })
Cookies.get('name') // => 'value'
Cookies.remove('name')
```

### path

A [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) indicating the path where the cookie is visible.

**Default:** `/`

**Examples:**

```
Cookies.set('name', 'value', { path: '' })
Cookies.get('name') // => 'value'
Cookies.remove('name', { path: '' })
```

**Note regarding Internet Explorer:**

> Due to an obscure bug in the underlying WinINET InternetGetCookie implementation, IE’s document.cookie will not return a cookie if it was set with a path attribute containing a filename.

(From [Internet Explorer Cookie Internals (FAQ)](http://blogs.msdn.com/b/ieinternals/archive/2009/08/20/wininet-ie-cookie-internals-faq.aspx))

This means one cannot set a path using `window.location.pathname` in case such pathname contains a filename like so: `/check.html` (or at least, such cookie cannot be read correctly).

In fact, you should never allow untrusted input to set the cookie attributes or you might be exposed to a [XSS attack](https://github.com/js-cookie/js-cookie/issues/396).

### domain

A [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) indicating a valid domain where the cookie should be visible. The cookie will also be visible to all subdomains.

**Default:** Cookie is visible only to the domain or subdomain of the page where the cookie was created, except for Internet Explorer (see below).

**Examples:**

Assuming a cookie that is being created on `site.com`:

```
Cookies.set('name', 'value', { domain: 'subdomain.site.com' })
Cookies.get('name') // => undefined (need to read at 'subdomain.site.com')
```

**Note regarding Internet Explorer default behavior:**

> Q3: If I don’t specify a DOMAIN attribute (for) a cookie, IE sends it to all nested subdomains anyway?
> A: Yes, a cookie set on example.com will be sent to sub2.sub1.example.com.
> Internet Explorer differs from other browsers in this regard.

(From [Internet Explorer Cookie Internals (FAQ)](http://blogs.msdn.com/b/ieinternals/archive/2009/08/20/wininet-ie-cookie-internals-faq.aspx))

This means that if you omit the `domain` attribute, it will be visible for a subdomain in IE.

### secure

Either `true` or `false`, indicating if the cookie transmission requires a secure protocol (https).

**Default:** No secure protocol requirement.

**Examples:**

```
Cookies.set('name', 'value', { secure: true })
Cookies.get('name') // => 'value'
Cookies.remove('name')
```

### sameSite

A [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), allowing to control whether the browser is sending a cookie along with cross-site requests.

Default: not set.

**Note that more recent browsers are making "Lax" the default value even without specifiying anything here.**

**Examples:**

```
Cookies.set('name', 'value', { sameSite: 'strict' })
Cookies.get('name') // => 'value'
Cookies.remove('name')
```

### Setting up defaults

```
const api = Cookies.withAttributes({ path: '/', domain: '.example.com' })
```

## Converters

### Read

Create a new instance of the api that overrides the default decoding implementation. All get methods that rely in a proper decoding to work, such as `Cookies.get()` and `Cookies.get('name')`, will run the given converter for each cookie. The returned value will be used as the cookie value.

Example from reading one of the cookies that can only be decoded using the `escape` function:

```
document.cookie = 'escaped=%u5317'
document.cookie = 'default=%E5%8C%97'
var cookies = Cookies.withConverter({
  read: function (value, name) {
    if (name === 'escaped') {
      return unescape(value)
    }
    // Fall back to default for all other cookies
    return Cookies.converter.read(value, name)
  }
})
cookies.get('escaped') // 北
cookies.get('default') // 北
cookies.get() // { escaped: '北', default: '北' }
```

### Write

Create a new instance of the api that overrides the default encoding implementation:

```
Cookies.withConverter({
  write: function (value, name) {
    return value.toUpperCase()
  }
})
```

## TypeScript declarations

```
npm i @types/js-cookie
```

## Server-side integration

Check out the [Servers Docs](https://github.com/js-cookie/js-cookie/blob/latest/SERVER_SIDE.md)

## Contributing

Check out the [Contributing Guidelines](https://github.com/js-cookie/js-cookie/blob/latest/CONTRIBUTING.md)

## Security

For vulnerability reports, send an e-mail to `js-cookie at googlegroups dot com`

## Releasing

Releasing should be done via the `Release` GitHub Actions workflow, so that published packages on npmjs.com have package provenance.

GitHub releases are created as a draft and need to be published manually! (This is so we are able to craft suitable release notes before publishing.)

## Supporters

[![img](https://raw.githubusercontent.com/wiki/js-cookie/js-cookie/Browserstack-logo%402x.png)](https://www.browserstack.com/)

Many thanks to [BrowserStack](https://www.browserstack.com/) for providing unlimited browser testing free of cost.

## Authors

- [Klaus Hartl](https://github.com/carhartl)
- [Fagner Brack](https://github.com/FagnerMartinsBrack)
- And awesome [contributors](https://github.com/js-cookie/js-cookie/graphs/contributors)
