import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IUser, Role } from "app/interfaces/user.interface";
import { HeaderService } from "app/services/header.service";
import { UserApiService } from "app/services/user-api.service";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-app-page",
  templateUrl: "./app-page.component.html",
  styleUrls: ["./app-page.component.less"],
})
export class AppPageComponent implements OnInit, OnDestroy {
  public myForm: FormGroup;
  private subscriber$: Subject<null> = new Subject<null>();
  private readonly isURL: string =
    "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";

  constructor(
    private _router: Router,
    private _headerService: HeaderService,
    private _userApiService: UserApiService
  ) {
    this.myForm = new FormGroup({
      userName: new FormControl("", [
        Validators.required,
        Validators.maxLength(255),
      ]),
      userLastName: new FormControl("", [
        Validators.required,
        Validators.maxLength(255),
      ]),
      userEmail: new FormControl("", [Validators.required, Validators.email]),
      userPhone: new FormControl("+7", [
        Validators.required,
        Validators.pattern("[- +()0-9]+"),
        Validators.maxLength(12),
        Validators.minLength(12),
      ]),
      url: new FormControl("", [Validators.pattern(this.isURL)]),
    });
  }

  ngOnInit(): void {
    this._headerService.title$.next("Sign up");
  }

  ngOnDestroy(): void {
    this.subscriber$.next(null);
    this.subscriber$.complete();
  }

  public registration(): void {
    const user: IUser = {
      firstname: this.myForm.controls["userName"].value,
      lastname: this.myForm.controls["userLastName"].value,
      email: this.myForm.controls["userEmail"].value,
      phoneNumber: this.myForm.controls["userPhone"].value,
      webSiteURL: this.myForm.controls["url"].value,
      role: Role.user,
    };
    this._userApiService
      .addUser(user)
      .pipe(takeUntil(this.subscriber$))
      .subscribe(
        () => {
          this._headerService.message$.next("success");
          this._router.navigate(["/auth"]);
        },
        () => {
          this._headerService.message$.next("error");
        }
      );
  }

  public navigateToLogIn(): void {
    this._router.navigate(["/auth"]);
  }
}
