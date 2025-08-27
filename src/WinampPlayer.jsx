import React, { useState, useRef, useEffect } from 'react';
import './styles/WinampPlayer.css';

// Maya's approach: Use music/ folder with direct file references
// Put your MP3 files in public/music/ (Maya's folder structure)

const musicFiles = [
    // Maya's exact approach - put your file here:
    "audio/Last Train At 25 O'clock.mp3",  // Your file should be at public/music/track1.mp3
    // You can add more files like Maya does:
    // 'music/track2.mp3',
    // 'music/track3.mp3'
];

const WinampPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [playlist, setPlaylist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Maya's approach: Simple playlist with direct file paths
    useEffect(() => {
        const staticPlaylist = [
            {
                title: "3. Last Train At 25 O'clock",
                artist: "Crystal Truong",
                album: "Portfolio Collection",
                src: musicFiles[0], 
                fileName: "track1.mp3"
            }
            // Once test works, replace with:
            // {
            //     title: "3. Last Train At 25 O'clock",
            //     artist: "Crystal Truong",
            //     src: track1, // your imported file
            // }
        ];

        setPlaylist(staticPlaylist);
        setIsLoading(false);
    }, []);

    const currentTrack = playlist[currentTrackIndex] || {
        title: "Loading...",
        artist: "Please wait",
        album: "",
        src: "",
        duration: 0
    };

    useEffect(() => {
        if (!currentTrack.src) return;
        
        const audio = audioRef.current;
        
        const setAudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        };

        const setAudioTime = () => setCurrentTime(audio.currentTime);

        return () => {
            if (audio) {
                audio.removeEventListener('loadeddata', setAudioData);
                audio.removeEventListener('timeupdate', setAudioTime);
                audio.removeEventListener('ended', nextTrack);
            }
        };
    }, [currentTrackIndex, playlist]);

    const togglePlay = () => {
        if (!currentTrack.src) return;

        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            console.log('Attempting to play:', currentTrack.src);
            audio.play().catch(e => {
                console.error('Playback failed:', e);
                console.error('Audio src:', audio.src);
                console.error('Audio readyState:', audio.readyState);
                console.error('Audio networkState:', audio.networkState);
                alert(`Cannot play audio: ${e.message}\n\nTry:\n1. Check if ${currentTrack.src} exists\n2. Ensure it's a valid MP3 file\n3. Restart your dev server`);
            });
        }
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        if (playlist.length > 1) {
            setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
            setIsPlaying(false);
        }
    };

    const prevTrack = () => {
        if (playlist.length > 1) {
            setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
            setIsPlaying(false);
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleProgressClick = (e) => {
        if (!currentTrack.src) return;
        
        const audio = audioRef.current;
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const newTime = percent * duration;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    if (isLoading) {
        return (
            <div className="modern-player loading">
                <div className="album-artwork">
                    <div className="artwork-circle">
                        <div className="loading-spinner">♪</div>
                    </div>
                </div>
                <div className="player-info">
                    <div className="song-details">
                        <div className="song-title-modern">Scanning for music...</div>
                        <div className="artist-name">Please wait</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`modern-player ${isPlaying ? 'playing' : ''}`}>
            <audio
                ref={audioRef}
                src={currentTrack.src}
                onLoadStart={() => setIsPlaying(false)}
                preload="metadata"
            />
            
            <div className="album-artwork">
                <div className="artwork-circle">
                    <div className="visualizer-modern">
                    </div>
                </div>
            </div>
            
            <div className="player-info">
                <div className="song-details">
                    <div className="song-title-modern">{currentTrack.title}</div>
                    <div className="artist-name">{currentTrack.artist}</div>
                </div>
                
                <div className="progress-section">
                    <div className="progress-bar" onClick={handleProgressClick}>
                        <div 
                            className="progress-fill" 
                            style={{width: `${duration ? (currentTime / duration) * 100 : 0}%`}}
                        ></div>
                    </div>
                    <div className="time-display">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                </div>
                
                <div className="player-controls">
                    <button 
                        className="control-btn-modern prev" 
                        onClick={prevTrack}
                        disabled={playlist.length <= 1 || !currentTrack.src}
                    >⏮</button>
                    <button 
                        className="control-btn-modern play-modern" 
                        onClick={togglePlay}
                        disabled={!currentTrack.src}
                    >
                        {isPlaying ? '⏸' : '▶'}
                    </button>
                    <button 
                        className="control-btn-modern next" 
                        onClick={nextTrack}
                        disabled={playlist.length <= 1 || !currentTrack.src}
                    >⏭</button>
                </div>
            </div>
        </div>
    );
};

export default WinampPlayer;
