import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
  styleUrls: ["./error-page.component.css"]
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //по този начин пропъртито data от рауткомпонента съдържа key message и си го взимаме, присвояваме го на променливата тук и си го използваме
    this.errorMessage = this.route.snapshot.data["message"];
    //или с this.route.data.subscribe() да си го взимам с обзървабъл, ако ще се променя
  }
}
