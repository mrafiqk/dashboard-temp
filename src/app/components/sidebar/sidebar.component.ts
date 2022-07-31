import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/icons",
    title: "Sales",
    rtlTitle: "الرموز",
    icon: "icon-molecule-40",
    class: ""
  },
  {
    path: "/maps",
    title: "Stocks",
    rtlTitle: "خرائط",
    icon: "icon-delivery-fast",
    class: "" },
  {
    path: "/notifications",
    title: "Branch",
    rtlTitle: "إخطارات",
    icon: "icon-bank",
    class: ""
  },
  {
    path: "/user",
    title: "Employees",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  reload(path: any) {
    this.router.navigate([path]).then(data => {
      window.location.reload();
    })
  }
}
