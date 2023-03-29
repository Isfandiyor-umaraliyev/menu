import React from 'react'
import useFetch from "../../hooks/useFetch"
function AllMenu() {
    const { data, eror, isPending } = useFetch('https://isfandiyor-umaraliyev.github.io/menu-api/db.json')
    console.log(data);

    return (
        <div className='section-center'>{data &&
            data.map((item) => {
                const { id, title, category, price, img, desc } = item
                return <article className="menu-item" key={id}>
                    <img className='photo' src={img} alt={title} />
                    <br />
                    <div className="item-info">
                        <header>
                            <h5>{title}</h5>
                            <span className="item-price">{price}</span>
                        </header>
                        <p className="item-text">{desc}</p>
                    </div>
                </article>
            })
      
        }</div>
    )
}

export default AllMenu