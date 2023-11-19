import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IUser } from "app/interfaces/user.interface";
import { HeaderService } from "app/services/header.service";
import { UserApiService } from "app/services/user-api.service";
import { takeUntil, Subject } from "rxjs";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  public myForm: FormGroup;
  private subscriber$: Subject<null> = new Subject<null>();
  private readonly isURL: string =
    "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";

  constructor(
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
      userEmail: new FormControl({ value: "", disabled: true }),
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
    this._headerService.user$
      .pipe(takeUntil(this.subscriber$))
      .subscribe((user) => {
        if (user) {
          this.setFormValues(user);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriber$.next(null);
    this.subscriber$.complete();
  }

  public save() {
    const user: IUser = {
      firstname: this.myForm.controls["userName"].value,
      lastname: this.myForm.controls["userLastName"].value,
      email: this.myForm.controls["userEmail"].value,
      phoneNumber: this.myForm.controls["userPhone"].value,
      webSiteURL: this.myForm.controls["url"].value,
      role: this._headerService.user$.getValue()?.role ?? null,
    };
    this._userApiService
      .changeUser(user)
      .pipe(takeUntil(this.subscriber$))
      .subscribe(
        () => {
          this._headerService.message$.next("success");
        },
        () => {
          this._headerService.message$.next("error");
        }
      );
  }

  private setFormValues(user: IUser): void {
    this.myForm.controls["userName"].setValue(user.firstname);
    this.myForm.controls["userLastName"].setValue(user.lastname);
    this.myForm.controls["userEmail"].setValue(user.email);
    this.myForm.controls["userPhone"].setValue(user.phoneNumber);
    this.myForm.controls["url"].setValue(user.webSiteURL);
  }
}
