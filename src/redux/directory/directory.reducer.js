const INITIAL_STATE = {
    sections: [
        {
          title: 'cercei',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/cercei'
        },
        {
          title: 'inele',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/inele'
        },
        {
          title: 'pandantive',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/pandantive'
        },
        {
          title: 'coliere',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/coliere'
        },
        {
          title: 'bratari',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/bratari'
        },
        {
          title: 'brose',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/brose'
        },
        {
          title: 'decoratiuni',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/decoratiuni'
        },
        {
          title: 'altele...',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/altele...'
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