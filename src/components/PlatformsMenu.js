import { useState, useEffect } from 'react';
import './componentsCSS/platformsMenu.css';

const PlatformsMenu = ({platforms, checkedPlatforms, setCheckedPlatforms}) => {

    const findPlatformCheckedState = id => {
        const foundPlat = checkedPlatforms.find(platform => platform.id == id);

        return foundPlat ? foundPlat.checked : false;
    }

    const changeChecked = (event, id) => {
        const newCheckedState = !findPlatformCheckedState(id);
        const newCheckedPlatforms = checkedPlatforms.map(platform => {
            if (platform.id == id)
                return {id: platform.id, checked: !platform.checked}
            else
                return platform;
        });

        setCheckedPlatforms(newCheckedPlatforms);
        event.target.checked = newCheckedState;
    }

    return (
        <div className="platformsMenu__div">
            <h1 className='platformsMenu__h1'>Platforms</h1>
            {platforms.map(platform => { return (
                <div key={platform.id}>
                    <input type="checkbox" checked={findPlatformCheckedState(platform.id)} onChange={(event) => changeChecked(event, platform.id)}/>
                    <label>{platform.name}</label>
                </div>
            )
            })}
        </div>
    )
};

export default PlatformsMenu;