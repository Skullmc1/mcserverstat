import React from "react";

export default function ServerInfo() {
  return (
    <div className="glass-effect rounded-xl p-8 mt-8 mx-4">
      <h2 className="text-3xl font-bold mb-6 text-neon-green">
        How to Connect
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-darker-gray/50 rounded-lg border border-forest-green/30 hover:border-neon-green transition-all duration-300">
          <div className="text-mint-green text-xl mb-3">Step 1</div>
          <p className="text-forest-green">Install Minecraft 1.20.1</p>
        </div>
        <div className="p-6 bg-darker-gray/50 rounded-lg border border-forest-green/30 hover:border-neon-green transition-all duration-300">
          <div className="text-mint-green text-xl mb-3">Step 2</div>
          <p className="text-forest-green">Install Forge for 1.20.1</p>
        </div>
        <div className="p-6 bg-darker-gray/50 rounded-lg border border-forest-green/30 hover:border-neon-green transition-all duration-300">
          <div className="text-mint-green text-xl mb-3">Step 3</div>
          <p className="text-forest-green">
            Connect to sg4.leoxstudios.com:4025
          </p>
        </div>
      </div>
    </div>
  );
}
