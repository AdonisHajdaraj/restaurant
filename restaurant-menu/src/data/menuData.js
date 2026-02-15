export const menuCategories = [
  { id: 'all', name: 'Të Gjitha', icon: '🍽️' },
  { id: 'appetizers', name: 'Ushqime të Ftohta', icon: '🥗' },
  { id: 'main', name: 'Ushqime Kryesore', icon: '🍖' },
  { id: 'pizzas', name: 'Pica', icon: '🍕' },
  { id: 'pastas', name: 'Makaronat', icon: '🍝' },
  { id: 'desserts', name: 'Ëmbëlsira', icon: '🍰' },
  { id: 'drinks', name: 'Pije', icon: '🥤' },
  { id: 'cocktails', name: 'Kokteje', icon: '🍹' },
  { id: 'wines', name: 'Verëra', icon: '🍷' }
];

export const menuItems = [
  // Ushqime të Ftohta
  {
    id: 1,
    name: "Bruschetta Classica",
    description: "Bukë e thekur me domate të freskëta, borzilok dhe vaj ulliri",
    price: 5.90,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500",
    spicy: false,
    vegetarian: true,
    popular: true
  },
  {
    id: 2,
    name: "Sallatë Cezar",
    description: "Sallatë jeshile me pulë të pjekur, parmixhano dhe salcë cezar",
    price: 8.90,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500",
    spicy: false,
    vegetarian: false,
    popular: true
  },
  {
    id: 3,
    name: "Carpaccio Viçi",
    description: "Feta të holla viçi me rukola, parmixhano dhe limon",
    price: 12.90,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1624300629298-e0c3ee3c6d9d?w=500",
    spicy: false,
    vegetarian: false,
    popular: false
  },

  // Ushqime Kryesore
  {
    id: 4,
    name: "Biftek me Salcë Piperi",
    description: "Biftek viçi i pjekur me salcë kremoze piperi dhe patate të arta",
    price: 24.90,
    category: "main",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500",
    spicy: true,
    vegetarian: false,
    popular: true
  },
  {
    id: 5,
    name: "Fileto Pule me Kërpudha",
    description: "Fileto pule në salcë kërpudhash me oriz dhe perime",
    price: 16.90,
    category: "main",
    image: "https://images.unsplash.com/photo-1604908176997-125f25c813e5?w=500",
    spicy: false,
    vegetarian: false,
    popular: false
  },
  {
    id: 6,
    name: "Salmón i Pjekur",
    description: "Fileto salmoni me perime të pjekura dhe salcë limoni",
    price: 19.90,
    category: "main",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500",
    spicy: false,
    vegetarian: false,
    popular: true
  },

  // Pica
  {
    id: 7,
    name: "Pica Margherita",
    description: "Salcë domateje, mocarela, borzilok dhe vaj ulliri",
    price: 10.90,
    category: "pizzas",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500",
    spicy: false,
    vegetarian: true,
    popular: true
  },
  {
    id: 8,
    name: "Pica Diavola",
    description: "Salcë domateje, mocarela, sallam pikant dhe spec djegës",
    price: 13.90,
    category: "pizzas",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500",
    spicy: true,
    vegetarian: false,
    popular: true
  },
  {
    id: 9,
    name: "Pica Quattro Formaggi",
    description: "Katër lloje djathrash: mocarela, gorgonzola, parmixhano, feta",
    price: 14.90,
    category: "pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    spicy: false,
    vegetarian: true,
    popular: false
  },
  {
    id: 10,
    name: "Pica Frutti di Mare",
    description: "Pica me ushqim deti, karkaleca, midhje dhe kallamar",
    price: 17.90,
    category: "pizzas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
    spicy: false,
    vegetarian: false,
    popular: true
  },

  // Makaronat
  {
    id: 11,
    name: "Spaghetti Carbonara",
    description: "Spaghetti me vezë, pancetta, djathë pecorino dhe piper të zi",
    price: 14.90,
    category: "pastas",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500",
    spicy: false,
    vegetarian: false,
    popular: true
  },
  {
    id: 12,
    name: "Lasagna Bolognese",
    description: "Shtresa makaronash me mish viçi, salcë domateje dhe beshamel",
    price: 15.90,
    category: "pastas",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500",
    spicy: false,
    vegetarian: false,
    popular: true
  },
  {
    id: 13,
    name: "Penne Arrabbiata",
    description: "Penne me salcë pikante domateje, hudhër dhe spec djegës",
    price: 12.90,
    category: "pastas",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500",
    spicy: true,
    vegetarian: true,
    popular: false
  },

  // Ëmbëlsira
  {
    id: 14,
    name: "Tiramisu Classico",
    description: "Ëmbëlsirë tradicionale italiane me kafe dhe mascarpone",
    price: 6.90,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500",
    spicy: false,
    vegetarian: true,
    popular: true
  },
  {
    id: 15,
    name: "Cheesecake Me Fruta të Kuqe",
    description: "Cheesecake kremoz me salcë frutash të kuqe",
    price: 5.90,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500",
    spicy: false,
    vegetarian: true,
    popular: true
  },
  {
    id: 16,
    name: "Panna Cotta Me Vanilje",
    description: "Panna cotta klasike me salcë karameli dhe arra pishe",
    price: 5.90,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500",
    spicy: false,
    vegetarian: true,
    popular: false
  },

  // Pije jo-alkoolike
  {
    id: 17,
    name: "Limonata Freske",
    description: "Limonatë e freskët me nenexhik",
    price: 3.50,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500",
    spicy: false,
    vegetarian: true,
    popular: true
  },
  {
    id: 18,
    name: "Coca Cola",
    description: "Coca Cola origjinale 330ml",
    price: 2.50,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500",
    spicy: false,
    vegetarian: true,
    popular: true
  },
  {
    id: 19,
    name: "Lëng Portokalli i Shtrydhur",
    description: "Lëng portokalli i freskët 100% natyral",
    price: 4.50,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500",
    spicy: false,
    vegetarian: true,
    popular: false
  },

  // Kokteje
  {
    id: 20,
    name: "Mojito Classic",
    description: "Rum, lime, nenexhik, sheqer kaf dhe sodë",
    price: 7.90,
    category: "cocktails",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500",
    spicy: false,
    vegetarian: true,
    popular: true
  },
  {
    id: 21,
    name: "Margarita",
    description: "Tekila, lime, triple sec",
    price: 8.90,
    category: "cocktails",
    image: "https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=500",
    spicy: false,
    vegetarian: true,
    popular: true
  },
  {
    id: 22,
    name: "Aperol Spritz",
    description: "Aperol, prosecco, sodë dhe portokall",
    price: 8.90,
    category: "cocktails",
    image: "https://images.unsplash.com/photo-1560512823-829485b5bf24?w=500",
    spicy: false,
    vegetarian: true,
    popular: true
  },

  // Verëra
  {
    id: 23,
    name: "Verë e Kuqe - Merlot",
    description: "Verë e kuqe italiane, shije frutash të pjekura (1 shishe)",
    price: 22.90,
    category: "wines",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500",
    spicy: false,
    vegetarian: true,
    popular: true
  },
  {
    id: 24,
    name: "Verë e Bardhë - Pinot Grigio",
    description: "Verë e bardhë italiane, e freskët dhe aromatike (1 shishe)",
    price: 19.90,
    category: "wines",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa9?w=500",
    spicy: false,
    vegetarian: true,
    popular: false
  },
  {
    id: 25,
    name: "Prosecco",
    description: "Verë gazuar italiane, ideale për aperitiv (1 shishe)",
    price: 18.90,
    category: "wines",
    image: "https://images.unsplash.com/photo-1569524504507-c91b2798bc53?w=500",
    spicy: false,
    vegetarian: true,
    popular: true
  }
];