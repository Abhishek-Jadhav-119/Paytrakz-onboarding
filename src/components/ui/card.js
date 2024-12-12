import React from "react";

// Card container component
export function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

// Card header
export function CardHeader({ children, className = "" }) {
  return <div className={`card-header ${className}`}>{children}</div>;
}

// Card title
export function CardTitle({ children, className = "" }) {
  return <h2 className={`card-title ${className}`}>{children}</h2>;
}

// Card description
export function CardDescription({ children, className = "" }) {
  return <p className={`card-description ${className}`}>{children}</p>;
}

// Card content for the main section of the card
export function CardContent({ children, className = "" }) {
  return <div className={`card-content ${className}`}>{children}</div>;
}

// Card footer for additional actions or information
export function CardFooter({ children, className = "" }) {
  return <div className={`card-footer ${className}`}>{children}</div>;
}
