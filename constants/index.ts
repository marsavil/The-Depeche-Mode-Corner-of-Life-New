const songs = [
  {
    id:'1',
    title: "Dreaming of me",
    release: [
      "Dreaming of me",
      "Speak and Spell (Deluxe)",
      "The Singles 81>85",
      "Speak and Spell | The 12' Singles",
      "DMBX1",
    ],
    date: "1981-02-20",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/5igNagQW-hw?si=yEtivkOe3sBorQz0',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/5igNagQW-hw?si=yEtivkOe3sBorQz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2L8rKTPrDd2DYx8vBY3mBO?si=5046ef3f56194c7f',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2L8rKTPrDd2DYx8vBY3mBO?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '2',
    title: "Ice Machine",
    release: [
      "Dreaming of me",
      "Speak and Spell (Deluxe)",
      "Speak and Spell | The 12' Singles",
      "Some Great Reward | The 12' Singles",
      "DMBX1",
    ],
    date: "1981-02-20",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/3vVOafqavb4?si=E4J0B2sKPPkukQon',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/3vVOafqavb4?si=E4J0B2sKPPkukQon" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/7pZWjkW0FAq5Kd1KAZrxGX?si=4edc70a47bc54a1e',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7pZWjkW0FAq5Kd1KAZrxGX?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '3',
    title: "New Life",
    release: [
      "New Life",
      "Speak and Spell",
      "The Singles 81>85",
      "Speak and Spell | The 12' Singles",
      "Everything Counts and Live Tracks",
      "Construction Time Again | The 12' Singles",
      "DMBX1",
      "The Best of Depeche Mode vol 1",
    ],
    date: "1981-06-13",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/IXB5K7WeCHc?si=JO4GVPxess9F4dQy',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/IXB5K7WeCHc?si=JO4GVPxess9F4dQy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3vtVqgtNWNwpHfhoVG1qCR?si=cdbe507b3bd84f08',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3vtVqgtNWNwpHfhoVG1qCR?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '4',
    title: "Shout",
    release: [
      "New Life",
      "Speak and Spell (Deluxe)",
      "Remixes 81>04",
      "Love in Itself.2 and Live Tracks",
      "DMBX1",
      "Speak and Spell | The 12' Singles",
      "Construction Time Again | The 12' Singles",
    ],
    date: "1981-06-13",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/uP1LnMelalg?si=Lkd8WbcdovkRnFge',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/uP1LnMelalg?si=Lkd8WbcdovkRnFge" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6nUcndGxUKWDzWHTio2OfY?si=de30a3dce2af4ceb',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6nUcndGxUKWDzWHTio2OfY?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id:'5',
    title: "Just Can't Get Enough",
    release: [
      "Just Can't Get Enough",
      "Speak and Spell",
      "Love in Itself.2 and Live Tracks",
      "Speak and Spell | The 12' Singles",
      "Construction Time Again | The 12' Singles",
      "DMBX1",
      "The Singles 81>85",
      "101",
      "Remixes 81>04",
      "The Best of Depeche Mode vol ",
      "Live Spirits",
      "Live Spirits",
    ],
    date: "1981-09-07",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/_6FBfAQ-NDE?si=pcdREvJ1GLf6WL8T',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/_6FBfAQ-NDE?si=pcdREvJ1GLf6WL8T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0qi4b1l0eT3jpzeNHeFXDT?si=19cb6f9d4ea649d3',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0qi4b1l0eT3jpzeNHeFXDT?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '6',
    title: "Any Second Now",
    release: [
      "Just Can't Get Enough",
      "Speak and Spell",
      "Speak and Spell | The 12' Singles",
      "DMBX1",
    ],
    date: "1981-09-07",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/B4NRzLQU71Q?si=EhhFs-mif5iib9iY',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/B4NRzLQU71Q?si=EhhFs-mif5iib9iY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0IxoS7L71ABBfrzRXJ6rIz?si=a481cca8534b43b3',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0IxoS7L71ABBfrzRXJ6rIz?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '7',
    title: "I Sometimes Wish I Was Dead",
    release: ["Speak and Spell", "Speak and Spell | The 12' Singles"],
    date: "1981-10-05",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/P03rF_ASYiE?si=CILj1yGnm9T_GNkm',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/P03rF_ASYiE?si=CILj1yGnm9T_GNkm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2nTKkZC0zGPLu4JgYgFlJB?si=9d2f810871fb456e',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2nTKkZC0zGPLu4JgYgFlJB?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '8',
    title: "Puppets",
    release: ["Speak and Spell", "Remixes 2 81>11"],
    date: "1981-10-05",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/owiS7cdxZR4?si=I7PbpM5W5IWnv_cO',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/owiS7cdxZR4?si=I7PbpM5W5IWnv_cO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/49C0xNvpvN6ceR5b3nOJVG?si=e0990a7393434f09',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/49C0xNvpvN6ceR5b3nOJVG?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  { 
    id: '9',
    title: "Boys Say Go!",
    release: [
      "Speak and Spell",
      "Construction Time Again | The 12' Singles",
      "Everything Counts and Live Tracks",
    ],
    date: "1981-10-05",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/LnRDAr7xRLI?si=amtHhbzgKLxOEvvh',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/LnRDAr7xRLI?si=amtHhbzgKLxOEvvh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/7HWznAEvnuUfCTjs9V9jOb?si=122e24ea27254874',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7HWznAEvnuUfCTjs9V9jOb?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '10',
    title: "Nodisco",
    release: ["Speak and Spell"],
    date: "1981-10-05",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/2-Q6m8YOvRQ?si=16muQIbj66pidmZd',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/2-Q6m8YOvRQ?si=16muQIbj66pidmZd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/4JXFgOCnQVFRLmi3tMdY47?si=11532e1981c042c4',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4JXFgOCnQVFRLmi3tMdY47?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '11',
    title: "What's Your Name",
    release: ["Speak and Spell"],
    date: "1981-10-05",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/UDRLm8fs0qw?si=XF8tBVWlFvmnuolh',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/UDRLm8fs0qw?si=XF8tBVWlFvmnuolh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3DXqK80vWl6yjDmfX3bmWy?si=75c23dbbf91d4214',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3DXqK80vWl6yjDmfX3bmWy?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '12',
    title: "Photographic",
    release: [
      "Speak and Spell",
      "The Singles 81>85",
      "Remixes 81>04",
      "Love in Itself.2 and Live Tracks",
      "Construction Time Again | The 12' Singles",
    ],
    date: "1981-10-05",
    composer: ["Vince Clarke"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/B-Q-Y4HJVg8?si=ybXEVH1EBD6ljk0k',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/B-Q-Y4HJVg8?si=ybXEVH1EBD6ljk0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6Ipaqc1ybISGpoJ8E9Qs0E?si=7308ef4997694d8d',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Ipaqc1ybISGpoJ8E9Qs0E?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
    
  },
  {
    id: '13',
    title: "Tora! Tora! Tora!",
    release: [
      "Speak and Spell",
      "Remixes 2 81>11",
      "DMBX1",
      "Construction Time Again | The 12' Singles",
    ],
    date: "1981-10-05",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/l7qwbHc6Ldc?si=MkvilvIetVSmaofz',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/l7qwbHc6Ldc?si=MkvilvIetVSmaofz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6kiKfDljV5Izu3Oxqsw5f3?si=5eee0abe0ca144ea',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6kiKfDljV5Izu3Oxqsw5f3?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
    
  },
  {
    id: '14',
    title: "Big Muff",
    release: ["Speak and Spell"],
    date: "1981-10-05",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/y-ioGGoHr_Q?si=wAi4OdnU8Dp01_x4',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/y-ioGGoHr_Q?si=wAi4OdnU8Dp01_x4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3HKoNitG1CAWqtTbXy1xtL?si=835cafc8c3014523',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3HKoNitG1CAWqtTbXy1xtL?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '15',
    title: "See You",
    release: [
      "See You",
      "A Broken Frame",
      "A Broken Frame | The 12' Singles",
      "The Singles 81>85",
      "The Best of Depeche Mode vol 1",
      "Construction Time Again | The 12' Singles",
      "DMBX1",
    ],
    date: "1982-01-29",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/zuWQitNlvf0?si=lhyXzCroGq8rj5Qg',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/zuWQitNlvf0?si=lhyXzCroGq8rj5Qg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1Js5V2orgZIw6S4ZdxHLIc?si=414b4c93118a4e8b',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1Js5V2orgZIw6S4ZdxHLIc?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '16',
    title: "Now, This is Fun",
    release: [
      "See You",
      "A Broken Frame (Deluxe)",
      "A Broken Frame | The 12' Singles",
      "DMBX1",
    ],
    date: "1982-01-29",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/-ppqZ5pDKo8?si=47YbxmjDhO8ywlrs',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/-ppqZ5pDKo8?si=47YbxmjDhO8ywlrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0kFtlx6hGtGnrINbX1IT8W?si=a2546c64bf37497c',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0kFtlx6hGtGnrINbX1IT8W?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '17',
    title: "The Meaning of Love",
    release: [
      "The Meaning of Love",
      "A Broken Frame",
      "The Singles 81>85",
      "A Broken Frame | The 12' Singles",
      "Construction Time Again | The 12' Singles",
      "Everything Counts and Live Tracks",
      "DMBX1",
    ],
    date: "1982-04-26",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/Fkc6TYIxNls?si=3STqlAsz29TURs9n',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/Fkc6TYIxNls?si=3STqlAsz29TURs9n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5X1BtrxCNZDKVUPc3OWwfu?si=05e076f6f72a4278',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5X1BtrxCNZDKVUPc3OWwfu?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '18',
    title: "Oberkorn(It's a Small Town)",
    release: [
      "The Meaning of Love",
      "A Broken Frame (Deluxe)",
      "A Broken Frame | The 12' Singles",
      "DMBX1",
    ],
    date: "1982-04-26",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/29cd1Tp_6aU?si=Agh_4ovxcMrNwKQP',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/29cd1Tp_6aU?si=Agh_4ovxcMrNwKQP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2HlGEr8DBV7aCAda6T0MmJ?si=4c8ca4329c84472c',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2HlGEr8DBV7aCAda6T0MmJ?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '19',
    title: "Leave in Silence",
    release: [
      "Leave in Silence",
      "A Broken Frame",
      "The Singles 81>85",
      "Remixes 2 81>11 (Deluxe)",
      "A Broken Frame | The 12' Singles",
      "DMBX1",
    ],
    date: "1982-08-16",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/ucIv-sMta7I?si=Hja0Wp9vK56do8PZ',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/ucIv-sMta7I?si=Hja0Wp9vK56do8PZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3T3LD2pK0mNdjXWZP28hbo?si=6da0cb43068246e8',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3T3LD2pK0mNdjXWZP28hbo?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '20',
    title: "Excerpt From My Secret Garden",
    release: [
      "Leave in Silence",
      "A Broken Frame (Deluxe)",
      "A Broken Frame | The 12' Singles",
      "DMBX1",
    ],
    date: "1982-08-16",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/ylk2O6rlcQM?si=9iUFhZ2U-l6spJgt',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/ylk2O6rlcQM?si=9iUFhZ2U-l6spJgt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5IOpqyzdIGOi97ofCcTSno?si=3334cbbf4a6b4132',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5IOpqyzdIGOi97ofCcTSno?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '21',
    title: "Further Excerpt From My Secret Garden",
    release: ["Leave in Silence", "A Broken Frame | The 12' Singles", "DMBX1"],
    date: "1982-08-16",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/msaFewTXSio?si=Pz6ARU_5dairyi1k',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/msaFewTXSio?si=Pz6ARU_5dairyi1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5xjjxHaexDcIZgm1CymsGm?si=cc88e9ba83b946ba',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5xjjxHaexDcIZgm1CymsGm?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '22',
    title: "My Secret Garden",
    release: ["A Broken Frame", "Construction Time Again | The 12' Singles"],
    date: "1982-09-27",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/Gt_orM2MdAw?si=GkbKummRVhG8ka3f',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/Gt_orM2MdAw?si=GkbKummRVhG8ka3f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1AnDkRy272A0dLUXIDOB96?si=16f9d97cb5844155',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1AnDkRy272A0dLUXIDOB96?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '23',
    title: "Monument",
    release: ["A Broken Frame"],
    date: "1982-09-27",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/x46E6ztyOtU?si=myrPQADvoZVHwujt',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/x46E6ztyOtU?si=myrPQADvoZVHwujt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2X2X3BHvNhEKkAq8IJjHXk?si=02291b91b46c4b40',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2X2X3BHvNhEKkAq8IJjHXk?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
    
  },
  {
    id: '24',
    title: "Nothing to Fear",
    release: [
      "A Broken Frame",
      "Construction Time Again | The 12' Singles",
      "Everything Counts and Live Tracks",
    ],
    date: "1982-09-27",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/GFTGQ0sl_NM?si=8ArVUplWGpRmZW5q',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/GFTGQ0sl_NM?si=8ArVUplWGpRmZW5q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1x7fkwTQE9oA1jpC6dmubF?si=bdb9477fccf04fb9',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1x7fkwTQE9oA1jpC6dmubF?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '25',
    title: "Satellite",
    release: ["A Broken Frame", "Construction Time Again | The 12' Singles"],
    date: "1982-09-27",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/Khr-Il_Ub08?si=TqiWKrnoYClx9AAf',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/Khr-Il_Ub08?si=TqiWKrnoYClx9AAf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2AsobpdYbkC6NbtlCTjxHd?si=a989c4b4b763449f',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2AsobpdYbkC6NbtlCTjxHd?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '26',
    title: "A Photograph of You",
    release: [
      "A Broken Frame",
      "Construction Time Again | The 12' Singles",
      "Love in Itself.2 and Live Tracks",
    ],
    date: "1982-09-27",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/L-u86zxkpjQ?si=rn1-SoQvHQJJakif',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/L-u86zxkpjQ?si=rn1-SoQvHQJJakif" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2FDHG0nqceaNofZ3M7HU5G?si=bd447af1a5ac4ab8',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2FDHG0nqceaNofZ3M7HU5G?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '27',
    title: "Shouldn't Have Done That",
    release: ["A Broken Frame"],
    date: "1982-09-27",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/mZeK1bawOY8?si=arQ_JLYug_rxz_7k',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/mZeK1bawOY8?si=arQ_JLYug_rxz_7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2LUI5zMAWBwbspNqgCdERZ?si=317dc41ef70b423a',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2LUI5zMAWBwbspNqgCdERZ?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '28',
    title: "The Sun and the Rainfall",
    release: ["A Broken Frame"],
    date: "1982-09-27",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/gHEK_mCyzbU?si=mMr7HeX4QBMHhKDx',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/gHEK_mCyzbU?si=mMr7HeX4QBMHhKDx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/51l9zWRbE8XVk14CiOCo0R?si=34a3f307ba884605',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/51l9zWRbE8XVk14CiOCo0R?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '29',
    title: "Get the Balance Right!",
    release: [
      "Get the Balance Right!",
      "Construction Time Again (Deluxe)",
      "The Singles 81>85",
      "DMBX2",
      "Construction Time Again | The 12' Singles",
      "Remixes 81>04",
    ],
    date: "1983-01-31",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/zfiISFiozg8?si=AZUXWIQVWaDvtxdq',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/zfiISFiozg8?si=AZUXWIQVWaDvtxdq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2Z7J9eowH8te3pNOu9eU3v?si=6f598f89a0804549',
          insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2Z7J9eowH8te3pNOu9eU3v?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '30',
    title: "The Great Outdoors!",
    release: [
      "Get the Balance Right!",
      "Construction Time Again (Deluxe)",
      "DMBX2",
      "Construction Time Again | The 12' Singles",
    ],
    date: "1983-01-31",
    composer: ["Martin Lee Gore", "Alan Charles Wilder"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Eric Radcliffe", "John Fryer"],
    studio: [
      {
        name: "Blackwing Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/uGaZPoVFe-w?si=Hq5n6sZJqtDNFpXe',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/uGaZPoVFe-w?si=Hq5n6sZJqtDNFpXe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6Y43A1P2bNaOkLexUtNLLu?si=d43fd53385ee4e23',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Y43A1P2bNaOkLexUtNLLu?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '31',
    title: "Everything Counts",
    release: [
      "Everything Counts",
      "Remixes 81>04",
      "Remixes 2 81>11 (Deluxe)",
      "The Best of Depeche Mode vol 1",
      "Construction Time Again",
      "The Singles 81>85",
      "DMBX2",
      "DMBX4",
      "101",
      "The Singles 86>98",
      "Live Spirits",
      "Construction Time Again | The 12' Singles",
      "Some Great Reward | The 12' Singles",
      "Remixes 81>04",
    ],
    date: "1983-07-11",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "The Garden",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/1t-gK-9EIq4?si=pPcS_Hsr_asIpQBj',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/1t-gK-9EIq4?si=pPcS_Hsr_asIpQBj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'youtube',
        route: 'https://youtu.be/CzqqVFb9p4U?si=1PERVW1aNoaPQja0',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/CzqqVFb9p4U?si=1PERVW1aNoaPQja0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1R1vbkHj40yexphG1i7x27?si=db109a61f5084bc0',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1R1vbkHj40yexphG1i7x27?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      },
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1GUHa1E9FNBS23tbyENdc9?si=52e0bb502d0b4bc3',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1GUHa1E9FNBS23tbyENdc9?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '32',
    title: "Work Hard",
    release: [
      "Everything Counts",
      "Construction Time Again (Deluxe)",
      "DMBX2",
      "Construction Time Again | The 12' Singles",
    ],
    date: "1983-07-11",
    composer: ["Martin Lee Gore", "Alan Charles Wilder"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "The Garden",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/5x4L8mxWlCk?si=bND6g3Kbx4zgvWpr',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/5x4L8mxWlCk?si=bND6g3Kbx4zgvWpr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1bXZXgR1C3mCwvUs5YfAom?si=edae432b8fac4765',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1bXZXgR1C3mCwvUs5YfAom?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '33',
    title: "Love in Itself",
    release: [
      "Love in itself",
      "Construction Time Again",
      "The Singles 81>85",
      "DMBX2",
      "Construction Time Again | The 12' Singles",
      "Love in Itself.2 and Live Tracks",
    ],
    date: "1983-09-19",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "The Garden",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/1pi_egc6qkY?si=G2bDUga_i1ET_OA1',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/1pi_egc6qkY?si=G2bDUga_i1ET_OA1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5S3zaA7Nngo8RcqkoYeQ5T?si=fccee4efc3c644b9',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5S3zaA7Nngo8RcqkoYeQ5T?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '34',
    title: "More Than a Party",
    release: [
      "Construction Time Again",
      "DMBX3",
      "Black Celebration | The 12' Singles",
    ],
    date: "1983-08-22",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "The Garden",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/mzkAdQWNFes?si=-_rzF1U0QVv8e8co',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/mzkAdQWNFes?si=-_rzF1U0QVv8e8co" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5tr231sWA8Ljqe6wqy0e8y?si=159411fd6c234dc9',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5tr231sWA8Ljqe6wqy0e8y?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '35',
    title: "Pipeline",
    release: ["Construction Time Again"],
    date: "1983-08-22",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "The Garden",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/yO0YjqMVAoo?si=tB93SKBsmMTwAf-a',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/yO0YjqMVAoo?si=tB93SKBsmMTwAf-a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/4iDwrsZTRCB66XVYD2wDUW?si=f39ad4a8a5824bb7',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4iDwrsZTRCB66XVYD2wDUW?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '36',
    title: "Two Minutes Warning",
    release: ["Construction Time Again", "Some Great Reward | The 12' Singles"],
    date: "1983-08-22",
    composer: ["Alan Charles Wilder"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "The Garden",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/wstvaT8ugQw?si=dIHkUuB7CYKbdECL',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/wstvaT8ugQw?si=dIHkUuB7CYKbdECL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6b0yXKXFtRUOK1wqxkE4rm?si=37db1604aca8489a',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6b0yXKXFtRUOK1wqxkE4rm?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '37',
    title: "Shame",
    release: ["Construction Time Again", "Black Celebration | The 12' Singles"],
    date: "1983-08-22",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "The Garden",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/U_Mi7BtL9sk?si=hIPKM3CmquEIA6jm',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/U_Mi7BtL9sk?si=hIPKM3CmquEIA6jm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2lVjEhXHXVKteIFvoyjcPz?si=e39f3fca676b4085',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2lVjEhXHXVKteIFvoyjcPz?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '38',
    title: "The Landscape is Changing",
    release: ["Construction Time Again"],
    date: "1983-08-22",
    composer: ["Alan Charles Wilder"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "The Garden",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/NxKUrDe_8hQ?si=Di3-jdUe_rmCIhmS',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/NxKUrDe_8hQ?si=Di3-jdUe_rmCIhmS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1GUHa1E9FNBS23tbyENdc9?si=52e0bb502d0b4bc3',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Rr6wXmEx6w6dsBuqqKJa3?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '39',
    title: "Told You So!",
    release: [
      "Construction Time Again",
      "Some Great Reward | The 12' Singles",
      "DMBX2",
    ],
    date: "1983-08-22",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "The Garden",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/-_gUm269ggQ?si=x18ujdaJpszo8owp',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/-_gUm269ggQ?si=x18ujdaJpszo8owp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/492EStazR9kk2ffjbN6bu1?si=831a76110f8a43b2',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/492EStazR9kk2ffjbN6bu1?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '40',
    title: "And Then...",
    release: ["Construction Time Again"],
    date: "1983-08-22",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "The Garden",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/nc-qXEua3dI?si=Pww6bSj3RRGBx0F-',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/nc-qXEua3dI?si=Pww6bSj3RRGBx0F-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5SLcAJmeqKUkDJbVpCMpeC?si=37c91b3879154a1a',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5SLcAJmeqKUkDJbVpCMpeC?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '41',
    title: "Fools",
    release: [
      "Construction Time Again (Deluxe)",
      "Construction Time Again | The 12' Singles",
      "DMBX2",
    ],
    date: "1983-08-22",
    composer: ["Alan Charles Wilder"],
    producer: ["Depeche Mode"],
    engineer: ["Trigger"],
    studio: [
      {
        name: "Aosis Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/lJdbylRb5r4?si=SYE_yotJv7TcW4xL',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/lJdbylRb5r4?si=SYE_yotJv7TcW4xL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5Sq7ieUOMdAbPbavAxCOpI?si=c9b7b06de7b44bea',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5Sq7ieUOMdAbPbavAxCOpI?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  // {
  //   title: "Love in Itself.4 (The Lounge Version)",
  //   release: [
  //     "Love in itself",
  //     "Construction Time Again (Deluxe)",
  //     "DMBX2",
  //     "Construction Time Again | The 12' Singles",
  //   ],
  //   date: "1983-09-19",
  //   composer: ["Martin Lee Gore"],
  //   producer: ["Daniel Miller", "Depeche Mode"],
  //   engineer: ["Trigger"],
  //   studio: [
  //     {
  //       name: "Aosis Studios",
  //       location: "London, England",
  //     },
  //     {
  //       name: "Hansa Mischraum",
  //       location: "Berlin, Germany",
  //     },
  //   ],
  // },
  {
    id: '42',
    title: "People are People",
    release: [
      "People are People",
      "Some Great Reward",
      "101",
      "The Singles 81>85",
      "Some Great Reward | The 12' Singles",
      "Black Celebration | The 12' Singles",
      "The Best of Depeche Mode vol 1",
      "DMBX2",
      "DMBX3",
    ],
    date: "1984-03-12",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones", "Ben Ward", "Stefi Marcus", "Colie McMahon"],
    studio: [
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/MzGnX-MbYE4?si=67sKkVlZZYviVQgI',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/MzGnX-MbYE4?si=67sKkVlZZYviVQgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/4WoKuMjwJXuy9IqX6AH5JE?si=8e94aa6609544637',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4WoKuMjwJXuy9IqX6AH5JE?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '43',
    title: "In Your Memory",
    release: [
      "Construction Time Again (Deluxe)",
      "Construction Time Again | The 12' Singles",
      "DMBX2",
    ],
    date: "1984-03-12",
    composer: ["Alan Charles Wilder"],
    producer: ["Depeche Mode", "Daniel Miller"],
    engineer: ["Trigger"],
    studio: [
      {
        name: "Aosis Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/-Pmrd54uexA?si=itNjzoyy3V4SI_qu',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/-Pmrd54uexA?si=itNjzoyy3V4SI_qu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2jiTAORUXe1te8D3zNmJOQ?si=c50e901be9924ca2',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2jiTAORUXe1te8D3zNmJOQ?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '44',
    title: "Master and Servant",
    release: [
      "Master and Servant",
      "Some Great Reward",
      "101",
      "The Singles 81>85",
      "DMBX2",
      "Some Great Reward | The 12' Singles",
      "The Best of Depeche Mode vol 1",
      "Remixes 81>04",
    ],
    date: "1984-08-20",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones", "Ben Ward", "Stefi Marcus", "Colie McMahon"],
    studio: [
      {
        name: "Music Works",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/IsvfofcIE1Q?si=7JJiteJOHTXUA41Z',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/IsvfofcIE1Q?si=7JJiteJOHTXUA41Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1GUHa1E9FNBS23tbyENdc9?si=52e0bb502d0b4bc3https://open.spotify.com/track/6E6RViXGAhLXHv4Sbe8e96?si=b60cdb16b1604a25',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1GUHa1E9FNBS23tbyENdc9?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '45',
    title: "(Set Me Free) Remotivate Me",
    release: [
      "Master and Servant",
      "Some Great Reward (Deluxe)",
      "DMBX2",
      "Some Great Reward | The 12' Singles",
    ],
    date: "1984-08-20",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones", "Ben Ward", "Stefi Marcus", "Colie McMahon"],
    studio: [
      {
        name: "Music Works",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/U6PT4HUffus?si=sOrRllkdSidYFTGr',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/U6PT4HUffus?si=sOrRllkdSidYFTGr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'hhttps://open.spotify.com/track/7MstB16ksTTG5MADilxiKE?si=20733c1a9a3a49f8',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7MstB16ksTTG5MADilxiKE?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  // {
  //   id: '131',
  //   title: "Are People People?",
  //   release: [
  //     "Master and Servant",
  //     "Some Great Reward | The 12' Singles",
  //     "Remixes 81>04",
  //   ],
  //   date: "1984-08-20",
  //   composer: ["Martin Lee Gore"],
  //   producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
  //   engineer: ["Gareth Jones", "Ben Ward", "Stefi Marcus", "Colie McMahon"],
  //   studio: [
  //     {
  //       name: "Music Works",
  //       location: "London, England",
  //     },
  //     {
  //       name: "Hansa Mischraum",
  //       location: "Berlin, Germany",
  //     },
  //   ],
  // },
  {
    id: '46',
    title: "Something To Do",
    release: [
      "Some Great Reward",
      "101",
      "Black Celebration | The 12' Singles",
      "DMBX3",
    ],
    date: "1984-09-24",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones", "Ben Ward", "Stefi Marcus", "Colie McMahon"],
    studio: [
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/ZZiexmgZvcM?si=s8yt5A_8dEz_4Tht',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/ZZiexmgZvcM?si=s8yt5A_8dEz_4Tht" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3MLgFF64J3h3xV7IQmRp33?si=6889b5221513451a',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3MLgFF64J3h3xV7IQmRp33?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '47',
    title: "Lie To Me",
    release: ["Some Great Reward", "Remixes 81>04"],
    date: "1984-09-24",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones", "Ben Ward", "Stefi Marcus", "Colie McMahon"],
    studio: [
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/1cKv5UZdYxc?si=n7YBVYm9bya2szlN',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/1cKv5UZdYxc?si=n7YBVYm9bya2szlN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/20fnqkgKNOzxDobwqSAMWa?si=82bca9ae23c6409a',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/20fnqkgKNOzxDobwqSAMWa?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '48',
    title: "It Doesn't Matter",
    release: ["Some Great Reward"],
    date: "1984-09-24",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones", "Ben Ward", "Stefi Marcus", "Colie McMahon"],
    studio: [
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/zfHT9WiADaE?si=cRoiP0fIbUsF4qFn',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/zfHT9WiADaE?si=cRoiP0fIbUsF4qFn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1nbtnU2737Kd4CGP11ka41?si=7943bc742e094325',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1nbtnU2737Kd4CGP11ka41?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '49',
    title: "Stories of Old",
    release: ["Some Great Reward", "Sounds of The Universe (Bonus DVD)"],
    date: "1984-09-24",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones", "Ben Ward", "Stefi Marcus", "Colie McMahon"],
    studio: [
      {
        name: "Music Works",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/IlUD3SXD20g?si=5aoexKHPcHTpbzaR',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/IlUD3SXD20g?si=5aoexKHPcHTpbzaR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/70YU4Tk89iy1YJxeCEVWlL?si=de2002b505864e6e',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/70YU4Tk89iy1YJxeCEVWlL?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '50',
    title: "Somebody",
    release: [
      "Blaphemous Rumours/Somebody",
      "Some Great Reward",
      "101",
      "The Singles 81>85",
      "Some Great Reward | The 12' Singles",
    ],
    date: "1984-10-29",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones", "Ben Ward", "Stefi Marcus", "Colie McMahon"],
    studio: [
      {
        name: "Music Works",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/jbaKcxTW7A8?si=YZI5bv2qt4VuOZFe',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/jbaKcxTW7A8?si=YZI5bv2qt4VuOZFe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/4jrMslkQYy6HVqKKPX2WXf?si=0e91a08c70e04f8c',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4jrMslkQYy6HVqKKPX2WXf?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '51',
    title: "If You Want",
    release: ["Some Great Reward", "Black Celebration | The 12' Singles"],
    date: "1984-09-24",
    composer: ["Alan Charles Wilder"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones", "Ben Ward", "Stefi Marcus", "Colie McMahon"],
    studio: [
      {
        name: "Music Works",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/0P2xwIscLb0?si=giafp6y5Y07kPIL0',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/0P2xwIscLb0?si=giafp6y5Y07kPIL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1YFOroRhn8Vylm8Avmo9M2?si=eef22a9e62414fdb',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1YFOroRhn8Vylm8Avmo9M2?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '52',
    title: "Blasphemous Rumours",
    release: [
      "Blaphemous Rumours/Somebody",
      "Some Great Reward",
      "101",
      "The Singles 81>85",
      "DMBX2",
      "Some Great Reward | The 12' Singles",
      "Black Celebration | The 12' Singles",
    ],
    date: "1984-10-29",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones", "Ben Ward", "Stefi Marcus", "Colie McMahon"],
    studio: [
      {
        name: "Music Works",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/o3EAzf5fDpY?si=4d9iMwSUITAvQfKR',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/o3EAzf5fDpY?si=4d9iMwSUITAvQfKR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/7oQX82XgUBDhSbpMSksG12?si=f4259ed6509640eb',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7oQX82XgUBDhSbpMSksG12?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '53',
    title: "Shake the Disease",
    release: [
      "Shake the Disease",
      "Black Celebration (Deluxe)",
      "101",
      "The Singles 81>85",
      "DMBX",
      "Live Spirits",
    ],
    date: "1985-04-29",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/r_0sL_SQYvw?si=zyJBU-6z18O37q6C',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/r_0sL_SQYvw?si=zyJBU-6z18O37q6C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3UP3kWn6I6sL2ZtpiXhJBo?si=16ff21f76eda4847',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3UP3kWn6I6sL2ZtpiXhJBo?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '54',
    title: "Flexible",
    release: ["Shake the Disease", "Black Celebration (Deluxe)", "DMBX3"],
    date: "1985-04-29",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Gareth Jones"],
    studio: [
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/INCl9BGOF3M?si=ph4bsNfTiSoYPzrv',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/INCl9BGOF3M?si=ph4bsNfTiSoYPzrv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0iwf85It3UFF9zf92PNp26?si=ef56b2c8df134f45',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0iwf85It3UFF9zf92PNp26?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '55',
    title: "It's Called a Heart",
    release: [
      "It's Called a Heart",
      "Black Celebration (Deluxe)",
      "The Singles 81>85",
      "DMBX3",
    ],
    date: "1985-09-16",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Dave Allen", "Phill Tennant"],
    studio: [
      {
        name: "Genetic Studios",
        location: "London, England",
      },
      {
        name: "Livingston Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/YQYs5AOXnOA?si=TZP7MzW5SCUi8Ttv',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/YQYs5AOXnOA?si=TZP7MzW5SCUi8Ttv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2aVSkmQJI8rHtpOHCxEGFq?si=3911e7606c91457b',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2aVSkmQJI8rHtpOHCxEGFq?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '56',
    title: "Fly on the Windscreen",
    release: [
      "It's called a Heart",
      "Black Celebration (Deluxe)",
      "Tour of The Universe",
      "Black Celebration | The 12' Singles",
      "Songs of Faith and Devotion | The 12' Singles",
      "DMBX3",
      "DMBX5",
    ],
    date: "1985-09-16",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode"],
    engineer: ["Dave Allen", "Phill Tennant"],
    studio: [
      {
        name: "Genetic Studios",
        location: "London, England",
      },
      {
        name: "Livingston Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/bwawje_ueXU?si=l-QjbB1ZAc5XCwMF',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/bwawje_ueXU?si=l-QjbB1ZAc5XCwMF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3emii2JPiMD1RD8mLjldM5?si=f20041c6e6a3490a',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3emii2JPiMD1RD8mLjldM5?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '57',
    title: "Stripped",
    release: [
      "Stripped",
      "Black Celebration",
      "101",
      "The Singles 86>98",
      "DMBX3",
      "Black Celebration | The 12' Singles",
      "Tour of The Universe",
      "Live Spirits",
    ],
    date: "1986-02-10",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Richard Sullivan", "Peter Schmidt"],
    studio: [
      {
        name: "Westside Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/qU8UfYdKHvs?si=f40qUMAmHEstmRYo',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/qU8UfYdKHvs?si=f40qUMAmHEstmRYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/7zqgw3dMGegkAAICkM8ncf?si=c31e8de3429f4859',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7zqgw3dMGegkAAICkM8ncf?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '58',
    title: "But not Tonight",
    release: [
      "Stripped",
      "Black Celebration",
      "DMBX3",
      "Black Celebration | The 12' Single",
      "Live Spirits",
    ],
    date: "1986-02-10",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Peter Schmidt"],
    studio: [
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/gVmFEFK-r6g?si=Z5xSsc2EbR9kgkoy',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/gVmFEFK-r6g?si=Z5xSsc2EbR9kgkoy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0mOAeFylUraa4kUB1B9QW3?si=5004d7de6bfd4631',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0mOAeFylUraa4kUB1B9QW3?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '59',
    title: "Breathing in Fumes",
    release: [
      "Stripped",
      "Black Celebration (Deluxe)",
      "DMBX3",
      "Black Celebration | The 12' Singles",
      "Remixes 81>04",
    ],
    date: "1986-02-10",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Gareth Jones", "Thomas Stiehler"],
    engineer: [],
    studio: [
      {
        name: "Westside Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/-jA0uIpiabA?si=DCNBu6B3TEht2fsn',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/-jA0uIpiabA?si=DCNBu6B3TEht2fsn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5TGhB2CdjujaTgIjvB1jaU?si=09635384c49e4ab9',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5TGhB2CdjujaTgIjvB1jaU?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      
      }
    ]
  },
  {
    id: '60',
    title: "Black Day",
    release: [
      "Stripped",
      "Black Celebration (Deluxe)",
      "DMBX3",
      "Black Celebration | The 12' Singles",
    ],
    date: "1986-02-10",
    composer: ["Martin Lee Gore", "Alan Charles Wilder", "Daniel Miller"],
    producer: ["Depeche Mode", "Gareth Jones", "Daniel Miller"],
    engineer: ["Richard Sullivan", "Peter Schmidt"],
    studio: [
      {
        name: "Westside Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/_6pERrNJvrU?si=cBB9L9WfShL0yzAx',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/_6pERrNJvrU?si=cBB9L9WfShL0yzAx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0NXk5OqYChMkgromA2kZ4k?si=7100e4d4ff774a99',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0NXk5OqYChMkgromA2kZ4k?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '61',
    title: "Black Celebration",
    release: [
      "Black Celebration",
      "101",
      "DMBX3",
      "Black Celebration | The 12' Single",
      "Live Spirits",
    ],
    date: "1986-03-17",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Peter Schmidt"],
    studio: [
      {
        name: "Worlwide Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/axs85iB5y1E?si=n5vxN_Y1pYS9PE-g',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/axs85iB5y1E?si=n5vxN_Y1pYS9PE-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6Ufh0H4emPePwyjusICVKb?si=0981d6502ff041ad',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Ufh0H4emPePwyjusICVKb?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '62',
    title: "Fly on The Windscreen - Final",
    release: ["Black Celebration"],
    date: "1986-03-17",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: [],
    studio: [
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/7h92I_wxVcs?si=TwUlFEhiU12xeRwF',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/7h92I_wxVcs?si=TwUlFEhiU12xeRwF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/38AuYZwkKQzeZY7OR0Vo4h?si=f22e9b4178b24dd6',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/38AuYZwkKQzeZY7OR0Vo4h?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '63',
    title: "A Question of Lust",
    release: [
      "Black Celebration",
      "A Question of Lust",
      "101",
      "Remixes 81>04",
      "The Singles 86>98",
      "DMBX3",
      "DMBX4",
      "Black Celebration | The 12' Singles",
    ],
    date: "1986-04-14",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Richard Sullivan", "Peter Schmidt"],
    studio: [
      {
        name: "Worlwide Studios",
        location: "London, England",
      },
      {
        name: "Westside Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/glw10co1IRs?si=kJpTlp6wA-gbE41t',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/glw10co1IRs?si=kJpTlp6wA-gbE41t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3eN5LFnqtfPAR7Jr8i2QuE?si=464a3c9450844985',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3eN5LFnqtfPAR7Jr8i2QuE?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '64',
    title: "Sometimes",
    release: ["Black Celebration"],
    date: "1986-03-17",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Peter Schmidt"],
    studio: [
      {
        name: "Worlwide Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/0nswsPp7dEw?si=qmjWAv9q9ALVq2pB',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/0nswsPp7dEw?si=qmjWAv9q9ALVq2pB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2Oafyh0e5tVlL5xgMgHarh?si=2cd0acdad32b4b7e',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2Oafyh0e5tVlL5xgMgHarh?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '65',
    title: "It Doesn't Matter Two",
    release: [
      "Black Celebration",
      "Black Celebration | The 12' Singles",
      "DMBX3",
    ],
    date: "1986-03-17",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Richard Sullivan", "Peter Schmidt"],
    studio: [
      {
        name: "Worlwide Studios",
        location: "London, England",
      },
      {
        name: "Westside Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/3BlJEmE75N8?si=RCt7OXWP3O7fXUPP',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/3BlJEmE75N8?si=RCt7OXWP3O7fXUPP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/7eGoYYByFajqs7lJ1kdRYy?si=e4dc22debcd541aa',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7eGoYYByFajqs7lJ1kdRYy?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      
      }
    ]
  },
  {
    id: '66',
    title: "A Question of Time",
    release: [
      "Black Celebratio",
      "Live Spirits",
      "Tour of The Universe",
      "The Singles 86>98",
      "101",
      "Remixes 2 81>11 (Deluxe)",
      "Black Celebration | The 12' Singles",
      "DMBX3",
    ],
    date: "1986-09-03",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Peter Schmidt"],
    studio: [
      {
        name: "Worlwide Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/9pt7EWFF_T8?si=Ug0jL0bPiAUod9QW',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/9pt7EWFF_T8?si=Ug0jL0bPiAUod9QW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/7l812LB02j5D8QTvpD6c8l?si=b09b2380b60a4bd0',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7l812LB02j5D8QTvpD6c8l?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'

      }
    ]
  },
  {
    id: '67',
    title: "Here is The House",
    release: ["Black Celebration"],
    date: "1986-09-03",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Richard Sullivan", "Peter Schmidt"],
    studio: [
      {
        name: "Worlwide Studios",
        location: "London, England",
      },
      {
        name: "Westside Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'hhttps://youtu.be/42FjiQKsPl4?si=KP5WQ-IVovKvMpve',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/42FjiQKsPl4?si=KP5WQ-IVovKvMpve" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5BepFANwD9If9EkO86JTS4?si=b4c96798ef2b4339',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5BepFANwD9If9EkO86JTS4?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '68',
    title: "World Full of Nothing",
    release: ["Black Celebration"],
    date: "1986-09-03",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Richard Sullivan", "Peter Schmidt"],
    studio: [
      {
        name: "Worlwide Studios",
        location: "London, England",
      },
      {
        name: "Westside Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/3MF778cxI-s?si=PKhIfXvy938I2rMo',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/3MF778cxI-s?si=PKhIfXvy938I2rMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6Fv7LkhProdzxx9IDFJYuY?si=f088a0ef964845ea',
          insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Fv7LkhProdzxx9IDFJYuY?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      
      }
    ]
  },
  {
    id: '69',
    title: "Dressed in Black",
    release: ["Black Celebration", "Tour of The Universe"],
    date: "1986-09-03",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Richard Sullivan", "Peter Schmidt"],
    studio: [
      {
        name: "Worlwide Studios",
        location: "London, England",
      },
      {
        name: "Westside Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/b4LxelkqUnk?si=uUPzmm-rlyZkk-VB',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/b4LxelkqUnk?si=uUPzmm-rlyZkk-VB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/614CMVCu5pUDXPE7WkLwZq?si=6eae213ffb554f04',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/614CMVCu5pUDXPE7WkLwZq?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      
      }
    ]
  },
  {
    id: '70',
    title: "New Dress",
    release: ["Black Celebration"],
    date: "1986-09-03",
    composer: ["Martin Lee Gore"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Richard Sullivan", "Peter Schmidt"],
    studio: [
      {
        name: "Worlwide Studios",
        location: "London, England",
      },
      {
        name: "Westside Studios",
        location: "London, England",
      },
      {
        name: "Hansa Mischraum",
        location: "Berlin, Germany",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/aYutmGaUAXc?si=LyFxanoBCMlA1Apv',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/aYutmGaUAXc?si=LyFxanoBCMlA1Apv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/4abUZEEdNN4wDgQ8N7CNSs?si=17f8869e2d3f4698',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4abUZEEdNN4wDgQ8N7CNSs?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '71',
    title: "Christmas Island ",
    release: [
      "Black Celebration (Deluxe)",
      "A Question of Lust",
      "Black Celebration | The 12' Singles",
      "DMBX3",
    ],
    date: "1986-04-14",
    composer: ["Martin Lee Gore", "Alan Charles Wilder"],
    producer: ["Daniel Miller", "Depeche Mode", "Gareth Jones"],
    engineer: ["Trigger"],
    studio: [
      {
        name: "Trident Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/eOj88ftXG_Q?si=fOngDdl2JtfIsZ-w',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/eOj88ftXG_Q?si=fOngDdl2JtfIsZ-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6Ke0AYlrzGMH1HYu0605O4?si=80ac7455030b400c',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Ke0AYlrzGMH1HYu0605O4?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '72',
    title: "Strangelove",
    release: [
      "Strangelove",
      "Music For The Masses",
      "Music For The Masses | The 12' Singles",
      "DMBX4",
      "The Singles 86>98",
      "Remixes 81>04",
      "101",
      "Remixes 2 81>11 (Deluxe)",
      "The Best of Depeche Mode vol 1",
    ],
    date: "1987-04-13",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Guillaume Tell",
        location: "Paris, France",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/MHRabky4Ajc?si=ZZ7ejRfXEFc8dejh',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/MHRabky4Ajc?si=ZZ7ejRfXEFc8dejh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2dQd2qrFB5VtuUMp45G41p?si=cb96c75f8ab84163',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2dQd2qrFB5VtuUMp45G41p?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '73',
    title: "Pimpf",
    release: [
      "Strangelove",
      "Music For The Masses",
      "Music For The Masses | The 12' Singles",
      "DMBX4",
      "101",
    ],
    date: "1987-04-13",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Guillaume Tell",
        location: "Paris, France",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/MR_rqDxDInI?si=Vwf2f3vg0AG7kZAq',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/MR_rqDxDInI?si=Vwf2f3vg0AG7kZAq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/38Tg05FMPXwP7tj32p4YZx?si=f0ea7f1c68cb494e',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Rr6wXmEx6w6dsBuqqKJa3?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '74',
    title: "Agent Orange",
    release: [
      "Strangelove",
      "Music For The Masses (Deluxe)",
      "Music For The Masses | The 12' Singles",
      "DMBX4",
    ],
    date: "1987-04-13",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Guillaume Tell",
        location: "Paris, France",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/zDURN5YeFpA?si=00ezJmk98TIjjuUC',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/zDURN5YeFpA?si=00ezJmk98TIjjuUC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3nq78Z5K7O31v3ve5akWzD?si=47ce1bc03b224ae5',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3nq78Z5K7O31v3ve5akWzD?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '75',
    title: "Never Let Me Down Again",
    release: [
      "Never Let Me Down Again",
      "Music For The Masses",
      "Music For The Masses | The 12' Singles",
      "The Singles 86>98",
      "Remixes 2 81>11",
      "Remixes 81>04",
      "Songs of Faith and Devotion | The 12' Singles",
      "DMBX4",
      "DMBX5",
      "10",
      "Live Spirits",
      "Live Spirits",
      "Tour of The Universe",
    ],
    date: "1987-08-24",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode", "Daniel Miller"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Konk",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/snILjFUkk_A?si=YXrm5TkyXsHPp84A',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/snILjFUkk_A?si=YXrm5TkyXsHPp84A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0T57cTUpYpvSvZ3GowBuTP?si=126a0ee6729649fa',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0T57cTUpYpvSvZ3GowBuTP?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '76',
    title: "Pleasure Little Treasure",
    release: [
      "Never Let Me Down Again",
      "Music For The Masses (Deluxe)",
      "Music For The Masses | The 12' Singles",
      "DMBX4",
      "101",
    ],
    date: "1987-08-24",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Konk",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/aS3RLrtCJ5U?si=RqeTtqQ8zYyWSo8C',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/aS3RLrtCJ5U?si=RqeTtqQ8zYyWSo8C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1qyg7Am9aCPGEjVFWlTXd7?si=4b806a27c73b4b3a',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1qyg7Am9aCPGEjVFWlTXd7?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      
      }
    ]
  },
  {
    id: '77',
    title: "To Have And To Hold",
    release: [
      "Never Let Me Down Again",
      "Music For The Masses (Deluxe)",
      "Music For The Masses | The 12' Singles",
      "DMBX4",
    ],
    date: "1987-08-24",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Konk",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/_5_EfcsPtCY?si=5DSWJF8rioatzaa7',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/_5_EfcsPtCY?si=5DSWJF8rioatzaa7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3sI2TdxWM8byV39AuZnT1I?si=7aac6c8511f34053',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3sI2TdxWM8byV39AuZnT1I?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '78',
    title: "The Things You Said",
    release: ["Music For The Masses", "Live Spirits", "101"],
    date: "1987-09-28",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode", "Daniel Miller"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Konk",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/0r0mjPctuoE?si=nS2fzrDoH1qgNedQ',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/0r0mjPctuoE?si=nS2fzrDoH1qgNedQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5tb8T4WJ5SULuf8lNkVfEp?si=5345557e89ee46db',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5tb8T4WJ5SULuf8lNkVfEp?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '79',
    title: "Sacred",
    release: ["Music For The Masses", "DMBX4", "101"],
    date: "1987-09-28",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Guillaume Tell",
        location: "Paris, France",
      },
      {
        name: "PUK",
        location: "Jutland, Denmark",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/bWsda-qXUm8?si=b6zQyNCSlBg74Ram',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/bWsda-qXUm8?si=b6zQyNCSlBg74Ram" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3mPCk0Ocv8VDjMxqetOjuT?si=e7d9baf0ced44725',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3mPCk0Ocv8VDjMxqetOjuT?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      
      }
    ]
  },
  {
    id: '80',
    title: "Little 15",
    release: ["Music For The Masses", "DMBX4", "101"],
    date: "1988-05-16",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Konk",
        location: "London, England",
      },
      {
        name: "PUK",
        location: "Jutland, Denmark",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/OTUlg__sVYo?si=__FA3O_yPEH1oiSi',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/OTUlg__sVYo?si=__FA3O_yPEH1oiSi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/739C9IOMRahci0gvwvCezN?si=5f8f4f9427994bf6',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/739C9IOMRahci0gvwvCezN?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '81',
    title: "I Want You Now",
    release: ["Music For The Masses", "Live Spirits"],
    date: "1987-09-28",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Konk",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/IfuD44g-DaI?si=vM-NoemFskF_zw6I',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/IfuD44g-DaI?si=vM-NoemFskF_zw6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/17ZEaWR8S3eY9bgRiehWCr?si=67e4aa94e2ad4d00',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/17ZEaWR8S3eY9bgRiehWCr?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '82',
    title: "Nothing",
    release: [
      "Music For The Masses",
      "Strangelove 88",
      "101",
      "Remixes 81>04",
      "DMBX4",
    ],
    date: "1987-09-28",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Konk",
        location: "London, England",
      },
      {
        name: "PUK",
        location: "Jutland, Denmark",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/SGqmtAID02A?si=WeiuVxGBegpkrsxo',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/SGqmtAID02A?si=WeiuVxGBegpkrsxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0An4JCjZx3bggBA2F0Ksg1?si=09bde3a8926d43e2',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0An4JCjZx3bggBA2F0Ksg1?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '83',
    title: "Interlude #1: Mission Impossible",
    release: ["Music For The Masses"],
    date: "1987-09-28",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Guillaume Tell",
        location: "Paris, France",
      },
    ],
    media: []
  },
  {
    id: '84',
    title: "Behind the Wheel",
    release: ["Music For The Masses", "DMBX4", "101"],
    date: "1987-12-28",
    composer: ["Martin Lee Gore"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Konk",
        location: "London, England",
      },
      {
        name: "Guillaume Tell",
        location: "Paris, France",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/zJ2yQH6Nw5U?si=gdOuObYggmV0M392',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/zJ2yQH6Nw5U?si=gdOuObYggmV0M392" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5ZO4gjA1fMk0cD4EFkPSYT?si=02106e9b566a4b64',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5ZO4gjA1fMk0cD4EFkPSYT?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '85',
    title: "Route 66",
    release: [
      "DMBX4",
      "Music For The Masses (Deluxe)",
      "Music For The Masses | The 12' Singles",
      "Remixes 81>04",
      "101",
    ],
    date: "1987-12-28",
    composer: ["Bobby Troup"],
    producer: ["Dave Bascombe", "Depeche Mode"],
    engineer: ["Dave Bascombe"],
    studio: [
      {
        name: "Konk",
        location: "London, England",
      },
      {
        name: "Guillaume Tell",
        location: "Paris, France",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/2PnOlP5RR7w?si=Qn3HlSPnpuitIxe5',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/2PnOlP5RR7w?si=Qn3HlSPnpuitIxe5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/31ONyQ6X1y7gkNPpXikUD8?si=8a449f6f970c4db6',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/31ONyQ6X1y7gkNPpXikUD8?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '86',
    title: "Stjarna",
    release: [
      "DMBX3",
      "Music For The Masses (Deluxe)",
      "Music For The Masses | The 12' Singles",
      "Little 15",
    ],
    date: "1987-12-28",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode"],
    engineer: ["Stephen Taylor", "James Monkman"],
    studio: [
      {
        name: "Strongroom",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/UA-rErzwk_4?si=XXf7ama_P6y1LqnW',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/UA-rErzwk_4?si=XXf7ama_P6y1LqnW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/63dUIJcGidZ9HC7ruuolk6?si=326ca6b2c8354ddd',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/63dUIJcGidZ9HC7ruuolk6?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '87',
    title: "Sonata N° 14 in C#m 'Moonlight Sonata'",
    release: [
      "DMBX3",
      "Music For The Masses (Deluxe)",
      "Music For The Masses | The 12' Singles",
      "Little 15",
    ],
    date: "1987-12-28",
    composer: ["Ludwig Van Beethoven"],
    producer: ["Depeche Mode"],
    engineer: ["Stephen Taylor", "James Monkman"],
    studio: [
      {
        name: "Strongroom",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/Y6MxOmmnnds?si=U96zeDZzg6ppL_ne',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/Y6MxOmmnnds?si=U96zeDZzg6ppL_ne" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/02IMqsnfmPqqz6G3QxDw4e?si=65d6c7eb13434e10',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/02IMqsnfmPqqz6G3QxDw4e?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '88',
    title: "Personal Jesus",
    release: [
      "Personal Jesus",
      "Violator",
      "Remixes 81>04",
      "DMBX4",
      "DMBX5",
      "Remixes 2 81>11 (Deluxe)",
      "Remixes 2 81>11",
      "Violator | The 12' Singles",
      "Songs of Faith and Devotion | The 12' Singles",
      "Personal Jesus 2011",
      "The Best of Depeche Mode vol 1",
      "The Singles 86>98",
      "Tour of The Universe",
      "Live in Berlin",
      "Live Spirits",
    ],
    date: "1989-08-29",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [
      "Pino Pischetola",
      "Dennis Mitchell",
      "Daryl Bamonte",
      "Dick Meany",
      "David Browne",
      "Mark Flannery",
      "Ricky",
    ],
    studio: [
      {
        name: "Logic",
        location: "Milan, Italy",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/u1xrNaTO1bI?si=gJ4TtdYUMuEn_uQ4',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/u1xrNaTO1bI?si=gJ4TtdYUMuEn_uQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0TBn49AjkNufCRJ2O5VJ6s?si=f3e9ca5dceea49c6',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0TBn49AjkNufCRJ2O5VJ6s?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '89',
    title: "Dangerous",
    release: [
      "Personal Jesus",
      "Violator (Deluxe)",
      "DMBX4",
      "Violator | The 12' Singles",
    ],
    date: "1989-08-29",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: ["Pino Pischetola"],
    studio: [
      {
        name: "Logic",
        location: "Milan, Italy",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/hod_ped-1rM?si=8d6knaNRv6ILCKtH',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/hod_ped-1rM?si=8d6knaNRv6ILCKtH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3PGRdlUoWnj8NHmbA5xTYS?si=243a48512b9645d7',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3PGRdlUoWnj8NHmbA5xTYS?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '90',
    title: "Enjoy The Silence",
    release: [
      "Enjoy The Silence",
      "Violator",
      "DMBX4",
      "Violator | The 12' Singles",
      "The Singles 86>98",
      "Remixes 81>04",
      "Tour of The Universe",
      "Live in Berlin",
      "Live Spirits",
      "Enjoy The Silence 04",
      "Songs of Faith and Devotion | The 12' Singles",
      "DMBX5",
    ],
    date: "1990-02-05",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: ["Peter Iversen"],
    studio: [
      {
        name: "PUK",
        location: "Jutland, Denmark",
      },
      {
        name: "Master Rocks Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/aGSKrC7dGcY?si=1AH3OrA2JwSAVzWj',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/aGSKrC7dGcY?si=1AH3OrA2JwSAVzWj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1JekRMGQ8iN4G1AAdh0SBa?si=3145ce2aed514684',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1JekRMGQ8iN4G1AAdh0SBa?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '91',
    title: "Memphisto",
    release: [
      "Enjoy The Silence",
      "Violator (Deluxe)",
      "DMBX4",
      "Violator | The 12' Singles",
    ],
    date: "1990-02-05",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode"],
    engineer: ["Steve Lion"],
    studio: [
      {
        name: "The Church",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/E4fLMUGreQo?si=64TvUqXYqZDDl0MG',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/E4fLMUGreQo?si=64TvUqXYqZDDl0MG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/07z0qZjflfHSkRBZoiIuVx?si=e5225a650d3e4299',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/07z0qZjflfHSkRBZoiIuVx?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '92',
    title: "Sibeling",
    release: [
      "Enjoy The Silence",
      "Violator (Deluxe)",
      "DMBX4",
      "Violator | The 12' Singles",
    ],
    date: "1990-02-05",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode"],
    engineer: ["Steve Lion"],
    studio: [
      {
        name: "The Church",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/Upqy1sYo-Tc?si=ELb43SLSYhSaaS7R',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/Upqy1sYo-Tc?si=ELb43SLSYhSaaS7R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5vO0HHrZWe2cmE3Qu8ZoUs?si=d0d5a88015f04b27',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5vO0HHrZWe2cmE3Qu8ZoUs?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '93',
    title: "Sweetest perfection",
    release: [
      "Violator",
      "Remixes 2 81>11 (Deluxe)",
      "Sounds of The Universe (Deluxe)",
    ],
    date: "1990-03-19",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: ["Steve Lion", "Pino Pischetola"],
    studio: [
      {
        name: "The Church",
        location: "London, England",
      },
      {
        name: "Logic",
        location: "Milan, Italy",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/oZoBAr8cGHM?si=HJj-SSZjnXdju3ta',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/oZoBAr8cGHM?si=HJj-SSZjnXdju3ta" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1XSjN64QCdFauII9t0IaGk?si=40f4fb48e29a42c5',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1XSjN64QCdFauII9t0IaGk?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '94',
    title: "Halo",
    release: [
      "Violator",
      "Remixes 81>04",
      "DMBX5",
      "Songs of Faith and Devotion | The 12' Singles",
      "Live in Berlin",
    ],
    date: "1990-03-19",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: ["Steve Lion", "Pino Pischetola"],
    studio: [
      {
        name: "The Church",
        location: "London, England",
      },
      {
        name: "Logic",
        location: "Milan, Italy",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/iEH4eqtK8SU?si=COgDrdeXF1vIYmnO',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/iEH4eqtK8SU?si=COgDrdeXF1vIYmnO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6Rr6wXmEx6w6dsBuqqKJa3?si=e45845068d0d4f70',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Rr6wXmEx6w6dsBuqqKJa3?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
    
  },
  {
    id: '95',
    title: "Waiting for the night",
    release: ["Violator", "Playing The Angel (Deluxe)", "Tour of The Universe"],
    date: "1990-03-19",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: ["Steve Lion", "Pino Pischetola"],
    studio: [
      {
        name: "The Church",
        location: "London, England",
      },
      {
        name: "Logic",
        location: "Milan, Italy",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/HVyUqxilaYY?si=A_AGbYj6tS32bdWS',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/HVyUqxilaYY?si=A_AGbYj6tS32bdWS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/1VEIMGVXj7713dHY9gZLyU?si=4d22ea0a76384263',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1VEIMGVXj7713dHY9gZLyU?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '96',
    title: "Blue Dress",
    release: ["Violator"],
    date: "1990-03-19",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: ["Steve Lion", "Pino Pischetola"],
    studio: [
      {
        name: "The Church",
        location: "London, England",
      },
      {
        name: "Logic",
        location: "Milan, Italy",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/A8RmelAYu0k?si=HgPI8IQ5GEAs25ri',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/A8RmelAYu0k?si=HgPI8IQ5GEAs25ri" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5wmrY6ZtM1q7Q2FAoOG48r?si=1995f8d5a8e54ef6',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5wmrY6ZtM1q7Q2FAoOG48r?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '97',
    title: "Clean",
    release: [
      "Violator",
      "Playing The Angel (Deluxe)",
      "Sounds of The Universe (Deluxe)",
      "Remixes 81>04",
    ],
    date: "1990-03-19",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: ["Steve Lion", "Pino Pischetola"],
    studio: [
      {
        name: "The Church",
        location: "London, England",
      },
      {
        name: "Logic",
        location: "Milan, Italy",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/h1mD-_DKHc0?si=4BTz8rl3yTdKo_XQ',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/h1mD-_DKHc0?si=4BTz8rl3yTdKo_XQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/7Eb5WxoHyG3V9pd4XGaqQb?si=48049b4fcb4f4a23',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7Eb5WxoHyG3V9pd4XGaqQb?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '98',
    title: "Policy of Truth",
    release: [
      "Policy of Truth",
      "Violator",
      "Sounds of The Universe (Deluxe)",
      "Remixes 81>04",
    ],
    date: "1990-05-07",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: ["Steve Lion", "Peter Iversen", "Goh Hotada"],
    studio: [
      {
        name: "The Church",
        location: "London, England",
      },
      {
        name: "PUK",
        location: "Jutland, Denmark",
      },
      {
        name: "Axis Studios",
        location: "New York, USA",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/M2VBmHOYpV8?si=qT6YWwl-cwBlPUcc',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/M2VBmHOYpV8?si=qT6YWwl-cwBlPUcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0Mb20VmqR2lvtgbEermW2v?si=9653c70571c949cf',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0Mb20VmqR2lvtgbEermW2v?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '99',
    title: "Kaleid",
    release: [
      "Policy of Truth",
      "Violator (Deluxe)",
      "Violator | The 12' Singles",
      "DMBX5",
    ],
    date: "1990-05-07",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode"],
    engineer: ["Steve Lion"],
    studio: [
      {
        name: "Konk",
        location: "London, England",
      },
      {
        name: "Worlwide Studios",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/CGUEwnhK5qs?si=zB_kWbrSiD1oo9Mv',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/CGUEwnhK5qs?si=zB_kWbrSiD1oo9Mv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0ySnbGhJgcBM2OLgb9ed8v?si=17f04c08cf824d75',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0ySnbGhJgcBM2OLgb9ed8v?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '100',
    title: "Happiest Girl",
    release: [
      "World in My Eyes",
      "Violator (Deluxe)",
      "Violator | The 12' Singles",
      "DMBX5",
    ],
    date: "1990-09-17",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: ["Steve Lion", "Pino Pischetola", "Lloyd Puckitt"],
    studio: [
      {
        name: "Logic",
        location: "Milan, Italy",
      },
      {
        name: "The Church",
        location: "London, England",
      },
      {
        name: "Axis Studios",
        location: "New York, USA",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/s9Qes1MCvBg?si=eYBj-o1O9Tx7q_6A',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/s9Qes1MCvBg?si=eYBj-o1O9Tx7q_6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/7iqd4HnGXSSFXP3ASHq1dk?si=9e3f0039ca7a471e',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7iqd4HnGXSSFXP3ASHq1dk?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '101',
    title: "World in my eyes",
    release: [
      "World in My Eyes",
      "Violator",
      "Violator | The 12' Singles",
      "DMBX5",
      "DMBX6",
      "The Singles 86>98",
      "Remixes 81>04",
      "Songs of Faith and Devotion | The 12' Singles",
      "Live Spirits",
      "Remixes 2 81>11 (Deluxe)",
    ],
    date: "1990-09-17",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: ["Steve Lion", "Pino Pischetola"],
    studio: [
      {
        name: "Logic",
        location: "Milan, Italy",
      },
      {
        name: "The Church",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/nhZdL4JlnxI?si=jfVJpKZ1VRRQD-db',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/nhZdL4JlnxI?si=jfVJpKZ1VRRQD-db" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0TBn49AjkNufCRJ2O5VJ6s?si=da9d9b836e03426b',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0TBn49AjkNufCRJ2O5VJ6s?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '102',
    title: "Sea of Sin",
    release: [
      "World in My Eyes",
      "Violator (Deluxe)",
      "Violator | The 12' Singles",
      "DMBX5",
    ],
    date: "1990-09-17",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: ["Steve Lion", "Pino Pischetola", "Lloyd Puckitt"],
    studio: [
      {
        name: "Logic",
        location: "Milan, Italy",
      },
      {
        name: "The Church",
        location: "London, England",
      },
      {
        name: "Axis Studios",
        location: "New York, USA",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/FQUkaJT8lso?si=X9t-A8owmK8DV4P1',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/FQUkaJT8lso?si=X9t-A8owmK8DV4P1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0EO1b2a24v8asgo0XNyPk0?si=657d7cdd746642d9',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0EO1b2a24v8asgo0XNyPk0?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '103',
    title: "Death’s door",
    release: [
      "Until The End Of The World",
      "Death's Door PROMO",
      "Songs of Faith and Devotion (Deluxe)",
      "Songs of Faith and Devotion | The 12' Singles",
      "DMBX5",
    ],
    date: "1992-??-??",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode"],
    engineer: ["Steve Lion"],
    studio: [
      {
        name: "Konk",
        location: "London, England",
      },
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/7R7dPHiDsZs?si=XfS2PmbvEw1gs2hb',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/7R7dPHiDsZs?si=XfS2PmbvEw1gs2hb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2xRk5pTVamcjFKDl3pZa93?si=27e9385d37d746a6',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2xRk5pTVamcjFKDl3pZa93?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '104',
    title: "I Feel You",
    release: [
      "I Feel You",
      "Songs of Faith and Devotion (Deluxe)",
      "The Singles 86>98",
      "Songs of Faith and Devotion (Live)",
      "DMBX5",
      "Live in Berlin",
      "Tour of The Universe",
      "Sounds of The Universe (Deluxe)",
      "Songs of Faith and Devotion | The 12' Singles",
      "Remixes 81>04",
      "The Best of Depeche Mode vol 1",
      "Remixes 2 81>11"
    ],
    date: "1993-02-15",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [ "Steve Lion", "Chris Dickie"],
    studio: [
      {
        name: "Chapeau du pape",
        location: "Hamburg, Germany"
      },
      {
        name: "Olympic Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/iTKJ_itifQg?si=AgxAaEoU6flPpcYs',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/iTKJ_itifQg?si=AgxAaEoU6flPpcYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2M0SsKN720GGXcCqhB96LX?si=25f0585d04e34793',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2M0SsKN720GGXcCqhB96LX?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '105',
    title: "One Caress",
    release: [
      "I Feel You",
      "Songs of Faith and Devotion (Deluxe)",
      "Songs of Faith and Devotion (Live)",
      "DMBX5",
      "Songs of Faith and Devotion | The 12' Singles"
    ],
    date: "1993-02-15",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [ "Steve Lion", "Chris Dickie"],
    studio: [
      {
        name: "Chapeau du pape",
        location: "Hamburg, Germany"
      },
      {
        name: "Olympic Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/fphsbLtrDe8?si=usHt8q7PMtFfu7kw',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/fphsbLtrDe8?si=usHt8q7PMtFfu7kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5EzNdszibI9d4ZMMaRzKuk?si=25715e8e1abb4b81',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5EzNdszibI9d4ZMMaRzKuk?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '106',
    title: "Mercy in You",
    release: [
      "Songs of Faith and Devotion (Deluxe)",
      "Songs of Faith and Devotion (Live)"
    ],
    date: "1993-03-22",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [ "Steve Lion", "Chris Dickie", "Paul Kendall"],
    studio: [
      {
        name: "Residential Chalet",
        location: "Madrid, Spain"
      },
      {
        name: "Chapeau du pape",
        location: "Hamburg, Germany"
      },
      {
        name: "Olympic Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/8CqWFwOca-0?si=hI4MzpIgo7H8g-md',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/8CqWFwOca-0?si=hI4MzpIgo7H8g-md" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/637PXsKq2k2BTugVRA20ZV?si=bba5c7c864304644',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/637PXsKq2k2BTugVRA20ZV?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '107',
    title: "Judas",
    release: [
      "Songs of Faith and Devotion (Deluxe)",
      "Songs of Faith and Devotion (Live)", 
      "Sounds of The Universe (Deluxe)"
    ],
    date: "1993-03-22",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [ "Steve Lion", "Chris Dickie", "Paul Kendall"],
    studio: [
      {
        name: "Chapeau du pape",
        location: "Hamburg, Germany"
      },
      {
        name: "Olympic Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/4PEPjZ1KCzM?si=PBpqUwDcpQ1B332G',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/4PEPjZ1KCzM?si=PBpqUwDcpQ1B332G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3W0phVhCtM6ATS8KmDk9Md?si=7535cebb43544928',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3W0phVhCtM6ATS8KmDk9Md?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '108',
    title: "Get Right With Me",
    release: [
      "Songs of Faith and Devotion (Deluxe)",
      "Songs of Faith and Devotion (Live)"
    ],
    date: "1993-03-22",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [ "Steve Lion", "Chris Dickie", "Paul Kendall"],
    studio: [
      {
        name: "Chapeau du pape",
        location: "Hamburg, Germany"
      },
      {
        name: "Olympic Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/2TLn-JYej8M?si=asBroHzwOFync4hg',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/2TLn-JYej8M?si=asBroHzwOFync4hg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/02FuV3FilH9EvzMo5BejpG?si=6dfbdb3fbcc549f9',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/02FuV3FilH9EvzMo5BejpG?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  ,
  {
    id: '109',
    title: "Rush",
    release: [
      "Songs of Faith and Devotion (Deluxe)",
      "Songs of Faith and Devotion (Live)", 
      "Remixes 81>04",
      "Songs of Faith and Devotion | The 12' Singles",
      "DMBX5"
    ],
    date: "1993-03-22",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [ "Steve Lion"],
    studio: [
      {
        name: "Residential Chalet",
        location: "Madrid, Spain"
      },
      {
        name: "Chapeau du pape",
        location: "Hamburg, Germany"
      },
      {
        name: "Olympic Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/jZphu_bZsKU?si=YGpDO2Jrx57rQjA2',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/jZphu_bZsKU?si=YGpDO2Jrx57rQjA2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0WWn01c1xisnbTKStjLiY2?si=2108259452744450',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0WWn01c1xisnbTKStjLiY2?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '110',
    title: "Higher Love",
    release: [
      "Songs of Faith and Devotion (Deluxe)",
      "Songs of Faith and Devotion (Live)", 
      "Remixes 2 81>11 (Deluxe)",
      "Songs of Faith and Devotion | The 12' Singles",
      "DMBX5"
    ],
    date: "1993-03-22",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [ "Steve Lion", "Chris Dickie", "Paul Kendall"],
    studio: [
      {
        name: "Residential Chalet",
        location: "Madrid, Spain"
      },
      {
        name: "Chapeau du pape",
        location: "Hamburg, Germany"
      },
      {
        name: "Olympic Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/3Wo34uNXI5Q?si=R3jtMT65K4bV0fXx',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/3Wo34uNXI5Q?si=R3jtMT65K4bV0fXx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2MEgNX56NePhc8o9jxmUXm?si=189dc53f01234960',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2MEgNX56NePhc8o9jxmUXm?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '111',
    title: "Walking in My Shoes",
    release: [
      "Songs of Faith and Devotion (Deluxe)",
      "Songs of Faith and Devotion (Live)",
      "The Singles 86>98",
      "Tour of The Universe",
      "Live in Berlin",
      "The Best of Depeche Mode vol 1", 
      "Sounds of The Universe (Deluxe)",
      "Remixes 81>04",
      "Remixes 2 81>11 (Deluxe)",
      "LiVE SPiRiTS",
      "Songs of Faith and Devotion | The 12' Singles",
      "DMBX5"
    ],
    date: "1993-04-26",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [ "Steve Lion", "Chris Dickie"],
    studio: [
      {
        name: "Chapeau du pape",
        location: "Hamburg, Germany"
      },
      {
        name: "Olympic Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/GrC_yuzO-Ss?si=D0jCKV1SOOqDUSf3',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/GrC_yuzO-Ss?si=D0jCKV1SOOqDUSf3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2Y7ndoyiIm0IaFJa13gV3H?si=fb8b7264f6d94917',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2Y7ndoyiIm0IaFJa13gV3H?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '112',
    title: "My Joy",
    release: [
      "Songs of Faith and Devotion (Deluxe)",
      "Songs of Faith and Devotion | The 12' Singles",
      "DMBX5"
    ],
    date: "1993-04-26",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [ "Steve Lion", "Chris Dickie"],
    studio: [
      {
        name: "Chapeau du pape",
        location: "Hamburg, Germany"
      },
      {
        name: "Olympic Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/0HZfsDjpARQ?si=ChGOSu6LzuwlhMIe',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/0HZfsDjpARQ?si=ChGOSu6LzuwlhMIe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/34fJq0GHrX0zBcP0wqVdLA?si=1967dfb6bdce44a9',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/34fJq0GHrX0zBcP0wqVdLA?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '113',
    title: "Condemnation",
    release: [
      "Condemnation",
      "Songs of Faith and Devotion (Deluxe)",
      "Songs of Faith and Devotion (Live)",
      "Songs of Faith and Devotion | The 12' Singles",
      "DMBX5",
      "The Singles 86>98"
    ],
    date: "1993-09-13",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [ "Steve Lion"],
    studio: [
      {
        name: "Residential Chalet",
        location: "Madrid, Spain"
      },
      {
        name: "Guillaume Tell Studios",
        location: "Paris, France"
      },
      {
        name: "Olympic Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/bjG7MhfeQRA?si=q5XOGFiw9HyoNz4z',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/bjG7MhfeQRA?si=q5XOGFiw9HyoNz4z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3qj2xGVJ7Sr4ISDPP5WVXy?si=fa6cb5ff2c4544c0',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3qj2xGVJ7Sr4ISDPP5WVXy?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '114',
    title: "In Your Room",
    release: [
      "In Your Room",
      "Songs of Faith and Devotion (Deluxe)",
      "Songs of Faith and Devotion (Live)",
      "Songs of Faith and Devotion | The 12' Singles",
      "DMBX5",
      "The Singles 86>98",
      "Remixes 81>04", 
      "Tour of The Universe"

    ],
    date: "1994-01-10",
    composer: ["Martin Lee Gore"],
    producer: ["Depeche Mode", "Flood"],
    engineer: [ "Steve Lion"],
    studio: [
      {
        name: "Residential Chalet",
        location: "Madrid, Spain"
      },
      {
        name: "Olympic Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/cGvZyrhObrg?si=8BRUscjnyZ3XlSF6',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/cGvZyrhObrg?si=8BRUscjnyZ3XlSF6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/60hzrNGckC5cho1JkmyVm4?si=f75e33fb422b42ff',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/60hzrNGckC5cho1JkmyVm4?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '115',
    title: "Barrel of a Gun",
    release: [
      "Barrel of a Gun",
      "Ultra (Deluxe)",
      "Ultra | The 12' Singles",
      "DMBX6",
      "The Singles 86>98",
      "Remixes 81>04",
      "Remixes 2 81>11 (Deluxe)"

    ],
    date: "1997-02-03",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q"],
    studio: [
      {
        name: "Eastcote Studios",
        location: "London, England"
      },
      {
        name: "Abbey Road",
        location: "London, England"
      },
      {
        name: "Westside Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/V7GCrTFCXYo?si=ECVRXAdY8ZYcxaY2',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/V7GCrTFCXYo?si=ECVRXAdY8ZYcxaY2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2xU2QWzGunslGXtJbmYbeE?si=6a763514f3844514',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2xU2QWzGunslGXtJbmYbeE?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '116',
    title: "Painkiller",
    release: [
      "Barrel of a Gun",
      "Ultra (Deluxe)",
      "Ultra | The 12' Singles",
      "DMBX6",
      "Remixes 81>04"
    ],
    date: "1997-02-03",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q"],
    studio: [
      {
        name: "Eastcote Studios",
        location: "London, England"
      },
      {
        name: "Abbey Road",
        location: "London, England"
      },
      {
        name: "Westside Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/kMH__kOxvbY?si=WCVDHpQuOauEHNE2',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/kMH__kOxvbY?si=WCVDHpQuOauEHNE2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/44Kj0fXdPGaKR2Rheu4260?si=e2afd74025034d15',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/44Kj0fXdPGaKR2Rheu4260?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '117',
    title: "It's no Good",
    release: [
      "It's no Good",
      "Ultra (Deluxe)",
      "Ultra | The 12' Singles",
      "The Singles 86>98",
      "DMBX6",
      "Remixes 81>04", 
      "LiVE SPiRiTS", 
      "Tour of The Universe", 
      "The Best of Depeche Mode vol 1"
    ],
    date: "1997-03-31",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q"],
    studio: [
      {
        name: "Larrabee West",
        location: "Los Angeles, USA"
      },
      {
        name: "Abbey Road",
        location: "London, England"
      },
      {
        name: "Eastcote Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/_-QPvffO1gs?si=5qLorzSiD03xy7l7',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/_-QPvffO1gs?si=5qLorzSiD03xy7l7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/7HDWE2Ib7cjkhzULV4K8y3?si=ee97590af1294d07',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7HDWE2Ib7cjkhzULV4K8y3?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '118',
    title: "Slowblow",
    release: [
      "It's no Good",
      "Ultra (Deluxe)",
      "Ultra | The 12' Singles",
      "DMBX6",
      "Remixes 2 81>11 (Deluxe)"
    ],
    date: "1997-03-31",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q"],
    studio: [
      {
        name: "Abbey Road",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/pGd8STxyWM0?si=KC3_0v5c1gRY-5DF',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/pGd8STxyWM0?si=KC3_0v5c1gRY-5DF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5zXQD2H9SbqfIyjcgyO7k6?si=d3e911e0340e4775',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5zXQD2H9SbqfIyjcgyO7k6?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '119',
    title: "The Love Thieves",
    release: [
      "Ultra (Deluxe)"
    ],
    date: "1997-04-14",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q", "Gareth Jones"],
    studio: [
      {
        name: "Electric Lady",
        location: "New York, USA"
      },
      {
        name: "Abbey Road",
        location: "London, England"
      },
      {
        name: "RAK Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/Nv_f3KXY-pc?si=W8XPX4Q11PAzurfw',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/Nv_f3KXY-pc?si=W8XPX4Q11PAzurfw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3hvScxvDCQMsRHWcpjNpxM?si=d5cd2ff0bf204105',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3hvScxvDCQMsRHWcpjNpxM?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '120',
    title: "Uselink",
    release: [
      "Ultra (Deluxe)"
    ],
    date: "1997-04-14",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q"],
    studio: [
      {
        name: "RAK Studios",
        location: "London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/cDDxh0EKWYI?si=nlYgStS-fUpoXsPJ',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/cDDxh0EKWYI?si=nlYgStS-fUpoXsPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6BgzfkIxAAAOwZ55QuFMAu?si=7e25e41d47414964',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6BgzfkIxAAAOwZ55QuFMAu?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '120',
    title: "Sister of Night",
    release: [
      "Ultra (Deluxe)",
      "Remixes 2 81>11 (Deluxe)"
    ],
    date: "1997-04-14",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q"],
    studio: [
      {
        name: "Eastcote Studios",
        location: "London, England"
      },
      {
        name: "Larrabee West",
        location: "Los Angeles, USA"
      },
      {
        name:"Abbey Road",
        location:"London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/N_sN35pxHCk?si=XkEGAyvUbR7tTS99',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/N_sN35pxHCk?si=XkEGAyvUbR7tTS99" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/4nxAA2HjQUyPdikulwuXbc?si=e7f57a1afe4640cc',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4nxAA2HjQUyPdikulwuXbc?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id:'121',
    title: "Jazz Thieves",
    release: [
      "Ultra (Deluxe)"
    ],
    date: "1997-04-14",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q"],
    studio: [
      {
        name: "Eastcote Studios",
        location: "London, England"
      },
      {
        name: "Larrabee West",
        location: "Los Angeles, USA"
      },
      {
        name:"Abbey Road",
        location:"London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/7e4EwFsF5zc?si=JKRMHz1jGoT6x6Tb',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/iEH4eqtK8SU?si=COgDrdeXF1vIYmnO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6fVPzjJ4hmKrsB9QXixyEF?si=382912ce29604cc3',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6fVPzjJ4hmKrsB9QXixyEF?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '122',
    title: "Freestate",
    release: [
      "Ultra (Deluxe)",
      "Remixes 2 81>11 (Deluxe)"
    ],
    date: "1997-04-14",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q", "Gareth Jones"],
    studio: [
      {
        name: "Abbey Road",
        location: "London, England"
      },
      {
        name: "Electric Lady",
        location: "New York, USA"
      },
      {
        name:"RAK Studios",
        location:"London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/syClMP8TQ0o?si=5Vn8euArF2khyLpz',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/syClMP8TQ0o?si=5Vn8euArF2khyLpz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/0OBOr9F4XtFXGP41v3AToS?si=e0e24c07b6334851',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0OBOr9F4XtFXGP41v3AToS?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '123',
    title: "The Bottom Line",
    release: [
      "Ultra (Deluxe)"
    ],
    date: "1997-04-14",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q"],
    studio: [
      {
        name: "Abbey Road",
        location: "London, England"
      },
      {
        name: "Electric Lady",
        location: "New York, USA"
      },
      {
        name:"Strongroom Studios",
        location:"London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/QEli5MvZPiI?si=OfydFWcXjauHbYY4',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/QEli5MvZPiI?si=OfydFWcXjauHbYY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/6LKLLL386vnsKAqixFWH4O?si=f8e01419321a41ba',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6LKLLL386vnsKAqixFWH4O?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '124',
    title: "Insight",
    release: [
      "Ultra (Deluxe)"
    ],
    date: "1997-04-14",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q"],
    studio: [
      {
        name: "Eastcote Studios",
        location: "London, England"
      },
      {
        name: "Larrabee West",
        location: "Los Angeles, USA"
      },
      {
        name:"Abbey Road",
        location:"London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/zbcqDl--cpI?si=fNrSTqL_nPNxFZow',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/zbcqDl--cpI?si=fNrSTqL_nPNxFZow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/7bPO5CDKHXnwHo2fBYFvlL?si=af399b6c5d174284',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7bPO5CDKHXnwHo2fBYFvlL?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '125',
    title: "Home",
    release: [
      "Home",
      "Ultra (Deluxe)",
      "The Singles 86>98",
      "Tour of The Universe",
      "Remixes 81>04",
      "DMBX6",
      "Ultra | The 12' Singles"
    ],
    date: "1997-06-16",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q", "Gareth Jones"],
    studio: [
      {
        name: "Eastcote Studios",
        location: "London, England"
      },
      {
        name: "Westside Studios",
        location: "London, England"
      },
      {
        name:"Abbey Road",
        location:"London, England"
      },
      {
        name: "RAK Studios",
        location:"London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/DZHs-SRJbzU?si=wG4R_dnQyEvA66JW',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/DZHs-SRJbzU?si=wG4R_dnQyEvA66JW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/5lRgR82emb03dbXoGfhBYG?si=66ac86d049484017',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5lRgR82emb03dbXoGfhBYG?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '126',
    title: "Useless",
    release: [
      "Useless",
      "Ultra (Deluxe)",
      "The Singles 86>98",
      "LiVE SPiRiTS",
      "Remixes 81>04",
      "DMBX6",
      "Ultra | The 12' Singles"
    ],
    date: "1997-10-20",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Q"],
    studio: [
      {
        name: "Eastcote Studios",
        location: "London, England"
      },
      {
        name: "Westside Studios",
        location: "London, England"
      },
      {
        name:"Abbey Road",
        location:"London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/mqwa5A26JnY?si=ozoyvPX7EH6zoPiT',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/mqwa5A26JnY?si=ozoyvPX7EH6zoPiT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/60vm3kzy05kKvoov0DFLik?si=d60b98d3595b455e',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/60vm3kzy05kKvoov0DFLik?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '127',
    title: "Only When I Lose Myself",
    release: [
      "Only When I Lose Myself",
      "Ultra (Deluxe)",
      "The Singles 86>98",
      "Remixes 2 81>11 (Deluxe)",
      "DMBX6",
      "Sounds of The Universe (Deluxe)"
    ],
    date: "1998-09-07",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Robin Hancock"],
    studio: [
      {
        name: "Eastcote Studios",
        location: "London, England"
      },
      {
        name:"Abbey Road",
        location:"London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/l35XzUD8GGU?si=Vgg3fkUkO3i0J8nz',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/l35XzUD8GGU?si=Vgg3fkUkO3i0J8nz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/4xMIvU75BVq0UOB5fi7Vgb?si=ad6cf3f45c324b69',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4xMIvU75BVq0UOB5fi7Vgb?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '128',
    title: "Surrender",
    release: [
      "Only When I Lose Myself",
      "Ultra (Deluxe)",
      "DMBX6",
      "Sounds of The Universe (Deluxe)"
    ],
    date: "1998-09-07",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Robin Hancock"],
    studio: [
      {
        name: "Eastcote Studios",
        location: "London, England"
      },
      {
        name:"Abbey Road",
        location:"London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/cV3TUevHgHo?si=wi-iO4tzfkI4w2G_',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/cV3TUevHgHo?si=wi-iO4tzfkI4w2G_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/2BtBDMNK0CDEuLUxfqpJQA?si=21511836f8234ef6',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2BtBDMNK0CDEuLUxfqpJQA?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '129',
    title: "Headstar",
    release: [
      "Only When I Lose Myself",
      "Ultra (Deluxe)",
      "DMBX6"
    ],
    date: "1998-09-07",
    composer: ["Martin Lee Gore"],
    producer: ["Tim Simenom"],
    engineer: [ "Robin Hancock"],
    studio: [
      {
        name: "Eastcote Studios",
        location: "London, England"
      },
      {
        name:"Abbey Road",
        location:"London, England"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/k5GrV8yOc8s?si=kwgMC-HWDkMBvH1R',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/k5GrV8yOc8s?si=kwgMC-HWDkMBvH1R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/4fJxnkspTbq71G9XUWdCkr?si=9ab5bdd1a5364977',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4fJxnkspTbq71G9XUWdCkr?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  },
  {
    id: '130',
    title: "Dream On",
    release: [
      "Dream On",
      "Exciter (Deluxe)",
      "The Best of Depeche Mode vol 1",
      "DMBX6", 
      "Remixes 2 81>11 (Deluxe)", 
      "Exciter | The 12' Singles"
    ],
    date: "2001-04-23",
    composer: ["Martin Lee Gore"],
    producer: ["Mark Bell"],
    engineer: [ "Gareth Jones"],
    studio: [
      {
        "name": "missing data",
        "location": "missing data"
      }
    ],
    media: [
      {
        source: 'youtube',
        route: 'https://youtu.be/7dgrMSTalZ0?si=aRKJX8laR01kybFc',
        insert: '<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/7dgrMSTalZ0?si=aRKJX8laR01kybFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }, 
      {
        source: 'spotify',
        route: 'https://open.spotify.com/track/3fIsVx19pqTGejb7cwlLQB?si=2b2fb1d2bffb4282',
        insert: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3fIsVx19pqTGejb7cwlLQB?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      }
    ]
  }
];

export default songs