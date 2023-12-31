import './global.css';
import React from 'react';

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <>{children}</>
      </body>
    </html>
  );
}
