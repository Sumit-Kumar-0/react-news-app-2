import React, { useRef, useState } from "react";
import { X } from "lucide-react";

export default function Sidebar() {
  const [isSidebar, setIsSidebar] = useState(false);

  const asideBack = useRef();

  const closeSidebar = () => {
    setIsSidebar(true);
  };

  const closeSidebar2 = (e) => {
    if (e.target === asideBack.current) closeSidebar();
  };
  return (
    <>
      {isSidebar && (
        <aside
          ref={asideBack}
          onClick={closeSidebar2}
          className={`sidebar-container ${isSidebar && "open-side-bar"}`}
        >
          <div className="aside-content">
            <div onClick={closeSidebar} className="aside-header">
              <X />
            </div>
            <div className="aside-body">aside</div>
          </div>
        </aside>
      )}
    </>
  );
}
