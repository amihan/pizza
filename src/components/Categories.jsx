import React from 'react';

const Categories = () => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];


    const [activeIndex, setactiveIndex] = React.useState(4);

    return (
        <div className="categories">
            <ul>
                {categories.map((value, index) => (
                    <li
                        key={index}
                        onClick={() => setactiveIndex(index)}
                        className={activeIndex === index ? 'active' : ''}>
                        {value}
                    </li>))
                }
            </ul>
        </div>
    );
};

export default Categories;