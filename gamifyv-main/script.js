// Global variables
let vocabulary = JSON.parse(localStorage.getItem('vocabulary')) || [];
let learningLanguage = localStorage.getItem('learningLanguage') || '';
let currentGame = null;
let gameStats = JSON.parse(localStorage.getItem('gameStats')) || {
    totalWords: 0,
    gamesPlayed: 0,
    accuracy: 0,
    currentStreak: 0,
    bestStreak: 0,
    dailyGames: {},
    gameTimes: {}
};

// Daily game tracking
let dailyGames = JSON.parse(localStorage.getItem('dailyGames')) || {};
let currentDate = new Date().toDateString();
let gameTimer = null;
let gameStartTime = null;
let isDailyMode = false;

// Crossword state
let currentCrosswordSolution = null; // 2D array of solution characters ('' for blocks)
let currentCrosswordSize = 15;
let lastCrosswordVocab = [];

// Utilities for Korean-only crossword letters
function sanitizeKoreanWord(input) {
    if (!input) return '';
    const chars = Array.from(input);
    return chars.filter(ch => /[가-힣]/.test(ch)).join('');
}

function sanitizeVocabularyWords(items) {
    return items
        .map(it => ({ ...it, cleanWord: sanitizeKoreanWord(it.word) }))
        .filter(it => it.cleanWord && it.cleanWord.length > 0);
}

// DOM elements - will be initialized after DOM loads
let sections, navButtons, vocabForm, vocabList, clearVocabBtn, gameArea, gameContent, backToGamesBtn;
let learningLanguageSelect, customLanguageInput, saveLanguageBtn, languageSavedDiv, selectedLanguageDisplay, changeLanguageBtn, currentLearningLangSpan, gamesLearningLangSpan;
let dailyDateSpan, dailyStreakSpan, currentStreakSpan, bestStreakSpan, headerGamesPlayedSpan, gameTimerSpan, hintBtn;
let completionModal, completionTitle, completionSubtitle, completionTimeSpan, completionStreakSpan, completionBestSpan, shareBtn, playAgainBtn, closeModalBtn;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeDOMElements();
    // Force Korean-only mode
    learningLanguage = 'Korean';
    localStorage.setItem('learningLanguage', 'Korean');
    // Hide language selection UI
    const languageNavBtn = document.querySelector('.nav-btn[data-section="language"]');
    if (languageNavBtn) {
        languageNavBtn.style.display = 'none';
    }
    const languageSection = document.getElementById('language');
    if (languageSection) {
        languageSection.classList.remove('active');
        languageSection.style.display = 'none';
    }
    seedTestVocab();
    initializeApp();
    setupEventListeners();
    updateStats();
});

function initializeDOMElements() {
    // Basic elements
    sections = document.querySelectorAll('.section');
    navButtons = document.querySelectorAll('.nav-btn');
    vocabForm = document.getElementById('vocab-form');
    vocabList = document.getElementById('vocab-list');
    clearVocabBtn = document.getElementById('clear-vocab');
    gameArea = document.getElementById('game-area');
    gameContent = document.getElementById('game-content');
    backToGamesBtn = document.getElementById('back-to-games');

    // Language selection elements
    learningLanguageSelect = document.getElementById('learning-language');
    customLanguageInput = document.getElementById('custom-language');
    saveLanguageBtn = document.getElementById('save-language');
    languageSavedDiv = document.getElementById('language-saved');
    selectedLanguageDisplay = document.getElementById('selected-language-display');
    changeLanguageBtn = document.getElementById('change-language');
    currentLearningLangSpan = document.getElementById('current-learning-lang');
    gamesLearningLangSpan = document.getElementById('games-learning-lang');

    // NYT Games elements
    dailyDateSpan = document.getElementById('daily-date');
    dailyStreakSpan = document.getElementById('daily-streak-info');
    currentStreakSpan = document.getElementById('current-streak');
    bestStreakSpan = document.getElementById('best-streak');
    headerGamesPlayedSpan = document.getElementById('header-games-played');
    gameTimerSpan = document.getElementById('game-timer');
    hintBtn = document.getElementById('hint-btn');
    completionModal = document.getElementById('completion-modal');
    completionTitle = document.getElementById('completion-title');
    completionSubtitle = document.getElementById('completion-subtitle');
    completionTimeSpan = document.getElementById('completion-time');
    completionStreakSpan = document.getElementById('completion-streak');
    completionBestSpan = document.getElementById('completion-best');
    shareBtn = document.getElementById('share-btn');
    playAgainBtn = document.getElementById('play-again-btn');
    closeModalBtn = document.getElementById('close-modal-btn');
}

