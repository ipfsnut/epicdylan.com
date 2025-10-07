import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hexagon, Code, ExternalLink } from 'lucide-react';

export const Web3Page: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
          <Hexagon className="w-10 h-10 text-purple-400" />
          Web3 & Blockchain
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Exploring decentralized technologies, DAOs, and the future of digital ownership
        </p>
      </div>

      <div className="space-y-8">
        {/* DAOs Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Hexagon className="w-6 h-6 text-purple-400" />
            DAOs
          </h2>
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-purple-300 font-semibold text-lg mb-2">PageDAO</h3>
              <p className="text-gray-300 mb-2">
                <span className="text-cyan-300 font-medium">Founder</span> • Web3 Writer's Organization
              </p>
              <p className="text-gray-300 mb-3">
                Founded in 2021, PageDAO is a decentralized autonomous organization focused on supporting writers and content creators in the Web3 space, fostering collaboration and innovation in digital publishing.
              </p>
              <a 
                href="https://pagedao.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Visit PageDAO
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-purple-300 font-semibold text-lg mb-2">PizzaDAO</h3>
              <p className="text-gray-300 mb-2">
                <span className="text-cyan-300 font-medium">Original Member</span> • Global Pizza Community
              </p>
              <p className="text-gray-300 mb-3">
                Founded in 2021, PizzaDAO is a global decentralized community that has given away over $1,000,000 worth of pizza across 80+ countries. The organization operates as a "DO-acracy" hosting annual Global Pizza Parties and creating NFT collections to support their mission of making "pizza free" worldwide.
              </p>
              <a 
                href="https://rarepizzas.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Visit PizzaDAO
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Code className="w-6 h-6 text-cyan-400" />
            Technologies
          </h2>
          <div className="space-y-6">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-cyan-300 font-semibold text-lg mb-2">Readme Books</h3>
              <p className="text-gray-300 mb-4">
                NFT book collection and marketplace platform • In continuous service since December 25, 2021
              </p>
              <div className="flex gap-3 flex-wrap">
                <a 
                  href="https://opensea.io/collection/readme-books" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  OpenSea Collection
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://mint.nftbookbazaar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Mint Page
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://pagedao.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  PageDAO
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};