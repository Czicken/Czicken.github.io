function dateToAge(date) {
  const dob = new Date(date);
  const diff_ms = Date.now() - dob.getTime();
  const age_dt = new Date(diff_ms);
  const age = Math.abs(age_dt.getUTCFullYear() - 1970);

  return age;
}

window.addEventListener('load', () => {
  const ageInYears = dateToAge("2005-06-17");
  const age = document.getElementById("age");
  age.innerHTML = ageInYears
});


function sidebarshow() {
  let sssidebar = document.getElementById("ssidebar")
  console.log (sssidebar.style.opacity)
  if (sssidebar.style.opacity == "1") {
    sssidebar.style.opacity = "0";
  } else {
    sssidebar.style.opacity = "1";
  }

  
}
