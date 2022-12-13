// function getParams(url = window.location) {
//   let params = {};
//   new URL(url).searchParams.forEach(function (val, key) {
//     if (params[key] !== undefined) {
//       if (!Array.isArray(params[key])) {
//         params[key] = [params[key]];
//       }
//       params[key].push(val);
//     } else {
//       params[key] = val;
//     }
//   });
//   return params;
// }
// let params = getParams();
// console.log(params);

// if (params) {
//   console.log(params);
//   for (let key in params) {
//     setCookie(key, params[key], 1);
//   }
// }

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
