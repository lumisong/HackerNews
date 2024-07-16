// *****PLEASE ENTER YOUR DETAILS BELOW*****
// Task5-mongo.mongodb.js

// Student ID:
// Student Name:

// Comments for your marker:

// ===================================================================================
// Do not modify or remove any of the comments below (items marked with //)
// ===================================================================================

// Use (connect to) your database - you MUST update xyz001
// with your authcate username

use ("jhua0143");

// (ii)
// PLEASE PLACE REQUIRED MONGODB COMMAND TO CREATE THE COLLECTION HERE
// YOU MAY PICK ANY COLLECTION NAME
// ENSURE that your query is formatted and has a semicolon
// (;) at the end of this answer

// Drop collection
db.endangered_species.drop()

// Create collection and insert documents
db.endangered_species.insertMany([
    {
        "_id": "AUS10",
        "centre_details": {
            "centre_name": "Australia Zoo",
            "centre_address": "1638 Steve Irwin Way, Beerwah  QLD  4519, Australia",
            "center_type": "Zoo"
        },
        "total_number_animals": 6,
        "animals": [
            {
                "animal_id": 2,
                "popular_name": "Quokka",
                "sex": "F",
                "date_added": "03-Jan-2018",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 1
            },
            {
                "animal_id": 31,
                "popular_name": "Blackbuck",
                "sex": "F",
                "date_added": "25-Sep-2022",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 4,
                "popular_name": "Black Rhinoceros",
                "sex": "F",
                "date_added": "12-Jun-2018",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 2
            },
            {
                "animal_id": 3,
                "popular_name": "Quokka",
                "sex": "F",
                "date_added": "09-Jun-2018",
                "wild_or_bred": "Centre Bred",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 5,
                "popular_name": "Quokka",
                "sex": "M",
                "date_added": "20-Jun-2018",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 1,
                "popular_name": "Quokka",
                "sex": "M",
                "date_added": "03-Jan-2018",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            }
        ]
    },
    {
        "_id": "AUS20",
        "centre_details": {
            "centre_name": "Werribee Open Range Zoo",
            "centre_address": "K Road, Werribee VIC 3030, Australia",
            "center_type": "Zoo"
        },
        "total_number_animals": 4,
        "animals": [
            {
                "animal_id": 6,
                "popular_name": "Cheetah",
                "sex": "M",
                "date_added": "25-Jul-2018",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 29,
                "popular_name": "Common Hippopotamus",
                "sex": "F",
                "date_added": "13-Sep-2021",
                "wild_or_bred": "Centre Bred",
                "no_of_exchanges": 1
            },
            {
                "animal_id": 27,
                "popular_name": "Lion",
                "sex": "F",
                "date_added": "11-Sep-2020",
                "wild_or_bred": "Centre Bred",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 7,
                "popular_name": "Mountain Zebra",
                "sex": "M",
                "date_added": "24-Jul-2018",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 4
            }
        ]
    },
    {
        "_id": "AUS30",
        "centre_details": {
            "centre_name": "Alice Springs Desert Park",
            "centre_address": "Larapinta Drive, Alice Springs NT 0871, Australia",
            "center_type": "Nature Reserve"
        },
        "total_number_animals": 6,
        "animals": [
            {
                "animal_id": 11,
                "popular_name": "Cheetah",
                "sex": "M",
                "date_added": "25-Nov-2019",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 9,
                "popular_name": "Black Rhinoceros",
                "sex": "F",
                "date_added": "22-Nov-2019",
                "wild_or_bred": "Centre Bred",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 10,
                "popular_name": "Black Rhinoceros",
                "sex": "M",
                "date_added": "22-Nov-2019",
                "wild_or_bred": "Centre Bred",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 8,
                "popular_name": "Black Rhinoceros",
                "sex": "M",
                "date_added": "13-Jul-2018",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 13,
                "popular_name": "Cheetah",
                "sex": "F",
                "date_added": "10-Mar-2020",
                "wild_or_bred": "Centre Bred",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 12,
                "popular_name": "Cheetah",
                "sex": "F",
                "date_added": "25-Nov-2019",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            }
        ]
    },
    {
        "_id": "SAF10",
        "centre_details": {
            "centre_name": "Kruger National Park",
            "centre_address": "Kruger National Park, South Africa",
            "center_type": "Wildlife Park"
        },
        "total_number_animals": 5,
        "animals": [
            {
                "animal_id": 14,
                "popular_name": "Lion",
                "sex": "M",
                "date_added": "13-Mar-2020",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 30,
                "popular_name": "Common Hippopotamus",
                "sex": "F",
                "date_added": "09-Aug-2022",
                "wild_or_bred": "Centre Bred",
                "no_of_exchanges": 1
            },
            {
                "animal_id": 25,
                "popular_name": "Lion",
                "sex": "M",
                "date_added": "11-Sep-2020",
                "wild_or_bred": "Centre Bred",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 26,
                "popular_name": "Lion",
                "sex": "F",
                "date_added": "11-Sep-2020",
                "wild_or_bred": "Centre Bred",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 15,
                "popular_name": "Lion",
                "sex": "F",
                "date_added": "13-Mar-2020",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            }
        ]
    },
    {
        "_id": "SAF20",
        "centre_details": {
            "centre_name": "Johannesburg Zoo",
            "centre_address": "Jan Smuts Avenue, PARKVIEW 2122, South Africa",
            "center_type": "Zoo"
        },
        "total_number_animals": 5,
        "animals": [
            {
                "animal_id": 16,
                "popular_name": "Numbat",
                "sex": "M",
                "date_added": "03-Apr-2020",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 20,
                "popular_name": "Grevy's Zebra",
                "sex": "M",
                "date_added": "01-May-2020",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 4
            },
            {
                "animal_id": 19,
                "popular_name": "Northern Hairy-nosed Wombat",
                "sex": "F",
                "date_added": "03-Apr-2020",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 18,
                "popular_name": "Greater Bilby",
                "sex": "M",
                "date_added": "03-Apr-2020",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 17,
                "popular_name": "Tasmanian Devil",
                "sex": "M",
                "date_added": "03-Apr-2020",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            }
        ]
    },
    {
        "_id": "SAF30",
        "centre_details": {
            "centre_name": "SanWild Wildlife Sanctuary",
            "centre_address": "LETSITELE 0885, South Africa",
            "center_type": "Sanctuary"
        },
        "total_number_animals": 5,
        "animals": [
            {
                "animal_id": 23,
                "popular_name": "Lion",
                "sex": "F",
                "date_added": "20-May-2020",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 24,
                "popular_name": "Grevy's Zebra",
                "sex": "F",
                "date_added": "24-May-2020",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 28,
                "popular_name": "Grevy's Zebra",
                "sex": "F",
                "date_added": "15-Aug-2021",
                "wild_or_bred": "Centre Bred",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 22,
                "popular_name": "Common Hippopotamus",
                "sex": "F",
                "date_added": "12-May-2020",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            },
            {
                "animal_id": 21,
                "popular_name": "Common Hippopotamus",
                "sex": "M",
                "date_added": "12-May-2020",
                "wild_or_bred": "From Wild",
                "no_of_exchanges": 0
            }
        ]
    }
]
)

