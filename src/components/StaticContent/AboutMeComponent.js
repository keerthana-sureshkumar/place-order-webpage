import React from 'react';
import indexClasses from '../../index.css';
const AboutMeComponent = () => {
  return (
    <div
      className={[indexClasses.responsiveContainer, indexClasses.textLeft].join(
        ' '
      )}
    >
      <header
        className={[
          indexClasses.responsiveContainer,
          indexClasses.fontSize24,
          indexClasses.displayFlex,
          indexClasses.marginTop50,
          indexClasses.marginBottom20
        ].join(' ')}
      >
        <div>WELCOME to Deepti's Holistic KITCHEN</div>
      </header>
      <div className={indexClasses.responsiveRow}>
        <p>I am slowly transitioning from Whatsapp to this website</p>
        <p>
          Feel free to join my either of the my kitchen whatsapp groups &nbsp;
          <a
            target="_blank"
            href="https://chat.whatsapp.com/E1B1GGR6p8EF8RFZ5QPpAD"
          >
            https://chat.whatsapp.com/E1B1GGR6p8EF8RFZ5QPpAD
          </a>{' '}
        </p>
        <p>Help spread the word. Please share with friends 🥰</p>
        <p>
          🙋‍♂️First time patrons will receive my address and directions in a
          whatsapp message *on the phone number you listed in your order*
        </p>
        <header
          className={[
            indexClasses.responsiveContainer,
            indexClasses.fontSize18,
            indexClasses.displayFlex,
            indexClasses.marginTop50,
            indexClasses.marginBottom20
          ].join(' ')}
        >
          <div>About my Kitchen </div>
        </header>
        <ul className={indexClasses.styleUl}>
          <li>🌻Organic</li>
          <li>🌿Plant-based</li>
          <li>☘️GlutenFree</li>
          <li>🌱Soy-free </li>
          <li>
            ❤️Satvik. Entire menu is Prasadam (Onion/Garlic/Mushrooms used
            though)
          </li>
          <li>🩺 Cooked using Ayurvedic principals </li>
          <li> 👑Indian food, Freshly Prepared Each Morning</li>
          <li> 🏡Pick up opposite FHS (Folsom High School)</li>
          <li>🌺Custom/Party options available on request</li>
        </ul>
      </div>

      <header
        className={[
          indexClasses.responsiveContainer,
          indexClasses.fontSize18,
          indexClasses.displayFlex,
          indexClasses.marginTop50,
          indexClasses.marginBottom20
        ].join(' ')}
      >
        <div>REQUESTING FOOD </div>
      </header>
      <div className={indexClasses.responsiveRow}>
        <ul className={indexClasses.styleUl}>
          <li>🍯 Menu and pricing are posted on the website</li>
          <li>
            🫔 If you like to order anything, please order on this website{' '}
          </li>
          <li>🕘 Please remember to request latest by the night before. </li>
          <li>
            🙋‍♂️First time patrons will receive my address and directions in a
            whatsapp message *on the phone number you listed in your order*
          </li>
          <li>
            ✔️ After enjoying, feel free to leave a feedback in the main
            whatsapp group to help others make choices on what to order too
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AboutMeComponent;
