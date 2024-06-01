'use client';
import React, { useState } from 'react';
import { ReviewsBG, ReviewsContainer, Title, CurrentReviewText, Reviewers, Reviewer } from './styles.js';

const REVIEWS = [
    {
        name: 'Deepa M',
        designation: 'Homemaker',
        review: `
            I couldn't be happier with the rainwater harvesting system installed by Nisarga Eco Consultants.
            Not only have we significantly reduced our reliance on BWSSB water, but my garden has never looked greener.
            The team was professional, knowledgeable, and made the entire process seamless.
            It's a great feeling to contribute to water conservation while also saving on our water bills!
        `
    },
    {
        name: 'Rahul SR',
        designation: 'CEO of GreenTech Industries',
        review: `
            Nisarga Eco Consultants conducted a comprehensive Energy Audit for our manufacturing facility, and the results were astounding.
            They identified key areas where we could improve our energy efficiency and reduce costs. 
            Thanks to their recommendations, we've seen a 25% reduction in our energy bills and a significant decrease in our 
            carbon footprint. Their expertise and dedication to sustainability are truly commendable.
        `
    },
    {
        name: 'Dr. Arpitha',
        designation: 'MD - Community Medicine',
        review: `
            The composting program implemented by Nisarga Eco Consultants has been a game-changer for our community. 
            We've diverted a substantial amount of organic waste from landfills and produced high-quality compost that we use 
            in our community garden. The educational workshops they provided were also fantastic, helping us and our community
            members understand the importance and benefits of composting.
        `
    }
]

export default function Reviews() {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(1); 
    const currentReview = REVIEWS[currentReviewIndex];

    const selectReview = (index) => {
        setCurrentReviewIndex(index);
    }

    return (
        <ReviewsBG>
            <ReviewsContainer>
                <Title><p>Our happy client stories</p></Title>

                <CurrentReviewText>
                    {currentReview.review}
                </CurrentReviewText>
                <Reviewers>
                    {
                        REVIEWS.map((review, index) => (
                            <Reviewer key={review.name} selected={(currentReviewIndex === index).toString()} onClick={() => selectReview(index)}>
                                <h6>{review.name}</h6>
                                <p>{review.designation}</p>
                            </Reviewer>
                        ))
                    }
                </Reviewers>
            </ReviewsContainer>
        </ReviewsBG>
    )
}
