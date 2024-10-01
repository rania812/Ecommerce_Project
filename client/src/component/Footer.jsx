import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdPlace } from 'react-icons/md';
import { SiVisa, SiPaypal, SiMastercard } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Colonne 1: Informations de contact */}
          <div className="col-md-4">
            <h5 className="mb-4">Contactez-nous</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><MdEmail className="me-2" /> contact@example.com</li>
              <li className="mb-3"><MdPhone className="me-2" /> +1234567890</li>
              <li><MdPlace className="me-2" /> 123 Rue Example, Ville, Pays</li>
            </ul>
          </div>
          
          {/* Colonne 2: Liens utiles */}
          <div className="col-md-4">
            <h5 className="mb-4">Liens utiles</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-light">Conditions d'utilisation</a></li>
              <li className="mb-3"><a href="#" className="text-light">Politique de confidentialité</a></li>
              <li><a href="#" className="text-light">FAQ</a></li>
            </ul>
          </div>
          
          {/* Colonne 3: Suivez-nous sur les réseaux sociaux */}
          <div className="col-md-4">
            <h5 className="mb-4">Suivez-nous</h5>
            <ul className="list-inline">
              <li className="list-inline-item me-3">
                <a href="#" className="text-light">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#" className="text-light">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#" className="text-light">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        {/* Méthodes de paiement */}
        <div className="row">
          <div className="col-md-12 text-center">
            <h5 className="mb-4">Méthodes de paiement</h5>
            <ul className="list-inline">
              <li className="list-inline-item me-3">
                <a href="https://visa.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <SiVisa size={32} />
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="https://paypal.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <SiPaypal size={32} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://mastercard.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <SiMastercard size={32} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




