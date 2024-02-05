import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo"; 
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

function Sidebar(){
    return(
        <div className="sidebar">
        <SidebarRow selected Icon={HomeIcon} Title="Home"/>
        <SidebarRow Icon={WhatshotIcon} Title="Trending"/>
        <SidebarRow Icon={SubscriptionsIcon} Title="Subscriptions"/>
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} Title="Library"/>
        <SidebarRow Icon={HistoryIcon} Title="History"/>
        <SidebarRow Icon={OndemandVideoIcon} Title="Your videos"/>
        <SidebarRow Icon={WatchLaterIcon} Title="Watch Later"/>
        <SidebarRow Icon={ThumbDownAltOutlinedIcon} Title="Liked videos"/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} Title="Show more"/>
        <hr />


        </div>
    )
}

export default Sidebar;