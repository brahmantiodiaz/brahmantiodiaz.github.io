# Submit a Form to Google Sheets 


#### Cara membuat HTML form masuk ke google sheets menggunakan plain 'ol JavaScript (ES6), [Google Apps Script](https://developers.google.com/apps-script/), [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData).

## 1. Buat google sheet baru 


- Pertama, Pergi ke [Google Sheets](https://docs.google.com/spreadsheets) dan `Start a new spreadsheet` dengan `Blank` template.
- Ubah namanya menjadi yang di-inginkan  contoh `Data Form Contact`. Atau apapun itu, tidak masalah.
- Letakan nama colum pada row pertama atau paling atas seperti:

|   |     A     |   B   | C | ... |
|---|:---------:|:-----:|:-:|:---:|
| 1 | timestamp | email |   |     |

> Untuk cara menambahkan kolom input tambahan, [checkout section 6 below](#6-adding-additional-form-data).

## 2. Buat  Google Apps Script

- Klik pada `Tools > Script Editor…` yang mana akan membuka tab baru.
- Ubah namanya menjadi`Submit Form to Google Sheets`. _Pastikan untuk menunggu hingga benar-benar menyimpan dan memperbaruhi title sebelum mengedit script._
- Sekarang, hapus `function myFunction() {}` block di dalam `Code.gs` tab.
- Paste script dibawah dan `File > Save`:

```js
var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```

> Jika kamu ingin mengerti lebih detail tentang apa yang script lakukan, sikalan lihat di [`index.js`](https://github.com/brahmantiodiaz/brahmantiodiaz.github.io/tree/main/google-sheet-script/index.js) file pada repositori tersebut menjelaskan secara detail. 

## 3. Jalankan setup function

- Selanjutnya pergi ke `Run > Run Function > initialSetup` untuk menjalankan function.
- Pada `Authorization Required` dialog, klik `Review Permissions`.
- Sign in atau pilih Google account associated dengan projects ini.
- Kamu akan melihat dialog yang bertuliskan `Hi {Your Name}`, `Submit Form to Google Sheets wants to`...
- klik `Allow`

## 4. Publish project sebagai web app

- Klik `Publish > Deploy as web app…`.
- Set `Project Version` menjadi `New` masukan `initial version` in the input field below.
- Biarkan `Execute the app as:` set ke `Me(your@address.com)`.
- Untuk `Who has access to the app:` pilih `Anyone, even anonymous`.
- Klik `Deploy`.
- pada popup, copy `Current web app URL` dari dialog.
- Dan klik`OK`.

> **IMPORTANT!** Jika kamu memiliki custom domail dengan gmail, kamu _mungkin_ membutuhkan klik `OK`, refresh page, dan pergi ke `Publish > Deploy as web app…` lagi untuk mendapatkan proper web app URL. Seharusnya akan terlihat seperti `https://script.google.com/a/yourdomain.com/macros/s/XXXX…`.

## 5. Input your web app URL

Open file html yang ingin dimasukan form, kemudian masukan script. pada `<SCRIPT URL>` ubah menjadi script app sheets kalian :


```js
  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
```
contoh file html dengan form yang akan dipindah ke sheets : 

```js
<form name="submit-to-google-sheet">
  <input name="email" type="email" placeholder="Email" required>
  <button type="submit">Send</button>
</form>

<script>
  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script>
```

Seperti yang kamu lihat, script ini menggunakan [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), mekanisme yang cukup baru berbasis promese untuk membuat web request. Ini akan membuat "POST" request kepada script URL kalian dan menggunakan [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) untuk meneruskan data kita sebagai URL paramters.

Karena Fetch dan FormData tidak sepenuhnya didukung, Anda mungkin ingin menyertakan polyfillnya masing-masing. [See section #8](#8-related-polyfills). 

> **Fun fact!** The `<html>`, `<head>`, and `body` tags are actually among a handful of optional tags, but since the [rules around how the browser parses a page are kinda complicated](https://www.w3.org/TR/2011/WD-html5-20110525/syntax.html#optional-tags), you'd probably not want to omit them on real websites.

## 6. Adding additional form data
Untuk mengambil data tambahan, Anda hanya perlu membuat kolom baru dengan judul yang sama persis dengan `nama` nilai dari input formulir Anda. Misalnya, jika Anda ingin menambahkan input nama depan dan belakang, Anda akan memberikan `nama` nilai seperti ini:

```html
<form name="submit-to-google-sheet">
  <input name="email" type="email" placeholder="Email" required>
  <input name="firstName" type="text" placeholder="First Name">
  <input name="lastName" type="text" placeholder="Last Name">
  <button type="submit">Send</button>
</form>
```

Kemudian tulis dengan sama persis pada header, case-sensitive `name`:

|   |     A     |   B   |     C     |     D    | ... |
|---|:---------:|:-----:|:---------:|:--------:|:---:|
| 1 | timestamp | email | firstName | lastName |     |

## 7. Related Polyfills
Beberapa hal ini belum sepenuhnya didukung oleh browser atau tidak berfungsi pada browser lama. Berikut adalah beberapa opsi polyfill untuk digunakan untuk dukungan yang lebih baik.

- [Promise Polyfill](https://github.com/taylorhakes/promise-polyfill)
- [Fetch Polyfill](https://github.com/github/fetch)
- [FormData Polyfill](https://github.com/jimmywarting/FormData)

Karena polyfill FormData diterbitkan sebagai paket Node dan perlu dikompilasi agar browser dapat bekerja dengannya, opsi yang baik untuk memasukkan ini adalah menggunakan [Browserify's CDN called wzrd.in](https://wzrd.in/). . Layanan ini mengkompilasi, mengecilkan, dan menyajikan versi terbaru dari skrip ini untuk kami.

Anda ingin memastikan ini dimuat sebelum skrip utama menangani pengiriman formulir. misalnya:

```html
<script src="https://wzrd.in/standalone/formdata-polyfill"></script>
<script src="https://wzrd.in/standalone/promise-polyfill@latest"></script>
<script src="https://wzrd.in/standalone/whatwg-fetch@latest"></script>

<script>
  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']
  ...
</script>
```

# Have feedback/requests/issues?
Please [create a new issue](https://github.com/brahmantiodiaz/brahmantiodiaz.github.io/tree/main/google-sheet-script/issues). PRs are definitely welcome, but please run your ideas by me before putting in a lot of work. Thanks!

#### Related/Inspirational Articles
- [Google Spreadsheets as a Database – INSERT with Apps Script form POST/GET submit method](https://mashe.hawksey.info/2011/10/google-spreadsheets-as-a-database-insert-with-apps-script-form-postget-submit-method/)
- [Step by step setup to send form data to Google Sheets](http://railsrescue.com/blog/2015-05-28-step-by-step-setup-to-send-form-data-to-google-sheets/)
- [Google Sheet Form Post](https://gist.github.com/willpatera/ee41ae374d3c9839c2d6)
- [How to Submit an HTML Form to Google Sheets…without Google Forms](https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175)
- [Send Email from a Static HTML Form using Google Apps Mail!](https://github.com/dwyl/html-form-send-email-via-google-script-without-server)

#### Documentation
- [Google Apps Script](https://developers.google.com/apps-script/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [HTML `<form>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [Document.forms](https://developer.mozilla.org/en-US/docs/Web/API/Document/forms)
- [Sending forms through JavaScript](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
