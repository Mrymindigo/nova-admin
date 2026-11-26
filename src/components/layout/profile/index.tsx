
import type { ProfileProps } from '../../../types/profile'
import { ProfileContainer, ProfileInfo, ProfileImage, ProfileName, } from './ProfileStyle'

export default function Profile({ src, alt, name, height, width }: ProfileProps) {
    return (
        <ProfileContainer>
            <ProfileInfo>
                <ProfileImage
                    src={src}
                    alt={alt}
                    height={height}
                    width={width}
                />

                <ProfileName>{name}</ProfileName>
            </ProfileInfo>
        </ProfileContainer>
    )
}

