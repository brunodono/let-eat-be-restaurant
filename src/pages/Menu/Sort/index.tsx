import styles from './Sort.module.scss';
import options from './options.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

interface Props {
    sort:string,
    setSort:React.Dispatch<React.SetStateAction<string>>
}

const Sort = ({sort, setSort}:Props) => {

    const [opened, setOpened] = useState(false);
    const sortName = sort && options.find(option => option.value === sort)?.name 

    return (
        <button 
        className={classNames({
            [styles.sort]:true,
            [styles["sort--active"]]:sort !== "",
        }) } 
        onClick={()=> setOpened(!opened)}
        onBlur={() => setOpened(false)}>
            <span>{sortName || "Sort by"}</span>
            {opened ? < MdKeyboardArrowUp size={20} /> : < MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.sort__options]: true,
                [styles["sort__options--active"]]: opened,
            })}>
                {options.map((option)=> (
                    <div 
                    className={styles.sort__option} 
                    key={option.value}
                    onClick={()=> setSort(option.value)}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Sort