import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { AiFillGolden } from 'react-icons/ai';
import { GiCutDiamond } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Program Options</h1>
          <div className='pricing__container'>
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Training with pro trainer</li>
                  <li>Acces to massage therapist</li>
                  <li>After training snack</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='green'>
                  Choose Plan
                </Button>
              </div>
            </div>
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <AiFillGolden />
                </div>
                <h3>Gold</h3>
                <h4>$49.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Training for sport of choice</li>
                  <li>Training with pro trainer</li>
                  <li>Acces to massage therapist</li>
                  <li>After training snack and drink</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </div>
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCutDiamond />
                </div>
                <h3>Diamond</h3>
                <h4>$89.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Training for 2 sports of choice</li>
                  <li>Training with pro trainer</li>
                  <li>Acces to massage therapist</li>
                  <li>After training meal</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;