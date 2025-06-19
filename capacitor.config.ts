import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tuempresa.qrverifier',
  appName: 'QR Verifier',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
