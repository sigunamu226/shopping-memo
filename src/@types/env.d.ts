declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_FIREBASE_API_KEY: string;
    readonly NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    readonly NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
    readonly NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
    readonly NEXT_PUBLIC_FIREBASE_SENDER_ID: string;
    readonly NEXT_PUBLIC_FIREBASE_APP_ID: string;
  }
}
