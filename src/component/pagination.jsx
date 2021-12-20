import React from 'react'

const pagination = ({ postsPerPage, totalPage, paginate }) => {

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPage / postsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <nav>
            <li className="pagination" >
                { pageNumber.map(number => (
                    <li key={ number } className="page-item">
                        <a onClick={ () => paginate(number) } href="!#" className="page-link">
                            { number }
                        </a>
                    </li>
                )) }
            </li>

        </nav>
    )
}

export default pagination
