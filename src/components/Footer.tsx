import { Github, Twitter, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl">🛍️</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">GadgetVerse</h3>
                <p className="text-xs text-muted-foreground">Web3 Marketplace</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              The future of phone accessories shopping, powered by Hedera Hashgraph.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">All Products</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Audio</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Chargers</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Cases</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Track Order</li>
              <li className="hover:text-primary cursor-pointer transition-colors">NFT Receipts</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Secured by Hedera Hashgraph blockchain technology
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 GadgetVerse. All rights reserved. Built with Web3 technology.</p>
        </div>
      </div>
    </footer>
  );
};
