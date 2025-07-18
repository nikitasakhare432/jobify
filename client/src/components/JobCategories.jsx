// src/components/JobCategories.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
    'Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'Data Analyst',
    'Marketing Specialist',
    'Product Manager',
    'UI/UX Designer',
    'DevOps Engineer',
    'QA Tester',
    'Business Analyst',
];

const JobCategories = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <Wrapper>
            <h3>Explore Job Categories</h3>
            <div className="slider-container">
                <button className="scroll-btn left" onClick={() => scroll('left')}>
                    <ChevronLeft />
                </button>
                <div className="categories-container" ref={scrollRef}>
                    {categories.map((category, index) => (
                        <div className="category-card" key={index}>
                            {category}
                        </div>
                    ))}
                </div>
                <button className="scroll-btn right" onClick={() => scroll('right')}>
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

  .slider-container {
    position: relative;
    margin-top: 2rem;
  }

  .categories-container {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding: 1rem;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  .categories-container::-webkit-scrollbar {
    display: none;
  }

  .category-card {
    min-width: 200px;
    background: #f8f9fa;
    border-radius: 10px;
    padding: 1.5rem;
    font-weight: bold;
    color: #333;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }

  .category-card:hover {
    transform: translateY(-5px);
    background: #e6f7f8;
    color: #2cb1bc;
  }

  .scroll-btn {
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

  }

  .scroll-btn.left {
    left: -20px;
  }

  .scroll-btn.right {
    right: -20px;
  }

  @media (max-width: 768px) {
    .scroll-btn {
      display: none;
    }
  }
`;

export default JobCategories;
