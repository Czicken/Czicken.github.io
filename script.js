function dateToAge(date) {
  const dob = new Date(date);
  const diff_ms = Date.now() - dob.getTime();
  const age_dt = new Date(diff_ms);
  const age = Math.abs(age_dt.getUTCFullYear() - 1970);

  return age;
}


function yearsSinceYear(year) {
  const currentYear = new Date().getFullYear();
  const diff = currentYear - year;
  return diff;
}


window.addEventListener('load', () => {
  const ageInYears = dateToAge("2005-06-17");
  const age = document.getElementById("age");
  age.innerHTML = ageInYears
  
  const yearsSince = yearsSinceYear(2017);
  const years = document.getElementById('preferedYears');
  years.innerHTML = yearsSince
});


function sidebarshow() {
  let sssidebar = document.getElementById("ssidebar")
  sssidebar.style.width = sssidebar.style.width === "20vh" ? "0" : "20vh";
};