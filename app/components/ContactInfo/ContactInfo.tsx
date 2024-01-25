import React from 'react'
import styles from './ContactInfo.css';

const ContactInfo: React.FC = () => {
  return (
    <div className='contact-info'>
        <section>
            <h2>
                We are open from Mon to Fri 7:00 - 17:00
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est vitae error, voluptates sapiente fugit repellat tempore reprehenderit perferendis placeat. Totam deleniti, sunt blanditiis incidunt, magni necessitatibus facilis maiores explicabo commodi cumque obcaecati. Fuga non esse in dolor natus quae, voluptatibus cum praesentium facere asperiores ducimus harum eum laboriosam ad ipsum!
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, reiciendis ea rem rerum, beatae in voluptates repellat id nostrum fugit optio distinctio earum aut quibusdam deserunt ratione dolorum sequi omnis!</p>
        </section>
        <section>
            <h2>Feel free also to contact us by phone!</h2>
            <div className="phones">
                <a href='tel:123123123'>123123123</a>
                <a href='tel:123123123'>123123123</a>
            </div>
        </section>
    </div>
  )
}

export const links = () => ([
    { rel: 'stylesheet', href: styles }
])

export default ContactInfo