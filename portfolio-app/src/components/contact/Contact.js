import React from 'react'

const Contact = () => {
  return (
    <section className="contactsection" id="contact">
        <h2 className="section_titile">Get in touch</h2>
        <span className="section_subtitle">Contact me</span>

        <div className=" contact_container container grid">
            <div className='contact__content'>
                <h3 className='"contact_title'>Talk to me</h3>
                <div className='"contact__info'>
                    <div className='contact_card'>
                        <i className="bx bx cpmtact__card-icon" />
                        <h3 className='"contact__card-title'></h3>
                        <span className="contact__card-data>"></span>
                        <a href="" className='contact__button'>Write to me</a>

                    </div>

                </div>
            </div>

        </div>

      </section>
  )
}

export default Contact