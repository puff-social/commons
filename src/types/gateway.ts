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
}

export interface RemoteActionPayload {
  action: RemoteAction;
  data?: Record<string, any>;
}
