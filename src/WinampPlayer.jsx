import React, { useState, useRef, useEffect } from 'react';
import './styles/WinampPlayer.css';
import aaa from './assets/images/AAA.png'

const tracks = [

    {
        filename: 'My Jinji.mp3',
        title: 'My Jinji',
        artist: '落日飛車 Sunset Rollercoaster',
    },
        {
        filename: 'Instant Crush.mp3',
        title: 'Instant Crush',
        artist: 'Daft Punk',
    },
        {
        filename: "Last Train At 25 O'clock.mp3",
        title: 'Last Train At 25 O\'clock',
        artist: 'Lamp',
    },
        {
        filename: 'Come.mp3',
        title: 'Come',
        artist: 'Namie Amuro',
    },
        {
        filename: 'Buzzcut Season.mp3',
        title: 'Buzzcut Season',
        artist: 'Lorde',
    },
    {
        filename: 'いきのこり●ぼくら.mp3',
        title: 'いきのこり●ぼくら',
        artist: 'Ichiko Aoba',
    },
    {
        filename: '四季ノ唄.mp3',
        title: '四季ノ唄',
        artist: 'MINMI',
    },
    {
        filename: 'SOINLOVEWITHUUUUU!!!!!.mp3',
        title: 'SOINLOVEWITHUUUUU!!!!!',
        artist: '9th Wonder',
    },
        {
        filename: 'Hold Your Tears.mp3',
        title: 'Hold Your Tears',
        artist: 'Clazziquai',
    },
            {
        filename: 'The Sun II.mp3',
        title: 'The Sun II',
        artist: 'Snakadaktal',
    }

];

const WinampPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [playlist, setPlaylist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // 🔄 AUTO-GENERATE playlist from tracks array using loop!
    useEffect(() => {
        const autoPlaylist = tracks.map((track, index) => ({
            title: track.title,
            artist: track.artist,
            src: `audio/${track.filename}`,  // Auto-generate path
            fileName: track.filename
        }));

        console.log(`🎵 Auto-loaded ${autoPlaylist.length} tracks:`, autoPlaylist);

        setPlaylist(autoPlaylist);
        setIsLoading(false);
    }, []);

    const currentTrack = playlist[currentTrackIndex] || {
        title: "Loading...",
        artist: "Please wait",
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

        if (audio) {
            // Success events
            audio.addEventListener('loadeddata', setAudioData);
            audio.addEventListener('timeupdate', setAudioTime);
            audio.addEventListener('ended', nextTrack);
            audio.addEventListener('canplay', () => {
                console.log('✅ Audio can play:', currentTrack.src);
            });
            audio.addEventListener('loadedmetadata', () => {
                console.log('✅ Audio metadata loaded, duration:', audio.duration);
            });

            // Error events
            audio.addEventListener('error', (e) => {
                console.error('❌ Audio element error:', e);
                console.error('Audio error code:', audio.error?.code);
                console.error('Audio error message:', audio.error?.message);
                console.error('Audio src:', audio.currentSrc);
                console.error('Audio readyState:', audio.readyState);
                console.error('Audio networkState:', audio.networkState);

                // Show user-friendly error
                const errorMsg = audio.error?.code === 4 ?
                    'Audio file not supported or not found' :
                    `Audio error: ${audio.error?.message}`;
                console.log('Try this URL directly:', currentTrack.src);
            });

            audio.addEventListener('stalled', () => {
                console.warn('⚠️ Audio loading stalled');
            });
        }

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
            // Always start playing the next track
            setIsPlaying(true);
            setTimeout(() => {
                const audio = audioRef.current;
                if (audio) {
                    audio.play().catch(e => console.log('Auto-play next track failed:', e));
                }
            }, 100);
        }
    };

    const prevTrack = () => {
        if (playlist.length > 1) {
            setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
            // Always start playing the previous track
            setIsPlaying(true);
            setTimeout(() => {
                const audio = audioRef.current;
                if (audio) {
                    audio.play().catch(e => console.log('Auto-play prev track failed:', e));
                }
            }, 100);
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
        <div className={`playlist-player ${isPlaying ? 'playing' : ''}`}>
            {/* Hidden audio element */}
            <audio
                ref={audioRef}
                src={currentTrack.src}
                onError={(e) => console.error('Audio error:', e)}
                onCanPlay={() => console.log('✅ Audio loaded:', currentTrack.src)}
                preload="metadata"
            />

            {/* Main player container matching your design */}
            <div className="player-container">
                {/* Left side: Album artwork area */}
                <div className="album-section">
                    <img src={aaa} className="album-artwork-box" />
                </div>

                {/* Right side: Playlist area */}
                <div className="playlist-section">
                    <div className="playlist-container">
                        {playlist.map((track, index) => (
                            <div
                                key={index}
                                className={`playlist-track ${index === currentTrackIndex ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentTrackIndex(index);
                                    // Always start playing the selected track
                                    setTimeout(() => {
                                        const audio = audioRef.current;
                                        if (audio) {
                                            audio.play().then(() => setIsPlaying(true))
                                                .catch(e => console.log('Track selection play failed:', e));
                                        }
                                    }, 100);
                                }}
                            >
                                <span className="track-number">{index + 1}.</span>
                                <span className="track-info">
                                    {track.artist} - {track.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom controls row */}
 <div className="bottom-controls">
                <button
                    className="control-btn prev-btn"
                    onClick={prevTrack}
                    disabled={playlist.length <= 1 || !currentTrack.src}
                >⏮</button>
                <button
                    className={`control-btn play-pause-btn ${isPlaying ? 'playing' : 'paused'}`}
                    onClick={togglePlay}
                    disabled={!currentTrack.src}
                >
                    {isPlaying ? '⏸' : '▶'}
                </button>
                <button
                    className="control-btn stop-btn"
                    onClick={() => {
                        const audio = audioRef.current;
                        if (audio) {
                            audio.pause();
                            audio.currentTime = 0;
                            setIsPlaying(false);
                            setCurrentTime(0);
                        }
                    }}
                    disabled={!currentTrack.src}
                >
                    ⏹
                </button>
                <button
                    className="control-btn next-btn"
                    onClick={nextTrack}
                    disabled={playlist.length <= 1 || !currentTrack.src}
                >⏭</button>
            </div>
        </div>
    );
};

export default WinampPlayer;
