import React from "react"
import styles from "./Menu.module.scss"
import menuData from "./data"
import MenuItem from "./MenuItem"

interface Props {}

const Menu: React.FC<Props> = () => {
    return (
        <div className={styles.menu}>
            {menuData.map((item, index) => (
                <MenuItem key={index} tabIndex={index + 1} value={item} className={styles["menu__item"]} />
            ))}
        </div>
    )
}

export default Menu
