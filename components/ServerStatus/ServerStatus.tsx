"use client";

import { motion } from "framer-motion";
import { Users, Server, Signal, RefreshCw } from "lucide-react";
import { useServerStatus } from "@/hooks/useServerStatus";
import StatusCard from "./StatusCard";
import PlayersList from "./PlayersList";
import { MinecraftServerStatus } from "@/types/minecraft";

export default function ServerStatus() {
  const { data, isLoading, isError, error, refetch, isFetching } =
    useServerStatus();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="max-w-2xl mx-auto mt-16 p-6"
    >
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.h1 className="font-heading text-4xl font-bold bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 bg-[200%_auto] animate-shimmer bg-clip-text text-transparent">
            Server Status
          </motion.h1>
          <motion.button
            onClick={() => refetch()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full hover:bg-dark-100 transition-colors relative"
            disabled={isFetching}
          >
            <RefreshCw
              className={`w-5 h-5 text-brand-400 ${isFetching ? "animate-spin" : ""}`}
            />
            {isFetching && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-500 rounded-full" />
            )}
          </motion.button>
        </div>
        <p className="font-mono text-gray-400">
          {process.env.NEXT_PUBLIC_MINECRAFT_SERVER_IP}:
          {process.env.NEXT_PUBLIC_MINECRAFT_SERVER_PORT}
        </p>
      </div>

      <div className="bg-dark-100 rounded-lg shadow-lg p-6 border border-dark-200">
        {isLoading ? (
          <div className="space-y-4">
            <div className="h-24 bg-dark-200 animate-pulse rounded" />
            <div className="h-24 bg-dark-200 animate-pulse rounded" />
          </div>
        ) : isError ? (
          <div className="text-center text-red-400 p-4">
            Failed to fetch server status. Please try again.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatusCard
                icon={<Signal className="w-6 h-6" />}
                title="Status"
                value={data?.online ? "Online" : "Offline"}
                valueColor={data?.online ? "text-green-400" : "text-red-400"}
                isLoading={isFetching}
              />
              <StatusCard
                icon={<Users className="w-6 h-6" />}
                title="Players"
                value={`${data?.players?.online || 0}/${data?.players?.max || 0}`}
                isLoading={isFetching}
              />
              <StatusCard
                icon={<Server className="w-6 h-6" />}
                title="Version"
                value={"1.20.1"}
                isLoading={isFetching}
              />
            </div>

            <PlayersList
              players={data?.players?.list || []}
              isLoading={isFetching}
            />
          </>
        )}
      </div>
    </motion.div>
  );
}
