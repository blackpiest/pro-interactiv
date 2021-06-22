import React from 'react';
import Videoplayer from './Videoplayer';
import VideoplayerModal from './VideoplayerModal';

class VideoplayerContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            closeModal: true,
            isVisible: false,
            classList: 'closeModal'
        };
    }

    closeModal = () => this.setState({ isVisible: false });

    playVideo = () => {
        this.setState({ closeModal: !this.state.closeModal });
        if (this.state.closeModal) {
            this.setState({ classList: '' });
            this.setState({ isVisible: true });
        } else {
            this.setState({ classList: 'closeModal' });
            setTimeout(this.closeModal, 210);
        }
    };

    render = () => {
        return (
            <>
                <Videoplayer playVideo={this.playVideo} />
                {this.state.isVisible && <VideoplayerModal
                    class={this.state.classList}
                    closeVideo={this.playVideo}
                    uri={this.props.uri}
                />}
            </>
        );
    };
}

export default VideoplayerContainer;
