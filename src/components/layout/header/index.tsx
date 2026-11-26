import { useTranslation } from '../../../utils/services/useTranslation';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotifications } from "react-icons/io5";
import Profile from '../profile/index';
import profileImg from "../../../assets/images/profile-photo.jpg"
import { HeaderContainer, HeaderIcons } from './Style'

export default function Header() {
  const { t } = useTranslation();
  return (
    <HeaderContainer>
      <HeaderIcons>
        <RxHamburgerMenu />
        <IoNotifications />
      </HeaderIcons>

      <Profile
        src={profileImg}
        alt="User profile"
        name={t.profile.name}
        width={40}
        height={40}
      />
    </HeaderContainer>
  )
}
