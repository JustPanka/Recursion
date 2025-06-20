const object = {
	layer1_string: 'value1',
	layer1_number: 11,
	layer1_obj: {
		layer2_string: 'value2',
		layer2_number: 222,
		layer2_obj: {
			layer3_string: 'value3',
			layer3_any: {
				layer4_string: 'value4',
				layer4_number: 444,
				layer4_any: {
					deepest: 'hiThere',
				}
			}
		},
		layer2_str2: 'value22',
	},
	layer1_str2: 'value11'
}

const indent = '   ';

function printOutNested(obj, currentLayer = 0, someExtraParam) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            printOutNested(obj[key], currentLayer + 1, someExtraParam);

        } else {
            let currentIndent = '';
            // Add as many indent as needed for the current layer
            for (let i = 0; i < currentLayer; i++) {
                currentIndent += indent;
            }
            console.log(`${currentIndent}${key}: ${obj[key]} ${someExtraParam}`);
        }
    }
}    

printOutNested(object, undefined, 'dundi');