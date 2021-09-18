import React, { useState, useContext } from "react";
import FlexDiv from "../../../common/styles/FlexDiv";
import FolderIcon from "../FolderIcon";
import FolderEditor from "./FolderEditor";
import * as styles from './FolderSidebar.styles';
import { BiShow } from 'react-icons/bi';
import { MdFilterFrames, MdSettings } from 'react-icons/md'
import { LocalizerContext } from "../../../contexts/Localizer";
import { UserControllerContext } from "../../../contexts/UserController";

const FolderSideBar: React.FC<{name: string, iconUrl?: string}> = function(props) 
{ 
    const localizer = useContext(LocalizerContext);
    const userController = useContext(UserControllerContext);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onClick = function() {
        setCollapsed(!collapsed);
    }

    const finishEdit = function(newName: string, newIconUrl?:string) 
    {
        userController.updateFolderName(props.name, newName, newIconUrl);
        setIsEditing(false);
    }

    const cancelEdit = function() {
        setIsEditing(false);
    }
    
    const deleteFolder = function() {
        userController.deleteFolder(props.name);
    }

    if(!isEditing)
        return(
            <div style={{margin: "5px 0 10px 0"}}>
                <styles.FolderTitle onClick={onClick}>
                    <FolderIcon name={props.name} 
                                iconUrl={props.iconUrl} margin='0 10px 0 0'>
                    </FolderIcon>
                    <label>{props.name}</label>
                </styles.FolderTitle>

                <FlexDiv direction="column" backgroundColor="transparent">
                    { 
                        collapsed && 
                        <FlexDiv direction="column">
                            <styles.FolderOption>
                                <BiShow/>
                                <label>{localizer.getTextById(localizer.texts.txt_sidebar_display_board)}</label>
                            </styles.FolderOption>
                            <styles.FolderOption>
                                <MdFilterFrames/>
                                <label>{localizer.getTextById(localizer.texts.txt_create_new_board)}</label>
                            </styles.FolderOption>
                            <styles.FolderOption onClick={() => setIsEditing(true)}>
                                <MdSettings/>
                                <label>{localizer.getTextById(localizer.texts.txt_configurations_plural)}</label>
                            </styles.FolderOption>
                        </FlexDiv>
                    }
                </FlexDiv>
            </div>
        );
    
    return (
        <FolderEditor name={props.name} 
                      iconUrl={props.iconUrl} 
                      finish={finishEdit}
                      delete={deleteFolder}
                      cancel={cancelEdit}>
        </FolderEditor> 
    );
}

export default FolderSideBar;