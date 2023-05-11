import React, { useRef, useEffect } from 'react';

const CertificateList = ({ certificates }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [certificates]);

  return (
    <div ref={containerRef}>
      <h2>Certificates</h2>
      <ul>
        {certificates.map((certificate) => (
          <li key={certificate.id}>{certificate.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateList;
