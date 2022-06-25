export default (plop) => {
	plop.setGenerator('component', {
		description: 'Create a component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the component name?',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'components/{{pascalCase name}}/{{pascalCase name}}.jsx',
				templateFile: 'templates/Component.jsx.hbs',
			},
			{
				type: 'add',
				path: 'components/{{pascalCase name}}/{{pascalCase name}}.styles.js',
				templateFile: 'templates/Component.styles.js.hbs',
			},
			{
				type: 'add',
				path: 'components/{{pascalCase name}}/index.js',
				templateFile: 'templates/index.js.hbs',
			},
			{
				type: 'add',
				path: 'components/index.js',
				templateFile: 'templates/components-index.js.hbs',
				skipIfExists: true,
			},
			{
				type: 'append',
				path: 'components/index.js',
				pattern: '/* INJECT_EXPORT */',
				template: 'export { default as {{ properCase name }} } from \'./{{ properCase name }}\'',
			},
		],
	})
}
