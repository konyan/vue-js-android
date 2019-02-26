export function sendDataToWeb(str) {
  Android.toastShow(str);
  localStorage.setItem("val", str);
}
