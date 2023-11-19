import { Component, OnDestroy, OnInit } from "@angular/core";
import { HeaderService } from "app/services/header.service";
import { Router } from "@angular/router";
import { MenuItem, MessageService } from "primeng/api";
import { Location } from "@angular/common";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"],
  providers: [MessageService],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public items: MenuItem[] = [];
  private subscriber$: Subject<null> = new Subject<null>();

  constructor(
    public headerService: HeaderService,
    private _router: Router,
    private location: Location,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.checkStorage();
    this.initMenu();
    this.headerService.message$
      .pipe(takeUntil(this.subscriber$))
      .subscribe((message) => {
        if (message === "success") {
          this.showSuccess();
        } else if (message === "error") {
          this.showError();
        }
        console.log(message);
      });
    if (this.location.path()) {
      const title =
        this.location.path().substring(1)[0].toUpperCase() +
        this.location.path().substring(1).slice(1);
      this.headerService.title$.next(title);
    }
  }

  ngOnDestroy(): void {
    this.subscriber$.next(null);
    this.subscriber$.complete();
  }

  public logout(): void {
    this.headerService.user$.next(null);
    this._router.navigate(["/auth"]);
    localStorage.clear();
  }

  private checkStorage(): void {
    const user = localStorage.getItem("userData");
    if (user) {
      let userData = JSON.parse(user);
      this.headerService.user$.next(userData);
      console.log(userData);
    }
  }

  private initMenu(): void {
    this.items = [
      {
        items: [
          {
            label: "Home",
            command: () => {
              this.navigateToPage("/home");
              this.headerService.title$.next("Home");
            },
          },
          {
            label: "Inventory",
            command: () => {
              this.navigateToPage("/inventory");
              this.headerService.title$.next("Inventory");
            },
          },
          {
            label: "Reports",
            command: () => {
              this.navigateToPage("/reports");
              this.headerService.title$.next("Reports");
            },
          },
          {
            label: "Billing",
            command: () => {
              this.navigateToPage("/billing");
              this.headerService.title$.next("Billing");
            },
          },
          {
            label: "Profile",
            command: () => {
              this.navigateToPage("/profile");
              this.headerService.title$.next("Profile");
            },
          },
        ],
      },
    ];
  }
  private navigateToPage(path: string) {
    this._router.navigate([path]);
  }

  private showSuccess(text: string = "Success") {
    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: text,
      life: 30000,
    });
  }

  private showError(text: string = "Error") {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: text,
      life: 100000,
    });
  }
}
