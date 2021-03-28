export default class Popover {
    constructor() {
        this.btn = document.getElementsByClassName('btn');
      /* this.formControl = document.querySelector(".form-control");
      this.btn = document.querySelector(".btn");
      this.checkingNumber = new CheckingNumber();
      this.cardList = document.querySelectorAll(".card");
      this.validation = new Validation();
      this.card = Array.from(this.cardList); */
    }

    init() {
        this.btn.addEventListener("click", () => {
            
        });
        /* <div class="popover">
      <title class="title-popover"></title>
      <p class="text-popover"></p>
    </div> */
        console.log(123);
    }
  
    /* eventAddInput() {
      this.formControl.addEventListener("input", () => {
        if (this.formControl.value === "") this.deletingMapClasses();
        this.mapSearch(
          this.checkingNumber.checking(Number(this.formControl.value))
        );
      });
    }
  
    eventAddClick() {
      this.btn.addEventListener("click", (event) => {
        event.preventDefault();
        const valid = this.validation.luhnAlgorithm(this.formControl.value);
        if (!valid) alert("Номер карты не верен");
      });
    }
  
    mapSearch(cardIndex) {
      const card = Array.from(this.cardList);
      card.splice(cardIndex, 1);
  
      if (cardIndex) {
        card.forEach((value) => {
          value.classList.add("mask");
        });
      }
    }
  
    deletingMapClasses() {
      this.card.forEach((value) => {
        value.classList.remove("mask");
      });
    } */
  }
  