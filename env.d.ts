/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly SITE_TITLE: string;
    readonly VITE_APP_VERSION: string;
    readonly NODE_ENV: string;
    readonly VITE_APP_PATH: string;
    readonly VITE_APP_GATEWAY: string;
    readonly VITE_APP_TITLE: string;
    readonly VITE_APP_IDLE_TIME: string;
    readonly VITE_THAI_ID_PATH: string;
    readonly VITE_APP_SSO_REALM: string;
    readonly VITE_APP_SSO_URL: string;
    readonly VITE_APP_CLIENT_ID: string;
    readonly VITE_APP_HOST_NAME: string;
    readonly VITE_APP_HOST_NAME_PORT: string;
    
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  