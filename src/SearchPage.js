import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage(){
    return(
        <div className="searchPage">
        <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>


        </div>
        <hr />
        <ChannelRow 
        image="https://static.vecteezy.com/system/resources/previews/002/057/829/original/chef-man-avatar-cook-hat-icon-graphics-vector.jpg"
        channel="The Baking Factory"
        verified
        subs="3M"
        noOfVideos={5}
        description="Love Baking? We are here to teach you to bake delicious desserts."
        />
        <hr />
        <VideoRow 
            views="291K"
            subs="3M"
            description="Here's a red velvet cake!" 
            timestamp="2 minutes ago" 
            channel="The Baking Factory"
            title="Red Velvet Cake"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnOCwFGxFrVNCMXQ5kOhysY0rpPOujczRbw&usqp=CAU"
        />
         <VideoRow 
            views="4.2M"
            subs="3M"
            description="Learn to make delicious Macrons." 
            timestamp="2 weeks ago" 
            channel="The Baking Factory"
            title="Macrons"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNz9WdI4LUy7P6CTyzl-u9n34bju5dKf-GSw&usqp=CAU"
        />
         <VideoRow 
            views="2.9M"
            subs="3M"
            description="Here's a recipe for cute cupcakes!" 
            timestamp="1 month ago" 
            channel="The Baking Factory"
            title="Cupcakes"
            image="https://www.foodandwine.com/thmb/xpV_7tJxFnKM5TrzV_rqIWpuix4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolate-cupcakes-FT-RECIPE1221-e7e99dee29ad4a9db7a169d7c41f4f79.jpg"
        />
         <VideoRow 
            views="1.2M"
            subs="3M"
            description="Chocolate Cake recipe along with chocolate frosting" 
            timestamp="1 months ago" 
            channel="The Baking Factory"
            title="The Chocolate Cake"
            image="https://assets.epicurious.com/photos/640b502c4a7bdd305bb93529/4:3/w_5005,h_3754,c_limit/ChocolateStoutCake_RECIPE_030923_49062.jpg"
        />
         <VideoRow 
            views="5.4M"
            subs="3M"
            description="Simple Vanilla cake along with frosting" 
            timestamp="2 months ago" 
            channel="The Baking Factory"
            title="Standard Vanilla Cake"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4av0sqE85pFJrzfZBsEn9rPdTqh75NZARQ&usqp=CAU"
        />

        </div>
        
    )
}

export default SearchPage;