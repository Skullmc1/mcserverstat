import React from "react";

interface PlayerListProps {
  players: string[];
  maxPlayers: number;
}

export default function PlayerList({ players, maxPlayers }: PlayerListProps) {
  return (
    <div className="terminal-box">
      <h2>
        Players Online ({players.length}/{maxPlayers})
      </h2>
      <div style={{ display: "grid", gap: "0.5rem" }}>
        {players.length > 0 ? (
          players.map((player) => <div key={player}>&gt; {player}</div>)
        ) : (
          <div>No players online</div>
        )}
      </div>
    </div>
  );
}
