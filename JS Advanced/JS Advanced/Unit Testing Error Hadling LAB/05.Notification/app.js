function notify(message) {
  const divRef = document.getElementById("notification");
  const buttonRef = document.getElementsByTagName("button")[0];



  divRef.textContent = message;
  divRef.style.display = "block"

  divRef.addEventListener("click", hideInfo);


  function hideInfo(e) {
    e.currentTarget.style.display = "none";
  }


}