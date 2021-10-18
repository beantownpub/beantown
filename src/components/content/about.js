import React from 'react'
import { InfoSection } from './common'
const CONFIG = require('./config.json')
const COLORS = CONFIG.colors

const FAQ = () => {
    return (
        <section>
            <h3>Frequently Asked Questions</h3>
            <h4>Do you accept credit cards yes?</h4>
            <p>Yes.</p>
            <h4>Do you take reservations?</h4>
            <p>No, but we do offer private parties for larger gatherings.</p>
            <h4>What time do you serve food 'til?</h4>
            <p>12:00 am, though subject to change based on demand.</p>
            <h4>Is the bar 21 plus?</h4>
            <p>Before 6:00 pm all ages are welcome, after 6:00 21 plus only.</p>
            <h4>How many t.v.s do you have?</h4>
            <p>A lot! There are two large projection screens in the main pool area and many big screens scattered throughout the rest of the bar.</p>
            <h4>Can you put my game on?</h4>
            <p>Most likely, if it's available.</p>
            <h4>Do you have takeout?</h4>
            <p>Yes</p>
            <h4>How much does pool cost?</h4>
            <p>Pool tables are coin operated and are &#36;2.00 a game, there are change machines located in the pool area. Pool tables are first come first serve.</p>
            <h4>Can I have a job?</h4>
            <p>If you would like to apply for a job please come see us in person.</p>
        </section>
    )
}

export const AboutInfo = () => {
    return (
        <div>
            <InfoSection bgColor={COLORS.yellow} marginTop='3rem'>
                <section>
                    <h1>See Yah Laatah&trade;!</h1>
                    <article>
                        Nestled in the heart of downtown Boston and conveniently located on the famous Freedom Trail, Beantown is a classic American pub
                        offering a casual drinking atmosphere and fine pub dining. Whether you’re looking for an ice cold beer after work, a great place
                        to meet friends, or somewhere to feel at home while you’re traveling - Beantown Pub is the place to be!
                    </article>
                </section>
            </InfoSection>
            <InfoSection bgColor={COLORS.darkGray} fontColor={COLORS.yellow}>
                <FAQ/>
            </InfoSection>
        </div>
    )
}
