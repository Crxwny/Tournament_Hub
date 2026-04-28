export type Role = "admin" | "user";

export interface UserProfile {
  uid: string;
  email: string;
  username: string;
  role: Role;
  createdAt: number;
}

export type TournamentStatus = "open" | "in_progress" | "finished";

export interface Tournament {
  id: string;
  name: string;
  game: string;
  description: string;
  status: TournamentStatus;
  createdAt: number;
  createdBy: string;
  participatingTeamIds: string[];
}

export interface Team {
  id: string;
  name: string;
  captainUid: string;
  memberUids: string[];
  tournamentId: string | null;
  createdAt: number;
}

export type InviteStatus = "pending" | "accepted" | "declined";

export interface Invite {
  id: string;
  teamId: string;
  teamName: string;
  fromUid: string;
  fromUsername: string;
  toUid: string;
  status: InviteStatus;
  createdAt: number;
}
