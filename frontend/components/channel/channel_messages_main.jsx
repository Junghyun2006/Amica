import React, {useState, useEffect, useContext} from 'react';
import { useSelector } from 'react-redux';


const ChannelMessages = ({channelId}) => {
    // const cable = useContext(ActionCableContext)
    const [channel, setChannel] = useState(null)
    const senderId = useSelector((state) => state.session.currentUser.id)

    useEffect(() => {
        const channel = App.cable.subscriptions.create({
            channel: 'ChatChannel',
            id: channelId
        })

        setChannel(channel)

        return () => {
            channel.unsubscribe()
        }
    }, [channelId])

    const sendMessage = (message_body) => {
        const data = {messageable_id: channelId, messageable_type: 'Channel', sender_id: senderId, message_body};
        channel.send(data)
        console.log('sent')
    }

    const dothis = () => {
        const channel = App.cable.subscriptions.create({
            channel: 'ChatChannel',
            id: channelId
        })

        setChannel(channel)

        return () => {
            channel.unsubscribe()
        }
    }

    return (
        <div>
            {/* {channelMessages} */}
            <button onClick={()=> dothis()}>this first</button>
            <button onClick={() => sendMessage('another test')} >hihihi</button>
        </div>
    )

}

export default ChannelMessages

