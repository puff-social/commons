export const UserFlags = {
  tester: 1 << 0,
  supporter: 1 << 1,
  admin: 1 << 2,
  suspended: 1 << 3,
};

export enum Op {
  Hello,
  Join,
  CreateGroup,
  Event,
  SendDeviceState,
  UpdateGroup,
  UpdateUser,
  LeaveGroup,
  InquireHeating,
  StartWithReady,
  DisconnectDevice,
  SendMessage,
  StopAwaiting,
  ResumeSession,
  SendReaction,
  DeleteGroup,
  TransferOwnership,
  KickFromGroup,
  AwayState,
  GroupStrain,
  LinkUser,
  SetMobile,
  WatchDevice,
  Heartbeat = 420,
}

export enum Event {
  JoinedGroup = "JOINED_GROUP",
  GroupCreate = "GROUP_CREATE",
  GroupDelete = "GROUP_DELETE",
  GroupUpdate = "GROUP_UPDATE",
  GroupUserJoin = "GROUP_USER_JOIN",
  GroupUserLeft = "GROUP_USER_LEFT",
  GroupUserUpdate = "GROUP_USER_UPDATE",
  GroupUserDeviceUpdate = "GROUP_USER_DEVICE_UPDATE",
  GroupJoinError = "GROUP_JOIN_ERROR",
  GroupHeatBegin = "GROUP_START_HEATING",
  GroupHeatInquiry = "GROUP_HEAT_INQUIRY",
  GroupUserReady = "GROUP_USER_READY",
  GroupUserUnready = "GROUP_USER_UNREADY",
  GroupActionError = "GROUP_ACTION_ERROR",
  GroupVisibilityChange = "GROUP_VISIBILITY_CHANGE",
  PublicGroupsUpdate = "PUBLIC_GROUPS_UPDATE",
  GroupCreateError = "GROUP_CREATE_ERROR",
  UserUpdateError = "USER_UPDATE_ERROR",
  GroupUserDeviceDisconnect = "GROUP_USER_DEVICE_DISCONNECT",
  GroupReaction = "GROUP_REACTION",
  GroupMessage = "GROUP_MESSAGE",
  GroupUserKicked = "GROUP_USER_KICKED",
  GroupUserAwayState = "GROUP_USER_AWAY_STATE",
  UserLinkSuccess = "USER_LINK_SUCCESS",
  UserLinkError = "USER_LINK_ERROR",
  RateLimited = "RATE_LIMITED",
  InternalError = "INTERNAL_ERROR",
  SessionResumed = "SESSION_RESUMED",
  SessionResumeError = "SESSION_RESUME_ERROR",
  InvalidSyntax = "INVALID_SYNTAX",
  WatchedDeviceUpdate = "WATCHED_DEVICE_UPDATE",
  RemoteAction = "REMOTE_ACTION",
  Deprecated = "OP_DEPRECATED",
}
