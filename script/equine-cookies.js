console.log(visitData.get());
console.log(document.cookie);
ga(function (tracker) {
  var clientId = tracker.get("clientId");
  console.log(clientId);
});
