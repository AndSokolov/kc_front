import { Manifest, RemoteConfig } from '@angular-architects/module-federation';

export type MfeRemoteConfig = RemoteConfig & {
  remoteName: string;
  moduleName: string;
};

export type MfeManifest = Manifest<MfeRemoteConfig>;
