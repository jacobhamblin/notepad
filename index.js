// const encode = (str) => {
  // return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) { return String.fromCharCode('0x' + p1); }));
// };

// const decode = (str) => {
  // return decodeURIComponent(atob(str).split('').map(function(c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''));
// }

const checkForState = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const state = urlParams.get('state');
  if (state) {
    const innerText = atob(state);
    document.querySelector('.content').innerText = innerText;
  }
};

checkForState();

document.querySelector('button').addEventListener('click', () => {
  const hiddenInput = document.querySelector('input');
  const contentToSave = document.querySelector('.content').innerText;
  hiddenInput.value = `${window.location.href.split('?')[0]}?state=${btoa(contentToSave)}`;
  hiddenInput.select();
  hiddenInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
});
