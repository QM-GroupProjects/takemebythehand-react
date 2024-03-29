//Current number of locations = 28

//Refer to here to understand my reasoning for certain inclusions.

//When it came to pricing, ticket based admission takes the price for an ADULT ticket (unless stated otherwise). This is because an adult is most likely going to be the one using the app, so prices should be relevant to them. If you see "Menu", That typically means that it's for a restaurant, as the price will greatly differ per person.

//Moods and emotions are up for change, and work off of a rating system between 1 to 10. The list is as follows: adventurous, sad, tired, hungry, creative and romantic.

//This is the function template for adding a new location, copy and paste if you want to add more.

	//"lat":, "long":,
	//"mood":{""},
	//"description":"",
	//"weekdays":"",
	//"weekends":"",
	//"price":"",
	//"picture":"",
	//"isVisited":"", "isLiked":"",

let places =
{
	"central":
	[{
		"hydepark": 
		{
			"lat":51.5073, "long":0.1657, 
			"mood":{"adventurous":7, "romantic":5}, 
			"description":"Set right in the heart of London, Hyde Park offers both world-class events and concerts together with plenty of quiet places to relax and unwind.",
			"weekdays":"5.00-12.00",
			"weekends":"5.00-12.00",
			"price":"Free",
			"picture":"/res/img/places/Hyde_Park.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"sohosquaregardens": 
		{
			"lat":51.5146, "long":0.1313,
			"mood":{"adventurous":8},
			"description":"This very popular London Square is located at the heart of the centre of Soho and provides a small oasis behind Oxford Street. It has a traditional layout with a central mock-Tudor building. The half-timbered black and white building in the centre which was built in 1895, refurbished in 2009 and is now used by the gardeners. The square is largely paved, interspersed with four symmetrical lawn areas, with mature trees and shrub planting.",
			"weekdays":"0.00-23.59",
			"weekends":"0.00-23.59",
			"price":"Free",
			"picture":"/res/img/places/Soho_Gardens.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"thelondoneye": 
		{
			"lat":51.5033, "long":0.1195,
			"mood":{"adventurous":6, "romantic":8, "creative":6},
			"description":"At 135m, Coca-Cola London Eye is the world’s largest cantilevered observation wheel. It was conceived and designed by Marks Barfield Architects and was launched in 2000. It is also the UK's most popular paid attraction.",
			"weekdays":"11.00-18.00",
			"weekends":"10.00-20.30",
			"price":"25.20",
			"picture":"/res/img/places/London_Eye.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"westminster": 
		{
			"lat":51.4975, "long":0.1357,
			"mood":{"creative":8},
			"description":"Westminster is the centre of British politics, containing both the House of Lords, and the House of Commons. Attached to the palace is Westminster Abbey, a location used for royal weddings and coronations. A famous landmark also located in Westminster is Big Ben, which is actually the bell, rather than the tower.",
			"weekdays":"9.30-15.30",
			"weekends":"9.30-13.30",
			"price":"20.00",
			"picture":"/res/img/places/WestMinster_Photo.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"thelondondungeon": 
		{
			"lat":51.5025, "long":0.1188,
		 	"mood":{"adventurous":7},
		 	"description":"The London Dungeon is a uniquely thrilling attraction that will whisk you way back to the capital's most perilous past. See, hear, feel and (ahem!) smell the chillingly amusing characters of the 'bad old days' as they come to life before you. Will you lose yourself in fear or in mirth? Whichever way, it's not looking good for your underwear!",
		 	"weekdays":"10.00-16.00",
		 	"weekends":"10.00-18.00", 
		 	"price":"30.00", 
		 	"picture":"/res/img/places/London_Dungeon.jpg",
		 	"isVisited":"No", "isLiked":"No",
		},

		"lyceumtheatre": 
		{
			"lat":51.5116, "long":0.1200,
			"mood":{"adventurous":7, "creative":3},
			"description":"The home of the Lion King theatre production, the Lyceum has been around since 1765, and is one of the UK's most prominent theatres. The current Lyceum Theatre is an amalgamation of styles and eras. The ‘English Opera House’ as the Lyceum was then known burnt down in 1830 and construction of the new ‘Theatre Royal Lyceum & English Opera House’ began in 1834, the only part of the original building left is the main portico pillared entrance.",
			"weekdays":"10.00-20.00", 
			"weekends":"11.00-15.00",
			"price":"20.00",
			"picture":"/res/img/places/Lyceum_Theatre.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"inamo": 
		{
			"lat":51.5135, "long":0.1233,
			"mood":{"hungry":9},
			"description":"A pan-Asian restaurant that tries to offer a unique experience by allowing customers to order their meals with interactive tables. Customers can also play games, watch their chefs prepare meals, and graffiti on the table while they wait for their courses.",
			"weekdays":"17.00-23.30",
			"weekends":"12.00-0.00",
			"price":"Menu",
			"picture":"/res/img/places/Inamo_Covent.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"darcie&maygreen":
		{
			"lat":51.5189, "long":0.1783,
			"mood":{"hungry":9, "creative":7},
			"description":"Darcie & May Green situated directly outside Paddington Station on the Grand Union Canal are floating pieces of art, designed exclusively by the ‘godfather’ of British pop art, Sir Peter Blake. Darcie Green provides the perfect setting for canal side dining, serving Aussie brunch, healthy lunch and relaxing dinners. With an Antipodean-inspired menu, dishes are bold, fresh and comforting.",
			"weekdays":"7.30-23.00",
			"weekends":"8.00-23.00",
			"price":"Menu",
			"picture":"/res/img/places/Darc_May_Green.jpg",
			"isVisited":"No", "isLiked":"No",	
		},

		"levant":
		{
			"lat":51.5162, "long":0.1506,
			"mood":{"hungry":6},
			"description":"Opulently decorated Middle Eastern restaurant and cocktail bar with belly dancers every night.",
			"weekdays":"12.00-0.00",
			"weekends":"12.00-2.30",
			"price":"Menu",
			"picture":"/res/img/places/Levant_R.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"tatebritain": 
		{
			"lat":51.4911, "long":0.1278,
			"mood":{"creative":9},
			"description":"Tate Britain is an art museum on Millbank in the City of Westminster in London. It is part of the Tate network of galleries in England, with Tate Modern, Tate Liverpool and Tate St Ives. It is the oldest gallery in the network, having opened in 1897.",
			"weekdays":"10.00-18.00",
			"weekends":"10.00-18.00",
			"price":"Free",
			"picture":"/res/img/places/Tate_Britain.jpg",
			"isVisited":"", "isLiked":"",	
		},

		"buckinghampalace": 
		{
			"lat":51.5014, "long":0.1419,
			"mood":{"adventurous": 6},
			"description":"Buckingham Palace is the London residence and administrative headquarters of the monarch of the United Kingdom. ",
			"weekdays":"9.30-17.15",
			"weekends":"9.30-17.15",
			"price":"24.00",
			"picture":"/res/img/places/Buckingham_Pal.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"cahoots":
		{
			"lat":51.5123, "long":0.1387,
			"mood":{"romantic": 8, "creative": 6},
			"description":"A secret bar is being unearthed in Soho, previously hidden deep beneath the trudge of unwitting feet. When entering the Cahoots tube station, guests are transported back in time to post-war 1940s in a disused underground tube station, featuring dazzling cocktails, swing dancing and sing-alongs around an old piano. Inspired by true events that occurred in post-war Britain, The Captain of Cahoots has brought Soho’s illicit and nocturnal escapades from the era back to life.",
			"weekdays":"17.00-1.00", 
			"weekends":"13.00-3.00", 
			"price":"Menu",
			"picture":"/res/img/places/Cahoots_B.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"preto": 
		{
			"lat":51.5123, "long":0.1317,
			"mood":{"hungry": 8, "adventurous": 3},
			"description":"Having started Preto in the heart of London Victoria in 2007, Preto is now considered to be one of the best Brazilian restaurants in the UK. We offer a relaxed and contemporary atmosphere complemented by the authentic cuisine that we have cultivated since our conception. Preto’s menu is firmly rooted in the culinary delights of Brazil.",
			"weekdays":"12.00-23.30",
			"weekends":"12.00-0.00",
			"price":"Menu",
			"picture":"/res/img/places/Preto_WestEnd.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"somersethouse": 
		{
			"lat":51.5111, "long":0.1171,
			"mood":{"creative": 9, "hungry": 3, "adventurous": 5},
			"description":"Offering a diverse and dynamic public programme of contemporary arts and culture, we are also a home to a large community of creative businesses, artists and makers, including Somerset House Studios. One of the city’s most spectacular and well-loved spaces, we are a place where art and culture is imagined, made and experienced by our 3 million visitors every year.",
			"weekdays":"8.00-23.00",
			"weekends":"8.00-23.00",
			"price":"Free",
			"picture":"/res/img/places/Somerset_H.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"toweroflondon": 
		{
			"lat":51.5081, "long":0.0759,
			"mood":{"adventurous": 7},
			"description":"A historic castle located on the north bank of the Thames, The Tower of London houses many exhibits, ranging from foreign gifts, to royal effects, and even torture devices.",
			"weekdays":"9.00-16.30",
			"weekends":"9.00-16.30",
			"price":"22.70", 
			"picture":"/res/img/places/Tower_London.jpg",
			"isVisited":"No", "isLiked":"No",	
		},
	}],

	"east":
	[{

		"wahaca": 
		{
			"lat":51.5066, "long":0.2222,
			"mood":{"hungry": 7},
			"description":"Looking to the markets of Mexico for inspiration, wahaca was born from our love of fresh, honest, Mexican market food.",
			"weekdays":"12.00-23.00",
			"weekends":"12.00-2200",
			"price":"Menu",
			"picture":"/res/img/places/Wahaca_Strat.jpg",
			"isVisited":"No", "isLiked":"No",	
		},

		"whitechapelgallery": 
		{
			"lat":51.5160, "long":0.0701,
			"mood":{"creative": 9, "adventurous": 4},
			"description":"For over a century the Whitechapel Gallery has premiered world-class artists from modern masters such as Pablo Picasso, Jackson Pollock, Mark Rothko and Frida Kahlo to contemporaries such as Sophie Calle, Paul Noble, Thomas Struth, Sarah Lucas and Mark Wallinger. With beautiful galleries, exhibitions, artist commissions, collection displays, historic archives, education resources, inspiring art courses, Cafe/Bar and Bookshop, the Gallery is open all year round, so there is always something free to see.",
			"weekdays":"11.00-18.00", 
			"weekends":"11.00-18.00",
			"price":"Varies",
			"picture":"/res/img/places/White_Gal.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"genesiscinema": 
		{
			"lat":51.5212, "long":0.0511,
			"mood":{"adventurous": 5, "romantic": 8, "sad": 4},
			"description":"Arthouse cinema showing blockbuster and independent films in a renovated 19th-century building.",
			"weekdays":"8.00-0.00",
			"weekends":"8.00-0.00",
			"price":"Varies",
			"picture":"/res/img/places/Genes_C.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"allstarlanes": 
		{
			"lat":51.5433, "long":0.0077,
			"mood":{"adventurous": 6},
			"description":"We may be in Westfield but our hearts are in the sweet U S of A. Come join us for more than just bowling; pitch up in our restaurant or order a Roller Girl at the bar. This is where the cool kids hang.",
			"weekdays":"10.00-23.00",
			"weekends":"10.00-0.00",
			"price":"9.95", 
			"picture":"/res/img/places/AStar_Bowl.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"pastaremoli": 
		{
			"lat":51.5440, "long":0.0089,
			"mood":{"hungry":7, "adventurous":6},
			"description":"An Italian restaurant that allows customers to create their own pasta, by choosing the pasta, sauce and cheese. ",
			"weekdays":"9.00-21.00",
			"weekends":"9.00-21.00",
			"price":"Menu",
			"picture":"/res/img/places/P_Rem.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"thecoffeeroom": 
		{
			"lat":51.5256, "long":0.0347,
			"mood":{"tired":7, "hungry":5},
			"description":"Located in Mile End, The Coffee Room is a quaint little store with rich cakes, delicious lunches and a wide choice of teas and coffees, all which can be enjoyed In a backyard seating area, completely devoid of outside noise.",
			"weekdays":"7.00-17.00",
			"weekends":"8.00-17.00",
			"price":"Menu",
			"picture":"/res/img/places/Coffee_Room.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"bigeasy":
		{
			"lat":51.5063, "long":0.0191,
			"mood":{"hungry": 6},
			"description":"Inspired by the 19th century crab shacks & Bar.B.Q of the American Gulf Coast, Paul opened the original Big Easy on the Kings Road in 1991. Offering a large slice of that easy-going living with live music, a friendly atmosphere and hearty portions of good ol’ home-style food we have become a much-loved local of choice for millions of Londoners and a fair few home-sick yanks.",
			"weekdays":"11.30-0.00",
			"weekends":"11.00-22.30",
			"price":"Menu",
			"picture":"/res/img/places/Big_Easy_C.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"bricklanemarket": 
		{
			"lat":51.5212, "long":0.0718,
			"mood":{"creative": 8, "adventurous": 3},
			"description":"The best day to visit Brick Lane market is on Sundays, though the shops and restaurants are open every day. On Sundays the streets are lined with people hawking their second-hand wares, with some good bargains to be had if you look hard enough! There are also street performers to enhance the vibrant, lively atmosphere.",
			"weekdays":"Closed",
			"weekends":"11.00-18.00",
			"price":"Varies",
			"picture":"/res/img/places/Brick_Market.jpg",
			"isVisited":"No", "isLiked":"No",	
		},

		"thehalfmoon": 
		{
			"lat":51.4673, "long":0.2201,
			"mood":{"sad": 6, "adventurous":6},
			"description":"A disued chapel was taken over by the half moon theatre company in 1977. Having gone through many productions, it is now a Wetherspoons in Mile End.",
			"weekdays":"11.00-23.00",
			"weekends":"11.00-1.00",
			"price":"Menu",
			"picture":"/res/img/places/Half_Moon.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"boxpark": 
		{
			"lat":51.5235, "long":0.0764,
			"mood":{"creative":7, "hungry": 2},
			"description":"Boxpark Shoreditch opened in 2011 as the world's first pop-up mall. Entirely constructed out of refitted shipping containers, Boxpark showcases a unique position in being able to offer affordable and flexible leases for lifestyle brands, cafes, restaurants and galleries to trade and succeed.",
			"weekdays":"11.00-23.00",
			"weekends":"12.00-22.00",
			"price":"Free",
			"picture":"/res/img/places/Boxed.jpg",
			"isVisited":"No", "isLiked":"No",	
		},

	}],

	"south":
	[{
		"blueskitchen": 
		{
			"lat":51.4606, "long":0.1193,
			"mood":{"sad": 6, "tired":4, "hungry":5},
			"description":"The Blues Kitchen serves the music and food culture of the Deep South. All three venues showcase new and established blues, rock & roll & soul artists nightly.",
			"weekdays":"17.00-0.00",
			"weekends":"10.00-3.00",
			"price":"Menu",
			"picture":"./res/img/places/Blues_K.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"royalobservatory": 
		{
			"lat":51.4769, "long":0.0005,
			"mood":{"adventurous":7},
			"description":"Visit the Royal Observatory in Greenwich, London. Home of Greenwich Mean Time (GMT), the Prime Meridian of the world and London’s Planetarium. Also, stand astride the historic Prime Meridian where east meets west, and take your place at the centre of the world!",
			"weekdays":"10.00-17.00",
			"weekends":"10.00-17.00",
			"price":"Free",
			"picture":"/res/img/places/Royal_Ob.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"bunker51":
		{
			"lat":51.4939, "long":0.0344,
			"mood":{"adventurous":8},
			"description":"An underground gaming based centre with a variety of activities, such as airsoft, paintball and laser tag.",
			"weekdays":"9.00-22.00",
			"weekends":"9.00-22.00",
			"price":"20.00-50.00",
			"picture":"/res/img/places/Bunk_51.jpg",
			"isVisited":"No", "isLiked":"No",	
		},

		"novotelblackfrairs":
		{
			"lat":51.5050, "long":0.1047,
			"mood":{"tired": 9, "romantic": 7},
			"description":"If you're looking for a contemporary and elegantly-designed hotel in a vibrant and easy-to-reach corner of the capital, Novotel London Blackfriars has you covered. Just a few steps to the attractions that line the Southbank, a short stroll from London's top markets, and a couple of Tube stops to the likes of St Paul's Cathedral and Tower Bridge - the best of London will be right on your doorstep. Just minutes from the City, we're as well-placed for business as we are for pleasure.",
			"weekdays":"-",
			"weekends":"-",
			"price":"140.00",
			"picture":"/res/img/places/Novo.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"namcofunscape":
		{
			"lat":51.5014, "long":0.1197,
			"mood":{"adventurous": 7, "hungry":5},
			"description":"Looking for fun entertainment in the heart of London? You won’t beat our location, facilities and variety of entertainment. Where else will you find bowling, video games, pool tables, bumper cars and luxurious lounge areas, all in one venue? Not to mention our DJ and dance-floor facilities for exclusive events, and our funky, competitively priced bar!",
			"weekdays":"10.00-0.00",
			"weekends":"10.00-0.00",
			"price":"Varies",
			"picture":"/res/img/places/Namco.jpg",
			"isVisited":"No", "isLiked":"No",
		},

		"hiltontowerbridge":
		{
			"lat":51.5046, "long":0.0827,
			"mood":{"tired": 9, "hungry": 4},
			"description":"Sleek lodging with casual Italian dining and a cocktail bar, plus meeting space and a 24/7 gym.",
			"weekdays":"-",
			"weekends":"-",
			"price":"224.00",
			"picture":"/res/img/places/Hilton_Tower.jpg",
			"isVisited":"No", "isLiked":"No",
		},
	}],
}

export default places;
