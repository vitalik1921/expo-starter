import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Config } from "tailwindcss";

const fullConfig = resolveConfig(tailwindConfig);
export const theme = fullConfig.theme as any;
