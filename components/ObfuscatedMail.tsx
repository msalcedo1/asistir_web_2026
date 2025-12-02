import React, { useState, useEffect } from 'react';

interface ObfuscatedMailProps {
  user?: string;
  domain?: string;
  className?: string;
  icon?: React.ReactNode;
  label?: string;
}

const ObfuscatedMail: React.FC<ObfuscatedMailProps> = ({ 
  user = 'info', 
  domain = 'asistir-srl.com.ar', 
  className = '',
  icon,
  label
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isClient) {
      window.open(`mailto:${user}@${domain}`, '_self');
    }
  };
  
  return (
    <a 
      href="javascript:void(0)"
      onClick={handleClick}
      className={`${className} cursor-pointer`}
      aria-label="Enviar correo electrónico"
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {label ? (
        <span>{label}</span>
      ) : (
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