import React, {useState, useEffect, useCallback} from 'react';

const useRightClickMenu = (props) => {

    const [xPos, setXPos] = useState("0px");
    const [yPos, setYPos] = useState("0px");
    const [dataSet, setDataSet] = useState("")
    const [showMenu, setShowMenu] = useState(false);
    
    
    const handleContextMenu = useCallback((e) => {
        e.preventDefault();
        setYPos(`${e.pageY}px`);
        setXPos(`${e.pageX}px`);
        setShowMenu(true);
        setDataSet(e.target.dataset)
        // console.log(e.target.dataset)
    }, [setXPos, setYPos])
    
    const handleClick = useCallback(() => {
        showMenu && setShowMenu(false);
    }, [showMenu]);

    useEffect(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener("contextmenu", handleContextMenu);
    
        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("contextmenu", handleContextMenu);
        }
    })

    return { xPos, yPos, showMenu, dataSet};
}

export default useRightClickMenu;