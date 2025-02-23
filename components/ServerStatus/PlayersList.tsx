"use client";

interface PlayersListProps {
  players: string[];
  isLoading: boolean;
}

export default function PlayersList({ players, isLoading }: PlayersListProps) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-100">
        Online Players
      </h2>
      <div className="bg-dark-200 rounded-lg p-4">
        {isLoading ? (
          <div className="h-8 bg-dark-100 animate-pulse rounded" />
        ) : players.length > 0 ? (
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {players.map((player) => (
              <li key={player} className="text-gray-400">
                {player}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">No players online</p>
        )}
      </div>
    </div>
  );
}
