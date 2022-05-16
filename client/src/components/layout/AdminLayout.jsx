import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBarLeftAdmin } from "../common/SideBars";
import Modal from "../common/Modal";
export default function AdminLayout() {
  const [menu, setMenu] = useState(true);
  const screenWitdh = window.screen.width;
  return (
    <div className="component">
      <div className="main main__admin">
        <div className="container-fluid">
          <div className="row">
            <div className="ps-0 col col-xxl-3 col-xl-3 col-lg-3 col-md-0 col-sm-0">
              {screenWitdh > 768 ? (
                <SideBarLeftAdmin />
              ) : (
                menu === true && <SideBarLeftAdmin />
              )}
            </div>
            <div className="pe-0 col col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
