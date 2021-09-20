import React, { FC, useState, createContext, CSSProperties } from 'react'
import classNames from 'classnames'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
    /**索引值 */
    /**默认 active 的菜单项的索引值 */
    defaultIndex?: string;
    className?: string;
    /**菜单类型 横向或者纵向 */
    mode?: MenuMode;
    style?: CSSProperties;
    /**点击菜单项触发的回掉函数 */
    onSelect?: SelectCallback;
}

interface IMenuContext {
    index: string;
    onSelect?: SelectCallback
}
export const MenuContext = createContext<IMenuContext>({ index: "0" })
export const Menu: FC<MenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex, onSelect } = props
    const [currentActive, setActive] = useState(defaultIndex)
    const handleClick = (index: string) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
    }
    const classes = classNames('default-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    });
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    );
    Menu.defaultProps = {
        defaultIndex: '0'
    }
}

export default Menu;