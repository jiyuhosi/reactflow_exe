import React from "react";

import { Handle, NodeProps, Position, useReactFlow } from "reactflow";
import CustomHandle from "./CustomHandle";

export default function nodeLLM({ data, id }: NodeProps) {
    const { setNodes } = useReactFlow();
    return (
        <div
            style={{
                borderRadius: "24px",
                border: "2px solid #5e5eff",
                alignItems: "center",
                backgroundColor: "white",
                padding: "4px",
                paddingBottom: "4px",
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
            <CustomHandle type="target" position={Position.Left} />
            <CustomHandle type="source" position={Position.Right} />
        </div>
    );
}
