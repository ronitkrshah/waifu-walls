export type RegisterUserModel = {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  registration: string;
  status: boolean;
  labels: any[];
  passwordUpdate: string;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  mfa: boolean;
  prefs: Prefs;
  targets: Target[];
  accessedAt: string;
};

type Prefs = {};

type Target = {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  userId: string;
  providerId?: string;
  providerType: string;
  identifier: string;
};
