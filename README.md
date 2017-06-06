# JsonTreeParser

## Converts a flat json (id + parentId) data to a tree structure.

### Input JSON
```
[
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
```

### Output (well, not exactly..try it out)
```
- Universe
	- Solar System
		- Mercury
		- Venus
		- Earth
			- Antartica
```
