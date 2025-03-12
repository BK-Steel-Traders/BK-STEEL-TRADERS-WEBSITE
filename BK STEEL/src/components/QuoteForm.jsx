import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    specifications: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          product: formData.product,
          quantity: formData.quantity,
          specifications: formData.specifications,
          subject: 'New Quote Request - BK Steel Traders',
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Quote request sent successfully! We will contact you soon.');
        resetForm();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback to mailto link
      window.location.href = getMailtoLink();
      toast.error('Redirecting to email client...');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      product: '',
      quantity: '',
      specifications: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateEmailBody = () => {
    return `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Product: ${formData.product}
Quantity: ${formData.quantity} tons
Specifications: ${formData.specifications}
    `.trim();
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent('Quote Request - BK Steel Traders');
    const body = encodeURIComponent(generateEmailBody());
    return `mailto:bksteeltraders@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-gray-900/50 p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2">Product Type</label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              placeholder="Enter product type (e.g., Steel Beams, Steel Bars)"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2">Quantity (in tons)</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block mb-2">Specifications</label>
          <textarea
            name="specifications"
            value={formData.specifications}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            placeholder="Please provide any specific requirements or details..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded flex items-center justify-center space-x-2 w-full transform transition ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
          }`}
        >
          <span>{isSubmitting ? 'Sending...' : 'Submit Quote Request'}</span>
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}

export default QuoteForm;