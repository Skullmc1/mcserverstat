import { NextResponse } from "next/server";
import * as MinecraftServerUtil from "minecraft-server-util";

export async function GET() {
  try {
    const options: MinecraftServerUtil.StatusOptions = {
      timeout: 5000,
      enableSRV: true,
    };

    const result = await MinecraftServerUtil.status(
      process.env.MINECRAFT_SERVER_IP!,
      parseInt(process.env.MINECRAFT_SERVER_PORT!),
      options,
    );

    console.log("Server response:", result); // For debugging

    return NextResponse.json({
      online: true,
      players: {
        online: result.players.online,
        max: result.players.max,
        list: result.players.sample?.map((player) => player.name) || [],
      },
      version: result.version.name.raw,
      latency: result.roundTripLatency,
    });
  } catch (error) {
    console.error("Server status error:", error); // For debugging
    return NextResponse.json({
      online: false,
      players: {
        online: 0,
        max: 0,
        list: [],
      },
      version: "Unknown",
      latency: 0,
    });
  }
}
