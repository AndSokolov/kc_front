import { Manifest, RemoteConfig } from '@angular-architects/module-federation';

export type MfeRemoteConfig = RemoteConfig & {
  remoteName: string;
  logoUrl: string;
  moduleName: string;
};

export type MfeManifest = Manifest<MfeRemoteConfig>;
