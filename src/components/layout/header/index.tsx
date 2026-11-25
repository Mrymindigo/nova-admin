import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotifications } from "react-icons/io5";
import AdminProfile from "../profile";
import {HeaderContainer , HeaderIcons} from './Style'

export default function Header() {
  return (
   <HeaderContainer>
    <HeaderIcons>
 <RxHamburgerMenu />
      <IoNotifications />
    </HeaderIcons>
     
    

    <AdminProfile />
   </HeaderContainer>
  )
}
