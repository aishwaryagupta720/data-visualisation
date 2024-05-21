const wasteData = [
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 9.0,
        "Notes": "Clam shells,To-go cups, to go plates"
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 43.0,
        "Notes": "student food waste"
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 16.9,
        "Notes": "bread wrapers"
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 42.6,
        "Notes": ""
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 13.8,
        "Notes": ""
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.5,
        "Weight": 48.9,
        "Notes": ""
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.25,
        "Weight": 23.5,
        "Notes": ""
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 19.4,
        "Notes": ""
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 15.4,
        "Notes": "shrimp bag"
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 13.7,
        "Notes": ""
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "metal",
        "Volume": 0.33,
        "Weight": 5.0,
        "Notes": "clam juice cans, pan spray"
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.5,
        "Weight": 7.0,
        "Notes": "soap and syrup not empty"
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "terracycle",
        "Volume": 0.1,
        "Weight": 0.4,
        "Notes": "granola bar wrappers"
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "paper",
        "Volume": 1.0,
        "Weight": 11.9,
        "Notes": "recipts"
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill",
        "Substream": "styrofoam",
        "Volume": 0.1,
        "Weight": 0.5,
        "Notes": ""
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Volume": 0.5,
        "Weight": 7.8,
        "Notes": ""
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "glass",
        "Volume": 0.1,
        "Weight": 1.8,
        "Notes": ""
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 1.0,
        "Weight": 15.5,
        "Notes": "napkin packaging (has plastic liner)"
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "aseptic containers",
        "Volume": 0.5,
        "Weight": 1.7,
        "Notes": "co-co water"
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "cardboard",
        "Volume": 1.0,
        "Weight": 5.0,
        "Notes": "boxes"
    },
    {
        "Date": "2015-04-30T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Reusables in Landfill",
        "Substream": "reusables",
        "Volume": 0.1,
        "Weight": 2.5,
        "Notes": "forks, twistties rubberbands"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "cardboard",
        "Volume": 1.0,
        "Weight": 5.9,
        "Notes": "boxes, egg cartons"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 9.9,
        "Notes": "flowers"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost",
        "Substream": "paper towels",
        "Volume": 0.33,
        "Weight": 3.3,
        "Notes": "paper towels"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 33.1,
        "Notes": "bread ends, potato peels, eggshells bacon"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 16.2,
        "Notes": "coke cups, paper wrappers, clamshells and plates"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "terracycle",
        "Volume": 0.03,
        "Weight": 0.1,
        "Notes": "granola bar wrappers, markers"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Reusables in Landfill",
        "Substream": "reusables",
        "Volume": 0.06,
        "Weight": 0.1,
        "Notes": "cloth rags, twist ties"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.8,
        "Weight": 7.1,
        "Notes": "black silverware, juice containers, mayo containers"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "paper",
        "Volume": 0.75,
        "Weight": 3.6,
        "Notes": "oat containers, salt containers, red bull boxes"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "aseptic containers",
        "Volume": 0.8,
        "Weight": 3.8,
        "Notes": "milk containers, liquid egg containers"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.14,
        "Weight": 0.2,
        "Notes": "*coffee cups were sorted separately"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.75,
        "Weight": 12.9,
        "Notes": ""
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "metal",
        "Volume": 0.33,
        "Weight": 2.2,
        "Notes": "tin foil, large cans (olives manderines), soda cans"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "cardboard",
        "Volume": 0.33,
        "Weight": 3.1,
        "Notes": "boxes"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "glass",
        "Volume": 0.03,
        "Weight": 0.4,
        "Notes": "bottles"
    },
    {
        "Date": "2015-11-16T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 11.8,
        "Notes": "syran wrap,bags,food packaging"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 8.6,
        "Notes": "Seran Wrap"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "cardboard",
        "Volume": 1.25,
        "Weight": 6.1,
        "Notes": "Egg Cartons, boxes"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "paper",
        "Volume": 1.0,
        "Weight": 8.6,
        "Notes": "half&half boxes, swiss miss boxes, milk cartons"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.25,
        "Weight": 33.3,
        "Notes": "egg shells, avocado, sandwhich toppongs, loaf of bread"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 10.7,
        "Notes": "salad to-go containers, clamshells, coke cups"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 7.7,
        "Notes": "bread bags"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.25,
        "Weight": 13.2,
        "Notes": "large containers, rice vinegal, canola oil"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "cardboard",
        "Volume": 1.0,
        "Weight": 7.4,
        "Notes": "apple trays, boxes, egg cartons"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 6.4,
        "Notes": "Lime Away, plastic utensils, canola oil"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 44.8,
        "Notes": ""
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 10.9,
        "Notes": "clamshells, salad containers, coke cups, water glasses"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "paper",
        "Volume": 1.0,
        "Weight": 4.4,
        "Notes": "milk cartons, receipts, liquid eggs"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "metal",
        "Volume": 0.75,
        "Weight": 8.6,
        "Notes": "pinto beans, olive cans, aluminum foil"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "glass",
        "Volume": 0.25,
        "Weight": 5.8,
        "Notes": "tobasco bottle, saucer, broken plate"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Const Demo Waste",
        "Volume": 0.17,
        "Weight": 1.1,
        "Notes": "sticks"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Reusables in Landfill",
        "Substream": "reusables",
        "Volume": 0.17,
        "Weight": 5.1,
        "Notes": "forks, apron, clothes rags, unused seran wrap roll"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.75,
        "Weight": 11.1,
        "Notes": ""
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "terracycle",
        "Volume": 0.03,
        "Weight": 0.01,
        "Notes": "energy bar wrappers"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.8,
        "Weight": 18.3,
        "Notes": ""
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.04,
        "Weight": 1.2,
        "Notes": "coffee cups, lids, utensils"
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "paper towels",
        "Volume": 0.5,
        "Weight": 6.8,
        "Notes": ""
    },
    {
        "Date": "2016-02-09T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "cardboard",
        "Volume": 0.75,
        "Weight": 5.2,
        "Notes": "bakery containers, fruit holder, boxes"
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Reusables in Landfill",
        "Substream": "reusables",
        "Volume": 0.13,
        "Weight": 2.0,
        "Notes": "hangers, Benson fork, apron, syran wrap roll"
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "metal",
        "Volume": 0.33,
        "Weight": 2.3,
        "Notes": "soda cans, evets trays, green chile cans"
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.5,
        "Weight": 3.1,
        "Notes": "orange force bottle, syrup containers"
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.75,
        "Weight": 6.4,
        "Notes": "gloves, napking packaging"
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Volume": 0.25,
        "Weight": 2.4,
        "Notes": ""
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 13.2,
        "Notes": "clamshells, clear cups, salad containers"
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 41.8,
        "Notes": ""
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "paper",
        "Volume": 0.33,
        "Weight": 1.2,
        "Notes": "recipts, glove boxes"
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "aseptic containers",
        "Volume": 0.33,
        "Weight": 0.8,
        "Notes": "liquid egg containers"
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "cardboard",
        "Volume": 0.5,
        "Weight": 1.1,
        "Notes": "drink cases"
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "glass",
        "Volume": 0.03,
        "Weight": 0.1,
        "Notes": "soy sauce jars"
    },
    {
        "Date": "2016-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 8.5,
        "Notes": "bags"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 12.5,
        "Notes": "Bacon paper, coke cups, plates"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "paper",
        "Volume": 1.0,
        "Weight": 5.1,
        "Notes": "paperboard (food boxes)"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 16.7,
        "Notes": "bulk food bags"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.75,
        "Weight": 5.0,
        "Notes": "bulk food containers"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 29.1,
        "Notes": "food scraps,tortilla chips"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 7.6,
        "Notes": "sandwich paper, plates, napkins"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 2.7,
        "Notes": "milk cartons, bulk containers"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.25,
        "Weight": 23.6,
        "Notes": "coffee, food scraps"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "cardboard",
        "Volume": 1.5,
        "Weight": 9.0,
        "Notes": "produce (waxy) boxes"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 1.0,
        "Weight": 16.4,
        "Notes": "gloves"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.5,
        "Weight": 42.1,
        "Notes": ""
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 15.1,
        "Notes": "plates, coke cups, PLA boxes (4 lids )"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 17.7,
        "Notes": "bread bags, bulk bags"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.5,
        "Weight": 5.2,
        "Notes": "see above"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Volume": 0.75,
        "Weight": 9.4,
        "Notes": ""
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "terracycle",
        "Volume": 0.01,
        "Weight": 0.01,
        "Notes": "1 wrapper"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.5,
        "Weight": 5.2,
        "Notes": "food packaging"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.5,
        "Weight": 27.0,
        "Notes": "bag full of lettuce (from landfill)"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "aseptic containers",
        "Volume": 0.33,
        "Weight": 1.5,
        "Notes": "almond milk, (mission bakery)"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Reusables in Landfill",
        "Substream": "reusables",
        "Volume": 1.0,
        "Weight": 5.6,
        "Notes": "limecrate, sugar tea packet, hangers"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "paper",
        "Volume": 1.0,
        "Weight": 9.4,
        "Notes": "receipts, glove box, paperboard"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.33,
        "Weight": 2.8,
        "Notes": "utensils, bulk food containers"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "glass",
        "Volume": 0.1,
        "Weight": 3.4,
        "Notes": ""
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "cardboard",
        "Volume": 0.5,
        "Weight": 0.8,
        "Notes": ""
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.5,
        "Weight": 4.0,
        "Notes": "chicken bags"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "metal",
        "Volume": 0.75,
        "Weight": 5.3,
        "Notes": "mini pie tins, bulk cans, pam"
    },
    {
        "Date": "2017-04-27T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.25,
        "Weight": 1.4,
        "Notes": "3 bulbs"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.5,
        "Weight": 6.3,
        "Notes": "soiled bags, gloves"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.01,
        "Weight": 0.01,
        "Notes": "Only coffee cups, 4 cups"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.1,
        "Weight": 2.9,
        "Notes": "bagel chips"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 0.1,
        "Weight": 0.1,
        "Notes": "receipts"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Paperboard Rolls",
        "Volume": 0.1,
        "Weight": 1.6,
        "Notes": "toilet paper rolls"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.5,
        "Weight": 1.8,
        "Notes": "Liners"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.1,
        "Weight": 1.0,
        "Notes": "energy bar wraapers"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.33,
        "Weight": 6.6,
        "Notes": "towels"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.01,
        "Weight": 0.01,
        "Notes": "tin foil"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.25,
        "Weight": 3.5,
        "Notes": "coffee sleeves, to go containers"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.25,
        "Weight": 1.5,
        "Notes": ""
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 6.9,
        "Notes": "water bottles, core power, gatorade bottles"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "glass",
        "Volume": 0.25,
        "Weight": 6.1,
        "Notes": "broken glass"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 8.6,
        "Notes": "water bottles, gatorade, protein drinks"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "cardboard",
        "Volume": 1.5,
        "Weight": 22.5,
        "Notes": "flattened boxes"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 6.9,
        "Notes": "water bottles, gatorade, protein drinks"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "cardboard",
        "Volume": 2.0,
        "Weight": 29.1,
        "Notes": "boxes"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 8.7,
        "Notes": "water bottles, gatorade, protein drinks"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "metal",
        "Volume": 0.5,
        "Weight": 4.4,
        "Notes": "lecroix, soda cans"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "aseptic containers",
        "Volume": 0.13,
        "Weight": 0.8,
        "Notes": "muscle milk"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill in Recycling",
        "Substream": "Other Landfill",
        "Volume": 0.33,
        "Weight": 4.0,
        "Notes": "snack wrappers"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill in Recycling",
        "Substream": "Other Landfill",
        "Volume": 0.01,
        "Weight": 0.01,
        "Notes": "coffee cups, 4 cups"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Recycling",
        "Substream": "paper towels",
        "Volume": 0.5,
        "Weight": 3.2,
        "Notes": ""
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Recycling",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.01,
        "Weight": 1.8,
        "Notes": ""
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost in Recycling",
        "Substream": "Compostable Food Containers",
        "Volume": 0.5,
        "Weight": 1.0,
        "Notes": "plates"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 3.0,
        "Notes": "waterbottles, laundry basket"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Reusables in Recycling",
        "Substream": "reusables",
        "Volume": 0.5,
        "Weight": 8.7,
        "Notes": "swimwear, sports equipment"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "paper",
        "Volume": 1.0,
        "Weight": 25.9,
        "Notes": ""
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "terracycle",
        "Volume": 0.01,
        "Weight": 1.3,
        "Notes": "chip bags, granola bars"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "cardboard",
        "Volume": 1.0,
        "Weight": 9.1,
        "Notes": "boxes"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "Plastic Film",
        "Volume": 1.25,
        "Weight": 11.9,
        "Notes": "recycling bags"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling",
        "Substream": "glass",
        "Volume": 0.2,
        "Weight": 16.6,
        "Notes": "snapple bottles"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Landfill in Compost",
        "Substream": "Other Landfill",
        "Volume": 0.01,
        "Weight": 0.01,
        "Notes": ""
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Reusables in Compost",
        "Substream": "reusables",
        "Volume": 0.01,
        "Weight": 0.8,
        "Notes": "sock, hair tie"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost",
        "Substream": "paper towels",
        "Volume": 0.75,
        "Weight": 8.8,
        "Notes": ""
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Compost",
        "Substream": "Plastic 1-7",
        "Volume": 0.01,
        "Weight": 0.9,
        "Notes": "bottles"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.01,
        "Weight": 1.6,
        "Notes": ""
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Compost",
        "Substream": "Plastic Film",
        "Volume": 0.01,
        "Weight": 0.5,
        "Notes": ""
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Compost",
        "Substream": "Compostable Food Containers",
        "Volume": 0.33,
        "Weight": 0.9,
        "Notes": "compost liners"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Compost",
        "Substream": "E- Universal Waste",
        "Volume": 0.01,
        "Weight": 0.01,
        "Notes": "headphones"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Benson Center",
        "Stream": "Recycling in Compost",
        "Substream": "paper",
        "Volume": 0.01,
        "Weight": 0.01,
        "Notes": "1 sheet of paper"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling",
        "Substream": "Paper",
        "Volume": 1.0,
        "Weight": 15.8,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling",
        "Substream": "Cardboard",
        "Volume": 1.0,
        "Weight": 5.5,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling",
        "Substream": "Cardboard",
        "Volume": 1.0,
        "Weight": 8.6,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling",
        "Substream": "Paper",
        "Volume": 0.66,
        "Weight": 6.5,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Landfill in Recycling",
        "Substream": "Other Landfill",
        "Volume": 0.1,
        "Weight": 1.2,
        "Notes": "coffee cups"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling",
        "Substream": "Metal",
        "Volume": 0.25,
        "Weight": 5.2,
        "Notes": "keys"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling",
        "Substream": "Glass",
        "Volume": 0.15,
        "Weight": 11.7,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.25,
        "Weight": 13.6,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 4.1,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling",
        "Substream": "Cardboard",
        "Volume": 1.0,
        "Weight": 2.3,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Landfill in Recycling",
        "Substream": "Other Landfill",
        "Volume": 0.5,
        "Weight": 4.8,
        "Notes": "SCU coffee cups, markers, chip bags, mailing packages"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Landfill in Recycling",
        "Substream": "Reusables",
        "Volume": 0.1,
        "Weight": 2.0,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Landfill in Recycling",
        "Substream": "Styrofoam",
        "Volume": 0.05,
        "Weight": 0.6,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Compost in Recycling",
        "Substream": "Paper Towels",
        "Volume": 0.33,
        "Weight": 1.4,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Compost in Recycling",
        "Substream": "Compostable Food Containers",
        "Volume": 0.33,
        "Weight": 2.8,
        "Notes": "paper towels, napkins, sandwich wrappers, food containers"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Compost in Recycling",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.1,
        "Weight": 1.6,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Compost",
        "Substream": "Paper Towels",
        "Volume": 0.75,
        "Weight": 11.2,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Landfill in Compost",
        "Substream": "Other Landfill",
        "Volume": 0.05,
        "Weight": 0.9,
        "Notes": "coffee cups"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Compost",
        "Substream": "Compostable Food Containers",
        "Volume": 0.75,
        "Weight": 3.2,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Compost",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.25,
        "Weight": 22.2,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Compost",
        "Substream": "Paper",
        "Volume": 0.05,
        "Weight": 0.1,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Compost",
        "Substream": "Plastic 1-7",
        "Volume": 0.12,
        "Weight": 2.8,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Compost",
        "Substream": "Plastic Film",
        "Volume": 0.12,
        "Weight": 0.2,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Landfill in Compost",
        "Substream": "Other Landfill",
        "Volume": 0.06,
        "Weight": 1.7,
        "Notes": "chip wrappers, keurig cups"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Compost",
        "Substream": "Metal",
        "Volume": 0.05,
        "Weight": 0.5,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.75,
        "Weight": 3.6,
        "Notes": "food containers"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.25,
        "Weight": 9.8,
        "Notes": "starbucks cups"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.75,
        "Weight": 2.3,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 0.75,
        "Weight": 8.7,
        "Notes": "sheets of paper, paper bags"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Landfill",
        "Substream": "Glass",
        "Volume": 0.1,
        "Weight": 5.6,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.1,
        "Weight": 1.9,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Landfill",
        "Substream": "Cardboard",
        "Volume": 0.5,
        "Weight": 1.9,
        "Notes": "cardboard boxes"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.1,
        "Weight": 6.8,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 1.0,
        "Weight": 15.2,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Landfill",
        "Substream": "Paperboard Rolls",
        "Volume": 0.05,
        "Weight": 0.1,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Recycling in Landfill",
        "Substream": "Const Demo Waste",
        "Volume": 0.25,
        "Weight": 10.9,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Landfill",
        "Substream": "Styrofoam",
        "Volume": 0.1,
        "Weight": 1.3,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.5,
        "Weight": 10.9283387622,
        "Notes": "boots, gloves, pens, jumper cables"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.33,
        "Weight": 2.3,
        "Notes": "coffee cups"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 0.8,
        "Weight": 8.7,
        "Notes": ""
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 12.4,
        "Notes": "to go boxes, flowers, clear cups"
    },
    {
        "Date": "2018-05-15T00:00:00.000",
        "Building": "Facilities",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.25,
        "Weight": 16.6,
        "Notes": ""
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 1.0,
        "Weight": 6.1,
        "Notes": "bags of only paper towels"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 6.9,
        "Notes": "Odwalla, some bottled water"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 5.0,
        "Notes": "to-go clamshells, plates"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 2.0,
        "Weight": 16.8,
        "Notes": "ben&jerrys, outside sourced, chip bags, lots of feminine hygene products"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 1.0,
        "Weight": 7.0,
        "Notes": "cereal boxes, paperboard boxes"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 2.7,
        "Notes": "liners, plastic wrappers"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.2,
        "Weight": 14.9,
        "Notes": ""
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Aseptic Containers",
        "Volume": 0.1,
        "Weight": 0.8,
        "Notes": ""
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 0.67,
        "Weight": 4.7,
        "Notes": ""
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.25,
        "Weight": 1.8,
        "Notes": "shampoo&cond. Containers, deoderants, bar wrappers"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.33,
        "Weight": 8.1,
        "Notes": "clothing"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 1.0,
        "Weight": 6.3,
        "Notes": "recipts, paper bags"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.75,
        "Weight": 2.6,
        "Notes": "plastic bags, wrappers"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 8.0,
        "Notes": "bottles, soda bottles"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.13,
        "Weight": 0.9,
        "Notes": "aluminum cans, metal foil, chipotle tin"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Cardboard",
        "Volume": 0.75,
        "Weight": 3.9,
        "Notes": "mailing boxes"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 5.3,
        "Notes": "to-go besonware, sandwhich wrappers"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Glass",
        "Volume": 0.1,
        "Weight": 4.2,
        "Notes": "bottles, jam jar"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.67,
        "Weight": 5.9,
        "Notes": "small pieces, facial wipes, makeup remover swabs"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 10.7,
        "Notes": ""
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Paperboard Rolls",
        "Volume": 0.1,
        "Weight": 0.6,
        "Notes": ""
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.01,
        "Weight": 0.01,
        "Notes": "bateries"
    },
    {
        "Date": "2015-05-05T00:00:00.000",
        "Building": "Graham",
        "Stream": "Landfill",
        "Substream": "Styrofoam",
        "Volume": 0.01,
        "Weight": 0.01,
        "Notes": "cup-a-noodle"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Cardboard",
        "Volume": 1.0,
        "Weight": 7.4,
        "Notes": "capri sun box, misc boxes"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 7.3,
        "Notes": "ben and jerrys container, clamshells, soup containers"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 6.9,
        "Notes": "gatorade, solo cups, water bottles, milk jugs"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 1.0,
        "Weight": 6.9,
        "Notes": ""
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 1.0,
        "Weight": 5.1,
        "Notes": "to-go food bags, instructions"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 0.25,
        "Weight": 2.6,
        "Notes": ""
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.75,
        "Weight": 5.7,
        "Notes": "coke cups, q-tips, clear cups, pizza boxes"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 0.13,
        "Weight": 1.6,
        "Notes": "recipts, brown bags"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Cardboard",
        "Volume": 0.33,
        "Weight": 1.0,
        "Notes": "boxes"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.5,
        "Weight": 5.4,
        "Notes": "Chip and candy wrappers"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Glass",
        "Volume": 0.06,
        "Weight": 7.9,
        "Notes": "snapple, alcohol bottles"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.25,
        "Weight": 2.1,
        "Notes": "soda cans, aluminum foil, chipotle cover"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 6.2,
        "Notes": "plastic bags, wrappers"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.6,
        "Weight": 4.0,
        "Notes": "soda bottles, other drink containers, yogurt containers"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.75,
        "Weight": 7.9,
        "Notes": "pillow, socks, jeans, benson cups"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Paperboard Rolls",
        "Volume": 0.01,
        "Weight": 0.01,
        "Notes": ""
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.25,
        "Weight": 8.0,
        "Notes": "wrappers, beauty products"
    },
    {
        "Date": "2016-02-11T00:00:00.000",
        "Building": "Graham",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.25,
        "Weight": 24.2,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.0770028818,
        "Weight": 0.8,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling in Landfill",
        "Substream": "Glass",
        "Volume": 0.001642562,
        "Weight": 0.1,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 0.3657413249,
        "Weight": 3.1,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.3342469983,
        "Weight": 3.1,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Dining Waste (non-edible)",
        "Volume": 0.2285714286,
        "Weight": 3.2,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Food Waste in Landfill",
        "Substream": "Food Waste (edible)",
        "Volume": 0.038247012,
        "Weight": 6.4,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Landfill",
        "Substream": "Non-SCU Coffee Cups",
        "Volume": 0.078125,
        "Weight": 0.5,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 0.3064176245,
        "Weight": 3.5,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Compost in Landfill",
        "Substream": "SCU Coffee Cups",
        "Volume": 0.6805555556,
        "Weight": 4.9,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Landfill",
        "Substream": "Styrofoam",
        "Volume": 0.0164420485,
        "Weight": 0.1,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling in Landfill",
        "Substream": "Aseptic Containers",
        "Volume": 0.04765625,
        "Weight": 0.5,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.353062302,
        "Weight": 2.7,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling in Landfill",
        "Substream": "Cardboard",
        "Volume": 0.1301754386,
        "Weight": 0.8,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.2395539132,
        "Weight": 2.1,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.0192134107,
        "Weight": 0.2,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.0453720508,
        "Weight": 0.5,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.8613782683,
        "Weight": 10.3,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.4514783527,
        "Weight": 11.1,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Compost in Recycling",
        "Substream": "Paper Towels",
        "Volume": 0.0437739464,
        "Weight": 0.5,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "Const Demo Waste",
        "Volume": 0.1273263158,
        "Weight": 4.2,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 0.2484512496,
        "Weight": 1.9,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "Metal",
        "Volume": 0.1537072856,
        "Weight": 1.6,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "Compostable Food Containers",
        "Volume": 0.4744150943,
        "Weight": 4.4,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "Plastic Film",
        "Volume": 0.114073292,
        "Weight": 1.0,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "Glass",
        "Volume": 0.0509194215,
        "Weight": 3.1,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "SCU Coffee Cups",
        "Volume": 0.7916666667,
        "Weight": 5.7,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "Non-SCU Coffee Cups",
        "Volume": 0.140625,
        "Weight": 0.9,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "Paper",
        "Volume": 1.2859936909,
        "Weight": 10.9,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "Cardboard",
        "Volume": 0.5369736842,
        "Weight": 3.3,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Landfill in Recycling",
        "Substream": "Other Landfill",
        "Volume": 0.2759755617,
        "Weight": 3.3,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Compost in Recycling",
        "Substream": "Compostable Dining Waste (non-edible)",
        "Volume": 0.0428571429,
        "Weight": 0.6,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Food Waste in Recycling",
        "Substream": "Food Waste (edible)",
        "Volume": 0.0101593625,
        "Weight": 1.7,
        "Notes": ""
    },
    {
        "Date": "2019-05-08T00:00:00.000",
        "Building": "Learning Commons",
        "Stream": "Recycling",
        "Substream": "Terracycle",
        "Volume": 0.0481268012,
        "Weight": 0.5,
        "Notes": ""
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.1,
        "Weight": 3.3,
        "Notes": "banana peels, whole apple, crackers"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Volume": 0.75,
        "Weight": 3.3,
        "Notes": ""
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.67,
        "Weight": 3.8,
        "Notes": "paper plates, to go containers bags packaging"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.8,
        "Weight": 9.7,
        "Notes": "lint, chip snack bags, to go cups"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.5,
        "Weight": 4.4,
        "Notes": "water botles, external to go cups containers, plastic utensils"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "metal",
        "Volume": 0.13,
        "Weight": 0.5,
        "Notes": "aluminum foil"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "paper",
        "Volume": 0.25,
        "Weight": 1.8,
        "Notes": "magazines, paperboard, paper"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "aseptic containers",
        "Volume": 0.1,
        "Weight": 0.6,
        "Notes": "protein shakes"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Reusables in Landfill",
        "Substream": "reusables",
        "Volume": 0.1,
        "Weight": 4.8,
        "Notes": "purell-unused, condiments, pencils"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.5,
        "Weight": 3.3,
        "Notes": "liners-clear, ziplocks, bar wrappers"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "cardboard",
        "Volume": 0.13,
        "Weight": 1.0,
        "Notes": "corrugated cardboard"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "terracycle",
        "Volume": 0.1,
        "Weight": 1.1,
        "Notes": "power bar wrappers"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Const Demo Waste",
        "Volume": 0.1,
        "Weight": 8.2,
        "Notes": "sand???"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.1,
        "Weight": 2.5,
        "Notes": "wire"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.1,
        "Weight": 11.0,
        "Notes": "water bottles,plastic starbucks"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "cardboard",
        "Volume": 1.0,
        "Weight": 2.3,
        "Notes": ""
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "cardboard",
        "Volume": 1.0,
        "Weight": 10.1,
        "Notes": ""
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "cardboard",
        "Volume": 1.1,
        "Weight": 13.9,
        "Notes": ""
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Recycling",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.1,
        "Weight": 1.4,
        "Notes": "banana peels"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Recycling",
        "Substream": "paper towels",
        "Volume": 0.67,
        "Weight": 3.7,
        "Notes": ""
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Recycling",
        "Substream": "Compostable Food Containers",
        "Volume": 0.25,
        "Weight": 1.9,
        "Notes": "food wrappers"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 9.5,
        "Notes": "water bottles, starbucks, 80-100 oz of wasted water in bottles"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "metal",
        "Volume": 0.33,
        "Weight": 1.6,
        "Notes": "redbull cans, Arizona tea cans, chipotle container, aluminum foil"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Landfill in Recycling",
        "Substream": "Other Landfill",
        "Volume": 0.33,
        "Weight": 2.5,
        "Notes": "food packaging, to go cups, plastic gloves"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 11.5,
        "Notes": "recycle bags, trash liners"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "paper",
        "Volume": 0.75,
        "Weight": 28.4,
        "Notes": "invoices, magazines"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Reusables in Recycling",
        "Substream": "reusables",
        "Volume": 0.13,
        "Weight": 5.3,
        "Notes": "cleaning bottles, lanyards"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "paperboard rolls",
        "Volume": 0.1,
        "Weight": 2.3,
        "Notes": "3 paper towel rolls with paper still on them"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "terracycle",
        "Volume": 0.1,
        "Weight": 1.3,
        "Notes": "protein bars"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "glass",
        "Volume": 0.1,
        "Weight": 1.7,
        "Notes": "lemonade bottle, iced coffee bottle"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "aseptic containers",
        "Volume": 0.13,
        "Weight": 1.5,
        "Notes": "coconut water"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.1,
        "Weight": 1.8,
        "Notes": "coffee grounds"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost",
        "Substream": "paper towels",
        "Volume": 0.9,
        "Weight": 11.1,
        "Notes": "good!"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost",
        "Substream": "Compostable Food Containers",
        "Volume": 0.5,
        "Weight": 2.2,
        "Notes": "compost liners, soiled food containers"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Landfill in Compost",
        "Substream": "Other Landfill",
        "Volume": 0.1,
        "Weight": 0.4,
        "Notes": "plastic wrappers"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "paperboard rolls",
        "Volume": 0.1,
        "Weight": 0.7,
        "Notes": "2 paper towels rolls (empty)"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "Plastic 1-7",
        "Volume": 0.2,
        "Weight": 1.5,
        "Notes": "yogurt conatiner, plastic to go, peanut butter jars"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "Plastic Film",
        "Volume": 0.1,
        "Weight": 0.01,
        "Notes": "3 pieces"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Reusables in Compost",
        "Substream": "reusables",
        "Volume": 0.1,
        "Weight": 0.01,
        "Notes": "1 spoon"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "paper",
        "Volume": 0.1,
        "Weight": 0.5,
        "Notes": "4 pieces"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "terracycle",
        "Volume": 0.1,
        "Weight": 1.2,
        "Notes": "3 wrappers"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "aseptic containers",
        "Volume": 0.1,
        "Weight": 0.6,
        "Notes": "apple juice"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "glass",
        "Volume": 0.1,
        "Weight": 1.9,
        "Notes": "2 glass bottles"
    },
    {
        "Date": "2015-09-01T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "cardboard",
        "Volume": 0.1,
        "Weight": 0.8,
        "Notes": "1 piece of cardboard"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Volume": 1.0,
        "Weight": 13.3,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Volume": 1.0,
        "Weight": 18.2,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Volume": 1.0,
        "Weight": 13.6,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Volume": 1.0,
        "Weight": 11.5,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 7.2,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Volume": 1.0,
        "Weight": 13.5,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "cardboard",
        "Volume": 0.33,
        "Weight": 9.1,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Volume": 0.75,
        "Weight": 11.4,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.13,
        "Weight": 7.2,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.75,
        "Weight": 7.9,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Reusables in Landfill",
        "Substream": "reusables",
        "Volume": 0.33,
        "Weight": 18.6,
        "Notes": "shoes, goggles"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "paper",
        "Volume": 0.25,
        "Weight": 3.1,
        "Notes": "maxipad boxes"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Const Demo Waste",
        "Volume": 0.05,
        "Weight": 0.4,
        "Notes": "wood"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.33,
        "Weight": 1.8,
        "Notes": "trash liners"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 1.0,
        "Weight": 25.7,
        "Notes": "food wrappers, vaccum bags, blue gloves"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 8.7,
        "Notes": "drink bottles, shampoo bottles"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "terracycle",
        "Volume": 0.1,
        "Weight": 1.0,
        "Notes": "energy bar wrappers"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "metal",
        "Volume": 0.1,
        "Weight": 1.7,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.1,
        "Weight": 3.5,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "paperboard rolls",
        "Volume": 0.33,
        "Weight": 1.7,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "glass",
        "Volume": 0.1,
        "Weight": 2.9,
        "Notes": "glass bottle"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 1.25,
        "Weight": 7.2,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "aseptic containers",
        "Volume": 0.1,
        "Weight": 1.4,
        "Notes": "coconut water"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "paper",
        "Volume": 1.0,
        "Weight": 36.5,
        "Notes": "Magazines"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 7.9,
        "Notes": "Water bottle, vitamin water"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "cardboard",
        "Volume": 2.0,
        "Weight": 31.4,
        "Notes": "boxes"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "terracycle",
        "Volume": 0.2,
        "Weight": 1.5,
        "Notes": "lotion"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Reusables in Recycling",
        "Substream": "reusables",
        "Volume": 0.17,
        "Weight": 9.1,
        "Notes": "hangers, flipflops"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Recycling",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.13,
        "Weight": 1.4,
        "Notes": "bread"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Recycling",
        "Substream": "paper towels",
        "Volume": 0.75,
        "Weight": 7.5,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Recycling",
        "Substream": "Compostable Food Containers",
        "Volume": 0.75,
        "Weight": 4.3,
        "Notes": "to go containers"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 7.0,
        "Notes": "bags"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 0.75,
        "Weight": 5.1,
        "Notes": "bottles, plastic trays"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "glass",
        "Volume": 0.08,
        "Weight": 2.1,
        "Notes": "kombucha"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Landfill in Recycling",
        "Substream": "Other Landfill",
        "Volume": 0.33,
        "Weight": 11.7,
        "Notes": "coffee cups, gloves"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "paperboard rolls",
        "Volume": 0.04,
        "Weight": 0.1,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "aseptic containers",
        "Volume": 0.04,
        "Weight": 1.2,
        "Notes": ""
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "metal",
        "Volume": 0.33,
        "Weight": 4.1,
        "Notes": "cans, tinfoil"
    },
    {
        "Date": "2016-09-16T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "paper",
        "Volume": 0.5,
        "Weight": 14.0,
        "Notes": ""
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.1,
        "Weight": 2.8,
        "Notes": "fried chicken, banana peels, sandwich"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 0.33,
        "Weight": 2.9,
        "Notes": ""
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.75,
        "Weight": 5.6,
        "Notes": "gloves, chip bags, styrofoam, feminime products"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.1,
        "Weight": 1.3,
        "Notes": "napkins"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.1,
        "Weight": 3.0,
        "Notes": "clothing"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.1,
        "Weight": 0.9,
        "Notes": "utensils, coffee lids, ping pong balls"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 0.1,
        "Weight": 0.5,
        "Notes": "paper, paperboard"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.1,
        "Weight": 0.5,
        "Notes": "foil"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.1,
        "Weight": 0.0,
        "Notes": "energy bar, wrappers"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Paperboard Rolls",
        "Volume": 0.1,
        "Weight": 0.2,
        "Notes": "toilet paper rolls"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Aseptic Containers",
        "Volume": 0.1,
        "Weight": 1.1,
        "Notes": ""
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.1,
        "Weight": 0.6,
        "Notes": "cord"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.5,
        "Weight": 2.1,
        "Notes": "liners"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Const Demo Waste",
        "Volume": 0.05,
        "Weight": 0.05,
        "Notes": "PVC pipe"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 4.9,
        "Notes": "water bottles, shampoo bottles, cold drink cups"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 8.0,
        "Notes": "water bottles"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Metal",
        "Volume": 0.33,
        "Weight": 0.8,
        "Notes": "cans"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Recycling",
        "Substream": "Compostable Food Containers",
        "Volume": 0.25,
        "Weight": 1.5,
        "Notes": "smoothie container, muffin wrapper, napkin"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Recycling",
        "Substream": "Paper Towels",
        "Volume": 0.33,
        "Weight": 2.4,
        "Notes": ""
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Landfill in Recycling",
        "Substream": "Other Landfill",
        "Volume": 0.33,
        "Weight": 3.0,
        "Notes": "candy wrappers, gloves, powerade cups"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Plastic Film",
        "Volume": 0.75,
        "Weight": 4.0,
        "Notes": "liners, plastic bags"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Paperboard Rolls",
        "Volume": 0.25,
        "Weight": 0.2,
        "Notes": "badminton birdie containers"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Aseptic Containers",
        "Volume": 0.1,
        "Weight": 1.3,
        "Notes": ""
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Paper",
        "Volume": 0.5,
        "Weight": 6.5,
        "Notes": "office paper"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Terracycle",
        "Volume": 0.1,
        "Weight": 0.3,
        "Notes": "energy bar wrapper"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Reusables in Recycling",
        "Substream": "Reusables",
        "Volume": 0.1,
        "Weight": 0.7,
        "Notes": "smoothie container, stickers"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling",
        "Substream": "Cardboard",
        "Volume": 1.0,
        "Weight": 12.1,
        "Notes": "flattened boxes"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Recycling",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.05,
        "Weight": 0.8,
        "Notes": "banana peel"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost",
        "Substream": "Paper Towels",
        "Volume": 1.0,
        "Weight": 13.2,
        "Notes": ""
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost",
        "Substream": "Paper Towels",
        "Volume": 1.0,
        "Weight": 17.7,
        "Notes": ""
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost",
        "Substream": "Paper Towels",
        "Volume": 1.0,
        "Weight": 13.5,
        "Notes": ""
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "Paper",
        "Volume": 0.1,
        "Weight": 0.4,
        "Notes": "paper bags"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.1,
        "Weight": 8.3,
        "Notes": "banana peel, chips, apple core"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 9.1,
        "Notes": "food plates, clam shells"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Landfill in Compost",
        "Substream": "Other Landfill",
        "Volume": 0.33,
        "Weight": 1.8,
        "Notes": "plates, chip bag, powerade cups"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Reusables in Compost",
        "Substream": "Reusables",
        "Volume": 0.0183010432,
        "Weight": 0.4,
        "Notes": "socks, rubber bands"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "Plastic 1-7",
        "Volume": 0.1,
        "Weight": 0.4,
        "Notes": "water bottles, coffee lids"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "Terracycle",
        "Volume": 0.05,
        "Weight": 0.7,
        "Notes": "wrappers"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "Plastic Film",
        "Volume": 0.1,
        "Weight": 0.7,
        "Notes": "ziploc, togo"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "Metal",
        "Volume": 0.1,
        "Weight": 0.5,
        "Notes": "foil"
    },
    {
        "Date": "2016-11-14T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Compost",
        "Substream": "Paperboard Rolls",
        "Volume": 0.05,
        "Weight": 0.05,
        "Notes": "2 pt rolls"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Malley",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.5,
        "Weight": 6.3,
        "Notes": "soiled bags, gloves"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Malley",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.0,
        "Weight": 0.01,
        "Notes": "Only coffee cups"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.1,
        "Weight": 2.9,
        "Notes": "bagel chips"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 0.1,
        "Weight": 0.1,
        "Notes": "reciepts"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Paperboard Rolls",
        "Volume": 0.1,
        "Weight": 1.6,
        "Notes": "toilet paper rolls"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.5,
        "Weight": 1.8,
        "Notes": "Liners"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.1,
        "Weight": 1.0,
        "Notes": "energy bar wraapers"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Malley",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.33,
        "Weight": 6.6,
        "Notes": "towels"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.0,
        "Weight": 0.01,
        "Notes": "tin foil"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Malley",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.25,
        "Weight": 3.5,
        "Notes": "coffee sleeves"
    },
    {
        "Date": "2017-10-04T00:00:00.000",
        "Building": "Malley",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.25,
        "Weight": 1.5,
        "Notes": ""
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.75,
        "Weight": 6.2,
        "Notes": "napkins, tissues, compostable containers"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 7.4,
        "Notes": "red solo cups, big gulps, plastic bottles"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 1.0,
        "Weight": 7.9,
        "Notes": "paperboard, paper, receipts"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 5.2,
        "Notes": "pizza boxes"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 7.3,
        "Notes": "water bottles, drink bottles, benson to-go cups"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 6.4,
        "Notes": "to go containers, paper wrappers"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 1.0,
        "Weight": 6.0,
        "Notes": "grocery bags, cardboard bozes"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.5,
        "Weight": 2.7,
        "Notes": "to go containers, paper bags, napkins"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Aseptic Containers",
        "Volume": 0.05,
        "Weight": 1.0,
        "Notes": "milk carton"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 33.2,
        "Notes": "whole bag of oranges"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 0.75,
        "Weight": 5.9,
        "Notes": ""
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 0.05,
        "Weight": 1.1,
        "Notes": "paper bags"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.25,
        "Weight": 2.7,
        "Notes": "bags, bubble wrap, clothes"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Landfill",
        "Substream": "Styrofoam",
        "Volume": 0.25,
        "Weight": 1.5,
        "Notes": "packaging"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 1.0,
        "Weight": 9.8,
        "Notes": "food wrappers, makeup remover pads, snack bags"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.25,
        "Weight": 3.8,
        "Notes": "energy drinks, tea"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Cardboard",
        "Volume": 1.0,
        "Weight": 6.4,
        "Notes": "mailboxes, cellar boxes (Bulk drinks)"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.13,
        "Weight": 1.0,
        "Notes": "coffee cups"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Glass",
        "Volume": 0.25,
        "Weight": 15.6,
        "Notes": "yerba mate, alcohol bottles"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.75,
        "Weight": 3.8,
        "Notes": "water bottles, utensils, plastic containers"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.05,
        "Weight": 0.05,
        "Notes": ""
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 7.8,
        "Notes": "trash bags, shopping bags, clear wrappers"
    },
    {
        "Date": "2018-02-09T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.05,
        "Weight": 0.4,
        "Notes": "2 batteries"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Aseptic Tetra-Pak",
        "Volume": 0.0,
        "Weight": 0.0,
        "Notes": "1 tetrapak"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Compost in Landfill",
        "Substream": "BPI Certified Compostable To-Go Ware",
        "Volume": 0.7,
        "Weight": 7.6,
        "Notes": "benson to go ware"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Cardboard",
        "Volume": 1.0,
        "Weight": 7.2,
        "Notes": "boxes"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Cardboard",
        "Volume": 0.3,
        "Weight": 3.1,
        "Notes": "boxes"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Electronic & Universal Waste",
        "Volume": 0.0,
        "Weight": 0.0,
        "Notes": "2 vapes, 1 breaker"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Film Plastic",
        "Volume": 0.5,
        "Weight": 2.4,
        "Notes": "plastic bags"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Compost in Landfill",
        "Substream": "Food Organic Waste",
        "Volume": 0.5,
        "Weight": 30.7,
        "Notes": "produce"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Glass",
        "Volume": 0.3,
        "Weight": 21.3,
        "Notes": "wine bottles"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal & Aluminum",
        "Volume": 0.5,
        "Weight": 3.4,
        "Notes": "beer cans"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Landfill",
        "Substream": "Misc. Landfill",
        "Volume": 1.0,
        "Weight": 9.2,
        "Notes": "food soiled non compostable containers"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Landfill",
        "Substream": "Misc. Landfill",
        "Volume": 1.0,
        "Weight": 35.1,
        "Notes": "chip bags"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Landfill",
        "Substream": "Misc. Landfill",
        "Volume": 0.5,
        "Weight": 5.9,
        "Notes": "gloves"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Compost in Landfill",
        "Substream": "Napkins Paper Towels",
        "Volume": 0.3,
        "Weight": 7.1,
        "Notes": "paper towels"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 1.0,
        "Weight": 2.1,
        "Notes": "paper bags"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 0.5,
        "Weight": 3.7,
        "Notes": "paper bags"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Paperboard",
        "Volume": 1.0,
        "Weight": 6.8,
        "Notes": "food packaging"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastics #1-7",
        "Volume": 1.0,
        "Weight": 7.9,
        "Notes": "water bottles"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastics #1-7",
        "Volume": 1.0,
        "Weight": 6.4,
        "Notes": "plastic bottles; plastic food containers"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastics #1-7",
        "Volume": 1.0,
        "Weight": 4.9,
        "Notes": "bottles"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.25,
        "Weight": 4.9,
        "Notes": "clothing"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Landfill",
        "Substream": "Styrofoam",
        "Volume": 0.0,
        "Weight": 0.0,
        "Notes": "5 pieces of styrofoam"
    },
    {
        "Date": "2023-03-14T00:00:00.000",
        "Building": "Swig",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.0,
        "Weight": 0.0,
        "Notes": "1 britta filter"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 10.1,
        "Notes": "clam shell containers, pizza boxes, soiled paper"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.5,
        "Weight": 29.5,
        "Notes": "bread ends, salami, mushrooms"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 7.7,
        "Notes": "external clamshells, beverage containers, chicken containers"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Paperboard Rolls",
        "Volume": 0.13,
        "Weight": 0.8,
        "Notes": ""
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 0.75,
        "Weight": 5.3,
        "Notes": "trader joes bags, food boxes, coupons"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Cardboard",
        "Volume": 1.0,
        "Weight": 5.0,
        "Notes": "klenex boxes, strawberry flat"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 5.9,
        "Notes": "food wrapping, soiler paper, cups"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 6.2,
        "Notes": "ziplocs, plastic bags"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 1.0,
        "Weight": 9.0,
        "Notes": "food packaging, styrofoam, coffee cups"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Aseptic Containers",
        "Volume": 0.06,
        "Weight": 1.5,
        "Notes": "milk cartons"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.33,
        "Weight": 3.6,
        "Notes": "cans, foil, monster drinks"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Glass",
        "Volume": 0.33,
        "Weight": 19.8,
        "Notes": "alcohol bottles, juice, soda cans"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.03,
        "Weight": 0.1,
        "Notes": "batteries, phone charger"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.04,
        "Weight": 1.7,
        "Notes": "bar wrappers, shampoo, deoderant, makeup"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.03,
        "Weight": 0.1,
        "Notes": "tupperware"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 6.7,
        "Notes": "cookie trays, powerade bottles, water bottles"
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 23.8,
        "Notes": ""
    },
    {
        "Date": "2016-05-04T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 0.25,
        "Weight": 1.1,
        "Notes": ""
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 6.5,
        "Notes": "bottles, fruit containers, to go cups, lots of packaged foods"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 1.0,
        "Weight": 6.2,
        "Notes": "store bags ,frozen food boxes,office papers, packaged foods"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.75,
        "Weight": 6.3,
        "Notes": "ice cream container, food packaging,cleaning wipes, easy disposable"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 5.5,
        "Notes": "trash bags,food wrapping, bread bags"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 43.2,
        "Notes": "moldy food, Lots of waste"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 0.75,
        "Weight": 4.5,
        "Notes": "food containers, solo cups"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 0.67,
        "Weight": 3.9,
        "Notes": "office paper, store bags"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 6.2,
        "Notes": "produce packaging, food containers"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 0.9,
        "Weight": 11.4,
        "Notes": ""
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 11.9,
        "Notes": "plates, food containers, q-tips"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Glass",
        "Volume": 0.1,
        "Weight": 8.3,
        "Notes": "bottles"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Cardboard",
        "Volume": 0.75,
        "Weight": 3.1,
        "Notes": "corrugated"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.67,
        "Weight": 2.7,
        "Notes": "bags"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.33,
        "Weight": 2.8,
        "Notes": "foil, cans"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.1,
        "Weight": 0.5,
        "Notes": "wrappers"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.1,
        "Weight": 0.1,
        "Notes": "cords"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Aseptic Containers",
        "Volume": 0.1,
        "Weight": 0.1,
        "Notes": "shampoo"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.1,
        "Weight": 10.2,
        "Notes": "socks, laces, icepack"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.5,
        "Weight": 2.0,
        "Notes": "plates, egg cartons"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 0.1,
        "Weight": 0.7,
        "Notes": "napkins"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.75,
        "Weight": 3.2,
        "Notes": "junkfood, packaging, wrappers"
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 30.7,
        "Notes": ""
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.1,
        "Weight": 0.8,
        "Notes": ""
    },
    {
        "Date": "2017-03-13T00:00:00.000",
        "Building": "University Villas",
        "Stream": "Recycling in Landfill",
        "Substream": "Paperboard Rolls",
        "Volume": 0.1,
        "Weight": 0.8,
        "Notes": ""
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 8.7,
        "Notes": "water bottles, utensils"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 1.0,
        "Weight": 10.2,
        "Notes": "take out containers, paper bags, napkins"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 1.0,
        "Weight": 16.0,
        "Notes": ""
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 1.0,
        "Weight": 19.2,
        "Notes": "paper, paperboard, paper food boxes"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.33,
        "Weight": 33.5,
        "Notes": "food"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 1.0,
        "Weight": 8.8,
        "Notes": ""
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 1.0,
        "Weight": 11.7,
        "Notes": ""
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.75,
        "Weight": 7.5,
        "Notes": ""
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.1,
        "Weight": 5.4,
        "Notes": ""
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.33,
        "Weight": 0.9,
        "Notes": "chip bags, energy bars"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Food Containers",
        "Volume": 0.75,
        "Weight": 10.5,
        "Notes": "coffee cup sleeves, benson containers, food bags"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 1.0,
        "Weight": 19.1,
        "Notes": "garbage bags"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Paperboard Rolls",
        "Volume": 0.25,
        "Weight": 2.1,
        "Notes": ""
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.1,
        "Weight": 1.2,
        "Notes": "tetrapack, chewy bars"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Landfill",
        "Substream": "Styrofoam",
        "Volume": 0.1,
        "Weight": 0.1,
        "Notes": "styrofoam plates"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 10.3,
        "Notes": "utensils, beverage and food containers, coffee lids"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.25,
        "Weight": 16.3,
        "Notes": "food"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 0.25,
        "Weight": 3.9,
        "Notes": ""
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Glass",
        "Volume": 0.1,
        "Weight": 2.1,
        "Notes": "3 glass beverage containers"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.1,
        "Weight": 0.3,
        "Notes": "5 batteries"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 1.0,
        "Weight": 8.1,
        "Notes": "office paper, receipts, paper ream packaging"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.25,
        "Weight": 2.1,
        "Notes": "cans, foil"
    },
    {
        "Date": "2018-01-26T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 0.25,
        "Weight": 4.9,
        "Notes": ""
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "Food Waste (edible)",
        "Volume": 0.3,
        "Weight": 50.2,
        "Notes": "Mix of food"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "Misc. Meal Waste",
        "Volume": 0.25,
        "Weight": 14.8,
        "Notes": "Peels, a plant"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "SCU Coffee Cups",
        "Volume": 0.75,
        "Weight": 5.4,
        "Notes": ""
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "Compostable Dining Waste (non-edible)",
        "Volume": 1.5,
        "Weight": 21.0,
        "Notes": "Plates, Benson containers"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": 1.0,
        "Weight": 14.6,
        "Notes": ""
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Aseptic Containers",
        "Volume": 0.1,
        "Weight": 0.6,
        "Notes": "Milk container"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Terracycle",
        "Volume": 0.1,
        "Weight": 0.2,
        "Notes": "Energy bar wrappers"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Const Demo Waste",
        "Volume": 0.1,
        "Weight": 3.1,
        "Notes": ""
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Reusables in Landfill",
        "Substream": "Reusables",
        "Volume": 0.3,
        "Weight": 8.9,
        "Notes": "Resuable water bottles"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic 1-7",
        "Volume": 1.0,
        "Weight": 6.4,
        "Notes": "Food packaging"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Cardboard",
        "Volume": 0.5,
        "Weight": 0.9,
        "Notes": "Food packaging"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "E- Universal Waste",
        "Volume": 0.05,
        "Weight": 0.2,
        "Notes": "Batteries"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Metal",
        "Volume": 0.5,
        "Weight": 1.4,
        "Notes": "Tin foil, cans"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Plastic Film",
        "Volume": 0.1,
        "Weight": 0.1,
        "Notes": "Grocery bags"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": 0.5,
        "Weight": 4.6,
        "Notes": "School paper"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Recycling in Landfill",
        "Substream": "Glass",
        "Volume": 0.1,
        "Weight": 0.3,
        "Notes": "Bottles"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Landfill",
        "Substream": "Styrofoam",
        "Volume": 0.1,
        "Weight": 0.2,
        "Notes": ""
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Landfill",
        "Substream": "Non-SCU Coffee Cups",
        "Volume": 0.75,
        "Weight": 4.8,
        "Notes": "Starbucks"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 1.0,
        "Weight": 11.9,
        "Notes": "Food packaging"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 1.0,
        "Weight": 14.7,
        "Notes": "Food packaging"
    },
    {
        "Date": "2020-01-21T00:00:00.000",
        "Building": "Vari Hall and Lucas Hall",
        "Stream": "Landfill",
        "Substream": "Other Landfill",
        "Volume": 1.0,
        "Weight": 13.2,
        "Notes": "Food packaging"
    },
    {
        "Date": "2019-11-01T00:00:00.000",
        "Building": "Dunne",
        "Stream": "Recycling",
        "Substream": "SCU Coffee Cups",
        "Volume": "",
        "Weight": 4,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Landfill in Recycling",
        "Substream": "Other Landfill",
        "Volume": "",
        "Weight": 0.7,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Compost in Recycling",
        "Substream": "paper towels",
        "Volume": "",
        "Weight": 1.5,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Compost in Recycling",
        "Substream": "paper towels",
        "Volume": "",
        "Weight": 0.1,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Recycling",
        "Substream": "SCU Coffee Cups",
        "Volume": "",
        "Weight": 0.6,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Recycling",
        "Substream": "paper",
        "Volume": "",
        "Weight": 5.3,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Compost in Recycling",
        "Substream": "Compostable Food Containers",
        "Volume": "",
        "Weight": 1.9,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Landfill in Recycling",
        "Substream": "Styrofoam",
        "Volume": "",
        "Weight": 1.1,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Compost in Recycling",
        "Substream": "food waste",
        "Volume": "",
        "Weight": 0.4,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Compost",
        "Substream": "food waste",
        "Volume": "",
        "Weight": 2.9,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Compost",
        "Substream": "food waste",
        "Volume": "",
        "Weight": 6,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": "",
        "Weight": 3.3,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Compost in Landfill",
        "Substream": "Paper Towels",
        "Volume": "",
        "Weight": 2.4,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Landfill",
        "Substream": "styrofoam",
        "Volume": "",
        "Weight": 2.8,
        "Notes": ""
    },
    {
        "Date": "2019-11-01",
        "Building": "Dunne",
        "Stream": "Recycling in Landfill",
        "Substream": "Paper",
        "Volume": "",
        "Weight": 1.1,
        "Notes": ""
    },
    {
        "Date": "2019-05-10",
        "Building": "McWalsh",
        "Stream": "Recycling",
        "Substream": "",
        "Volume": "",
        "Weight": 11,
        "Notes": "Bottles, containers"
    },
    {
        "Date": "2019-05-10",
        "Building": "McWalsh",
        "Stream": "Compost in Recycling",
        "Substream": "compostable food containers",
        "Volume": "",
        "Weight": 2.6,
        "Notes": "Cups, containers"
    },
    {
        "Date": "2019-05-10",
        "Building": "McWalsh",
        "Stream": "Landfill in Recycling",
        "Substream": "other landfill",
        "Volume": "",
        "Weight": 1.5,
        "Notes": ""
    },
    {
        "Date": "2019-05-10",
        "Building": "McWalsh",
        "Stream": "Compost in Recycling",
        "Substream": "food waste (edible)",
        "Volume": "",
        "Weight": 1.4,
        "Notes": "Chips, burrito"
    },
    {
        "Date": "2019-05-10",
        "Building": "McWalsh",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Volume": "",
        "Weight": 3.7,
        "Notes": "Paper towels, napkins, containers, SCU dining"
    },
    {
        "Date": "2019-05-10",
        "Building": "McWalsh",
        "Stream": "Recycling in Landfill",
        "Substream": "aseptic containers",
        "Volume": "",
        "Weight": 4.7,
        "Notes": "Cutlery, cups, cans"
    },
    {
        "Date": "2019-05-10",
        "Building": "McWalsh",
        "Stream": "Landfill",
        "Substream": "",
        "Volume": "",
        "Weight": 4,
        "Notes": "Black cutlery, to go containers"
    },
    {
        "Date": "2019-05-10",
        "Building": "McWalsh",
        "Stream": "Compost in Landfill",
        "Substream": "food waste",
        "Volume": "",
        "Weight": 10.7,
        "Notes": "Entite containers of food, restaurant, leftover event food"
    },
    {
        "Date": "2019-05-10",
        "Building": "McWalsh",
        "Stream": "Compost",
        "Substream": "",
        "Volume": "",
        "Weight": 14,
        "Notes": "Diningware, napkins, paper towels"
    },
    {
        "Date": "2019-05-10",
        "Building": "McWalsh",
        "Stream": "Recycling in Compost",
        "Substream": "metal",
        "Volume": "",
        "Weight": 0.5,
        "Notes": "Aluminum, bottles"
    },
    {
        "Date": "2019-05-10",
        "Building": "McWalsh",
        "Stream": "Compost",
        "Substream": "",
        "Volume": "",
        "Weight": 12.8,
        "Notes": "Rice, burrito"
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Recycling",
        "Substream": "",
        "Weight": 5.4,
        "Notes": "plastic bottles",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Recycling",
        "Substream": "",
        "Weight": 2.8,
        "Notes": "paper",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Recycling",
        "Substream": "",
        "Weight": 3.1,
        "Notes": "bottles, cans",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Landfill in Recycling",
        "Substream": "non-scu coffee cups",
        "Weight": 0.5,
        "Notes": "food wrappers, coffee cups",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Recycling",
        "Substream": "",
        "Weight": 3.7,
        "Notes": "plastic bottles, paper",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Compost in Recycling",
        "Substream": "scu coffee cups",
        "Weight": 0.8,
        "Notes": "coffee cups, tissues",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Compost",
        "Substream": "",
        "Weight": 5.3,
        "Notes": "meat, cheese",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Compost",
        "Substream": "",
        "Weight": 0.4,
        "Notes": "noodles",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Compost",
        "Substream": "",
        "Weight": 2.6,
        "Notes": "paper towels, food boxes",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Compost",
        "Substream": "",
        "Weight": 1.4,
        "Notes": "rice",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Recycling in Compost",
        "Substream": "aseptic containers",
        "Weight": 2.4,
        "Notes": "cups, containers",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Compost in Landfill",
        "Substream": "food waste",
        "Weight": 1.6,
        "Notes": "chips, salad",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Landfill",
        "Substream": "other landfill",
        "Weight": 0.4,
        "Notes": "food wrappers",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Compost in Landfill",
        "Substream": "paper towels",
        "Weight": 0.6,
        "Notes": "tissues",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Recycling in Landfill",
        "Substream": "styrofoam",
        "Weight": 0.8,
        "Notes": "plastic bottles",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Landfill",
        "Substream": "",
        "Weight": 0.6,
        "Notes": "plastic forks, wrappers",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Recycling in Landfill",
        "Substream": "glass",
        "Weight": 1.1,
        "Notes": "mason jar",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Compost in Landfill",
        "Substream": "food waste",
        "Weight": 0.4,
        "Notes": "flowers",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Compost in Landfill",
        "Substream": "food waste",
        "Weight": 1.1,
        "Notes": "meat, popcorn",
        "Volume": ""
    },
    {
        "Date": "2019-03-01",
        "Building": "Campisi",
        "Stream": "Landfill",
        "Substream": "",
        "Weight": 1.7,
        "Weight": "",
        "Volume": ""
    }
];

