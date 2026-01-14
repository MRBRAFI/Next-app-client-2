"use client";

const faqs = [
  {
    question: "How do I access my courses after purchase?",
    answer: "You can access all your purchased courses immediately from your Dashboard. Just log in and head over to the 'My Courses' section.",
  },
  {
    question: "Do I get a certificate of completion?",
    answer: "Yes! Every course on CourseVerse comes with a verified digital certificate that you can share on LinkedIn or your portfolio.",
  },
  {
    question: "Can I learn at my own pace?",
    answer: "Absolutely. Once you enroll, you have lifetime access to the course material, allowing you to learn whenever it fits your schedule.",
  },
  {
    question: "Is there a refund policy?",
    answer: "We offer a 30-day money-back guarantee if you're not satisfied with the course content, no questions asked.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-black">
      <div className="w-11/12 mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 open:border-purple-500/50"
            >
              <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-bold text-lg text-white group-open:text-purple-400">
                {faq.question}
                <span className="text-2xl transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-800/50 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
