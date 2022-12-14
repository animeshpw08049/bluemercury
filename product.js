//add products in object

var productData = [
  {
    id: 1,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-008080163349-1_235x.jpg?v=1664951588",
    name: "MOLTON BROWN ",
    title: "Rose Dunes Body Lotion",
    price: "$" + "" + 44,
    qty: 1,
  },
  {
    id: 2,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-1230000065672-1_235x.jpg?v=1665000256",
    name: "NOBLE PANACEA",
    title: "The Vitamin C Booster",
    price: "$" + "" + 160,
    strikedoffprice: 1749,
  },
  {
    id: 3,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-191677344358-1_235x.jpg?v=1663749101",
    name: "ALO ",
    title: "Magic Balm",
    price: "$" + "" + 48,
  },
  {
    id: 4,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-005floz15ml-893689003826-1_235x.jpg?v=1664935004",
    name: "REVITALASH",
    title: "Revitabrow Advanced Eyebrow Conditioner",
    price: "$" + "" + 58 + " - " + "$" + "" + 110,
  },
  {
    id: 5,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-smokeytopaz-814309022881-1_235x.jpg?v=1665393037",
    name: "LUNE+ASTER",
    title: "StarDust Eye Pop",
    price: "$" + "" + 28,
  },
  {
    id: 6,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-633222211079-1_235x.jpg?v=1665184281",
    name: "RÉVIVE",
    title: "Fermitif Neck Renewal Serum Firming Treatment",
    price: "$" + "" + 195,
  },
  {
    id: 7,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-6treatments-633222213967-1_235x.jpg?v=1664208872",
    name: "RÉVIVE",
    title: "Masque Des Yeux Instant De-Puffing Gel Eye Mask",
    price: "$" + "" + 28 + " - " + "$" + "" + 95,
  },
  {
    id: 8,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-810081492522-1_235x.jpg?v=1664977097",
    name: "R+CO BLEU",
    title: "F-Layer Deep Conditioning Serum",
    price: "$" + "" + 64,
  },
  {
    id: 9,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-851367006033-1_235x.jpg?v=1665079951",
    name: "ZIIP",
    title: "ZIIP GX Kit",
    price: "$" + "" + 495,
  },
  {
    id: 10,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17oz50ml-860002327020-1_235x.jpg?v=1664800607",
    name: "U BEAUTY",
    title: "Resurfacing Compound",
    price: "$" + "" + 88 + " - " + "$" + "" + 228,
  },
  {
    id: 11,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850033397130-1_235x.jpg?v=1665072077",
    name: "IRENE FORTE",
    title: "Pistachio Face Mask",
    price: "$" + "" + 155,
  },
  {
    id: 12,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-05floz15ml-840216931336-1_235x.jpg?v=1664950984",
    name: "LIVING PROOF",
    title: "Triple Bond Complex",
    price: "$" + "" + 20 + " - " + "$" + "" + 45,
  },
  {
    id: 13,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-deepalmond-814309023086-1_235x.jpg?v=1665392043",
    name: "LUNE+ASTER",
    title: "Dawn to Dusk Foundation Stick",
    price: "$" + "" + 52,
  },
  {
    id: 14,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060552904893-1_235x.jpg?v=1663862860",
    name: "AUGUSTINUS BADER",
    title: "The Neem Comb With Handle",
    price: "$" + "" + 28,
  },
  {
    id: 15,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-6ml-840732118372-1_235x.jpg?v=1663175589",
    name: "NEST NEW YORK",
    title: "Indian Jasmine Perfume Oil",
    price: "$" + "" + 35 + " - " + "$" + "" + 98,
  },
  {
    id: 16,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-deep-810050680219-1_235x.jpg?v=1663939862",
    name: "KEVYN AUCOIN",
    title: "The Contour Eyeshadow Palette",
    price: "$" + "" + 36,
  },
  {
    id: 17,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309023185-1_235x.jpg?v=1665072818",
    name: "BLUEMERCURY",
    title: "The Fall Makeup Edit",
    price: "$" + "" + 75,
  },
  {
    id: 18,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-390205025008-v-20221010T060027Z-1_235x.jpg?v=1665414782",
    name: "ELTAMD",
    title: "UV Clear Broad-Spectrum SPF 46r",
    price: "$" + "" + 39,
  },
  {
    id: 19,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-ember-670959117335-1_235x.jpg?v=1662653093",
    name: "JANE IREDALE",
    title: "Glow Time™ Blush Stick",
    price: "$" + "" + 38,
  },
  {
    id: 20,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-885609030272-1_235x.jpg?v=1665014686",
    name: "DYSON",
    title: "Special Gift Edition Airwrap™ Multi-Styler",
    price: "$" + "" + 599.99,
  },
  {
    id: 21,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-005floz15ml-893689003826-1_235x.jpg?v=1664935004",
    name: "REVITALASH",
    title: "Revitalash Advanced Eyelash Conditioner",
    price: "$" + "" + 55 + " - " + "$" + "" + 150,
  },
  {
    id: 22,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-885609029559-1_235x.jpg?v=1665072941",
    name: "DYSON",
    title: "Special Gift Edition Corrale™ Hair Straightener",
    price: "$" + "" + 499.99,
  },
  {
    id: 23,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-860006846343-1_235x.jpg?v=1664800517",
    name: "PLANTKOS",
    title: "Phyto A Face Lotion",
    price: "$" + "" + 67,
  },
  {
    id: 24,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-50ml-850039151019-2_235x.jpg?v=1662797548",
    name: "ELLIS BROOKLYN",
    title: "Vanilla Milk Eau de Parfum",
    price: "$" + "" + 105,
  },
  {
    id: 25,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-212oz600g-3700431440853-1_235x.jpg?v=1665000219",
    name: "DIPTYQUE",
    title: "34 Boulevard Saint Germain Hourglass Diffuser",
    price: "$" + "" + 115 + " - " + "$" + "" + 220,
  },
  {
    id: 26,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431439024-1_235x.jpg?v=1663181548",
    name: "DIPTYQUE",
    title: "34 Boulevard Saint Germain Hourglass Diffuser",
    price: "$" + "" + 200,
  },
  {
    id: 27,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3337875742511-1_235x.jpg?v=1662648427",
    name: "SKINCEUTICALS",
    title: "Phyto Corrective Essense Mist",
    price: "$" + "" + 67,
  },
  {
    id: 28,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-885609029474-1_235x.jpg?v=1665072949",
    name: "DYSON",
    title: "Special Gift Edition Supersonic™ Hair Dryer",
    price: "$" + "" + 429.99,
  },
  {
    id: 29,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-deep-791222902349-1_235x.jpg?v=1662538945",
    name: "TRISH MCEVOY",
    title: "The Power of Makeup® Makeup Planner® Collection",
    price: "$" + "" + 98,
  },
  {
    id: 30,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309023154-1_235x.jpg?v=1665072790",
    name: "BLUEMERCURY",
    title: "The All-Star Edit",
    price: "$" + "" + 99,
  },
  {
    id: 31,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-747930142379-1_235x.jpg?v=1665389537",
    name: "LA MER",
    title: "The Glowing Hydration Duet",
    price: "$" + "" + 490,
  },
  {
    id: 32,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-747930142362-1_235x.jpg?v=1665389526",
    name: "LA MER",
    title: "The Crème de la Mer Duet",
    price: "$" + "" + 380,
  },
  {
    id: 33,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309022812-v-20221010T060027Z-1_235x.jpg?v=1665385620",
    name: "LUNE+ASTER",
    title: "Kaleidoscopic Nudes Eyeshadow Palette",
    price: "$" + "" + 68,
  },
  {
    id: 34,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011965-v-20221010T060027Z-1_235x.jpg?v=1665385712",
    name: "M-61",
    title: "Hydration Hugs+Kisses",
    price: "$" + "" + 20,
  },
  {
    id: 35,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011996-v-20221010T060027Z-1_235x.jpg?v=1665385748",
    name: "M-61",
    title: "Total Rock Stars Set",
    price: "$" + "" + 48,
  },
  {
    id: 36,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-195893801718-1_235x.jpg?v=1665074324",
    name: "WELLINSULATED",
    title: "Performance Beauty Case - Silver",
    price: "$" + "" + 98,
  },
  {
    id: 37,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-195893905423-1_235x.jpg?v=1665101602",
    name: "WELLINSULATED",
    title: "Performance Beauty Bag Silver",
    price: "$" + "" + 65,
  },
  {
    id: 38,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850033160055-1_235x.jpg?v=1665086570",
    name: "OURSELF",
    title: "Brightening Peel",
    price: "$" + "" + 110,
  },
  {
    id: 39,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309022928-v-20221010T060027Z-1_235x.jpg?v=1665385657",
    name: "LUNE+ASTER",
    title: "Revive in Five! Five Minute Rescue Mask Assortment",
    price: "$" + "" + 32,
  },
  {
    id: 40,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309022959-v-20221010T060027Z-1_235x.jpg?v=1665385684",
    name: "LUNE+ASTER",
    title: "Swipe+Celebrate Lip Gloss Set",
    price: "$" + "" + 40,
  },
  {
    id: 41,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-6ml-840732118419-1_235x.jpg?v=1663877408",
    name: "NEST NEW YORK",
    title: "Turkish Rose Perfume Oil",
    price: "$" + "" + 35 + " - " + "$" + "" + 98,
  },
  {
    id: 42,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-6ml-840732118402-1_235x.jpg?v=1663175675",
    name: "NEST NEW YORK",
    title: "Seville Orange Perfume Oil",
    price: "$" + "" + 35 + " - " + "$" + "" + 98,
  },
  {
    id: 43,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-100ml-690251122462-1_235x.jpg?v=1663531662",
    name: "JO MALONE LONDON",
    title: "Limited Edition English Pear & Freesia Cologne",
    price: "$" + "" + 80 + " - " + "$" + "" + 155,
  },
  {
    id: 44,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-690251123889-1_235x.jpg?v=1664948868",
    name: "JO MALONE LONDON",
    title: "Limited Edition English Pear & Freesia Hand Care Collection",
    price: "$" + "" + 48,
  },
  {
    id: 45,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-859675001054-1_235x.jpg?v=1662127979",
    name: "THE LAUNDRESS",
    title: "Cedar Wool & Cashmere Shampoo",
    price: "$" + "" + 22,
  },
  {
    id: 46,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850023780102-1_235x.jpg?v=1665084323",
    name: "NETTE",
    title: "Chai Milk",
    price: "$" + "" + 82,
  },
  {
    id: 47,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850023780133-1_235x.jpg?v=1663862910",
    name: "NETTE",
    title: "Sunday Chess",
    price: "$" + "" + 82,
  },
  {
    id: 48,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011934-v-20221010T060027Z-1_235x.jpg?v=1665383288",
    name: "M-61",
    title: "PowerGlow Pro+ Niacinamide+Neuropeptide Cream",
    price: "$" + "" + 88,
  },
  {
    id: 49,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080240712-1_235x.jpg?v=1665073286",
    name: "LAFCO",
    title: "Spiced Pomander Classic Candle",
    price: "$" + "" + 46,
  },
  {
    id: 50,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080240705-1_235x.jpg?v=1665073303",
    name: "LAFCO",
    title: "Spiced Pomander Signature Candle",
    price: "$" + "" + 70,
  },
  {
    id: 51,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-810374029725-1_235x.jpg?v=1661862814",
    name: "R+CO",
    title: "Labyrinth 3-in-1 Texturizing Shampoo + Conditioner + Styler",
    price: "$" + "" + 36,
  },
  {
    id: 52,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-peachflush-850010474502-1_235x.jpg?v=1663373135",
    name: "LAFCO",
    title: "RÓEN BEAUTY",
    price: "$" + "" + 36,
  },
  {
    id: 53,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840732116439-1_235x.jpg?v=1663262855",
    name: "NEST NEW YORK+CO",
    title: "Autumn Plum Reed Diffuser",
    price: "$" + "" + 58,
  },
  {
    id: 54,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840732116392-1_235x.jpg?v=1663262838",
    name: "LAFCO",
    title: "Autumn Plum Classic",
    price: "$" + "" + 46,
  },
  {
    id: 55,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17floz50ml-087327013753-1_235x.jpg?v=1665086878",
    name: "LAKE & SKYE",
    title: "Santal Gray Eau de Parfum",
    price: "$" + "" + 36 + " - " + "$" + "" + 98,
  },
  {
    id: 56,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-087327013814-1_235x.jpg?v=1665086869",
    name: "LAKE & SKYE",
    title: "Santal Gray Candle",
    price: "$" + "" + 48,
  },
  {
    id: 57,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-887167539594-1_235x.jpg?v=1663263133",
    name: "ESTÉE LAUDER",
    title: "Revitalizing Supreme+ Night Restorative Creme Moisturizer",
    price: "$" + "" + 102,
  },
  {
    id: 58,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-810081490153-1_235x.jpg?v=1662478990",
    name: "R+CO BLEU",
    title: "De Luxe Reparative Conditioner",
    price: "$" + "" + 59,
  },
  {
    id: 59,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-390205022861-v-20221010T060027Z-1_235x.jpg?v=1665414918",
    name: "ELTAMD",
    title: "UV Lotion Broad-Spectrum SPF 30+",
    price: "$" + "" + 40,
  },
  {
    id: 60,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-1c1coolbone-887167509283-1_235x.jpg?v=1660739724",
    name: "ESTÉE LAUDER",
    title: "Double Wear Stay in Place Matte Powder Foundation",
    price: "$" + "" + 48,
  },
  {
    id: 61,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-810045751467-1_235x.jpg?v=1662740412",
    name: "M-WANDER BEAUTY",
    title: "B.O.M. Voyage Cleansing Balm",
    price: "$" + "" + 34,
  },
  {
    id: 62,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-skinnydip-810045751542-1_235x.jpg?v=1660784755",
    name: "WANDER BEAUTY",
    title: "Lip Retreat Oil",
    price: "$" + "" + 22,
  },
  {
    id: 63,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-bossbabeintheclear-810045751641-1_235x.jpg?v=1660791897",
    name: "WANDER BEAUTY",
    title: "Double Booked Lip Cream",
    price: "$" + "" + 26,
  },
  {
    id: 64,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-yarrow-656509038572-v-20221011T044452Z-1_235x.jpg?v=1665464379",
    name: "CHANTECAILLE",
    title: "Cougar Lip Chic",
    price: "$" + "" + 64,
  },
  {
    id: 65,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-orchid-656509038596-v-20221011T044452Z-1_235x.jpg?v=1665464953",
    name: "CHANTECAILLE",
    title: "Jaguar Lip Chic",
    price: "$" + "" + 48,
  },
  {
    id: 66,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5056379589719-1_235x.jpg?v=1661904225",
    name: "CHRISTOPHE ROBIN",
    title: "Hydrating Cream Scrub wtih Aloe Vera",
    price: "$" + "" + 43,
  },
  {
    id: 67,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-7290113148840-1_235x.jpg?v=1661452710",
    name: "MOROCCANOIL",
    title: "Signature Scent Duo",
    price: "$" + "" + 58,
  },
  {
    id: 68,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-810374029701-1_235x.jpg?v=1661279296",
    name: "R+CO",
    title: "Zipper Multitasking Styling Lotion",
    price: "$" + "" + 29,
  },
  {
    id: 69,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-670959117854-1_235x.jpg?v=1665000237",
    name: "JANE IREDALE",
    title: "Glow Time Stick Trio Kit",
    price: "$" + "" + 76,
  },
  {
    id: 70,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-8ml-840732110727-1_235x.jpg?v=1664081576",
    name: "Wisteria Blue Eau de Parfum",
    title: "Zipper Multitasking Styling Lotion",
    price: "$" + "" + 28 + " - " + "$" + "" + 82,
  },
  // {
  //   id: 71,
  //   image_url:
  //     "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850023780171-1_235x.jpg?v=1665014796",
  //   name: " NETTE",
  //   title: "The Magician",
  //   price: "$" + "" +82,
  // },

  {
    id: 72,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080241207-1_235x.jpg?v=1665389567",
    name: "LAFCO ",
    title: "Spiced Pomander Pura Refill",
    price: "$" + "" + 18,
  },
  {
    id: 73,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-747930142409-1_235x.jpg?v=1665389556",
    name: "LA MER ",
    title: "The Replenishing Moisture Collection",
    price: "$" + "" + 210,
  },
  // {
  //   id: 74,
  //   image_url:
  //     "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-747930152989-1_ab273bae-6158-4041-98ff-2481ac3c806d_235x.jpg?v=1665389548",
  //   name: " LA MER",
  //   title: "The Moisturizing Soft Cream Duet",
  //   price: "$" + "" +380,
  // },

  {
    id: 75,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431418395-1_235x.jpg?v=1663003737",
    name: "DIPTYQUE ",
    title: "34 Boulevard Saint Germain Car Diffuser with insert",
    price: "$" + "" + 110,
  },

  {
    id: 76,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431440839-1_235x.jpg?v=1663003753",
    name: "DIPTYQUE ",
    title: "34 Boulevard Saint Germain Reed Diffuser",
    price: "$" + "" + 200,
  },

  {
    id: 77,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431440846-1_235x.jpg?v=1663003763",
    name: "DIPTYQUE ",
    title: "34 Boulevard Saint Germain Reed Diffuser Refill",
    price: "$" + "" + 100,
  },
  {
    id: 78,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431440877-1_235x.jpg?v=1663003771",
    name: "DIPTYQUE ",
    title: "34 Boulevard Saint Germain Roomspray",
    price: "$" + "" + 78,
  },

  {
    id: 79,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-7290113149755-1_235x.jpg?v=1665389837",
    name: "MOROCCANOIL ",
    title: "A Window to Hydration Holiday Gift Set",
    price: "$" + "" + 68,
  },

  {
    id: 80,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-008080163301-1_235x.jpg?v=1664951581",
    name: "MOLTON BROWN",
    title: "Rose Dunes Bath & Shower Gel",
    price: "$" + "" + 35,
  },

  {
    id: 81,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-7290113149670-1_235x.jpg?v=1665389850",
    name: "MOROCCANOIL ",
    title: "Hydrating Superstars Holiday Gift Set",
    price: "$" + "" + 24,
  },

  {
    id: 82,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060403580436-1_235x.jpg?v=1663329955",
    name: "BOUCLEME ",
    title: "Unisex Curl Conditioner",
    price: "$" + "" + 38,
  },

  {
    id: 83,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840216933149-1_235x.jpg?v=1665073494",
    name: "LIVGING PROOF ",
    title: "Brilliantly Full Set",
    price: "$" + "" + 60,
  },
  {
    id: 84,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840216933071-1_235x.jpg?v=1665073500",
    name: "LIVING PROOF ",
    title: "Brilliantly The Best Set",
    price: "$" + "" + 39,
  },

  {
    id: 85,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-810050680226-1_235x.jpg?v=1665389347",
    name: "KEVYN AUCOIN ",
    title: "The Beatuy STars:Eye-Defining Lash + Liner Trio",
    price: "$" + "" + 60,
  },

  {
    id: 86,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850008143502-1_235x.jpg?v=1663459794",
    name: "ODACITE ",
    title: "Vitamin C & E + Hyaluronic Acid Brightening Serum",
    price: "$" + "" + 68,
  },

  {
    id: 87,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-859675001061-1_235x.jpg?v=1663359209",
    name: "THE LAUNDRESS ",
    title: "Classic Fabric Conditioner",
    price: "$" + "" + 20,
  },
  {
    id: 88,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-818426020294-1_235x.jpg?v=1663459843",
    name: "REVITALASH ",
    title: "Double - Ended Mascara Primer",
    price: "$" + "" + 34.50,
  },

  {
    id: 89,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-darkbrown-893689003277-1_235x.jpg?v=1663618214",
    name: "REVITALASH",
    title: "Hi Def Brow Gel",
    price: "$" + "" + 32,
  },

  {
    id: 90,
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-818426021024-1_235x.jpg?v=1663459870",
    name: "REVITALASH ",
    title: "Micellar Water Lash Wash",
    price: "$" + "" + 32,
  },

];

