window.addEventListener("load", (event) => {
  let params = getParams();
  if (params) {
    console.log(params);
    for (let key in params) {
      setCookie(key, params[key], 1);
    }
  }
  const contactUsform = document.getElementById("contactUsForm");
  let date = new Date();
  const tokenIpInfo = "2fcc5a1ed7a755";
  let options = { year: "numeric", month: "numeric", day: "numeric" };
  const name = document.getElementById("name");
  const company = document.getElementById("company");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  let tmpID = getCookie("_ga_ESS2P9Y6F1").split(".");
  let dataSouce;
  try {
    dataSouce = visitData.get();
  } catch (error) {
    dataSouce = { source: "direct", medium: "none" };
  }
  if (!getCookie("utm_source") || dataSouce.source == "google") {
    setCookie("utm_source", dataSouce.source, 1);
    setCookie("utm_medium", dataSouce.medium, 1);
    setCookie("utm_campaign", "default", 1);
    setCookie("utm_content", "default", 1);
    setCookie("utm_id", "default", 1);
    setCookie("utm_term", "default", 1);
    if (dataSouce.source == "google") {
      setCookie("utm_campaign", "seo", 1);
      setCookie("utm_content", document.title, 1);
    }
  }
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

  //getparams
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

  //setcookie function
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  //getcookie funtion
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
  //send to google sheet
  async function sendToSheet(scriptURL, formData) {
    await fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => console.log("success", response))
      .catch((error) => console.log("error", error.message));
  }

  contactUsform
    ? contactUsform.addEventListener("change", function () {
        checkInput();
      })
    : null;

  //check input condition
  function checkInput() {
    if (
      (name.value && email.value) ||
      (name.value && company.value) ||
      (name.value && phone.value)
    ) {
      getDataContact("cflistener");
    }
  }

  //onsubmit function
  contactUsform
    ? contactUsform.addEventListener("submit", function (evt) {
        evt.preventDefault();
        getDataContact("submit-data");
      })
    : null;

  //get data contact without submit
  async function getDataContact(trigger) {
    let urlSlug =
      "AKfycbwk-_KbPGs5ez73qSGa5DUAJmvR0cV_ienbZ7N80pLq-W70S-3xyGxKklD982ygONSA5w/exec";
    let dataIP = await getIp();
    const submitData = {
      name: name.value,
      company: company.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    };
    let data = {
      event: trigger,
      name: name.value,
      email: email.value,
      company: company.value,
      phone: '"' + phone.value + '"',
      date: date.toLocaleDateString("en-US", options),
      ip: dataIP.ip,
      country: dataIP.country,
      city: dataIP.city,
      pageTitle: document.title,
      device: device,
      fullDeviceName: fullDeviceName,
      ga_session_id: tmpID[2],
      fullData: JSON.stringify(submitData),
      utm_campaign: getCookie("utm_campaign")
        ? getCookie("utm_campaign")
        : "default",
      utm_content: getCookie("utm_content")
        ? getCookie("utm_content")
        : "default",
      utm_id: getCookie("utm_id") ? getCookie("utm_id") : "default",
      utm_medium: getCookie("utm_medium")
        ? getCookie("utm_medium")
        : dataSouce.medium,
      utm_source: getCookie("utm_source")
        ? getCookie("utm_source")
        : dataSouce.source,
      utm_term: getCookie("utm_term") ? getCookie("utm_term") : "default",
      source: dataSouce.source,
      medium: dataSouce.medium,
    };
    //test
    const scriptURL = "https://script.google.com/macros/s/" + urlSlug;
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    await sendToSheet(scriptURL, formData);
  }
});
