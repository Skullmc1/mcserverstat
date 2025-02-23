export interface MinecraftServerStatus {
  online: boolean;
  players: {
    online: number;
    max: number;
    list: string[];
  };
  version: string;
  latency: number;
}