localStorage.setItem('products',  JSON.stringify(productData));
var untouchedProducts = productData;

calculateProductPaging(1);
// displayProducts();
buildPagingButtons(productData);

document.getElementById('checkbtn').addEventListener("change",function(){

  var cb = document.getElementById('checkbtn');
  if(!cb.checked){
    document.getElementsByClassName('sliderbtn')[0].innerText = ''
  }else{
    document.getElementsByClassName('sliderbtn')[0].innerText = 'Yes'
  }
});

function displayProducts(productsToDisplay) {
  if (document.querySelector("#collectionProductCardGrid")) {
    document.querySelector("#collectionProductCardGrid").innerHTML = '';
  }

  productsToDisplay.map(function (ele, i) {

    var div = document.createElement("div");
    div.setAttribute("class", "productcard");

    var newtext = document.createElement("span");
    newtext.setAttribute("class", "merchbadge");
    newtext.innerText = "New";

    var concious = document.createElement("p");
    concious.setAttribute("class", "merchbadgeCB");
    concious.innerText = "Conscious Beauty";

    var imageheart = document.createElement("i");
    imageheart.setAttribute("class", "fa-regular fa-heart");



    var image = document.createElement("img");
    image.setAttribute("src", ele.image_url);
    image.setAttribute("alt", ele.id);
    image.setAttribute("class", "productImage");

    var h3 = document.createElement("h3");
    h3.setAttribute("class", "productCardBrand");
    h3.innerText = ele.name;

    var title = document.createElement("p");
    title.setAttribute("class", "ProductCard__Title");
    title.innerText = ele.title;

    var price = document.createElement("p");
    price.setAttribute("class", "productCardPrice");
    price.innerText = ele.price;

    var cartbtn = document.createElement("button");
    // cartbtn.innerText = "ADD TO BAG";

    var firstSpan = document.createElement("span");
    var secondSpan = document.createElement("span");
    firstSpan.setAttribute("class", "firstspan");
    secondSpan.setAttribute("class", "secondspan");


    cartbtn.setAttribute("class", "addbtn");
    var iTag = document.createElement("i");
    iTag.setAttribute("class", "fa-solid fa-cart-shopping");
    firstSpan.append(iTag);
    secondSpan.innerText = "ADD TO BAG";
    cartbtn.append(firstSpan, secondSpan);

    cartbtn.addEventListener("click", function () {
      addToCart(i);
      alert("Product is added");
    });


    div.append(newtext,imageheart, concious, image, h3, title, price, cartbtn);
    document.querySelector("#collectionProductCardGrid").append(div);

  });
}
var productInCart = JSON.parse(localStorage.getItem("Cartproduct")) || [];
function addToCart(index) {
  var product = productData.filter(function (ele, i) {
    return i == index;
  });
  productInCart.push(product[0]);
  localStorage.setItem("Cartproduct", JSON.stringify(productInCart));
}