function initializeApp() {
    renderVocabularyList();
    updateStats();
    updateLanguageDisplay();
    updateDailyInfo();
    
    // Only update game statuses if we're on the games section
    setTimeout(() => {
        updateGameStatuses();
    }, 100);
    
    // Show appropriate section based on whether language is set
    if (learningLanguage) {
        switchSection('vocabulary');
    } else {
        switchSection('language');
    }
}

function setupEventListeners() {
    // Navigation
    if (navButtons) {
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => switchSection(btn.dataset.section));
        });
    }

    // Language selection
    if (learningLanguageSelect) {
        learningLanguageSelect.addEventListener('change', handleLanguageSelect);
    }
    if (saveLanguageBtn) {
        saveLanguageBtn.addEventListener('click', saveLanguage);
    }
    if (changeLanguageBtn) {
        changeLanguageBtn.addEventListener('click', changeLanguage);
    }

    // Vocabulary management
    if (vocabForm) {
        vocabForm.addEventListener('submit', addVocabulary);
    }
    if (clearVocabBtn) {
        clearVocabBtn.addEventListener('click', clearVocabulary);
    }

    // Game selection - only crossword
    const playCrosswordBtn = document.getElementById('play-crossword');
    if (playCrosswordBtn) {
        playCrosswordBtn.addEventListener('click', () => {
            startGame('crossword', true);
        });
    }

    if (backToGamesBtn) {
        backToGamesBtn.addEventListener('click', () => {
            if (gameArea) gameArea.classList.add('hidden');
            stopGameTimer();
            currentGame = null;
        });
    }

    // Modal event listeners
    if (shareBtn) {
        shareBtn.addEventListener('click', shareGame);
    }
    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', () => {
            if (completionModal) completionModal.classList.add('hidden');
            startGame(currentGame, true);
        });
    }
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            if (completionModal) completionModal.classList.add('hidden');
        });
    }

    // Hint button
    if (hintBtn) {
        hintBtn.addEventListener('click', showHint);
    }
}

function switchSection(sectionId) {
    // Update navigation
    if (navButtons) {
        navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.section === sectionId);
        });
    }

    // Update sections
    if (sections) {
        sections.forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
        });
    }
}

// Language Management
function handleLanguageSelect() {
    if (!learningLanguageSelect) return;
    
    const selectedValue = learningLanguageSelect.value;
    if (selectedValue === 'other') {
        if (customLanguageInput) {
            customLanguageInput.style.display = 'block';
            customLanguageInput.required = true;
        }
    } else {
        if (customLanguageInput) {
            customLanguageInput.style.display = 'none';
            customLanguageInput.required = false;
        }
    }
}

function saveLanguage() {
    if (!learningLanguageSelect) return;
    
    let selectedLanguage = learningLanguageSelect.value;
    
    if (selectedLanguage === 'other') {
        if (customLanguageInput) {
            selectedLanguage = customLanguageInput.value.trim();
            if (!selectedLanguage) {
                alert('Please enter a custom language name.');
                return;
            }
        }
    }
    
    if (!selectedLanguage) {
        alert('Please select a language to learn.');
        return;
    }
    
    learningLanguage = selectedLanguage;
    localStorage.setItem('learningLanguage', learningLanguage);
    
    // Show success message
    if (selectedLanguageDisplay) {
        selectedLanguageDisplay.textContent = learningLanguage;
    }
    const languageSelection = document.querySelector('.language-selection');
    if (languageSelection) {
        languageSelection.style.display = 'none';
    }
    if (languageSavedDiv) {
        languageSavedDiv.classList.remove('hidden');
    }
    
    // Update language displays
    updateLanguageDisplay();
    
    // Switch to vocabulary section
    setTimeout(() => {
        switchSection('vocabulary');
    }, 1000);
}

