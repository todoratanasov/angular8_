import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //с този декоратор си хващаме променливата във формата #f и я присвояваме на signupForm като разликата, е че по този начин не чакаме да се събмитне формата, а имаме достъп постоянно до value-то и
  @ViewChild("f", { static: false }) signupForm: NgForm;

  defaultQuestion = "pet";
  answer = "";
  submitted = false;
  //това е за радиобутоните
  genders = ['male', 'femalle'];

  user = {
    username: "",
    email: ""
  }

  //по този начин можем да налеен данни в инпут поле с натискането на бутон като трябва да сложим обаче при този вариант примерна стойност на всички полета, но това не е най-добрия подход затва го закоментирам
  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ""
    //   },
    //   secret: 'pet',
    //   gender: 'male',
    //   questionAnswer: ""

    // })
    //след като сме групирали инпутите във формата (само тогава) може да ползваме този подход, за да променим само един от инпутите
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
  //подавайки тук ngForm, който сме закачили на самата форма в html-a получаваме обект, чието value всъщност е обект с kvp на инпутите закоментирам го защото ще покажа друг различен начин за работа с формата, но този начин си е абсолютно валиден
  // onSubmit(form: NgForm) {
  //   console.log(form.value)
  // }
  //по този начин ще вземем стойността на полетата, но когато има групирани във форма ЗАДЪЛЖИТЕЛНО се взима от групата, а не само от формата
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.signupForm.reset();//по този начин ще ресетне формата
  }
}