function buildPagingButtons(products) {
  var totalProducts = products.length;
  var recordsPerPage = 20;
  var totalbuttons = Math.ceil(totalProducts / recordsPerPage);
  localStorage.setItem('totalButtons', totalbuttons);
  for (var i = 1; i <= totalbuttons; i++) {
    var pagingButton = document.createElement('button');
    pagingButton.innerText = `${i}`;
    pagingButton.setAttribute("class", "pagingButton");
    pagingButton.setAttribute("onClick", `calculateProductPaging(${i})`);
    document.querySelector('#pagingButtons').append(pagingButton);
  }

}

function calculateProductPaging(selectedPageNumber) {
  
  var productDataCopy = productData;
  var totalRecords = productDataCopy.length;
  var perPageRecoreds = 20;
  var choosenPageNo = +selectedPageNumber;
  var lastRecordsLength = choosenPageNo * perPageRecoreds;
  var firstRecord = ((choosenPageNo - 1) * perPageRecoreds) + 1;


  // console.log(productData);
  var sortBy = document.getElementById('filterrole').value;
  productDataCopy = sortLH(sortBy);


  //console.log(productData);
  var pagedRecords = [];
  for (var i = firstRecord; i <= lastRecordsLength; i++) {
    if (productData.length < i) {
      continue;
    }
    pagedRecords.push(productDataCopy[i - 1]);
  }

  var btn_prev = document.getElementsByClassName("PreviousPage");
  var btn_next = document.getElementsByClassName("NextPage");

  if (choosenPageNo == 1) {
    btn_prev[0].style.visibility = "hidden";
  } else {
    btn_prev[0].style.visibility = "visible";
  }
  var totalbuttons = parseInt(localStorage.getItem('totalButtons'));
  if (choosenPageNo == totalbuttons) {
    btn_next[0].style.visibility = "hidden";
  } else {
    btn_next[0].style.visibility = "visible";
  }


  localStorage.setItem('currentPage', choosenPageNo);
  displayProducts(pagedRecords);

}


