/// <reference path="../.astro/types.d.ts" />

declare module "virtual:decap-cms-config" {
    export const configYaml: string;
    export const decapCMSSrcUrl: string | undefined;
    export const decapCMSVersion: string;
}