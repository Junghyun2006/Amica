import React from 'react';

const ChannelIndexItem = (props) => {
    const { name, id } = props.channel;
    return (
        <li className="channel-index-item">
            <h1 className="channel-text"><img className="hashtag-img" src={window.hashtag} />{name}</h1>
        </li>
    )
}

export default ChannelIndexItem;