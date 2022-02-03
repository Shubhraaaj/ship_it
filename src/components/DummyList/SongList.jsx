import React, { useState, useEffect } from 'react';
import { listSongs } from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { IconButton, Paper } from '@material-ui/core';
import { Favorite, PlayArrow } from '@material-ui/icons';

Amplify.configure(awsconfig);

export default function SongList (){
    const [songs, setSongs] = useState([]);
    
    const fetchSongs = async () => {
        try {
            const songData = await API.graphql(graphqlOperation(listSongs));
            const songList = songData.data.listSongs.items;
            console.log('song list', songList);
            setSongs(songList);
        } catch (error) {
            console.log('error on fetching songs', error);
        }
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div className="songList">
            {songs.map((song, idx) => {
                return (
                    <Paper variant="outlined" elevation={2} key={`song${idx}`}>
                        <div className="songCard">
                            <IconButton aria-label="play">
                                <PlayArrow />
                            </IconButton>
                            <div>
                                <div className="songTitle">{song.title}</div>
                                <div className="songOwner">{song.owner}</div>
                            </div>
                            <div>
                                <IconButton aria-label="like">
                                    <Favorite />
                                </IconButton>
                                {song.likes}
                            </div>
                            <div className="songDescription">{song.description}</div>
                        </div>
                    </Paper>
                );
            })}
        </div>
    );
}