function sortLH(sortBy) {
  
  var productDataCopy = productData;
  
  var sortedData = [];
  // productData = productData.filter(function(ele){
  if (sortBy === 'Featured')
    return JSON.parse(localStorage.products);

  // });
  // console.log(productData);

  if (sortBy == "ascending") {
    sortedData = productDataCopy.sort(function (a, b) {
      // if(a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    console.log(sortedData);
    console.log("hello");
  }



  if (sortBy == "Price, Low to High") {
    sortedData = productDataCopy.sort(function (a, b) {
      return parseInt(a.price.substring(1)) - parseInt(b.price.substring(1));
    });
  }
  else if (sortBy == "Price, High to Low") {
    sortedData = productDataCopy.sort(function (a, b) {
      return parseInt(b.price.substring(1)) - parseInt(a.price.substring(1));
    });
  }


  return sortedData;
  // localStorage.setItem("sortprice", JSON.stringify(productInCart1));
}


function handlerolefilter() {
  calculateProductPaging(1);

}

function nextPage() {
  var currentPage = localStorage.getItem('currentPage');
  calculateProductPaging(parseInt(currentPage) + 1);
}

function previousPage() {
  var currentPage = localStorage.getItem('currentPage');
  calculateProductPaging(parseInt(currentPage) - 1);
}
