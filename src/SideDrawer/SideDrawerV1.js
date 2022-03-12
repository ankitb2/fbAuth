import { useState } from "react";
import "./SideDrawer.css"

const SideDrawerV1 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div className="side_drawer">
            {!isOpen && <div className="side_drawer_icon_open">
                <i onClick={() => setOpen(!isOpen)} id="drawerIcon" className="material-icons">menu</i>
            </div>}
            {isOpen && <>
                <div className="side_drawer_body">
                    <div className="side_drawer_icon_close">
                        <i onClick={() => setOpen(!isOpen)} id="drawerIcon" className="material-icons">close</i>
                    </div>
                    <div className="side_drawer_version">
                        <p>Version 1.0.0</p>
                    </div>
                </div>
            </>}

        </div>
    );
}

export default SideDrawerV1;