Using MongoDB hosted on an atlas server, you can add edit and search POI by geo location.

#Usage
# POST /poi/create
Create a poi
Example call:
{
name: "string",
type: "string",
geo: [lon, lat] (numbers)
}

# PUT /poi/:id/put
Update a POI
Example call:
{
name: "NewName",
type: "NewType",
geo: [NewLon, NewLat] (numbers)
}

# POST /poi/find_in_area
Find all POI in rect
Example call: 
{
"bottomLeft":[0,1],
"upperRight": [1,10]
}
