import React from "react";

const FolderIcon: React.FC<{name: string, iconUrl?:string, margin?:string}> = function(props) 
{
    const firstChar = props.name.length > 0 ? props.name.at(0)?.toUpperCase() : "";
    if(props.iconUrl === undefined) 
    {
        return (
            <div style={{
                    backgroundImage:'linear-gradient(336deg, #ab05a5, #2ad5e9)', 
                    height: "25px", width: "25px", margin: props.margin,
                    display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                {firstChar}
            </div> 
        );
    }
    return (
        <img src={props.iconUrl} style={{ 
            objectFit: 'cover', height: "25px", margin: props.margin, 
            width: "25px" }}>
        </img>
    );
}

export default FolderIcon;