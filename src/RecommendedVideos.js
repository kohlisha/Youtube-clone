import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos(){
    return(
        <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos__videos">

           
            <VideoCard 
                title="Why do we sweat?"
                views="4M Views"
                timestamp="2 years ago"
                channelImage="https://ed.ted.com/teded-logo-600-600.png"
                channel="Ted-Ed"
                image="https://i.ytimg.com/vi/fctH_1NuqCQ/0.jpg"
            />
            <VideoCard 
                title="The Chocolate Cake"
                views="1.2M Views"
                timestamp="1 month ago"
                channelImage="https://static.vecteezy.com/system/resources/previews/002/057/829/original/chef-man-avatar-cook-hat-icon-graphics-vector.jpg"
                channel="The Baking Factory"
                image="https://assets.epicurious.com/photos/640b502c4a7bdd305bb93529/4:3/w_5005,h_3754,c_limit/ChocolateStoutCake_RECIPE_030923_49062.jpg"
            />
            <VideoCard 
                title="Web Development in One go"
                views="12M Views"
                timestamp="5 months ago"
                channelImage="https://i.pinimg.com/280x280_RS/7f/1f/21/7f1f213c60ab316d0a3a249910e9da51.jpg"
                channel="Coding Buddy"
                image="https://careerswithstem.com.au/wp-content/uploads/2018/07/web-development-programming-resized.jpg"
            />
            <VideoCard 
                title="What really motivates people to be honest in business"
                views="1.9M Views"
                timestamp="5 years ago"
                channelImage="https://www.doolecommunications.com/wp-content/uploads/2018/11/ted-talks-logo.jpg"
                channel="Ted Talks"
                image="https://talkstar-photos.s3.amazonaws.com/uploads/92d2f58f-d3ac-4cf8-80d7-d31a313c30bb/AlexanderWagner_2016X-embed.jpg"
            />
            <VideoCard 
                title="5 Minutes 100 Headlines"
                views="15K Views"
                timestamp="3 hours ago"
                channelImage="https://static.vecteezy.com/system/resources/thumbnails/002/120/140/small/breaking-news-live-tv-label-logo-template-design-illustration-vector.jpg"
                channel="Breaking News"
                image="https://media.istockphoto.com/id/1313303632/video/breaking-news-template-intro-for-tv-broadcast-news-show-program-with-3d-breaking-news-text.jpg?s=640x640&k=20&c=S0dTZp37XKVcCAnoguMnRatvv4Nkp2cjmA5aYOOrJs8="
            />
            <VideoCard 
                title="Nothing Suits Me Like a Suit"
                views="578K Views"
                timestamp="1 days ago"
                channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0u6n1l9zPwDXFvdxYAS3Xd529M7d_YhuUOg&usqp=CAU"
                channel="HIMYM"
                image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2014%2F03%2Fhimym-touts.jpg"
            />
             <VideoCard 
                title="Live Stream"
                views="2M Views"
                timestamp="3 days ago"
                channelImage="https://i.pinimg.com/564x/a8/c9/95/a8c9955e7a266c7ef882efb57696e3aa.jpg"
                channel="The Gamer"
                image="https://cdn.sanity.io/images/7g6d2cj1/production/b0fe71e059c2d7a619d7f720a4c67cd4d467b16b-1280x720.jpg?h=720&q=70&auto=format"
            />
            <VideoCard 
                title="Red Velvet Cake"
                views="291K Views"
                timestamp="2 minutes ago"
                channelImage="https://static.vecteezy.com/system/resources/previews/002/057/829/original/chef-man-avatar-cook-hat-icon-graphics-vector.jpg"
                channel="The Baking Factory"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnOCwFGxFrVNCMXQ5kOhysY0rpPOujczRbw&usqp=CAU"
            />

            
            
        </div>

        </div>
    )
}

export default RecommendedVideos;