export interface VoiceChannelState {
  id: string;
  name: string;
  link?: string;
}

export enum RemoteAction {
  REFRESH,
  DISCONNECT,
  INQUIRE_DAB,
  BEGIN_HEAT,
  CANCEL_HEAT,
  SKIP_START,
  READY,
  UNREADY,
}

export interface RemoteActionPayload {
  action: RemoteAction;
  data?: Record<string, any>;
}
