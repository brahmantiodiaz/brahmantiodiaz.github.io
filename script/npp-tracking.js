window.addEventListener("load", (event) => {
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
  let dataSouce;
  try {
    dataSouce = visitData.get();
  } catch (error) {
    dataSouce = { source: "direct", medium: "none" };
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
      getDataContact();
    }
  }

  //get data contact without submit
  async function getDataContact() {
    let urlSlug =
      "AKfycbwk-_KbPGs5ez73qSGa5DUAJmvR0cV_ienbZ7N80pLq-W70S-3xyGxKklD982ygONSA5w/exec";
    let dataIP = await getIp();
    let data = {
      event: "cflistener",
      name: name.value,
      email: email.value,
      company: company.value,
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
});
