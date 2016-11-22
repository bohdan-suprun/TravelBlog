// Constants holder

var Constants = {
  defaultDbPort: 27017,
  defaultDbHost: '127.0.0.1',
  defaultDbEnv: 'local'
}

// Configuration for different envs
var config = {
	local: {
		mode: 'local',
		port: 3000,
		mongo: {
			host: Constants.defaultDbHost,
			port: Constants.defaultDbPort
		}
	},
	staging: {
		mode: 'staging',
		port: 4000,
		mongo: {
			host: Constants.defaultDbHost,
			port: Constants.defaultDbPort
		}
	},
	production: {
		mode: 'production',
		port: 5000,
		mongo: {
			host: Constants.defaultDbHost,
			port: Constants.defaultDbPort
		}
	}
}

module.exports = function(mode) {
	return config[mode || process.argv[2] || Constants.defaultDbEnv] || config.local;
}