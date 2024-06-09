'use client';
import React, { useState } from 'react';
import { ReviewsBG, ReviewsContainer, Title, CurrentReviewText, Reviewers, Reviewer } from './styles.js';

const REVIEWS = [
    {
        name: 'Deepa M',
        designation: 'Homemaker, Bengaluru',
        review: [
            `I couldn't be happier with the rainwater harvesting system installed by Nisarga Eco Consultants.
            Not only have we significantly reduced our reliance on BWSSB water, but my garden has never looked greener.
            The team was professional, knowledgeable, and made the entire process seamless.
            It's a great feeling to contribute to water conservation while also saving on our water bills!
            `
        ]
    },
    {
        name: 'Sri Raghavendra Suhas',
        designation: 'IGP, Northern Range, Karnataka',
        review: [
            `Pradeep has made hard efforts and also made innovative out of the box thinking in Water Conservation.
            Their ideas were put to practice in Belgaum Club. It was demonstrated to Government officers and public.`,
            `Public were educated and awareness was created in water harvesting, water conservation, Environment protection. 
            The qualitative work has recharged groundwater table and improved moister content in the land. Wish him good luck 
            in future to do more innovative work in water conservation and Environment protection.`
        ]
    },
    {
        name: 'Dr. Prasanna Kumar',
        designation: 'Professor, RL Law College, Belagavi',
        review: [
            `My association with Shri Pradeep Nagamalli started with the requirement for a rainwater harvesting unit for my residential site.  The availability of space was a challenge to them and provided the impetus to develop a unique rainwater harvesting filtration unit.  Their yearlong research and hard work resulted in a versatile, vertical, innovative rainwater harvesting product that requires less space, minimal plumbing and no excavation or civil work.`,
            `The expert know how of P & V articulated in organising many programmes in and through my R. L. Law college.   Programmes like Water Survey (of Guruprasad Colony, Bhavani Nagar and Nityanand Nagar), Water conservation awareness programmes to National Service Scheme Volunteers and to the general public of kinaye village are organised.`,
            `I am looking forward to take this association forward to next level in creating, conserving forest.`
        ]
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
                    {currentReview.review.map(r => <p key={r}>{r}</p>)}
                </CurrentReviewText>
                <Reviewers>
                    {
                        REVIEWS.map((review, index) => (
                            <Reviewer key={review.name} selected={currentReviewIndex === index} onClick={() => selectReview(index)}>
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
