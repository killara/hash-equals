import { terser } from "rollup-plugin-terser";
import ts from "@rollup/plugin-typescript";

const production = process.env.NODE_ENV == "production";
export default [
  {
    input: "src/index.ts",
    output: {
      dir: "dist/esm",
      format: "esm",
    },
    plugins: [
      ts({ declaration: true, outDir: "dist/esm"}),
      production && terser(),
    ],
    external: ["assert", "crypto"],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist/cjs",
      format: "cjs",
      exports: "auto"
    },
    plugins: [
      ts({ declaration: false, outDir: "dist/cjs"}),
      production && terser(),
    ],
    external: ["assert", "crypto"],
  }
];
