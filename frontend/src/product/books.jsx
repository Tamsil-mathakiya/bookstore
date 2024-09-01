import React from 'react'
import { useNavigate } from 'react-router-dom'

function Books() {
  const navigate = useNavigate()

  const handleOrder = (bookName, bookPrice) => {
    navigate('/Order', { state: { bookName, bookPrice } })
  }

  return (
    <div className='books'>
      <div className="book">
        <div className="image"><img src="/the.jpg" alt="" /></div>
        <div className="name"><h2>The Name Of The Wind</h2></div>
        <div className="price"><h3>$730</h3></div>
        <button onClick={() => handleOrder('The Name Of The Wind', 730)} className='order'>Order now</button>
      </div>

      <div className="book">
        <div className="image"><img src="/money.jpg" alt="" /></div>
        <div className="name"><h2>Make Epic Money</h2></div>
        <div className="price"><h3>$350</h3></div>
        <button onClick={() => handleOrder('Make Epic Money', 350)} className='order'>Order now</button>
      </div>

      <div className="book">
        <div className="image"><img src="/oassis.jpg" alt="" /></div>
        <div className="name"><h2>Finding the Oasis</h2></div>
        <div className="price"><h3>$490</h3></div>
        <button onClick={() => handleOrder('Finding the Oasis', 490)} className='order'>Order now</button>
      </div>

      <div className="book">
        <div className="image"><img src="/genral.jpg" alt="" /></div>
        <div className="name"><h2>General Knowledge</h2></div>
        <div className="price"><h3>$530</h3></div>
        <button onClick={() => handleOrder('General Knowledge', 530)} className='order'>Order now</button>
      </div>

      <div className="book">
        <div className="image"><img src="/juniper.jpg" alt="" /></div>
        <div className="name"><h2>Juniper Hill</h2></div>
        <div className="price"><h3>$1030</h3></div>
        <button onClick={() => handleOrder('Juniper Hill', 1030)} className='order'>Order now</button>
      </div>

      <div className="book">
        <div className="image"><img src="/image.jpg" alt="" /></div>
        <div className="name"><h2>Your Name Is Image</h2></div>
        <div className="price"><h3>$730</h3></div>
        <button onClick={() => handleOrder('Your Name Is Image', 730)} className='order'>Order now</button>
      </div>

      <div className="book">
        <div className="image"><img src="/space.jpg" alt="" /></div>
        <div className="name"><h2>The Kid Who Came From Space</h2></div>
        <div className="price"><h3>$730</h3></div>
        <button onClick={() => handleOrder('The Kid Who Came From Space', 730)} className='order'>Order now</button>
      </div>

      <div className="book">
        <div className="image"><img src="/india.jpg" alt="" /></div>
        <div className="name"><h2>Indian Polity For Civil Services</h2></div>
        <div className="price"><h3>$730</h3></div>
        <button onClick={() => handleOrder('Indian Polity For Civil Services', 730)} className='order'>Order now</button>
      </div>

      <div className="book">
        <div className="image"><img src="/mind.jpg" alt="" /></div>
        <div className="name"><h2>Power Of Your Subconscious Mind</h2></div>
        <div className="price"><h3>$730</h3></div>
        <button onClick={() => handleOrder('Power Of Your Subconscious Mind', 730)} className='order'>Order now</button>
      </div>

      <div className="book">
        <div className="image"><img src="/secret.jpg" alt="" /></div>
        <div className="name"><h2>The Secret</h2></div>
        <div className="price"><h3>$730</h3></div>
        <button onClick={() => handleOrder('The Secret', 730)} className='order'>Order now</button>
      </div>

      <div className="book">
        <div className="image"><img src="/positive.jpg" alt="" /></div>
        <div className="name"><h2>The Power of A Positive Attitude</h2></div>
        <div className="price"><h3>$730</h3></div>
        <button onClick={() => handleOrder('The Power of A Positive Attitude', 730)} className='order'>Order now</button>
      </div>

      <div className="book">
        <div className="image"><img src="/noor.jpg" alt="" /></div>
        <div className="name"><h2>Noor-e-ghazal Shayari Box Set</h2></div>
        <div className="price"><h3>$730</h3></div>
        <button onClick={() => handleOrder('Noor-e-ghazal Shayari Box Set', 730)} className='order'>Order now</button>
      </div>
    </div>
  )
}

export default Books
