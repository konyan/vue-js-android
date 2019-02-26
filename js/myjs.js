function sendDataToWeb(str) {
  localStorage.setItem("val", str);

  Android.toastShow(str);
}