function changeLanguage() {
    learningLanguage = '';
    localStorage.removeItem('learningLanguage');
    
    // Reset form
    if (learningLanguageSelect) {
        learningLanguageSelect.value = '';
    }
    if (customLanguageInput) {
        customLanguageInput.value = '';
        customLanguageInput.style.display = 'none';
    }
    
    // Show language selection
    const languageSelection = document.querySelector('.language-selection');
    if (languageSelection) {
        languageSelection.style.display = 'block';
    }
    if (languageSavedDiv) {
        languageSavedDiv.classList.add('hidden');
    }
    
    // Switch to language section
    switchSection('language');
}

function updateLanguageDisplay() {
    if (learningLanguage) {
        if (currentLearningLangSpan) {
            currentLearningLangSpan.textContent = learningLanguage;
        }
        const crosswordLearningLangSpan = document.getElementById('crossword-learning-lang');
        if (crosswordLearningLangSpan) {
            crosswordLearningLangSpan.textContent = learningLanguage;
        }
    } else {
        if (currentLearningLangSpan) {
            currentLearningLangSpan.textContent = 'Not set';
        }
        const crosswordLearningLangSpan = document.getElementById('crossword-learning-lang');
        if (crosswordLearningLangSpan) {
            crosswordLearningLangSpan.textContent = 'Not set';
        }
    }
}

// Seed provided Korean vocab for testing when empty
function seedTestVocab() {
    try {
        const seeded = localStorage.getItem('seededTestVocab');
        vocabulary = JSON.parse(localStorage.getItem('vocabulary')) || [];
        if (seeded === '1' || (vocabulary && vocabulary.length >= 3)) return;
        const now = Date.now();
        const samples = [
            { word: '유창함', translation: 'fluency', description: 'The smoothness of speech, especially in a foreign language.' },
            { word: '상식', translation: 'common sense', description: 'Practical knowledge everyone is expected to have.' },
            { word: '기간', translation: 'period/time', description: 'A span or duration, such as for a project or contract.' },
            { word: '무뚝뚝하다', translation: 'blunt', description: 'A personality that feels curt or unfriendly, not expressive.' },
            { word: '내향적', translation: 'introvert', description: 'Someone who recharges alone rather than with others.' },
            { word: '외향적', translation: 'extrovert', description: 'Someone energized by social interactions.' },
            { word: '출출하다', translation: 'slightly hungry', description: 'How you feel when you want a snack, but not a full meal.' },
            { word: '의견', translation: 'opinion', description: 'A personal viewpoint or judgment about something.' },
            { word: '비교적', translation: 'in comparison', description: 'A phrase used when weighing two things against each other.' },
            { word: '부족', translation: 'lack of', description: 'The state of not having enough of something.' },
            { word: '기능', translation: 'function', description: 'The role or purpose of an object or system.' },
            { word: '지각', translation: 'tardy/late', description: 'Being late, especially to class or work.' },
            { word: '지루해', translation: 'bored', description: 'The feeling you get when something is dull, repetitive, or not interesting.' }
        ].map((it, idx) => ({ id: now + idx, ...it }));
        vocabulary = samples;
        localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
        localStorage.setItem('seededTestVocab', '1');
    } catch (e) {
        // no-op
    }
}

// NYT Games Functionality
function updateDailyInfo() {
    if (dailyDateSpan) {
        dailyDateSpan.textContent = '';
    }
    if (dailyStreakSpan) {
        dailyStreakSpan.textContent = `🔥 Streak: ${gameStats.currentStreak}`;
    }
}

