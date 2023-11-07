import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import { getUniqueContributorsAvatarURL } from "../../utility";
import { Dot } from "../../types";

type ContributorsProps = {
    dots: Dot[];
};

export const Contributors: React.FC<ContributorsProps> = ({ dots }) => {
    const avatarURls = getUniqueContributorsAvatarURL(dots);

    if (avatarURls.length === 0) {
        return null;
    }

    return (
        <Avatar.Group maxCount={2}>
            {avatarURls.map((avatar_url) => (
                <Avatar
                    key={avatar_url}
                    icon={<UserOutlined />}
                    src={avatar_url}
                />
            ))}
        </Avatar.Group>
    );
};
