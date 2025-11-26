export interface JwtPayloadCustom {
  user_id: string;
  roles: { name: string }[];
  iat?: number;
  exp?: number;
}