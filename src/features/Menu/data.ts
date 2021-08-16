import { MenuDataItem } from "./model"
import { faBullseyeArrow } from "@fortawesome/pro-thin-svg-icons/faBullseyeArrow"
import { faSquareUser } from "@fortawesome/pro-thin-svg-icons/faSquareUser"
import { faClipboardListCheck } from "@fortawesome/pro-thin-svg-icons/faClipboardListCheck"

const menuData: MenuDataItem[] = [
    {
        title: "Текущее",
        link: "/",
        icon: faClipboardListCheck
    },
    {
        title: "Испытания",
        link: "/challenges",
        icon: faBullseyeArrow
    },
    {
        title: "Профиль",
        link: "/profile",
        icon: faSquareUser
    }
]

export default menuData
