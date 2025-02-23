declare module "minecraft-server-util" {
  export interface Player {
    name: string;
    id: string;
  }

  export interface Version {
    name: {
      raw: string;
      clean: string;
    };
    protocol: number;
  }

  export interface Players {
    online: number;
    max: number;
    sample?: Player[];
  }

  export interface StatusResponse {
    version: Version;
    players: Players;
    motd: {
      raw: string;
      clean: string;
      html: string;
    };
    favicon?: string;
    srvRecord?: {
      host: string;
      port: number;
    };
    roundTripLatency: number;
  }

  export interface StatusOptions {
    timeout?: number;
    enableSRV?: boolean;
  }

  export function status(
    host: string,
    port?: number,
    options?: StatusOptions,
  ): Promise<StatusResponse>;
}
