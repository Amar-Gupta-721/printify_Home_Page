import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="text-gray-800 px-4 lg:px-16 xl:px-40 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center pb-12">
        <div className="mb-6 md:mb-0">
          <img src="/logo.svg" alt="Printify Logo" className="h-10" />
        </div>
        <div className="flex space-x-3">
          <FaFacebookF className="bg-green-500 text-white rounded-full p-2 h-8 w-8" />
          <FaInstagram className="bg-green-500 text-white rounded-full p-2 h-8 w-8" />
          <FaTwitter className="bg-green-500 text-white rounded-full p-2 h-8 w-8" />
          <FaXTwitter className="bg-green-500 text-white rounded-full p-2 h-8 w-8" />
          <FaLinkedinIn className="bg-green-500 text-white rounded-full p-2 h-8 w-8" />
          <FaYoutube className="bg-green-500 text-white rounded-full p-2 h-8 w-8" />
          <FaTiktok className="bg-green-500 text-white rounded-full p-2 h-8 w-8" />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Integrations</h3>
            <ul className="text-sm space-y-4">
              <li>Shopify</li>
              <li>Etsy</li>
              <li>Amazon</li>
              <li>TikTok Shop</li>
              <li>PrestaShop</li>
              <li>BigCommerce</li>
              <li>Wix</li>
              <li>WooCommerce</li>
              <li>Squarespace</li>
              <li>Printify Pop-Up Store</li>
              <li>Shutterstock</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Discover</h3>
            <ul className="text-sm space-y-4">
              <li>Blog</li>
              <li>Guides</li>
              <li>Products</li>
              <li>Etsy Print-on-Demand</li>
              <li>Shopify Print-on-Demand</li>
              <li>WooCommerce Print-on-Demand</li>
              <li>Wix Print-on-Demand</li>
              <li>Squarespace Print-on-Demand</li>
              <li>Make Your Own Shirt</li>
              <li>Branding</li>
              <li>Shipping Rates</li>
              <li>Mockup Generator</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Start Selling</h3>
            <ul className="text-sm space-y-4">
              <li>Custom T-shirts</li>
              <li>Custom Hoodies</li>
              <li>Custom Mugs</li>
              <li>Custom Socks</li>
              <li>Custom Backpacks</li>
              <li>Custom Branding</li>
              <li>Sell on Etsy</li>
              <li>Sell on Social Media</li>
              <li>Free T-shirt Designs</li>
              <li>Custom All-Over-Print Hoodies</li>
              <li>Start a Clothing Line</li>
              <li>Bulk Orders</li>
              <li>Transferring to Printify</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Printify</h3>
            <ul className="text-sm space-y-4">
              <li>Print on Demand</li>
              <li>Print Providers</li>
              <li>Experts Program</li>
              <li>Printify Express Delivery</li>
              <li>Become a Partner</li>
              <li>Printify Quality Promise</li>
              <li>Jobs</li>
              <li>Webinars</li>
              <li>Printing Profits Podcast</li>
              <li>Contact Us</li>
              <li>Affiliate</li>
              <li>Contact Sales</li>
              <li>POD Glossary</li>
              <li>Network Fulfillment Status</li>
              <li>Merchant Protection</li>
              <li>Security</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
