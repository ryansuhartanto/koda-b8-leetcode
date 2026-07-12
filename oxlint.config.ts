import base from "@kekkon-nexus/config/oxlint";
import { defineConfig } from "oxlint";

const config = defineConfig({
	extends: [base],
	rules: {
		"import/unambiguous": ["off"],
		"func-style": ["off"],
	},
});

export default config;
