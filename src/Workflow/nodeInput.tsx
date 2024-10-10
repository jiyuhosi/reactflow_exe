import React from "react";

import { Handle, NodeProps, Position, useReactFlow } from "reactflow";
import CustomHandle from "./CustomHandle";

export default function nodeInput({ data, id }: NodeProps) {
    const { setNodes } = useReactFlow();
    return (
        <div
            style={{
                border: "2px solid #5e5eff",
                alignItems: "center",
                backgroundColor: "white",
                padding: "8px",
                paddingBottom: "8px",
                paddingLeft: "12px",
                gap: "8px",
                width: "140px",
            }}
        >
            <div style={{ flexGrow: 1 }}>
                <span style={{ fontSize: "small", marginTop: "-2px" }}>{data.label}</span>
            </div>
            <button
                aria-label="Delete node"
                style={{
                    pointerEvents: "all",
                    color: "red",
                    backgroundColor: "transparent",
                    fontSize: "small",
                }}
                onClick={() => setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))}
            >
                X
            </button>
            <CustomHandle type="source" position={Position.Right} />
        </div>
    );
}
