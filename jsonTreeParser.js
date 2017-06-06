var data = [
			{
				"parentId" : null,
				"id" : "1",
				"name" : "Universe"
			},
			{
				"parentId" : "1",
				"id" : "2",
				"name" : "Solar System"
			},
			{
				"parentId" : "2",
				"id" : "3",
				"name" : "Mercury"
			},
			{
				"parentId" : "2",
				"id" : "4",
				"name" : "Venus"
			},
			{
				"parentId" : "2",
				"id" : "5",
				"name" : "Earth"
			},	
			{
				"parentId" : "5",
				"id" : "8",
				"name" : "Antartica"
			}
		]
		
function getChildren(array, parent_index) {
	var children = []	
	for(var i = 0; i < array.length; i++) {		
		var node = array[i]
		if(node["id"] === parent_index)
			continue
		if(node["parentId"] === parent_index) {
			children[node["name"]] = { "id" : node["id"], "name" : node["name"], "children" : getChildren(array, node["id"]) }
		}
	}
	return children
}

var output = getChildren(data, null)
console.log("Parsed Data:", output)
