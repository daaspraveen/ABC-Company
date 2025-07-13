import { Link } from "react-router-dom";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'

import "./style.css";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <CDropdown>
            <CDropdownToggle>Services</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">AI Marketing</CDropdownItem>
              <CDropdownItem href="#">Revenue Management</CDropdownItem>
              <CDropdownItem href="#">More ...</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
