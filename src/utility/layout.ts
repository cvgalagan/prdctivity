type ColOptions = {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
}

export const getColOptions = (mobileOption: number, desktopOption: number): ColOptions => ({
    xs: mobileOption,
    sm: mobileOption,
    md: desktopOption,
    lg: desktopOption,
    xl: desktopOption,
    xxl: desktopOption
})
