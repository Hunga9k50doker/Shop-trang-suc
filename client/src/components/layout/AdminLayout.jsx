import React from "react";
import { Outlet } from "react-router-dom";
import { SideBarLeftAdmin } from "../common/SideBars";
export default function AdminLayout() {
  return (
    <div className="component">
      <div className="main main__admin">
        <div className="container-fluid">
          <div className="row">
            <div className="ps-0 col col-xxl-3 col-xl-3 col-md-6 col-sm-12">
              <SideBarLeftAdmin />
            </div>
            <div className="pe-0 col col-xxl-9 col-xl-9 col-md-6 col-sm-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
