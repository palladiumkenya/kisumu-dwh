// src/lib/config.ts
type RuntimeConfig = {
    DATA_BANK_URL: string;
    GIS_URL: string;
    SELF_SERVICE_URL: string;
    [key: string]: unknown;
};

declare global {
    interface Window {
        RUNTIME_CONFIG: RuntimeConfig;
    }
}

export const getRuntimeConfig = (): RuntimeConfig => {
    if (!window.RUNTIME_CONFIG) {
        throw new Error("Runtime config not loaded.");
    }
    return window.RUNTIME_CONFIG;
};
