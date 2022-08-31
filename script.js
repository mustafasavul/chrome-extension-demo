async function fetchData() {
  const res = await fetch('https://api.adviceslip.com/advice');
  const slip = await res.json().then((res) => {
    document.getElementById('advice').innerHTML = res.slip.advice;
    document.getElementById('adviceID').innerHTML = res.slip.id;
  });
}
fetchData();

document.getElementById('mixIt').addEventListener('click', () => {
  fetchData();
});
