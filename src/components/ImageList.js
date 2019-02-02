import React from 'react';


const ImageList = (props) => {

    console.log("Images list");
    console.log(props.images);


    //build list of images

    const images = props.images.map(({description, id, urls, slug}) => {

        return <div className="card" key={id}>
            <div className="image">
                <img src={urls.regular} alt="search term"/>
            </div>
            <div className="content">
                <div className="header">{slug}</div>
                <div className="meta">
                    <a href="# ">Friends</a>
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
            <div className="extra content">
      <span className="right floated">
        Joined in 2013
      </span>
                <span>
        <i className="user icon"></i>
        75 Friends
      </span>
            </div>
        </div>;

    });


    //wrap it around semantic ui cards list and then render on screen

    return <div className="ui link cards">
        {images}
    </div>;


};

export default ImageList;

