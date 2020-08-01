# User Behavior To Track

There is a lot of conflicting evidence and research already being done on how to track user behavior on news sites, and why. I think it's because how people view the news and what they look for goes far beyond what they look for for "entertainment", and can really start to get into sociology and psychology. That being said, I have a couple ideas on what we could do for this app in particular, based on both my past SEO/marketing background and my web development background as well.


### Bounce rate

This is a fairly simple thing, and is a common first step to tracking user behavior, but I think it's incredibly important. Seeing how long people spend on your site, and how quickly they leave can be incredibly insightful into the first impression (and most important impression) you're giving them. Using different colors, layouts, pictures, and themes can drastically affect your bounce rate, and can show you too that you need to speed up your sites loading time.

### Common keywords included in times where clicks were fast

Is there a pattern to what articles users click on? We all know about clickbait, but looking beyond that, we would be able to see if people are clicking on more current news, if it's bad or good, does it have anything to do with Covid-19, is it location specific, is the headline thought out, etc. If we start seeing that, we can use it to start ranking articles based on common keywords that people click, and therefore keep people on the site longer.

### Amount of time spent looking at articles based on source

With this data we can do the same thing as I mentioned before. If we start to look at articles that come from sources that are read for longer, we can start to rank which ones will show up first for people, almost like our own little Google Indexing. The problem with this is that ethics will start to come into play as the site grows, since I assume the ones that will be read the most are the ones from sources that fear-monger and say outlandish things solely for traffic purposes (I can think of a major US company that does this).

### Where do users go when they leave the site

This one is an interesting thing to track, because multiple things could be done with the data. For example, are users sharing an article on social media and then moving their time to that social media site? If so, maybe a deal could be worked out between us and that site for traffic/ads/etc, or we could even just start placing our ads on that site that target the kind of people who leave our site. Are users clicking on an advertisement on OUR site and then going to some online retailer? We could start charging that retailer more for ad space, or even then start advertising our site on the retailer's site. Are users finding a competing news site showing similar articles? We can start to analyze those sites and see what people are doing there and why, and try modeling it on our site.


# Database evaluation answers

### Step 1

I created a UML diagram to show the required fields and tables, as well as the general flow and layout of the database. The file name is "Suvera_database.png".

### Step 2

This is also somewhat defined in my diagram, but to put it more clearly, the user will have a couple things to do. They'll need to specify how many tickets they want, and possibly which section they'll be in which could change the price. After they've chosen that, it will show them the full price, and ask them first whether they'd like to pay the price in full immediately, or in 2-3 payments over the course of time until the event happens. Once they decide on that, it will ask them for their payment details, either with credit/debit card, PayPal/Apple Pay/Google Pay, or maybe even cash at the door. Once they've paid and the order status is completed, the tickets will show up "on the app" or be emailed to them.

## Step 3

They're payment method and amount is saved by the database, and used as a primary foreign key attached to their tickets. This way, when they cancel or ask for a refund, the database will know that the positive integer of whatever the payment was will be sent to the same payment method used when the tickets were originally purchased.