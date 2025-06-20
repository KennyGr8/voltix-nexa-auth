import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  password: z.string().optional(),
  name: z.string().optional(),
  emailVerified: z.coerce.date().optional(),
  role: z.enum(["USER", "PREMIUM", "PRO", "ADMIN"]),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeactivated: z.boolean(),
  deletedAt: z.coerce.date().optional(),
  status: z.enum(["active", "suspended", "banned"]),
  authLogs: z.any().optional(),
  sessions: z.any().optional(),
  mfa: z.any().optional(),
  activityLogs: z.any().optional(),
  accounts: z.any().optional(),
  tokens: z.any().optional(),
  subscription: z.any().optional(),
  auditLogs: z.any().optional(),
  organizationInvitesSent: z.any().optional(),
  organizationMemberships: z.any().optional(),
  organizationMembershipsInvited: z.any().optional(),
  billingEvents: z.any().optional(),
});
