import { Dot } from "../types/dot";

export const getUserQueryIds = (dots: Dot[] | undefined): string[] => {
    const ids: string[] | undefined = dots?.map(
        (dot: Dot) => dot.user_id,
    );
    const idSet = new Set(ids);

    return [...idSet];
};
