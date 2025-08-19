// src/global.d.ts
export {};

declare global {
    interface Window {
        RUNTIME_CONFIG: {
            DATA_BANK_URL: string;
            GIS_URL: string;
            SELF_SERVICE_URL: string;
        };
    }
}
