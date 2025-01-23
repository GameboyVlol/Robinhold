import React from "react";

export const Dashboard = React.lazy(() => import("./Dashboard"));
export const NotFound = React.lazy(() => import("./NotFound"));
export const Portfolio = React.lazy(() => import("./Portfolio"));
export const AuthForm = React.lazy(()=>import ('./AuthForm'));