// List all documents you added
db.endangered_species.find();


// (iii)
// PLEASE PLACE REQUIRED MONGODB COMMAND/S FOR THIS PART HERE
// ENSURE that your query is formatted and has a semicolon
// (;) at the end of this answer
db.endangered_species.find(
    { "total_number_animals": { "$gte": 6 } },
    {
        "centre_details.centre_name": 1,
        "centre_details.centre_address": 1,
        "centre_details.center_type": 1,
        "total_number_animals": 1,
        "_id": 0
    }
);



// (iv)
// PLEASE PLACE REQUIRED MONGODB COMMAND/S FOR THIS PART HERE
// ENSURE that your query is formatted and has a semicolon
// (;) at the end of this answer
db.endangered_species.find(
    { "animals.popular_name": "Cheetah" },
    {
        "centre_details.centre_name": 1,
        "centre_details.centre_address": 1,
        "_id": 0
    }
);



// (v)
// PLEASE PLACE REQUIRED MONGODB COMMAND/S FOR THIS PART HERE
// ENSURE that your query is formatted and has a semicolon
// (;) at the end of this answer

// Show the full details for the zoos before this move
db.endangered_species.find(
    { "_id": { "$in": ["AUS10", "AUS20"] } }
).pretty()

// Move the Quokka 
db.endangered_species.updateOne(
    { "_id": "AUS10" },
    { "$pull": { "animals": { "animal_id": 3 } } }
)
db.endangered_species.updateOne(
    { "_id": "AUS20" },
    { "$push": { "animals": {
        "animal_id": 3,
        "popular_name": "Quokka",
        "sex": "F",
        "date_added": "09-Jun-2018",
        "wild_or_bred": "Centre Bred",
        "no_of_exchanges": 0
    }}}
)
db.endangered_species.updateOne(
    { "_id": "AUS10" },
    { "$inc": { "total_number_animals": -1 } }
)
db.endangered_species.updateOne(
    { "_id": "AUS20" },
    { "$inc": { "total_number_animals": 1 } }
)


// Show the full details for the zoos after the move has been recorded
db.endangered_species.find(
    { "_id": { "$in": ["AUS10", "AUS20"] } }
).pretty();
