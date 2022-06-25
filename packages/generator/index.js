#!/usr/bin/env node
import path from 'path'
import { Plop, run } from 'plop'
import minimist from 'minimist'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const args = process.argv.slice(2)
const argv = minimist(args)

Plop.prepare(
	{
		cwd: argv.cwd,
		configPath: path.join(__dirname, "plopfile.js"),
		preload: argv.preload || [],
		completion: argv.completion,
	},
	(env) => {
		const options = {
			...env,
			dest: process.cwd(),
		};
		return run(options, undefined, true);
	}
);
