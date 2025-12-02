import React, { useState, useEffect } from 'react';

interface ObfuscatedMailProps {
  user?: string;
  domain?: string;
  className?: string;
  icon?: React.ReactNode;
  showText?: boolean;
}

const ObfuscatedMail: React.FC<ObfuscatedMailProps> = ({ 
  user = 'info', 
  domain = 'asistir-srl.com.ar', 
  className = '',
  icon,
  showText = true
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isClient) {
      // Using window.open allows the browser to handle the protocol handler (mailto)
      // without unloading the current page application context in some environments.
      window.open(`mailto:${user}@${domain}`, '_self');
    }
  };
  
  return (
    <a 
      href="#"
      onClick={handleClick}
      className={`${className} cursor-pointer`}
      aria-label="Enviar correo electrónico"
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {showText && (
        <span>
          {user}
          <span style={{ display: 'none' }}>-no-spam-</span>
          @{domain}
        </span>
      )}
    </a>
  );
};

export default ObfuscatedMail;