function updateGameStatuses() {
    const games = ['crossword', 'wordsearch', 'wordle'];
    
    games.forEach(game => {
        const statusElement = document.getElementById(`${game}-status`);
        if (!statusElement) return;
        
        const statusIcon = statusElement.querySelector('.status-icon');
        const statusText = statusElement.querySelector('.status-text');
        const playBtn = statusElement.parentElement?.querySelector('.play-btn');
        
        if (statusIcon && statusText && playBtn) {
            if (dailyGames[currentDate] && dailyGames[currentDate][game]) {
                statusIcon.textContent = '✅';
                statusText.textContent = 'Completed';
                playBtn.textContent = 'View';
            } else {
                statusIcon.textContent = '⏰';
                statusText.textContent = 'Ready to play';
                playBtn.textContent = 'Play';
            }
        }
    });
}

function startGame(gameType, isPractice = false) {
    if (!learningLanguage) {
        alert('Please set your learning language first!');
        switchSection('language');
        return;
    }
    
    if (vocabulary.length < 3) {
        alert(`Please add at least 3 Korean vocabulary words before playing crossword!`);
        switchSection('vocabulary');
        return;
    }

    currentGame = gameType;
    isDailyMode = false;
    
    if (gameArea) {
        gameArea.classList.remove('hidden');
    }
    
    // Start timer
    startGameTimer();
    
    // Check if daily game is already completed
    if (isDailyMode && dailyGames[currentDate] && dailyGames[currentDate][gameType]) {
        showCompletedGame(gameType);
        return;
    }
    
    // Only crossword now
    if (gameType === 'crossword') {
        generateCrossword();
    }
}

