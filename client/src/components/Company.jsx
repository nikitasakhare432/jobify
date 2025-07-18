import React, { useRef } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import paytm from '../assets/images/paytm.png';
import zomato from '../assets/images/zomato.png';
import google from '../assets/images/googlle.png';
import swiggy from '../assets/images/swiggy.png';
import tcs from '../assets/images/tcs.png';
import bajaj from '../assets/images/bajaj.png';
const companies = [
  {
    name: 'Bajaj Allianz Life Insurance',
    desc: 'Provider of life insurance and financial services.',
    logo: bajaj,
  },
  {
    name: 'Paytm Service Pvt. Ltd.',
    desc: 'Digital payment and e-commerce facilitator.',
    logo: paytm,
  },
  {
    name: 'Zomato',
    desc: 'Online food delivery marketplace.',
    logo: zomato,
  },
  {
    name: 'Swiggy',
    desc: 'Food delivery and grocery services.',
    logo: swiggy,
  },
  {
    name: 'Google',
    desc: 'Global leader in technology and consulting.',
    logo: google,
  },
  {
    name: 'Tata Consultancy Services',
    desc: 'IT services and business solutions provider.',
    logo: tcs,
  },
];

const Company = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <Wrapper>
      <h3>Job Openings In Top Companies</h3>

      <div className='scroll-wrapper'>
        <button className='arrow-btn left' onClick={scrollLeft}>
          <ChevronLeft />
        </button>

        <div className='companies-container' ref={scrollRef}>
          {companies.map((company, index) => (
            <div key={index} className='company-card'>
              <img src={company.logo} alt={company.name} />
              <h4>{company.name}</h4>
              <p>{company.desc}</p>
              <a href='/login' className='view-link'>View jobs</a>
            </div>
          ))}
        </div>

        <button className='arrow-btn right' onClick={scrollRight}>
          <ChevronRight />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: auto;
  text-align: center;

  h3 {
  color: #2cb1bc;
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left; /* <-- Align heading to left */
  }

  .scroll-wrapper {
    position: relative;

    .arrow-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: #fff;
      border: 1px solid #ccc;
      color:black;
      width: 32px;
      height: 32px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      cursor: pointer;
      transition: background-color 0.3s ease;

      svg {
        width: 16px;
        height: 16px;
      }

      &:hover {
        background-color: #2cb1bc;
        color: white;
      }
    }

    .left {
      left: 10px;
    }

    .right {
      right: 10px;
    }
  }

  .companies-container {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 1rem 2.5rem;
  }

  .company-card {
    flex: 0 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    padding: 1.5rem;
    width: 250px;
    text-align: left;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 80px;
      height: auto;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    .view-link {
      margin-top: 1rem;
      display: inline-block;
      color: #2cb1bc;
      font-weight: bold;
      text-decoration: none;
    }

    .view-link:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    .companies-container {
      padding: 1rem 1rem;
      gap: 1rem;
    }

    .arrow-btn {
      width: 28px;
      height: 28px;

      svg {
        width: 14px;
        height: 14px;
      }
    }
  }
`;

export default Company;
