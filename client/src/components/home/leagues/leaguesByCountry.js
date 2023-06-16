// List all relevant countries and leagues
// Leagues point to their corresponding League ID in the API-Football database
// Country Codes are ISO-3166-1 standard. Used with country-flag-icons npm package

const leaguesByCountry = {
	'England': {
		leagues: {
			'Premier League': 39,
			'Championship': 40
		},
		countryCode: 'GB'
	},
	'Spain': {
		leagues: {
			'La Liga': 140,
			'Segunda Division': 141
		},
		countryCode: 'ES'
	},
	'Germany': {
		leagues: {
			'Bundesliga': 78,
			'2. Bundesliga': 79
		},
		countryCode: 'DE'
	},
	'Italy': {
		leagues: {
			'Serie A': 135,
			'Serie B': 136
		},
		countryCode: 'IT'
	},
	'France': {
		leagues: {
			'Ligue 1': 61,
			'Ligue 2': 62
		},
		countryCode: 'FR'
	},
	'Netherlands': {
		leagues: {
			'Eredivisie': 88,
			'Eerste Divisie': 89
		},
		countryCode: 'NL'
	},
	'Portugal': {
		leagues: {
			'Primeira Liga': 94,
			'Liga Portugal 2': 95
		},
		countryCode: 'PT'
	},
	'Scotland': {
		leagues: {
			'Scottish Premiership': 149,
			'Scottish Championship': 150
		},
		countryCode: 'GB'
	},
	'Belgium': {
		leagues: {
			'Jupiler Pro League': 63,
			'Proximus League': 105
		},
		countryCode: 'BE'
	},
	'Turkey': {
		leagues: {
			'Süper Lig': 147,
			'TFF 1. Lig': 148
		},
		countryCode: 'TR'
	},
	'Russia': {
		leagues: {
			'Russian Premier League': 80,
			'FNL': 81
		},
		countryCode: 'RU'
	},
	'Ukraine': {
		leagues: {
			'Ukrainian Premier League': 120,
			'Persha Liga': 121
		},
		countryCode: 'UA'
	},
	'Switzerland': {
		leagues: {
			'Swiss Super League': 84,
			'Challenge League': 116
		},
		countryCode: 'CH'
	},
	'Austria': {
		leagues: {
			'Tipico Bundesliga': 71,
			'2. Liga': 72
		},
		countryCode: 'AT'
	},
	'Greece': {
		leagues: {
			'Super League Greece': 100,
			'Football League': 101
		},
		countryCode: 'GR'
	},
	'Denmark': {
		leagues: {
			'Danish Superliga': 56,
			'1st Division': 57
		},
		countryCode: 'DK'
	},
	'Sweden': {
		leagues: {
			'Allsvenskan': 81,
			'Superettan': 82
		},
		countryCode: 'SE'
	},
	'Norway': {
		leagues: {
			'Eliteserien': 59,
			'OBOS-ligaen': 60
		},
		countryCode: 'NO'
	},
	'Croatia': {
		leagues: {
			'Prva HNL': 102,
			'Druga HNL': 103
		},
		countryCode: 'HR'
	},
	'Poland': {
		leagues: {
			'Ekstraklasa': 67,
			'I Liga': 68
		},
		countryCode: 'PL'
	},
	'USA': {
		leagues: {
			'Major League Soccer': 253
		},
		countryCode: 'US'
	},
	'Mexico': {
		leagues: {
			'Liga MX': 135
		},
		countryCode: 'MX'
	},
	'Europe': {
		leagues: {
			'UEFA Champions League': 2,
			'UEFA Europa League': 3,
			'UEFA Europa Conference League': 283
		},
		countryCode: 'EU'
	},
};


export default leaguesByCountry;