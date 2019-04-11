import React, { Component } from 'react';
import infoIcon from '../assets/images/icon-info.svg';
import minusIcon from '../assets/images/icon-minus.svg';
import heartIcon from '../assets/images/icon-heart.svg';
import heartEmptyIcon from '../assets/images/icon-heart-empty.svg';

class Song extends Component {

    render() {
        return(
            <div className={'song' + (this.props.isPlaying ? ' playing' : '')}>
                <div className="song-index">
                    {this.props.index}
                </div>
                <div className={'song-img' + (this.props.isPlaying ? ' rotating' : '')} onClick={this.props.onClick}>
                    <img src={'/images/' + this.props.value.image} alt={this.props.value.name}/>
                </div>
                <div className="song-info">
                    <h3 onClick={this.props.onClick}>{this.props.value.name}</h3>
                    <span>{this.props.value.singer}</span>
                </div>
                <div className="song-actions">
                    <ul>
                        <li>
                            <img src={infoIcon} alt="Information"/>
                        </li>
                        <li onClick={this.props.onRemove}>
                            <img src={minusIcon} alt="Remove"/>
                        </li>
                        <li>
                            {
                                this.props.value.isFavorite &&
                                <img src={heartIcon} alt="Favorite"/>
                            }
                            {
                                !this.props.value.isFavorite &&
                                <img src={heartEmptyIcon} alt="Favorite"/>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Song;
