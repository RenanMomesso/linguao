// console.d.ts
interface Console {
  tron: {
    storybookSwitcher: (storybookUI: any) => (app: any) => any;
  };
}

declare module "react-native-speech" {
  export type speak = (message: string, options: any) => void;
  export function speak(any:any): void;
  export function supportedVoices(): Promise<void>;
}
