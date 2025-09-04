import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

const faqs = [
{ question: "How do I purchase a game?", answer: "Select the game you want, click 'Buy Now', complete the payment, and you'll have to send ss of the payment to confirm the order." },
{ question: "Can I request a refund?", answer: "Refunds are only available under certain conditions. In Most of the cases Replacement will be provided. Please contact support@gfz.com for assistance." },
{ question: "Is my payment secure?", answer: "Yes! We use trusted payment processors and never store your full payment details on our servers." },
{ question: "Do you offer bundles or discounts?", answer: "Yes! Bundles and discounts are available occasionally. Check our website or follow our instagram for updates." }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar/>

        <div className="max-w-4xl mx-auto px-4 py-10 text-zinc-700 min-h-[calc(100%-30%)]">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">Frequently Asked Questions</h1>

          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-zinc-700 pb-3">
              <h3
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer text-lg font-semibold transition-colors"
              >
                {faq.question}
              </h3>
              {openIndex === index && <p className="mt-2 text-zinc-500">{faq.answer}</p>}
            </div>
          ))}
        </div>

      <Footer/>
    </>
  )
}

export default Faq
