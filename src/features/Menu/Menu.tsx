import React from "react"
import styles from "./Menu.module.scss"
import menuData from "./data"
import MenuItem from "./MenuItem"
import { useRouter } from "next/router"

interface Props {}

const Menu: React.FC<Props> = () => {
    const router = useRouter()
    const checkSelected = (path: string) => (path === "/" ? path === router.pathname : router.pathname.startsWith(path))

    return (
        <div className={styles.menu}>
            {menuData.map((item, index) => (
                <MenuItem
                    key={index}
                    tabIndex={index + 1}
                    value={item}
                    className={styles["menu__item"]}
                    selected={checkSelected(item.link)}
                />
            ))}
        </div>
    )
}

export default Menu
