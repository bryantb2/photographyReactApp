class PhotoAPI {
    
    static GetAPIData(genre) {
        return {
            "genreType": [
                {
                   "imageNumber": 0,
                    "thumbnail": "https://wallpapercave.com/wp/wp3991421.jpg",
                    "URL": "https://www.thecountryshed.com/assets/images/TIM06000%20BROWN%20(16823)-5.jpg",
                    "orientation": "landscape",
                },
                {
                   "imageNumber": 1,
                    "thumbnail": "https://wallpapercave.com/wp/wp3991421.jpg",
                    "URL": "https://www.thecountryshed.com/assets/images/TIM06000%20BROWN%20(16823)-5.jpg",
                    "orientation": "landscape",
                },
                {
                   "imageNumber": 2,
                    "thumbnail": "https://wallpapercave.com/wp/wp3991421.jpg",
                    "URL": "https://www.thecountryshed.com/assets/images/TIM06000%20BROWN%20(16823)-5.jpg",
                    "orientation": "landscape",
                },
                {
                   "imageNumber": 3,
                    "thumbnail": "https://wallpapercave.com/wp/wp3991421.jpg",
                    "URL": "https://www.thecountryshed.com/assets/images/TIM06000%20BROWN%20(16823)-5.jpg",
                    "orientation": "landscape",
                },
                {
                   "imageNumber": 4,
                    "thumbnail": "https://wallpapercave.com/wp/wp3991421.jpg",
                    "URL": "https://www.thecountryshed.com/assets/images/TIM06000%20BROWN%20(16823)-5.jpg",
                    "orientation": "landscape",
                },
                {
                   "imageNumber": 5,
                    "thumbnail": "https://wallpapercave.com/wp/wp3991421.jpg",
                    "URL": "https://www.thecountryshed.com/assets/images/TIM06000%20BROWN%20(16823)-5.jpg",
                    "orientation": "landscape",
                },
                {
                   "imageNumber": 6,
                    "thumbnail": "https://wallpapercave.com/wp/wp3991421.jpg",
                    "URL": "https://www.thecountryshed.com/assets/images/TIM06000%20BROWN%20(16823)-5.jpg",
                    "orientation": "landscape",
                },
                {
                   "imageNumber": 7,
                    "thumbnail": "https://wallpapercave.com/wp/wp3991421.jpg",
                    "URL": "https://www.thecountryshed.com/assets/images/TIM06000%20BROWN%20(16823)-5.jpg",
                    "orientation": "landscape",
                },
                {
                   "imageNumber": 8,
                    "thumbnail": "https://wallpapercave.com/wp/wp3991421.jpg",
                    "URL": "https://www.thecountryshed.com/assets/images/TIM06000%20BROWN%20(16823)-5.jpg",
                    "orientation": "landscape",
                },
            ]
        }
    }
    
    static AddPhoto(thumbnailURL, fullSizeURL, orientation) {
        //will add a photo with the above properties to the DB
        //passed down to server wrapped-class where an image number will be assigned before pushing to DB
        return null;
    }
    
    static RemovePhoto(imageNumber) {
        //will find and remove image from DB
        //calls wrapped-class's remove and plug DB holes method series
    }
    
}

export default PhotoAPI;