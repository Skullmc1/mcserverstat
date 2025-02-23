import React from "react";

interface Version {
  name: string;
  protocol: number;
}

interface StatusIndicatorProps {
  online: boolean;
  ping?: number;
  version?: Version;
}

export default function StatusIndicator({
  online,
  ping,
  version,
}: StatusIndicatorProps) {
  return (
    <div className="terminal-box">
      <h2 className="neon-text">Server Status</h2>
      <div className="status-content">
        <div className="status-item">
          <span className="status-label">Status:</span>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: online ? "var(--neon-green)" : "red",
                boxShadow: online
                  ? "0 0 10px var(--neon-green)"
                  : "0 0 10px red",
              }}
            />
            <span>{online ? "ONLINE" : "OFFLINE"}</span>
          </div>
        </div>
        {ping && (
          <div className="status-item">
            <span className="status-label">Ping:</span>
            <span>{ping}ms</span>
          </div>
        )}
        {version && (
          <div className="status-item">
            <span className="status-label">Version:</span>
            <span>{version.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}
