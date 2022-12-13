window.addEventListener("load", (event) => {
  let params = getParams();
  const contactUsform = document.getElementById("contactUsForm");
  let date = new Date();
  const tokenIpInfo = "2fcc5a1ed7a755";
  let options = { year: "numeric", month: "numeric", day: "numeric" };
  const contactName = document.getElementById("fullName");
  const companyOrPosition = document.getElementById("company");
  const contactEmail = document.getElementById("email");
  const formDigitalTrans = document.getElementById("formDigitalTransformation");
  const formDataAnalytics = document.getElementById("formDataAnalytics");
  const formBlockchain = document.getElementById("formBlockchain");
  const formSAP = document.getElementById("formSAP");
  const requestDemoForm = document.getElementById("requestDemoForm");
  let dataSouce;
  try {
    dataSouce = visitData.get();
  } catch (error) {
    dataSouce = { source: "direct", medium: "none" };
  }
  let isAdmin = getCookie("name");
  let tmpID = getCookie("_ga_6QBT1DNHZ6").split(".");
  let device = FRUBIL.device.class + " " + FRUBIL.client.os;
  let fullDeviceName =
    FRUBIL.device.brand +
    " " +
    FRUBIL.device.marketname +
    " using " +
    FRUBIL.client.name;
  if (!FRUBIL.device.marketname) {
    fullDeviceName = FRUBIL.client.os + " using " + FRUBIL.client.name;
  }

  if (isAdmin) {
    tmpID = ["admin", "admin", isAdmin];
    console.log(isAdmin);
  }

  userActivity();

  //getIP
  async function getIp() {
    const result = await axios
      .get("https://ipinfo.io/json?token=" + tokenIpInfo)
      .then((respon) => {
        return respon.data;
      })
      .catch((error) => {
        return {
          error: error,
        };
      });
    return result;
  }

  //get a text copy
  function getText() {
    let text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
    }
    return text;
  }

  //trigger for copy event
  function triggerEventCopy() {
    let eventTrigger = "textCopied";
    let text = getText();
    if (text == "contact@equine.co.id") {
      eventTrigger = "emailCopied";
    } else if (text == "+6221 2788 3570" || text == "(+62)2127883570") {
      eventTrigger = "telpCopied";
    }
    return eventTrigger;
  }

  //getDataCopy
  async function getDataCopy() {
    let text = getText();
    let event = triggerEventCopy();
    let urlSlug =
      "AKfycbwAbKRi1BGoJQ8ZU0B-z1YIY0nW5-al4ZK_IEyWQUB6tdPGgtnYPvqUGP2h--jW4gg/exec";
    const scriptURL = "https://script.google.com/macros/s/" + urlSlug;
    let dataIP = await getIp();
    let formData = new FormData();
    formData.append("event", event);
    formData.append("text", text);
    formData.append("date ", date.toLocaleDateString("en-US", options));
    formData.append("ip", dataIP.ip);
    formData.append("Country", dataIP.country);
    formData.append("City", dataIP.city);
    formData.append("page title", document.title);
    formData.append("device", device);
    formData.append("full device name", fullDeviceName);
    formData.append("Provider", dataIP.org);
    formData.append("source", dataSouce.source);
    formData.append("medium", dataSouce.medium);
    formData.append("ga_session_id", tmpID[2]);
    await sendToSheet(scriptURL, formData);
  }
  // do something when copy
  document.addEventListener("copy", function (e) {
    getDataCopy();
  });

  //{{ CONTACT US FORM }}
  //check condition when input change
  contactUsform
    ? contactUsform.addEventListener("change", function () {
        checkInput();
      })
    : null;

  //check input condition
  function checkInput() {
    if (
      (contactName.value && contactEmail.value) ||
      (contactName.value && companyOrPosition.value)
    ) {
      getDataContact();
    }
  }

  //send to google sheet
  async function sendToSheet(scriptURL, formData) {
    await fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => console.log("success", response))
      .catch((error) => console.log("error", error.message));
  }

  //get data contact without submit
  async function getDataContact() {
    let urlSlug =
      "AKfycbzkBnlvdXMPhcXEX0_XS8TnCSuhwLWrVNUhj5VzL9jHFpaacV30J-eKu5q-K2Z-XRGE/exec";
    let dataIP = await getIp();
    let data = {
      event: "cflistener",
      name: contactName.value,
      email: contactEmail.value,
      companyOrPosition: companyOrPosition.value,
      date: date.toLocaleDateString("en-US", options),
      ip: dataIP.ip,
      country: dataIP.country,
      city: dataIP.city,
      pageTitle: document.title,
      device: device,
      fullDeviceName: fullDeviceName,
      ga_session_id: tmpID[2],
      source: dataSouce.source,
      medium: dataSouce.medium,
      Provider: dataIP.org,
    };
    //test
    const scriptURL = "https://script.google.com/macros/s/" + urlSlug;
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    await sendToSheet(scriptURL, formData);
  }

  //get data when submit data
  async function submitData() {
    let urlSlug =
      "AKfycbxlUheTskqfWEz-sueKKmGcLeSZoHOeffxn12H2dQZKRPiXo5v5MBXwY3vkEJBK975P/exec";
    let dataIP = await getIp();
    const fullData = {
      name: contactUsform.elements["text-name"].value,
      companyOrPosition: contactUsform.elements["company"].value,
      title: contactUsform.elements["title"].value,
      email: contactUsform.elements["email"].value,
      reason: contactUsform.elements["menu-774"].value,
      areaOfInterest: contactUsform.elements["menu-363"].value,
      subject: contactUsform.elements["subject"].value,
      message: contactUsform.elements["message"].value,
    };
    let data = {
      event: "click_button_submit_contact",
      pageTitle: document.title,
      email: contactUsform.elements["email"].value,
      date: date.toLocaleDateString("en-US", options),
      ip: dataIP.ip,
      country: dataIP.country,
      city: dataIP.city,
      device: device,
      fullDeviceName: fullDeviceName,
      fullData: JSON.stringify(fullData),
      source: dataSouce.source,
      medium: dataSouce.medium,
      Provider: dataIP.org,
      ga_session_id: tmpID[2],
    };
    console.log(data);
    //test
    const scriptURL = "https://script.google.com/macros/s/" + urlSlug;
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    await sendToSheet(scriptURL, formData);
  }

  //onsubmit function
  contactUsform
    ? contactUsform.addEventListener("submit", function (evt) {
        evt.preventDefault();
        submitData();
      })
    : null;

  //{{ END OF CONTACT US FORM }}

  // {{ ALL DOWNLOAD FORM }}
  //{{ ALL EVENT LISTENER DOWNLOAD }}
  //download form tracking eventlister
  formDigitalTrans
    ? formDigitalTrans.addEventListener("change", function () {
        getDataDownload(getDataFormDownload("formDigitalTransformation"));
      })
    : null;
  formDataAnalytics
    ? formDataAnalytics.addEventListener("change", function () {
        getDataDownload(getDataFormDownload("formDataAnalytics"));
      })
    : null;
  formBlockchain
    ? formBlockchain.addEventListener("change", function () {
        getDataDownload(getDataFormDownload("formBlockchain"));
      })
    : null;
  formSAP
    ? formSAP.addEventListener("change", function () {
        getDataDownload(getDataFormDownload("formSAP"));
      })
    : null;

  //submit
  formDigitalTrans
    ? formDigitalTrans.addEventListener("submit", function (evt) {
        evt.preventDefault();
        submitDataDownload(getDataFormDownload("formDigitalTransformation"));
      })
    : null;

  formDataAnalytics
    ? formDataAnalytics.addEventListener("submit", function (evt) {
        evt.preventDefault();
        submitDataDownload(getDataFormDownload("formDataAnalytics"));
      })
    : null;

  formBlockchain
    ? formBlockchain.addEventListener("submit", function (evt) {
        evt.preventDefault();
        submitDataDownload(getDataFormDownload("formBlockchain"));
      })
    : null;

  formSAP
    ? formSAP.addEventListener("submit", function (evt) {
        evt.preventDefault();
        submitDataDownload(getDataFormDownload("formSAP"));
      })
    : null;

  function getDataFormDownload(id) {
    let dataUser = {
      formName: id,
    };
    const formData = new FormData(document.getElementById(id));
    for (var pair of formData.entries()) {
      if (
        pair[0] == "fullName" ||
        pair[0] == "companyName" ||
        pair[0] == "email" ||
        pair[0] == "phone" ||
        pair[0] == "message"
      ) {
        dataUser[pair[0]] = pair[1];
      }
    }

    if (
      (dataUser.fullName && dataUser.email) ||
      (dataUser.fullName && dataUser.companyName) ||
      (dataUser.fullName && dataUser.phone)
    ) {
      return dataUser;
    }
    return null;
  }

  //get data download without submit
  async function getDataDownload(dataUser) {
    let urlSlug =
      "AKfycbzkBnlvdXMPhcXEX0_XS8TnCSuhwLWrVNUhj5VzL9jHFpaacV30J-eKu5q-K2Z-XRGE/exec";
    let dataIP = await getIp();
    if (dataUser) {
      let data = {
        event: "cflistener",
        name: dataUser.fullName,
        email: dataUser.email,
        companyOrPosition: dataUser.companyName ? dataUser.companyName : "",
        phone: dataUser.phone,
        date: date.toLocaleDateString("en-US", options),
        ip: dataIP.ip,
        country: dataIP.country,
        city: dataIP.city,
        pageTitle: document.title + " | " + dataUser.formName,
        device: device,
        fullDeviceName: fullDeviceName,
        source: dataSouce.source,
        medium: dataSouce.medium,
        Provider: dataIP.org,
        ga_session_id: tmpID[2],
      };
      // //test
      const scriptURL = "https://script.google.com/macros/s/" + urlSlug;
      let formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }
      await sendToSheet(scriptURL, formData);
    }
  }

  //submitdownloadfunction
  //get data when submit data
  async function submitDataDownload(dataUser) {
    let urlSlug =
      "AKfycbxlUheTskqfWEz-sueKKmGcLeSZoHOeffxn12H2dQZKRPiXo5v5MBXwY3vkEJBK975P/exec";
    let dataIP = await getIp();
    if (dataUser) {
      const fullData = {
        name: dataUser.fullName,
        company: dataUser.companyName ? dataUser.companyName : "",
        email: dataUser.email,
        phone: dataUser.phone,
        message: dataUser.message ? dataUser.message : "",
      };
      let data = {
        event: "click_button_download",
        pageTitle: document.title + " | " + dataUser.formName,
        email: dataUser.email,
        date: date.toLocaleDateString("en-US", options),
        ip: dataIP.ip,
        country: dataIP.country,
        city: dataIP.city,
        device: device,
        fullDeviceName: fullDeviceName,
        fullData: JSON.stringify(fullData),
        source: dataSouce.source,
        medium: dataSouce.medium,
        Provider: dataIP.org,
        ga_session_id: tmpID[2],
      };
      //test
      const scriptURL = "https://script.google.com/macros/s/" + urlSlug;
      let formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }
      await sendToSheet(scriptURL, formData);
    }
  }

  //   {{ end of download form }}

  //   {{ request demo form }}
  requestDemoForm.addEventListener("change", function () {
    getDataDownload(getDataFormDownload("requestDemoForm"));
  });

  requestDemoForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    submitDataDownload(getDataFormDownload("requestDemoForm"));
  });

  //userActivityflow
  async function userActivity() {
    let urlSlug =
      "AKfycbxoiVlNqKrl9Cg0j0DSEBXs4zDwkUeTacFuCi6IZeIof_t1QIewk7yFOkCpEkk-vXQdSA/exec";
    let dataIP = await getIp();
    let data = {
      event: "page_view",
      pageTitle: document.title,
      ga_session_id: tmpID[2],
      date: date.toLocaleDateString("en-US", options),
      device: device,
      fullDeviceName: fullDeviceName,
      source: dataSouce.source,
      medium: dataSouce.medium,
      ip: dataIP.ip,
    };
    const scriptURL = "https://script.google.com/macros/s/" + urlSlug;
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    await sendToSheet(scriptURL, formData);
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //function to getparams
  function getParams(url = window.location) {
    let params = {};
    new URL(url).searchParams.forEach(function (val, key) {
      if (params[key] !== undefined) {
        if (!Array.isArray(params[key])) {
          params[key] = [params[key]];
        }
        params[key].push(val);
      } else {
        params[key] = val;
      }
    });
    return params;
  }
});
