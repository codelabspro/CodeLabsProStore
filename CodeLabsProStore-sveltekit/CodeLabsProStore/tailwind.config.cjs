const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require("daisyui")],


	  // daisyUI config (optional)
	  daisyui: {
		styled: true,
		themes: [
			'coffee',
			'business',
			'emerald',
			'dark',
			'night',
			'forest',
			'synthwave'
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "dark",
	  },
};

module.exports = config;
