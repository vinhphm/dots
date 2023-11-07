import { Dot } from "../types/dot";

export const getUniqueContributorsAvatarURL = (dots: Dot[] | undefined) => {
    const contributorsAvatar = dots?.map(
        (dot: Dot) => dot.users?.avatar_url,
    );
    const contributorsAvatarSet = new Set(contributorsAvatar);

    return [...contributorsAvatarSet];
};
