const postcss = require('postcss');

module.exports = postcss.plugin('count-at-rules', function countAtRules(ruleTypes) {
 
	return function (css) {
		ruleTypes = ruleTypes || null;

		if(typeof ruleTypes == 'string') {
			ruleTypes = [ruleTypes];
		}

		if (ruleTypes == null) {
			throw css.error('Please define which at rules you would like counted, as a string or array of strings.');
		} else {
			ruleTypes.forEach(function(ruleType, index) {
				let atRuleCount = 0;
			
				// Find and loop through `element` at rules
				css.walkAtRules(ruleType, rule => {
					atRuleCount += 1;
				});

				if(atRuleCount == 0) {
					console.log(`🚩  ${atRuleCount} @${ruleType} queries were found`);
				} else if (atRuleCount == 1) {
					console.log(`✅  ${atRuleCount} @${ruleType} query was found`);
				} else {
					console.log(`✅  ${atRuleCount} @${ruleType} queries were found`);
				}
			});
		}
	}
});