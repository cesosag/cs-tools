const prompts = [
	{
		type: 'input',
		name: 'name',
		message: 'What is the component name?',
	},
	{
		type: 'list',
		name: 'tsOrJs',
		message: 'Select type of generated files',
		choices: ['TypeScript', 'JavaScript'],
		default: 0,
	},
]

const jsActions = [
	{
		type: 'add',
		path: 'components/{{pascalCase name}}/{{pascalCase name}}.jsx',
		templateFile: 'templates/js/Component.jsx.hbs',
	},
	{
		type: 'add',
		path: 'components/{{pascalCase name}}/{{pascalCase name}}.styles.js',
		templateFile: 'templates/js/Component.styles.js.hbs',
	},
	{
		type: 'add',
		path: 'components/{{pascalCase name}}/index.js',
		templateFile: 'templates/js/index.js.hbs',
	},
	{
		type: 'add',
		path: 'components/{{pascalCase name}}/data.mock.js',
		templateFile: 'templates/js/data.mock.js.hbs',
	},
	{
		type: 'add',
		path: 'components/{{pascalCase name}}/{{pascalCase name}}.test.jsx',
		templateFile: 'templates/js/Component.test.jsx.hbs',
	},
	{
		type: 'add',
		path: 'components/index.js',
		templateFile: 'templates/js/components-index.js.hbs',
		skipIfExists: true,
	},
	{
		type: 'append',
		path: 'components/index.js',
		pattern: '/* INJECT_EXPORT */',
		templateFile: 'templates/js/index.js.hbs',
	},
];

const tsActions = [
	{
		type: 'add',
		path: 'components/{{pascalCase name}}/{{pascalCase name}}.tsx',
		templateFile: 'templates/ts/Component.tsx.hbs',
	},
	{
		type: 'add',
		path: 'components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
		templateFile: 'templates/ts/Component.styles.ts.hbs',
	},
	{
		type: 'add',
		path: 'components/{{pascalCase name}}/index.ts',
		templateFile: 'templates/ts/index.ts.hbs',
	},
	{
		type: 'add',
		path: 'components/{{pascalCase name}}/data.mock.ts',
		templateFile: 'templates/ts/data.mock.ts.hbs',
	},
	{
		type: 'add',
		path: 'components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
		templateFile: 'templates/ts/Component.test.tsx.hbs',
	},
	{
		type: 'add',
		path: 'components/index.ts',
		templateFile: 'templates/ts/components-index.ts.hbs',
		skipIfExists: true,
	},
	{
		type: 'append',
		path: 'components/index.ts',
		pattern: '/* INJECT_EXPORT */',
		templateFile: 'templates/ts/index.ts.hbs',
	},
];

export default (plop) => {
	plop.setGenerator('component', {
		description: 'Create a component',
		prompts,
		actions: ({ tsOrJs }) => tsOrJs === 'TypeScript' ? tsActions : jsActions,
	});
}
