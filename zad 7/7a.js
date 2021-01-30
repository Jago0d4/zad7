function sprawdzFormularz() {
    let numeric = document.formularz1.pole1.value;
    let x = parseInt(numeric);
      if (isNaN(x)) {
          alert("Podaj liczbe");
          return false;
      }
      return true;
  }
function sprawdzFormularz2() {
    let pole2w = document.formularz2.pole2.value;
    if (pole2w===""){
          alert("Pole nie moze zostac puste");
          return false;
      }
          return true;
  }
