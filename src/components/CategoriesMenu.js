import { useState, useEffect, useContext } from 'react';
import './componentsCSS/categoriesMenu.css';
import { GameContext } from './context/GameProvider';

const CategoriesMenu = () => {

    const {categories, checkedCategories, setCheckedCategories} = useContext(GameContext);

    const findCategoryCheckedState = id => {
        const foundCat = checkedCategories.find(cat => cat.id == id);

        return foundCat ? foundCat.checked : false;
    }

    const changeChecked = (event, id) => {
        const newCheckedState = !findCategoryCheckedState(id);
        const newCheckedCategories = checkedCategories.map(cat => {
            if (cat.id == id)
                return {id: cat.id, checked: !cat.checked}
            else
                return cat;
        });

        setCheckedCategories(newCheckedCategories);
        event.target.checked = newCheckedState;
    }

    return (
        <div className="categoriesMenu__div">
            <h1 className='categoriesMenu__h1'>Categories</h1>
            {categories.map(category => { return (
                <div key={category.id}>
                    <input type="checkbox" checked={findCategoryCheckedState(category.id)} onChange={(event) => changeChecked(event, category.id)}/>
                    <label>{category.name}</label>
                </div>
            )
            })}
        </div>
    )
};

export default CategoriesMenu;