function startGameTimer() {
    gameStartTime = Date.now();
    gameTimer = setInterval(() => {
        const elapsed = Date.now() - gameStartTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        if (gameTimerSpan) {
            gameTimerSpan.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

function stopGameTimer() {
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
}

function completeGame(gameType, success = true) {
    stopGameTimer();
    
    if (success) {
        const completionTime = Date.now() - gameStartTime;
        const minutes = Math.floor(completionTime / 60000);
        const seconds = Math.floor((completionTime % 60000) / 1000);
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Update streak on every successful game
        updateStreak();
        
        // Update game stats
        gameStats.gamesPlayed++;
        if (!gameStats.gameTimes[gameType]) {
            gameStats.gameTimes[gameType] = [];
        }
        gameStats.gameTimes[gameType].push(completionTime);
        
        localStorage.setItem('gameStats', JSON.stringify(gameStats));
        updateStats();
        
        // Show completion modal
        showCompletionModal(gameType, timeString, completionTime);
    }
}

function updateStreak() {
    gameStats.currentStreak++;
    if (gameStats.currentStreak > gameStats.bestStreak) {
        gameStats.bestStreak = gameStats.currentStreak;
    }
    localStorage.setItem('gameStats', JSON.stringify(gameStats));
    updateDailyInfo();
}

function showCompletionModal(gameType, timeString, completionTime) {
    const gameNames = {
        crossword: 'Crossword',
        wordsearch: 'Word Search',
        wordle: 'Wordle'
    };
    
    if (completionTitle) {
        completionTitle.textContent = '🎉 Great Job!';
    }
    if (completionSubtitle) {
        completionSubtitle.textContent = `You solved the ${gameNames[gameType]}!`;
    }
    if (completionTimeSpan) {
        completionTimeSpan.textContent = timeString;
    }
    if (completionStreakSpan) {
        completionStreakSpan.textContent = gameStats.currentStreak;
    }
    
    // Find best time for this game type
    const bestTime = gameStats.gameTimes[gameType] ? 
        Math.min(...gameStats.gameTimes[gameType]) : completionTime;
    const bestMinutes = Math.floor(bestTime / 60000);
    const bestSeconds = Math.floor((bestTime % 60000) / 1000);
    if (completionBestSpan) {
        completionBestSpan.textContent = `${bestMinutes.toString().padStart(2, '0')}:${bestSeconds.toString().padStart(2, '0')}`;
    }
    
    if (completionModal) {
        completionModal.classList.remove('hidden');
    }
}

function showCompletedGame(gameType) {
    const gameData = dailyGames[currentDate][gameType];
    const minutes = Math.floor(gameData.time / 60000);
    const seconds = Math.floor((gameData.time % 60000) / 1000);
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (gameContent) {
        gameContent.innerHTML = `
            <div class="completed-game">
                <h3>✅ Game Completed!</h3>
                <p>You completed today's ${gameType} in ${timeString}</p>
                <p>Come back tomorrow for a new puzzle!</p>
                <button id="completed-back-btn" class="back-btn">Back to Games</button>
            </div>
        `;
        const completedBackBtn = document.getElementById('completed-back-btn');
        if (completedBackBtn) {
            completedBackBtn.addEventListener('click', () => {
                if (gameArea) gameArea.classList.add('hidden');
                stopGameTimer();
                currentGame = null;
            });
        }
    }
}

// Vocabulary Management
function addVocabulary(e) {
    e.preventDefault();
    const wordInput = document.getElementById('word');
    const translationInput = document.getElementById('translation');
    if (!wordInput || !translationInput) return;
    const word = wordInput.value.trim();
    const translation = translationInput.value.trim();
    if (word && translation) {
        const vocabItem = { 
            id: Date.now(), 
            word, 
            translation
        };
        vocabulary.push(vocabItem);
        localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
        renderVocabularyList();
        updateStats();
        vocabForm.reset();
    }
}

function deleteVocabulary(id) {
    vocabulary = vocabulary.filter(item => item.id !== id);
    localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
    renderVocabularyList();
    updateStats();
}

function clearVocabulary() {
    if (confirm('Are you sure you want to clear all vocabulary?')) {
        vocabulary = [];
        localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
        renderVocabularyList();
        updateStats();
    }
}

function renderVocabularyList() {
    if (!vocabList) return;
    
    vocabList.innerHTML = '';
    vocabulary.forEach(item => {
        const vocabItem = document.createElement('div');
        vocabItem.className = 'vocab-item';
        vocabItem.innerHTML = `
            <div class="vocab-content">
                <div class="word">${item.word}</div>
                <div class="translation">${item.translation}</div>
            </div>
            <button class="delete-btn" onclick="deleteVocabulary(${item.id})">Delete</button>
        `;
        vocabList.appendChild(vocabItem);
    });
}

// Crossword Game
function generateCrossword() {
    if (!vocabulary || vocabulary.length === 0) {
        if (gameContent) {
            gameContent.innerHTML = '<div class="error-message">No vocabulary available. Please add some Korean words first!</div>';
        }
        return;
    }

    // Prepare Korean-only words and their translations as clues
    const cleaned = sanitizeVocabularyWords(vocabulary).slice(0, 8);
    if (cleaned.length < 3) {
        if (gameContent) {
            gameContent.innerHTML = '<div class="error-message">Please add at least 3 Korean-only words (Hangul). Put English in the Translation field.</div>';
        }
        return;
    }
    const maxLen = Math.max(...cleaned.map(i => i.cleanWord.length));
    const gridSize = Math.max(10, Math.min(15, maxLen + 4));
    currentCrosswordSize = gridSize;
    const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''));

    const vocabItems = cleaned;
    const words = vocabItems.map(item => item.cleanWord);

    // Simple crossword generation (intersecting words)
    let placedWords = [];
    let clues = { across: [], down: [] };

    // Place first word horizontally
    if (words.length > 0) {
        const firstWord = words[0];
        const firstVocabItem = vocabItems[0];
        const startRow = Math.floor(gridSize / 2);
        let startCol = Math.floor((gridSize - firstWord.length) / 2);

        if (firstWord.length <= gridSize) {
            if (startCol < 0) startCol = 0;
            for (let i = 0; i < firstWord.length; i++) {
                grid[startRow][startCol + i] = firstWord[i];
            }

            placedWords.push({
                word: firstWord,
                row: startRow,
                col: startCol,
                direction: 'across',
                clue: firstVocabItem.translation,
                translation: firstVocabItem.translation,
                clueNumber: 1
            });

            clues.across.push(`1. ${placedWords[0].clue}`);
        }
    }

    // Try to place more words
    let clueNumber = 2;
    for (let i = 1; i < vocabItems.length; i++) {
        const vocabItem = vocabItems[i];
        const word = vocabItem.cleanWord;
        let placed = false;

        // Try to intersect with existing words
        for (const placedWord of placedWords) {
            for (let j = 0; j < word.length && !placed; j++) {
                for (let k = 0; k < placedWord.word.length && !placed; k++) {
                    if (word[j] === placedWord.word[k]) {
                        const newRow = placedWord.direction === 'across' ?
                            placedWord.row - j : placedWord.row + k;
                        const newCol = placedWord.direction === 'across' ?
                            placedWord.col + k : placedWord.col - j;
                        const newDirection = placedWord.direction === 'across' ? 'down' : 'across';

                        // Check if word fits
                        if (canPlaceWord(grid, word, newRow, newCol, newDirection)) {
                            placeWord(grid, word, newRow, newCol, newDirection);
                            placedWords.push({
                                word: word,
                                row: newRow,
                                col: newCol,
                                direction: newDirection,
                                clue: vocabItem.translation,
                                translation: vocabItem.translation,
                                clueNumber: clueNumber
                            });

                            if (newDirection === 'across') {
                                clues.across.push(`${clueNumber}. ${vocabItem.translation}`);
                            } else {
                                clues.down.push(`${clueNumber}. ${vocabItem.translation}`);
                            }
                            clueNumber++;
                            placed = true;
                        }
                    }
                }
            }
        }

        // Fallback: if no intersection found, place in first available spot
        if (!placed) {
            let foundSpot = false;
            // Try horizontal placement
            for (let r = 0; r < gridSize && !foundSpot; r++) {
                for (let c = 0; c <= gridSize - word.length && !foundSpot; c++) {
                    let fits = true;
                    for (let t = 0; t < word.length; t++) {
                        if (grid[r][c + t] !== '') { fits = false; break; }
                    }
                    if (fits) {
                        placeWord(grid, word, r, c, 'across');
                        placedWords.push({
                            word: word,
                            row: r,
                            col: c,
                            direction: 'across',
                            clue: vocabItem.translation,
                            translation: vocabItem.translation,
                            clueNumber: clueNumber
                        });
                        clues.across.push(`${clueNumber}. ${vocabItem.translation}`);
                        clueNumber++;
                        foundSpot = true;
                        placed = true;
                    }
                }
            }
            // Try vertical placement if still not placed
            if (!placed) {
                for (let c = 0; c < gridSize && !foundSpot; c++) {
                    for (let r = 0; r <= gridSize - word.length && !foundSpot; r++) {
                        let fits = true;
                        for (let t = 0; t < word.length; t++) {
                            if (grid[r + t][c] !== '') { fits = false; break; }
                        }
                        if (fits) {
                            placeWord(grid, word, r, c, 'down');
                            placedWords.push({
                                word: word,
                                row: r,
                                col: c,
                                direction: 'down',
                                clue: vocabItem.translation,
                                translation: vocabItem.translation,
                                clueNumber: clueNumber
                            });
                            clues.down.push(`${clueNumber}. ${vocabItem.translation}`);
                            clueNumber++;
                            foundSpot = true;
                            placed = true;
                        }
                    }
                }
            }
        }
    }

    currentCrosswordSolution = grid; // keep solution hidden
    lastCrosswordVocab = vocabItems;
    renderCrossword(grid, clues, placedWords);
}

function canPlaceWord(grid, word, row, col, direction) {
    const gridSize = grid.length;
    if (row == null || col == null) return false;
    if (row < 0 || col < 0) return false;

    if (direction === 'across') {
        if (row >= gridSize) return false;
        if (col >= gridSize) return false;
        if (col + word.length > gridSize) return false;
        for (let i = 0; i < word.length; i++) {
            const r = row;
            const c = col + i;
            if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) return false;
            if (grid[r][c] !== '' && grid[r][c] !== word[i]) return false;
        }
    } else {
        if (col >= gridSize) return false;
        if (row >= gridSize) return false;
        if (row + word.length > gridSize) return false;
        for (let i = 0; i < word.length; i++) {
            const r = row + i;
            const c = col;
            if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) return false;
            if (grid[r][c] !== '' && grid[r][c] !== word[i]) return false;
        }
    }
    return true;
}

