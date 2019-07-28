import React from 'react';

interface headNavProps {
    tabs: string[],
    selectedTab: string,
    onClick: (e:React.MouseEvent, tab:string) => void;
}

const HeadNav:React.FC<Partial<headNavProps>> = props => {
    const handleClick = (e:React.MouseEvent, tab:string) => {
        if (props && props.onClick) {
            props.onClick(e, tab);
        }
    };

    return (
        <div className={"fresh-sxu-headNav"}>
            <div style={{width: '20000px'}}>
            {
                props.tabs?
                props.tabs.map(tab => {
                    if (tab === props.selectedTab) {
                        return <button id={"selectedTab"}
                                       onClick={e => handleClick(e, tab)}>{tab}</button>;
                    }
                    return <button onClick={e => handleClick(e, tab)}>{tab}</button>;
                }):
                null
            }
            </div>
        </div>
    )
}

export default HeadNav;