// const colorMapping = {
//     'Compostable Food Containers': ['rgba(0, 128, 0, 0.8)', 'rgba(0, 128, 0, 1)'], // Green
//     'Misc. Meal Waste': ['rgba(34, 139, 34, 0.8)', 'rgba(34, 139, 34, 1)'], // Dark Green
//     'Plastic Film': ['rgba(255, 215, 0, 0.8)', 'rgba(255, 215, 0, 1)'], // Gold
//     'metal': ['rgba(192, 192, 192, 0.8)', 'rgba(192, 192, 192, 1)'], // Silver
//     'Plastic 1-7': ['rgba(135, 206, 250, 0.8)', 'rgba(135, 206, 250, 1)'], // Light Blue
//     'terracycle': ['rgba(255, 69, 0, 0.8)', 'rgba(255, 69, 0, 1)'], // Orange Red
//     'paper': ['rgba(210, 105, 30, 0.8)', 'rgba(210, 105, 30, 1)'], // Chocolate
//     'styrofoam': ['rgba(255, 20, 147, 0.8)', 'rgba(255, 20, 147, 1)'], // Deep Pink
//     'paper towels': ['rgba(255, 228, 181, 0.8)', 'rgba(255, 228, 181, 1)'], // Moccasin
//     'glass': ['rgba(0, 0, 255, 0.8)', 'rgba(0, 0, 255, 1)'], // Blue
//     'Other Landfill': ['rgba(128, 128, 128, 0.8)', 'rgba(128, 128, 128, 1)'], // Gray
//     'aseptic containers': ['rgba(72, 61, 139, 0.8)', 'rgba(72, 61, 139, 1)'], // Dark Slate Blue
//     'cardboard': ['rgba(139, 69, 19, 0.8)', 'rgba(139, 69, 19, 1)'], // Saddle Brown
//     'reusables': ['rgba(255, 140, 0, 0.8)', 'rgba(255, 140, 0, 1)'], // Dark Orange
//     'Const Demo Waste': ['rgba(128, 0, 0, 0.8)', 'rgba(128, 0, 0, 1)'], // Maroon
//     'E- Universal Waste': ['rgba(75, 0, 130, 0.8)', 'rgba(75, 0, 130, 1)'], // Indigo
//     'Plastic 1-7': ['rgba(70, 130, 180, 0.8)', 'rgba(70, 130, 180, 1)'], // Steel Blue
//     // Add more mappings as needed
// };
// const colorMapping = {
//     // Compostable Items (Green Shades)
//     'Compostable Food Containers': ['rgba(0, 100, 0, 0.8)', 'rgba(0, 100, 0, 1)'], // Green
//     'Compostable Dining Waste (non-edible)': ['rgba(0, 100, 0, 0.8)', 'rgba(0, 100, 0, 1)'],
//     'Misc. Meal Waste': ['rgba(0, 100, 0, 0.8)', 'rgba(0, 100, 0, 1)'], // Dark Green
//     'food waste (edible)': ['rgba(0, 100, 0, 0.8)', 'rgba(0, 100, 0, 1)'],
//     'Food Waste (edible)': ['rgba(0, 100, 0, 0.8)', 'rgba(0, 100, 0, 1)'], // Darker Green
//     'paper towels': ['rgba(0, 100, 0, 0.8)', 'rgba(0, 100, 0, 1)'],
//     'Paper Towels': ['rgba(0, 100, 0, 0.8)', 'rgba(0, 100, 0, 1)'], // Light Green
//     'compostable dining waste (non-edible)': ['rgba(0, 100, 0, 0.8)', 'rgba(0, 100, 0, 1)'], // Medium Green
//     'SCU Coffee Cups': ['rgba(0, 100, 0, 0.8)', 'rgba(0, 100, 0, 1)'],