function placeWord(grid, word, row, col, direction) {
    if (direction === 'across') {
        for (let i = 0; i < word.length; i++) {
            grid[row][col + i] = word[i];
        }
    } else {
        for (let i = 0; i < word.length; i++) {
            grid[row + i][col] = word[i];
        }
    }
}

function renderCrossword(grid, clues, placedWords = []) {
    if (!gameContent) return;
    const size = grid.length;

    // Only assign clue numbers to the first cell of each placed word
    const clueNumbers = Array(size).fill(null).map(() => Array(size).fill(''));
    placedWords.forEach(wordObj => {
        clueNumbers[wordObj.row][wordObj.col] = wordObj.clueNumber;
    });

    gameContent.innerHTML = `
        <div class="crossword-container">
            <h3>Korean Crossword Puzzle</h3>
            <p>Fill in the crossword using your Korean vocabulary words. The hints are descriptions of the words!</p>
            <div class="crossword-grid" style="grid-template-columns: repeat(${size}, 1fr);">
                ${grid.map((row, r) =>
                    row.map((cell, c) => {
                        if (cell === '') {
                            return `<div class=\"crossword-cell black\"></div>`;
                        }
                        const num = clueNumbers[r][c];
                        return `<div class=\"crossword-cell\">${num ? `<span class=\"cell-number\">${num}</span>` : ''}<input data-row=\"${r}\" data-col=\"${c}\" type=\"text\" maxlength=\"1\" value=\"\" autocomplete=\"off\" autocapitalize=\"off\" autocorrect=\"off\" spellcheck=\"false\" inputmode=\"text\" enterkeyhint=\"next\" lang=\"ko\"></div>`;
                    }).join('')
                ).join('')}
            </div>
            <div class="crossword-clues">
                <div class="clue-section">
                    <h4>Across</h4>
                    <div class="across-clues">
                        ${clues.across.map(clue => `<div class="clue-item">${clue}</div>`).join('')}
                    </div>
                </div>
                <div class="clue-section">
                    <h4>Down</h4>
                    <div class="down-clues">
                        ${clues.down.map(clue => `<div class="clue-item">${clue}</div>`).join('')}
                    </div>
                </div>
            </div>
            <div class="game-actions">
                <button id="check-crossword" class="check-btn">Check Solution</button>
                <button id="show-translations" class="hint-btn">Show Translations</button>
            </div>
        </div>
    `;

    // Wire up inputs for UX: single char and auto-advance
    const inputs = Array.from(gameContent.querySelectorAll('.crossword-cell input'));
    const focusNext = (i) => {
        for (let j = i + 1; j < inputs.length; j++) { if (inputs[j]) { inputs[j].focus(); break; } }
    };
    const focusPrev = (i) => {
        for (let j = i - 1; j >= 0; j--) { if (inputs[j]) { inputs[j].focus(); break; } }
    };
    inputs.forEach((inp, idx) => {
        inp.addEventListener('compositionstart', () => { inp.dataset.composing = '1'; });
        inp.addEventListener('compositionend', () => {
            delete inp.dataset.composing;
            const chars = Array.from(inp.value || '');
            inp.value = chars.length ? chars[chars.length - 1] : '';
            inp.classList.remove('incorrect');
            inp.classList.remove('correct');
            if (inp.value) focusNext(idx);
        });
        inp.addEventListener('input', () => {
            if (inp.dataset.composing) return;
            const chars = Array.from(inp.value || '');
            if (chars.length > 1) inp.value = chars[chars.length - 1];
            inp.classList.remove('incorrect');
            inp.classList.remove('correct');
            if (inp.value) focusNext(idx);
        });
        inp.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !inp.value) {
                e.preventDefault();
                focusPrev(idx);
                return;
            }
            if (e.key === 'ArrowLeft') { e.preventDefault(); focusPrev(idx); }
            if (e.key === 'ArrowRight') { e.preventDefault(); focusNext(idx); }
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                const r = parseInt(inp.getAttribute('data-row'), 10);
                const c = parseInt(inp.getAttribute('data-col'), 10);
                const tr = e.key === 'ArrowUp' ? r - 1 : r + 1;
                const target = document.querySelector(`.crossword-cell input[data-row="${tr}"][data-col="${c}"]`);
                if (target) { e.preventDefault(); target.focus(); }
            }
        });
    });

    // Add completion check
    const checkBtn = document.getElementById('check-crossword');
    if (checkBtn) {
        checkBtn.addEventListener('click', () => {
            checkCrossword();
        });
    }

    // Add translation reveal
    const showTranslationsBtn = document.getElementById('show-translations');
    if (showTranslationsBtn) {
        showTranslationsBtn.addEventListener('click', () => {
            showTranslations();
        });
    }
}

function checkCrossword() {
    if (!currentCrosswordSolution) return;
    const inputs = Array.from(document.querySelectorAll('.crossword-cell input'));
    let allCorrect = true;
    inputs.forEach(inp => {
        const r = parseInt(inp.getAttribute('data-row'), 10);
        const c = parseInt(inp.getAttribute('data-col'), 10);
        const expected = (currentCrosswordSolution[r][c] || '').toString();
        const actual = (inp.value || '').toString();
        if (actual === expected) {
            inp.classList.remove('incorrect');
            inp.classList.add('correct');
        } else {
            inp.classList.remove('correct');
            inp.classList.add('incorrect');
            allCorrect = false;
        }
    });
    if (allCorrect) {
        completeGame('crossword', true);
    }
}

function showTranslations() {
    // No-op: translation is now the clue itself
}

// Focus only on crossword - removed word search and wordle functions

// Stats Management
function updateStats() {
    gameStats.totalWords = vocabulary.length;
    
    const totalWordsEl = document.getElementById('total-words');
    const gamesPlayedEl = document.getElementById('games-played');
    const accuracyEl = document.getElementById('accuracy');
    
    if (totalWordsEl) {
        totalWordsEl.textContent = gameStats.totalWords;
    }
    if (gamesPlayedEl) {
        gamesPlayedEl.textContent = gameStats.gamesPlayed;
    }
    if (accuracyEl) {
        accuracyEl.textContent = gameStats.accuracy + '%';
    }
    
    // Update header stats
    if (currentStreakSpan) {
        currentStreakSpan.textContent = gameStats.currentStreak;
    }
    if (bestStreakSpan) {
        bestStreakSpan.textContent = gameStats.bestStreak;
    }
    if (headerGamesPlayedSpan) {
        headerGamesPlayedSpan.textContent = gameStats.gamesPlayed;
    }
    
    localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

// Sharing functionality
function shareGame() {
    const gameNames = {
        crossword: 'Crossword',
        wordsearch: 'Word Search',
        wordle: 'Wordle'
    };
    
    const completionTime = completionTimeSpan ? completionTimeSpan.textContent : '00:00';
    const shareText = `I just solved the ${gameNames[currentGame]} in ${completionTime}! 🔥 Streak: ${gameStats.currentStreak} #WordGameMaster`;
    
    if (navigator.share) {
        navigator.share({
            title: 'WordGame Master',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Results copied to clipboard!');
        }).catch(() => {
            alert('Unable to copy to clipboard. Please copy manually: ' + shareText);
        });
    }
}

// Hint system removed
