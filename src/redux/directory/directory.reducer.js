const INITIAL_STATE = {
    sections: [
        {
          title: 'cercei',
          imageUrl: 'https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/160828536_2824590884446051_1889661090743701360_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=a26aad&_nc_ohc=m28fN5fwPcgAX-3E1eF&_nc_ht=scontent.ftsr1-2.fna&oh=13a74e283eaefb4d0f154e37aaaaec38&oe=6087CE92',
          id: 1,
          linkUrl: 'shop/cercei'
        },
        {
          title: 'inele',
          imageUrl: 'https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/163510243_130757662388111_3441412054401690118_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=HJIW6H17HTUAX9zUgQq&_nc_ht=scontent.ftsr1-1.fna&oh=f92eafaf39260dabfa5ab26a41ea79bd&oe=6087102E',
          id: 2,
          linkUrl: 'shop/inele'
        },
        {
          title: 'pandantive',
          imageUrl: 'https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/123489185_2723622467876227_2785965812343007755_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a26aad&_nc_ohc=s5z_fVk4wXUAX9E5ku9&_nc_ht=scontent.ftsr1-2.fna&oh=c9b1e31f835aa4c1a01c2133ae5ed228&oe=60869640',
          id: 3,
          linkUrl: 'shop/pandantive'
        },
        {
          title: 'coliere',
          imageUrl: 'https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/163853194_130001729130371_3908513246238736705_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=N7md7GpqlQ0AX-QlaLO&_nc_oc=AQnfSQkFn0sBvzKpeXUZHYhck0ucVxyB4_NgYutiJl69f334Vqg1f17k0GmmdBIeMrHuCwdFuldqGp5KUUK7FVQb&_nc_ht=scontent.ftsr1-2.fna&oh=f66999671d7a6c78e25dacb092eacaf7&oe=60876643',
          size: 'large',
          id: 4,
          linkUrl: 'shop/coliere'
        },
        {
          title: 'bratari',
          imageUrl: 'https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/166313398_131193525677858_4797198858961432697_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=0g6q0IkcaPsAX8EeHkb&_nc_ht=scontent.ftsr1-2.fna&oh=5ecf08b170fbc82b26ba2009fe9d661a&oe=6088D545',
          size: 'large',
          id: 5,
          linkUrl: 'shop/bratari'
        },
        {
          title: 'brose',
          imageUrl: 'https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/160186492_2820257424879397_8421494508942368869_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_ohc=OK6W1CCt0NsAX-c1Shm&_nc_ht=scontent.ftsr1-2.fna&oh=c4d1e3dc247f5b515edd4650f5015a92&oe=6088BE82',
          size: 'large',
          id: 6,
          linkUrl: 'shop/brose'
        },
        {
          title: 'decoratiuni',
          imageUrl: 'https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/127236471_2740162152888925_4905100879650176767_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=CVEjJtrkgcMAX-xu5ma&_nc_ht=scontent.ftsr1-1.fna&oh=7de2c2d03587da5855e2f8d70ad73345&oe=6087814F',
          size: 'large',
          id: 7,
          linkUrl: 'shop/decoratiuni'
        },
        {
          title: 'altele',
          imageUrl: 'https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/128351020_2744160592489081_2894875506072891182_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_ohc=dvrsnoi8ZuIAX-kIIbc&_nc_ht=scontent.ftsr1-2.fna&oh=636d08ddd04c1a2ed94c5be32acb65fc&oe=60883C0C',
          size: 'large',
          id: 8,
          linkUrl: 'shop/altele'
        }
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer