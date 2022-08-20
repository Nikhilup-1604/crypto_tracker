import React from 'react'

const Coin = ({names,image,symbol,price,volume}) => {
  return (
    <div className='coin-container'> Coin
        <div className='coin-row'>
            <div className ="coin">
                <img src={image} alt ="crypto"></img>
                <h1>{names}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${price}</p>
                <p className="coin-volume">${volume.toLocaleString()}</p>
            </div>
        </div>


    </div>
  )
}

export default Coin