import React from "react";

import { BezierEdge, EdgeLabelRenderer, EdgeProps, getBezierPath, useReactFlow } from "reactflow";

export default function CustomEdge(props: EdgeProps) {
    const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = props;

    const { setEdges } = useReactFlow();

    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
    });

    return (
        <>
            <BezierEdge {...props} />
            <EdgeLabelRenderer>
                <div
                    aria-label="Delete Edge"
                    style={{
                        position: "absolute",
                        transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
                        pointerEvents: "all",
                        background: "transparent",
                        color: "red",
                        cursor: "pointer",
                    }}
                    onClick={() => setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id))}
                >
                    X
                </div>
            </EdgeLabelRenderer>
        </>
    );
}
