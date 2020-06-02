/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//import Register from "components/auth/Register";
import Login from "components/Auth/Login";
import Schools from "views/admin/schools/index.school";

var routes = [
  {
    path: "/Schools",
    name: "Colegios",
    icon: "fas fa-school text-success",
    component: Schools,
    layout: "/admin",
    rol: "admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    rol: "public",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    //    component: Register,
    layout: "/auth",
    rol: "public",
  },
];
export default routes;
