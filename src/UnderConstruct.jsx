import React from 'react';
import './styles/UnderConstruct.css';

export default class UnderConstruct extends React.PureComponent {
  buildHazardPattern() {
    const pattern = [];
    for (let row = 0; row < 12; row++) {
      const rowPixels = [];
      for (let col = 0; col < 41; col++) {
        const diagonal = (row + col) % 10;
        const isYellow = diagonal < 5;
        rowPixels.push(isYellow ? '#FCD34D' : '#000000');
      }
      pattern.push(rowPixels);
    }
    return pattern;
  }

  buildPillarPattern() {
    const pillarRows = 10;
    const pattern = [];
    const colors = {
      highlight: '#E8D4B8',
      light: '#D4A574',
      mid: '#B8925E',
      dark: '#9C7A48',
      shadow: '#806238',
    };

    for (let row = 0; row < pillarRows; row++) {
      const rowPixels = [];
      for (let col = 0; col < 41; col++) {
        const pillarPositions = [
          [4, 9],
          [13, 18],
          [22, 27],
          [31, 36],
        ];

        let color = null;
        for (const [start, end] of pillarPositions) {
          if (col >= start && col <= end) {
            const relativeCol = col - start;
            const width = end - start + 1;

            if (row === 0) {
              color = relativeCol === 0 || relativeCol === width - 1 ? colors.dark : colors.mid;
            } else if (row === 1) {
              if (relativeCol === 0) color = colors.light;
              else if (relativeCol === 1) color = colors.highlight;
              else if (relativeCol === width - 2) color = colors.mid;
              else if (relativeCol === width - 1) color = colors.dark;
              else color = colors.light;
            } else if (row >= 2 && row <= 7) {
              if (relativeCol === 0) color = colors.light;
              else if (relativeCol === 1) color = colors.highlight;
              else if (relativeCol === width - 2) color = colors.dark;
              else if (relativeCol === width - 1) color = colors.shadow;
              else color = colors.mid;
            } else if (row === 8) {
              if (relativeCol === 0) color = colors.mid;
              else if (relativeCol === 1) color = colors.light;
              else if (relativeCol === width - 2) color = colors.shadow;
              else if (relativeCol === width - 1) color = colors.dark;
              else color = colors.dark;
            } else if (row === 9) {
              color = colors.dark;
            }
            break;
          }
        }
        rowPixels.push(color);
      }
      pattern.push(rowPixels);
    }

    return pattern;
  }

  // buildConePattern() {
  //   const conePattern = [];
  //   const coneColors = {
  //     orangeLight: '#FF8844',
  //     orange: '#FF6622',
  //     orangeDark: '#DD4400',
  //     white: '#FFFFFF',
  //     whiteShade: '#EEEEEE',
  //     gray: '#CCCCCC',
  //   };

  //   const coneMap = [
  //     [null, null, null, null, null, 'orangeDark', 'orangeDark', null, null, null, null, null],
  //     [null, null, null, null, 'orangeDark', 'orangeLight', 'orange', 'orangeDark', null, null, null, null],
  //     [null, null, null, null, 'white', 'white', 'white', 'gray', null, null, null, null],
  //     [null, null, null, 'white', 'whiteShade', 'white', 'white', 'gray', 'gray', null, null, null],
  //     [null, null, null, 'orangeDark', 'orangeLight', 'orange', 'orange', 'orangeDark', 'orangeDark', null, null, null],
  //     [null, null, 'orangeDark', 'orangeLight', 'orange', 'orange', 'orange', 'orange', 'orangeDark', 'orangeDark', null, null],
  //     [null, null, 'white', 'whiteShade', 'white', 'white', 'white', 'white', 'gray', 'gray', null, null],
  //     [null, 'white', 'whiteShade', 'white', 'white', 'white', 'white', 'white', 'gray', 'gray', 'gray', null],
  //     [null, 'orangeDark', 'orangeLight', 'orange', 'orange', 'orange', 'orange', 'orange', 'orangeDark', 'orangeDark', 'orangeDark', null],
  //     ['orangeDark', 'orangeLight', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orangeDark', 'orangeDark', 'orangeDark'],
  //     ['white', 'whiteShade', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'gray', 'gray', 'gray'],
  //     ['white', 'whiteShade', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'gray', 'gray'],
  //     ['orangeDark', 'orangeLight', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orangeDark', 'orangeDark'],
  //     ['orangeDark', 'orangeLight', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orangeDark', 'orangeDark'],
  //     ['orangeDark', 'orangeLight', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orangeDark', 'orangeDark'],
  //   ];

  //   coneMap.forEach((row) => {
  //     const rowPixels = row.map((colorKey) => (colorKey ? coneColors[colorKey] : null));
  //     conePattern.push(rowPixels);
  //   });

  //   return conePattern;
  //}

  render() {
    const hazardPattern = this.buildHazardPattern();
    const pillarPattern = this.buildPillarPattern();
    // const conePattern = this.buildConePattern();

    return (
      <div className="pixel-art-container">
        <div className="pixelated-wrapper">
          <div className="pixel-group">
            {hazardPattern.map((row, rowIndex) => (
              <div key={rowIndex} className="pixel-row">
                {row.map((color, colIndex) => (
                  <div key={colIndex} className="pixel-cell" style={{ backgroundColor: color }} />
                ))}
              </div>
            ))}
          </div>

          <div className="pixel-gap-4" />

          <div className="pixel-group">
            {pillarPattern.map((row, rowIndex) => (
              <div key={rowIndex} className="pixel-row">
                {row.map((color, colIndex) => (
                  <div key={colIndex} className="pixel-cell" style={{ backgroundColor: color || 'transparent' }} />
                ))}
              </div>
            ))}
          </div>
          <div className='pixel-text'>in progress</div>

          {/* <div className="cone-right" style={{ width: `${hazardPattern[0].length * 8}px` }}>
            <div className="pixel-group">
              {conePattern.map((row, rowIndex) => (
                <div key={"cone" + rowIndex} className="pixel-row">
                  {row.map((color, colIndex) => (
                    <div key={`cone-${rowIndex}:${colIndex}`} className="pixel-cell" style={{ backgroundColor: color || 'transparent' }} />
                  ))}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