//     // Recyclable Items (Blue Shades)
//     'Plastic Film': ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 1)'], // Steel Blue
//     'metal': ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 1)'], // Dodger Blue
//     'Plastic 1-7': ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 1)'], // Cornflower Blue
//     'paper': ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 1)'], // Royal Blue
//     'glass': ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 1)'], // Blue
//     'cardboard': ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 1)'], // Light Blue
//     'terracycle': ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 1)'], // Sky Blue
//     'aseptic containers': ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 1)'], // Deep Sky Blue
//     'E- Universal Waste': ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 1)'], // Midnight Blue
//     'paperboard rolls': ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 1)'],

//     // Landfill Items (Black/Gray Shades)
//     'styrofoam': ['rgba(128, 128, 128, 0.8)', 'rgba(128, 128, 128, 1)'], // Dark Gray
//     'Other Landfill': ['rgba(128, 128, 128, 0.8)', 'rgba(128, 128, 128, 1)'], // Gray
//     'Non-SCU Coffee Cups': ['rgba(128, 128, 128, 0.8)', 'rgba(128, 128, 128, 1)'], // Dark Slate Gray
//     'Const Demo Waste': ['rgba(128, 128, 128, 0.8)', 'rgba(128, 128, 128, 1)'], // Dim Gray

//     // other
//     'reusables': ['rgba(255, 215, 0, 0.8)', 'rgba(255, 215, 0, 1)'] // Gold
// };
const colorMapping = {
    // Compostable Items (Green Shades)
    "compostable food containers": ["rgba(0, 100, 0, 0.8)", "rgba(0, 100, 0, 1)"],
    "compostable dining waste (non-edible)": ["rgba(0, 100, 0, 0.8)", "rgba(0, 100, 0, 1)"],
    "misc. meal waste": ["rgba(0, 100, 0, 0.8)", "rgba(0, 100, 0, 1)"],
    "food waste (edible)": ["rgba(0, 100, 0, 0.8)", "rgba(0, 100, 0, 1)"],
    "food waste": ["rgba(0, 100, 0, 0.8)", "rgba(0, 100, 0, 1)"],
    "paper towels": ["rgba(0, 100, 0, 0.8)", "rgba(0, 100, 0, 1)"],
    "scu coffee cups": ["rgba(0, 100, 0, 0.8)", "rgba(0, 100, 0, 1)"],

    // Recyclable Items (Blue Shades)
    "plastic film": ["rgba(54, 162, 235, 0.8)", "rgba(54, 162, 235, 1)"],
    "metal": ["rgba(54, 162, 235, 0.8)", "rgba(54, 162, 235, 1)"],
    "plastic 1-7": ["rgba(54, 162, 235, 0.8)", "rgba(54, 162, 235, 1)"],
    "paper": ["rgba(54, 162, 235, 0.8)", "rgba(54, 162, 235, 1)"],
    "glass": ["rgba(54, 162, 235, 0.8)", "rgba(54, 162, 235, 1)"],
    "cardboard": ["rgba(54, 162, 235, 0.8)", "rgba(54, 162, 235, 1)"],
    "terracycle": ["rgba(54, 162, 235, 0.8)", "rgba(54, 162, 235, 1)"],
    "aseptic containers": ["rgba(54, 162, 235, 0.8)", "rgba(54, 162, 235, 1)"],
    "e- universal waste": ["rgba(54, 162, 235, 0.8)", "rgba(54, 162, 235, 1)"],
    "paperboard rolls": ["rgba(54, 162, 235, 0.8)", "rgba(54, 162, 235, 1)"],

    // Landfill Items (Black/Gray Shades)
    "styrofoam": ["rgba(128, 128, 128, 0.8)", "rgba(128, 128, 128, 1)"],
    "other landfill": ["rgba(128, 128, 128, 0.8)", "rgba(128, 128, 128, 1)"],
    "non-scu coffee cups": ["rgba(128, 128, 128, 0.8)", "rgba(128, 128, 128, 1)"],
    "const demo waste": ["rgba(128, 128, 128, 0.8)", "rgba(128, 128, 128, 1)"],

    // Other
    "reusables": ["rgba(255, 215, 0, 0.8)", "rgba(255, 215, 0, 1)"] // Gold
};

function getWasteData() {
    return wasteData;
}

function filterDataByBuilding(wasteData, buildingName) {
    return wasteData.filter(item => item.Building.toLowerCase() === buildingName.toLowerCase());
}

function aggregateDataByStream(wasteData, streamTypes) {
    const aggregatedData = {};
    streamTypes.forEach(stream => {
        const filteredData = wasteData.filter(item => item.Stream.toLowerCase().endsWith(stream.toLowerCase()));
        filteredData.forEach(item => {
            if (!aggregatedData[item.Stream]) {
                aggregatedData[item.Stream] = {};
            }
            if (!aggregatedData[item.Stream][item.Substream]) {
                aggregatedData[item.Stream][item.Substream] = 0;
            }
            aggregatedData[item.Stream][item.Substream] += item.Weight;
        });
    });
    return aggregatedData;
}