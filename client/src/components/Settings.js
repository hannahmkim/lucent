import React from 'react';

function Settings(props) {
  let lightSpeed = 2;
  const {color, size} = props.state

  const increaseSpeed = () => {
    let lightElem = document.getElementById("elem");
    if (lightSpeed > 1) {
      lightSpeed -= 1;
    }
    lightElem.style = 'animation: ani ' + lightSpeed + 's infinite';
  };

  const decreaseSpeed = () => {
    let lightElem = document.getElementById("elem");
    lightSpeed += 1;
    lightElem.style = 'animation: ani ' + lightSpeed + 's infinite';
  }

  const changeShape = (className) => {
    let lightElem = document.getElementById("elem");
    let elemStyle = window.boom = lightElem.style.cssText.split(';');


    if (className.indexOf('square') > -1) {
      elemStyle.push('border-radius: 0');
    }

    if (className.indexOf('circle') > -1) {
      elemStyle.push('border-radius: 80px');
    }

    lightElem.style.cssText = elemStyle.join(';')
  }

  const onClickShape = (event) => {
    const el = event.target;

    const shapes = el.parentNode.querySelectorAll('span')
    shapes.forEach(item => {
      item.classList.remove('selected')
    });

    el.classList.add('selected');
    changeShape(el.className)
  }

  return (
    <section id="settings">
      <section id="settings-configure">
        <h2>Settings</h2>

        <section className="configuration" id="shape">
          <h3>Shape</h3>
          <span className="shape-circle selected" onClick={onClickShape}></span>
          <span className="shape-square" onClick={onClickShape}></span>
          <span className="shape-triangle"></span>
        </section>

        <section className="configuration">
          <h3>Color</h3>
        </section>

        <section className="configuration">
          <h3>Size</h3>
        </section>

        <section className="configuration">
          <h3>Distance</h3>
        </section>

        <section className="configuration">
          <h3>Speed</h3>

          <button id="increase-speed" onClick={increaseSpeed}> + Increase speed</button>
          <button id="decrease-speed" onClick={decreaseSpeed}> - Decrease speed</button>
        </section>

        <section className="configuration">
          <h3>Audio</h3>
        </section>
      </section>


      <div className="container">
        <div className="path">
          <span id="elem" className="shape circle trail" style={{backgroundColor: color}}></span>
        </div>
      </div>
    </section>
  );
}

export default Settings;