# 🎮 WordGame Master

A modern web application that combines vocabulary learning with fun word games, similar to Anki but with interactive game generation. **All games are played in your target language!** Now featuring **New York Times Games-style functionality** with daily puzzles, streaks, and social sharing!

## Features

### 🌍 Language Selection
- Choose from 25+ popular languages or enter a custom language
- Language setting persists between sessions
- All games adapt to your selected learning language
- Clear language indicators throughout the interface

### 📚 Vocabulary Management
- Add words in your target language with translations in your native language
- Store vocabulary in browser localStorage
- Delete individual words or clear all
- View your vocabulary list with a clean interface
- Language-specific input placeholders

### 🎯 Daily Word Games (NYT Games Style)
The app generates three types of **daily puzzles** using your vocabulary **in your target language**:

#### 🔤 Daily Crossword
- **One puzzle per day** - new crossword every day
- Words are in your target language
- Clues are translations in your native language
- Interactive grid with input fields
- **Timer tracking** and completion statistics
- **Streak tracking** for daily completion

#### 🔍 Daily Word Search
- **One puzzle per day** - new word search every day
- Words hidden in the grid are in your target language
- Click-to-select word finding with visual feedback
- **Auto-completion** when all words are found
- **Timer tracking** and best time records

#### 🎯 Daily Wordle
- **One puzzle per day** - new word every day
- Target word is from your vocabulary in the target language
- 6 attempts with color-coded feedback
- **Completion tracking** and streak maintenance
- Virtual keyboard with visual states

### 🏆 NYT Games Features

#### 📊 Streak System
- **Daily Streak**: Track consecutive days of playing
- **Best Streak**: Record your longest streak
- **Streak Maintenance**: Must play daily to maintain streak
- **Visual Streak Indicators**: Fire emoji and streak counters

#### ⏱️ Game Timing
- **Live Timer**: Real-time game duration tracking
- **Best Times**: Record fastest completion times
- **Completion Statistics**: Track all game times
- **Timer Display**: Prominent timer in game interface

#### 🎉 Completion System
- **Completion Modal**: Beautiful celebration screen
- **Statistics Display**: Time, streak, and best time
- **Social Sharing**: Share your results
- **Play Again**: Quick restart option

#### 💡 Help System
- **Hint Button**: Game-specific tips and strategies
- **Contextual Help**: Different hints for each game type
- **Progressive Difficulty**: Hints become more helpful over time

#### 📤 Social Features
- **Share Results**: Share completion times and streaks
- **Social Media Integration**: Copy results for sharing
- **Achievement Tracking**: Visual completion indicators

### 🎮 Practice Mode
- **Unlimited Games**: Play as many practice games as you want
- **No Daily Limits**: Practice without affecting daily streaks
- **Same Game Mechanics**: Identical gameplay to daily puzzles
- **Separate Statistics**: Practice games tracked separately

### 📊 Advanced Statistics
- **Header Stats**: Streak, best streak, games played
- **Game-Specific Stats**: Best times for each game type
- **Completion Rates**: Track success across all games
- **Historical Data**: View past performance

### 📊 Statistics
- Track total vocabulary words
- Count games played
- Monitor learning progress

## How to Use

1. **Set Your Language**: Go to the Language section and select the language you want to learn
2. **Add Vocabulary**: Go to the Vocabulary section and add words in your target language with translations
3. **Play Daily Games**: Switch to the Games section and play today's puzzles
4. **Practice Mode**: Use Practice Mode for unlimited games
5. **Track Progress**: Check your statistics and streaks in the Stats section

## NYT Games Experience

This app now provides a **New York Times Games-style experience**:

### Daily Routine
- **One puzzle per day** for each game type
- **Fresh puzzles** every day using your vocabulary
- **Streak maintenance** by playing daily
- **Completion celebration** with statistics

### Competitive Elements
- **Timer tracking** for fastest completion
- **Streak counters** for consistency
- **Best time records** for improvement
- **Social sharing** for community engagement

### User Experience
- **Clean, modern interface** similar to NYT Games
- **Smooth animations** and transitions
- **Responsive design** for all devices
- **Intuitive navigation** and controls

## Technical Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Local Storage**: Your vocabulary persists between sessions
- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Cross-browser Compatible**: Works in all modern browsers

## Getting Started

1. Open `index.html` in your web browser
2. Add some vocabulary words
3. Start playing games!

## File Structure

```
wordgame-master/
├── index.html      # Main HTML file
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript game logic and functionality
└── README.md       # This file
```

## Game Algorithms

### Crossword Generation
- Places first word horizontally in the center
- Attempts to intersect subsequent words with existing ones
- Uses simple intersection logic based on common letters
- Generates clues from vocabulary translations

### Word Search Generation
- Fills grid with random letters
- Places words in random directions (horizontal, vertical, diagonal)
- Ensures words don't overlap incorrectly
- Provides interactive selection mechanism

### Wordle Implementation
- Randomly selects target word from vocabulary
- Implements standard Wordle rules and feedback
- Supports both mouse and keyboard input
- Visual keyboard feedback

## Browser Compatibility

- Chrome/Chromium 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Future Enhancements

- More game types (hangman, memory matching, etc.)
- Difficulty levels
- Export/import vocabulary lists
- Multi-language support
- User accounts and cloud sync
- Advanced statistics and analytics

---

**Enjoy learning vocabulary through games!** 🎉