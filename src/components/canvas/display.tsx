import React, { ReactElement } from "react";
import { useList } from "@refinedev/core";

import { Canvas } from "../../types/canvas";
import { Dot } from "../../types/dot";

type DisplayCanvasProps = {
    canvas: Canvas;
    children: (dots: Dot[] | undefined) => ReactElement;
};

export const DisplayCanvas: React.FC<DisplayCanvasProps> = ({
    canvas: { id },
    children,
}) => {
    const { data } = useList<Dot>({
        resource: "dots",
        liveMode: "auto",
        meta: {
            select: "*, users(id, full_name, avatar_url)",
        },
        filters: [
            {
                field: "canvas_id",
                operator: "eq",
                value: id,
            },
        ],
        sorters: [
            {
                field: "created_at",
                order: "desc",
            },
        ],
        pagination: {
            mode: "off",
        },
    });

    const dots = data?.data;

    return <>{children(dots)}</>;
};
