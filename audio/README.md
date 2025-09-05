# How to Add Your Music Files

## Steps:
1. Place your audio files (MP3, WAV, etc.) in this `public/audio/` folder
2. Update the playlist in `src/WinampPlayer.jsx`
3. Replace the example track names with your actual file names

## Example:
If you add a file called `my-song.mp3` to this folder, update the playlist like this:

```javascript
const playlist = [
    {
        title: "My Awesome Song",
        artist: "Crystal Truong", 
        src: "/audio/my-song.mp3"
    },
    // Add more tracks here...
];
```

## Supported Formats:
- MP3 (recommended)
- WAV
- OGG
- AAC

## File Size:
Keep files under 10MB for better web performance.
