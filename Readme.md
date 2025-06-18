Recursion challenge

Traverse and print out this object:

{
	layer1_string: 'value1',
	layer1_number: 11,
	layer1_obj: {
		layer2_string: 'value2',
		layer2_number: 222,
		layer2_obj: {
			layer3_string: 'value3'
			layer3_any: {
				layer4_string: 'value4'
				layer4_number: 444
				layer4_any: {
					deepest: 'hiThere'
				}
			}
		},
		layer2_str2: 'value22'
	},
	layer1_str2: 'value11'
}


output should look like this (in console):

layer1_string: value1
layer1_number: 11
	layer2_string: value2
	layer2_number: 222
		layer3_string: value3
		.
		.
		.

hint: ahány layer van annyiszor kell meghívni
ahányadik layer annyi szóközt elé
