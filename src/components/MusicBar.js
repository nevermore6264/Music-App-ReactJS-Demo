import React, { Component } from 'react';
import MusicPlayer from './MusicPlayer';

class MusicBar extends Component {

    reload() {
        if (this.ref) {
            this.ref.reload();
        }
    }

    render() {
        return(
            <div className={'music-bar' + (this.props.song ? ' show' : '')}>
                {
                    this.props.song &&
                    <div className="music-bar-container">
                        <div className="song-playing">
                            <span className="song-playing-name">{this.props.song.name}</span>
                            -
                            <span className="song-playing-singer">{this.props.song.singer}</span>
                        </div>
                        <div className="audio-player">
                            <MusicPlayer
                                src={this.props.song.src}
                                ref={el => this.ref = el}
                            />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MusicBar;
